// ─────────────────────────────────────────────────────────────────────────────
// LISTINGS — one object per property. build.mjs turns each into
// /listings/<slug>/ plus a card on /listings/.
//
// GROUND RULE
//   Every value here must come from the RMLS sheet, the county record, the
//   seller's disclosures, or George's own eyes. Nothing on a listing page is
//   invented. If a fact is unknown, leave it out (null / omit the row) — the
//   builder drops empty rows rather than guessing. A wrong square footage,
//   zoning code, or septic claim on a public page is a licensing problem for
//   a licensed broker, not a typo.
//
//   House style for a value that matters but is unconfirmed:
//     'Ask'  or  'Verify with Lane County'   — never an estimate.
//
// STATUS
//   'draft'       preview only: noindex, kept out of the sitemap and the
//                 listings index, shows a PREVIEW banner. New listings start
//                 here until George checks them against the MLS sheet.
//   'coming-soon' public, indexed, no showings yet.
//   'active'      public, indexed, showings open.
//   'pending'     public, indexed, pending banner, form still live.
//   'sold'        public, indexed, kept as an SEO asset. Set soldPrice/soldDate.
//
// PHOTOS
//   Drop files in  assets/img/listings/<slug>/  named so a plain sort puts
//   them in tour order — the order someone would walk the property:
//     01-front.jpg 02-living.jpg 03-kitchen.jpg 04-primary.jpg 05-shop.jpg
//   01-* becomes the hero and the social share image. The builder globs the
//   folder, so adding photos later means dropping files in and rebuilding.
//   Landscape, ~2000px wide, JPEG. Never a stock photo on a real listing.
//   Never AI-generate or retouch a property photo — that is misrepresentation.
//   Any non-draft listing with no photos fails the build on purpose.
// ─────────────────────────────────────────────────────────────────────────────

export const LISTINGS = [
  // ═══════════════════════════════════════════════════════════════════════════
  // 88175 Tiki Ln · Springfield (Deerhorn / Shangri-La)
  // Source: RMLS #588766290 via IDX record, read 2026-10-03.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: '88175-tiki-ln',
    status: 'active',
    address: '88175 Tiki Lane',
    city: 'Springfield',
    state: 'OR',
    zip: '97478',
    county: 'Lane County',
    area: 'deerhorn',               // links to the matching area guide
    neighborhood: 'Shangri-La, Deerhorn',
    mls: '588766290',
    mlsArea: '239 — Lane Co: Thurston',
    price: 519000,
    beds: 3,
    baths: 2,
    sqft: 1572,
    acres: 0.65,
    yearBuilt: 1972,
    propertyType: 'Single-family residence',
    taxes: 3906,
    taxYear: '2025',
    hoa: null,
    listedOn: '2026-05-08',

    kicker: 'Deerhorn · the Shangri-La bend',
    tagline: 'An updated one-level on two tax lots, in the stretch of the corridor people wait years for.',

    description: [
      'Shangri-La is the pocket of Deerhorn that long-time valley people name first when you ask where they would live if they could pick the bend. This one is a 1972 single level that has been brought current inside — LVP through the main rooms, quartz and refreshed cabinetry in the kitchen, appliances staying — without losing the plain-spoken river-house layout that makes these homes work.',
      'The floor plan gives you a separate living room and a family room, which is rarer out here than it sounds, plus a bonus room that can take a fourth bedroom, an office, or the gear pile that comes with living on the McKenzie. Everything you need day to day is on one floor: both full baths, all three bedrooms, minimal steps at the entry.',
      'The sale is two tax lots — 0.24 and 0.41 acres, 0.65 together. That matters more than a round lot number: it is two separately-numbered parcels conveying in one transaction, and it is worth having your title officer walk you through what that means for you before closing.',
      'Thurston is about fifteen minutes down the highway and Eugene about twenty-five, per the listing. Public water, standard septic, and the gentle wooded slope you expect on this side of Deerhorn Road.',
    ],

    highlights: [
      ['One level, no stairs', 'All three bedrooms and both full baths on the main floor'],
      ['Two tax lots', '0.24 ac + 0.41 ac conveying together — 0.65 acres total'],
      ['Updated kitchen', 'Quartz counters, refreshed cabinetry, all appliances included'],
      ['Separate living + family', 'Plus a bonus room for a 4th bedroom or office'],
      ['Public water, septic', 'Standard septic system; public water service'],
      ['Deerhorn corridor', 'Thurston ~15 min, Eugene ~25 min per the listing'],
    ],

    factGroups: [
      ['Structure', [
        ['Style', 'Craftsman, one story'],
        ['Year built', '1972'],
        ['Living area', '1,572 sq ft (all main level)'],
        ['Bedrooms', '3 — all on the main floor'],
        ['Bathrooms', '2 full — both on the main floor'],
        ['Bonus room', 'Main level — 4th bedroom, office, or hobby space'],
        ['Garage', 'Attached'],
        ['Basement', 'Crawl space with a partial unfinished basement'],
        ['Foundation', 'Block; pillar, post and pier'],
        ['Roof', 'Composition'],
        ['Siding', 'T1-11'],
        ['Windows', 'Double pane'],
        ['Heating', 'Ceiling heat — electricity and propane on site'],
        ['Cooling', 'Air-conditioning ready — no AC unit installed'],
        ['Fireplace', 'One, gas'],
        ['Flooring', 'LVP and carpet; vinyl'],
        ['Accessibility', 'One level, main-floor bed and bath, minimal steps'],
      ]],
      ['Land, water & systems', [
        ['Lot size', '0.65 acres across two tax lots (0.24 + 0.41)'],
        ['Lot character', 'Gentle sloping, private, treed'],
        ['View', 'Mountain, trees and woods'],
        ['Waterfront', 'Seasonal — per the RMLS record. Ask about the water line'],
        ['Water', 'Public water'],
        ['Sewer', 'Standard septic'],
        ['Hot water', 'Electric'],
        ['Road surface', 'Paved and gravel'],
        ['Parking', 'Driveway plus RV access parking'],
        ['Outbuildings', 'Tool shed'],
        ['Outdoor', 'Deck, fire pit, garden, fenced yard'],
        ['Internet', 'Cable and DSL available'],
      ]],
      ['Financial & legal', [
        ['List price', '$519,000'],
        ['Price per sq ft', '$330'],
        ['Property taxes', '$3,906 (2025)'],
        ['HOA', 'None'],
        ['County', 'Lane County'],
        ['MLS #', '588766290'],
        ['Listing terms', 'Cash, conventional, FHA, VA'],
        ['Flood zone', 'Verify — ask for the RLID report before you write'],
      ]],
    ],

    // The corridor panel: the infrastructure questions that decide a rural buy.
    panel: {
      kind: 'rural',
      intro: 'River-corridor houses are bought and sold on their systems, not their adjectives. Here is what governs this one, and what I would check during your inspection period.',
      items: [
        ['Water', 'Public water',
          'Public service rather than a well, which takes the single biggest rural unknown off the table — no flow test, no well log, no shared-well agreement to read.'],
        ['Septic', 'Standard septic system',
          'Budget for a pump-and-inspect during your inspection period. Lane County holds the permit record — it tells you tank size and where the drainfield runs, which matters if you ever want a shop or an addition.'],
        ['Two tax lots', '0.24 ac + 0.41 ac',
          'They convey together. Confirm with the title officer how they are described on your deed, and with the county before you assume anything about splitting or building on the second lot.'],
        ['Seasonal water', 'RMLS flags this as waterfront, seasonal',
          'In this stretch that usually means a seasonal channel or drainage rather than year-round frontage. Worth standing on in person, and worth a flood-zone check through RLID either way.'],
        ['Heating', 'Ceiling heat, gas fireplace, AC-ready',
          'Ceiling heat is cheap to run in shoulder season and expensive in a cold snap. The house is already plumbed as air-conditioning ready, so a heat pump is a straightforward upgrade and the one I would price out first.'],
        ['Financing', 'Cash, conventional, FHA and VA all accepted',
          'A 1972 home on septic with a crawl space will get a closer look from an FHA or VA appraiser. Nothing unusual here — just start the conversation with your lender before you write.'],
      ],
    },

    features: {
      Interior: ['Quartz countertops', 'Refreshed cabinetry', 'All appliances included', 'Skylight', 'Ceiling fan', 'Built-in sound — security system owned', 'Separate living and family rooms', 'Bonus room'],
      Exterior: ['Deck', 'Fire pit', 'Garden', 'Tool shed', 'Fenced yard', 'RV parking and boat storage', 'Attached garage'],
      Land: ['Gentle sloping and treed', 'Private setting', 'Mountain and woods view', 'Two tax lots', 'Paved and gravel road frontage'],
    },

    schools: [
      ['Elementary', 'Walterville Elementary', 'Springfield SD 19'],
      ['Middle', 'Thurston Middle School', 'Springfield SD 19'],
      ['High', 'Thurston High School', 'Springfield SD 19'],
    ],

    listedBy: 'Daniel Gandee & George Winters, Real Broker LLC',

    // Facts George should eyeball against the MLS sheet before this goes public.
    verify: [
      'Price and status as of today — the record shows six price reductions since May',
      'Whether "waterfront: seasonal" is a channel, a slough, or river frontage',
      'Garage size (the record lists parking total 1)',
      'Flood zone and the RLID report',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 51790 Echo St · Blue River — land
  // Source: RMLS #646130069 via IDX record, read 2026-10-03.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: '51790-echo-st',
    status: 'active',
    address: '51790 Echo Street',
    city: 'Blue River',
    state: 'OR',
    zip: '97413',
    county: 'Lane County',
    area: 'blue-river',
    mls: '646130069',
    price: 160000,
    beds: null,
    baths: null,
    sqft: null,
    acres: 0.39,
    yearBuilt: null,
    propertyType: 'Land — two lots',
    taxes: null,
    taxYear: null,
    listedOn: '2026-06-27',

    kicker: 'Blue River · the middle of the comeback',
    tagline: 'Two cleared corner lots in the center of town, zoned for far more than one house.',

    description: [
      'This is a rare thing in the upper valley: buildable, cleared, in-town ground in Blue River, right in the middle of the rebuild. Two lots, 0.39 acres together, on a corner with gravel access already in.',
      'What makes it unusual is the zoning. The listing contemplates up to two single-family homes, multi-family, a bed and breakfast, or a commercial use — retail, a restaurant, an office. In a town of this size, a parcel that can carry a business and housing is the kind of thing that gets bought once and held.',
      'Context matters here. Blue River lost most of its core in the 2020 Holiday Farm Fire and has spent the years since rebuilding on purpose — a new library, a medical clinic, a fire station. The town has services again and keeps adding them. The ground that is left in the middle of it is finite.',
      'Zoning and development feasibility are the buyer\'s to confirm with Lane County Land Management. I will tell you what I know and point you at the right desk, but do not write on a use you have not had the county confirm in writing.',
    ],

    highlights: [
      ['Two lots', '0.39 acres total, conveying together'],
      ['Corner, cleared', 'Raw land with gravel access in place'],
      ['Mixed-use potential', 'Residential, multi-family or commercial — verify with the county'],
      ['Town services', 'Rebuilt library, medical clinic and fire station nearby'],
      ['Upper-valley hub', 'Blue River Reservoir, Cougar, and Tokatee up the highway'],
      ['Scarce ground', 'In-town buildable land in a town that is rebuilding'],
    ],

    factGroups: [
      ['The parcel', [
        ['Lot size', '0.39 acres — two lots'],
        ['Lot character', 'Corner lot, cleared'],
        ['Access', 'Gravel'],
        ['Improvements', 'None — raw land'],
      ]],
      ['Use & utilities', [
        ['Zoning', 'Verify with Lane County Land Management — the permitted-use list is the whole value here'],
        ['Contemplated uses', 'Up to two single-family homes, multi-family, B&B, retail, restaurant or office — per the listing, buyer to confirm'],
        ['Water', 'Ask — confirm service availability and connection cost'],
        ['Sewer / septic', 'Ask — confirm before you plan a build'],
        ['Power', 'Ask'],
      ]],
      ['Financial & legal', [
        ['List price', '$160,000'],
        ['County', 'Lane County'],
        ['MLS #', '646130069'],
        ['Property taxes', 'Ask — the record shows $0 for 2025'],
        ['Flood zone', 'Verify — ask for the RLID report'],
      ]],
    ],

    panel: {
      kind: 'rural',
      intro: 'Land is bought on what you are allowed to do with it. Four questions decide whether this parcel is worth what you have in mind, and all four have answers you can get before you write.',
      items: [
        ['Zoning', 'Confirm the code and the permitted-use list',
          'Everything the listing contemplates — two homes, multi-family, lodging, commercial — lives or dies on the zoning designation and the conditional-use process. Lane County Land Management will tell you in writing. Do not take a zoning code off a listing site, including this one.'],
        ['Water and sewer', 'Confirm service and connection cost',
          'In-town Blue River is not the same as a rural parcel with a well and a drainfield, and connection fees are a real line item. Get the number before you budget the build.'],
        ['Fire rebuild context', 'Ask what was on these lots before 2020',
          'Previously-developed lots can come with existing utility stubs — an advantage — and with debris or soil questions. Both are knowable.'],
        ['Financing', 'Raw land is a different loan',
          'Most banks treat bare land differently from a house: bigger down payment, shorter term. If the plan is build-then-occupy, a construction loan is usually the cleaner path. Worth a call before you offer.'],
      ],
    },

    schools: [
      ['Elementary', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['Middle', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['High', 'McKenzie High School', 'McKenzie SD 68'],
    ],

    listedBy: 'Daniel Gandee & George Winters, Real Broker LLC',

    verify: [
      'The zoning designation — the IDX record abbreviates it and I will not publish a code I have not read off the county record',
      'Whether utilities are stubbed to the lots',
      'The $0 property-tax figure in the record',
      'Current price and status',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 55636 McKenzie River Dr #9 · Blue River — park model, land lease
  // Source: RMLS #193404959 via IDX record, read 2026-10-03.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: '55636-mckenzie-river-dr-9',
    status: 'active',
    address: '55636 McKenzie River Drive',
    unit: 'Space 9',
    city: 'Blue River',
    state: 'OR',
    zip: '97413',
    county: 'Lane County',
    area: 'blue-river',
    mls: '193404959',
    price: 58100,
    beds: 1,
    baths: 1,
    sqft: 400,
    acres: null,
    yearBuilt: 2008,
    propertyType: 'Park model in a land-lease park',
    taxes: null,
    taxYear: null,
    listedOn: '2026-05-21',

    kicker: 'Blue River · on the water',
    tagline: 'A 2008 park model where you can hear the McKenzie from the kitchen — for less than a down payment.',

    description: [
      'A 12×32 Norwester park model, built in 2008, in a riverside park on McKenzie River Drive. River views from the kitchen and the living room, and the sound of the water from everywhere else.',
      'It has been kept up and recently refreshed: new LVP flooring, fresh paint inside and out, new baseboards, a new toilet and microwave, a built-in sound system, and a ductless heat pump that handles both the January cold and the August heat. Washer, dryer, refrigerator and gas range stay. Cable internet is available, which is not a given this far up the valley.',
      'The space rent covers a 10×10 storage shed, a covered carport, water, garbage, the recreation building, hot showers, a laundromat, and the picnic and barbecue area down on the river. The park does not allow subletting, so this is a place to use, not to run as a short-term rental.',
      'Read the park-living panel below before you fall for it — buying in a land-lease park is a genuinely different transaction from buying a house, and the financing is the part that surprises people.',
    ],

    highlights: [
      ['On the McKenzie', 'River views from the kitchen and living room'],
      ['2008 Norwester', '12×32 park model, 400 sq ft'],
      ['Recently updated', 'LVP flooring, fresh paint, new fixtures, built-in sound'],
      ['Ductless heat + cool', 'Year-round comfort in one system'],
      ['Rent includes a lot', 'Shed, carport, water, garbage, rec building, laundry'],
      ['No subletting', 'Park rules — this is a place to use, not to rent out'],
    ],

    factGroups: [
      ['The home', [
        ['Type', 'Park model — manufactured home in a park'],
        ['Make / size', 'Norwester, 12 ft × 32 ft'],
        ['Year built', '2008'],
        ['Living area', '400 sq ft'],
        ['Bedrooms', '1'],
        ['Bathrooms', '1'],
        ['Heating & cooling', 'Ductless heat pump'],
        ['Included', 'Washer, dryer, refrigerator, gas range'],
        ['Recent updates', 'LVP flooring, interior and exterior paint, baseboards, toilet, microwave, built-in sound'],
        ['Internet', 'Cable available'],
        ['Parking', 'Covered carport, 1 space'],
        ['Storage', '10 ft × 10 ft shed'],
      ]],
      ['The park', [
        ['Land', 'Leased — you own the home, not the ground'],
        ['Space rent includes', 'Storage shed, carport, water, garbage, recreation building, hot showers, laundromat, riverside picnic and BBQ area'],
        ['Space rent', 'Ask — current monthly amount and recent increase history'],
        ['Subletting', 'Not allowed'],
        ['Park approval', 'Ask — most parks screen and approve buyers'],
      ]],
      ['Financial & legal', [
        ['List price', '$58,100'],
        ['County', 'Lane County'],
        ['MLS #', '193404959'],
        ['Property taxes', 'Ask — the record shows $0 for 2025'],
        ['Financing', 'Usually cash or a chattel loan — see below'],
      ]],
    ],

    panel: {
      kind: 'park',
      intro: 'Buying in a land-lease park is a different transaction from buying a house, and almost nobody explains it before the offer. Here is what actually governs it.',
      items: [
        ['You own the home, not the land', 'Land lease',
          'The purchase buys the structure. The ground underneath comes with a monthly space rent that can rise over time, so the real monthly cost is the price of the home plus rent for as long as you keep it.'],
        ['Space rent', 'Ask for the current amount and the history',
          'Get the figure in writing, along with what the last few increases looked like and what the rent includes. Here the rent covers water, garbage, the shed and carport, and the park amenities — that is more than many parks include.'],
        ['Financing', 'Cash or a chattel loan, usually',
          'A conventional mortgage normally will not attach to a home on leased land. Most buyers pay cash or use a chattel (personal-property) loan, which carries a higher rate and a shorter term. Price the payment before you decide what you can offer.'],
        ['Park approval', 'Expect a screening',
          'Parks typically approve the buyer as a tenant, and that approval is separate from your purchase agreement. Start it early — it is a common reason these deals run past their closing date.'],
        ['The rules', 'No subletting here',
          'Read the park rules and the lease in full during your inspection period: pets, guests, parking, and what you may add outside. These rules are enforceable and they are not negotiable at closing.'],
        ['Resale and insurance', 'Plan both up front',
          'Park models are a cash-buyer market, so resale moves at its own pace. Insurance is written as a manufactured-home policy — easy to get, worth quoting before you commit.'],
      ],
    },

    schools: [
      ['Elementary', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['Middle', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['High', 'McKenzie High School', 'McKenzie SD 68'],
    ],

    listedBy: 'Daniel Gandee & George Winters, Real Broker LLC',

    verify: [
      'Current space rent and what the last increases were',
      'Park application process and timeline',
      'Whether the park allows the buyer to finance, and which lenders it has worked with',
      'Current price and status',
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 5335 Daisy St Spc 101 · Springfield — Granada Estates
  // Source: RMLS #252512822 via IDX record, read 2026-10-03.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: '5335-daisy-st-101',
    status: 'active',
    address: '5335 Daisy Street',
    unit: 'Space 101',
    city: 'Springfield',
    state: 'OR',
    zip: '97478',
    county: 'Lane County',
    area: 'springfield',
    neighborhood: 'Granada Estates',
    mls: '252512822',
    price: 117000,
    beds: 3,
    baths: 2,
    sqft: 1296,
    acres: null,
    yearBuilt: 1993,
    propertyType: 'Manufactured home in a land-lease community',
    taxes: 752,
    taxYear: '2025',

    kicker: 'Springfield · Granada Estates',
    tagline: 'A remodelled three-bedroom on a corner lot, for a third of what a stick-built costs in Thurston.',

    description: [
      'Three bedrooms, two full baths and 1,296 square feet on a corner lot in Granada Estates — an all-ages community on the east side of Springfield, close to shopping, schools and the way up the river.',
      'The remodel is the story. The kitchen has granite counters and stainless appliances with real workspace, and both bathrooms have been taken back to studs-and-finishes level: modern tile, granite, and a walk-in shower. It shows as a finished home rather than a project someone started.',
      'The parts that cost money later have already been handled — the roof is less than six years old, and the furnace, water heater and laminate flooring have all been replaced. That combination is unusual at this price and it is the reason this one is worth seeing before the cheaper listings in the same park.',
      'It is a land-lease community, so read the park panel below. The monthly space rent is part of your real cost, and the financing works differently from a stick-built house.',
    ],

    highlights: [
      ['1,296 sq ft, 3 bed / 2 bath', 'Full-size floor plan, not a starter box'],
      ['Corner lot', 'In Granada Estates, an all-ages community'],
      ['Kitchen redone', 'Granite counters and stainless appliances'],
      ['Both baths renovated', 'Modern tile, granite, walk-in shower'],
      ['Big-ticket items done', 'Roof under six years, newer furnace and water heater'],
      ['Covered front patio', 'Close to shopping, dining and schools'],
    ],

    factGroups: [
      ['The home', [
        ['Type', 'Manufactured home in a land-lease community'],
        ['Year built', '1993'],
        ['Living area', '1,296 sq ft'],
        ['Bedrooms', '3'],
        ['Bathrooms', '2 full'],
        ['Kitchen', 'Granite counters, stainless appliances'],
        ['Baths', 'Renovated — tile, granite, walk-in shower'],
        ['Flooring', 'Laminate'],
        ['Roof', 'Replaced within the last six years'],
        ['Furnace', 'Newer'],
        ['Water heater', 'Newer'],
        ['Outdoor', 'Covered front patio; corner lot'],
      ]],
      ['The community', [
        ['Community', 'Granada Estates — all ages'],
        ['Land', 'Leased — you own the home, not the ground'],
        ['Space rent', 'Ask — current monthly amount and increase history'],
        ['Park approval', 'Ask — expect tenant screening'],
        ['Rules', 'Ask for the park rules and lease during the inspection period'],
      ]],
      ['Financial & legal', [
        ['List price', '$117,000'],
        ['Property taxes', '$752 (2025)'],
        ['County', 'Lane County'],
        ['MLS #', '252512822'],
        ['Financing', 'Usually cash or a chattel loan — see below'],
      ]],
    ],

    panel: {
      kind: 'park',
      intro: 'A land-lease home is a different purchase from a house with a deed to the dirt. None of this is a reason not to buy — it is the part you want to understand before you write.',
      items: [
        ['You own the home, not the land', 'Land lease',
          'Your purchase buys the structure. The ground comes with a monthly space rent, so your true monthly cost is the payment plus rent, and the rent can rise.'],
        ['Space rent', 'Get the number and the history in writing',
          'Ask the current amount, what it covers, and what the last three increases were. That trend line tells you more about the next ten years than the sale price does.'],
        ['Financing', 'Cash or a chattel loan, usually',
          'Conventional mortgages generally will not attach to a home on leased land. Chattel loans carry higher rates and shorter terms — worth pricing the payment before you decide your number.'],
        ['Park approval', 'A separate approval from your financing',
          'Granada Estates is an all-ages community and, like most parks, screens buyers as incoming tenants. Start that application early.'],
        ['What is already done', 'Roof, furnace, water heater, baths',
          'In a manufactured home the roof and the mechanicals are the expensive surprises. Having them recent is worth real money against a cheaper home in the same park — get the dates confirmed in writing.'],
        ['Inspection', 'Still worth every dollar',
          'Have the skirting, tie-downs, plumbing under the home and the roof looked at. A manufactured-home inspector is a different specialty from a standard home inspector and costs about the same.'],
      ],
    },

    schools: null,   // boundary not confirmed — ask Springfield SD 19

    listedBy: 'Daniel Gandee & George Winters, Real Broker LLC',

    verify: [
      'Current space rent for Granada Estates and what it includes',
      'Exact roof, furnace and water-heater dates',
      'School assignment with Springfield SD 19',
      'Current price and status',
    ],
  },
]

// Only these statuses are public; everything else builds as a noindex preview.
export const PUBLIC_STATUSES = ['coming-soon', 'active', 'pending', 'sold']

export const STATUS_LABEL = {
  draft: 'Preview',
  'coming-soon': 'Coming soon',
  active: 'Active',
  pending: 'Sale pending',
  sold: 'Sold',
}
