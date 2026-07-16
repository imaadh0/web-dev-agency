# Forty Pixels — Content & Design Index

Generated from the current `app/` routes, shared components, and `public/` assets.

## Route index

| Route | Source | Page type |
|---|---|---|
| `/` | `app/page.tsx` | Home / studio overview |
| `/services` | `app/services/page.tsx` | Service packages, process, FAQ |
| `/work` | `app/work/page.tsx` | Portfolio index |
| `/work/oyo-eats` | `app/work/[slug]/page.tsx` | Case study |
| `/work/taanz` | `app/work/[slug]/page.tsx` | Case study |
| `/work/nuzii` | `app/work/[slug]/page.tsx` | Case study |
| `/about` | `app/about/page.tsx` | Studio story and principles |
| `/contact` | `app/contact/page.tsx` | Contact conversion page |
| `/enterprise` | `app/enterprise/page.tsx` | Custom software / enterprise products |

There is currently no `/pricing` route in the codebase.

## Shared shell and design system

### Navigation

- Fixed top navigation with the Forty Pixels logo.
- Primary links: Work, About, Services, Enterprise.
- Right-side contact link: Contact.
- Responsive mobile menu with numbered links and arrow affordances.
- Navigation changes theme according to the section beneath it: hero, light paper, dark, or lime.

### Shared footer

- Large stacked wordmark: `FORTY PIXELS.`
- Tagline: `Premium digital experiences for ambitious businesses.`
- Location labels: `COLOMBO, SRI LANKA` and `WORKING WORLDWIDE`.
- Page directory: About, Work, Services, Enterprise, Contact.
- Contact email: `hello@fortypixels.com`.
- Booking link: `Book a discovery call`.
- Newsletter form: `Useful notes for founders`.
- Social links: LinkedIn, Instagram, X.
- Bottom utility: copyright, Coverr footage credit, Back to top.

### Global visual language

- Typeface: Geist Sans for display and body copy; Geist Mono for labels, metadata, buttons, and navigation.
- Palette: warm paper background, near-black ink/dark sections, acid lime feature sections, plus case-study blue and rose surfaces.
- Large editorial typography with tight tracking and short line lengths.
- Full-viewport video heroes with dark gradient scrims, faint grid overlays, and small mono kickers.
- Angular clipped-corner buttons and arrow icons.
- Section eyebrows use a numeric index plus an uppercase label.
- Motion: route curtain transitions, preloader, word reveals, scroll reveals, parallax videos, count-up metrics, marquee logos, and looping offer demos.
- Responsive behavior: desktop split layouts collapse to one column; cards become vertical; mobile navigation replaces the desktop directory.

## Home — `/`

Source: [app/page.tsx](app/page.tsx)

### Hero

- Design: full-screen background video with dark overlay, grid, top-left mono kicker, oversized headline anchored at the bottom-left, and one bright CTA block at the lower-right.
- Video: `/videos/Video-7.mp4`; blurred, desaturated, high-contrast background treatment.
- Kicker: `STRATEGY · DESIGN · ENGINEERING`
- H1: `Digital experiences built to move business forward.`
- Paragraph: `We help ambitious businesses turn complex ideas into clear, compelling websites and products.`
- CTA: `See our work` → `/work`

### Intro / positioning

- Design: light paper section; numbered eyebrow; two-column editorial layout.
- H2: `A focused digital partner for businesses that need sharper positioning, stronger experiences and technology ready for the next stage of growth.`
- Paragraph: `We work directly with founders and teams to turn business goals into digital systems people understand, trust and use.`
- CTA: `About Forty Pixels` → `/about`

### Capability feature

- Design: dark split section; grayscale video on the left, text and service list on the right.
- Video: `/videos/home-capabilities.mp4`.
- Section label: `What we do`
- H2: `One partner from first question to final release.`
- H3: `Strategy & design`
  - Paragraph: `Positioning, information architecture and visual systems that make the value instantly clear.`
- H3: `Web development`
  - Paragraph: `Fast, responsive builds engineered around performance, accessibility and conversion.`
- H3: `Digital products`
  - Paragraph: `Platforms, portals and internal tools designed around real users and operational needs.`
- CTA: `Explore services` → `/services`

### Proof metrics

- Design: light section with oversized animated metrics in a three-column grid.
- Section label: `Why Forty Pixels`
- H2: `Small team. Direct thinking. Serious outcomes.`
- Metric 1: `1 TO 1` — `Direct collaboration with the people doing the work.`
- Metric 2: `4+` — `Industries served across commerce, food, finance and software.`
- Metric 3: `100%` — `Custom responsive experiences, never recycled templates.`

### Offer preview

- Design: lime section; large headline above a three-column card grid. Each card contains a choreographed animated CSS interface demo.
- Section label: `Ways to work together`
- H2: `Choose the build that matches your next move.`
- CTA: `View all services` → `/services`
- H3: `Landing Pages`
  - Tagline: `Focused, fast, built to validate.`
  - Paragraph: `One sharp page that turns a visitor into a customer. For launches, campaigns and single offers — live in about a week.`
  - Visual: miniature browser window that types the URL, reveals the page, then a cursor clicks the CTA and the launch bar fills.
- H3: `Stores`
  - Tagline: `A refined shop that makes buying simple.`
  - Paragraph: `Everything you need to sell online — easy for customers to buy from, easy for you to run. From a small collection to a serious catalog, yours to own.`
  - Visual: product-to-cart-to-checkout-to-order-confirmed flow with an animated add-to-cart dot and staggered check-offs.
- H3: `Systems`
  - Tagline: `Custom products, engineered for growth.`
  - Paragraph: `When the idea is bigger than a page or a store — websites, platforms, apps, portals and internal tools built around how your business actually works.`
  - Visual: central Core hub that draws animated connections outward; data packets travel the spokes and node labels cycle through Web app, API, Client portal, Automations, Dashboard, CMS, Mobile, and Analytics.

### Selected work

- Design: dark section with a large background video, then three colored project cards.
- Video: `/videos/home-work.mp4`.
- Section label: `Selected work`
- H2: `Built for the real world.`
- Paragraph: `Different industries. Different challenges. The same insistence on clarity, speed and usefulness.`
- Cards: OYO Eats, Taanz, Nuzii.
- CTA: `See every case study` → `/work`

### Client logo strip and testimonial

- Design: light section with a continuously scrolling logo marquee, followed by a large pull quote.
- Section label: `Built with businesses we believe in`
- Logos: Oyo Eats, Taanz, Nuzi.
- Blockquote: `A clear process, thoughtful details and a digital result that finally feels like the business we are becoming.`

### Closing CTA

- Design: dark full-width band with lime eyebrow, oversized headline, and bordered horizontal CTA.
- H2: `Bring us the complex part. We’ll make the next step clear.`
- CTA: `Start a project` → `/contact`

## Services — `/services`

Source: [app/services/page.tsx](app/services/page.tsx)

### Hero

- Design: full-screen background video with overlay grid and bottom-aligned copy.
- Video: `/videos/video-3.mp4`.
- Kicker: `WEBSITE SERVICES`
- H1: `The right website for where your business is going.`
- Paragraph: `Clear scope, honest timelines and a design-led process that keeps the work focused from discovery to launch.`
- CTA: `Discuss your website` → `/contact`

### Website packages

- Design: stacked, very tall package panels. Each panel has a number column, descriptive content, and a feature list. Panel themes alternate between paper, dark, lime, and graph-paper treatment.
- Section label: `Website packages`
- H2: `Launch Page`
  - Audience label: `Founders · Single offers`
  - Paragraph: `A focused one-page experience for launching quickly with the message, design and technical quality already in place.`
  - Features: Discovery and positioning; Custom responsive design; Performance-first development; Analytics and launch support.
- H2: `Brand Website`
  - Audience label: `Growing service businesses`
  - Paragraph: `A structured multi-page website that explains what you do, builds trust and gives every audience a clear next action.`
  - Features: Information architecture; Custom visual system; CMS and integrations; SEO and measurement.
- H2: `Commerce Lite`
  - Audience label: `Stores · Product brands`
  - Paragraph: `A refined commerce experience that is easy to browse, easy to buy from and straightforward for your team to manage.`
  - Features: Product and category UX; Secure checkout; Inventory workflow; Conversion optimisation.
- H2: `Scalable Build`
  - Audience label: `Platforms · Complex needs`
  - Paragraph: `A tailored website or digital system designed around custom content, workflows, integrations and future growth.`
  - Features: Product discovery; UX system and prototypes; Scalable engineering; Ongoing delivery partnership.
- Each package has CTA: `Start a conversation` → `/contact`.

### Process

- Design: dark section with a large statement and six cells in a 3-column process grid.
- Section label: `A simple process`
- H2: `Structured enough to stay clear. Flexible enough to make the work better.`
- H3: `Discovery` — `Goals, users and constraints.`
- H3: `Direction` — `Positioning, structure and visual territory.`
- H3: `Design` — `Responsive screens and working prototypes.`
- H3: `Build` — `Production engineering and integrations.`
- H3: `Quality` — `Content, accessibility and device testing.`
- H3: `Release` — `Launch, measurement and support.`

### FAQ

- Design: light two-column accordion; large question headline on the left, expandable details on the right.
- Section label: `Frequently asked`
- H2: `Useful answers before we begin.`
- `How long will it take?` — `Focused launch pages can take around one week. Larger websites generally take four to six weeks, depending on content and complexity.`
- `Can you handle commerce?` — `Yes. We design and build clear storefronts, product systems and secure checkout experiences.`
- `What if the direction is unclear?` — `That is what discovery is for. We use references, positioning and early prototypes to make the direction tangible before full design begins.`
- `Are revisions included?` — `Yes. Review and refinement are built into the design stages so the approved direction is intentional, not rushed.`

### Closing

- Shared contact band.
- Default H2: `Let’s build something that earns attention.`
- CTA: `Start a project` → `/contact`

## Work — `/work`

Source: [app/work/page.tsx](app/work/page.tsx)

### Hero

- Design: full-screen video hero.
- Video: `/videos/Video-8.mp4`.
- Kicker: `SELECTED WORK`
- H1: `Digital work that solves a real business problem.`
- Paragraph: `A focused selection of products and websites designed to improve clarity, trust, performance and growth.`

### Case-study index

- Design: light paper section with three large stacked project cards.
- Section label: `Case studies`
- Project cards show category, URL, browser-style logo visual, client name, summary, and `View case` arrow CTA.
- Featured cards: OYO Eats, Taanz, Nuzii.

### Work principles

- Design: dark section with a large statement followed by a three-column principle grid.
- Section label: `Our standard`
- H2: `Every project has a different answer. The method stays rigorous.`
- H3: `Useful before impressive`
  - Paragraph: `Strong digital work begins by removing uncertainty for the people using it.`
- H3: `Distinct without noise`
  - Paragraph: `Brand character should sharpen the message, not compete with it.`
- H3: `Built for change`
  - Paragraph: `Systems should support new content, products and decisions after launch.`

### Closing

- H2: `Have a project that deserves its own answer?`
- CTA: `Start a project` → `/contact`

## Case studies — `/work/[slug]`

Template source: [app/work/[slug]/page.tsx](app/work/[slug]/page.tsx)

### Shared case-study layout

1. **Hero:** full-height solid color panel; case kicker row; oversized client H1; one-line summary; browser-window mockup containing client logo.
2. **Overview:** light paper section with `Project overview`; two columns labeled `THE CHALLENGE` and `THE RESPONSE`.
3. **Results:** colored section with three oversized metrics.
4. **Experience:** dark section with a large H2 and three system cards: Structure, Identity, Performance.
5. **Next step:** shared dark contact band.

### OYO Eats — `/work/oyo-eats`

- Tag: `Food delivery`
- URL: `oyoeats.lk`
- H1: `OYO Eats`
- Summary paragraph: `A custom delivery platform connecting local restaurants with customers through a fast, intuitive ordering experience.`
- Challenge H2: `Turn a growing restaurant operation into a clear digital journey without slowing customers down at the point of choice.`
- Response paragraph: `We created a mobile-first ordering architecture, focused product discovery and a visual system that keeps food, availability and delivery status easy to understand.`
- Metrics: `45%` — Increase in orders; `3.2×` — Faster load times; `98%` — Customer satisfaction.
- Experience H2: `A clearer path from first impression to meaningful action.`
- Experience cards: Structure, Identity, Performance.
- Closing H2: `Need a result shaped around your business?`

### Taanz — `/work/taanz`

- Tag: `Accounting services`
- URL: `taanzoutsourcing.com`
- H1: `Taanz`
- Summary paragraph: `A credible, structured digital presence for an accounting company serving businesses that need clarity and trust.`
- Challenge H2: `Present a broad financial service offering without making the site feel dense, corporate or difficult to navigate.`
- Response paragraph: `We organised services around client needs, introduced a calm editorial hierarchy and designed a conversion path that makes expertise visible before asking for contact.`
- Metrics: `78%` — Lead generation; `5.1×` — Page views; `94%` — Trust score.
- Experience H2: `A clearer path from first impression to meaningful action.`
- Experience cards: Structure, Identity, Performance.
- Closing H2: `Need a result shaped around your business?`

### Nuzii — `/work/nuzii`

- Tag: `Fashion commerce`
- URL: `nuzii.co`
- H1: `Nuzii`
- Summary paragraph: `A modern commerce experience pairing a refined fashion identity with simple browsing and responsive checkout.`
- Challenge H2: `Create a store that feels like a distinct fashion brand while keeping product discovery and checkout fast on mobile.`
- Response paragraph: `We built an editorial storefront, simplified category movement and created reusable product storytelling modules that support new collections.`
- Metrics: `120%` — Sales increase; `2.8×` — Conversion rate; `91%` — Customer retention.
- Experience H2: `A clearer path from first impression to meaningful action.`
- Experience cards: Structure, Identity, Performance.
- Closing H2: `Need a result shaped around your business?`

## About — `/about`

Source: [app/about/page.tsx](app/about/page.tsx)

### Hero

- Design: full-screen video hero.
- Video: `/videos/video-2.mp4`.
- Kicker: `ABOUT FORTY PIXELS`
- H1: `Small enough to stay close. Experienced enough to see the whole system.`
- Paragraph: `We are a design and development studio helping founders, new businesses and growing brands build a confident digital presence.`

### Studio story

- Design: light paper split layout; large H2 on the left, two paragraphs on the right.
- Section label: `Who we are`
- H2: `We make ambitious digital work feel understandable.`
- Paragraph: `Many clients arrive with an outdated website, a product idea that is difficult to explain or a digital experience that no longer matches the business.`
- Paragraph: `We make the path forward clear. Strategy, design and development stay connected, communication remains direct and every major decision is visible before it becomes expensive.`

### Mission

- Design: lime statement section with very large typography.
- Section label: `Our mission`
- H2: `Give growing businesses access to digital quality without agency complexity.`
- Paragraph: `Clean thinking. Fast delivery. A collaborative workflow. Work that earns trust and supports long-term growth.`

### Principles

- Design: light 3-column by 2-row grid of principle cards with numbered labels and small circular corner details.
- Section label: `Principles behind the work`
- H3: `Effortless clarity` — `Good design guides people without making them work for the answer.`
- H3: `Speed with purpose` — `Moving quickly matters when every decision still supports the goal.`
- H3: `Direct communication` — `The people in the conversation are the people doing the work.`
- H3: `Every screen` — `Mobile, tablet and desktop are designed as one connected experience.`
- H3: `Accessible quality` — `Premium work comes from focus and craft—not unnecessary layers.`
- H3: `Long-term thinking` — `A website or product should be able to grow with the business behind it.`

### Client belief

- Design: dark section with a large quote and mono metadata row.
- Section label: `What clients get`
- Blockquote: `One focused team, one clear direction and a digital experience built around what the business needs next.`
- Metadata: `FOUNDED IN COLOMBO` / `WORKING WORLDWIDE`
- Closing CTA: `Start a project` → `/contact`

## Contact — `/contact`

Source: [app/contact/page.tsx](app/contact/page.tsx)

### Hero

- Design: full-screen video hero.
- Video: `/videos/landing-hero-video.mp4`.
- Kicker: `START A PROJECT`
- H1: `Tell us what needs to move forward.`
- Paragraph: `Share the goal, the difficult part and what success should look like. We will respond with the clearest next step.`

### Enquiry form

- Design: light two-column section. Editorial prompt and direct links on the left; form fields on the right.
- Section label: `Project enquiry`
- H2: `Start with the useful details.`
- Paragraph: `Replies usually arrive within one working day. Prefer a conversation? Book a discovery call or write directly.`
- Direct links: `hello@fortypixels.com`; `Book a discovery call`.
- Form fields:
  - `Your name *` — placeholder `Jane Smith`
  - `Work email *` — placeholder `jane@company.com`
  - `Company` — placeholder `Company name`
  - `What do you need?` — Website design & development; Commerce; Enterprise product; Something else
  - `Project context *` — placeholder `What are you building, what is not working today and when would you like to launch?`
- Submit button: `Prepare enquiry email`

### Contact facts

- Design: lime three-column information strip.
- `LOCATION` — `Colombo, Sri Lanka`
- `AVAILABILITY` — `Working worldwide`
- `RESPONSE` — `Within one working day`

## Enterprise — `/enterprise`

Source: [app/enterprise/page.tsx](app/enterprise/page.tsx)

### Hero

- Design: full-screen video hero.
- Video: `/videos/Video-5.mp4`.
- Kicker: `ENTERPRISE PRODUCTS`
- H1: `Complex software made clear enough to use.`
- Paragraph: `From client portals to internal platforms, we turn operational needs and product ideas into polished, production-ready software.`
- CTA: `Discuss your product` → `/contact`

### Build types

- Design: light paper section; large split heading and paragraph above a 3-column grid. Each card includes an abstract layered-diamond CSS shape.
- Section label: `What we build`
- H2: `Purpose-built systems for the work your business actually does.`
- Paragraph: `We combine product thinking, interface design and scalable engineering so complex functionality remains understandable.`
- H3: `Mobile apps` — `Native-feeling iOS and Android experiences with responsive performance and clear interaction design.`
- H3: `Dashboards & panels` — `Data-rich tools that help teams understand operations, track metrics and make better decisions.`
- H3: `Client portals` — `Secure experiences where customers can manage accounts, data, bookings, documents and communication.`
- H3: `SaaS platforms` — `Multi-tenant products with subscription logic, user roles and architecture ready for growth.`
- H3: `Internal tools` — `Focused systems that replace spreadsheets, repetitive processes and disconnected workflows.`
- H3: `API integrations` — `Connections that unify existing systems, automate handoffs and keep critical information in sync.`

### Quality promise

- Design: dark split layout; large H2 left, supporting paragraph and arrow-ended checklist right.
- Section label: `Enterprise quality · Agency speed`
- H2: `Design-led software without the heavy process.`
- Paragraph: `You work directly with the team shaping and building the product. Decisions remain visible, feedback stays close to the work and each release has a clear purpose.`
- List: Clean, focused interfaces; Full source-code ownership; Scalable architecture; Comprehensive documentation; Responsive product design; Ongoing support options.

### Delivery sequence

- Design: lime four-column strip.
- Section label: `How we deliver`
- H3: `Discover` — `Goals, users and constraints before code.`
- H3: `Prototype` — `Clickable product decisions before production.`
- H3: `Build` — `Focused sprints with visible progress.`
- H3: `Launch` — `Testing, deployment and a clear handoff.`
- Closing H2: `Turn the workflow in your head into a product your team can use.`

## Public assets

### Brand and logo assets

- `public/brand/logo.png` — primary Forty Pixels logo used in the fixed navigation.
- `public/favicon.ico` and `public/favicon.svg` — browser icons.
- `public/og.png` — social preview image configured in `app/layout.tsx`.
- `public/logos/oyo-eats.png` — Oyo Eats client logo.
- `public/logos/taanz.png` — Taanz client logo.
- `public/logos/nuzi.png` — Nuzi client logo.

### Video assets and usage

- `public/videos/Video-7.mp4` — Home hero background.
- `public/videos/video-3.mp4` — Services hero background.
- `public/videos/Video-8.mp4` — Work hero background.
- `public/videos/video-2.mp4` — About hero background.
- `public/videos/landing-hero-video.mp4` — Contact hero background.
- `public/videos/Video-5.mp4` — Enterprise hero background.
- `public/videos/home-capabilities.mp4` — Home capability feature visual.
- `public/videos/home-work.mp4` — Home selected-work visual.

The source does not assign semantic subject descriptions to these videos; they are treated as atmospheric, desaturated background footage rather than content-bearing imagery.

## Shared components

Source: [app/components/Sections.tsx](app/components/Sections.tsx) and [app/components/SiteFrame.tsx](app/components/SiteFrame.tsx)

- `VideoHero` — reusable full-screen video hero with kicker, H1, paragraph, optional CTA, overlay, grid, and scroll indicator.
- `ProjectCard` — reusable browser mockup card driven by `projectData`.
- `ContactBand` — dark closing CTA band used across most pages.
- `Eyebrow` — numbered section label.
- `Words` — word-by-word reveal wrapper used for animated headings.
- `OfferVisual` — CSS-built interface illustrations for the four Home offer cards.
- `SiteFrame` — navigation, page transition curtain, preloader, Lenis smooth scrolling, GSAP reveal/parallax/count animations, and footer.
