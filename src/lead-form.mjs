// Lead forms. One builder, five shapes, all handled by assets/js/lead.js and
// all landing in George's Follow Up Boss through the george-fub-lead function
// (the FUB key stays in that function; nothing secret is in this file).
//
//   contact   — /contact/: who they are and what they want
//   showing   — listing pages: see this property (carries the listing facts)
//   valuation — /sell/ and the home page: what is my place worth
//   buyer     — /buy/: what they are hunting for
//   note      — the band at the foot of every other page: a quick note
//
// The off-market list at /pocket/ keeps its own form and pocket.js, because
// it also writes the consent record to pocket_signups.
import { AGENT } from './config.mjs'
import { POCKET } from './content/pocket.mjs'

// The exact words they tick, stored with the lead so consent is provable.
export const LEAD_SMS_CONSENT =
  'I agree that George Winters and The Operative Group may contact me by call, text and email about my real estate inquiry, including with an autodialer. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to opt out.'

// Own copy of esc: templates.mjs imports this file for the footer band.
const esc = (s) => String(s ?? '')
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

const field = (label, input, req = false) =>
  // The text sits in one span: the label is a grid, so a bare asterisk span
  // would drop onto a row of its own.
  `<label><span>${label}${req ? ' <span class="req" aria-hidden="true">*</span>' : ''}</span>
          ${input}
        </label>`

const nameRow = `<div class="pf-row">
        ${field('First name', '<input type="text" name="first_name" autocomplete="given-name" required maxlength="80">', true)}
        ${field('Last name', '<input type="text" name="last_name" autocomplete="family-name" maxlength="80">')}
      </div>`
const contactRow = `<div class="pf-row">
        ${field('Email', '<input type="email" name="email" autocomplete="email" maxlength="160" inputmode="email">')}
        ${field('Phone', '<input type="tel" name="phone" autocomplete="tel" maxlength="30" inputmode="tel">')}
      </div>
      <p class="pf-hint">An email or a phone number, whichever you would rather hear back on.</p>`
const message = (label, ph) =>
  field(label, `<textarea name="message" rows="3" maxlength="2000" placeholder="${esc(ph)}"></textarea>`)
const opts = (list) => list.map((o) => `<option>${esc(o)}</option>`).join('')

const FIELDS = {
  contact: () => `${nameRow}
      ${contactRow}
      ${field('I am mostly', `<select name="intent"><option value="">—</option>${opts(['Buying', 'Selling', 'Buying and selling', 'Just curious about the valley'])}</select>`)}
      ${message('What is on your mind?', 'A place in Vida I keep driving past. What a well test costs. Whether now is a good time to sell.')}`,

  showing: (l) => `${nameRow}
      ${contactRow}
      ${field('When suits you?', '<input type="text" name="times" maxlength="200" placeholder="Saturday morning, or weekdays after 4">')}
      ${message('Questions about the property?', 'How old is the septic? Is the shop wired 220?')}
      <input type="hidden" name="listing_address" value="${esc(l.address)}">
      <input type="hidden" name="listing_city" value="${esc(l.city)}">
      <input type="hidden" name="listing_state" value="${esc(l.state)}">
      <input type="hidden" name="listing_zip" value="${esc(l.zip)}">
      <input type="hidden" name="listing_mls" value="${esc(l.mls || '')}">
      <input type="hidden" name="listing_price" value="${esc(l.price || '')}">
      <input type="hidden" name="listing_slug" value="${esc(l.slug)}">`,

  valuation: () => `${nameRow}
      ${contactRow}
      ${field('Property address', '<input type="text" name="property_address" autocomplete="street-address" required maxlength="200" placeholder="91234 McKenzie Hwy, Vida">', true)}
      ${field('Thinking about selling', `<select name="timeline"><option value="">—</option>${opts(['Now', 'In the next 3 months', '3 to 12 months', 'Just want to know the number'])}</select>`)}
      ${message('Anything I should know about it?', 'Frontage, a shop, a new roof, a septic that needs work.')}`,

  buyer: () => `${nameRow}
      ${contactRow}
      ${field('Where do you want to be?', '<input type="text" name="areas" maxlength="400" placeholder="Walterville to Blue River, riverfront if possible">')}
      <div class="pf-row">
        ${field('Top of your budget', '<input type="number" name="price_max" min="0" max="99999999" step="1000" placeholder="450000" inputmode="numeric">')}
        ${field('Timeline', `<select name="timeline"><option value="">—</option>${opts(POCKET.timelines)}</select>`)}
      </div>
      ${message('What has to be true about it?', 'A shop, flat ground for a garden, no HOA, close enough to Springfield to commute.')}`,

  note: () => `${nameRow}
      ${contactRow}
      ${message('What can I help with?', 'Buying, selling, or a question about the valley.')}`,
}

const BUTTON = {
  contact: 'Send to George',
  showing: 'Ask for a showing',
  valuation: 'Get my number',
  buyer: 'Start my search',
  note: 'Send to George',
}

const DONE = {
  contact: ['Got it — I will be in touch.', 'I read these myself. Expect a reply from me, usually the same day.'],
  showing: ['Got it — let us find a time.', 'I will reach out to set the showing, usually the same day. Since 2024 I need a short written buyer agreement before we tour; I will send it ahead so there is no surprise at the door.'],
  valuation: ['Got it — I will run the numbers.', 'I will pull the comps and the county records, then reach out to walk the place. A real number takes a visit; it is free and there is no obligation.'],
  buyer: ['Got it — the hunt is on.', 'I will reach out to go over what you told me, then send what fits, including what has not hit the portals yet.'],
  note: ['Got it — I will be in touch.', 'I read these myself. Expect a reply from me, usually the same day.'],
}

export function leadForm(kind, listing = null) {
  const [doneH, doneP] = DONE[kind]
  return `<form class="pocket-form lead-form" data-lead="${kind}" data-endpoint="${POCKET.fubUrl}" novalidate>
      ${FIELDS[kind](listing)}
      <label class="pf-check">
        <input type="checkbox" name="sms_consent" value="1">
        <span>${esc(LEAD_SMS_CONSENT)}</span>
      </label>
      <!-- spam trap: real people never fill this in -->
      <div class="pf-hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>
      <button type="submit" class="btn btn-solid pf-submit">${BUTTON[kind]}</button>
      <p class="pf-error" role="alert" hidden></p>
      <p class="fineprint">Goes straight to ${esc(AGENT.name)} (${esc(AGENT.brokerage)}, ${esc(AGENT.license)}). Never sold or handed to a lead vendor. Equal Housing Opportunity.</p>
    </form>
    <div class="pf-done lead-done" hidden>
      <span class="kicker">Sent</span>
      <h2>${esc(doneH)}</h2>
      <p class="lede">${esc(doneP)}</p>
      <div class="btn-row">
        <a class="btn btn-solid" href="${AGENT.bookUrl}" rel="noopener">Book a time instead of waiting</a>
        <a class="btn btn-ghost" href="${AGENT.phoneHref}">Call ${esc(AGENT.phone)} now</a>
      </div>
    </div>`
}

// Intro on the left, form on the right, stacked on phones.
export const leadSection = (kind, { kicker, heading, lede, points = [] }, listing = null, cls = 'band') => `
<section class="${cls}" id="get-in-touch"><div class="wrap">
  <div class="pocket-form-wrap">
    <div class="pf-intro">
      <span class="kicker">${esc(kicker)}</span>
      <h2>${esc(heading)}</h2>
      <p class="lede">${lede}</p>
      ${points.length ? `<ul class="checks pf-points">${points.map((p) => `<li><span>${p}</span></li>`).join('')}</ul>` : ''}
    </div>
    <div>${leadForm(kind, listing)}</div>
  </div>
</div></section>`
