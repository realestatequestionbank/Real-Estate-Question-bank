export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  detailedDescription: string;
  example: string;
  category: 'Property Law' | 'Agency & Ethics' | 'Contracts' | 'Finance' | 'Valuation' | 'State Rules';
  relatedTerms: string[];
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: "acceleration-clause",
    term: "Acceleration Clause",
    definition: "A mortgage clause that allows the lender to demand immediate payment of the entire loan balance if the borrower defaults on covenants like monthly payments.",
    detailedDescription: "The Acceleration Clause is a critical provision in mortgage notes and deeds of trust. Under normal conditions, a mortgage is repaid over a long period (e.g., 30 years). However, if the borrower violates contract terms—most commonly by missing multiple consecutive payments, failing to maintain hazard insurance, or failing to pay property taxes—the lender has the right to 'accelerate' the debt. This means the entire outstanding principal balance plus accrued interest becomes due and payable immediately, bypassing the standard monthly schedule. If the borrower cannot pay this full accelerated sum, the lender can initiate foreclosure proceedings.",
    example: "A homeowner misses three consecutive mortgage payments. The lender invokes the acceleration clause, demanding the entire remaining balance of $210,000 within 30 days. Because the homeowner cannot pay this full sum, the lender initiates a foreclosure sale.",
    category: "Finance",
    relatedTerms: ["alienation-clause", "defeasance-clause", "foreclosure"]
  },
  {
    slug: "ad-valorem",
    term: "Ad Valorem",
    definition: "Latin for 'according to value,' used to describe property tax assessments based on the assessed valuation of the property.",
    detailedDescription: "Ad Valorem taxes are local property taxes calculated based on the assessed value of the real estate. Local government entities, such as counties, municipalities, and school districts, assess properties to fund public services like schools, police, fire protection, and road maintenance. A tax assessor establishes an assessed value for the property, which is often a percentage of its fair market value. The tax rate (millage rate) is then applied to this assessed value to determine the annual tax bill.",
    example: "A property has a market value of $300,000, but the local county assesses property taxes at 60% of market value, resulting in an assessed value of $180,000. If the tax rate is 20 mills ($0.020 per dollar), the annual ad valorem property tax is $3,600.",
    category: "State Rules",
    relatedTerms: ["assessed-value", "millage-rate"]
  },
  {
    slug: "adverse-possession",
    term: "Adverse Possession",
    definition: "A method of acquiring title to real property by possessing it in an open, notorious, hostile, and continuous manner for a statutorily defined period.",
    detailedDescription: "Adverse Possession is a legal doctrine under which a person can gain legal ownership of another person's property simply by occupying it for an extended period without the owner's permission. To claim title through adverse possession, the occupation must meet strict legal criteria: it must be Actual (physical occupancy), Open and Notorious (obvious to anyone, including the owner), Hostile (without the owner's permission and against their interests), Exclusive (not shared with others), and Continuous for the state's statutory period (ranging from 5 to 20 years depending on the jurisdiction).",
    example: "A neighbor builds a fence that encroaches 5 feet onto a homeowner's land. The homeowner does not object, and the neighbor continues to use that strip of land, mowing it and planting gardens on it, for 15 continuous years (the state's statutory limit). The neighbor can file a lawsuit to claim legal ownership of that 5-foot strip via adverse possession.",
    category: "Property Law",
    relatedTerms: ["easement", "encroachment", "deed"]
  },
  {
    slug: "agency",
    term: "Agency",
    definition: "A legal relationship where one party (the agent) acts on behalf of and under the control of another party (the principal) in dealings with third parties.",
    detailedDescription: "Agency is a core legal relationship in real estate. The broker acts as the 'agent' representing the interest of the 'principal' (who can be a seller, buyer, landlord, or tenant). In this relationship, the agent owes fiduciary duties to the principal, placing the principal's financial and legal interests above their own. The relationship is typically established in writing through a listing agreement or a buyer representation agreement.",
    example: "A home seller hires a real estate broker to market their home. The seller signs a listing agreement, creating an agency relationship. The broker now has the legal authority and duty to represent the seller's interests in negotiations with prospective buyers.",
    category: "Agency & Ethics",
    relatedTerms: ["fiduciary-duties", "dual-agency", "steering"]
  },
  {
    slug: "alienation-clause",
    term: "Alienation Clause",
    definition: "Also known as a 'due-on-sale' clause, this mortgage provision allows the lender to demand immediate repayment of the full loan balance if the property is sold or transferred.",
    detailedDescription: "The Alienation Clause prevents a buyer from assuming the seller's existing mortgage without the lender's consent. When the property is sold or 'alienated' (transferred to a new owner), the entire remaining loan balance must be paid off immediately. This allows lenders to prevent buyers from inheriting low-interest-rate loans when market interest rates rise.",
    example: "A seller attempts to sell their house to a buyer by letting the buyer take over their 3% interest rate mortgage. The lender invokes the alienation clause, requiring the seller to pay off the remaining $150,000 balance immediately upon sale, forcing the buyer to obtain their own financing.",
    category: "Finance",
    relatedTerms: ["acceleration-clause", "defeasance-clause"]
  },
  {
    slug: "amortization",
    term: "Amortization",
    definition: "The gradual liquidation or repayment of a financial debt through regular, periodic payments of both principal and interest over a specified term.",
    detailedDescription: "Amortization is the structural method by which most mortgages are paid off. In a fully amortized loan, the borrower pays equal monthly payments. In the early years of the mortgage, the majority of each payment goes toward paying off the interest, with a small portion going toward reducing the principal. As the outstanding loan balance decreases over time, the interest portion of the monthly payment decreases, and the amount allocated to the principal increases until the loan balance reaches zero at the end of the term.",
    example: "An agent helps a buyer secure a 30-year fixed-rate mortgage of $300,000. With a fully amortized loan schedule, the buyer makes equal monthly payments of $1,800. In month 1, $1,500 goes to interest and $300 to principal. By year 25, $300 goes to interest and $1,500 goes directly to reducing the principal balance.",
    category: "Finance",
    relatedTerms: ["acceleration-clause", "lien"]
  },
  {
    slug: "appraisal",
    term: "Appraisal",
    definition: "An unbiased, defensible estimate of the fair market value of a property, conducted by a licensed professional appraiser using standardized valuation methods.",
    detailedDescription: "An appraisal is a critical step in home sales that involve mortgage financing. Lenders require an independent appraisal to ensure that the property's collateral value is sufficient to cover the loan amount. Appraisers analyze market data, physical home characteristics, neighborhood factors, and comparable sales (comps) using three core methods: the Sales Comparison Approach (residential), the Cost Approach (new builds/unique structures), and the Income Approach (rental properties).",
    example: "A buyer agrees to purchase a home for $350,000 and applies for a mortgage. The lender hires an independent appraiser, who inspects the home, compares it to three similar nearby homes that sold recently, and determines its appraised market value is $348,000, preventing the lender from lending on the higher agreed-upon purchase price.",
    category: "Valuation",
    relatedTerms: ["highest-and-best-use", "market-value", "comparative-market-analysis"]
  },
  {
    slug: "appurtenance",
    term: "Appurtenance",
    definition: "A right, privilege, or improvement that is associated with a property and transfers automatically with the title (e.g., easements, outbuildings, or water rights).",
    detailedDescription: "An appurtenance is anything that is attached to a property and runs with the land, meaning it transfers to the new owner when the property is sold. Appurtenances are not necessarily physical items; they can be legal rights, such as easements that allow passage over neighboring land, water rights, condominium parking spaces, or physical improvements like barns and swimming pools.",
    example: "A buyer purchases a home that has an easement appurtenant allowing them to cross the neighbor's property to access a public lake. When the buyer takes title, this easement right transfers to them automatically as an appurtenance, without needing a separate deed or contract.",
    category: "Property Law",
    relatedTerms: ["easement", "encroachment", "deed"]
  },
  {
    slug: "asbestos",
    term: "Asbestos",
    definition: "A naturally occurring fibrous mineral formerly used in insulation and fireproofing that can crumble (friable) and cause severe respiratory illness if inhaled.",
    detailedDescription: "Asbestos was widely used in construction materials (insulation, ceiling tiles, floor tiles, and siding) from the 1940s to the late 1970s due to its durability and fire-retardant properties. When asbestos becomes old and damaged, it becomes 'friable,' meaning it can easily crumble into a fine dust. These microscopic fibers remain suspended in the air and, if inhaled, can cause lung cancer, mesothelioma, and asbestosis. Real estate laws require the disclosure of known asbestos, and removal or encapsulation must be performed by certified specialists.",
    example: "During an inspection of a home built in 1965, the inspector notes damaged pipe insulation that contains asbestos. The buyer requests that the seller hire an abatement team to safely encapsulate the asbestos fibers before closing the transaction.",
    category: "State Rules",
    relatedTerms: ["caveat-emptor"]
  },
  {
    slug: "assessed-value",
    term: "Assessed Value",
    definition: "The valuation placed on a property by a public tax assessor for the purpose of calculating local annual property taxes.",
    detailedDescription: "Assessed Value is the dollar value assigned to a property for local tax calculations. It is determined by the local tax assessor's office and is typically calculated as a percentage (assessment ratio) of the property's fair market value. Real estate listing sites show both market values and assessed values, which can vary significantly depending on local assessment cycles.",
    example: "A county has an assessment ratio of 80%. A home with a fair market value of $250,000 has an assessed value of $200,000. The millage rate of 30 mills is then applied to the $200,000 assessed value, resulting in an annual property tax bill of $6,000.",
    category: "State Rules",
    relatedTerms: ["ad-valorem", "millage-rate"]
  },
  {
    slug: "bilateral-contract",
    term: "Bilateral Contract",
    definition: "A contract where both parties exchange mutual promises of performance, binding both parties to execute terms (e.g., a standard purchase agreement).",
    detailedDescription: "A Bilateral Contract is an agreement where a promise is exchanged for a promise. In real estate, the most common example is a purchase contract. The seller promises to transfer the deed to the property, and the buyer promises to pay the purchase price. Both parties are legally bound to perform their respective promises, and a breach by either party allows the other to sue for damages or specific performance.",
    example: "A buyer and seller sign a contract for the sale of a house. The seller promises to convey the title, and the buyer promises to pay $275,000 at closing. This mutual exchange of promises makes it a bilateral contract.",
    category: "Contracts",
    relatedTerms: ["escrow", "exclusive-right-to-sell"]
  },
  {
    slug: "blockbusting",
    term: "Blockbusting",
    definition: "An illegal practice where real estate agents induce property owners to sell at low prices by claiming that minority groups are moving into the neighborhood.",
    detailedDescription: "Blockbusting, also known as panic selling, is an illegal practice under the federal Fair Housing Act of 1968. Real estate agents would spread rumors that minority groups were moving into a neighborhood, prompting white homeowners to sell their homes quickly at depressed prices out of fear. The agents would then buy these properties cheap and resell them to minority buyers at higher prices, exploiting racial fears for financial gain.",
    example: "An agent contacts homeowners in a subdivision and warns them that a minority family has purchased a nearby home, advising them to sell their properties before home values drop. This is blockbusting, and it violates federal fair housing laws.",
    category: "Agency & Ethics",
    relatedTerms: ["steering", "redlining", "fair-housing-act"]
  },
  {
    slug: "buffer-zone",
    term: "Buffer Zone",
    definition: "A strip of land, such as a park, greenbelt, or playground, designated to separate two incompatible zoning districts (e.g., residential and industrial).",
    detailedDescription: "In municipal planning and zoning, a Buffer Zone is a designated area of land that separates two incompatible land uses. For example, a heavy industrial manufacturing zone cannot be placed directly adjacent to a quiet residential neighborhood. Planners insert a buffer zone, such as a park, wooded strip, or commercial office parking lot, to minimize the impact of noise, smoke, and traffic on residential properties.",
    example: "The city planning board requires a developer to build a 100-foot-wide park filled with trees between a new retail shopping mall and an existing single-family residential neighborhood, serving as a buffer zone.",
    category: "Property Law",
    relatedTerms: ["highest-and-best-use"]
  },
  {
    slug: "bundle-of-rights",
    term: "Bundle of Rights",
    definition: "The legal rights associated with real property ownership, including the rights of possession, control, enjoyment, exclusion, and disposition.",
    detailedDescription: "Real property ownership is often described as a 'bundle of sticks,' where each stick represents a distinct legal right. This bundle includes: the Right of Possession (the right to occupy the property), the Right of Control (the right to determine how the property is used), the Right of Enjoyment (the right to use the property without interference), the Right of Exclusion (the right to keep others off the property), and the Right of Disposition (the right to sell, lease, or mortgage the property).",
    example: "A property owner decides to lease their guest house to a tenant, paint their main house blue, and erect a fence to keep trespassers out. They are exercising their bundle of rights: disposition (leasing), control (painting), and exclusion (fencing).",
    category: "Property Law",
    relatedTerms: ["fee-simple-absolute", "life-estate", "joint-tenancy"]
  },
  {
    slug: "capitalization-rate-cap-rate",
    term: "Capitalization Rate (Cap Rate)",
    definition: "A ratio used to estimate the rate of return on an investment property, calculated by dividing the Net Operating Income (NOI) by the purchase price or current value.",
    detailedDescription: "The Capitalization Rate (Cap Rate) is a fundamental metric used by real estate investors to compare the profitability of commercial and multifamily residential properties. The formula is: Cap Rate = NOI / Current Value. A higher cap rate indicates a higher potential return, but also a higher risk. Conversely, a lower cap rate indicates a lower return, typically associated with safer properties in prime locations.",
    example: "An investor purchases a small retail strip mall for $1,200,000. The property generates $96,000 in Net Operating Income annually. The cap rate is calculated as $96,000 / $1,200,000 = 0.08, or an **8% Cap Rate**.",
    category: "Valuation",
    relatedTerms: ["highest-and-best-use", "market-value"]
  },
  {
    slug: "caveat-emptor",
    term: "Caveat Emptor",
    definition: "Latin for 'let the buyer beware,' a legal principle holding the buyer responsible for assessing property quality and defects before purchasing.",
    detailedDescription: "Caveat Emptor is a traditional legal doctrine in real estate transactions. Historically, the buyer was responsible for inspecting the property and assumed the risk of any defects. In modern real estate, while buyers are still expected to conduct inspections, consumer protection laws have shifted the burden by requiring sellers and agents to disclose all known material latent defects (defects that are not easily visible).",
    example: "A buyer purchases a home in a state with strict caveat emptor laws. During inspections, they fail to check the crawlspace. After closing, they discover termite damage. Under caveat emptor, the buyer is responsible for the repairs unless they can prove the seller intentionally concealed the damage.",
    category: "Agency & Ethics",
    relatedTerms: ["fraud", "fiduciary-duties"]
  },
  {
    slug: "chain-of-title",
    term: "Chain of Title",
    definition: "The chronological history of all recorded ownership transfers, liens, and encumbrances affecting a property, tracing back to the original patent.",
    detailedDescription: "The Chain of Title is the line of succession of ownership of a parcel of land. A complete chain shows every owner from the original government land grant to the current owner. If there is a break in this chain—such as a missing deed or a transfer where the grantor did not have legal rights—the title is considered 'clouded' and must be cleared before the property can be sold.",
    example: "A title search company examines county deed records to trace a property's ownership. They find a transfer from Owner A to Owner B, and Owner B to Owner C, but no deed showing how Owner D acquired it from Owner C. This represents a break in the chain of title, which must be resolved by a quiet title lawsuit.",
    category: "Property Law",
    relatedTerms: ["deed", "encumbrance"]
  },
  {
    slug: "commingling",
    term: "Commingling",
    definition: "An illegal practice where a licensed broker mixes client funds (such as earnest money escrows) with their personal or business operating funds.",
    detailedDescription: "Commingling is a serious violation of real estate licensing laws. Brokers are required to maintain separate escrow or trust accounts to hold client funds (such as earnest money deposits or tenant security deposits). Commingling occurs when a broker deposits these client funds into their business operating account or personal account, even if they do not spend the money. Spending the money is a more severe offense known as conversion.",
    example: "A broker receives a $5,000 earnest money check from a buyer. Instead of depositing it into the brokerage's trust account, they deposit it into their business operating account to pay office utilities, intending to transfer it back later. This is commingling, and it can result in the revocation of their real estate license.",
    category: "Agency & Ethics",
    relatedTerms: ["fiduciary-duties", "fraud"]
  },
  {
    slug: "comparative-market-analysis",
    term: "Comparative Market Analysis (CMA)",
    definition: "An estimate of a property's value prepared by a real estate agent based on recent sales of similar nearby properties to assist in pricing.",
    detailedDescription: "A Comparative Market Analysis (CMA) is a tool used by real estate agents to help sellers determine a listing price or to help buyers determine an offer price. Unlike a formal appraisal conducted by a licensed appraiser, a CMA is an informal valuation. The agent selects similar properties (comps) that are currently active, pending, or recently sold in the immediate neighborhood, adjusting for differences in size, condition, and features.",
    example: "An agent prepares a CMA for a seller who wants to list their home. The agent finds three similar 3-bedroom homes nearby that sold for $290,000, $295,000, and $305,000. Based on these comps, the agent advises the seller to list their home at $299,000.",
    category: "Valuation",
    relatedTerms: ["appraisal", "market-value"]
  },
  {
    slug: "condemnation",
    term: "Condemnation",
    definition: "The legal process by which a government exercises its power of eminent domain to take private property for public use, paying just compensation.",
    detailedDescription: "Condemnation is the execution of the power of eminent domain. While eminent domain is the government's *right* to take property, condemnation is the legal *action* taken to acquire it. The government must demonstrate that the property is needed for public use (e.g., building a highway, school, or utility line) and must offer the property owner fair market value as compensation. If the owner refuses, the government can initiate a condemnation lawsuit to seize the title.",
    example: "The state planning department determines that a new highway bypass must run through a farmer's pasture. The state offers the farmer $120,000 based on appraisals. When the farmer refuses to sell, the state files a condemnation suit to take the land and pay the farmer the appraised value.",
    category: "Property Law",
    relatedTerms: ["eminent-domain", "easement"]
  },
  {
    slug: "deed",
    term: "Deed",
    definition: "A written legal instrument that transfers ownership of real property from the grantor (seller) to the grantee (buyer).",
    detailedDescription: "A deed is the physical legal document used to convey title to real estate. To be legally valid, a deed must be in writing, have a competent grantor, identify a grantee, contain a legal description of the property, include words of conveyance, be signed by the grantor, and be delivered to and accepted by the grantee. Recording the deed at the county clerk's office is not legally required to transfer title, but it is highly recommended to protect the buyer's interests.",
    example: "At the closing table, the seller signs a General Warranty Deed transferring ownership of the home to the buyer. Once the deed is signed and handed to the buyer, title has been legally conveyed.",
    category: "Property Law",
    relatedTerms: ["grantor", "grantee", "chain-of-title"]
  },
  {
    slug: "deed-restrictions",
    term: "Deed Restrictions",
    definition: "Private clauses or covenants in a deed that limit the use, occupancy, or physical characteristics of a property (often established by developers).",
    detailedDescription: "Deed Restrictions, also known as CC&Rs (Covenants, Conditions, and Restrictions), are private zoning rules that attach to the land and bind all future owners. They are commonly created by developers or homeowners' associations (HOAs) to maintain neighborhood standards. Common restrictions include limits on exterior paint colors, fence heights, vehicle parking, and house sizes.",
    example: "A developer subdivision deed includes a restriction stating that no property owner can construct a detached workshop or guest house on their lot. A buyer who purchases a home in this subdivision is legally bound by this deed restriction.",
    category: "Property Law",
    relatedTerms: ["easement", "encroachment"]
  },
  {
    slug: "defeasance-clause",
    term: "Defeasance Clause",
    definition: "A mortgage clause requiring the lender to release their lien on the property (via a satisfaction piece) once the borrower fully repays the loan.",
    detailedDescription: "The Defeasance Clause is a protective provision for the borrower. It states that once the borrower satisfies the mortgage debt by making all payments, the lender's interest in the property is terminated. The lender is required to execute and record a release document (such as a satisfaction of mortgage or deed of reconveyance) to clear the lien from the property title.",
    example: "A homeowner makes their final mortgage payment on a 30-year loan. Under the defeasance clause, the lender must issue a release deed, proving that the mortgage has been fully repaid and the lien on the home is cleared.",
    category: "Finance",
    relatedTerms: ["acceleration-clause", "alienation-clause"]
  },
  {
    slug: "dual-agency",
    term: "Dual Agency",
    definition: "A relationship where a single broker represents both the buyer and the seller in the same transaction. Requires written disclosure and consent from both parties.",
    detailedDescription: "Dual Agency occurs when a broker or real estate firm represents both the buyer and the seller in a transaction. In a dual agency relationship, the agent's fiduciary duties are limited, as they cannot advocate for one client over the other (e.g., they cannot advise the buyer on a lower offer price or tell the seller what price the buyer is willing to pay). Because of the potential conflict of interest, dual agency is illegal in some states (like Texas and Florida) and strictly regulated in others.",
    example: "An agent lists a house for sale. A buyer who does not have an agent contacts them directly to purchase the home. The agent represents both the buyer and the seller in the transaction, creating a dual agency relationship that requires signed disclosures from both parties.",
    category: "Agency & Ethics",
    relatedTerms: ["agency", "fiduciary-duties"]
  },
  {
    slug: "easement",
    term: "Easement",
    definition: "A non-possessory right to cross or use another person's land for a specific, limited purpose (e.g., utility access or shared driveways).",
    detailedDescription: "An easement is a right to use another person's property without owning it. The most common type is an Easement Appurtenant, which involves two adjacent parcels: the dominant estate (which benefits from the easement) and the servient estate (which is burdened by the easement). Easements are permanent, run with the land, and transfer automatically to new owners.",
    example: "A homeowner's driveway crosses a neighbor's property to reach the main road. The homeowner holds an easement appurtenant over the neighbor's property, and this right remains in effect when either property is sold.",
    category: "Property Law",
    relatedTerms: ["appurtenance", "encroachment"]
  },
  {
    slug: "eminent-domain",
    term: "Eminent Domain",
    definition: "The constitutional right of a government to take private property for public use, provided just compensation is paid to the owner.",
    detailedDescription: "Eminent Domain is a power of federal, state, and local governments, as well as public utilities and school districts, to acquire private property for public use. The Fifth Amendment to the U.S. Constitution restricts this power by requiring the government to demonstrate the public benefit and pay the property owner 'just compensation' (fair market value).",
    example: "The city needs to widen a major arterial road. They exercise eminent domain to acquire a 10-foot strip of land from the front yards of adjacent homeowners, paying each owner the appraised market value of the land taken.",
    category: "Property Law",
    relatedTerms: ["condemnation", "escheat"]
  },
  {
    slug: "encroachment",
    term: "Encroachment",
    definition: "The unauthorized physical intrusion of an improvement (e.g., a fence, driveway, or roof overhang) onto a neighboring property.",
    detailedDescription: "An encroachment occurs when a physical structure extends past the property line onto a neighboring parcel. Encroachments are civil matters, not criminal, and can cloud the title of both properties. They are typically discovered during property surveys and resolved through boundary agreements or by moving the structure.",
    example: "A homeowner builds a new wood fence. A survey reveals the fence is located 1 foot past the property boundary on the neighbor's land. This fence is an encroachment, and the neighbor can require that it be moved.",
    category: "Property Law",
    relatedTerms: ["easement", "appurtenance"]
  },
  {
    slug: "encumbrance",
    term: "Encumbrance",
    definition: "A claim, charge, lien, or liability attached to a property that may lessen its value or restrict its use but does not prevent transfer of title.",
    detailedDescription: "An encumbrance is a broad term for any right or interest in a property held by someone other than the owner. Encumbrances can be financial (liens, mortgages, unpaid taxes) or physical (easements, deed restrictions, encroachments). While they do not prevent the transfer of title, they can affect the property's marketability and value.",
    example: "A property has a recorded utility easement crossing the backyard. This easement is an encumbrance on the title, which a buyer must accept if they purchase the home.",
    category: "Property Law",
    relatedTerms: ["lien", "easement"]
  },
  {
    slug: "escheat",
    term: "Escheat",
    definition: "The reversion of property to the state when an owner dies intestate (without a will) and has no legal heirs or successors.",
    detailedDescription: "Escheat is a government right designed to prevent properties from remaining ownerless or abandoned. If a property owner dies without a valid will (intestate) and county records identify no legal heirs or relatives, the title to the real estate reverts to the state government.",
    example: "An elderly individual who has no living relatives dies without a will. Their home and land revert to the state government via the right of escheat.",
    category: "Property Law",
    relatedTerms: ["eminent-domain", "ad-valorem"]
  },
  {
    slug: "escrow",
    term: "Escrow",
    definition: "An arrangement where a neutral third party holds funds, deeds, or documents until specified contract conditions are met by both parties.",
    detailedDescription: "Escrow is a process used in real estate transactions. When a buyer makes an offer, they deposit earnest money into an escrow account. The escrow officer (typically a title agent or attorney) holds these funds, along with the signed deed and loan documents, ensuring that no money is released to the seller until all contract contingencies (inspections, appraisals, financing) are met.",
    example: "A buyer deposits a $10,000 check into an escrow account. The escrow company holds this earnest money until the closing date, when the funds are applied to the buyer's down payment and the deed is recorded.",
    category: "Contracts",
    relatedTerms: ["bilateral-contract", "exclusive-right-to-sell"]
  },
  {
    slug: "estate-for-years",
    term: "Estate for Years",
    definition: "A leasehold estate that has a specific, definite start and end date. No notice is required to terminate this tenancy.",
    detailedDescription: "Despite its name, an Estate for Years (or Tenancy for Years) can be for any duration, whether it is one week, six months, or five years. The defining characteristic is that the lease agreement specifies an exact ending date. Because both parties know when the lease terminates from the beginning, neither the landlord nor the tenant is required to give notice to terminate the tenancy.",
    example: "A tenant signs a lease agreement to rent a beach condo from June 1 to August 31. This lease is an estate for years, and the tenant must vacate the property on August 31 without any further notice.",
    category: "Contracts",
    relatedTerms: ["deed-restrictions"]
  },
  {
    slug: "exclusive-right-to-sell",
    term: "Exclusive Right-to-Sell",
    definition: "A listing agreement where the broker receives a commission regardless of who finds the buyer, even if the seller sells the property independently.",
    detailedDescription: "The Exclusive Right-to-Sell listing agreement provides the highest level of commission protection for a broker. Once signed, the broker is authorized to market the property. If a buyer is secured during the listing term, the broker receives the commission, even if the seller finds the buyer on their own.",
    example: "A seller signs an exclusive right-to-sell listing with a broker. While the broker is marketing the home, the seller's coworker offers to buy it. At closing, the seller must pay the broker the agreed-upon commission, even though the coworker was introduced by the seller.",
    category: "Contracts",
    relatedTerms: ["bilateral-contract", "escrow"]
  },
  {
    slug: "fair-housing-act",
    term: "Fair Housing Act",
    definition: "A federal law prohibiting discrimination in housing based on race, color, national origin, religion, sex, familial status, or disability.",
    detailedDescription: "The federal Fair Housing Act of 1968, along with its amendments, protects individuals from discrimination when renting, buying, or financing housing. The law prohibits practices such as steering buyers to specific neighborhoods, blockbusting, and redlining by lenders based on protected class status.",
    example: "A landlord refuses to rent an apartment to a qualified family because they have children. This is a violation of the Fair Housing Act, which protects familial status.",
    category: "Agency & Ethics",
    relatedTerms: ["blockbusting", "steering", "redlining"]
  },
  {
    slug: "fee-simple-absolute",
    term: "Fee Simple Absolute",
    definition: "The highest and most complete form of real property ownership, subject only to government rights (Police Power, Eminent Domain, Taxation, Escheat).",
    detailedDescription: "Fee Simple Absolute is the most common form of property ownership. It has an indefinite duration and is fully inheritable. The owner holds the complete bundle of rights, limited only by government powers: Police Power (zoning), Eminent Domain (taking land for public use), Taxation, and Escheat.",
    example: "A buyer purchases a home in fee simple absolute. They own the home and land indefinitely, can pass it to their heirs, and can sell or lease it, subject only to local zoning laws and property taxes.",
    category: "Property Law",
    relatedTerms: ["bundle-of-rights", "life-estate", "joint-tenancy"]
  },
  {
    slug: "fiduciary-duties",
    term: "Fiduciary Duties",
    definition: "The legal duties of loyalty, obedience, disclosure, confidentiality, accountability, and reasonable care (OLD CAR) owed by an agent to their client.",
    detailedDescription: "An agency relationship is fiduciary in nature, meaning the agent is legally bound to act with high trust and loyalty. Under real estate laws, agents owe their clients six core fiduciary duties: Obedience (follow lawful instructions), Loyalty (place client interests above all others), Disclosure (reveal all material facts), Confidentiality (protect client secrets), Accountability (properly handle all funds), and Reasonable Care (perform duties with professional competence).",
    example: "An agent learns that a prospective buyer is willing to pay $10,000 more than their written offer. Under the duty of loyalty and disclosure, the agent must inform the seller of this fact immediately.",
    category: "Agency & Ethics",
    relatedTerms: ["agency", "dual-agency"]
  },
  {
    slug: "fixture",
    term: "Fixture",
    definition: "An item of personal property that has been permanently attached to land or a building so that it legally becomes real property (measured by the MARIA method).",
    detailedDescription: "A fixture is an item that was once personal property (like a ceiling fan or chandelier) but is now considered real property because of how it was attached. Real estate law uses the MARIA test to determine if an item is a fixture: Method of attachment, Adaptability to the property, Relationship of the parties, Intent of the placing party, and Agreement in the contract.",
    example: "A seller installs custom-fitted window blinds in the living room. Because they are adapted to these specific windows, they are considered fixtures and must remain with the home when sold, unless excluded in the contract.",
    category: "Property Law",
    relatedTerms: ["appurtenance", "deed"]
  },
  {
    slug: "foreclosure",
    term: "Foreclosure",
    definition: "The legal process where a lender seizes and sells a property to recover the unpaid mortgage balance after the borrower defaults.",
    detailedDescription: "Foreclosure is a legal remedy used by lenders when a borrower defaults on a mortgage. Depending on state laws, it can be Judicial (through the court system) or Non-Judicial (utilizing a power of sale clause in a deed of trust). The property is sold at a public auction, and the proceeds are applied to the mortgage debt.",
    example: "A borrower stops making mortgage payments for six months. The bank initiates foreclosure proceedings, schedules a public auction, and sells the home to the highest bidder to satisfy the outstanding loan balance.",
    category: "Finance",
    relatedTerms: ["acceleration-clause", "lien"]
  },
  {
    slug: "fraud",
    term: "Fraud",
    definition: "Intentional misrepresentation or concealment of material facts designed to deceive another party into acting to their financial detriment.",
    detailedDescription: "Fraud in real estate involves the intentional deception of a buyer or seller. Unlike misrepresentation (which can be negligent or innocent), fraud requires a deliberate intent to mislead. Common examples include lying about a property's condition or altering documents.",
    example: "A seller covers up structural cracks in the foundation with paneling to hide them from buyers. This intentional concealment of a material defect constitutes fraud.",
    category: "Agency & Ethics",
    relatedTerms: ["caveat-emptor", "commingling"]
  },
  {
    slug: "grantee",
    term: "Grantee",
    definition: "The person receiving title to real property in a deed transaction (typically the buyer).",
    detailedDescription: "In a deed, the grantee is the recipient of the property title. A valid deed must clearly identify the grantee, but they do not need to sign the document. The grantee must accept delivery of the deed for the transfer of title to be complete.",
    example: "A deed is prepared for a transaction, naming the buyer as the grantee. Once the deed is delivered to the buyer, title is transferred.",
    category: "Property Law",
    relatedTerms: ["grantor", "deed"]
  },
  {
    slug: "grantor",
    term: "Grantor",
    definition: "The person conveying title to real property in a deed transaction (typically the seller). Must be of legal age and sound mind.",
    detailedDescription: "In a deed, the grantor is the owner who is transferring their interest in the property. A grantor must be legally competent (of legal age and sound mind) and must sign the deed in front of witnesses or a notary public for it to be recorded.",
    example: "A homeowner signs a deed as the grantor, transferring ownership of their property to a buyer.",
    category: "Property Law",
    relatedTerms: ["grantee", "deed"]
  },
  {
    slug: "highest-and-best-use",
    term: "Highest and Best Use",
    definition: "The legally permissible, physically possible, financially feasible, and most productive use of a property, determined during appraisals.",
    detailedDescription: "Highest and best use is an appraisal concept. Appraisers analyze a property to determine the use that will generate the highest net return over time. The proposed use must meet four criteria: it must be legally allowed (zoning), physically possible (lot size/soil), financially feasible, and yield the highest value.",
    example: "A vacant lot is located in a commercial zoning district. While it could be used for a small garden, its highest and best use is determined to be a multi-story retail development.",
    category: "Valuation",
    relatedTerms: ["appraisal", "market-value"]
  },
  {
    slug: "joint-tenancy",
    term: "Joint Tenancy",
    definition: "A form of co-ownership characterized by the right of survivorship and the four unities: Time, Title, Interest, and Possession (PITT).",
    detailedDescription: "Joint Tenancy is a form of co-ownership for two or more people. The defining feature is the right of survivorship: if one joint tenant dies, their share automatically passes to the remaining joint tenants, bypassing probate and any will. To establish a joint tenancy, the owners must acquire the property at the same time, through the same deed, with equal shares and equal rights of possession.",
    example: "Two business partners purchase a property as joint tenants. If one partner passes away, the surviving partner automatically becomes the sole owner of the property.",
    category: "Property Law",
    relatedTerms: ["tenancy-in-common", "bundle-of-rights"]
  },
  {
    slug: "lien",
    term: "Lien",
    definition: "A legal claim against a property that secures payment of a debt (e.g., mortgages, tax liens, mechanics' liens).",
    detailedDescription: "A lien is a financial encumbrance. It gives the lienholder the right to force the sale of the property if the debt is not paid. Liens can be Voluntary (mortgages) or Involuntary (tax liens, mechanics' liens) and General (applying to all the owner's property) or Specific (applying only to a particular parcel).",
    example: "A contractor remodels a kitchen but is not paid. They file a mechanic's lien against the home, preventing the owner from selling the property without satisfying the debt.",
    category: "Finance",
    relatedTerms: ["foreclosure", "encumbrance"]
  },
  {
    slug: "life-estate",
    term: "Life Estate",
    definition: "A freehold estate limited in duration to the life of the owner or another designated person (known as a life tenant).",
    detailedDescription: "A life estate is a form of ownership where the life tenant has the right to occupy and use the property for the duration of their life. When the life tenant dies, the property transfers to a designated third party (remainderman) or reverts to the original owner.",
    example: "A parent deeds their home to their child but retains a life estate. The parent can live in the home for life, and upon their death, ownership transfers to the child.",
    category: "Property Law",
    relatedTerms: ["fee-simple-absolute", "bundle-of-rights"]
  },
  {
    slug: "lis-pendens",
    term: "Lis Pendens",
    definition: "Latin for 'suit pending,' a recorded legal notice warning the public that a property is the subject of an active lawsuit.",
    detailedDescription: "A Lis Pendens is a recorded notice in public land records. It warns prospective buyers and lenders that a lawsuit has been filed that affects the title or ownership of the property, making any transfer subject to the outcome of the suit.",
    example: "A buyer sues a seller for specific performance to force the sale of a home. The buyer's attorney records a lis pendens on the property to prevent the seller from selling it to someone else during the lawsuit.",
    category: "State Rules",
    relatedTerms: ["encumbrance", "chain-of-title"]
  },
  {
    slug: "market-value",
    term: "Market Value",
    definition: "The most probable price a property should bring in a competitive, open market under fair sale conditions with no undue pressure.",
    detailedDescription: "Market value is a key concept in appraisals and sales. It represents the price a willing buyer and willing seller would agree on in an arm's-length transaction, assuming both parties are well-informed and acting in their own best interests.",
    example: "An appraiser analyzes comps and determines a home's market value is $325,000, even though the seller has it listed for $350,000.",
    category: "Valuation",
    relatedTerms: ["appraisal", "comparative-market-analysis"]
  },
  {
    slug: "redlining",
    term: "Redlining",
    definition: "The illegal practice of lenders refusing to make loans or providing worse terms in specific geographic areas based on neighborhood demographics.",
    detailedDescription: "Redlining is a discriminatory practice where financial institutions refuse to provide mortgages or home improvement loans in specific neighborhoods based on racial or ethnic demographics, regardless of the individual applicant's qualifications. This practice is prohibited under the Community Reinvestment Act and the Fair Housing Act.",
    example: "A bank draws a line on a map around a neighborhood and refuses to approve mortgages for homes within that boundary. This constitutes illegal redlining.",
    category: "Finance",
    relatedTerms: ["blockbusting", "steering", "fair-housing-act"]
  },
  {
    slug: "riparian-rights",
    term: "Riparian Rights",
    definition: "The legal rights of a landowner whose property borders a flowing body of water, such as a river or stream.",
    detailedDescription: "Riparian rights allow landowners to make reasonable use of the water adjacent to their property (e.g., for swimming, boating, or irrigation), provided they do not obstruct or pollute the water flow. If the water is navigable, the landowner owns to the high-water mark; if non-navigable, they own to the middle of the stream.",
    example: "A property borders a river. The owner has riparian rights to construct a dock and use the water for recreation, subject to state environmental regulations.",
    category: "Property Law",
    relatedTerms: ["appurtenance", "easement"]
  },
  {
    slug: "steering",
    term: "Steering",
    definition: "The illegal practice of channeling home seekers toward or away from specific neighborhoods to preserve or alter demographics.",
    detailedDescription: "Steering is an illegal practice under the Fair Housing Act. It occurs when a real estate agent guides buyers to or away from neighborhoods based on protected class status, such as race or religion, rather than their preferences and budget.",
    example: "An agent assumes a minority buyer would only want to live in a neighborhood with a high minority population and only shows them homes in that area. This is illegal steering.",
    category: "Agency & Ethics",
    relatedTerms: ["blockbusting", "redlining", "fair-housing-act"]
  },
  {
    slug: "tenancy-in-common",
    term: "Tenancy in Common",
    definition: "A form of co-ownership where owners can hold unequal shares and there is no right of survivorship. Shares pass to heirs upon death.",
    detailedDescription: "Tenancy in Common is a common form of co-ownership. Unlike joint tenancy, there is no right of survivorship. Each owner can sell, mortgage, or transfer their individual share independently, and their share passes to their designated heirs upon their death rather than to the other co-owners.",
    example: "Three siblings inherit their parents' farm as tenants in common. If one sibling dies, their share passes to their children according to their will, not to the surviving siblings.",
    category: "Property Law",
    relatedTerms: ["joint-tenancy", "bundle-of-rights"]
  }
];
