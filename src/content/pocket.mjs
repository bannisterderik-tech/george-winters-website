// Off-market / "pocket listing" registration.
//
// Submissions go to the Operative Group Supabase project (the same project the
// ISA works leads in), table public.pocket_signups. That table is insert-only
// for the anon key: the website can add a registration and cannot read one
// back, so publishing this key is safe. Registrations are promoted into
// public.leads by hand, because that table mirrors Follow Up Boss.
//
// ── A COMPLIANCE NOTE, DELIBERATELY IN THE SOURCE ───────────────────────────
// This page markets GEORGE'S SERVICE — early access to off-market opportunity —
// and never a specific unlisted property. Publicly advertising a particular
// off-market listing (address, photos, "2 bed in Blue River, $240k") is public
// marketing under NAR's Clear Cooperation Policy and starts a one-business-day
// clock to file it with RMLS. Keep property specifics behind the registration
// and out of this site's HTML. If George wants named inventory on a public
// page, that is a conversation with his principal broker first.
// ────────────────────────────────────────────────────────────────────────────

export const POCKET = {
  supabaseUrl: 'https://ihtulpiskizqofyhxsux.supabase.co',
  // Publishable (anon) key — safe in client code; RLS allows insert only.
  supabaseKey: 'sb_publishable_iAYm8Fu4CcqVryO_6KTw0g_xN0p_Gag',
  table: 'pocket_signups',

  // The exact wording stored with each registration, so consent is provable
  // later. Change the text and the stored copy changes with it.
  smsConsentText:
    'I agree that George Winters and The Operative Group may contact me by call, text and email about off-market and on-market property, including with an autodialer. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out.',
  agreementAckText:
    'I understand that before George shows me an off-market property, he will send a written buyer representation agreement to review and sign.',

  timelines: ['Ready now', 'Next 3 months', '3–6 months', '6–12 months', 'Just watching'],
  financings: ['Cash', 'Conventional', 'FHA or VA', 'Chattel (park model / manufactured)', 'Not sure yet'],
}
