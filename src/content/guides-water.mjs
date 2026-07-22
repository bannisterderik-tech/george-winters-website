// Wells (8) + Septic (7). General, verifiable guidance only — no invented
// numbers or program specifics; "verify current" nudges where rules move.

export const WELLS = [
  {
    cat: 'wells', slug: 'what-is-a-well-log', title: 'What is a well log, and how do I read one?',
    short: 'Well logs', tease: 'The single most useful document on any well property — and most buyers never open it.',
    metaDesc: 'What a water well log tells you — depth, age, construction, and yield — and how McKenzie Valley buyers and sellers should use one.',
    answer: 'A well log is the driller’s official record of how a well was constructed: its depth, date, materials, the geology encountered, and the yield measured at completion. Oregon wells are logged with the state, and reading the log is step one of understanding any rural property’s water.',
    sections: [
      { h: 'What the log tells you', body: [
        'Think of the log as the well’s birth certificate. It records when the well was drilled and by whom, how deep it goes, how it is cased and sealed, what layers of rock and soil the driller passed through, and the flow rate observed when the work was done.',
        'Each line answers a buyer question: age hints at remaining service life, depth and static water level hint at drought resilience, and the seal details speak to contamination protection. None of it is trivia — it all becomes money eventually.' ] },
      { h: 'How to get one', body: [
        'Oregon maintains well log records through the state water resources agency, searchable by location. Sellers often have a copy in the house file; if not, I pull logs as a routine part of due diligence on any well property I show.',
        'No log on file is itself information: very old wells and some hand-dug wells predate consistent recordkeeping, which shifts more weight onto present-day testing.' ] },
      { h: 'What the log cannot tell you', body: [
        'A log is a snapshot from completion day — possibly decades ago. It does not tell you today’s flow, today’s water quality, or the condition of the pump and pressure system. That is why a current flow test and water quality test ride alongside the log in any smart purchase.' ] },
    ],
    rule: 'Sellers who can hand over the well log on day one close smoother — buyers read a ready file as a well-kept property.',
    faqs: [
      { q: 'Are well logs public in Oregon?', a: 'Yes — well construction reports are filed with the state and publicly searchable. Finding the right log for older properties can take some sleuthing by address, township, and range, which I handle during diligence.' },
      { q: 'What if the property has no well log?', a: 'It happens with older wells. You compensate with present-day evidence: a professional flow test, water quality lab work, and a pump inspection. Neighboring logs also hint at local depth and geology.' },
      { q: 'Does a good log mean good water today?', a: 'No — it is historical. Always pair the log with current flow and quality testing before you buy.' },
    ],
    related: [
      { href: '/guides/wells/well-flow-test-gpm/', label: 'Flow tests and GPM' },
      { href: '/guides/wells/well-water-quality-testing-oregon/', label: 'Water quality testing' },
      { href: '/guides/wells/buying-a-home-with-a-well/', label: 'Buying a home with a well' },
    ],
  },
  {
    cat: 'wells', slug: 'well-flow-test-gpm', title: 'What is a good well flow rate (GPM) for a home?',
    short: 'Flow tests', tease: 'Gallons per minute decides showers, sprinklers, and stock water. Here is how to think about the number.',
    metaDesc: 'How well flow tests work, what gallons-per-minute means for daily life, and how McKenzie Valley buyers should evaluate well yield.',
    answer: 'Flow rate — measured in gallons per minute (GPM) — is how much water a well can deliver sustainably. Household needs vary with people, irrigation, and animals, and lower-yield wells can work well with storage. The point of a professional flow test is to replace guesses with a measured number before you buy.',
    sections: [
      { h: 'Why the number matters', body: [
        'Everything you plan for a property flows through this number: how many bathrooms run at once, whether the garden gets sprinklers, whether stock tanks stay full in August. Lenders and appraisers may also take an interest in a documented, adequate water supply on rural loans.',
        'August matters most. Wells are at their most honest in late summer when water tables sit lowest — a spring test can flatter a marginal well.' ] },
      { h: 'How a real flow test works', body: [
        'A proper test draws the well down over a sustained period — not a faucet check — and measures stabilized yield, recovery, and often the condition of the pump system along the way. It answers “what can this well actually do,” not “does water come out.”',
        'On the buying side I schedule flow testing with the inspection window; on the selling side, a recent professional test is one of the cheapest pieces of buyer confidence you can purchase.' ] },
      { h: 'When yield is modest', body: [
        'A lower-GPM well is not automatically a dealbreaker. Storage tanks, pressure systems, and usage design let many valley households live comfortably on modest wells. What matters is knowing the number and pricing the property accordingly — surprise is the only true enemy.' ] },
    ],
    rule: 'Test in the driest season you can, and never accept a faucet check as a flow test.',
    faqs: [
      { q: 'What GPM does a lender require?', a: 'Requirements vary by loan program and lender, and some want documented adequate supply on well properties. We confirm the specific lender’s expectations early so testing satisfies both you and underwriting.' },
      { q: 'Can a well’s flow change over time?', a: 'Yes — flows can decline with well age, screen condition, or regional water table changes, and can sometimes be restored by servicing. Another reason current testing beats old paperwork.' },
      { q: 'What if the test comes back low?', a: 'You negotiate with facts: storage solutions, price adjustment, seller credits, or walking away. Options are the reward for testing before closing rather than after.' },
    ],
    related: [
      { href: '/guides/wells/what-is-a-well-log/', label: 'Reading the well log' },
      { href: '/guides/wells/low-producing-well-options/', label: 'Living with a low-yield well' },
      { href: '/guides/wells/buying-a-home-with-a-well/', label: 'Buying a home with a well' },
    ],
  },
  {
    cat: 'wells', slug: 'well-water-quality-testing-oregon', title: 'What water tests should I run when buying a well property in Oregon?',
    short: 'Water quality', tease: 'The standard Oregon panel is short, cheap, and non-negotiable. Know it before you write.',
    metaDesc: 'The standard well water tests for Oregon real estate transactions — bacteria, nitrates, arsenic — and how buyers should handle results.',
    answer: 'Oregon’s standard real-estate well testing covers total coliform bacteria, nitrates, and arsenic — and state law requires sellers to test domestic wells at sale and report results. Many buyers add tests based on local geology or the home’s plumbing era. The panel is inexpensive insurance on the thing you will drink every day.',
    sections: [
      { h: 'The core panel and why', body: [
        'Coliform bacteria indicate whether surface contamination is reaching the water. Nitrates speak to septic or agricultural influence. Arsenic occurs naturally in some Oregon geology and is tasteless, odorless, and only findable by lab work. Together the trio screens for the big categories of trouble.',
        'Oregon requires sellers of properties with domestic wells to test for these at transaction time and submit results to the state — but verify the testing is done properly and recently rather than assuming.' ] },
      { h: 'Reading results calmly', body: [
        'A detection is information, not doom. Bacteria issues often trace to fixable well-head or seal problems and can clear after shock chlorination and repair; other findings may point to treatment systems that thousands of rural homes run routinely.',
        'What matters in a transaction is sequencing: test early enough that results can inform negotiation — repairs, treatment installation, credits — instead of surfacing after closing.' ] },
    ],
    rule: 'Test the water like you plan to drink it for twenty years — because you do.',
    faqs: [
      { q: 'Who pays for well testing in a sale?', a: 'Oregon places the domestic well testing obligation on sellers at sale, but practice varies on additional testing — buyers often add panels during inspection. It is a normal negotiation item we set up front.' },
      { q: 'Should I test beyond the standard panel?', a: 'Sometimes — older plumbing eras, specific local geology, or nearby land uses can justify added tests (lead, iron, manganese, hardness among common ones). We decide based on the property, not fear.' },
      { q: 'What if arsenic is detected?', a: 'Levels matter. Treatment systems designed for arsenic are established technology; the finding becomes a cost to price into the deal rather than a mystery. The key is knowing before you own it.' },
    ],
    related: [
      { href: '/guides/wells/what-is-a-well-log/', label: 'Reading the well log' },
      { href: '/guides/wells/well-flow-test-gpm/', label: 'Flow tests and GPM' },
      { href: '/guides/septic/septic-inspection-when-buying/', label: 'Septic inspections' },
    ],
  },
  {
    cat: 'wells', slug: 'shared-wells-agreements', title: 'How do shared wells work — and what should the agreement say?',
    short: 'Shared wells', tease: 'One well, several homes, and everything depends on paperwork most people never read.',
    metaDesc: 'Shared well agreements explained: what they should cover, red flags, and how buyers on shared systems protect themselves.',
    answer: 'A shared well serves multiple properties from one source, governed (ideally) by a recorded agreement covering costs, maintenance, access, and water rights for each user. The well can be excellent and the arrangement still troubled — the agreement is what you are really buying.',
    sections: [
      { h: 'What a good agreement covers', body: [
        'The essentials: who owns the well and the land under it, how electricity and maintenance costs split, who maintains the pump and lines, what happens when repairs are needed, easement rights to access the equipment, and how disputes or usage limits are handled.',
        'Recorded beats handshake, every time. Informal sharing arrangements between friendly neighbors have a way of becoming problems exactly when properties change hands — which is the moment you are entering.' ] },
      { h: 'Buyer diligence on shared systems', body: [
        'Read the agreement itself, verify it is recorded, and confirm the practical reality matches the paper: where the well sits, how the lines run, what the cost history has been. Lenders may also want to see acceptable shared-well documentation on some loans.',
        'If the arrangement is informal, fixing it — getting a proper agreement drafted and recorded — can become a condition of your purchase. Sellers motivated to close usually cooperate.' ] },
    ],
    rule: 'On shared wells, the paperwork is the plumbing — inspect both.',
    faqs: [
      { q: 'Are shared wells a red flag?', a: 'Not inherently — plenty function smoothly for decades. The flags are missing or unrecorded agreements, unclear cost history, and access that crosses land without easements. Those are fixable, but fix them before closing.' },
      { q: 'Will lenders accept a shared well?', a: 'Many will with proper documentation — typically a recorded agreement addressing maintenance and access. We confirm the specific lender’s requirements early.' },
      { q: 'Can I drill my own well instead?', a: 'Often yes, subject to siting rules and cost — sometimes the cleanest long-term answer where agreements are messy. Neighboring well logs help estimate feasibility before you commit either way.' },
    ],
    related: [
      { href: '/guides/wells/buying-a-home-with-a-well/', label: 'Buying a home with a well' },
      { href: '/guides/land/legal-access-easements/', label: 'Easements, explained' },
      { href: '/guides/land/road-maintenance-agreements/', label: 'Road maintenance agreements' },
    ],
  },
  {
    cat: 'wells', slug: 'buying-a-home-with-a-well', title: 'Buying a home with a well: the complete checklist',
    short: 'Buying with a well', tease: 'Log, flow, quality, pump, seal — the five-part diligence that keeps well properties from surprising you.',
    metaDesc: 'The complete buyer checklist for well properties: well log, flow test, water quality, pump inspection, and wellhead condition.',
    answer: 'Buying on a well means verifying five things: the well’s history (the log), its current yield (a flow test), its water quality (lab testing), its mechanical systems (pump and pressure inspection), and its physical protection (wellhead and seal condition). Together they turn an unknown into a documented asset.',
    sections: [
      { h: 'The five checks', body: [ 'Run them as one coordinated effort during your inspection period:' ],
        list: [
          '<strong>The log</strong> — pull the state record for age, depth, and construction.',
          '<strong>Flow test</strong> — a professional, sustained-draw test, ideally in dry season.',
          '<strong>Quality panel</strong> — Oregon’s standard trio (bacteria, nitrate, arsenic) at minimum; sellers are required to test at sale, and buyers should verify.',
          '<strong>Pump & pressure inspection</strong> — age and condition of the pump, tank, and controls; these are the components that actually fail.',
          '<strong>Wellhead & seal</strong> — proper cap, casing height, grading, and separation from contamination sources.',
        ] },
      { h: 'Turning findings into negotiation', body: [
        'Each check produces either confidence or a number — a pump nearing end-of-life, a treatment need, a repair. Numbers negotiate; mysteries do not. Sequenced early, well diligence routinely pays for itself in the deal.',
        'I coordinate this whole stack with local well professionals as a standard part of representing buyers on rural property — it is not extra out here; it is the job.' ] },
    ],
    rule: 'Budget the well checks like an insurance premium on everything else you are spending.',
    faqs: [
      { q: 'How long do well pumps last?', a: 'Service lives vary with usage, water character, and equipment quality — the honest answer comes from inspecting the specific system’s age and condition rather than quoting an average.' },
      { q: 'Can I skip testing if the water tastes fine?', a: 'No — the most consequential findings (bacteria, arsenic, nitrates) have no taste. Lab work is the only way to know.' },
      { q: 'What separation should a well have from a septic system?', a: 'Oregon siting rules set required separations between wells and septic components. Verifying actual layout against requirements is part of proper diligence on any property with both.' },
    ],
    related: [
      { href: '/guides/wells/what-is-a-well-log/', label: 'Reading the well log' },
      { href: '/guides/wells/well-flow-test-gpm/', label: 'Flow tests and GPM' },
      { href: '/guides/septic/septic-inspection-when-buying/', label: 'Septic inspections' },
      { href: '/guides/buying/home-inspections-rural-additions/', label: 'The rural inspection stack' },
    ],
  },
  {
    cat: 'wells', slug: 'selling-a-home-with-a-well', title: 'Selling a home with a well: what to prepare',
    short: 'Selling with a well', tease: 'Your well can be a selling point or a snag. Preparation decides which.',
    metaDesc: 'How sellers should prepare a well property: required Oregon testing, records to gather, and turning your water into a selling point.',
    answer: 'Sellers of well properties in Oregon are required to test domestic wells (bacteria, nitrate, arsenic) at sale — but smart sellers go further: assemble the well log, service records, and a recent flow test so the water reads as an asset instead of an open question. Ready files close smoother and defend price.',
    sections: [
      { h: 'Assemble the water story', body: [
        'Before listing, gather: the well log, any flow tests, pump service and replacement records, treatment system documentation, and this transaction’s required quality testing. One folder, ready to hand over.',
        'This does two jobs: it satisfies Oregon’s testing requirement cleanly, and it frames your property as maintained — buyers extrapolate from what they can see.' ] },
      { h: 'Fix the cheap stuff first', body: [
        'Wellhead presentation matters more than sellers expect: a proper cap, clear access, tidy grading, and a labeled pressure system photograph well and inspect better. If the pump is elderly, decide deliberately whether to replace, credit, or price accordingly — before a buyer decides for you.' ] },
    ],
    rule: 'Hand buyers the water story before they ask, and you will keep control of the conversation.',
    faqs: [
      { q: 'When should the required testing happen?', a: 'Early enough that results are in hand for buyer review without delaying closing — we schedule it as part of listing preparation, not as a scramble.' },
      { q: 'What if my test comes back with an issue?', a: 'Address it head-on: many findings have established fixes (disinfection and repair for bacteria, treatment for others). A solved problem with documentation often lands better than an untested unknown.' },
      { q: 'Does a strong well add value?', a: 'A documented strong well absolutely supports value on rural property — it removes the buyer’s biggest unknown. Documentation is what converts the well from claim to asset.' },
    ],
    related: [
      { href: '/guides/selling/pre-listing-inspection/', label: 'Pre-listing inspections' },
      { href: '/guides/selling/preparing-rural-home-to-sell/', label: 'Preparing a rural home' },
      { href: '/guides/wells/well-water-quality-testing-oregon/', label: 'The required tests' },
    ],
  },
  {
    cat: 'wells', slug: 'well-drilling-questions-bare-land', title: 'Will a well work on that bare land? How to estimate before drilling',
    short: 'Wells on bare land', tease: 'You cannot know for certain until you drill — but you can stack the odds with homework.',
    metaDesc: 'Estimating well feasibility on bare land: neighboring well logs, local geology, siting rules, and budgeting for the unknown.',
    answer: 'No one can guarantee water before drilling, but neighboring well logs — public records in Oregon — reveal what depths and yields nearby wells found, which is the best available predictor. Pair that research with siting rules and honest budgeting, and bare-land water risk becomes manageable.',
    sections: [
      { h: 'Read the neighbors', body: [
        'Every logged well near your parcel is a data point: depth to water, geology encountered, yield achieved. A cluster of consistent nearby logs suggests (never promises) similar results; wildly varying neighbors signal geological roulette worth pricing in.',
        'I pull neighboring logs as standard practice when clients evaluate bare land — it takes effort and repays it immediately in negotiating clarity.' ] },
      { h: 'Site and budget realistically', body: [
        'Siting rules constrain where a well can go relative to septic areas, property lines, and other features — which interacts with your building plans on smaller parcels. Sequence the whole site plan together: well area, septic area, home site, driveway.',
        'Budget with a range, not a number, and decide in advance how you will respond to a deeper-than-hoped hole. Land contracts can also be structured with feasibility contingencies that let testing inform the purchase itself.' ] },
    ],
    rule: 'Buy bare land with a water plan, a septic plan, and a power plan — or a price that admits you have none.',
    faqs: [
      { q: 'Can I make an offer contingent on water?', a: 'Feasibility-style contingencies are common on bare land and can cover water research or testing windows. Structure varies by deal; it is a normal ask in rural transactions.' },
      { q: 'What does drilling cost?', a: 'It depends on depth, geology, access, and current market rates — quote it locally and currently rather than trusting internet averages. Neighboring logs help drillers estimate more tightly.' },
      { q: 'Are springs or cisterns alternatives?', a: 'Some parcels run on developed springs or hauled-and-stored water, each with legal and practical considerations. They are real options in specific situations — evaluated case by case.' },
    ],
    related: [
      { href: '/guides/land/buying-land-mckenzie-valley/', label: 'Buying land in the valley' },
      { href: '/guides/septic/site-evaluation-bare-land-septic/', label: 'Septic feasibility first' },
      { href: '/guides/wells/what-is-a-well-log/', label: 'Reading well logs' },
    ],
  },
  {
    cat: 'wells', slug: 'low-producing-well-options', title: 'Living with a low-producing well: storage, systems, and sanity',
    short: 'Low-yield wells', tease: 'Modest wells run comfortable households all over this valley. The trick is design.',
    metaDesc: 'How storage tanks, pressure systems, and usage design let households thrive on low-yield wells — and how buyers should evaluate them.',
    answer: 'A low-yield well plus properly sized storage equals a normal household: the well fills tanks slowly around the clock, and the household draws from storage at full pressure. Thousands of rural Oregon homes run this way. What matters is that the system is designed, sized, and maintained deliberately.',
    sections: [
      { h: 'How storage systems work', body: [
        'The well pump feeds a storage tank (or bank of tanks) at whatever modest rate the well sustains; a second pressure system delivers water from storage to the house on demand. The well’s job becomes marathon, not sprint — and total daily capacity, not instantaneous flow, defines the household.',
        'Evaluating such a property means evaluating the design: tank capacity versus household needs, condition of both pump systems, controls and protections, and the well’s sustained fill rate.' ] },
      { h: 'Buyer and owner playbook', body: [
        'As a buyer, treat an engineered storage setup as a feature to inspect, not a defect to fear — but price against the system’s condition and the well’s documented behavior in dry season.',
        'As an owner, match usage to design: irrigation scheduling, appliance timing, and awareness during peak seasons. Most households stop noticing within a month; the system simply becomes how water works.' ] },
    ],
    rule: 'Judge a low-yield property by its system design and dry-season record — not by the GPM number alone.',
    faqs: [
      { q: 'How much storage does a household need?', a: 'It depends on occupants, irrigation, and animals — sizing is a design calculation, not a universal number. The property’s existing capacity versus your intended life is the comparison that matters.' },
      { q: 'Do storage systems affect financing or insurance?', a: 'Generally they are ordinary rural infrastructure; documentation of a professional, functional system answers most lender questions. We confirm specifics per lender.' },
      { q: 'Can a low-yield well be improved?', a: 'Sometimes — servicing, deepening, or hydrofracturing help in some cases, with results depending on geology. Storage remains the reliable universal answer.' },
    ],
    related: [
      { href: '/guides/wells/well-flow-test-gpm/', label: 'Flow tests and GPM' },
      { href: '/guides/wells/buying-a-home-with-a-well/', label: 'The well-buyer checklist' },
      { href: '/guides/living/winter-up-river/', label: 'Rural systems in winter' },
    ],
  },
]

export const SEPTIC = [
  {
    cat: 'septic', slug: 'septic-inspection-when-buying', title: 'Do I really need a septic inspection when buying?',
    short: 'Septic inspections', tease: 'Yes. Here is what a real one covers, and what skipping it can cost.',
    metaDesc: 'What a proper septic inspection includes — pumping, scoping, locating — and why rural buyers should never skip it.',
    answer: 'Yes — always. A proper septic inspection pumps the tank, evaluates its condition, checks the distribution components, and assesses the drainfield. Failed systems are five-figure problems, and nothing about a septic system’s condition is visible from the lawn.',
    sections: [
      { h: 'What a real inspection includes', body: [
        'A drive-by opinion is not an inspection. The genuine article involves locating the system, opening and pumping the tank, examining baffles and tank integrity, evaluating distribution boxes and lines, and assessing drainfield function — often with records pulled from the county.',
        'You also come away with a map: where the tank and field actually sit, which matters for everything from future repairs to where you can build that shop.' ] },
      { h: 'Why the stakes justify it', body: [
        'Drainfields age out. Tanks crack. Roots invade. Systems installed generations ago may bear little resemblance to their permits, and a failing field discovered after closing is your problem at full price. Discovered during inspection, it is a negotiation: repair, replacement, credit, or reconsideration.',
        'On the McKenzie corridor, where nearly everything outside city limits runs on septic, this inspection is as fundamental as the home inspection itself.' ] },
    ],
    rule: 'Pumped, scoped, and mapped — accept nothing less before the contingency expires.',
    faqs: [
      { q: 'Who pays for septic inspection and pumping?', a: 'Negotiable and regional practice varies; commonly buyers order the inspection and pumping is arranged in the deal. We set it explicitly in the offer so nobody assumes.' },
      { q: 'How long does a septic system last?', a: 'Well-maintained systems serve for decades; drainfields eventually reach the end of their service life regardless. Age, soil, usage, and maintenance history all matter — which is what inspection reveals.' },
      { q: 'What records exist on a septic system?', a: 'Counties hold permits and as-built records for many systems; older installs can be thin. Records plus physical inspection together tell the real story.' },
    ],
    related: [
      { href: '/guides/septic/septic-drainfield-basics/', label: 'Drainfield basics' },
      { href: '/guides/septic/failed-septic-what-now/', label: 'When systems fail' },
      { href: '/guides/buying/home-inspections-rural-additions/', label: 'The rural inspection stack' },
    ],
  },
  {
    cat: 'septic', slug: 'septic-vs-sewer-what-changes', title: 'Septic vs. sewer: what actually changes for a homeowner?',
    short: 'Septic vs sewer', tease: 'Moving from city sewer to a septic system changes costs, habits, and diligence. A calm comparison.',
    metaDesc: 'What changes when you move from city sewer to a septic system: costs, maintenance habits, and buyer diligence.',
    answer: 'With sewer, you pay a utility and forget it. With septic, you own a small private treatment system: no monthly bill, but periodic pumping, mindful usage, and eventual component replacement are yours. Neither is better universally — but septic ownership rewards understanding.',
    sections: [
      { h: 'The practical differences', body: [ 'The switch reshapes a few habits and line items:' ],
        list: [
          '<strong>Costs move</strong> — no monthly sewer bill; instead periodic pumping and long-cycle component replacement.',
          '<strong>Usage awareness</strong> — heavy water events spread out; garbage disposals used sparingly; nothing down drains that kills the tank’s biology.',
          '<strong>Landscape awareness</strong> — no driving or building over the field; roots and drainage managed around it.',
          '<strong>Transaction diligence</strong> — inspections and records matter at every sale.',
        ] },
      { h: 'The mental shift', body: [
        'Septic ownership is stewardship of a living system. Owners who internalize that — modest habits, scheduled pumping, attention to early signals — routinely get decades of quiet service. Owners who treat it like sewer eventually fund the difference.',
        'For town buyers heading up the corridor, this is usually the easiest rural system to adapt to. It asks awareness, not expertise.' ] },
    ],
    rule: 'Septic is a pet, not an appliance: feed it right and it behaves.',
    faqs: [
      { q: 'How often should a tank be pumped?', a: 'Intervals depend on tank size and household load; the system’s history and your inspector’s guidance set the schedule. Regular pumping is the cheapest insurance a drainfield can buy.' },
      { q: 'Do septic systems smell?', a: 'A healthy, properly vented system should not produce odor issues. Persistent smells are a symptom worth investigating, not a septic norm.' },
      { q: 'Can I landscape over the drainfield?', a: 'Grass, yes; deep-rooted plantings, structures, and vehicle traffic, no. Knowing the field’s exact location — from inspection mapping — is what makes good decisions possible.' },
    ],
    related: [
      { href: '/guides/septic/septic-maintenance-rural-home/', label: 'Septic care habits' },
      { href: '/guides/septic/septic-inspection-when-buying/', label: 'Inspections when buying' },
      { href: '/guides/living/moving-to-mckenzie-valley/', label: 'Moving to the valley' },
    ],
  },
  {
    cat: 'septic', slug: 'septic-drainfield-basics', title: 'What is a drainfield, and why is it the expensive part?',
    short: 'Drainfields', tease: 'The buried half of every septic system — and the half that decides the big bills.',
    metaDesc: 'How septic drainfields work, why they fail, and what buyers and owners should know about the costliest septic component.',
    answer: 'The drainfield is the network of buried lines where treated liquid from the tank disperses into soil for final natural treatment. It depends entirely on soil that can absorb — which is why fields fail from age, saturation, compaction, or abuse, and why replacement is the big-ticket septic event.',
    sections: [
      { h: 'How it works and fails', body: [
        'After solids settle in the tank, liquid flows to perforated lines bedded in soil, where biology finishes the treatment. Over decades, a biological mat builds in the soil interface; combined with age, roots, saturation from poor drainage, or crushing from vehicles, absorption can decline until the field no longer accepts flow.',
        'Symptoms surface as slow drains, wet or lush patches over the field, or backups — but early decline is invisible, which is why buyer inspections probe function rather than trusting appearances.' ] },
      { h: 'Protecting the asset', body: [
        'Field-friendly ownership is simple: pump the tank on schedule so solids never reach the lines, keep vehicles and structures off the area, direct surface water away, and space out heavy laundry days. The habits cost nothing against the price of replacement.',
        'When replacement does come due, modern options depend on soils and site — engineered solutions exist for challenging ground — and county permitting guides the path. Costs vary widely with site conditions; certainty comes from evaluation, not averages.' ] },
    ],
    rule: 'Everything that protects the drainfield is cheap; everything that replaces it is not.',
    faqs: [
      { q: 'How do I find my drainfield?', a: 'County as-built records, inspection mapping, and physical probing locate it. Every owner should know — it changes parking, building, and landscaping decisions.' },
      { q: 'Can a failed field be revived?', a: 'Sometimes marginal fields improve with usage changes and professional intervention; genuinely failed fields typically require replacement or engineered alternatives. Diagnosis by a qualified professional beats hope.' },
      { q: 'Does a bigger house need a bigger field?', a: 'System capacity is designed around expected load — commonly tied to bedroom count in permitting. Adding bedrooms can trigger system requirements, which is why the match matters in sales.' },
    ],
    related: [
      { href: '/guides/septic/septic-bedroom-count-match/', label: 'The bedroom-count match' },
      { href: '/guides/septic/failed-septic-what-now/', label: 'When systems fail' },
      { href: '/guides/septic/septic-maintenance-rural-home/', label: 'Septic care habits' },
    ],
  },
  {
    cat: 'septic', slug: 'septic-bedroom-count-match', title: 'Why does the septic system have to match the bedroom count?',
    short: 'Bedroom match', tease: 'A four-bedroom listing on a two-bedroom system is a problem with a paper trail.',
    metaDesc: 'Why septic capacity is tied to bedroom count in Oregon, and what a mismatch means for buyers, sellers, and lenders.',
    answer: 'Septic systems are permitted for a design capacity, conventionally expressed through bedroom count as a proxy for occupancy. A home marketed with more bedrooms than its system’s rated capacity raises permit, lending, and value questions — the mismatch matters, and it surfaces at sale time.',
    sections: [
      { h: 'Where mismatches come from', body: [
        'Additions and conversions are the usual authors: a den becomes a bedroom, a garage becomes a suite, and the listing grows a bedroom the septic permit never heard about. Sometimes the system was upsized properly and records prove it; sometimes not.',
        'Counties keep the permit record, and diligent buyers (and their lenders and appraisers) compare it against the marketing. As the seller, you want to have made that comparison first.' ] },
      { h: 'Handling it in a transaction', body: [
        'Sellers: verify your system’s rated capacity before listing and market bedroom count accordingly — or price and disclose the discrepancy deliberately. Buyers: treat bedroom-versus-permit as a standard checklist item; a mismatch is a negotiation point and occasionally a system-upgrade project.',
        'None of this is exotic — it is one of those valley-normal checks that separates smooth closings from surprised ones.' ] },
    ],
    rule: 'Market the bedrooms the permit supports, and let the paperwork match the photos.',
    faqs: [
      { q: 'Can I advertise a “bonus room” instead of a bedroom?', a: 'Accurate descriptions are the clean path: rooms without bedroom status can be marketed as offices, dens, or flex space. What matters is not implying capacity the system lacks.' },
      { q: 'What does upsizing a system involve?', a: 'A permitting process and site evaluation, with feasibility depending on soils and space. Where expansion is possible it is a knowable project; where it is not, the constraint should shape marketing and price.' },
      { q: 'Do lenders check this?', a: 'Appraisals and underwriting on rural properties can surface the mismatch, particularly when marketing and records diverge notably. Getting ahead of it beats explaining it late.' },
    ],
    related: [
      { href: '/guides/septic/septic-drainfield-basics/', label: 'Drainfield basics' },
      { href: '/guides/selling/seller-disclosures-oregon/', label: 'Disclosure done right' },
      { href: '/guides/septic/septic-inspection-when-buying/', label: 'Inspections when buying' },
    ],
  },
  {
    cat: 'septic', slug: 'failed-septic-what-now', title: 'The septic failed inspection. Now what?',
    short: 'Failed systems', tease: 'A failed septic is a fork in the deal, not the end of it. The options, in order.',
    metaDesc: 'Options when a septic inspection fails during a sale: repair, replacement, credits, renegotiation — and how each path works.',
    answer: 'A failed inspection converts an unknown into a defined problem with a price — which is exactly what inspections are for. From there the deal has four honest paths: seller repairs or replaces, buyer takes a credit and owns the project, price adjusts, or the parties part ways. Facts, then choices.',
    sections: [
      { h: 'Scope before strategy', body: [
        'First, define the failure precisely: a baffle repair is a different universe from a spent drainfield. Qualified evaluation — sometimes with county involvement for replacement scenarios — turns “failed” into a scoped project with real numbers.',
        'Only then negotiate. Every option prices differently once the scope is known, and panic discounts help no one.' ] },
      { h: 'Choosing the path', body: [
        'Sellers with resources often prefer controlling the fix — a documented new system strengthens the sale and future value. Buyers with capacity sometimes prefer credits and choosing their own contractor. Timing pressures, lending requirements, and permit timelines all weigh in.',
        'I have walked deals down every one of these paths; the constant is that transparency and speed of information keep transactions alive while uncertainty kills them.' ] },
    ],
    rule: 'Scope first, negotiate second — a priced problem is just a term in the deal.',
    faqs: [
      { q: 'Does a failed septic kill financing?', a: 'Lenders vary: some require functional systems before closing, which shapes whether repair-before-close or escrowed solutions fit. We coordinate lender requirements into the negotiation from the first call.' },
      { q: 'Who chooses the contractor?', a: 'Whoever owns the fix, typically — with the other side’s documentation expectations written into the agreement. Permits and final approvals create the shared proof.' },
      { q: 'Should sellers pre-empt this with early inspection?', a: 'Often yes — discovering your own system’s condition before listing converts a mid-deal crisis into a planned line item. See the pre-listing inspection guide.' },
    ],
    related: [
      { href: '/guides/selling/pre-listing-inspection/', label: 'Pre-listing inspections' },
      { href: '/guides/septic/septic-drainfield-basics/', label: 'Why fields fail' },
      { href: '/guides/buying/contingencies-explained/', label: 'Contingencies, explained' },
    ],
  },
  {
    cat: 'septic', slug: 'septic-maintenance-rural-home', title: 'Septic care: the habits that buy decades',
    short: 'Septic care', tease: 'Five unglamorous habits stand between you and the valley’s most avoidable five-figure bill.',
    metaDesc: 'Simple septic maintenance habits — pumping schedules, drain discipline, field protection — that extend system life by decades.',
    answer: 'Septic longevity is mostly habit: pump on schedule, mind what goes down drains, spread out water loads, keep the field protected, and watch for early symptoms. The routine is cheap and boring; its absence is expensive and dramatic.',
    sections: [
      { h: 'The five habits', body: [ 'Tape this to the utility room wall:' ],
        list: [
          '<strong>Pump on schedule</strong> — solids that never reach the field can never clog it.',
          '<strong>Drain discipline</strong> — no grease, wipes, harsh chemicals, or heavy disposal use; the tank’s biology is the treatment plant.',
          '<strong>Spread the water</strong> — stagger laundry and heavy use; surge loads stress the field.',
          '<strong>Protect the field</strong> — no vehicles, structures, or thirsty trees over the lines; route runoff away.',
          '<strong>Notice early</strong> — slow drains, odors, or lush wet patches over the field are conversations with your system. Answer them.',
        ] },
      { h: 'The ownership payoff', body: [
        'Beyond avoided bills, a documented maintenance rhythm becomes transaction gold when you eventually sell — service records read as stewardship, and buyers pay for confidence. In the valley, the well-kept septic file is a quiet status symbol.',
      ] },
    ],
    rule: 'The cheapest septic system you will ever own is the one you already have — maintained.',
    faqs: [
      { q: 'Are septic additives worth using?', a: 'A healthy system generally maintains its own biology through normal use; scheduled pumping and drain discipline do the real work. Be skeptical of miracle products and generous with maintenance.' },
      { q: 'What is the single worst septic habit?', a: 'Ignoring it until symptoms — by which point damage may be advanced. Second place: treating the disposal as a compost system.' },
      { q: 'Should I keep records?', a: 'Absolutely — pumping receipts, inspections, repairs. The file protects value at sale and helps every future service call start smarter.' },
    ],
    related: [
      { href: '/guides/septic/septic-drainfield-basics/', label: 'Protecting the drainfield' },
      { href: '/guides/septic/septic-vs-sewer-what-changes/', label: 'Septic vs. sewer' },
      { href: '/guides/selling/preparing-rural-home-to-sell/', label: 'Records that sell homes' },
    ],
  },
  {
    cat: 'septic', slug: 'site-evaluation-bare-land-septic', title: 'What is a septic site evaluation — and why does bare land depend on it?',
    short: 'Site evaluations', tease: 'No approved evaluation can mean no house. The first question every land buyer should ask.',
    metaDesc: 'How Oregon septic site evaluations work, why they gate building on bare land, and how buyers should sequence them.',
    answer: 'A site evaluation is the county-administered assessment of whether a parcel’s soils and site can support a septic system — and effectively, whether the parcel can host a home at all where sewer does not reach. On bare land, this single approval outranks the view, the trees, and the dream.',
    sections: [
      { h: 'How evaluations work', body: [
        'Evaluators examine soil test pits for depth, texture, and seasonal water indicators, along with slopes, setbacks, and available area, then determine what type of system (if any) the site supports. Outcomes range from approval for standard systems, to approval requiring engineered alternatives, to denial.',
        'The result shapes everything: system type drives cost, approved areas constrain your site plan, and denial converts a homesite into recreational ground — priced very differently.' ] },
      { h: 'Sequencing for land buyers', body: [
        'Ask first whether an evaluation exists and what it says; approvals and their conditions are documented with the county. On unevaluated land, structure your purchase to let evaluation inform it — feasibility contingencies are standard practice for exactly this reason.',
        'And integrate the whole site puzzle: septic areas, well siting, driveway, and building envelope interact on every parcel, especially smaller or steeper ones. I walk this sequence with land clients as the core of diligence.' ] },
    ],
    rule: 'On bare land, the soil report is the property report — read it before you fall in love.',
    faqs: [
      { q: 'Do old approvals expire or change?', a: 'Evaluations and permits have histories and conditions worth verifying with the county rather than assuming — rules and site conditions both evolve. Confirmation is quick compared to the consequences.' },
      { q: 'What if the site only supports an engineered system?', a: 'It means buildable with a bigger septic budget — engineered systems are established solutions with site-dependent costs. The evaluation lets you price the parcel accordingly.' },
      { q: 'Can denial ever be revisited?', a: 'Occasionally different testing locations or updated methods change outcomes, but treat denial as the operative fact unless qualified professionals identify a genuine path. Hope is not a site plan.' },
    ],
    related: [
      { href: '/guides/land/buying-land-mckenzie-valley/', label: 'Buying land in the valley' },
      { href: '/guides/wells/well-drilling-questions-bare-land/', label: 'Water on bare land' },
      { href: '/guides/land/zoning-farm-forest-oregon/', label: 'Zoning reality check' },
    ],
  },
]
