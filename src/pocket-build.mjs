// /pocket/ — off-market registration. Built by build.mjs.
import { AGENT, url } from './config.mjs'
import { shell, esc, riverLine, currentLines, crumbs, crumbSchema } from './templates.mjs'
import { POCKET } from './content/pocket.mjs'

const opts = (list) => list.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join('')

export function buildPocket(emit) {
  const page = {
    path: '/pocket/',
    title: "Off-Market Property up the McKenzie | George Winters' Private List",
    description:
      'Most of what sells on the McKenzie River corridor never reaches a portal. Register for George Winters’ off-market list — estates, pre-market listings and quiet sellers from Springfield to McKenzie Bridge.',
    h1: 'Off-market',
  }
  const trail = [{ label: 'Off-market', href: '/pocket/' }]

  const body = `
${crumbs(trail)}
<section class="listing-hero pocket-hero">${currentLines}
  <div class="wrap">
    <div class="lh-text">
      <span class="kicker rise">The private list</span>
      <h1 class="rise">The best places up here never make it to a portal.</h1>
      <p class="lede rise">An estate that wants a quiet sale. A neighbor who is finally ready but will not put a sign up. A cabin that would get picked apart by out-of-area buyers if it ever went public. Those sell on a phone call — and the only way to be on that call is to be on the list before the property exists.</p>
      <div class="rise"><a class="btn btn-solid" href="#register">Get on the list</a> <a class="btn btn-ghost" href="#how">How it works</a></div>
    </div>
    <figure class="lh-photo rise">
      <img src="${url('/assets/img/mckenzie-river-3.jpg')}" alt="The McKenzie River corridor, Lane County, Oregon" width="1600" height="1067" fetchpriority="high">
    </figure>
  </div>
</section>

<section class="band" id="how"><div class="wrap">
  <span class="kicker">How it works</span>
  <h2>Three steps, and the last one is the good part.</h2>
  ${riverLine}
  <ol class="steps">
    <li>
      <h3>Tell me what you are hunting</h3>
      <p>The stretch of the corridor you want, the number you can work with, and whether well-and-septic scares you. That is genuinely enough for me to know what to call you about. Two minutes on the form below.</p>
    </li>
    <li>
      <h3>We put an agreement in writing</h3>
      <p>Before I show you off-market property, I will send a buyer representation agreement to read and sign. It says what I do for you, how I am paid, and that I am working for you rather than the seller. Since August 2024 a written agreement is required before a tour anyway — out here it also buys you the part that matters: a broker who will tell you the truth about a parcel instead of selling you one.</p>
    </li>
    <li>
      <h3>You see it before it is public</h3>
      <p>Address, photos, numbers, and my read on what is wrong with it — while there is still room to negotiate, and before thirty other people have an opinion. Some of these never reach the MLS at all.</p>
    </li>
  </ol>
</div></section>

<section class="band band-tint"><div class="wrap">
  <span class="kicker">What lands on the list</span>
  <h2>Where quiet inventory actually comes from.</h2>
  <div class="feat-grid">
    <div class="feat-col"><h3>Estates &amp; family sales</h3><ul>
      <li>Heirs who want it handled privately</li>
      <li>Property sold before probate closes</li>
      <li>Family land changing hands</li>
    </ul></div>
    <div class="feat-col"><h3>Pre-market</h3><ul>
      <li>Owners getting a house ready to list</li>
      <li>Sellers testing a number first</li>
      <li>Coming-soon inventory a few days early</li>
    </ul></div>
    <div class="feat-col"><h3>Quiet sellers</h3><ul>
      <li>Second homes and cabins up the river</li>
      <li>Owners who do not want a sign in the yard</li>
      <li>People who will only sell to the right buyer</li>
    </ul></div>
    <div class="feat-col"><h3>Park &amp; small-dollar</h3><ul>
      <li>Park models and manufactured homes</li>
      <li>Units that trade by word of mouth</li>
      <li>Cash-buyer inventory under $150k</li>
    </ul></div>
  </div>
  <p class="fineprint">What is on the list changes week to week, and specifics stay off this page on purpose — that is the deal I make with a seller who wants a quiet sale. Register and I will tell you what I have.</p>
</div></section>

<section class="band" id="register"><div class="wrap">
  <div class="pocket-form-wrap">
    <div class="pf-intro">
      <span class="kicker">Register</span>
      <h2>Get on the list.</h2>
      <p class="lede">No drip campaign, no portal spam. I call when something fits what you told me.</p>
      <ul class="checks pf-points">
        <li><span>Your information stays with me and The Operative Group — it is never sold or handed to a lead vendor.</span></li>
        <li><span>Nothing here commits you to buy anything.</span></li>
        <li><span>If you are already working with another broker, say so in the notes and I will stay out of it.</span></li>
      </ul>
    </div>

    <form class="pocket-form" id="pocketForm" novalidate>
      <div class="pf-row">
        <label>First name <span class="req" aria-hidden="true">*</span>
          <input type="text" name="first_name" autocomplete="given-name" required maxlength="80">
        </label>
        <label>Last name
          <input type="text" name="last_name" autocomplete="family-name" maxlength="80">
        </label>
      </div>
      <div class="pf-row">
        <label>Email <span class="req" aria-hidden="true">*</span>
          <input type="email" name="email" autocomplete="email" required maxlength="160" inputmode="email">
        </label>
        <label>Phone <span class="req" aria-hidden="true">*</span>
          <input type="tel" name="phone" autocomplete="tel" required maxlength="30" inputmode="tel">
        </label>
      </div>
      <label>Where do you want to be?
        <input type="text" name="areas" maxlength="400" placeholder="Walterville to Blue River, riverfront if possible">
      </label>
      <div class="pf-row">
        <label>Top of your budget
          <input type="number" name="price_max" min="0" max="99999999" step="1000" placeholder="450000" inputmode="numeric">
        </label>
        <label>Timeline
          <select name="timeline"><option value="">—</option>${opts(POCKET.timelines)}</select>
        </label>
      </div>
      <label>How are you paying?
        <select name="financing"><option value="">—</option>${opts(POCKET.financings)}</select>
      </label>
      <label>Anything else I should know?
        <textarea name="notes" rows="3" maxlength="2000" placeholder="Must have a shop. Already pre-approved. Working with a lender at ..."></textarea>
      </label>

      <label class="pf-check">
        <input type="checkbox" name="sms_consent" value="1">
        <span>${esc(POCKET.smsConsentText)}</span>
      </label>
      <label class="pf-check">
        <input type="checkbox" name="agreement_ack" value="1" required>
        <span>${esc(POCKET.agreementAckText)} <span class="req" aria-hidden="true">*</span></span>
      </label>

      <!-- spam trap: real people never fill this in -->
      <div class="pf-hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>

      <button type="submit" class="btn btn-solid pf-submit">Get on the list</button>
      <p class="pf-error" id="pfError" role="alert" hidden></p>
      <p class="fineprint">By registering you are asking George Winters (${esc(AGENT.brokerage)}, ${esc(AGENT.license)}) to contact you about property. You are not hiring him yet and you are not agreeing to buy anything. Equal Housing Opportunity.</p>
    </form>

    <div class="pf-done" id="pfDone" hidden>
      <span class="kicker">You are on the list</span>
      <h2>Got it — I will be in touch.</h2>
      <p class="lede">I read these myself. Expect a call or text from <strong>${esc(AGENT.phone)}</strong>, usually the same day.</p>
      <ol class="steps">
        <li><h3>I call you</h3><p>Ten minutes to understand what you actually want, and to tell you honestly whether I have anything close.</p></li>
        <li><h3>Agreement to sign</h3><p>I send the buyer representation agreement by email. Read it, ask me anything, sign it electronically.</p></li>
        <li><h3>You get the list</h3><p>Addresses, photos and numbers on what I have that fits — plus a heads-up before anything new goes public.</p></li>
      </ol>
      <div class="btn-row">
        <a class="btn btn-solid" href="${AGENT.bookUrl}" rel="noopener">Book a time instead of waiting</a>
        <a class="btn btn-ghost" href="${AGENT.phoneHref}">Call ${esc(AGENT.phone)} now</a>
      </div>
    </div>
  </div>
</div></section>

<section class="band band-tint"><div class="wrap">
  <span class="kicker">Straight answers</span>
  <h2>Before you ask.</h2>
  <div class="faq">
    <details><summary>Why do I have to sign anything to see a house?</summary><p>Because since August 2024 a written buyer agreement is required before a broker tours a property with you — that is national, not a George rule. The upside is that it makes clear I represent you, not the seller, and it puts in writing what I am paid and by whom.</p></details>
    <details><summary>Does it lock me in forever?</summary><p>No. The term and the scope are both negotiable, and I am happy to start narrow — one property, or a short window — if that is what you are comfortable with. Read it, change what you want changed, then sign it.</p></details>
    <details><summary>What does it cost me?</summary><p>In most transactions out here the seller still covers the buyer broker's compensation, but that is now negotiated deal by deal rather than assumed. The agreement states the number so there is no surprise at closing. If a particular seller will not cover it, you will know that before we tour, not after.</p></details>
    <details><summary>Will you spam me?</summary><p>No. I am not running a drip campaign. You will hear from me when something fits what you told me, and you can tell me to stop at any time.</p></details>
    <details><summary>Why are the addresses not just on this page?</summary><p>Because a seller who wants a quiet sale gets a quiet sale. Publishing a specific off-market property publicly would defeat the reason it is off-market in the first place — and in real estate it triggers MLS filing rules. So it goes to the list, not the website.</p></details>
    <details><summary>I live out of the area. Does that matter?</summary><p>Not at all — a good share of the corridor sells to people from out of the valley. I will do the first walk-through on video and tell you what I would check if it were mine.</p></details>
  </div>
</div></section>

<script>window.__pocket=${JSON.stringify({ url: POCKET.supabaseUrl, key: POCKET.supabaseKey, table: POCKET.table, fubUrl: POCKET.fubUrl, sms: POCKET.smsConsentText, ack: POCKET.agreementAckText })};</script>
<script src="${url('/assets/js/pocket.js')}" defer></script>`

  emit('/pocket/', shell(page, body, [crumbSchema(trail)]))
}
