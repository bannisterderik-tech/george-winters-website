// Static site builder — zero dependencies. `node build.mjs` → docs/
import fs from 'node:fs'
import path from 'node:path'
import { SITE, AGENT, url, abs } from './src/config.mjs'
import {
  shell, esc, riverLine, currentLines, tick, ctaButtons,
  faqBlock, related, crumbs, faqSchema, crumbSchema, articleSchema, placeSchema,
} from './src/templates.mjs'
import { AREAS } from './src/content/areas.mjs'
import { GUIDES, GUIDE_CATS } from './src/content/guides.mjs'

const OUT = 'docs'
const pages = []

function emit(p, html) {
  const file = path.join(OUT, p.replace(/\/$/, '/index.html').replace(/^\//, ''))
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  pages.push(p)
}

const checksList = (items) => `<ul class="checks">${items.map((i) => `<li>${tick}<span>${i}</span></li>`).join('')}</ul>`

// ============================================================ HOME
function buildHome() {
  const page = {
    path: '/',
    title: 'George Winters · McKenzie River Valley Realtor | Springfield to McKenzie Bridge, Oregon',
    description: 'Local Realtor for the McKenzie River corridor: Springfield, Walterville, Leaburg, Vida, Blue River, McKenzie Bridge & more. Riverfront, rural, and land expertise. Call/text 541-870-8378.',
    img: '/assets/img/mckenzie-river-3.jpg',
  }
  const areaTiles = AREAS.map((a) => `
    <a class="tile photo-tile" href="${url(`/areas/${a.slug}/`)}">
      <img src="${url(a.img)}" alt="${esc(a.imgAlt)}" loading="lazy" width="640" height="480">
      <div class="veil"></div>
      <div class="label"><span>${esc(a.kicker)}</span><h3>${esc(a.name)}</h3></div>
    </a>`).join('')

  const body = `
<section class="hero">${currentLines}
  <div class="wrap">
    <div>
      <span class="kicker rise">The McKenzie River Valley · Oregon</span>
      <h1 class="rise">Real estate <em>up the river,</em> from a Realtor who lives here.</h1>
      <p class="lede rise">Springfield to McKenzie Bridge and every river mile between — riverfront homes, rural acreage, and straight answers from your neighbor on the corridor.</p>
      <div class="rise">${ctaButtons(true)}</div>
    </div>
    <figure class="hero-photo rise">
      <img src="${url('/assets/img/george-portrait-red.jpg')}" alt="George Winters, McKenzie River Valley Realtor" width="640" height="736" fetchpriority="high">
      <figcaption class="tag">Your neighbor · the valley</figcaption>
    </figure>
  </div>
</section>

<section class="band"><div class="wrap">
  <span class="kicker">One corridor, known cold</span>
  <h2>I work where I can point at the water.</h2>
  ${riverLine}
  <div class="split">
    <div class="prose">
      <p>The McKenzie corridor is not a normal market. Wells and septic systems decide value. Flood maps shape financing. The nearest comparable sale might be three miles and a world away. Pricing this valley takes local feet on local ground — and that is the entire way I practice.</p>
      <p><strong>I live in this valley.</strong> Your home's value means more to me than it does to other agents, because it is my neighborhood too. When homes here sell right, the whole corridor wins.</p>
    </div>
    <div>${checksList([
      '<strong>Riverfront literacy</strong> — flood zones, banks, setbacks, insurance, and what frontage is really worth.',
      '<strong>Rural systems fluency</strong> — wells, septic, wood heat, outbuildings, access, and acreage.',
      '<strong>Springfield-to-summit coverage</strong> — one agent for the whole corridor, plus Camp Creek and the Mohawk.',
      '<strong>Straight answers</strong> — even when they cost me the sale. Ask anyone who has called.',
    ])}</div>
  </div>
</div></section>

<section class="band band-tint"><div class="wrap">
  <span class="kicker">Where I work</span>
  <h2>Fourteen communities. One river road.</h2>
  <p class="lede">Every stretch of the corridor lives differently. Pick your mile.</p>
  <div class="tile-grid">${areaTiles}</div>
</div></section>

<section class="band"><div class="wrap">
  <span class="kicker">The field guides</span>
  <h2>Everything the river will ask of you, answered first.</h2>
  <div class="split">
    <div class="prose">
      <p>Buying or selling out here comes with questions town agents rarely face: How do I read a well log? What does that flood zone actually cost? Can I even build on that parcel? I have written the answers down — plainly, honestly, and specific to this valley.</p>
      <p>Start with the guides below, and call me when the questions turn personal: <a href="${AGENT.phoneHref}">${AGENT.phone}</a>.</p>
    </div>
    <div class="tile-grid" style="margin-top:0">
      ${GUIDE_CATS.slice(0, 4).map((c) => `
      <a class="tile" href="${url(`/guides/${c.slug}/`)}">
        <span class="t-kick">${esc(c.label)}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.blurb)}</p>
        <span class="go">Read the guides →</span>
      </a>`).join('')}
    </div>
  </div>
</div></section>

<section class="band band-ink">${currentLines.replace('current-lines', 'current-lines')} <div class="wrap" style="position:relative">
  <span class="kicker">Sellers</span>
  <h2>What is your place on the river actually worth?</h2>
  <p class="lede" style="color:rgba(238,243,227,.75)">Not the algorithm's guess — a real number, from comps walked in person by a neighbor who knows what buyers pay for frontage, systems, and quiet. Free, no obligation.</p>
  ${ctaButtons(true)}
</div></section>`

  emit(page.path, shell(page, body, [crumbSchema([])]))
}

// ============================================================ AREAS
function buildAreas() {
  // hub index
  const idx = {
    path: '/areas/',
    title: 'McKenzie River Valley Communities | Area Guide, Springfield to McKenzie Bridge',
    description: 'Explore every community on the McKenzie corridor: Springfield, Thurston, Cedar Flat, Walterville, Deerhorn, Leaburg, Vida, Nimrod, Finn Rock, Blue River, Rainbow, McKenzie Bridge, Camp Creek & the Mohawk Valley.',
    img: '/assets/img/mckenzie-river-1.jpg',
  }
  emit(idx.path, shell(idx, `
${crumbs([{ label: 'Areas' }])}
<div class="wrap page-head">
  <span class="kicker">Area guide</span>
  <h1>Up the river, mile by mile.</h1>
  <p class="lede">Fourteen communities share one river road, and each lives differently. These guides cover what makes every stretch its own — and what buying or selling there really involves.</p>
</div>
<section class="band" style="padding-top:0"><div class="wrap">
  <div class="tile-grid">${AREAS.map((a) => `
    <a class="tile photo-tile" href="${url(`/areas/${a.slug}/`)}">
      <img src="${url(a.img)}" alt="${esc(a.imgAlt)}" loading="lazy" width="640" height="480">
      <div class="veil"></div>
      <div class="label"><span>${esc(a.kicker)}</span><h3>${esc(a.name)}</h3></div>
    </a>`).join('')}
  </div>
</div></section>`, [crumbSchema([{ label: 'Areas', href: '/areas/' }])]))

  for (const a of AREAS) {
    const base = `/areas/${a.slug}/`
    const trail = [{ label: 'Areas', href: '/areas/' }, { label: a.name, href: base }]
    const subNav = related([
      { href: `${base}buying/`, label: `Buying in ${a.name}` },
      { href: `${base}selling/`, label: `Selling in ${a.name}` },
      { href: `${base}living/`, label: `Living in ${a.name}` },
      { href: `${base}faq/`, label: `${a.name} FAQ` },
    ], `${a.name}, in depth`)

    // hub
    const hub = {
      path: base,
      title: `${a.name}, Oregon Real Estate & Area Guide | McKenzie River Valley`,
      description: `${a.blurb} Local guide from George Winters, the Realtor who lives on the corridor.`,
      img: a.img, h1: `${a.name}, Oregon`,
    }
    emit(base, shell(hub, `
${crumbs(trail.slice(0, 1).concat([{ label: a.name }]))}
<div class="wrap page-head">
  <span class="kicker">${esc(a.kicker)}</span>
  <h1>${esc(a.name)}, Oregon</h1>
  <p class="lede">${esc(a.blurb)}</p>
  <figure class="page-head-photo"><img src="${url(a.img)}" alt="${esc(a.imgAlt)}" width="1600" height="686" fetchpriority="high"></figure>
</div>
<section class="band" style="padding-top:0"><div class="wrap">
  <div class="split">
    <div class="prose">${a.hub.map((p) => `<p>${p}</p>`).join('')}</div>
    <div>
      <h3>${esc(a.name)} at a glance</h3>
      ${checksList(a.facts)}
      ${ctaButtons()}
    </div>
  </div>
</div></section>
${faqBlock(a.faqs, `${a.name} questions, answered`)}
${subNav}`,
      [placeSchema({ name: a.name, blurb: a.blurb }), faqSchema(a.faqs), crumbSchema(trail.slice(0, 1).concat([{ label: a.name }])), articleSchema(hub)]))

    // subpages
    const subs = [
      { seg: 'buying', label: `Buying a home in ${a.name}, Oregon`, kicker: 'Buyer guide', body: a.buying,
        desc: `What buyers should know in ${a.name}: local market character, rural systems, and how to buy well on this stretch of the McKenzie corridor.`,
        extra: related([
          { href: '/guides/buying/', label: 'The buying guides' },
          { href: '/guides/wells/', label: 'Well guides' },
          { href: '/guides/septic/', label: 'Septic guides' },
          { href: '/guides/riverfront/', label: 'Riverfront & flood guides' },
        ], 'Do your homework') },
      { seg: 'selling', label: `Selling your home in ${a.name}, Oregon`, kicker: 'Seller guide', body: a.selling,
        desc: `How to sell well in ${a.name}: positioning, preparation, and marketing that reaches the right buyers for this stretch of the valley.`,
        extra: related([
          { href: '/guides/selling/', label: 'The selling guides' },
          { href: '/guides/selling/pricing-rural-property/', label: 'Pricing rural property' },
          { href: '/sell/', label: 'Work with George to sell' },
        ], 'Sell it right') },
      { seg: 'living', label: `Living in ${a.name}, Oregon`, kicker: 'Local life', body: a.living,
        desc: `What daily life is like in ${a.name}, Oregon — rhythms, practicalities, and why people choose this stretch of the McKenzie corridor.`,
        extra: related([
          { href: '/guides/living/', label: 'Valley living guides' },
          { href: '/guides/living/moving-to-mckenzie-valley/', label: 'Moving to the valley' },
        ], 'Settle in') },
    ]
    for (const s of subs) {
      const p = { path: `${base}${s.seg}/`, title: `${s.label} | George Winters`, description: s.desc, img: a.img, h1: s.label }
      const t2 = trail.concat([{ label: s.kicker }])
      emit(p.path, shell(p, `
${crumbs(t2)}
<div class="wrap page-head">
  <span class="kicker">${esc(s.kicker)} · ${esc(a.name)}</span>
  <h1>${esc(s.label)}</h1>
</div>
<section class="band" style="padding-top:0"><div class="wrap prose">
  ${s.body.map((x) => `<p>${x}</p>`).join('')}
  <p>Want the specifics for a property you are watching in ${esc(a.name)}? <a href="${AGENT.phoneHref}">Call or text ${AGENT.phone}</a> — straight answers, no pressure.</p>
</div></section>
${s.extra}
${subNav}`, [crumbSchema(t2), articleSchema(p)]))
    }

    // faq page
    const fp = { path: `${base}faq/`, title: `${a.name}, Oregon FAQ — Real Estate & Living Questions | George Winters`,
      description: `Frequently asked questions about ${a.name}, Oregon: location, utilities, river access, and buying or selling on this stretch of the McKenzie corridor.`, img: a.img, h1: `${a.name} FAQ` }
    const t3 = trail.concat([{ label: 'FAQ' }])
    emit(fp.path, shell(fp, `
${crumbs(t3)}
<div class="wrap page-head">
  <span class="kicker">FAQ · ${esc(a.name)}</span>
  <h1>${esc(a.name)} questions, answered by a local.</h1>
  <p class="lede">${esc(a.blurb)}</p>
</div>
${faqBlock(a.faqs, 'The short answers')}
${subNav}`, [faqSchema(a.faqs), crumbSchema(t3)]))
  }
}

// ============================================================ GUIDES
function buildGuides() {
  const idx = {
    path: '/guides/',
    title: 'McKenzie Valley Real Estate Guides — Wells, Septic, Riverfront, Land & More',
    description: 'Plain-spoken field guides to buying and selling on the McKenzie corridor: wells, septic systems, flood zones, riverfront property, land, and rural living — written by the Realtor who lives here.',
    img: '/assets/img/mckenzie-fall-1.jpg',
  }
  emit(idx.path, shell(idx, `
${crumbs([{ label: 'Guides' }])}
<div class="wrap page-head">
  <span class="kicker">The field guides</span>
  <h1>Everything the river will ask of you.</h1>
  <p class="lede">${GUIDES.length} plain-spoken answers to the questions this valley actually raises — wells to wood stoves, flood maps to fence lines. No jargon, no invented numbers, no pressure.</p>
</div>
<section class="band" style="padding-top:0"><div class="wrap">
  ${GUIDE_CATS.map((c) => `
  <div style="margin-bottom:3rem">
    <span class="kicker">${esc(c.label)}</span>
    <h2><a href="${url(`/guides/${c.slug}/`)}" style="text-decoration:none;color:inherit">${esc(c.title)}</a></h2>
    <p class="lede" style="font-size:1.1rem">${esc(c.blurb)}</p>
    <div class="tile-grid">
      ${GUIDES.filter((g) => g.cat === c.slug).map((g) => `
      <a class="tile" href="${url(`/guides/${c.slug}/${g.slug}/`)}">
        <span class="t-kick">${esc(c.label)}</span>
        <h3>${esc(g.title)}</h3>
        <p>${esc(g.tease)}</p>
        <span class="go">Read →</span>
      </a>`).join('')}
    </div>
  </div>`).join('')}
</div></section>`, [crumbSchema([{ label: 'Guides', href: '/guides/' }])]))

  for (const c of GUIDE_CATS) {
    const catGuides = GUIDES.filter((g) => g.cat === c.slug)
    const cp = { path: `/guides/${c.slug}/`, title: `${c.title} — McKenzie Valley Guides | George Winters`,
      description: c.blurb, img: c.img }
    const trail = [{ label: 'Guides', href: '/guides/' }, { label: c.label }]
    emit(cp.path, shell(cp, `
${crumbs(trail)}
<div class="wrap page-head">
  <span class="kicker">${esc(c.label)}</span>
  <h1>${esc(c.title)}</h1>
  <p class="lede">${esc(c.blurb)}</p>
</div>
<section class="band" style="padding-top:0"><div class="wrap">
  <div class="tile-grid">
    ${catGuides.map((g) => `
    <a class="tile" href="${url(`/guides/${c.slug}/${g.slug}/`)}">
      <span class="t-kick">${esc(c.label)}</span>
      <h3>${esc(g.title)}</h3>
      <p>${esc(g.tease)}</p>
      <span class="go">Read →</span>
    </a>`).join('')}
  </div>
</div></section>`, [crumbSchema(trail)]))

    for (const g of catGuides) {
      const gp = {
        path: `/guides/${c.slug}/${g.slug}/`,
        title: `${g.title} | McKenzie Valley Guide`,
        description: g.metaDesc || g.tease,
        img: g.img || c.img, h1: g.h1 || g.title,
      }
      const gTrail = [{ label: 'Guides', href: '/guides/' }, { label: c.label, href: `/guides/${c.slug}/` }, { label: g.short || g.title }]
      emit(gp.path, shell(gp, `
${crumbs(gTrail)}
<div class="wrap page-head">
  <span class="kicker">${esc(c.label)} · Field guide</span>
  <h1>${esc(g.h1 || g.title)}</h1>
</div>
<div class="wrap">
  <div class="answer"><div class="a-label">The short answer</div><p>${g.answer}</p></div>
  <article class="prose">
    ${g.sections.map((s) => `<h2>${esc(s.h)}</h2>${s.body.map((p) => `<p>${p}</p>`).join('')}${s.list ? checksList(s.list) : ''}`).join('')}
    <blockquote>Local rule of thumb: ${g.rule}</blockquote>
  </article>
</div>
${faqBlock(g.faqs, 'Related questions')}
${related(g.related, 'Keep reading')}`,
        [articleSchema(gp), faqSchema(g.faqs), crumbSchema(gTrail)]))
    }
  }
}

// ============================================================ CORE PAGES
function buildCore() {
  // ---- About ----
  const about = {
    path: '/about/',
    title: 'About George Winters — McKenzie River Valley Realtor | The Operative Group · Real Broker',
    description: 'George Winters is a Realtor with The Operative Group (Real Broker, LLC) living and working on the McKenzie River corridor. Oregon Lic# 201251081. Call/text 541-870-8378.',
    img: '/assets/img/george-portrait-red.jpg',
  }
  emit(about.path, shell(about, `
${crumbs([{ label: 'About George' }])}
<div class="wrap page-head">
  <span class="kicker">Your neighbor on the corridor</span>
  <h1>George Winters</h1>
  <p class="lede">Realtor · The Operative Group at Real Broker, LLC · ${AGENT.license}</p>
</div>
<section class="band" style="padding-top:0"><div class="wrap split">
  <div class="prose">
    <p>I live in the McKenzie Valley, and I work the corridor I live on — Springfield to McKenzie Bridge, plus Camp Creek and the Mohawk. That is the whole practice: one river road, known cold.</p>
    <p>It changes how I do the job. Your home's value genuinely means more to me than it does to other agents, because this is my neighborhood too — when homes here sell right, my own community wins. I price properties by walking them, I tour houses in the rain on purpose, and I will tell you when a property is wrong for you even when that costs me the sale.</p>
    <p>I practice with <strong>The Operative Group</strong>, one of the area's most productive teams, brokered by <strong>Real Broker, LLC</strong> — which means you get a neighbor's local knowledge backed by a full team's marketing reach, transaction management, and negotiating depth.</p>
    <h2>How I work</h2>
    ${checksList([
      '<strong>Communication first.</strong> You will never wonder where your deal stands — updates before you have to ask.',
      '<strong>Straight answers.</strong> The honest number, the honest flaw, the honest advice. Every time.',
      '<strong>Rural fluency.</strong> Wells, septic, flood maps, wood heat, access, acreage — the valley’s real checklist is my daily work.',
      '<strong>Negotiation with teeth.</strong> I negotiate like the money is my own, because one day the referral will be.',
      '<strong>Still here after keys.</strong> Contractors, well drillers, firewood leads — closing day starts the relationship.',
    ])}
    <p>Curious what your place is worth, or what your budget buys on the river? <a href="${AGENT.phoneHref}">Call or text ${AGENT.phone}</a>, or <a href="${AGENT.bookUrl}" rel="noopener">book a time that suits you</a>.</p>
  </div>
  <figure class="hero-photo">
    <img src="${url('/assets/img/george-fishing-2.jpg')}" alt="George Winters fishing on home water in the McKenzie Valley" width="640" height="854" loading="lazy">
    <figcaption class="tag">Home water</figcaption>
  </figure>
</div></section>`, [crumbSchema([{ label: 'About George' }])]))

  // ---- Buy hub ----
  const buy = {
    path: '/buy/',
    title: 'Buy a Home on the McKenzie River Corridor | Buyer’s Guide & Local Agent',
    description: 'Buying in the McKenzie Valley — riverfront, rural, and in-town. How the process works out here, what to inspect, and how George Winters guides buyers from Springfield to McKenzie Bridge.',
    img: '/assets/img/mckenzie-bridge-1.jpg',
  }
  emit(buy.path, shell(buy, `
${crumbs([{ label: 'Buy' }])}
<div class="wrap page-head">
  <span class="kicker">Buyers</span>
  <h1>Buy the river right.</h1>
  <p class="lede">Riverfront, rural acreage, or a town base near the corridor — buying out here rewards preparation and local eyes. Here is how we do it well.</p>
</div>
<section class="band" style="padding-top:0"><div class="wrap">
  <ol class="steps">
    <li><div><h3>Talk money first</h3><p>Pre-approval before touring — it sets a real budget and makes your offers land. Rural and riverfront properties can carry lender quirks; we get ahead of them.</p></div></li>
    <li><div><h3>Define the dream precisely</h3><p>River frontage, river view, or acreage in the trees? Each shops, prices, and inspects differently. We will name what you are actually buying before we hunt it.</p></div></li>
    <li><div><h3>Tour with intent</h3><p>Every showing teaches us something. I check the water story, the systems, the roof lines, and the cell signal while you check the feeling.</p></div></li>
    <li><div><h3>Write a smart offer</h3><p>Price matters; terms, timelines, and clean contingencies win just as often. I negotiate like the money is my own.</p></div></li>
    <li><div><h3>Inspect everything</h3><p>Home, well, septic, wood stove — and on the river, flood and bank questions too. Knowledge is leverage, and out here it is also safety.</p></div></li>
    <li><div><h3>Close with confidence</h3><p>Appraisal, underwriting, final walk-through, keys — with updates before you have to ask at every step.</p></div></li>
  </ol>
  ${ctaButtons()}
</div></section>
${related([
    { href: '/guides/buying/', label: 'All buying guides' },
    { href: '/guides/first-time/', label: 'First-time buyer guides' },
    { href: '/guides/riverfront/', label: 'Riverfront & flood guides' },
    { href: '/guides/wells/', label: 'Well guides' },
    { href: '/guides/septic/', label: 'Septic guides' },
    { href: '/areas/', label: 'Choose your mile: area guides' },
  ], 'Prepare like a local')}`, [crumbSchema([{ label: 'Buy' }])]))

  // ---- Sell hub ----
  const sell = {
    path: '/sell/',
    title: 'Sell Your McKenzie Valley Home | Rural & Riverfront Listing Expertise',
    description: 'Selling on the McKenzie corridor takes more than a sign: honest local pricing, records preparation, and marketing that reaches river-minded buyers everywhere. How George Winters sells the valley.',
    img: '/assets/img/goodpasture-bridge-2.jpg',
  }
  emit(sell.path, shell(sell, `
${crumbs([{ label: 'Sell' }])}
<div class="wrap page-head">
  <span class="kicker">Sellers</span>
  <h1>A sign in the yard is not a plan.</h1>
  <p class="lede">River and rural property sells on story, systems, and reach. Here is the plan your place deserves — and what it is like to sell with the neighbor who knows what homes here really bring.</p>
</div>
<section class="band" style="padding-top:0"><div class="wrap">
  <ol class="steps">
    <li><div><h3>A real number, walked in person</h3><p>No algorithm prices frontage, timber, or a strong well. I price your property standing on it, against comps I know personally.</p></div></li>
    <li><div><h3>The records file</h3><p>Well log, septic history, permits, surveys — assembled before listing. Ready sellers close smoother and negotiate stronger.</p></div></li>
    <li><div><h3>Preparation that pays</h3><p>Open the view path to your water, stage the outbuildings, fix the first hundred feet. I will give you the shortest list with the biggest return.</p></div></li>
    <li><div><h3>Photography worthy of the setting</h3><p>Golden-hour river light, the frontage, the life. Your buyer is buying the dream — we show it honestly and beautifully.</p></div></li>
    <li><div><h3>Reach beyond the valley</h3><p>River buyers come from everywhere. Your listing goes to Eugene-Springfield's deep pool and far past it — marketed, not just posted.</p></div></li>
    <li><div><h3>Negotiate and close clean</h3><p>Educated river buyers ask sharp questions; your property will answer with documents. I handle the rest like it is my own money.</p></div></li>
  </ol>
  ${ctaButtons()}
</div></section>
${related([
    { href: '/guides/selling/', label: 'All selling guides' },
    { href: '/guides/selling/pricing-rural-property/', label: 'Pricing rural property' },
    { href: '/guides/selling/why-online-estimates-miss/', label: 'Why online estimates miss' },
    { href: '/guides/riverfront/selling-riverfront-home/', label: 'Selling riverfront' },
    { href: '/areas/', label: 'Your area’s selling guide' },
  ], 'Sell like a local')}`, [crumbSchema([{ label: 'Sell' }])]))

  // ---- Riverfront hub ----
  const river = {
    path: '/riverfront/',
    title: 'McKenzie Riverfront Property — Buying & Owning on the Water | George Winters',
    description: 'Riverfront on the McKenzie: what frontage really costs and returns, flood zones and insurance, banks and setbacks, and how to buy or sell river property with confidence.',
    img: '/assets/img/mckenzie-river-3.jpg',
  }
  emit(river.path, shell(river, `
${crumbs([{ label: 'Riverfront' }])}
<div class="wrap page-head">
  <span class="kicker">The water itself</span>
  <h1>Riverfront, demystified.</h1>
  <p class="lede">Frontage on the McKenzie is the valley’s crown asset — and its most misunderstood purchase. This is the straight version of what owning the water involves.</p>
  <figure class="page-head-photo"><img src="${url('/assets/img/mckenzie-river-3.jpg')}" alt="Turquoise current of the McKenzie River" width="1600" height="686"></figure>
</div>
<section class="band" style="padding-top:0"><div class="wrap split">
  <div class="prose">
    <p>River property runs on a second set of rules. FEMA maps shape financing and insurance. Riparian setbacks shape what you can build or cut near the bank. The river itself moves — channels shift, banks erode, and the frontage you buy deserves reading like the living thing it is.</p>
    <p>None of that should scare you off. It should just come with a guide. I have walked this river's banks from Hendricks Bridge to the upper reaches; I will tell you what a specific frontage is — and is not — before you fall in love.</p>
  </div>
  <div>
    <h3>The riverfront checklist</h3>
    ${checksList([
      'Flood zone confirmed, insurance quoted <em>before</em> the offer',
      'Bank and setback rules verified with the county',
      'Erosion history and any bank-work permits reviewed',
      'Well, septic, and systems inspected to river-country standard',
      'Access, easements, and the real meaning of the frontage line',
    ])}
  </div>
</div></section>
${related([
    { href: '/guides/riverfront/', label: 'All riverfront & flood guides' },
    { href: '/guides/riverfront/fema-flood-zones-explained/', label: 'FEMA flood zones, explained' },
    { href: '/guides/riverfront/buying-riverfront-property-mckenzie/', label: 'Buying riverfront on the McKenzie' },
    { href: '/guides/riverfront/selling-riverfront-home/', label: 'Selling a riverfront home' },
  ], 'Go deeper')}`, [crumbSchema([{ label: 'Riverfront' }])]))

  // ---- Land hub ----
  const land = {
    path: '/land/',
    title: 'Land & Acreage in the McKenzie Valley — Buying Rural Ground | George Winters',
    description: 'Buying land on the McKenzie corridor: access, zoning, septic feasibility, water, power, surveys, and timber. Field-guide answers from a Realtor who walks parcels for a living.',
    img: '/assets/img/willamette-valley-1.jpg',
  }
  emit(land.path, shell(land, `
${crumbs([{ label: 'Land & Acreage' }])}
<div class="wrap page-head">
  <span class="kicker">Dirt first</span>
  <h1>Buy the land right. The house can change.</h1>
  <p class="lede">Sun, slope, water, access — the dirt makes the decisions that last. Acreage in this valley is a lifestyle before it is an investment, and buying it well is a craft.</p>
</div>
<section class="band" style="padding-top:0"><div class="wrap split">
  <div class="prose">
    <p>Bare land looks simple and is anything but: a parcel without legal access, septic feasibility, or realistic power costs is a beautiful problem, not a homesite. The valley's farm and forest zoning adds its own layer — what you can build, and when, is a question with a specific answer per parcel.</p>
    <p>I walk ground before clients buy it — fence lines, corners, water, the whole story. Bring me the parcel you are dreaming about and I will tell you what I see, including the parts nobody lists.</p>
  </div>
  <div>
    <h3>Before you write on any parcel</h3>
    ${checksList([
      'Legal, recorded access — not a handshake',
      'Zoning confirmed for your intended use',
      'Septic feasibility / site evaluation status',
      'Water: well prospects, spring, or community system',
      'Real numbers for power, driveway, and site prep',
      'Survey and corners you can stand on',
    ])}
  </div>
</div></section>
${related([
    { href: '/guides/land/', label: 'All land & acreage guides' },
    { href: '/guides/land/legal-access-easements/', label: 'Legal access & easements' },
    { href: '/guides/land/zoning-farm-forest-oregon/', label: 'Farm & forest zoning' },
    { href: '/guides/septic/site-evaluation-bare-land-septic/', label: 'Septic feasibility' },
  ], 'Walk the ground')}`, [crumbSchema([{ label: 'Land & Acreage' }])]))

  // ---- Contact/About-adjacent + credits + 404 ----
  const contact = {
    path: '/contact/',
    title: 'Contact George Winters — McKenzie Valley Realtor | 541-870-8378',
    description: 'Reach George Winters: call or text 541-870-8378, email george@theoperativegroup.com, or book a time online. Serving Springfield to McKenzie Bridge, Oregon.',
  }
  emit(contact.path, shell(contact, `
${crumbs([{ label: 'Contact' }])}
<div class="wrap page-head">
  <span class="kicker">Say hello</span>
  <h1>The first call is free. So is the honesty.</h1>
  <p class="lede">Buying, selling, or just river-curious — reach out however suits you. I answer my phone; ask anyone who has tried.</p>
  ${ctaButtons()}
  <div class="prose" style="margin-top:2rem">
    <p><strong>Call or text:</strong> <a href="${AGENT.phoneHref}">${AGENT.phone}</a><br>
    <strong>Email:</strong> <a href="mailto:${AGENT.email}">${AGENT.email}</a><br>
    <strong>Book online:</strong> <a href="${AGENT.bookUrl}" rel="noopener">app.theoperativegroup.com/u/george-winters/book</a></p>
    <p class="small-caps-note">${esc(AGENT.name)} · ${esc(AGENT.team)} · ${esc(AGENT.brokerage)} · ${esc(AGENT.license)} · Equal Housing Opportunity</p>
  </div>
</div>`, [crumbSchema([{ label: 'Contact' }])]))

  const credits = {
    path: '/credits/',
    title: 'Photo Credits & Licenses | George Winters',
    description: 'Attribution for the Creative Commons and public-domain photography used across this site.',
  }
  const attribution = JSON.parse(fs.readFileSync('assets/img/ATTRIBUTION.json', 'utf8'))
  emit(credits.path, shell(credits, `
${crumbs([{ label: 'Photo credits' }])}
<div class="wrap page-head"><span class="kicker">Credits</span><h1>Photo credits</h1>
<p class="lede">Landscape photography on this site comes from Creative Commons and public-domain sources. Thank you to the photographers.</p></div>
<section class="band" style="padding-top:0"><div class="wrap prose">
  <ul>${attribution.map((e) => `<li><strong>${esc(e.file.replace('.jpg', ''))}</strong> — ${esc(e.title || '')} · ${esc(e.artist || 'Unknown')} · ${esc(e.license)} · <a href="${esc(e.source)}" rel="noopener nofollow">source</a></li>`).join('')}
  <li><strong>George Winters photos</strong> — courtesy of George Winters / The Operative Group.</li></ul>
</div></section>`, [crumbSchema([{ label: 'Photo credits' }])]))

  emit('/404.html', shell({
    path: '/404.html', title: 'Page not found | George Winters', description: 'That page drifted downstream. Head back to the McKenzie Valley guide.',
  }, `
<div class="wrap page-head">
  <span class="kicker">404</span>
  <h1>That page drifted downstream.</h1>
  <p class="lede">The river moves and so does this site. Try the <a href="${url('/areas/')}">area guides</a>, the <a href="${url('/guides/')}">field guides</a>, or head <a href="${url('/')}">home</a>.</p>
  ${ctaButtons()}
</div>`, []))
}

// ============================================================ LEGAL PAGES
function legalPage(p, sections) {
  const trail = [{ label: p.crumb }]
  emit(p.path, shell(p, `
${crumbs(trail)}
<div class="wrap page-head">
  <span class="kicker">${esc(p.kicker)}</span>
  <h1>${esc(p.h1)}</h1>
  <p class="lede">${esc(p.lede)}</p>
  <p class="small-caps-note">Effective date: July 2026 · Contact: <a href="mailto:${AGENT.email}">${AGENT.email}</a> · ${AGENT.phone}</p>
</div>
<section class="band" style="padding-top:0"><div class="wrap prose">
  ${sections.map((s) => `<h2>${esc(s.h)}</h2>${s.body.map((x) => `<p>${x}</p>`).join('')}${s.list ? `<ul>${s.list.map((i) => `<li>${i}</li>`).join('')}</ul>` : ''}`).join('')}
  <p class="small-caps-note" style="margin-top:2.5rem">This page is provided for transparency and general information; it is not legal advice. Questions or requests: <a href="mailto:${AGENT.email}">${AGENT.email}</a> or ${AGENT.phone}.</p>
</div></section>`, [crumbSchema(trail)]))
}

function buildLegal() {
  legalPage({
    path: '/terms/', crumb: 'Terms of Service', kicker: 'Legal', h1: 'Terms of Service',
    title: 'Terms of Service | George Winters — McKenzie River Valley Real Estate',
    description: 'Terms of service for georgewinters McKenzie Valley real estate website: informational use, no professional advice, intellectual property, and limitations.',
    lede: 'The short version: this site is informational, its guidance is general, and your specific situation deserves a real conversation.',
  }, [
    { h: 'Acceptance of these terms', body: [
      `By using this website, you agree to these terms. The site is operated by ${AGENT.name}, a real estate licensee with The Operative Group, brokered by Real Broker, LLC (${AGENT.license}). If you do not agree with these terms, please do not use the site.`] },
    { h: 'Informational purpose — not professional advice', body: [
      'Everything on this site — area guides, field guides, FAQs, and commentary — is general information about the McKenzie River Valley and rural real estate practices. It is not legal, financial, tax, insurance, engineering, or survey advice, and it is not advice about any specific property or transaction.',
      'Regulations, programs, market conditions, and property facts change. Content is written in good faith and may become outdated; always verify current details with the relevant authority (county planning, FEMA, lenders, the State of Oregon) and consult qualified professionals for your situation. Nothing here creates an agency relationship — that is formed only through a written agreement.'] },
    { h: 'No guarantees', body: [
      'Real estate outcomes depend on facts we cannot know from a website: your property, your finances, the market on the day. No content here promises results, values, appreciation, program eligibility, or transaction outcomes.'] },
    { h: 'Intellectual property', body: [
      'Site text and design are the property of the site operator. Landscape photography is used under Creative Commons and public-domain licenses with attribution on the <a href="' + url('/credits/') + '">photo credits page</a>; those images remain subject to their original licenses. You may link to and quote briefly from this site with attribution; wholesale reproduction requires permission.'] },
    { h: 'Third-party links', body: [
      'The site links to outside resources (booking, government references, and others). Those sites have their own terms and policies, and no endorsement of their content is implied.'] },
    { h: 'Limitation of liability', body: [
      'To the fullest extent permitted by law, the site operator is not liable for damages arising from use of this site or reliance on its general information. Your sole remedy for dissatisfaction with the site is to stop using it — though we would rather you just call and tell us what is wrong.'] },
    { h: 'Changes', body: [
      'These terms may be updated from time to time; the effective date above reflects the current version. Continued use after changes constitutes acceptance.'] },
  ])

  legalPage({
    path: '/privacy/', crumb: 'Privacy Policy', kicker: 'Legal', h1: 'Privacy Policy',
    title: 'Privacy Policy | George Winters — McKenzie River Valley Real Estate',
    description: 'Privacy policy: this static site sets no cookies and collects no personal data directly. What is (and is not) collected, third-party services, and your rights.',
    lede: 'The short version: this site sets no cookies, runs no trackers, and has no forms. What little data exists, explained honestly.',
  }, [
    { h: 'What this site collects: essentially nothing', body: [
      'This is a static informational website. It contains no contact forms, no login, no comment system, and no analytics or advertising trackers, and it sets no cookies of its own. Browsing this site does not send us your personal information.'] },
    { h: 'Third-party services the site relies on', body: [ 'Serving any website involves some infrastructure. Ours:' ],
      list: [
        '<strong>Hosting (GitHub Pages)</strong> — pages are served by GitHub, whose servers receive standard web request data (IP address, browser type, pages requested) and maintain logs under GitHub’s own privacy policies.',
        '<strong>Fonts (Google Fonts)</strong> — typefaces load from Google’s servers, which receive your IP address as part of serving the files, governed by Google’s privacy policy.',
        '<strong>Outbound links</strong> — booking links go to The Operative Group’s scheduling platform, and reference links go to government and other third-party sites. Each has its own privacy practices that apply once you leave this site.'] },
    { h: 'When you contact George directly', body: [
      'If you call, text, or email using the contact details on this site, the information you choose to share (name, contact details, property questions) is used to respond to you and provide real estate services, and may be retained in the client-management systems used by George and The Operative Group. It is not sold. Standard professional and legal record-keeping obligations for real estate licensees apply.'] },
    { h: 'Your rights', body: [
      'Depending on where you live (including under the Oregon Consumer Privacy Act and the California Consumer Privacy Act as amended), you may have rights to access, correct, or delete personal information and to opt out of certain processing. Because this site itself collects essentially nothing, most requests will concern information you shared by contacting us directly — and we honor reasonable requests regardless of jurisdiction. See also the <a href="' + url('/do-not-sell/') + '">Do Not Sell or Share</a> page.',
      `To make a request: email <a href="mailto:${AGENT.email}">${AGENT.email}</a> or call/text ${AGENT.phone}.`] },
    { h: 'Children', body: [
      'This site is not directed to children and knowingly collects no information from anyone, children included.'] },
    { h: 'Changes', body: [
      'If site functionality ever changes in ways that affect privacy (for example, adding analytics or a contact form), this policy will be updated first and the effective date revised.'] },
  ])

  legalPage({
    path: '/accessibility/', crumb: 'Accessibility', kicker: 'Commitment', h1: 'Accessibility Statement',
    title: 'Accessibility Statement | George Winters — McKenzie River Valley Real Estate',
    description: 'Accessibility statement: WCAG 2.1 AA intent, implemented features (contrast, keyboard navigation, reduced motion), and how to report barriers.',
    lede: 'The valley is for everyone, and so is this site. Our standard, our current features, and how to tell us when we fall short.',
  }, [
    { h: 'Our standard', body: [
      'This site aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. Accessibility is treated as a design requirement, not an afterthought — and as an ongoing practice rather than a finished checkbox.'] },
    { h: 'What is implemented', body: [ 'Current accessibility features include:' ],
      list: [
        'Semantic HTML structure with proper landmarks, headings, and breadcrumb navigation on every page',
        'Text contrast designed to meet or exceed the 4.5:1 AA ratio across light and dark surfaces',
        'Visible keyboard focus indicators and fully keyboard-navigable menus and disclosure widgets',
        'Respect for reduced-motion preferences — animations disable automatically for users who request it',
        'Descriptive alt text on meaningful images and decorative images hidden from assistive technology',
        'Readable typography with generous line-height, scalable units, and a responsive layout down to small screens',
        'Descriptive link text and consistent, predictable navigation across all pages'] },
    { h: 'Known limitations', body: [
      'Third-party destinations we link to (booking, government references) have their own accessibility practices we do not control. Some photographs of documents or scenery may convey more to sighted users despite our alt-text efforts.'] },
    { h: 'Feedback and accommodation', body: [
      `If any part of this site is difficult to use with your assistive technology — or you would simply prefer the information in another form — contact us and we will provide it: <a href="mailto:${AGENT.email}">${AGENT.email}</a> or call/text ${AGENT.phone}. Real estate service itself is always available by phone, and George will happily accommodate whatever communication works best for you.`] },
  ])

  legalPage({
    path: '/do-not-sell/', crumb: 'Do Not Sell or Share', kicker: 'Your privacy rights', h1: 'Do Not Sell or Share My Personal Information',
    title: 'Do Not Sell or Share My Personal Information | George Winters',
    description: 'California CCPA/CPRA notice: this site does not sell or share personal information. How California and Oregon residents can exercise privacy rights.',
    lede: 'The short version: we do not sell or share your personal information. Here is that promise in the form California law contemplates.',
  }, [
    { h: 'Our practice: no sale, no sharing', body: [
      'Neither this website nor George Winters sells personal information, and neither “shares” personal information for cross-context behavioral advertising as those terms are defined by the California Consumer Privacy Act (CCPA), as amended by the CPRA. This site runs no advertising trackers and sets no cookies, so there is nothing to opt out of — but the right and this page exist regardless.'] },
    { h: 'Your California rights', body: [ 'California residents may exercise rights including:' ],
      list: [
        '<strong>Right to know</strong> — what personal information is collected, used, or disclosed',
        '<strong>Right to delete</strong> — request deletion of personal information, subject to legal exceptions',
        '<strong>Right to correct</strong> — request correction of inaccurate personal information',
        '<strong>Right to opt out of sale or sharing</strong> — honored automatically here, since neither occurs',
        '<strong>Right to non-discrimination</strong> — exercising these rights never affects the service you receive'] },
    { h: 'Oregon and other states', body: [
      'Oregon residents have comparable rights under the Oregon Consumer Privacy Act, and residents of other states may have rights under their own laws. Our practice does not vary by state: no sale, no sharing, and reasonable requests honored for everyone.'] },
    { h: 'How to submit a request', body: [
      `Email <a href="mailto:${AGENT.email}">${AGENT.email}</a> with the subject “Privacy Request,” or call/text ${AGENT.phone}. Describe your request and how to reach you; identity verification appropriate to the request may be required. Authorized agents may submit requests on a consumer’s behalf with appropriate authorization. We respond within the timeframes applicable law requires.`,
      'Note that most information we hold, if any, is what you provided by contacting us about real estate — see the <a href="' + url('/privacy/') + '">Privacy Policy</a> for the full picture.'] },
  ])

  legalPage({
    path: '/fair-housing/', crumb: 'Fair Housing', kicker: 'Commitment', h1: 'Fair Housing Commitment',
    title: 'Fair Housing Commitment | George Winters — McKenzie River Valley Real Estate',
    description: 'Fair housing commitment: equal professional service for all, in compliance with the federal Fair Housing Act and Oregon law.',
    lede: 'Everyone deserves the valley. Equal service is both the law and the way this practice runs.',
  }, [
    { h: 'The commitment', body: [
      `${AGENT.name} and The Operative Group provide equal professional service to all persons, without regard to race, color, religion, sex, sexual orientation, gender identity, disability, familial status, national origin, marital status, source of income, or any other class protected by federal, Oregon, or local law — in compliance with the federal Fair Housing Act and Oregon fair housing statutes.`] },
    { h: 'What this means in practice', body: [ 'Concretely:' ],
      list: [
        'Every client and customer receives the same professional standard of service, information, and effort',
        'Property information is shared equally; no steering toward or away from any area based on protected characteristics',
        'Marketing describes properties and places, never the people who “should” live there',
        'Reasonable accommodations and modifications are supported as the law provides',
        'Concerns are taken seriously — raise any with George directly, the Oregon Real Estate Agency, or HUD'] },
    { h: 'A note about this site’s content', body: [
      'The area guides on this site describe geography, amenities, and lifestyle facts about communities — deliberately avoiding demographic characterizations and school-quality ratings, consistent with fair housing best practices. Choose your place in the valley for what it is; who belongs there is already settled: anyone.'] },
  ])
}

// ============================================================ SITEMAP + ROBOTS
function buildMeta() {
  const urls = pages.filter((p) => !p.endsWith('404.html')).map((p) => `  <url><loc>${abs(p)}</loc></url>`).join('\n')
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
  fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`)
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '')
}

// ============================================================ RUN
fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT, { recursive: true })
// static assets
fs.cpSync('assets', path.join(OUT, 'assets'), { recursive: true })
buildHome()
buildAreas()
buildGuides()
buildCore()
buildLegal()
buildMeta()
console.log(`built ${pages.length} pages → ${OUT}/`)
