// Guide aggregator: 8 categories, 70 guides.
import { WELLS, SEPTIC } from './guides-water.mjs'
import { RIVERFRONT, LAND } from './guides-riverland.mjs'
import { BUYING, SELLING } from './guides-transact.mjs'
import { FIRSTTIME, LIVING } from './guides-life.mjs'

export const GUIDE_CATS = [
  { slug: 'wells', label: 'Wells', title: 'Wells & water, demystified', img: '/assets/img/mckenzie-bridge-1.jpg',
    blurb: 'Well logs, flow tests, water quality, shared systems — everything a private water supply asks of buyers and sellers.' },
  { slug: 'septic', label: 'Septic', title: 'Septic systems, minus the mystery', img: '/assets/img/oregon-barn-1.jpg',
    blurb: 'Inspections, drainfields, bedroom-count rules, and the care habits that buy decades of quiet service.' },
  { slug: 'riverfront', label: 'Riverfront & flood', title: 'The water itself: riverfront and flood', img: '/assets/img/mckenzie-river-3.jpg',
    blurb: 'Flood zones, insurance, banks, setbacks, and what frontage really means — the straight version of owning the water.' },
  { slug: 'land', label: 'Land & acreage', title: 'Buying ground that can hold a life', img: '/assets/img/willamette-valley-1.jpg',
    blurb: 'Access, zoning, septic feasibility, power math, surveys, and timber — the seven checks that make land buildable.' },
  { slug: 'buying', label: 'Buying', title: 'Buying the valley, start to keys', img: '/assets/img/mckenzie-bridge-1.jpg',
    blurb: 'The process, the offers, the rural inspection stack, and the closing — with the corridor’s twists marked plainly.' },
  { slug: 'selling', label: 'Selling', title: 'Selling with confidence, not hope', img: '/assets/img/goodpasture-bridge-2.jpg',
    blurb: 'Real pricing, records files, preparation that pays, and marketing that reaches the buyers who are not here yet.' },
  { slug: 'first-time', label: 'First-time buyers', title: 'First home, real help', img: '/assets/img/eugene-house-2.jpg',
    blurb: 'Oregon’s assistance landscape, down payment truth, credit preparation, and the honest rent-versus-buy math.' },
  { slug: 'living', label: 'Valley living', title: 'Living up river, honestly', img: '/assets/img/mckenzie-fall-1.jpg',
    blurb: 'Seasons, connectivity, winter readiness, wood heat, and the recreation that makes the corridor famous.' },
]

export const GUIDES = [
  ...WELLS, ...SEPTIC, ...RIVERFRONT, ...LAND, ...BUYING, ...SELLING, ...FIRSTTIME, ...LIVING,
]
