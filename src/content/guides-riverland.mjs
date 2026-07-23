// Riverfront & flood (10) + Land & acreage (10). General principles only —
// regulations referenced at the "verify with the county / FEMA / lender" level.

export const RIVERFRONT = [
  {
    cat: 'riverfront', slug: 'buying-riverfront-property-mckenzie', title: 'How do I buy riverfront property on the McKenzie?',
    short: 'Buying riverfront', tease: 'The six-check framework for buying on the water without buying a surprise.',
    metaDesc: 'The complete framework for buying McKenzie riverfront: flood zones, banks, setbacks, insurance, access, and how the river itself behaves.',
    answer: 'Buying riverfront well means clearing six checks before you commit: the FEMA flood zone and its insurance cost, the bank and its setback rules, the water and septic systems, legal access and easements, the river’s erosion history on that reach, and early insurance quotes for both flood and fire. Romance after diligence — that is the order.',
    sections: [
      { h: 'The six checks', body: [ 'Run them in roughly this order:' ],
        list: [
          '<strong>Floodplain first</strong> — confirm the FEMA zone and whether an elevation certificate exists; it drives insurance, lending, and future projects.',
          '<strong>Know the bank</strong> — setback and riparian rules shape what you can build, cut, or add near the water. Verify with the county before you plan anything.',
          '<strong>Water and septic lead the file</strong> — full rural diligence applies doubly near the water table.',
          '<strong>Access and easements</strong> — who owns the drive, who maintains it, and is it recorded?',
          '<strong>The river moves</strong> — ask about erosion history and bank work, and check what permits stand behind any armoring.',
          '<strong>Insure it early</strong> — flood and fire quotes before you write, not at closing.',
        ] },
      { h: 'Reading frontage like a local', body: [
        'Not all frontage is equal: a high stable bank with filtered river views lives differently than low meadow frontage with gravel-bar access — and they carry different risk, insurance, and joy profiles. Current speed, channel position, and sun across the water all shape daily life more than the listing photos admit.',
        'This is precisely where walking the property with someone who knows the river pays for itself. I read banks for a living; I will tell you what a specific frontage is and is not before you fall in love.' ] },
    ],
    rule: 'Buy the bank, not just the view — the bank is what you will maintain, insure, and live with.',
    faqs: [
      { q: 'Is riverfront worth the premium?', a: 'For the right owner, emphatically — frontage is the scarcest asset in the valley and the heart of its lifestyle. The premium deserves the full six-check diligence so you are paying for reality, not just imagery.' },
      { q: 'Can I put a dock or steps down the bank?', a: 'Work near or in the water typically involves permitting layers — county, state, sometimes federal. Never assume; we verify what is possible for the specific bank before that dream drives your offer.' },
      { q: 'Do all riverfront homes need flood insurance?', a: 'No — plenty sit above mapped flood zones. Requirements depend on the zone and your lender; costs depend on elevation details. That is why zone confirmation and early quotes lead the checklist.' },
    ],
    related: [
      { href: '/guides/riverfront/fema-flood-zones-explained/', label: 'FEMA zones, explained' },
      { href: '/guides/riverfront/riparian-setbacks-oregon/', label: 'Riparian setbacks' },
      { href: '/guides/riverfront/riverbank-erosion-what-buyers-should-know/', label: 'Erosion, honestly' },
      { href: '/riverfront/', label: 'The riverfront hub' },
    ],
  },
  {
    cat: 'riverfront', slug: 'fema-flood-zones-explained', title: 'FEMA flood zones, explained in plain English',
    short: 'Flood zones', tease: 'A, AE, X — the letters that quietly set your insurance bill and your lender’s rules.',
    metaDesc: 'What FEMA flood zone designations mean for buyers — how zones affect insurance, lending, and value on river property.',
    answer: 'FEMA maps sort land by modeled flood risk: high-risk zones (letters beginning with A) carry mandatory flood insurance on federally backed loans, while moderate/low-risk zones (X and similar) typically make insurance optional. The zone is a modeling product, not a prophecy — but it directly moves your costs, so confirm it before you offer.',
    sections: [
      { h: 'What the letters mean for you', body: [
        'In high-risk zones, lenders on federally related loans require flood insurance, and premiums turn on details like elevation relative to modeled flood levels — which is where elevation certificates earn their keep. Outside those zones, insurance is a choice many river-adjacent owners still make deliberately.',
        'Zones also shape projects: construction and substantial improvements in mapped floodplains involve additional standards and permitting. Your future addition cares about today’s map.' ] },
      { h: 'How to check and what to trust', body: [
        'FEMA’s public map service shows current zones by address, and county floodplain staff can clarify designations and local rules. Maps get revised; properties get letters of map amendment; and the mapped line on a specific parcel is worth confirming rather than eyeballing.',
        'Treat the map as the start of understanding, not the end: local flood history, elevation nuance, and drainage behavior fill in the real picture — the kind of thing neighbors and a local agent supply.' ] },
    ],
    rule: 'Confirm the zone, quote the insurance, then write the offer — in that order, every time.',
    faqs: [
      { q: 'Where do I look up a flood zone?', a: 'FEMA’s online flood map center shows current designations by address, and county floodplain staff can confirm specifics. I pull zone information as standard diligence on every river-country property.' },
      { q: 'What is an elevation certificate?', a: 'A surveyor-prepared document recording a structure’s elevations against modeled flood levels — often the difference between assumed premiums and accurate (frequently better) ones. See the dedicated guide.' },
      { q: 'Can flood maps change?', a: 'Yes — remapping happens, and individual properties can pursue map amendments with supporting survey data. Currency matters; we verify at transaction time.' },
    ],
    related: [
      { href: '/guides/riverfront/elevation-certificates/', label: 'Elevation certificates' },
      { href: '/guides/riverfront/flood-insurance-basics-oregon/', label: 'Flood insurance basics' },
      { href: '/guides/riverfront/buying-riverfront-property-mckenzie/', label: 'The riverfront framework' },
    ],
  },
  {
    cat: 'riverfront', slug: 'flood-insurance-basics-oregon', title: 'Flood insurance on river property: the basics that matter',
    short: 'Flood insurance', tease: 'When it is required, what moves the premium, and why quotes belong before offers.',
    metaDesc: 'Flood insurance fundamentals for Oregon river property: requirements, premium drivers, and transaction timing.',
    answer: 'Flood insurance is mandatory on federally backed loans for structures in FEMA high-risk zones and optional elsewhere. Premiums turn on zone, structure elevation, and coverage choices — varying enormously between neighboring properties. The operative rule is timing: quote before you offer, because the premium is part of the price.',
    sections: [
      { h: 'What drives the premium', body: [
        'Elevation is the headline variable: a home sitting comfortably above modeled flood levels can price dramatically differently than one at or below them, which is why elevation certificates matter. Zone, structure characteristics, prior claims history, and chosen coverage levels complete the picture.',
        'Standard homeowners policies exclude flood — a separate policy through the national program or private markets covers it. Agents who work river country quote this routinely.' ] },
      { h: 'Transaction playbook', body: [
        'Buyers: get the real quote inside your inspection window at the latest — ideally pre-offer on obviously mapped properties. Sellers: assembling zone documentation and any elevation certificate before listing removes your buyer’s scariest unknown and defends your price.',
        'A striking amount of river-property negotiation is actually insurance negotiation in disguise; the side holding accurate numbers first tends to hold the deal.' ] },
    ],
    rule: 'The flood premium is part of the purchase price — learn it before the seller does.',
    faqs: [
      { q: 'My lender doesn’t require it — should I carry it anyway?', a: 'Near a river, many prudent owners do; risk does not end at a mapped line. Weigh cost against exposure with your insurance professional — it is a choice, and it should be a conscious one.' },
      { q: 'Are private flood policies available?', a: 'The market includes both the federal program and private options, varying in availability and pricing. Shopping both through a capable agent is standard practice on river property.' },
      { q: 'Do past floods on a property raise premiums?', a: 'Claims history can matter, and it is also a disclosure conversation. Local flood history questions belong in every river purchase regardless of the insurance answer.' },
    ],
    related: [
      { href: '/guides/riverfront/fema-flood-zones-explained/', label: 'FEMA zones, explained' },
      { href: '/guides/riverfront/elevation-certificates/', label: 'Elevation certificates' },
      { href: '/guides/buying/budget-beyond-payment-not-used/', label: 'Budgeting the whole cost', hidden: true },
    ].filter((r) => !r.hidden),
  },
  {
    cat: 'riverfront', slug: 'elevation-certificates', title: 'What is an elevation certificate, and do I need one?',
    short: 'Elevation certificates', tease: 'One survey document that can reprice flood insurance — sometimes dramatically.',
    metaDesc: 'Elevation certificates explained: what they document, when they help, and how they affect flood insurance on river property.',
    answer: 'An elevation certificate is a surveyor-prepared record of a structure’s key elevations relative to modeled flood levels. In mapped flood zones it converts insurance pricing from assumptions to facts — which frequently works in the owner’s favor — and it supports map amendment requests when structures sit higher than the mapping presumed.',
    sections: [
      { h: 'When it earns its cost', body: [
        'If a structure in a mapped zone actually sits above modeled flood elevation, documented proof can meaningfully improve premiums or support removing the mandatory requirement through FEMA’s amendment process. Without the certificate, pricing defaults to conservative assumptions.',
        'On the McKenzie’s varied terrain — bench properties, raised homesites, sloped parcels — mapped zones and actual structure elevations diverge often enough that checking pays.' ] },
      { h: 'Practicalities', body: [
        'Certificates are prepared by licensed surveyors; sellers sometimes have them from prior transactions (ask — they transfer usefully), and buyers can commission them during diligence when the stakes justify.',
        'I flag certificate-worthy situations as part of river-property work: the pattern of “mapped in, sitting high” is exactly where a few hundred dollars of survey work can save real money annually.' ] },
    ],
    rule: 'Mapped in the zone but sitting high? Get the certificate — assumptions are expensive.',
    faqs: [
      { q: 'Does every flood-zone home need one?', a: 'No — value depends on the situation. Homes clearly at low elevations gain little; homes plausibly above modeled levels gain the most. It is a targeted tool, not a universal requirement.' },
      { q: 'Do certificates expire?', a: 'The underlying survey facts persist, though form versions and mapping updates evolve. An existing certificate is always worth collecting from a seller; currency questions get resolved with the insurer.' },
      { q: 'What is a LOMA?', a: 'A Letter of Map Amendment — FEMA’s mechanism for officially revising a property’s designation when survey evidence shows the mapping overstated its risk. Elevation certificates commonly support these requests.' },
    ],
    related: [
      { href: '/guides/riverfront/fema-flood-zones-explained/', label: 'FEMA zones, explained' },
      { href: '/guides/riverfront/flood-insurance-basics-oregon/', label: 'Flood insurance basics' },
      { href: '/guides/riverfront/selling-riverfront-home/', label: 'Selling riverfront' },
    ],
  },
  {
    cat: 'riverfront', slug: 'riparian-setbacks-oregon', title: 'Riparian setbacks: what can I actually do near the bank?',
    short: 'Riparian setbacks', tease: 'The strip along the water has its own rulebook. Learn it before you plan the deck.',
    metaDesc: 'How riparian setbacks and waterway protections shape building, cutting, and landscaping near the McKenzie riverbank.',
    answer: 'Land along waterways carries protective rules — setbacks for structures and limits on vegetation removal within riparian corridors — administered through county land use and state programs. The specifics vary by zone and situation, so the operating principle is simple: near the bank, verify before you build, cut, or clear.',
    sections: [
      { h: 'Why the rules exist and what they touch', body: [
        'Riparian corridors protect the river itself: bank stability, shade for water temperature, habitat, and water quality all depend on the vegetated edge. The practical consequences for owners are setback distances for new structures, review processes for work near the water, and limits on removing native vegetation along the bank.',
        'These rules are why “I’ll just clear all this brush for a better view” is a conversation to have with the county before the chainsaw — selective view corridors are often achievable through proper channels; wholesale clearing invites trouble.' ] },
      { h: 'Buying and planning around them', body: [
        'For buyers, setbacks define the real building envelope on river parcels — the buildable area may be meaningfully smaller than acreage suggests, which shapes value and plans. Existing structures near the water typically predate current rules and carry their own considerations for rebuilds and expansions.',
        'I treat setback reality as core diligence on every river property: we confirm what the specific parcel’s rules allow so your plans are built on ground truth rather than assumption.' ] },
    ],
    rule: 'Near the water, ask the county first — permission beats forgiveness by exactly the cost of restoration orders.',
    faqs: [
      { q: 'Can I cut trees along my bank?', a: 'Vegetation removal in riparian corridors is regulated; limited, permitted view work is often possible while wholesale clearing is not. Verify the specific parcel’s rules before cutting anything within the corridor.' },
      { q: 'How large are setbacks?', a: 'Distances vary by zoning and circumstance rather than a single universal number — which is precisely why parcel-specific verification is the rule. County planning staff answer these questions definitively.' },
      { q: 'Do setbacks affect existing homes?', a: 'Existing structures are typically lawful as built, with rules mattering most for expansions, rebuilds, and new work. Understanding the property’s status guides future flexibility — a due diligence item worth documenting.' },
    ],
    related: [
      { href: '/guides/riverfront/docks-decks-near-water-permits/', label: 'Docks & bank work' },
      { href: '/guides/riverfront/riverbank-erosion-what-buyers-should-know/', label: 'Erosion, honestly' },
      { href: '/guides/riverfront/buying-riverfront-property-mckenzie/', label: 'The riverfront framework' },
    ],
  },
  {
    cat: 'riverfront', slug: 'riverbank-erosion-what-buyers-should-know', title: 'Riverbank erosion: what buyers should actually worry about',
    short: 'Erosion', tease: 'The river moves. Here is how to tell normal from concerning on a specific bank.',
    metaDesc: 'Evaluating riverbank erosion when buying: reading banks, asking the right history questions, and understanding armoring.',
    answer: 'Rivers move — that is their nature — but reaches and banks differ enormously in how fast and how consequentially. Buyer diligence means reading the specific bank (materials, vegetation, height, position on the bend), asking about erosion history and any bank work, and verifying permits behind existing armoring. Concern is proportional to evidence, not to the mere presence of current.',
    sections: [
      { h: 'Reading a bank', body: [
        'Outside bends take the river’s energy; inside bends collect its gifts (gravel bars). Well-vegetated banks with established trees signal stability seasons have tested; raw vertical cuts and leaning trees tell of active work. Bank height and material — bedrock, cobble, soil — set how the reach behaves in high water.',
        'High water leaves notes: drift lines, scoured edges, deposits. Walking a frontage after winter tells you more than any summer showing — one of many reasons I like touring river property in the off season.' ] },
      { h: 'History and armoring', body: [
        'Ask directly: has the bank moved, has work been done, and what permits stand behind it? Bank armoring (riprap and similar) exists throughout the valley — properly engineered and permitted work is a normal feature, while informal armoring can carry regulatory and practical questions.',
        'Where evidence suggests active erosion, the question becomes professional: geotechnical or river-engineering opinions convert worry into assessment, and assessment into price. Some of the valley’s best buys have been properties where informed buyers priced manageable bank realities that scared uninformed ones away.' ] },
    ],
    rule: 'Walk the frontage after high water once before you own it for every high water after.',
    faqs: [
      { q: 'Is erosion insurable?', a: 'Standard policies generally do not cover gradual earth movement — which is why bank evaluation belongs in diligence rather than in hope. Flood insurance addresses flooding, a different peril.' },
      { q: 'Can I armor my bank if it erodes?', a: 'Bank work in and along waterways involves permitting through multiple agencies, and approaches have evolved toward engineered, habitat-conscious solutions. Possible, yes; casual, no. Verify paths before you rely on them.' },
      { q: 'Does erosion history kill value?', a: 'It prices it. Stable-bank frontage earns premiums; active-bank frontage trades at discounts proportional to assessment findings. Information is what separates pricing from gambling.' },
    ],
    related: [
      { href: '/guides/riverfront/riparian-setbacks-oregon/', label: 'Riparian rules' },
      { href: '/guides/riverfront/docks-decks-near-water-permits/', label: 'Bank work & permits' },
      { href: '/guides/riverfront/buying-riverfront-property-mckenzie/', label: 'The riverfront framework' },
    ],
  },
  {
    cat: 'riverfront', slug: 'docks-decks-near-water-permits', title: 'Docks, stairs, and decks near the water: the permit reality',
    short: 'Bank projects', tease: 'Everything built toward the river involves more paperwork than the same project uphill.',
    metaDesc: 'The permitting reality for docks, bank stairs, and near-water structures on Oregon rivers — what layers apply and how to plan.',
    answer: 'Projects near or in the water stack permitting layers: county land-use rules govern the riparian zone, state agencies govern work below high-water lines, and federal involvement can apply in the channel itself. None of this makes projects impossible — it makes them planned. Verify the path before promising yourself the dock.',
    sections: [
      { h: 'The layering, roughly', body: [
        'Think in zones: upland projects follow normal building rules; the riparian corridor adds county review; at and below the waterline, state removal-fill oversight applies, with federal touchpoints for in-channel work. Each layer asks its own questions about design, materials, and impact.',
        'What this means practically: simple bank stairs may be an achievable permitted project, while in-river structures face a higher bar. Existing unpermitted structures on a property you are buying deserve eyes-open evaluation — they can carry obligations.' ] },
      { h: 'Planning projects that succeed', body: [
        'Successful near-water projects share a pattern: early conversations with county planning, designs that respect the protective intent (habitat, stability, flood passage), and patience with process. Local contractors experienced in river work know the path and price it honestly.',
        'When buying, separate the property’s reality from the listing’s suggestion — “room for a dock” is a hypothesis until permitting says otherwise, and I will help you test it before it prices into your offer.' ] },
    ],
    rule: 'Buy what is permitted, plan what is permittable, and price fantasies at zero.',
    faqs: [
      { q: 'Are docks common on the McKenzie?', a: 'Less than on lakes — the McKenzie is a moving river with protective oversight, and river culture leans to bank access, stairs, and launches. Possibilities are parcel-specific; verify rather than extrapolate from other waterways.' },
      { q: 'What about existing unpermitted structures?', a: 'They transfer with their questions attached: potential compliance obligations and insurance considerations. Identifying them during diligence lets you price or resolve rather than inherit blindly.' },
      { q: 'Who do I even call first?', a: 'County planning is the right first conversation for near-water projects — they will orient you to which layers apply. I make these calls with clients routinely during diligence.' },
    ],
    related: [
      { href: '/guides/riverfront/riparian-setbacks-oregon/', label: 'Riparian setbacks' },
      { href: '/guides/riverfront/riverbank-erosion-what-buyers-should-know/', label: 'Bank realities' },
      { href: '/riverfront/', label: 'The riverfront hub' },
    ],
  },
  {
    cat: 'riverfront', slug: 'selling-riverfront-home', title: 'Selling a riverfront home: confidence is the strategy',
    short: 'Selling riverfront', tease: 'River buyers ask sharp questions. Sellers who answer with documents win.',
    metaDesc: 'How to sell riverfront property well: assembling the water story, preparation that pays, and marketing to river-minded buyers.',
    answer: 'Riverfront sells on two currents: the dream (which your photography and framing must honor) and the diligence (which your documentation must survive). Sellers who assemble the flood, bank, and systems story before listing — and present the water at its best — convert premium interest into premium closings.',
    sections: [
      { h: 'Assemble the water story first', body: [
        'Before the sign goes up, gather: flood zone documentation and any elevation certificate, insurance history, records of bank work and its permits, well and septic files, and dates of major system work. This file answers the exact questions educated river buyers ask — before hesitation compounds.',
        'Prepare the experience alongside the paperwork: open the view path to the water, groom the bank access, and let the river do its work on every showing.' ] },
      { h: 'Marketing to the river-minded', body: [
        'Your buyer may live in Eugene, Portland, or three states away — river property draws distance buyers like nothing else in the valley. Marketing reach, golden-hour photography, and video that carries the sound of the water extend your pool far beyond the local feed.',
        'Framing matters: name the reach, the frontage character, the launch distance, the fishing. Fluent river language signals a properly cared-for property and attracts the buyers who pay for exactly that.' ] },
    ],
    rule: 'Every question you answer before listing is a discount you never give at negotiation.',
    faqs: [
      { q: 'When is the best season to list riverfront?', a: 'The water shows gloriously spring through fall, and each season has arguments — see the timing guide. Preparation quality matters more than month; unprepared summer listings lose to prepared spring ones.' },
      { q: 'Should I do bank or view work before listing?', a: 'Within the rules, judicious view-path opening and access grooming pay strongly; anything touching the riparian corridor gets verified first. I will walk your frontage and give you the shortest high-return list.' },
      { q: 'How do you price frontage?', a: 'By walking it — frontage quality, bank character, flood posture, and reach reputation all price in ways algorithms cannot see. See the rural pricing guide for the philosophy.' },
    ],
    related: [
      { href: '/guides/selling/pricing-rural-property/', label: 'Pricing rural & riverfront' },
      { href: '/guides/riverfront/elevation-certificates/', label: 'Elevation certificates' },
      { href: '/guides/selling/best-time-to-sell-up-river/', label: 'Timing the listing' },
      { href: '/sell/', label: 'Sell with George' },
    ],
  },
  {
    cat: 'riverfront', slug: 'water-rights-basics-oregon', title: 'Water rights on rural property: the Oregon basics',
    short: 'Water rights', tease: 'Using water and owning the right to use it are different things in Oregon. Know which you are buying.',
    metaDesc: 'Oregon water rights fundamentals for rural buyers: what requires a right, common exemptions, and verifying claims in diligence.',
    answer: 'Oregon water is publicly owned and its use is administered by permit: most surface-water diversions and many uses require established water rights, while limited domestic and stock uses fall under recognized exemptions. When a property claims irrigation or surface-water use, verifying the actual right — its status, terms, and transferability — is essential diligence.',
    sections: [
      { h: 'The framework in brief', body: [
        'The state administers use rights under prior appropriation — seniority matters — through permits and certificates recorded with the water resources agency. Household wells commonly operate under statutory exemptions for limited domestic use; drawing from the river for irrigation is a different matter entirely, resting on documented rights.',
        'Marketing language like “irrigation from the river” or “water rights included” is a claim to verify, not a fact to assume: rights have specific terms (source, use, season, quantity, place of use) and can lapse through non-use.' ] },
      { h: 'Diligence on watered properties', body: [
        'For properties where water use matters — pasture irrigation, serious gardens, stock operations — we verify the right’s documentation and status with the state record, and confirm the claimed use matches the paper. Mismatches are common enough to check for and consequential enough to price.',
        'Where no right exists, understand what exempt uses genuinely cover and design plans within them. Water law rewards the literal-minded.' ] },
    ],
    rule: '“Water rights included” is the beginning of a document request, not the end of a question.',
    faqs: [
      { q: 'Does my well need a water right?', a: 'Ordinary domestic wells generally operate under statutory exemptions with defined limits; expanded uses can exceed them. Understanding which side of the line your plans fall on is part of rural buying.' },
      { q: 'Can I water my garden from the river?', a: 'Surface diversions generally implicate the rights system beyond narrow exceptions — verify before building plans (or pumps) around river water. The state record answers definitively.' },
      { q: 'Do water rights transfer with the land?', a: 'Rights are typically appurtenant to land but with terms, status, and sometimes transfer processes that matter. Verification during the transaction protects what you think you are buying.' },
    ],
    related: [
      { href: '/guides/land/buying-land-mckenzie-valley/', label: 'Buying land right' },
      { href: '/guides/wells/what-is-a-well-log/', label: 'Wells and their records' },
      { href: '/areas/camp-creek/', label: 'Farm country: Camp Creek' },
    ],
  },
  {
    cat: 'riverfront', slug: 'river-vs-view-vs-access', title: 'River frontage vs. river view vs. river access: pricing the difference',
    short: 'Frontage vs view', tease: 'Three very different products hide inside “river property.” Buy the one you actually want.',
    metaDesc: 'The real differences between riverfront, river view, and river access properties — lifestyle, diligence, and value.',
    answer: 'The valley sells three distinct products: frontage (you own to the water), view (you see it from your deck), and access (you can reach it nearby). They price differently, inspect differently, and live differently — and buyers who name which experience they actually want save money and heartache.',
    sections: [
      { h: 'What each one is', body: [
        'Frontage is ownership of the river edge: maximal immersion, maximal diligence (banks, flood, setbacks), premium pricing. View properties trade the waterline for elevation — often better sun, simpler diligence, and meaningful savings, with the river as scenery rather than neighbor. Access properties sit near public or community river points: the lifestyle at another discount, with the walk or drive as the trade.',
        'None is “best.” Anglers and boaters weight frontage; view lovers routinely discover elevation suits them better than bank life; budget-strategic buyers leverage access properties into more house or land.' ] },
      { h: 'Choosing deliberately', body: [
        'Interrogate the daily reality you want: morning coffee sound? Launch-from-the-yard fishing? Or golden light on water from a warm deck? Your honest answer reorders the property list and often improves the budget.',
        'I make clients say it out loud before we tour — because the county is full of frontage owners who wanted views and view owners who wanted frontage, each having paid for the wrong noun.' ] },
    ],
    rule: 'Name the noun you are buying — frontage, view, or access — before the tour, not after the closing.',
    faqs: [
      { q: 'How much more does frontage cost?', a: 'Premiums vary by reach, bank quality, and frontage length — priced property by property rather than by formula. What is consistent is that frontage leads the market and carries the deepest diligence.' },
      { q: 'Do view properties have river rights?', a: 'A view confers no rights to cross intervening land or use the water from it — access is a legal question about easements and public points. We verify actual access rather than assuming scenery implies it.' },
      { q: 'Is access property a good compromise?', a: 'For many buyers, genuinely — especially near quality public launches like the corridor’s parks. The savings against frontage can fund the boat that makes the river truly yours.' },
    ],
    related: [
      { href: '/guides/riverfront/buying-riverfront-property-mckenzie/', label: 'The riverfront framework' },
      { href: '/guides/riverfront/riverbank-erosion-what-buyers-should-know/', label: 'Bank realities' },
      { href: '/areas/', label: 'Find your reach: area guides' },
    ],
  },
]

export const LAND = [
  {
    cat: 'land', slug: 'buying-land-mckenzie-valley', title: 'Buying land in the McKenzie Valley: the complete framework',
    short: 'Buying land', tease: 'Seven checks turn a beautiful parcel into a buildable one — or reveal it never will be.',
    metaDesc: 'The seven-part diligence framework for buying bare land on the McKenzie corridor: access, zoning, septic, water, power, survey, and fire history.',
    answer: 'Land diligence runs seven checks: legal access, zoning capability, septic feasibility, water prospects, utility realities, survey certainty, and site history including fire. A parcel is worth what those seven answers say — the view is just the bonus that makes you want to ask them.',
    sections: [
      { h: 'The seven checks', body: [ 'In rough order of dealbreaker potential:' ],
        list: [
          '<strong>Legal access</strong> — recorded easement or deeded frontage; a handshake is not access.',
          '<strong>Zoning capability</strong> — confirm a dwelling is possible for this parcel under its zone; farm and forest zones have specific paths and limits.',
          '<strong>Septic feasibility</strong> — the site evaluation gates everything where sewer does not reach.',
          '<strong>Water</strong> — well prospects via neighboring logs, or spring/community alternatives with their legal status.',
          '<strong>Utilities & driveway math</strong> — real quotes for power distance and access construction; these swing budgets by tens of thousands.',
          '<strong>Survey & corners</strong> — know exactly what you are buying; old fences lie.',
          '<strong>Site history</strong> — fire, fill, prior uses, and anything the ground remembers that the listing forgot.',
        ] },
      { h: 'Sequencing and structure', body: [
        'Smart land offers buy time to verify: feasibility contingencies covering evaluation, research, and quotes are standard practice, and sellers of honest parcels accept them. The alternative — buying first, discovering second — funds many of the valley’s cautionary tales.',
        'I walk parcels with clients before and during diligence: fence lines, corners, soils, sun, slope, and the site plan puzzle of where well, septic, home, and driveway can actually coexist. The dirt decides; we just interview it properly.' ] },
    ],
    rule: 'Never pay homesite prices for land that has not proven it can host a home.',
    faqs: [
      { q: 'How long does land diligence take?', a: 'Longer than house diligence — evaluations, research, and quotes have their own timelines, which your offer’s contingency structure should respect. Rushing land diligence is how expensive lessons get purchased.' },
      { q: 'Is owner financing common on land?', a: 'It appears more often than in the house market and can serve both sides well — with terms deserving the same professional attention as any loan. Another reason land deals reward experienced guidance.' },
      { q: 'What makes a parcel a good buy?', a: 'Alignment between the seven answers and the price. Great buys are usually parcels whose capability exceeds what casual buyers could see — which is exactly what diligence reveals.' },
    ],
    related: [
      { href: '/guides/land/legal-access-easements/', label: 'Access & easements' },
      { href: '/guides/land/zoning-farm-forest-oregon/', label: 'Zoning, decoded' },
      { href: '/guides/septic/site-evaluation-bare-land-septic/', label: 'Septic feasibility', hidden: true },
      { href: '/guides/septic/site-evaluation-bare-land-septic/', label: 'Septic feasibility' },
      { href: '/land/', label: 'The land hub' },
    ].filter((r) => !r.hidden),
  },
  {
    cat: 'land', slug: 'legal-access-easements', title: 'Legal access and easements: is that driveway actually yours to use?',
    short: 'Access & easements', tease: 'The most romantic parcels hide the least romantic problem. Verify the way in.',
    metaDesc: 'Legal access fundamentals for rural property: recorded easements, landlocked risks, and how buyers verify the way in.',
    answer: 'Legal access means a recorded right to reach your parcel — deeded road frontage or a documented easement across intervening land. Physical driveways prove nothing: rural Oregon is dotted with roads used for decades on neighborly tolerance that no title insurer will bless. Verification through title work is non-negotiable diligence.',
    sections: [
      { h: 'What counts and what does not', body: [
        'Counts: frontage on a public road, or an easement recorded in the chain of title granting passage with defined location and terms. Does not count: habit, kindness, “it has always been this way,” or a gate the neighbor has never locked — yet.',
        'Easements themselves deserve reading, not just confirming: width, permitted uses, maintenance obligations, and utility rights vary, and the differences surface exactly when you build, log, or quarrel.' ] },
      { h: 'When access is imperfect', body: [
        'Imperfect access is negotiable access: easements can be formalized with cooperative neighbors (motivated sellers help motivate them), title companies can insure documented solutions, and prices can reflect unresolved questions. What imperfect access cannot be is ignored.',
        'True landlocked parcels — no legal access at all — trade at deep discounts for good reason; the legal paths to creating access exist but are neither cheap, quick, nor guaranteed. Buy them only with eyes fully open.' ] },
    ],
    rule: 'If the right to drive home is not recorded, you do not own it — you borrow it.',
    faqs: [
      { q: 'The seller says access has never been a problem — enough?', a: 'It is testimony, not title. The record either shows legal access or it does not; title review answers definitively, and your purchase should depend on that answer.' },
      { q: 'Who maintains a shared easement road?', a: 'Whatever the documents say — which is sometimes nothing, leaving maintenance to informal arrangement. Written road maintenance agreements are the durable answer; see the dedicated guide.' },
      { q: 'Can utilities use my access easement?', a: 'Only if its terms include utility rights — a detail that matters enormously for building on back parcels. Reading the easement beats assuming its generosity.' },
    ],
    related: [
      { href: '/guides/land/road-maintenance-agreements/', label: 'Road maintenance agreements' },
      { href: '/guides/land/buying-land-mckenzie-valley/', label: 'The land framework' },
      { href: '/guides/land/surveys-property-corners/', label: 'Surveys & corners' },
    ],
  },
  {
    cat: 'land', slug: 'zoning-farm-forest-oregon', title: 'Farm and forest zoning: what can I actually build out here?',
    short: 'Zoning', tease: 'Oregon protects working land fiercely. Your parcel’s zone decides your options before you do.',
    metaDesc: 'How Oregon farm and forest zoning shapes rural building rights — dwelling paths, limits, and verifying parcel capability.',
    answer: 'Much of rural Lane County sits in resource zones — farm and forest designations under Oregon’s land use system — where dwellings are allowed only through specific qualifying paths rather than by right. The same acreage can be a homesite or forever-unbuildable depending on its zone and history, so parcel-specific verification with county planning leads all land diligence.',
    sections: [
      { h: 'Why Oregon works this way', body: [
        'Oregon’s statewide land use program channels development toward urban growth areas and protects farm and forest land — the reason the valley still looks like the valley. For rural buyers, the practical effect is that residential use in resource zones runs through defined qualification paths with real criteria, not through optimism.',
        'Existing lawful dwellings carry their status with them (with rules around replacement and expansion), which is part of why improved rural properties price differently than bare resource land nearby.' ] },
      { h: 'Verifying capability', body: [
        'County planning can tell you a parcel’s zone, its dwelling status or paths, and what your intended uses require. This conversation is free, definitive, and belongs before any land offer — or inside its contingencies.',
        'Marketing language deserves particular skepticism here: “buildable” is a legal conclusion sellers do not get to declare. I verify zoning capability as the first phone call on any parcel a client loves.' ] },
    ],
    rule: 'The zone answers before the parcel does — ask planning first, dream second.',
    faqs: [
      { q: 'What do EFU and forest zoning mean for a buyer?', a: 'They are resource designations where residential use runs through specific qualifying paths with criteria that vary by situation. The label means “verify capability,” not “impossible” — and not “assured” either.' },
      { q: 'Can I put a manufactured home or ADU on resource land?', a: 'Dwelling type does not bypass zoning capability — the parcel’s dwelling path governs. Where dwellings are allowed, separate rules address types and accessory units; all verified with the county.' },
      { q: 'Do zones ever change?', a: 'Rarely and slowly — buy parcels for what they are, not what rezoning dreams suggest. Capability today is the honest basis for price today.' },
    ],
    related: [
      { href: '/guides/land/buying-land-mckenzie-valley/', label: 'The land framework' },
      { href: '/guides/septic/site-evaluation-bare-land-septic/', label: 'Septic feasibility' },
      { href: '/guides/land/timber-land-considerations/', label: 'Timber ground' },
    ],
  },
  {
    cat: 'land', slug: 'timber-land-considerations', title: 'Buying timbered ground: beauty with homework attached',
    short: 'Timber land', tease: 'Trees are value, obligation, and fire math all at once. The questions that sort it out.',
    metaDesc: 'What buyers of timbered parcels should verify: harvest history, replanting obligations, tax programs, access, and fire considerations.',
    answer: 'Timbered parcels layer extra diligence onto the land framework: harvest history and any replanting obligations, enrollment in timber tax programs (with their deferral benefits and potential back-tax consequences), practical access for management, and fire exposure planning. The trees are an asset precisely proportional to how well you understand them.',
    sections: [
      { h: 'The paper behind the trees', body: [
        'Recent harvests carry reforestation obligations under Oregon’s forest practice rules — verify completion status rather than inherit surprises. Tax program enrollment (timber deferrals) lowers carrying costs but can trigger consequences when use changes; understand the program status and its exit math before your plans collide with it.',
        'Standing timber value itself is real but specialized — for parcels where it materially matters, professional cruising beats everyone’s guesses, including the seller’s.' ] },
      { h: 'Living with timbered land', body: [
        'Management is part of ownership: road and culvert upkeep, hazard-tree awareness near improvements, and fire-wise planning around any building envelope. None of it is burdensome to people who wanted trees; all of it belongs in the budget conversation.',
        'The reward side needs no selling — privacy, habitat, beauty, and optionality that bare pasture never offers. Buy it with the homework done and timbered ground is some of the most satisfying property in the valley.' ] },
    ],
    rule: 'Ask every timbered parcel three questions: what was cut, what was promised, and what does the tax program expect?',
    faqs: [
      { q: 'What are replanting obligations?', a: 'Oregon’s forest practices framework requires reforestation after harvest on forestland — obligations that run with the land. Verifying satisfaction is standard timber-parcel diligence.' },
      { q: 'What is timber tax deferral?', a: 'Programs that assess enrolled forestland at resource values, reducing annual taxes, with potential back-assessment when land leaves qualifying use. Enrollment status shapes both carrying cost and exit planning.' },
      { q: 'Can I harvest my own timber later?', a: 'Private harvests operate under the state’s forest practice rules — notification, protection standards, replanting. Many owners do it well with professional help; it is regulated, not forbidden.' },
    ],
    related: [
      { href: '/guides/land/zoning-farm-forest-oregon/', label: 'Forest zoning' },
      { href: '/guides/land/fire-affected-land/', label: 'Fire-affected parcels' },
      { href: '/areas/mohawk-valley/', label: 'Timber country: Mohawk Valley' },
    ],
  },
  {
    cat: 'land', slug: 'road-maintenance-agreements', title: 'Road maintenance agreements: who fixes the potholes?',
    short: 'Road agreements', tease: 'Shared rural roads run on paperwork or on grudges. Buyers should know which before closing.',
    metaDesc: 'Why road maintenance agreements matter on shared rural roads, what good ones cover, and lender expectations.',
    answer: 'Private shared roads need an answer to one question — who maintains them, and how are costs shared? Written, recorded agreements provide it; their absence leaves maintenance to goodwill, which ages poorly and complicates some financing. Buyers on shared access should read the agreement or price its absence.',
    sections: [
      { h: 'What good agreements cover', body: [
        'The durable ones address cost allocation among users, maintenance standards and decision-making, collection mechanics for shared expenses, and how new users join. Recording makes them run with the land — binding future neighbors rather than depending on the current cast’s chemistry.',
        'Some lenders ask about maintenance arrangements on shared-access properties; documented agreements answer cleanly, while informality can add friction to underwriting.' ] },
      { h: 'When there is no agreement', body: [
        'Common, survivable, and worth pricing: many valley roads run for decades on rotating goodwill. The risks are the outlier neighbor, the major repair, and the sale-time questions — all manageable, none deniable.',
        'Creating agreements retroactively is possible with willing neighbors and is easiest to catalyze at transaction moments — sometimes the best gift a closing gives a road.' ] },
    ],
    rule: 'A recorded agreement is cheaper than a grudge and lasts longer than a handshake.',
    faqs: [
      { q: 'Is the county responsible for our gravel road?', a: 'Only if it is a county-maintained public road — many rural lanes are private, and the county line matters. Verifying which is which belongs to basic diligence.' },
      { q: 'What do shared road costs run?', a: 'Gravel, grading, brushing, culverts, and winter events — varying with road length, terrain, and standards. History from current users is the best estimator; agreements make future costs predictable.' },
      { q: 'Can one neighbor refuse to pay?', a: 'Under a recorded agreement, obligations bind; without one, leverage is social. This asymmetry is the entire argument for paperwork.' },
    ],
    related: [
      { href: '/guides/land/legal-access-easements/', label: 'Access & easements' },
      { href: '/guides/wells/shared-wells-agreements/', label: 'Shared wells' },
      { href: '/guides/land/driveways-culverts-rural/', label: 'Driveway realities' },
    ],
  },
  {
    cat: 'land', slug: 'utilities-power-to-bare-land', title: 'Getting power to bare land: the math nobody posts in the listing',
    short: 'Power to land', tease: 'Distance to power can cost more than the land. Get the number before you get the dream.',
    metaDesc: 'Estimating utility extension costs on bare land: line distance, trenching, transformers, and alternatives like solar.',
    answer: 'Power extension pricing is distance-and-conditions math: from the nearest line, through overhead or trenched runs, transformers, and terrain, costs scale quickly — sometimes past the land’s own price on remote parcels. Real quotes from the utility beat every estimate, and belong inside your feasibility window.',
    sections: [
      { h: 'What drives the number', body: [
        'The big variables: distance from existing distribution, overhead versus underground preference (and requirement), terrain and vegetation along the route, easements if the route crosses others’ land, and the utility’s current construction pricing. Each parcel is its own quote; folklore numbers mislead in both directions.',
        'Route legality matters as much as route length — power that must cross a neighbor needs recorded utility easements, connecting this guide to the access one.' ] },
      { h: 'Alternatives and strategy', body: [
        'Off-grid solar-plus-storage has matured into a genuine alternative for some builds, pricing against extension costs rather than against nothing — remote parcels increasingly pencil this way. Hybrid strategies (build off-grid now, extend later) also exist, with their own economics.',
        'Strategically: get the utility’s real quote during feasibility, price the parcel accordingly, and treat sellers’ soft “power is close” assurances as invitations to verify. Close is a number, not an adjective.' ] },
    ],
    rule: '“Power at the road” is a fact; “power is close” is a negotiation tactic. Quote it.',
    faqs: [
      { q: 'How do I get an actual quote?', a: 'The serving utility provides extension estimates for specific parcels — a normal request I help clients initiate during feasibility periods. Allow time; it is worth the wait.' },
      { q: 'Does power add value to land?', a: 'Substantially — powered parcels skip a major unknown and a major cost, which markets reward. It is one reason improved-versus-raw pricing gaps are rational.' },
      { q: 'Is off-grid realistic in the valley?', a: 'Increasingly yes for appropriately designed builds, with winter solar realities honestly engineered around. It is a lifestyle and design choice with real economics on remote ground.' },
    ],
    related: [
      { href: '/guides/land/buying-land-mckenzie-valley/', label: 'The land framework' },
      { href: '/guides/land/driveways-culverts-rural/', label: 'Driveway math' },
      { href: '/guides/living/internet-cell-service-up-river/', label: 'Connectivity up river' },
    ],
  },
  {
    cat: 'land', slug: 'driveways-culverts-rural', title: 'Driveways, culverts, and the first hundred feet',
    short: 'Driveways', tease: 'Access construction is where land budgets quietly break. Read the route before you buy it.',
    metaDesc: 'What rural driveway construction really involves: grade, drainage, culverts, permits, and emergency access standards.',
    answer: 'A rural driveway is civil engineering in miniature: grade limits for winter and safety, drainage that survives Oregon rain, culverts where water crosses, surfacing that holds, and enough width and turnaround for fire apparatus. On sloped or creek-crossed parcels, access construction belongs in the budget beside the well and septic — quoted, not guessed.',
    sections: [
      { h: 'Reading a route', body: [
        'Walk the likely alignment asking water questions: where does rain travel, what must the drive cross, and how will the route shed rather than collect flow? Grade questions follow — sustained steepness complicates winter access, delivery trucks, and future owners’ patience.',
        'Existing driveways deserve the same read: washboard, rutting, failed culverts, and moss tell maintenance history; a beautiful house behind a failing drive is a project with a porch.' ] },
      { h: 'Standards and permits', body: [
        'Driveway approaches onto public roads involve permits; fire access standards (width, grade, turnarounds) apply to new residential construction and shape design; and stream crossings escalate into their own permitting world. None of this is exotic — local excavation contractors price it daily, and their quotes belong in feasibility.',
        'Money-saving truth: routes chosen for water behavior and modest grade cost less forever than routes chosen for drama. The corridor’s best driveways are boring in exactly the right ways.' ] },
    ],
    rule: 'Budget the driveway like a structure — because it is one, laid on its side.',
    faqs: [
      { q: 'What does driveway construction cost?', a: 'Length, grade, drainage complexity, and rock dictate it — local quotes on the actual route are the only honest numbers. Feasibility windows exist to obtain them.' },
      { q: 'What is a culvert’s job?', a: 'Letting water continue its argument under your road instead of through it. Sizing and placement matter; crushed and undersized culverts are the classic rural failure points.' },
      { q: 'Do fire trucks really need turnarounds?', a: 'Access standards for emergency apparatus shape approvals for new builds — and serve your own interests profoundly. Design access you would want help arriving on.' },
    ],
    related: [
      { href: '/guides/land/utilities-power-to-bare-land/', label: 'Power extension math' },
      { href: '/guides/living/winter-up-river/', label: 'Winter access realities' },
      { href: '/guides/land/buying-land-mckenzie-valley/', label: 'The land framework' },
    ],
  },
  {
    cat: 'land', slug: 'surveys-property-corners', title: 'Surveys and corners: know exactly what you are buying',
    short: 'Surveys', tease: 'Old fences lie, deeds disagree, and acreage rounds optimistically. Pins do not.',
    metaDesc: 'Why land surveys matter: verifying boundaries, catching encroachments, and when buyers should commission one.',
    answer: 'A survey establishes where the property legally is — corners marked, lines defined, encroachments revealed. Rural boundaries drift in memory: fences follow convenience, driveways wander, and “about five acres” carries generous rounding. When value hangs on boundaries, buildable area, or that gorgeous meadow actually being included, surveying is cheap certainty.',
    sections: [
      { h: 'What surveys catch', body: [
        'The classics: fences meaningfully off-line (in either direction), neighbor improvements encroaching (or yours encroaching outward), access drives crossing corners of other ownership, and acreage differing from marketing. Each is better discovered as a negotiating fact than inherited as a surprise.',
        'Surveys also anchor everything else on bare land — septic areas, setbacks, and building envelopes all measure from lines someone must locate correctly.' ] },
      { h: 'When to commission one', body: [
        'Strong cases: bare land purchases, boundary-dependent value (that meadow, that river bend), visible ambiguity or neighbor structures near lines, and any planned building near setbacks. Existing recent surveys transfer usefully — ask sellers first.',
        'Title insurance and surveys answer different questions; title confirms ownership rights while surveys locate them on dirt. Big rural purchases often deserve both answers.' ] },
    ],
    rule: 'Where the money depends on where the line is, pay the surveyor before you pay the seller.',
    faqs: [
      { q: 'What does a survey cost?', a: 'It scales with parcel complexity, terrain, and record quality — obtain local quotes rather than trusting ranges. Against rural purchase prices, certainty is consistently cheap.' },
      { q: 'The corners have old pins — good enough?', a: 'Found monuments help, but their story (original? disturbed? whose?) is a surveyor’s question. Verification beats archaeology-by-assumption on consequential lines.' },
      { q: 'What happens when a survey finds an encroachment?', a: 'It becomes a transaction item: resolved by agreement, easement, price, or occasionally walking away. All better than the post-closing version of the same discovery.' },
    ],
    related: [
      { href: '/guides/land/legal-access-easements/', label: 'Access & easements' },
      { href: '/guides/land/buying-land-mckenzie-valley/', label: 'The land framework' },
      { href: '/guides/selling/preparing-rural-home-to-sell/', label: 'Seller preparation' },
    ],
  },
  {
    cat: 'land', slug: 'fire-affected-land', title: 'Buying fire-affected land: clear eyes, real opportunity',
    short: 'Fire-affected parcels', tease: 'The 2020 fire reshaped parts of this valley. Evaluating its parcels honestly serves everyone.',
    metaDesc: 'How to evaluate fire-affected parcels respectfully and rigorously: hazard trees, soils, systems, replanting, and insurance.',
    answer: 'Fire-affected parcels deserve both respect and rigor: verify hazard-tree status, soil and erosion condition, the fate of wells and septic systems, any replanting obligations, and current insurance realities. Evaluated honestly, some of the valley’s genuine opportunities sit on recovering ground — bought by people who did the work.',
    sections: [
      { h: 'The specific diligence', body: [
        'Beyond standard land checks: standing dead timber status (hazard and value questions both), soil stability on slopes, whether existing wells and septic systems survived intact (testable, not guessable), debris and cleanup history, and reforestation obligations where harvest or salvage occurred.',
        'Insurance conversations belong early — carriers view landscapes and mitigation postures individually, and quotes inform budgets like any other utility of ownership.' ] },
      { h: 'The human layer', body: [
        'This valley’s fire story is recent and personal. Transactions on affected ground go best with factual directness and human decency together — history disclosed and discussed plainly, opportunity framed without cheerfulness about others’ losses.',
        'The recovery itself is real: green returns in stages, communities rebuild with intention, and buyers joining that arc — building fire-wise, replanting, stewarding — become part of the valley’s best chapter. I am glad to walk that ground with you.' ] },
    ],
    rule: 'Price fire-affected ground on verified condition and honest recovery timelines — then build like fire is possible, because it always was.',
    faqs: [
      { q: 'Are burned parcels cheaper?', a: 'Often priced for their realities, yes — which is appropriate rather than predatory when diligence defines those realities. Value returns with recovery and improvements; timelines deserve honesty.' },
      { q: 'Can I build on fire-affected land?', a: 'Zoning capability governs as always, with rebuilding rules for previously developed parcels a specific topic to verify. Fire-wise construction standards are wise regardless of requirement.' },
      { q: 'What about the trees that burned?', a: 'Standing dead timber involves safety, salvage, and obligation questions — professional assessment sorts hazard from habitat from harvest. Replanting obligations from salvage operations transfer with land.' },
    ],
    related: [
      { href: '/guides/living/wildfire-preparedness-defensible-space/', label: 'Building fire-wise' },
      { href: '/areas/blue-river/', label: 'Blue River’s comeback' },
      { href: '/guides/land/buying-land-mckenzie-valley/', label: 'The land framework' },
    ],
  },
  {
    cat: 'land', slug: 'manufactured-homes-on-land-oregon', title: 'Manufactured homes on land: financing, titling, and value',
    short: 'Manufactured on land', tease: 'A major share of rural living runs on manufactured homes. The details that decide their deals.',
    metaDesc: 'Manufactured homes on rural land: title status, foundation and financing realities, and what buyers should verify.',
    answer: 'Manufactured homes house much of rural Oregon well — but their transactions turn on details site-built deals skip: whether the home’s title is retired into the real property, foundation and installation status, age and standard compliance for financing, and condition of the marriage between home and land. Verify these early; they gate lenders and shape value.',
    sections: [
      { h: 'The details that gate deals', body: [
        'Title status leads: homes formally converted to real property (title retired, affixed to owned land) finance conventionally in ways personally-titled homes do not. Installation and foundation documentation, home age relative to lending standards, and any alterations follow close behind.',
        'These are checkbox items when right and deal-benders when wrong — which is why they belong in the first week of diligence, not the last.' ] },
      { h: 'Value honestly framed', body: [
        'Well-sited manufactured homes on good land deliver the valley lifestyle at accessible prices, and the land component appreciates by land rules. Markets do distinguish construction types; buying the combination knowingly — strong land, sound home, clean paperwork — is the strategy that ages well.',
        'For land buyers considering placing a home: siting, permitting, and installation standards apply, and zoning capability governs as with any dwelling. Plan the whole stack before purchase.' ] },
    ],
    rule: 'On manufactured deals, read the title status before you read the floor plan.',
    faqs: [
      { q: 'What does “title retired” mean?', a: 'The home’s vehicle-style title is formally eliminated and the structure becomes part of the real property — the status conventional financing generally expects. Verification is documentary and definitive.' },
      { q: 'Do age limits really matter?', a: 'Financing programs distinguish by construction era and standards compliance, affecting loan availability meaningfully. Knowing the home’s date and documentation up front prevents late surprises.' },
      { q: 'Can I replace an old manufactured home with a new one?', a: 'Frequently, subject to zoning, permitting, and siting standards — an established path that keeps many rural properties current. Verify the specific parcel’s situation with the county.' },
    ],
    related: [
      { href: '/guides/buying/pre-approval-first/', label: 'Financing groundwork' },
      { href: '/guides/land/zoning-farm-forest-oregon/', label: 'Zoning capability' },
      { href: '/guides/buying/home-inspections-rural-additions/', label: 'The rural inspection stack' },
    ],
  },
]
