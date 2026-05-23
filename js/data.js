/* ── SUNCONNECT — Mock Data ── */

const SC_VENDORS = [
  {
    id: 1, icon: '☀',
    name: "Pratham Solar", owner: "Satish Kumar",
    email: "satish@prathamsolar.com", phone: "9742675715",
    website: "https://www.prathamsolar.com",
    logo: "https://www.google.com/s2/favicons?domain=prathamsolar.com&sz=64",
    area: "Whitefield", city: "Bangalore", pincode: "560066",
    rating: 4.5, reviewCount: 87, experience: 8, installs: 420,
    brands: ["Tata Solar", "Waaree"],
    priceMin: 45000, priceMax: 65000,
    specialization: "Residential",
    badges: ["PM Surya Ghar Registered", "MNRE Approved"],
    about: "Pratham Solar has been serving Whitefield and East Bangalore since 2016. We specialise in residential rooftop installations with Remote Monitoring Systems (RMS) for daily performance tracking. With 420+ successful installations, we guarantee quality that lasts 25 years.",
    services: ["Residential Solar", "Remote Monitoring (RMS)", "System Design", "Subsidy Assistance", "Annual Maintenance Contract"],
    certifications: ["MNRE Registered EPC", "PM Surya Ghar Partner", "BESCOM Approved"],
    serviceAreas: ["Whitefield", "Marathahalli", "Brookefield", "KR Puram", "Kadugodi"],
    projectTimeline: "30–45 days", warranty: "25 yr panel / 10 yr inverter",
    ratingBreakdown: { 5: 52, 4: 24, 3: 7, 2: 3, 1: 1 },
    reviews: [
      { author: "Hitesh K.",  initials: "HK", rating: 5, date: "Mar 2026", text: "Excellent service! Satish walked us through every step. RMS monitoring is working perfectly. Electricity bill dropped from ₹4,500 to ₹600/month." },
      { author: "Pranav S.",  initials: "PS", rating: 5, date: "Feb 2026", text: "Highly recommended! Tata Solar panels and roof work was perfect — zero leaks after monsoon. Very professional team." },
      { author: "Brijesh P.", initials: "BP", rating: 4, date: "Jan 2026", text: "Good quality work. Subsidy credited in 45 days. Minor delay in meter approval but very satisfied overall." },
      { author: "Meena R.",   initials: "MR", rating: 4, date: "Dec 2025", text: "Professional team, transparent about pricing. Only suggestion: a WhatsApp update during subsidy processing would help." }
    ]
  },
  {
    id: 2, icon: '🌞',
    name: "Solar Square", owner: "Jyoti (Customer Service Head)",
    email: "support@solarsquare.in", phone: "7208979637",
    website: "https://solarsquare.in",
    logo: "https://www.google.com/s2/favicons?domain=solarsquare.in&sz=64",
    area: "Koramangala", city: "Bangalore", pincode: "560034",
    rating: 4.7, reviewCount: 312, experience: 6, installs: 1800,
    brands: ["Navitas", "Premier", "Rezon", "Renew"],
    priceMin: 55000, priceMax: 80000,
    specialization: "Residential & Commercial",
    badges: ["Top Rated", "Good Zero Plan", "Pan-India Brand"],
    about: "Solar Square is one of India's leading solar installation companies. Their flagship 'Good Zero' plan guarantees daily unit generation — if your 5 kW plant fails to produce 20 units/day, they pay ₹12 per deficient unit. 7–14 day installation timeline.",
    services: ["Residential Solar", "Commercial Solar", "Good Zero Performance Guarantee", "EMI Financing (CIBIL-based)", "App-based Monitoring"],
    certifications: ["ISO 9001:2015", "MNRE Empanelled", "BIS Certified Panels"],
    serviceAreas: ["Koramangala", "HSR Layout", "Indiranagar", "Jayanagar", "BTM Layout", "Bellandur"],
    projectTimeline: "7–14 working days", warranty: "25 yr panel / 10 yr inverter / Performance Guarantee",
    ratingBreakdown: { 5: 198, 4: 82, 3: 20, 2: 8, 1: 4 },
    reviews: [
      { author: "Prajnya B.", initials: "PB", rating: 5, date: "Apr 2026", text: "Solar Square's Good Zero plan gave me full confidence. Installation done in 9 days. App monitoring is brilliant — real-time generation data on my phone." },
      { author: "Akhilesh V.",initials: "AV", rating: 5, date: "Mar 2026", text: "Absolutely professional. They handled everything — BESCOM inspection, subsidy paperwork, grid integration. Zero hassle." },
      { author: "Parth A.",   initials: "PA", rating: 4, date: "Feb 2026", text: "Great product and support. Subsidy took 52 days (quoted 45). Otherwise flawless experience." },
      { author: "Deepa N.",   initials: "DN", rating: 5, date: "Jan 2026", text: "Worth every rupee. The performance guarantee is real — they credited me ₹480 one month when generation dipped due to dust." }
    ]
  },
  {
    id: 3, icon: '⚡',
    name: "Apollo Solar Solutions", owner: "Prashant Devadiga",
    email: "prashant@apollosolar.in", phone: "7204030568",
    website: null,
    logo: null,
    area: "Bannerghatta", city: "Bangalore", pincode: "560041",
    rating: 4.3, reviewCount: 63, experience: 5, installs: 156,
    brands: ["Adani", "Waaree", "Vikram", "Rayzon", "RenewSys"],
    priceMin: 40000, priceMax: 60000,
    specialization: "Residential",
    badges: ["PM Surya Ghar Registered", "Jan Samarth Partner"],
    about: "Apollo Solar Solutions does ~10 installations per month, strictly B2C residential. Average project cost ₹1.5–2 lakhs. We maintain ready stock of 10–15 kW capacity and source only from authorised distributors, ensuring a 25-year system lifespan.",
    services: ["Residential Solar", "System Sizing & Design", "Subsidy Documentation", "5-Year Free Maintenance"],
    certifications: ["MNRE Registered", "PM Surya Ghar Partner"],
    serviceAreas: ["Jayanagar", "JP Nagar", "Banashankari", "Kanakapura Road", "Uttarahalli"],
    projectTimeline: "21–35 days", warranty: "25 yr panel / 5 yr inverter",
    ratingBreakdown: { 5: 34, 4: 18, 3: 7, 2: 3, 1: 1 },
    reviews: [
      { author: "Sandeep B.", initials: "SB", rating: 4, date: "Apr 2026", text: "Prashant is very honest — didn't oversell and gave exactly the system I needed. Adani panels, clean installation." },
      { author: "Rekha V.",   initials: "RV", rating: 5, date: "Mar 2026", text: "Excellent value for money. Best price across 6 quotes. Installation in 22 days, subsidy in 40 days." },
      { author: "Suresh G.",  initials: "SG", rating: 4, date: "Jan 2026", text: "Good work, reliable team. Prashant personally supervised the installation. Recommended for South Bangalore." }
    ]
  },
  {
    id: 4, icon: '🔆',
    name: "Charvi Solar Solution", owner: "D. Rajendra Prasad",
    email: "charvisolar@gmail.com", phone: "8867777388",
    website: null,
    logo: null,
    area: "Indiranagar", city: "Bangalore", pincode: "560038",
    rating: 4.2, reviewCount: 41, experience: 10, installs: 280,
    brands: ["Waaree", "Vikram", "Tata Solar"],
    priceMin: 38000, priceMax: 55000,
    specialization: "Residential & C&I",
    badges: ["10 Years Experience", "MNRE Approved"],
    about: "Charvi Solar Solution has 10 years of experience catering to B2C customers across central Karnataka and Bangalore. Leads via Facebook advertising and word-of-mouth. Planning direct tie-ups with financing institutions for customer EMI options.",
    services: ["Residential Solar", "Small Commercial", "System Design", "Documentation Support", "Annual Maintenance"],
    certifications: ["MNRE Registered", "KREDL Approved"],
    serviceAreas: ["Indiranagar", "Domlur", "HAL", "Old Airport Road", "Ulsoor"],
    projectTimeline: "25–40 days", warranty: "25 yr panel / 7 yr inverter",
    ratingBreakdown: { 5: 20, 4: 13, 3: 5, 2: 2, 1: 1 },
    reviews: [
      { author: "Ashwin T.",  initials: "AT", rating: 4, date: "Mar 2026", text: "Rajendra Prasad has deep knowledge. 10 years experience shows — diagnosed a shading issue and redesigned the layout." },
      { author: "Pooja K.",   initials: "PK", rating: 5, date: "Feb 2026", text: "Best decision ever! Charvi Solar is affordable and very reliable. The team is punctual and professional." },
      { author: "Nitin R.",   initials: "NR", rating: 3, date: "Jan 2026", text: "Work quality is good but communication could be better. Had to follow up for subsidy status. Results were excellent." }
    ]
  },
  {
    id: 5, icon: '🌤',
    name: "SuryamTech Solar", owner: "Ravi Kumar",
    email: "info@suryamtech.in", phone: "9993642777",
    website: null,
    logo: null,
    area: "HSR Layout", city: "Bangalore", pincode: "560102",
    rating: 4.6, reviewCount: 128, experience: 7, installs: 520,
    brands: ["Tata Solar", "Adani"],
    priceMin: 48000, priceMax: 70000,
    specialization: "Residential & Commercial",
    badges: ["Tata Power Channel Partner", "PM Surya Ghar Registered", "Top Installer"],
    about: "SuryamTech is a Tata Power Channel Partner serving domestic, residential, and C&I clients. Word-of-mouth referrals convert at ~90%, Tata Power leads at 20–30%. Leads also generated through Google Ads and Meta Ads.",
    services: ["Residential Solar", "Commercial & Industrial Solar", "Tata Power Products", "Subsidy Management", "Remote Monitoring"],
    certifications: ["Tata Power Channel Partner", "MNRE Registered", "ISO Certified"],
    serviceAreas: ["HSR Layout", "Sarjapur Road", "Outer Ring Road", "Electronic City", "Bommanahalli"],
    projectTimeline: "14–30 days", warranty: "25 yr panel / 10 yr inverter",
    ratingBreakdown: { 5: 78, 4: 36, 3: 10, 2: 3, 1: 1 },
    reviews: [
      { author: "Kiran M.",   initials: "KM", rating: 5, date: "Apr 2026", text: "Tata Solar panels from an authorised partner — couldn't ask for more. Excellent installation quality and prompt after-sales." },
      { author: "Nandini S.", initials: "NS", rating: 5, date: "Mar 2026", text: "Very professional. Ravi Kumar personally came for the initial site survey. Knowledgeable and courteous team." },
      { author: "Gopal R.",   initials: "GR", rating: 4, date: "Feb 2026", text: "Great service. Being a Tata partner gives confidence. Minor delay in BESCOM inspection but overall top-notch." }
    ]
  },
  {
    id: 6, icon: '🌻',
    name: "Aayush Solar (Tata Power)", owner: "Aayush",
    email: "aayush@aayushsolar.com", phone: "9039140393",
    website: null,
    logo: null,
    area: "Marathahalli", city: "Bangalore", pincode: "560037",
    rating: 4.4, reviewCount: 95, experience: 4, installs: 190,
    brands: ["Adani", "Waaree", "RenewSys"],
    priceMin: 42000, priceMax: 62000,
    specialization: "Residential, Industrial & Commercial",
    badges: ["PM Surya Ghar Registered", "Solar Trade App Partner"],
    about: "Aayush Solar serves residential families, industries, hospitals, and commercial clients. 50–60% of customers finance; 40% pay upfront (70–80% on material delivery, 20% on completion). Referrals convert at ~100%, marketing campaigns at ~10%.",
    services: ["Residential Solar", "Industrial Solar", "Commercial Solar", "Hospital & Institutional", "Quick Quotation System"],
    certifications: ["MNRE Registered", "PM Surya Ghar Empanelled"],
    serviceAreas: ["Marathahalli", "Whitefield", "Varthur", "Bellandur", "Brookefield"],
    projectTimeline: "20–40 days", warranty: "25 yr panel / 5 yr inverter",
    ratingBreakdown: { 5: 55, 4: 28, 3: 8, 2: 3, 1: 1 },
    reviews: [
      { author: "Suresh P.",  initials: "SP", rating: 4, date: "Apr 2026", text: "Aayush is a young and dynamic entrepreneur. Quick response, got my quotation in 2 minutes. Installation was smooth." },
      { author: "Lakshmi T.", initials: "LT", rating: 5, date: "Feb 2026", text: "Excellent service for our factory solar setup. Aayush's team handled everything professionally." },
      { author: "Rajan K.",   initials: "RK", rating: 4, date: "Jan 2026", text: "Good quality at a fair price. Team was punctual and completed the job in 28 days as promised." }
    ]
  },
  {
    id: 7, icon: '🏗',
    name: "Anil Construction Solar", owner: "Anil Rathore",
    email: "anil@anilsolar.com", phone: "7240810000",
    website: null,
    logo: null,
    area: "Bannerghatta", city: "Bangalore", pincode: "560100",
    rating: 4.1, reviewCount: 29, experience: 3, installs: 62,
    brands: ["Waaree", "Rayzon"],
    priceMin: 36000, priceMax: 52000,
    specialization: "Residential",
    badges: ["MNRE Approved", "New & Growing"],
    about: "Anil Construction Solar is a growing firm with 33 installation requests in pipeline. Working on bank loan tie-ups (Jan Samarth portal) to ease the financing bottleneck. Strong social proof: every completed project brings 3–5 new referrals.",
    services: ["Residential Solar", "Roof Survey", "Subsidy Documentation", "Bank Loan Assistance"],
    certifications: ["MNRE Registered"],
    serviceAreas: ["Electronic City", "Begur", "Hulimavu", "Bannerghatta Road"],
    projectTimeline: "35–60 days", warranty: "25 yr panel / 5 yr inverter",
    ratingBreakdown: { 5: 14, 4: 10, 3: 3, 2: 1, 1: 1 },
    reviews: [
      { author: "Praveen N.", initials: "PN", rating: 4, date: "Mar 2026", text: "Anil is very sincere. New player but very dedicated. Got a good price and the installation quality is solid." },
      { author: "Geetha S.",  initials: "GS", rating: 4, date: "Feb 2026", text: "Reasonable pricing and honest communication. Small delay due to bank loan processing but Anil kept me updated." },
      { author: "Mohan V.",   initials: "MV", rating: 5, date: "Dec 2025", text: "Excellent work for Electronic City area. Very affordable. I referred 3 neighbours already." }
    ]
  },
  {
    id: 8, icon: '⚙',
    name: "Dynamic Control Solar", owner: "Swapan Hazra",
    email: "swapan@dynamiccontrol.in", phone: "9830861189",
    website: null,
    logo: null,
    area: "HSR Layout", city: "Bangalore", pincode: "560103",
    rating: 4.5, reviewCount: 76, experience: 5, installs: 310,
    brands: ["Tata Solar"],
    priceMin: 50000, priceMax: 72000,
    specialization: "Residential, Hospitals & Commercial",
    badges: ["Tata Power Solar Authorized Vendor", "Top Installer", "Rapidly Growing"],
    about: "Dynamic Control transitioned from electrical equipment to solar after COVID. Revenue scaled from ₹50–60 lakhs (2021) to ₹15 crores+ today. 22 in-house staff + 40 contract installers. Leads via Tata Power, PM Surya Ghar, social media, banners near banks, and industry expos.",
    services: ["Residential Solar", "Commercial Solar", "Hospital Installations", "Multi-complex Projects", "Rice Mill & Industrial"],
    certifications: ["Tata Power Solar Authorized", "MNRE Registered", "ISO 9001"],
    serviceAreas: ["Bellandur", "Sarjapur", "Varthur", "HSR Layout", "Outer Ring Road"],
    projectTimeline: "14–28 days", warranty: "25 yr panel / 10 yr inverter",
    ratingBreakdown: { 5: 46, 4: 22, 3: 5, 2: 2, 1: 1 },
    reviews: [
      { author: "Anand K.",   initials: "AK", rating: 5, date: "Apr 2026", text: "Dynamic Control is the real deal. Swapan has scaled his business impressively. Installation completed in 18 days." },
      { author: "Sunita R.",  initials: "SR", rating: 5, date: "Mar 2026", text: "Best solar company in Bellandur. Tata panels with full authorized warranty. Excellent after-sales support." },
      { author: "Rajesh M.",  initials: "RM", rating: 4, date: "Feb 2026", text: "Big team means multiple projects at once. My hospital's 30 kW setup was done in 21 days." }
    ]
  },
  {
    id: 9, icon: '🔬',
    name: "Manav Solar", owner: "Akhil",
    email: "akhil@manavsolar.com", phone: "—",
    website: "https://manavsolar.com",
    logo: "https://www.google.com/s2/favicons?domain=manavsolar.com&sz=64",
    area: "Marathahalli", city: "Bangalore", pincode: "560035",
    rating: 4.8, reviewCount: 54, experience: 9, installs: 95,
    brands: ["Manav 3D Panels", "Tata Solar"],
    priceMin: 65000, priceMax: 120000,
    specialization: "Premium Residential & Deep Tech",
    badges: ["Deep Tech Pioneer", "3D Solar Technology", "Premium Segment"],
    about: "Manav Solar is India's pioneer in 3D solar geometry — trapping more light than standard 2D panels without additional land. Recognized internationally, including partnerships with the Italian Government (1 GW plants) and Indian Railways. Also serves premium Bangalore residential clients.",
    services: ["Premium Residential Solar", "3D Solar Technology", "Efficiency Optimisation", "Roof Design Consultation", "High-efficiency Systems"],
    certifications: ["MNRE Registered", "Deep Tech Patent Holder", "International Recognition"],
    serviceAreas: ["Sarjapur Road", "Marathahalli", "Whitefield", "Koramangala", "Varthur"],
    projectTimeline: "21–45 days", warranty: "30 yr panel / 15 yr inverter",
    ratingBreakdown: { 5: 40, 4: 10, 3: 3, 2: 1, 1: 0 },
    reviews: [
      { author: "Dr. Sharma", initials: "DS", rating: 5, date: "Apr 2026", text: "Manav Solar is in a league of their own. The 3D panel technology is genuinely impressive — 28% more generation than my neighbor's system." },
      { author: "Ananya T.",  initials: "AT", rating: 5, date: "Mar 2026", text: "Premium price but absolutely worth it. Akhil knows solar physics inside out. Best ROI analysis I've seen." },
      { author: "Prashant G.",initials: "PG", rating: 5, date: "Feb 2026", text: "Exceptional quality and after-sales. If you want the best system money can buy in Bangalore, this is it." }
    ]
  },
  {
    id: 10, icon: '🔌',
    name: "GoodWe Solutions BLR", owner: "Anirudh",
    email: "anirudh@goodwe-blr.com", phone: "—",
    website: "https://en.goodwe.com/residential-solutions",
    logo: "https://www.google.com/s2/favicons?domain=goodwe.com&sz=64",
    area: "Koramangala", city: "Bangalore", pincode: "560076",
    rating: 4.6, reviewCount: 108, experience: 8, installs: 430,
    brands: ["GoodWe Inverters", "Waaree", "Adani", "Tata Solar"],
    priceMin: 44000, priceMax: 68000,
    specialization: "Residential & Small Commercial",
    badges: ["GoodWe Tier-1 OEM Partner", "MNRE Approved", "Quality-First Installer"],
    about: "GoodWe Solutions BLR is the authorised installer partner for GoodWe — a globally recognised Tier-1 inverter OEM. Anirudh ensures zero corner-cutting on Balance of System (BOS) components — a key differentiator in a market that compromises on cables and mountings.",
    services: ["Residential Solar", "Commercial Solar", "GoodWe Inverter Installation", "BOS Quality Assurance", "Technical Proposal & ROI Report"],
    certifications: ["GoodWe Authorised Partner", "MNRE Registered", "BIS Certified"],
    serviceAreas: ["BTM Layout", "Jayanagar", "JP Nagar", "Banashankari", "Kanakapura Road"],
    projectTimeline: "18–35 days", warranty: "25 yr panel / 12 yr GoodWe inverter",
    ratingBreakdown: { 5: 66, 4: 30, 3: 8, 2: 3, 1: 1 },
    reviews: [
      { author: "Subhash K.", initials: "SK", rating: 5, date: "Apr 2026", text: "GoodWe inverter is top-notch. Anirudh insisted on branded BOS components — 2 years later, zero issues while neighbors have failures." },
      { author: "Kavitha R.", initials: "KR", rating: 5, date: "Mar 2026", text: "The technical proposal was the most detailed I received — actual ROI, payback period, year-by-year savings." },
      { author: "Manoj T.",   initials: "MT", rating: 4, date: "Feb 2026", text: "Excellent technical knowledge. GoodWe inverter is whisper quiet. 36-day installation (slight BESCOM delay)." }
    ]
  }
];

/* ── LABOR POOL ── */
const SC_WORKERS = [
  { id:1, name:"Ramu Naik",       initials:"RN", skills:["Panel Mounting","DC Wiring","Earthing"], exp:"6 yrs", area:"Whitefield",    rating:4.7, avail:"available",  jobs:48, certs:["NSDC Solar Technician L3"] },
  { id:2, name:"Kishore V.",      initials:"KV", skills:["Inverter Install","AC Wiring","Testing"], exp:"4 yrs", area:"Marathahalli",  rating:4.5, avail:"available",  jobs:31, certs:["MNRE Solar PV Technician"] },
  { id:3, name:"Ganesh B.",       initials:"GB", skills:["Panel Mounting","Roof Structure","DC Wiring"], exp:"7 yrs", area:"Koramangala",  rating:4.8, avail:"busy",      jobs:62, certs:["NSDC L3","Skill India Graduate"] },
  { id:4, name:"Shiva Kumar",     initials:"SK", skills:["Civil Work","Roof Drilling","Structure"], exp:"5 yrs", area:"HSR Layout",    rating:4.4, avail:"available",  jobs:39, certs:["Civil Technician Certified"] },
  { id:5, name:"Rajan P.",        initials:"RP", skills:["All Electrical","Commissioning","BESCOM Coordination"], exp:"9 yrs", area:"Indiranagar",  rating:4.9, avail:"partial",   jobs:87, certs:["Licensed Electrical Contractor","MNRE L4"] },
  { id:6, name:"Mohan Das",       initials:"MD", skills:["Panel Mounting","Ground Mount","DC Wiring"], exp:"3 yrs", area:"Electronic City",rating:4.2, avail:"available",  jobs:18, certs:["NSDC Solar Technician L2"] },
  { id:7, name:"Suresh Yadav",    initials:"SY", skills:["Inverter Install","AC Wiring","Remote Monitoring"], exp:"5 yrs", area:"BTM Layout",    rating:4.6, avail:"available",  jobs:44, certs:["MNRE Solar PV Technician"] },
  { id:8, name:"Pradeep Singh",   initials:"PS", skills:["Panel Mounting","Waterproofing","Safety"], exp:"4 yrs", area:"Bellandur",     rating:4.3, avail:"busy",      jobs:28, certs:["NSDC L3","Height Safety Cert"] },
  { id:9, name:"Venkatesh R.",    initials:"VR", skills:["All Electrical","Testing","Commissioning","Grid Integration"], exp:"11 yrs", area:"Sarjapur Rd",  rating:4.9, avail:"partial",   jobs:103,certs:["Licensed Electrical Contractor","KREDL Approved","NSDC L4"] },
  { id:10,name:"Balu Swamy",      initials:"BS", skills:["Civil Work","Panel Mounting","DC Wiring"], exp:"2 yrs", area:"Banashankari",  rating:4.1, avail:"available",  jobs:11, certs:["NSDC Solar Technician L2"] },
  { id:11,name:"Arjun Hegde",     initials:"AH", skills:["Roof Structure","Panel Mounting","Tilt Frame"], exp:"6 yrs", area:"Jayanagar",     rating:4.6, avail:"available",  jobs:51, certs:["NSDC L3","Structural Safety"] },
  { id:12,name:"Dinesh Rao",      initials:"DR", skills:["AC Wiring","Grid Connection","BESCOM Liaison"], exp:"8 yrs", area:"Marathahalli",  rating:4.7, avail:"available",  jobs:74, certs:["Licensed Electrical Contractor","MNRE L3"] }
];

/* ── VENDOR LEADS (pre-loaded for vendor demo) ── */
const SC_LEADS = [
  { id:1,  customer:"Hitesh Kumar",      area:"HSR Layout",    system:"5 kW",  type:"Residential", bill:"₹5,200/mo", status:"won",       date:"05 May 2026", phone:"9900112233", notes:"Project confirmed. Advance paid. Excited about RMS monitoring. Bill was ₹4,500/mo — now ₹600/mo post-install." },
  { id:2,  customer:"Sandeep Banerjee",  area:"Marathahalli",  system:"5 kW",  type:"Residential", bill:"₹6,000/mo", status:"contacted", date:"12 May 2026", phone:"9911223344", notes:"Looking for honest advice. Doesn't want to be oversold. Interested in Adani panels." },
  { id:3,  customer:"Pranav Sudhanshu",  area:"Whitefield",    system:"3 kW",  type:"Residential", bill:"₹3,800/mo", status:"quote_sent",date:"10 May 2026", phone:"9922334455", notes:"Tata Solar preference. Wants roof work guarantee. Asked about monsoon performance." },
  { id:4,  customer:"Prajnya Bhat",      area:"Jayanagar",     system:"3 kW",  type:"Residential", bill:"₹2,900/mo", status:"new",       date:"14 May 2026", phone:"9933445566", notes:"First-time solar buyer. Wants app-based monitoring. Very interested in Good Zero plan." },
  { id:5,  customer:"Akhilesh Vyas",     area:"Indiranagar",   system:"5 kW",  type:"Residential", bill:"₹7,500/mo", status:"contacted", date:"11 May 2026", phone:"9944556677", notes:"Wants zero-hassle experience. BESCOM, subsidy, grid — needs vendor to handle everything." },
  { id:6,  customer:"Brijesh Pratap",    area:"Koramangala",   system:"5 kW",  type:"Residential", bill:"₹5,800/mo", status:"quote_sent",date:"08 May 2026", phone:"9955667788", notes:"Subsidy timeline very important. Confirmed quote ₹2,85,000. Comparing 2 vendors." },
  { id:7,  customer:"Parth Arora",       area:"BTM Layout",    system:"4 kW",  type:"Residential", bill:"₹4,200/mo", status:"new",       date:"14 May 2026", phone:"9966778899", notes:"Just moved in. Wants solar as part of new home setup. Budget ₹2–2.5 lakhs." },
  { id:8,  customer:"Meenakshi V.",      area:"Kadugodi",      system:"4 kW",  type:"Residential", bill:"₹4,100/mo", status:"won",       date:"05 May 2026", phone:"9977889900", notes:"Project confirmed. Advance paid. Survey completed 08 May." }
];

/* ── QUOTATIONS ── */
const SC_QUOTATIONS = [
  { id:"QT-001", customer:"Srinivas G.",    date:"10 May 2026", system:"10 kW",  panels:"Tata Solar (10×1kW)", inverter:"GoodWe 10 kW", amount:"₹5,80,000", status:"sent",      expiry:"07 Jun 2026" },
  { id:"QT-002", customer:"Anita Krishnan", date:"12 May 2026", system:"5 kW",   panels:"Waaree (5×1kW)",     inverter:"Havells 5 kW",  amount:"₹2,85,000", status:"viewed",    expiry:"09 Jun 2026" },
  { id:"QT-003", customer:"Meenakshi V.",   date:"05 May 2026", system:"4 kW",   panels:"Tata Solar (4×1kW)", inverter:"Delta 4 kW",    amount:"₹2,20,000", status:"accepted",  expiry:"05 Jun 2026" },
  { id:"QT-004", customer:"Ravi Shankar",   date:"11 May 2026", system:"7 kW",   panels:"Waaree (7×1kW)",     inverter:"GoodWe 7 kW",   amount:"₹3,85,000", status:"draft",     expiry:"08 Jun 2026" },
  { id:"QT-005", customer:"Suresh Babu",    date:"03 May 2026", system:"15 kW",  panels:"Adani (15×1kW)",     inverter:"Sungrow 15 kW", amount:"₹7,50,000", status:"rejected",  expiry:"01 Jun 2026" }
];

/* ── VENDOR PROJECTS ── */
const SC_PROJECTS = [
  { id:"PRJ-001", customer:"Meenakshi V.",   area:"Kadugodi",    system:"4 kW",  stage:"installation", startDate:"10 May 2026", eta:"30 May 2026",  value:"₹2,20,000", progress:65 },
  { id:"PRJ-002", customer:"Pradeep S.",     area:"Whitefield",  system:"3 kW",  stage:"inspection",   startDate:"01 May 2026", eta:"28 May 2026",  value:"₹1,65,000", progress:80 },
  { id:"PRJ-003", customer:"Savitha Rao",    area:"Marathahalli",system:"5 kW",  stage:"survey",       startDate:"13 May 2026", eta:"10 Jun 2026",  value:"₹2,75,000", progress:15 },
  { id:"PRJ-004", customer:"Kavitha M.",     area:"Brookefield", system:"3 kW",  stage:"completed",    startDate:"15 Apr 2026", eta:"01 May 2026",  value:"₹1,70,000", progress:100 },
  { id:"PRJ-005", customer:"Ramesh T.",      area:"Whitefield",  system:"6 kW",  stage:"completed",    startDate:"01 Apr 2026", eta:"20 Apr 2026",  value:"₹3,30,000", progress:100 },
  { id:"PRJ-006", customer:"Arjun Mehta",    area:"KR Puram",    system:"8 kW",  stage:"material",     startDate:"08 May 2026", eta:"03 Jun 2026",  value:"₹4,40,000", progress:35 }
];

/* ── CUSTOMER PROJECT TRACKER DATA ── */
const SC_CUSTOMER_PROJECT = {
  id: "PRJ-2026-042",
  vendor: "SuryamTech Solar",
  vendorContact: "9993642777",
  system: "5 kW Residential Solar",
  panels: "Tata Solar — 5 × 1kW Panels",
  inverter: "GoodWe 5 kW Smart Inverter",
  area: "HSR Layout, Bangalore",
  amount: "₹2,75,000",
  subsidy: "₹78,000 (PM Surya Ghar) + ₹30,000 (Karnataka)",
  netCost: "₹1,67,000",
  startDate: "28 Apr 2026",
  eta: "05 Jun 2026",
  progress: 55,
  stages: [
    { name:"Survey & Assessment",  status:"done",    date:"29 Apr 2026", desc:"Roof inspection, shadow analysis, electricity bill review — all completed." },
    { name:"Quote Approved",       status:"done",    date:"02 May 2026", desc:"Quotation of ₹2,75,000 approved. 30% advance of ₹82,500 paid." },
    { name:"Subsidy Registration", status:"done",    date:"05 May 2026", desc:"PM Surya Ghar portal registration completed. Application #PMSG-BLR-20260505-7842." },
    { name:"Material Procurement", status:"done",    date:"10 May 2026", desc:"Tata Solar panels and GoodWe inverter ordered from authorised distributor." },
    { name:"Installation",         status:"active",  date:"Expected: 26–28 May 2026", desc:"Panel mounting and DC wiring in progress. Inverter installation scheduled for 17 May." },
    { name:"BESCOM Inspection",    status:"pending", date:"Expected: 30 May 2026", desc:"BESCOM grid connection inspection will be scheduled after installation." },
    { name:"Subsidy Disbursement", status:"pending", date:"Expected: 20 Jun 2026", desc:"₹1,08,000 subsidy credited directly to your bank account after inspection." },
    { name:"Handover & Go-Live",   status:"pending", date:"Expected: 02 Jun 2026", desc:"System commissioning, app setup, and 25-year warranty documentation." }
  ]
};

/* ── CUSTOMER INQUIRY (pre-filled for demo) ── */
const SC_CUSTOMER_INQUIRY = {
  submitted: true,
  property: "3BHK Independent House",
  area: "HSR Layout",
  terraceSize: "800 sq ft",
  monthlyBill: "₹5,500",
  systemSize: "5 kW (recommended)",
  preferredBrands: ["Tata Solar", "Waaree"],
  budget: "₹2–3 lakhs",
  subsidyInterest: true,
  submitDate: "28 Apr 2026",
  responses: 4
};

/* ── BANK PARTNERS ── */
const SC_BANKS = [
  { name: "State Bank of India",    rate: "7.5%",  maxTenure: "7 years", minAmount: "₹50,000",  badge:"PM Surya Ghar Empanelled" },
  { name: "Bank of Baroda",         rate: "8.0%",  maxTenure: "5 years", minAmount: "₹50,000",  badge:"PM Surya Ghar Empanelled" },
  { name: "HDFC Bank",              rate: "9.5%",  maxTenure: "5 years", minAmount: "₹1,00,000", badge:"Fast Approval" },
  { name: "Canara Bank",            rate: "7.8%",  maxTenure: "7 years", minAmount: "₹50,000",  badge:"Karnataka Preferred" },
  { name: "Karnataka Bank",         rate: "8.5%",  maxTenure: "5 years", minAmount: "₹50,000",  badge:"Local Support" },
  { name: "SIDBI (Jan Samarth)",    rate: "6.5%",  maxTenure: "10 years",minAmount: "₹50,000",  badge:"Lowest Rate" }
];
