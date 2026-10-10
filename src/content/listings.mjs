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
    price: 499999,
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
      ['Open house Sunday', 'October 11, 12–2pm'],
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
        ['List price', '$499,999'],
        ['Price per sq ft', '$318'],
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
      'I did not take that on faith from a listing sheet. Lane County Land Management put the zoning in writing for both tax lots: Community Flex Use, Lane Code 16.286 — up to two single-family dwellings or a multiple-dwelling unit, plus lodging, clinic, light industrial and public uses, with commercial uses subject to a Type I or Type II review depending on what you want to do. Ask me for the county email and I will send it with the code section.',
    ],

    highlights: [
      ['Two lots', '0.39 acres total, conveying together'],
      ['Corner, cleared', 'Raw land with gravel access in place'],
      ['Community Flex Use zoning', 'Two homes, a multiple-dwelling unit, lodging or commercial — county-confirmed'],
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
        ['Zoning', 'Community Flex Use — Lane Code 16.286 (confirmed in writing by Lane County Land Management)'],
        ['Allowed uses', 'Up to two single-family dwellings, or a multiple-dwelling unit. Bed and breakfast, residential home and home office are allowable. Clinic, light industrial and public uses are allowed as well'],
        ['Commercial uses', 'Allowed, but may require Type I or Type II approval depending on the use — review criteria are in LC 16.286(5)'],
        ['Tax lots', '1645282005100 and 1645282005200 (account 509-NQ21-01056)'],
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
        ['Zoning', 'Community Flex Use — Lane Code 16.286',
          'Lane County Land Management confirmed this in writing for both tax lots: up to two single-family dwellings or a multiple-dwelling unit, plus a bed and breakfast, residential home or home office. Clinic, light industrial and public uses are allowed too. Commercial uses are allowed but may need Type I or Type II approval depending on what you intend — the review criteria are in subsection (5). Ask me for the county email and read the code section before you write.'],
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

  // ═══════════════════════════════════════════════════════════════════════════
  // 2005 Davis Rd S · Salem (Davis Heights) — Marion County
  // Source: RMLS #660749986 via two IDX mirrors, read 2026-10-03.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: '2005-davis-rd-s',
    status: 'active',
    address: '2005 Davis Road S',
    city: 'Salem',
    state: 'OR',
    zip: '97306',
    county: 'Marion County',
    area: null,                      // outside the corridor — no area guide
    neighborhood: 'Davis Heights',
    mls: '660749986',
    price: 484600,
    beds: 3,
    baths: 2,
    sqft: 1660,
    acres: 0.13,
    yearBuilt: 2019,
    propertyType: 'Single-family residence',
    taxes: 5302,
    taxYear: '2025',
    hoa: null,
    listedOn: '2026-05-18',

    kicker: 'South Salem · Davis Heights',
    tagline: 'A 2019 single level in a Banner Homes neighborhood, with everything already done to it.',

    description: [
      'This one is off the corridor — South Salem, in Davis Heights, a Banner Homes neighborhood — and it is here because it is a genuinely good house, not because it is close to the river.',
      'Built in 2019 and on one level: three bedrooms, two full baths, 1,660 square feet in an open plan built around a gas fireplace. The primary suite has vaulted ceilings, a dual vanity, a walk-in closet and a walk-in shower. LVP through the main rooms and new carpet in all three bedrooms.',
      'The kitchen has quartz counters, a pantry, an island, and every appliance stays — refrigerator, range, dishwasher, microwave, and the washer and dryer with them. Forced-air gas heat, central air, double-pane windows, cement board siding, two-car attached garage, fenced yard with a covered patio and sprinklers.',
      'Six years old means the expensive things are not due yet, and it is on public sewer rather than septic — which, after a few years of selling rural property, I do not take for granted.',
    ],

    highlights: [
      ['Built 2019', 'Six years old — the big-ticket items are not due'],
      ['One level', '3 bed, 2 full bath, 1,660 sq ft, all on the main floor'],
      ['Appliances included', 'Fridge, range, dishwasher, microwave, washer and dryer'],
      ['Quartz kitchen', 'Island, pantry, built-in range and refrigerator'],
      ['Central air + gas heat', 'Forced air, gas fireplace, double-pane windows'],
      ['No HOA', 'Fenced yard, covered patio, sprinklers, 2-car garage'],
    ],

    factGroups: [
      ['Structure', [
        ['Style', 'One story'],
        ['Year built', '2019'],
        ['Living area', '1,660 sq ft (all main level, per RLID)'],
        ['Bedrooms', '3'],
        ['Bathrooms', '2 full'],
        ['Garage', '2-car attached'],
        ['Basement', 'Partial, unfinished, exterior entry'],
        ['Foundation', 'Concrete perimeter'],
        ['Roof', 'Composition'],
        ['Siding', 'Cement board'],
        ['Windows', 'Double pane'],
        ['Heating', 'Forced air, gas'],
        ['Cooling', 'Central air'],
        ['Fireplace', 'One, gas'],
        ['Flooring', 'Luxury vinyl plank and wall-to-wall carpet'],
        ['Accessibility', 'Ground level, garage on main'],
      ]],
      ['Land & systems', [
        ['Lot size', '5,662 sq ft (0.13 acres)'],
        ['Sewer', 'Public sewer'],
        ['Hot water', 'Gas'],
        ['Outdoor', 'Covered patio, fenced, garden, sprinkler system'],
        ['Zoning', 'RS'],
      ]],
      ['Financial & legal', [
        ['List price', '$484,600'],
        ['Property taxes', '$5,302.14 (2025)'],
        ['HOA', 'None'],
        ['County', 'Marion County'],
        ['Tax ID', '355428'],
        ['MLS #', '660749986'],
        ['Listing terms', 'Cash, conventional, FHA, VA'],
      ]],
    ],

    panel: null,

    features: {
      Interior: ['Quartz countertops', 'Kitchen island and pantry', 'Built-in range and refrigerator', 'All appliances included', 'Washer and dryer included', 'High ceilings', 'Ceiling fan', 'Vaulted primary suite', 'Walk-in closet', 'Dual vanity', 'Walk-in shower'],
      Exterior: ['Covered patio', 'Fenced yard', 'Garden', 'Sprinkler system', '2-car attached garage', 'Cement board siding'],
    },

    schools: [
      ['Elementary', 'Schirle Elementary', 'Salem-Keizer SD 24J'],
      ['Middle', 'Crossler Middle School', 'Salem-Keizer SD 24J'],
      ['High', 'Sprague High School', 'Salem-Keizer SD 24J'],
    ],

    listedBy: 'Daniel Gandee & George Winters, Real Broker LLC',
    verify: ['Current price and status', 'School assignment with Salem-Keizer SD 24J'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Holiday Farm RV Resort — three DEEDED RV sites, Blue River.
  // Not park models, not a land lease: you own the site, HOA is $245/mo.
  // Sources: RMLS #780474229 / #440628986 / #672015375, read 2026-10-03.
  // ═══════════════════════════════════════════════════════════════════════════
  {
    slug: '54432-mckenzie-hwy-9',
    status: 'active',
    address: '54432 McKenzie Highway',
    unit: 'Site 9',
    city: 'Blue River',
    state: 'OR',
    zip: '97413',
    county: 'Lane County',
    area: 'blue-river',
    neighborhood: 'Holiday Farm RV Resort',
    mls: '780474229',
    price: 65500,
    beds: null, baths: null, sqft: null, acres: null, yearBuilt: null,
    propertyType: 'Deeded RV site — residential recreational',
    taxes: 306,
    taxYear: '2025',
    hoa: '$245/month — includes water, sewer and garbage',
    listedOn: '2026-08-14',

    kicker: 'Blue River · Holiday Farm RV Resort',
    tagline: 'A deeded RV site on the McKenzie — you own the dirt, not a space rental.',

    description: [
      'This is ground you own. Not a space you rent, not a park model on leased land — a deeded recreational site inside Holiday Farm RV Resort, with full water, power and sewer hookups already in and a roughly 10 by 12 wood storage shed on it.',
      'That distinction is the whole point. A land-lease space costs you rent forever and finances like a car. A deeded site is real property: it has its own tax lot, it has a deed, and the monthly number is a $245 HOA that covers water, sewer and garbage rather than rent that can be raised on you.',
      'The resort carries the amenities — walking paths, fishing ponds, waterways, a dog park, lodge, hot showers, laundry and a community space. Propane and firewood are sold on site. Tokatee is up the highway, and the rafting, fishing, hiking and hunting are all out the door.',
      'Plan on cash. Lenders generally will not write a mortgage on a recreational site, which is also why these trade quietly and why the buyer pool is small.',
    ],

    highlights: [
      ['Deeded, not leased', 'You own the site — it has its own tax lot'],
      ['$245/month HOA', 'Covers water, sewer and garbage'],
      ['Hookups in place', 'Full water, power and sewer'],
      ['Storage shed', 'Approximately 10 ft × 12 ft, wood'],
      ['Resort amenities', 'Lodge, ponds, trails, dog park, showers, laundry'],
      ['Cash purchase', 'Recreational sites rarely qualify for a mortgage'],
    ],

    factGroups: [
      ['The site', [
        ['Type', 'Deeded RV site — residential recreational'],
        ['Resort', 'Holiday Farm RV Resort'],
        ['Hookups', 'Water, power and sewer'],
        ['Improvements', 'Wood storage shed, approximately 10 ft × 12 ft'],
        ['Setting', 'Treed, paved access'],
        ['Lot size', 'Not stated in the RMLS record — ask'],
      ]],
      ['Ownership & costs', [
        ['Ownership', 'Deeded — you hold title to the site'],
        ['HOA dues', '$245 per month'],
        ['Dues include', 'Water, sewer, garbage'],
        ['Also on site', 'Propane and firewood available for purchase'],
        ['Amenities', 'Cable TV, commons, laundry, lodge, showers, dog park, ponds, trails'],
        ['Property taxes', '$306.01 (2025) — confirm with Lane County'],
      ]],
      ['Financial & legal', [
        ['List price', '$65,500'],
        ['County', 'Lane County'],
        ['Zoning', 'RC'],
        ['Tax ID / map', '1806924 · 16-55-20-22-90009'],
        ['MLS #', '780474229'],
        ['Listing terms', 'Cash'],
      ]],
    ],

    panel: {
      kind: 'rv',
      intro: 'A deeded recreational site is its own animal — not a house, not a park model on rented ground. Here is what actually governs it.',
      items: [
        ['You own it', 'Deeded site with its own tax lot',
          'This is real property. There is a deed, a tax account and a title company, and nobody can raise your rent or decline to renew your space. That is the single biggest difference from the park-model listings a few miles down the highway.'],
        ['The monthly number', '$245 HOA, covering water, sewer and garbage',
          'Ask for the HOA budget, the reserve study and the minutes before you write. These dues went from $185 to $245 a month between the 2024 listings and today, so look at the trend, not just the figure.'],
        ['Financing', 'Plan on cash',
          'Most lenders will not write a conventional mortgage on a recreational site. Some credit unions do recreational-land lending — worth one phone call — but price the deal as a cash purchase and treat financing as the upside.'],
        ['Using it', 'Read the resort rules first',
          'Occupancy limits, how long an RV may stay, what you may build, and whether you may rent it out are all resort rules, not state law. Get them in writing during your inspection period — especially if rental income is part of your math.'],
        ['Resale', 'A small, cash buyer pool',
          'These sell to a specific person at a specific time of year. That cuts both ways: you buy well in the off season, and you plan on a patient sale when you exit.'],
        ['Taxes', 'Low, but verify the figure',
          'The RMLS record shows $306.01 for 2025 — the same figure appears on all three sites at this resort, so confirm your parcel against the Lane County assessor rather than relying on the listing.'],
      ],
    },

    features: null,
    schools: [
      ['Elementary', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['Middle', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['High', 'McKenzie High School', 'McKenzie SD 68'],
    ],
    listedBy: 'Daniel Gandee & George Winters, Real Broker LLC',
    verify: ['The tax figure against the Lane County assessor', 'Site dimensions', 'Current resort rules on rentals and occupancy', 'Current price and status'],
  },

  {
    slug: '54432-mckenzie-hwy-23',
    status: 'active',
    address: '54432 McKenzie Highway',
    unit: 'Site 23',
    city: 'Blue River',
    state: 'OR',
    zip: '97413',
    county: 'Lane County',
    area: 'blue-river',
    neighborhood: 'Holiday Farm RV Resort',
    mls: '440628986',
    price: 80500,
    beds: null, baths: null, sqft: null, acres: null, yearBuilt: null,
    propertyType: 'Deeded RV site with a 2015 fifth-wheel included',
    taxes: 306,
    taxYear: '2025',
    hoa: '$245/month — includes water, sewer and garbage',
    listedOn: '2026-08-14',

    kicker: 'Blue River · Holiday Farm RV Resort',
    tagline: 'The turn-key one: a deeded site with a 2015 Montana 41-footer already on it.',

    description: [
      'Site 23 is the one you can use this weekend. It is a deeded recreational site at Holiday Farm RV Resort — you own the ground — and the sale includes a 2015 Montana 41-foot fifth wheel with four slide-outs and a washer and dryer in it.',
      'Full water, sewer and power are hooked up. Against the bare sites at this resort you are paying roughly fifteen thousand more and getting the RV, which is the difference between owning a place to park something and owning somewhere to sleep on Friday night.',
      'Dues are $245 a month and cover water, sewer and garbage. The resort side gives you the lodge, hot showers, a laundromat, a community space, walking trails, fishing ponds, waterways and a dog park, with propane and firewood sold on site.',
      'The listing points at short-term rental potential. Before you buy on that basis, get the resort rules in writing — what a resort permits today it can change, and rental income is the first thing those rules touch.',
    ],

    highlights: [
      ['RV included', '2015 Montana 41 ft, four slide-outs, washer and dryer'],
      ['Deeded site', 'You own the ground, with its own tax lot'],
      ['$245/month HOA', 'Water, sewer and garbage covered'],
      ['Hooked up', 'Full water, sewer and power'],
      ['Resort amenities', 'Lodge, ponds, trails, dog park, showers, laundry'],
      ['Minutes to Tokatee', 'Rafting, fishing, hiking and hunting out the door'],
    ],

    factGroups: [
      ['The site & the RV', [
        ['Type', 'Deeded RV site — residential recreational'],
        ['Resort', 'Holiday Farm RV Resort, site 23'],
        ['RV included', '2015 Montana, 41 ft, four slide-outs'],
        ['In the RV', 'Washer and dryer'],
        ['Hookups', 'Water, sewer and power'],
        ['Lot size', 'Not stated in the RMLS record — ask'],
      ]],
      ['Ownership & costs', [
        ['Ownership', 'Deeded — you hold title to the site'],
        ['HOA dues', '$245 per month'],
        ['Dues include', 'Water, sewer, garbage'],
        ['Amenities', 'Lodge, hot showers, laundromat, community space, trails, ponds, dog park'],
        ['Also on site', 'Propane and firewood available for purchase'],
        ['Property taxes', '$306.01 (2025) — confirm with Lane County'],
      ]],
      ['Financial & legal', [
        ['List price', '$80,500'],
        ['County', 'Lane County'],
        ['Zoning', 'RC'],
        ['Tax ID / map', '1807062 · 16-55-20-22-90023'],
        ['MLS #', '440628986'],
        ['Listing terms', 'Cash'],
      ]],
    ],

    panel: {
      kind: 'rv',
      intro: 'You are buying two things here — a deeded piece of ground and a ten-year-old fifth wheel. They behave very differently, and only one of them appreciates.',
      items: [
        ['The site', 'Deeded, with its own tax lot',
          'Real property with a deed and a title company. No space rent, no lease renewal, nobody deciding whether you may stay.'],
        ['The RV', 'A 2015 Montana — a depreciating asset',
          'Have the roof, the seals, the slide mechanisms, the tires and the appliances looked at by an RV tech, not a home inspector. Slide-outs and roof seals are where the money goes on a unit this age.'],
        ['The monthly number', '$245 HOA covering water, sewer and garbage',
          'Ask for the budget, the reserves and recent minutes. Dues rose from $185 to $245 between the 2024 listings and now.'],
        ['Financing', 'Plan on cash',
          'A conventional mortgage will not attach to this. RV lending exists for the unit itself, but the land and the trailer are different collateral — talk to a lender before you count on borrowing.'],
        ['Rental income', 'Verify before you rely on it',
          'The listing notes short-term rental potential. Whether you can actually rent it, for how long, and through whom is governed by resort rules and Lane County — get all of it in writing during the inspection period.'],
        ['Title', 'Two transfers, not one',
          'The site conveys by deed; the RV conveys by title or bill of sale. Make sure your escrow handles both, or you will own ground with somebody else\'s trailer on it.'],
      ],
    },

    features: null,
    schools: [
      ['Elementary', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['Middle', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['High', 'McKenzie High School', 'McKenzie SD 68'],
    ],
    listedBy: 'Daniel Gandee & George Winters, Real Broker LLC',
    verify: ['The tax figure against the Lane County assessor', 'Resort rules on short-term rental', 'RV condition and service history', 'Current price and status'],
  },

  {
    slug: '54432-mckenzie-hwy-24',
    status: 'active',
    address: '54432 McKenzie Highway',
    unit: 'Site 24',
    city: 'Blue River',
    state: 'OR',
    zip: '97413',
    county: 'Lane County',
    area: 'blue-river',
    neighborhood: 'Holiday Farm RV Resort',
    mls: '672015375',
    price: 53500,
    beds: null, baths: null, sqft: null, acres: null, yearBuilt: null,
    propertyType: 'Deeded RV site — residential recreational',
    taxes: 306,
    taxYear: '2025',
    hoa: '$245/month — includes water, sewer and garbage',
    listedOn: '2026-08-11',

    kicker: 'Blue River · Holiday Farm RV Resort',
    tagline: 'The cheapest way to own real property on the upper McKenzie.',

    description: [
      'Site 24 is the least expensive of the three deeded sites at Holiday Farm RV Resort, and it is bare ground with the hookups in — water, power and sewer already available.',
      'At this number you are buying a deed on the upper McKenzie for less than the price of a used truck. It has its own tax lot and its own tax bill, and the $245 monthly HOA covers water, sewer and garbage rather than renting you a space.',
      'The resort does the rest: lodge, dog park, trails, fishing ponds, waterways, hot showers, laundry and a community gathering space, with propane and firewood sold on site. Tokatee, the restaurants and the coffee are a short drive, and the rafting and fishing are immediate.',
      'Bring your own trailer, or buy site 23 up the road where one is already parked. Either way, plan on paying cash.',
    ],

    highlights: [
      ['Lowest entry price', 'The cheapest deeded site of the three'],
      ['Deeded ownership', 'Your own tax lot and tax bill'],
      ['$245/month HOA', 'Water, sewer and garbage included'],
      ['Hookups available', 'Water, power and sewer'],
      ['Resort amenities', 'Lodge, dog park, trails, ponds, showers, laundry'],
      ['Bring your own rig', 'Or look at site 23, which includes one'],
    ],

    factGroups: [
      ['The site', [
        ['Type', 'Deeded RV site — residential recreational'],
        ['Resort', 'Holiday Farm RV Resort, site 24'],
        ['Hookups', 'Water, power and sewer available'],
        ['Improvements', 'None — bare site'],
        ['Lot size', 'Not stated in the RMLS record — ask'],
      ]],
      ['Ownership & costs', [
        ['Ownership', 'Deeded — you hold title to the site'],
        ['HOA dues', '$245 per month'],
        ['Dues include', 'Water, sewer, garbage'],
        ['Amenities', 'Lodge, dog park, trails, fishing ponds, hot showers, laundry, community space'],
        ['Also on site', 'Propane and firewood available for purchase'],
        ['Property taxes', '$306.01 (2025) — confirm with Lane County'],
      ]],
      ['Financial & legal', [
        ['List price', '$53,500'],
        ['County', 'Lane County'],
        ['Zoning', 'RC'],
        ['Tax ID / map', '1807070 · 16-55-20-22-90024'],
        ['MLS #', '672015375'],
        ['Listing terms', 'Cash'],
      ]],
    ],

    panel: {
      kind: 'rv',
      intro: 'The cheapest listing on this site is still real property, and it still deserves the same four questions.',
      items: [
        ['You own it', 'Deeded site, own tax lot',
          'Title, deed, escrow, property tax bill — all the machinery of real ownership, at a price most people associate with renting a space.'],
        ['The monthly number', '$245 HOA covering water, sewer and garbage',
          'That is roughly $2,940 a year against a $53,500 purchase, so the dues matter to the math more than the price does. Ask for the budget and the reserve study, and note dues rose from $185 in 2024.'],
        ['Financing', 'Plan on cash',
          'Recreational sites do not generally qualify for a conventional mortgage. At this price most buyers pay cash, which is also your negotiating advantage.'],
        ['What you may put on it', 'Resort rules decide',
          'Rig age and size limits, how long you may stay, whether anything may be built, and rental rules are all in the resort documents. Read them during the inspection period, before you buy a trailer to put here.'],
        ['Taxes', 'Low, but verify',
          'The record shows $306.01 for 2025, identical to the other two sites — confirm your parcel with the Lane County assessor.'],
      ],
    },

    features: null,
    schools: [
      ['Elementary', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['Middle', 'McKenzie River Community School', 'McKenzie SD 68'],
      ['High', 'McKenzie High School', 'McKenzie SD 68'],
    ],
    listedBy: 'Daniel Gandee & George Winters, Real Broker LLC',
    verify: ['The tax figure against the Lane County assessor', 'Site dimensions', 'Resort rules on rig size, occupancy and rentals', 'Current price and status'],
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
