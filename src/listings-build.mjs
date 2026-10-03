// Listing pages — /listings/ and /listings/<slug>/
// Imported by build.mjs, which passes in its emit().
import fs from 'node:fs'
import { AGENT, url, abs } from './config.mjs'
import { shell, esc, riverLine, currentLines, crumbs, crumbSchema } from './templates.mjs'
import { LISTINGS, PUBLIC_STATUSES, STATUS_LABEL } from './content/listings.mjs'
import { AREAS } from './content/areas.mjs'

const PHOTO_DIR = 'assets/img/listings'

export const isPublic = (l) => PUBLIC_STATUSES.includes(l.status)

const money = (n) => n == null ? null : '$' + n.toLocaleString('en-US')
const num = (n) => n == null ? null : n.toLocaleString('en-US')

// Beds/baths read as whole numbers unless the MLS carries a half bath.
const dec = (n) => n == null ? null : (Number.isInteger(n) ? String(n) : String(n))

export const fullAddress = (l) => [l.address, l.unit].filter(Boolean).join(' ')
export const cityLine = (l) => `${l.city}, ${l.state} ${l.zip}`

// Photos come from the folder, never from a hard-coded list: drop files in,
// rebuild, done. 01-* sorts first and becomes the hero + the share image.
export function photosFor(l) {
  const dir = `${PHOTO_DIR}/${l.slug}`
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && !f.startsWith('.'))
    .sort()
    .map((f) => `/${PHOTO_DIR}/${l.slug}/${f}`)
}

const captionFor = (l, src) => l.photoCaptions?.[src.split('/').pop()] || null

const statFor = (l) => [
  ['Bedrooms', dec(l.beds)],
  ['Bathrooms', dec(l.baths)],
  ['Square feet', num(l.sqft)],
  ['Acres', l.acres == null ? null : String(l.acres)],
  ['Year built', l.yearBuilt == null ? null : String(l.yearBuilt)],
].filter(([, v]) => v)

const priceLine = (l) => l.status === 'sold' && l.soldPrice
  ? `${money(l.soldPrice)} <span class="was">sold${l.soldDate ? ` ${l.soldDate}` : ''}</span>`
  : money(l.price)

// ── Showing CTAs: no fake form, the same three real ways to reach George ─────
const showingCtas = (l) => {
  const body = encodeURIComponent(`Hi George — I'd like to see ${fullAddress(l)} in ${l.city}.`)
  return `<div class="btn-row">
  <a class="btn btn-solid" href="${AGENT.bookUrl}" rel="noopener">Book a showing time</a>
  <a class="btn btn-ghost" href="${AGENT.smsHref}?&body=${body}">Text about this listing</a>
  <a class="btn btn-ghost" href="${AGENT.phoneHref}">Call ${AGENT.phone}</a>
</div>`
}

// ── Sections ────────────────────────────────────────────────────────────────
function heroSection(l, photos) {
  const hero = photos[0]
  const stats = statFor(l).map(([k, v]) => `<div class="lstat"><span class="n">${esc(v)}</span><span class="k">${esc(k)}</span></div>`).join('')
  const chip = `<span class="lchip s-${l.status}">${esc(STATUS_LABEL[l.status] || l.status)}</span>`
  const figure = hero
    ? `<img src="${url(hero)}" alt="${esc(fullAddress(l))}, ${esc(cityLine(l))}" width="1600" height="1067" fetchpriority="high">`
    : `<div class="photo-pending"><span>Photography scheduled</span><p>Call or text and I will walk you through it before the photos post.</p></div>`
  return `
<section class="listing-hero">${currentLines}
  <div class="wrap">
    <div class="lh-text">
      <span class="kicker rise">${esc(l.kicker)}</span>
      <h1 class="rise">${esc(fullAddress(l))}</h1>
      <p class="lh-city rise">${esc(cityLine(l))}${l.neighborhood ? ` · ${esc(l.neighborhood)}` : ''}</p>
      <p class="lh-price rise">${priceLine(l) || ''} ${chip}</p>
      <p class="lede rise">${esc(l.tagline)}</p>
      <div class="rise">${showingCtas(l)}</div>
      <div class="lstats rise">${stats}</div>
    </div>
    <figure class="lh-photo rise">${figure}</figure>
  </div>
</section>`
}

function gallerySection(l, photos) {
  if (photos.length < 2) return ''
  const items = photos.slice(1).map((p, i) => {
    const cap = captionFor(l, p)
    return `<button class="gal-item" data-i="${i + 1}" aria-label="Open photo ${i + 2}">
      <img src="${url(p)}" alt="${esc(fullAddress(l))} — photo ${i + 2}" loading="lazy" width="800" height="533">
      ${cap ? `<figcaption>${esc(cap)}</figcaption>` : ''}
    </button>`
  }).join('')
  const data = JSON.stringify(photos.map((p) => ({ src: url(p), cap: captionFor(l, p) })))
  return `
<section class="band" id="photos"><div class="wrap">
  <span class="kicker">The walk-through</span>
  <h2>Every room, in the order you would see it.</h2>
  <div class="gallery">${items}</div>
</div>
<div class="lightbox" id="lightbox" hidden>
  <button class="lb-close" aria-label="Close">&times;</button>
  <button class="lb-prev" aria-label="Previous photo">&#8249;</button>
  <figure><img id="lbImg" alt=""><figcaption id="lbCap"></figcaption></figure>
  <button class="lb-next" aria-label="Next photo">&#8250;</button>
</div>
<script>window.__photos=${data};</script>
</section>`
}

function descriptionSection(l) {
  const hl = (l.highlights || []).map(([k, v]) =>
    `<li><strong>${esc(k)}</strong><span>${esc(v)}</span></li>`).join('')
  return `
<section class="band"><div class="wrap">
  <span class="kicker">What you are actually buying</span>
  <h2>${esc(l.city === 'Blue River' ? 'Up the river, in plain language.' : 'In plain language.')}</h2>
  ${riverLine}
  <div class="split">
    <div class="prose">${l.description.map((p) => `<p>${p}</p>`).join('')}</div>
    ${hl ? `<ul class="highlights">${hl}</ul>` : ''}
  </div>
</div></section>`
}

function factsSection(l) {
  if (!l.factGroups?.length) return ''
  const groups = l.factGroups.map(([title, rows]) => {
    const trs = rows.filter(([, v]) => v).map(([k, v]) =>
      `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')
    return `<div class="fact-group"><h3>${esc(title)}</h3><table class="facts"><tbody>${trs}</tbody></table></div>`
  }).join('')
  return `
<section class="band band-tint" id="facts"><div class="wrap">
  <span class="kicker">The sheet</span>
  <h2>Everything on the record.</h2>
  <div class="fact-grid">${groups}</div>
  <p class="fineprint">Figures come from the RMLS record and the county. Deemed reliable but not guaranteed — verify anything you are relying on during your inspection period.</p>
</div></section>`
}

function panelSection(l) {
  if (!l.panel) return ''
  const heading = l.panel.kind === 'park'
    ? 'Buying in a land-lease park'
    : 'The parts that decide a corridor buy'
  const items = l.panel.items.map(([k, v, note]) => `
    <div class="pan-item">
      <h3>${esc(k)}</h3>
      <p class="pan-val">${esc(v)}</p>
      <p class="pan-note">${esc(note)}</p>
    </div>`).join('')
  return `
<section class="band panel-band" id="systems"><div class="wrap">
  <span class="kicker">${l.panel.kind === 'park' ? 'Park living' : 'Infrastructure'}</span>
  <h2>${esc(heading)}</h2>
  <p class="lede">${esc(l.panel.intro)}</p>
  <div class="panel-grid">${items}</div>
</div></section>`
}

function featuresSection(l) {
  if (!l.features) return ''
  const cols = Object.entries(l.features).map(([title, items]) => `
    <div class="feat-col"><h3>${esc(title)}</h3><ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')
  return `
<section class="band"><div class="wrap">
  <span class="kicker">Features</span>
  <h2>The details that do not fit in a table.</h2>
  <div class="feat-grid">${cols}</div>
</div></section>`
}

// Honest payment math: principal + interest only, stated as such.
function paymentSection(l) {
  if (!l.price || l.status === 'sold') return ''
  const lease = l.propertyType?.toLowerCase().includes('lease') || l.panel?.kind === 'park'
  return `
<section class="band band-tint" id="payment"><div class="wrap">
  <span class="kicker">Rough numbers</span>
  <h2>What this costs per month.</h2>
  <div class="calc" data-price="${l.price}">
    <div class="calc-controls">
      <label>Price <input type="number" id="cPrice" value="${l.price}" step="1000"></label>
      <label>Down payment <span class="cpct" id="cDownPct">20%</span><input type="range" id="cDown" min="0" max="50" value="20" step="1"></label>
      <label>Rate <span class="cpct" id="cRateV">6.5%</span><input type="range" id="cRate" min="3" max="12" value="6.5" step="0.125"></label>
      <label>Term <select id="cTerm"><option value="30">30 years</option><option value="20">20 years</option><option value="15">15 years</option>${lease ? '<option value="10">10 years (typical chattel)</option>' : ''}</select></label>
    </div>
    <div class="calc-out">
      <span class="co-n" id="cOut">—</span>
      <span class="co-k">estimated principal &amp; interest / month</span>
      <span class="co-sub" id="cSub"></span>
    </div>
  </div>
  <p class="fineprint">Principal and interest only. It does not include property taxes, insurance${lease ? ', or the monthly space rent — and on a land-lease home the space rent is the number that decides affordability' : ', or any assessments'}. Not a loan offer, a rate quote, or a prequalification. Ask a lender for real figures.</p>
</div></section>`
}

// Click-to-load map: no third-party request until the visitor asks for one.
function locationSection(l) {
  const q = encodeURIComponent(`${fullAddress(l)}, ${cityLine(l)}`)
  const schools = l.schools?.length ? `
    <div class="loc-col"><h3>Schools</h3><table class="facts"><tbody>
      ${l.schools.map(([lvl, name, dist]) => `<tr><th scope="row">${esc(lvl)}</th><td>${esc(name)}<span class="sub">${esc(dist)}</span></td></tr>`).join('')}
    </tbody></table>
    <p class="fineprint">School assignment can change and is not guaranteed — confirm with the district before you rely on it.</p></div>` : ''
  const area = AREAS.find((a) => a.slug === l.area)
  return `
<section class="band" id="location"><div class="wrap">
  <span class="kicker">Where it sits</span>
  <h2>${esc(l.city)}${area ? ` — and what that means` : ''}</h2>
  <div class="loc-grid">
    <div class="loc-col">
      <div class="map-card" data-q="${q}">
        <button class="map-load">Load the map<span>Opens Google Maps in this page</span></button>
      </div>
      <p class="map-links"><a href="https://www.google.com/maps/search/?api=1&amp;query=${q}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a> · <a href="https://www.google.com/maps/dir/?api=1&amp;destination=${q}" target="_blank" rel="noopener noreferrer">Get directions</a></p>
      <p class="fineprint">The pin is the address as the county records it. For rural parcels the driveway is often somewhere else entirely — ride out with me.</p>
    </div>
    ${schools}
  </div>
  ${area ? `<p class="area-link">New to the corridor? Read the <a href="${url(`/areas/${area.slug}/`)}">${esc(area.name)} area guide</a> — what it is like to live there, what buyers get wrong, and what the market has been doing.</p>` : ''}
</div></section>`
}

function disclosureSection(l) {
  return `
<section class="band band-tint" id="disclosure"><div class="wrap">
  <div class="disclosure">
    <p><strong>Listed by ${esc(l.listedBy)}.</strong>${l.mls ? ` RMLS #${esc(l.mls)}.` : ''}</p>
    <p>All information is from the RMLS record, the county, and the seller, and is deemed reliable but not guaranteed. Square footage, lot size, zoning, systems, schools, and permitted uses should be independently verified by the buyer during the inspection period. Equal Housing Opportunity.</p>
  </div>
</div></section>`
}

function otherListings(current) {
  const others = LISTINGS.filter((l) => l.slug !== current.slug && isPublic(l))
  if (!others.length) return ''
  return `
<section class="band"><div class="wrap">
  <span class="kicker">Also on the market</span>
  <h2>George&rsquo;s other listings</h2>
  <div class="listing-grid">${others.map(card).join('')}</div>
</div></section>`
}

// ── Card used on /listings/ and in "also on the market" ─────────────────────
export function card(l) {
  const photos = photosFor(l)
  const img = photos[0]
    ? `<img src="${url(photos[0])}" alt="${esc(fullAddress(l))}" loading="lazy" width="800" height="533">`
    : `<div class="photo-pending small"><span>Photos coming</span></div>`
  const bits = [
    l.beds ? `${dec(l.beds)} bd` : null,
    l.baths ? `${dec(l.baths)} ba` : null,
    l.sqft ? `${num(l.sqft)} sq ft` : null,
    l.acres ? `${l.acres} ac` : null,
  ].filter(Boolean).join(' · ')
  return `
<a class="listing-card" href="${url(`/listings/${l.slug}/`)}">
  <div class="lc-photo">${img}<span class="lchip s-${l.status}">${esc(STATUS_LABEL[l.status] || l.status)}</span></div>
  <div class="lc-body">
    <span class="lc-price">${priceLine(l) || ''}</span>
    <h3>${esc(fullAddress(l))}</h3>
    <p class="lc-city">${esc(cityLine(l))}</p>
    ${bits ? `<p class="lc-bits">${esc(bits)}</p>` : ''}
    <p class="lc-tag">${esc(l.tagline)}</p>
  </div>
</a>`
}

// ── Schema.org ──────────────────────────────────────────────────────────────
function listingSchema(l, photos) {
  const item = {
    '@type': l.beds ? 'SingleFamilyResidence' : 'Place',
    name: `${fullAddress(l)}, ${cityLine(l)}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: fullAddress(l),
      addressLocality: l.city,
      addressRegion: l.state,
      postalCode: l.zip,
      addressCountry: 'US',
    },
    ...(l.beds ? { numberOfRooms: l.beds } : {}),
    ...(l.sqft ? { floorSize: { '@type': 'QuantitativeValue', value: l.sqft, unitCode: 'FTK' } } : {}),
    ...(l.yearBuilt ? { yearBuilt: l.yearBuilt } : {}),
    ...(photos[0] ? { photo: abs(photos[0]) } : {}),
  }
  return {
    '@type': 'RealEstateListing',
    name: `${fullAddress(l)} — ${cityLine(l)}`,
    url: abs(`/listings/${l.slug}/`),
    datePosted: l.listedOn || undefined,
    ...(photos[0] ? { image: abs(photos[0]) } : {}),
    about: item,
    ...(l.price ? {
      offers: {
        '@type': 'Offer',
        price: l.price,
        priceCurrency: 'USD',
        availability: l.status === 'sold' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
        seller: { '@id': abs('/#agent') },
      },
    } : {}),
  }
}

// ── Page builders ───────────────────────────────────────────────────────────
export function buildListings(emit) {
  const live = LISTINGS.filter(isPublic)

  // Index
  const indexPage = {
    path: '/listings/',
    title: "George Winters' Listings | McKenzie River Valley & Springfield, Oregon",
    description: 'Current listings with George Winters — McKenzie River corridor and Springfield, Oregon. Riverfront, rural acreage, land, and manufactured homes, with the systems and zoning spelled out.',
    h1: 'Listings',
  }
  const grid = live.length
    ? `<div class="listing-grid">${live.map(card).join('')}</div>`
    : `<div class="empty-state">
         <h3>Nothing on the market this minute.</h3>
         <p>Listings up the corridor move fast and quietly — a good share of what sells out here never sits long enough to get found on a portal. Tell me what you are looking for and I will call you when it comes up, usually before it is live.</p>
         ${showingCtasGeneric()}
       </div>`
  emit('/listings/', shell(indexPage, `
${crumbs([{ label: 'Listings', href: '/listings/' }])}
<section><div class="wrap page-head">
  <span class="kicker">Current listings</span>
  <h1>What I have on the market.</h1>
  <p class="lede">Every listing here gets the same treatment: the systems, the zoning, the lease terms and the money, written out instead of hidden behind &ldquo;call for details.&rdquo;</p>
  ${riverLine}
</div></section>
<section class="band"><div class="wrap">${grid}</div></section>
<section class="band band-tint"><div class="wrap">
  <span class="kicker">Not listed here</span>
  <h2>Most of what I sell never makes a portal.</h2>
  <div class="prose">
    <p>Up the river, a lot of property changes hands on a phone call — an estate, a neighbor who is finally ready, a cabin that would get picked apart by out-of-area buyers if it ever hit the open market. If you want to see those, the way in is to be on my list before they exist.</p>
    <p>Tell me the stretch of the corridor you want, the number you can work with, and whether well-and-septic scares you. That is enough for me to know what to call you about.</p>
  </div>
  ${showingCtasGeneric()}
</div></section>`, [crumbSchema([{ label: 'Listings', href: '/listings/' }]),
    live.length ? {
      '@type': 'ItemList',
      itemListElement: live.map((l, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/listings/${l.slug}/`), name: `${fullAddress(l)}, ${cityLine(l)}` })),
    } : null]))

  // One page per listing
  for (const l of LISTINGS) {
    const photos = photosFor(l)
    if (!photos.length && isPublic(l)) {
      throw new Error(`Listing "${l.slug}" is ${l.status} with no photos in ${PHOTO_DIR}/${l.slug}/. Add photos or set status to "draft".`)
    }
    const trail = [{ label: 'Listings', href: '/listings/' }, { label: fullAddress(l), href: `/listings/${l.slug}/` }]
    const bits = [l.beds ? `${l.beds} bed` : null, l.baths ? `${l.baths} bath` : null,
      l.sqft ? `${num(l.sqft)} sq ft` : null, l.acres ? `${l.acres} acres` : null].filter(Boolean).join(', ')
    const page = {
      path: `/listings/${l.slug}/`,
      title: `${fullAddress(l)}, ${l.city}, OR ${l.zip}${l.price ? ` — ${money(l.price)}` : ''} | George Winters`,
      description: `${fullAddress(l)}, ${cityLine(l)}${bits ? ` — ${bits}` : ''}${l.price ? `, ${money(l.price)}` : ''}. ${l.tagline}`,
      h1: fullAddress(l),
      noindex: !isPublic(l),
      ogImg: photos[0] || null,
      ogAlt: `${fullAddress(l)}, ${cityLine(l)}`,
    }
    const draftBar = isPublic(l) ? '' : `
<div class="draft-bar"><div class="wrap">
  <strong>PREVIEW — NOT PUBLISHED.</strong> This page is <code>noindex</code>, kept out of the sitemap, and
  hidden from the listings index. Check every fact against the MLS sheet, then set
  <code>status</code> to <code>active</code> in <code>src/content/listings.mjs</code>.
  ${l.verify?.length ? `<span class="todo">Still to confirm: ${l.verify.map(esc).join(' · ')}</span>` : ''}
</div></div>`

    emit(page.path, shell(page, [
      draftBar,
      crumbs(trail),
      heroSection(l, photos),
      descriptionSection(l),
      gallerySection(l, photos),
      factsSection(l),
      panelSection(l),
      featuresSection(l),
      paymentSection(l),
      locationSection(l),
      `<section class="band"><div class="wrap"><div class="showing">
         <span class="kicker">See it</span>
         <h2>Walk it with the guy who lives here.</h2>
         <p class="lede">I will meet you at the property, tell you what I would check, and say so if it is wrong for you. That is the whole pitch.</p>
         ${showingCtas(l)}
       </div></div></section>`,
      otherListings(l),
      disclosureSection(l),
      `<script src="${url('/assets/js/listing.js')}" defer></script>`,
    ].join('\n'), [crumbSchema(trail), listingSchema(l, photos)]))
  }
}

function showingCtasGeneric() {
  return `<div class="btn-row">
  <a class="btn btn-solid" href="${AGENT.bookUrl}" rel="noopener">Book a call with George</a>
  <a class="btn btn-ghost" href="${AGENT.phoneHref}">Call or text ${AGENT.phone}</a>
</div>`
}

// Paths that must stay out of the sitemap (drafts are noindex previews).
export const draftPaths = () => LISTINGS.filter((l) => !isPublic(l)).map((l) => `/listings/${l.slug}/`)
