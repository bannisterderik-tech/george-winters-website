// Site-wide configuration — single source of truth.
// Change BASE when moving to a custom domain, then rebuild.
export const SITE = {
  base: 'https://bannisterderik-tech.github.io/george-winters-website',
  name: 'George Winters · McKenzie River Valley Real Estate',
  shortName: 'George Winters',
  tagline: 'Real estate up the McKenzie — Springfield to the summit.',
  description:
    'George Winters is a local Realtor serving the McKenzie River Valley: Springfield, Thurston, Cedar Flat, Walterville, Deerhorn, Leaburg, Vida, Nimrod, Finn Rock, Blue River, Rainbow, and McKenzie Bridge, Oregon.',
  locale: 'en_US',
}

export const AGENT = {
  name: 'George Winters',
  phone: '541-870-8378',
  phoneHref: 'tel:+15418708378',
  smsHref: 'sms:+15418708378',
  email: 'george@theoperativegroup.com',
  license: 'Oregon Lic# 201251081',
  brokerage: 'Real Broker, LLC',
  team: 'The Operative Group',
  bookUrl: 'https://app.theoperativegroup.com/u/george-winters/book',
  headshot: '/assets/img/george.jpg',
  serviceAreas: [
    'Springfield', 'Thurston', 'Cedar Flat', 'Walterville', 'Deerhorn', 'Leaburg',
    'Vida', 'Nimrod', 'Finn Rock', 'Blue River', 'Rainbow', 'McKenzie Bridge', 'Eugene', 'Camp Creek',
  ],
}

export const NAV = [
  { href: '/areas/', label: 'Areas' },
  { href: '/guides/', label: 'Guides' },
  { href: '/buy/', label: 'Buy' },
  { href: '/sell/', label: 'Sell' },
  { href: '/riverfront/', label: 'Riverfront' },
  { href: '/land/', label: 'Land & Acreage' },
  { href: '/about/', label: 'About George' },
]

// url() prefixes internal hrefs with the GitHub Pages subpath.
const basePath = new URL(SITE.base).pathname.replace(/\/$/, '')
export const url = (p) => `${basePath}${p}`
export const abs = (p) => `${SITE.base.replace(/\/$/, '')}${p}`
