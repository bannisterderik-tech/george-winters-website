// george-fub-lead: hands an off-market registration from
// mckenzieriverrealestate.com to George's Follow Up Boss.
//
// Deployed to the Operative Group Supabase project (ihtulpiskizqofyhxsux), the
// same project that holds pocket_signups. The /pocket/ form posts to both: the
// table keeps the provable consent record, this gets the lead in front of
// George. Self-contained on purpose.
//
// The key lives in the GEORGE_FUB_API_KEY secret and never leaves this
// function. Leads go through /v1/events, not /v1/people, because that is what
// fires FUB's lead routing and action plans.

const ALLOWED_ORIGINS = [
  'https://mckenzieriverrealestate.com',
  'https://www.mckenzieriverrealestate.com',
  'https://bannisterderik-tech.github.io',
]
const isAllowed = (o: string) =>
  ALLOWED_ORIGINS.includes(o) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(o)

function cors(origin: string): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': isAllowed(origin) ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  }
}

function json(body: unknown, origin: string, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors(origin), 'Content-Type': 'application/json' },
  })
}

// Per-IP cap. In-memory, so it resets on cold start; it only has to stop a
// burst, the form's own honeypot stops the rest.
const hits = new Map<string, { n: number; until: number }>()
function limited(ip: string) {
  const now = Date.now()
  const h = hits.get(ip)
  if (!h || h.until < now) { hits.set(ip, { n: 1, until: now + 3600_000 }); return false }
  return ++h.n > 20
}

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : typeof v === 'number' ? String(v) : '')

Deno.serve(async (req) => {
  const origin = req.headers.get('Origin') || ''
  if (req.method === 'OPTIONS') return new Response(null, { headers: cors(origin) })
  if (req.method !== 'POST') return json({ ok: false, error: 'POST only' }, origin, 405)
  if (origin && !isAllowed(origin)) return json({ ok: false, error: 'Origin not allowed' }, origin, 403)

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'
  if (limited(ip)) return json({ ok: false, error: 'Too many requests' }, origin, 429)

  const key = Deno.env.get('GEORGE_FUB_API_KEY')
  if (!key) {
    console.error('[george-fub-lead] GEORGE_FUB_API_KEY is not set')
    return json({ ok: false }, origin, 500)
  }

  // Same row pocket.js sends to pocket_signups.
  const b = await req.json().catch(() => ({})) as Record<string, unknown>
  const firstName = str(b.first_name)
  const lastName = str(b.last_name)
  const email = str(b.email)
  const phone = str(b.phone)
  if (!firstName || (!email && !phone)) {
    return json({ ok: false, error: 'first_name and an email or phone are required' }, origin, 400)
  }
  const sms = b.sms_consent === true

  const price = Number(b.price_max)
  const lines = [
    'OFF-MARKET LIST SIGN-UP',
    str(b.areas) && 'Areas: ' + str(b.areas),
    price > 0 && 'Up to: $' + price.toLocaleString('en-US'),
    str(b.timeline) && 'Timeline: ' + str(b.timeline),
    str(b.financing) && 'Financing: ' + str(b.financing),
    str(b.notes) && 'Notes: ' + str(b.notes),
    sms
      ? 'Call/text consent: YES, ' + (str(b.consent_at) || new Date().toISOString())
      : 'Call/text consent: NO, do not call or text',
    str(b.consent_text) && 'Agreed to: "' + str(b.consent_text) + '"',
  ].filter(Boolean)

  const person: Record<string, unknown> = {
    firstName,
    lastName: lastName || undefined,
    emails: email ? [{ value: email }] : undefined,
    phones: phone ? [{ value: phone }] : undefined,
    tags: ['website', 'off-market', sms ? 'sms-consent' : 'no-sms-consent'],
  }
  // Optional: only needed if George's key is for a shared account where lead
  // flow would otherwise send this to someone else.
  const assignedUserId = Number(Deno.env.get('GEORGE_FUB_ASSIGNED_USER_ID') || '') || undefined
  const assignedTo = Deno.env.get('GEORGE_FUB_ASSIGNED_TO') || undefined
  if (assignedUserId) person.assignedUserId = assignedUserId
  else if (assignedTo) person.assignedTo = assignedTo

  const r = await fetch('https://api.followupboss.com/v1/events', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa(key + ':'),
      'Content-Type': 'application/json',
      'X-System': 'McKenzieRiverRealEstateWebsite',
    },
    body: JSON.stringify({
      source: 'mckenzieriverrealestate.com',
      system: 'McKenzieRiverRealEstateWebsite',
      type: 'Registration',
      message: lines.join(' | '),
      description: 'mckenzieriverrealestate.com' + (str(b.page_path) || '/pocket/') + ' (off-market)',
      person,
    }),
  })
  if (r.status === 200 || r.status === 201) return json({ ok: true }, origin)

  // 204 means the lead flow for this source is archived and FUB threw the
  // lead away. That is a failure, not a thank-you.
  if (r.status === 204) {
    console.error('[george-fub-lead] FUB returned 204: lead flow for source mckenzieriverrealestate.com is archived, lead dropped')
  } else {
    console.error('[george-fub-lead] FUB rejected the event:', r.status, (await r.text()).slice(0, 500))
  }
  return json({ ok: false }, origin, 502)
})
