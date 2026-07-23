// Template engine — plain functions returning HTML strings. Zero deps.
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { SITE, AGENT, NAV, url, abs } from './config.mjs'

const CSS_V = createHash('md5').update(readFileSync('assets/css/site.css')).digest('hex').slice(0, 8)

export const esc = (s) => String(s ?? '')
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

// ---------- SVG bits ----------
export const riverLine = `<svg class="river-line" viewBox="0 0 72 10" aria-hidden="true"><path d="M2 5.5 C 11 1, 19 9, 28 5.5 S 46 1, 55 5.5 70 5.5 70 5.5" fill="none" stroke-width="3" stroke-linecap="round"/></svg>`

export const currentLines = `<svg class="current-lines" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 1200 600">
  ${[70, 170, 270, 370, 470, 570].map((y, i) =>
    `<path d="M-20 ${y} C 200 ${y - (i % 2 ? 34 : -34)}, 500 ${y + (i % 2 ? 34 : -34)}, 720 ${y} S 1100 ${y - (i % 2 ? 26 : -26)}, 1220 ${y}" fill="none" stroke="rgba(155,211,94,.14)" stroke-width="1.6"/>`
  ).join('')}
</svg>`

export const tick = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="7" fill="#80bf42"/><path d="M6.5 12.6 10.4 16.5 17.5 8.2" stroke="#0f1a06" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`

const phoneIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
const calIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`

// ---------- CTA helpers ----------
export const ctaButtons = (dark = false) => `
<div class="btn-row">
  <a class="btn btn-solid" href="${AGENT.bookUrl}" rel="noopener">${calIcon} Book a call with George</a>
  <a class="btn btn-ghost" href="${AGENT.phoneHref}">${phoneIcon} Call or text ${AGENT.phone}</a>
</div>`

export const agentBand = (heading = 'Talk to the neighbor first.', body = `Straight answers about buying or selling anywhere on the corridor — Springfield to McKenzie Bridge. No pressure, no jargon.`) => `
<section class="band"><div class="wrap">
  <div class="agent-band">
    <img src="${url(AGENT.headshot)}" alt="${esc(AGENT.name)}, Realtor serving the McKenzie River Valley" width="86" height="86" loading="lazy">
    <div>
      <h2>${esc(heading)}</h2>
      <p>${body}</p>
    </div>
    ${ctaButtons(true)}
  </div>
</div></section>`

// ---------- FAQ ----------
export const faqBlock = (faqs, heading = 'Questions people ask') => !faqs?.length ? '' : `
<section class="band" id="faq"><div class="wrap">
  <span class="kicker">FAQ</span>
  <h2>${esc(heading)}</h2>
  <div class="faq">
    ${faqs.map((f) => `<details><summary>${esc(f.q)}</summary><p>${f.a}</p></details>`).join('\n')}
  </div>
</div></section>`

// ---------- related links ----------
export const related = (links, heading = 'Keep reading') => !links?.length ? '' : `
<div class="wrap"><nav class="related" aria-label="Related pages">
  <h2>${esc(heading)}</h2>
  <ul>${links.map((l) => `<li><a href="${url(l.href)}">${esc(l.label)}</a></li>`).join('')}</ul>
</nav></div>`

// ---------- breadcrumbs ----------
export const crumbs = (trail) => `
<nav class="crumbs" aria-label="Breadcrumb"><div class="wrap"><ol>
  <li><a href="${url('/')}">Home</a></li>
  ${trail.map((t, i) => i === trail.length - 1
    ? `<li aria-current="page">${esc(t.label)}</li>`
    : `<li><a href="${url(t.href)}">${esc(t.label)}</a></li>`).join('')}
</ol></div></nav>`

// ---------- JSON-LD builders ----------
export const agentSchema = () => ({
  '@type': 'RealEstateAgent',
  '@id': abs('/#agent'),
  name: AGENT.name,
  telephone: '+1-541-870-8378',
  email: AGENT.email,
  url: abs('/'),
  image: abs(AGENT.headshot),
  memberOf: { '@type': 'Organization', name: `${AGENT.team} · ${AGENT.brokerage}` },
  knowsAbout: ['riverfront property', 'rural real estate', 'wells and septic systems', 'land and acreage', 'McKenzie River Valley'],
  areaServed: AGENT.serviceAreas.map((a) => ({ '@type': 'Place', name: `${a}, Oregon` })),
})

export const faqSchema = (faqs) => !faqs?.length ? null : ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
  })),
})

export const crumbSchema = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: abs('/') },
    ...trail.map((t, i) => ({ '@type': 'ListItem', position: i + 2, name: t.label, ...(t.href ? { item: abs(t.href) } : {}) }))],
})

export const articleSchema = (page) => ({
  '@type': 'Article',
  headline: page.h1 || page.title,
  description: page.description,
  author: { '@id': abs('/#agent') },
  publisher: { '@id': abs('/#agent') },
  mainEntityOfPage: abs(page.path),
  ...(page.img ? { image: abs(page.img) } : {}),
})

export const placeSchema = (area) => ({
  '@type': 'Place',
  name: `${area.name}, Oregon`,
  description: area.blurb,
  containedInPlace: { '@type': 'AdministrativeArea', name: 'Lane County, Oregon' },
})

// ---------- page shell ----------
export function shell(page, bodyHtml, schemas = []) {
  const canonical = abs(page.path)
  const title = page.title.length > 62 ? page.title : `${page.title}`
  const ogImg = abs(page.img || '/assets/img/og-default.jpg')
  const graph = [agentSchema(), ...schemas.filter(Boolean)]
  const navHtml = NAV.map((n) => {
    const current = page.path.startsWith(n.href) ? ' aria-current="page"' : ''
    return `<a href="${url(n.href)}"${current}>${n.label}</a>`
  }).join('')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(SITE.shortName)} · McKenzie River Valley Real Estate">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImg}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0f1a06">
<link rel="icon" href="${url('/assets/img/favicon.png')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..600&family=Space+Grotesk:wght@400..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${url('/assets/css/site.css')}?v=${CSS_V}">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>
<body>
<header class="site-head"><div class="wrap bar">
  <a class="logo" href="${url('/')}" aria-label="George Winters — home">
    <img class="logo-face" src="${url('/assets/img/george.jpg')}" alt="" width="42" height="42">
    <span class="logo-name">George Winters</span>
    <span class="logo-brand">· Real Broker</span>
  </a>
  <nav aria-label="Main">${navHtml}<a class="head-call" href="${AGENT.phoneHref}">${AGENT.phone}</a></nav>
</div></header>
<main id="main">
${bodyHtml}
</main>
${agentBand()}
<footer class="site-foot">
  <div class="wrap top">
    <div class="brand">
      <img src="${url('/assets/img/tog-logo-real-white.png')}" alt="The Operative Group | Real" width="240" height="50" loading="lazy">
      <p>${esc(AGENT.name)} — real estate up the McKenzie. ${esc(AGENT.brokerage)} · ${esc(AGENT.license)}.</p>
    </div>
    <div><h4>Areas</h4><ul>
      <li><a href="${url('/areas/springfield/')}">Springfield</a></li>
      <li><a href="${url('/areas/walterville/')}">Walterville</a></li>
      <li><a href="${url('/areas/leaburg/')}">Leaburg</a></li>
      <li><a href="${url('/areas/vida/')}">Vida</a></li>
      <li><a href="${url('/areas/blue-river/')}">Blue River</a></li>
      <li><a href="${url('/areas/mckenzie-bridge/')}">McKenzie Bridge</a></li>
      <li><a href="${url('/areas/')}">All areas →</a></li>
    </ul></div>
    <div><h4>Guides</h4><ul>
      <li><a href="${url('/guides/wells/')}">Wells</a></li>
      <li><a href="${url('/guides/septic/')}">Septic</a></li>
      <li><a href="${url('/guides/riverfront/')}">Riverfront & flood</a></li>
      <li><a href="${url('/guides/land/')}">Land & acreage</a></li>
      <li><a href="${url('/guides/')}">All guides →</a></li>
    </ul></div>
    <div><h4>George</h4><ul>
      <li><a href="${url('/about/')}">About</a></li>
      <li><a href="${AGENT.bookUrl}" rel="noopener">Book a call</a></li>
      <li><a href="${AGENT.phoneHref}">${AGENT.phone}</a></li>
      <li><a href="mailto:${AGENT.email}">${AGENT.email}</a></li>
      <li><a href="${url('/credits/')}">Photo credits</a></li>
    </ul></div>
  </div>
  <div class="wrap legal">
    <span>© ${new Date().getFullYear()} ${esc(AGENT.name)} · ${esc(AGENT.brokerage)} · ${esc(AGENT.license)}</span>
    <span class="eho"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3 2 10h3v10h6v-6h2v6h6V10h3L12 3z"/></svg> Equal Housing Opportunity</span>
    <span>Each office independently owned & operated.</span>
    <span><a href="${url('/terms/')}">Terms</a> · <a href="${url('/privacy/')}">Privacy</a> · <a href="${url('/accessibility/')}">Accessibility</a> · <a href="${url('/do-not-sell/')}">Do Not Sell or Share</a> · <a href="${url('/fair-housing/')}">Fair Housing</a></span>
  </div>
</footer>
</body></html>`
}
