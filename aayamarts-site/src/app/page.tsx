import Link from "next/link";

const services = [
  {
    title: "Immersive 3D Walkthroughs",
    description:
      "Photorealistic, story-driven tours that help buyers visualize every corner of your development before ground break.",
    highlights: ["360° navigation", "Lighting simulations", "Material swaps"],
  },
  {
    title: "Architectural 3D Blueprints",
    description:
      "Precision-ready blueprints with annotated layers for architects, engineers, and municipal approvals.",
    highlights: ["MEP overlays", "BIM compatibility", "Permit-ready exports"],
  },
  {
    title: "Signature Building Elevations",
    description:
      "Exterior masterpieces blending brand-aligned aesthetics with facade feasibility studies.",
    highlights: ["Day & night renders", "Landscape integration", "Colorway decks"],
  },
  {
    title: "Virtual Reality Demo Suites",
    description:
      "Headset-ready VR environments that sell the experience instantly at expos, site offices, and boardrooms.",
    highlights: ["HTC Vive & Meta Quest", "Interactive props", "Dynamic avatars"],
  },
  {
    title: "High-Fidelity 3D Prints",
    description:
      "Scaled physical models showcasing structural details, delivered with premium display bases.",
    highlights: ["Multi-material prints", "LED lighting option", "Nationwide shipping"],
  },
  {
    title: "Custom Visualization Pods",
    description:
      "Dedicated support pods for large developers needing ongoing visualization firepower.",
    highlights: ["Embedded artists", "Agile sprint delivery", "Priority revisions"],
  },
];

const portfolioItems = [
  {
    title: "Skyline Atria Residences",
    scope: "3D Walkthrough • VR Demo • Marketing Collateral",
    description:
      "Complete buyer journey built around a multi-tower luxury society in Pune with VR kiosks deployed at sales lounges.",
  },
  {
    title: "Orbit Tech Park",
    scope: "Elevation • Interactive Blueprint • 3D Prints",
    description:
      "Corporate campus with focus on wayfinding and lighting design, supported by sectional 3D prints for board approvals.",
  },
  {
    title: "Aarohan Villas",
    scope: "Landscape Visualization • Material Library",
    description:
      "Lifestyle-driven renders with custom pool, pergola, and landscape scenes, delivered with swappable mood lighting.",
  },
  {
    title: "Nova Horizons Township",
    scope: "Phased Development Blueprint • Drone Matchmove",
    description:
      "Future-forward township concept stitched with drone footage to show phase-wise evolution across 60 acres.",
  },
];

const processSteps = [
  {
    title: "Discover & Align",
    description:
      "Strategic workshop to map stakeholders, goals, and hero moments. Deliverable: moodboards + delivery roadmap.",
  },
  {
    title: "Blueprint & Asset Prep",
    description:
      "We convert DWG, RVT, and sketches into clean 3D base files ready for materials, lighting, and animation.",
  },
  {
    title: "Visual Engineering",
    description:
      "Look development, camera choreography, and interactivity integrated with milestone reviews every 5 business days.",
  },
  {
    title: "Launch & Amplify",
    description:
      "Final renders, VR builds, and print files delivered alongside rollout strategy guidance and performance analytics.",
  },
];

const faqs = [
  {
    question: "How fast can you deliver a marketing-ready walkthrough?",
    answer:
      "Our fast-track pod delivers a 90-second cinematic walkthrough in 14 working days, provided assets and approvals stay on schedule.",
  },
  {
    question: "Do you support revisions and material changes?",
    answer:
      "Yes. Every project includes two full revision cycles, and our asset library lets you toggle materials, lighting, and furnishings on demand.",
  },
  {
    question: "Can you integrate with our existing BIM workflow?",
    answer:
      "We work seamlessly with Revit, Rhino, SketchUp, and ArchiCAD. We also export BIM-synced deliverables for stakeholder review.",
  },
  {
    question: "What if we need onsite VR demos or 3D print logistics?",
    answer:
      "Our deployment team sets up VR kiosks, trains your staff, and coordinates shipping for 3D prints with insured logistics partners.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="#" className="text-xl font-semibold tracking-wide">
            Aayam Arts
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="transition hover:text-teal-300">
              Services
            </a>
            <a href="#portfolio" className="transition hover:text-teal-300">
              Portfolio
            </a>
            <a href="#process" className="transition hover:text-teal-300">
              Process
            </a>
            <a href="#prompt" className="transition hover:text-teal-300">
              Build Prompt
            </a>
            <a href="#contact" className="transition hover:text-teal-300">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-teal-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 md:pt-24">
        <section className="grid gap-10 md:grid-cols-[1.15fr,0.85fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-teal-300">
              Immersive Architecture Studio
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Sell visions, not floor plans. Aayam Arts crafts the 3D stories
              that close your next development deal.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200/80">
              From luxury societies to large-format townships, we translate raw
              CAD files into cinematic walkthroughs, interactive VR demos, and
              tactile 3D prints that help stakeholders experience the future
              today.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
              >
                Book a Demo Now
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-teal-300 hover:text-teal-200"
              >
                View Portfolio
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-200/75">
              <div>
                <p className="font-semibold text-white">150+ projects</p>
                <p>Complexes, societies, commercial parks</p>
              </div>
              <div>
                <p className="font-semibold text-white">12+ countries</p>
                <p>Trusted by global developers and architects</p>
              </div>
              <div>
                <p className="font-semibold text-white">48-hour kickoff</p>
                <p>Dedicated producer onboarding every engagement</p>
              </div>
            </div>
          </div>
          <div className="relative h-full rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-500/20 via-slate-900 to-slate-950 p-6 shadow-[0_30px_120px_-60px_rgba(45,218,181,0.7)]">
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200/90">
                Signature Outcomes
              </p>
              <ul className="space-y-3 text-sm text-slate-200/80">
                <li className="rounded-lg border border-white/5 bg-white/5 p-3">
                  ROI dashboards measuring walkthrough engagement &amp; VR demo
                  conversions.
                </li>
                <li className="rounded-lg border border-white/5 bg-white/5 p-3">
                  Sales-ready assets: teaser reels, cross-platform brochures,
                  kiosk-ready experiences.
                </li>
                <li className="rounded-lg border border-white/5 bg-white/5 p-3">
                  On-site deployment playbooks to activate experience centers in
                  under 72 hours.
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
              >
                Plan Your Launch ►
              </a>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="space-y-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Full-stack visualization for real estate leaders.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Book Your Requirements Call
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:border-teal-300/60 hover:bg-black/70"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-200/80">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-teal-200/90">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-teal-200"
                    >
                      <span className="text-lg leading-none">●</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-200 transition hover:text-teal-50"
                >
                  Book this service
                  <span aria-hidden>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 via-black/40 to-black/80 p-8 md:grid-cols-[0.9fr,1.1fr] md:p-12"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-200">
              Delivery Framework
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              A four-phase pipeline engineered for zero-surprise launches.
            </h2>
            <p className="text-slate-200/75">
              Every engagement is managed by a dedicated producer, QA artist,
              and visualization lead. Transparent milestones, collaborative
              reviews, and daily updates keep stakeholders informed.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-teal-400/60 px-6 py-3 text-sm font-semibold text-teal-200 transition hover:border-teal-200 hover:text-white"
            >
              Schedule a Sprint Planning Call
            </a>
          </div>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-black/60 p-6"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {String(index + 1).padStart(2, "0")} · {step.title}
                  </h3>
                  <span className="text-sm text-teal-200/80">
                    {index === 0 && "Day 0-2"}
                    {index === 1 && "Day 3-6"}
                    {index === 2 && "Day 7-14"}
                    {index === 3 && "Day 15+"}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-200/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="portfolio"
          className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Featured launches with measurable impact.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Upload Your Project Brief
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,234,212,0.2),transparent_45%)]" />
                <header className="relative">
                  <p className="text-xs uppercase tracking-[0.4em] text-teal-200/90">
                    {item.scope}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                </header>
                <p className="relative mt-4 text-sm text-slate-200/80">
                  {item.description}
                </p>
                <div className="relative mt-6 flex justify-between text-xs text-slate-400">
                  <span>HD renders • VR demonstrators • Prints</span>
                  <a
                    href="#contact"
                    className="font-semibold text-teal-200 transition hover:text-white"
                  >
                    Request full case →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="rounded-2xl border border-dashed border-teal-300/40 bg-teal-200/5 p-6 text-sm text-teal-100">
            Need to showcase your own assets? Attach floor plans, DWGs, or video
            clips in the demo form below and our producer will upload them to
            the interactive portfolio space within 24 hours.
          </p>
        </section>

        <section
          id="prompt"
          className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 via-slate-950 to-black/80 p-8 md:p-12"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-teal-200">
                Build Prompt
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Developer-ready WordPress prompt for AayamArts.com
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-teal-400/70 px-6 py-3 text-sm font-semibold text-teal-200 transition hover:border-teal-200 hover:text-white"
            >
              Launch This Brief
            </a>
          </div>
          <div className="space-y-4 text-sm leading-6 text-slate-100/90">
            <p>
              Copy and deliver the following prompt to your WordPress
              implementation partner or AI site builder to recreate this
              experience on AayamArts.com:
            </p>
            <pre className="max-h-[420px] overflow-y-auto rounded-2xl border border-white/10 bg-black/70 p-6 text-[13px] leading-relaxed text-slate-100">
{`You are an elite WordPress architect. Build a conversion-focused website for Aayam Arts, an architectural visualization studio delivering 3D walkthroughs, 3D blueprints, building elevations, VR demos, and precision 3D prints for complexes, apartments, societies, and commercial developments.

Core objectives:
1. Drive demo bookings with persistent CTAs (“Book a Demo Now”, “Upload Your Brief”, “Buy Service Pack”).
2. Showcase portfolio media (videos, renders, blueprints, VR clips) in a responsive gallery with category filters and lightbox playback.
3. Communicate the end-to-end delivery process, service packages, and differentiators with interactive sections and animations.

Structure guidelines:
- Sticky header with logo, navigation (Services, Portfolio, Process, Pricing, Resources, Contact) + CTA button.
- Hero section: impact headline, sub-copy, primary/secondary CTAs, quick stats (projects delivered, countries served, turnaround promise).
- Dynamic services grid featuring: Immersive 3D Walkthroughs, Architectural 3D Blueprints, Signature Building Elevations, Virtual Reality Demo Suites, High-Fidelity 3D Prints, Custom Visualization Pods. Each card must display key value props and a CTA.
- Process section detailing Discover & Align, Blueprint & Asset Prep, Visual Engineering, Launch & Amplify with timeline UI.
- Portfolio section supporting video embeds, before/after sliders, panoramic viewers, and downloadable PDFs. Include sample projects: Skyline Atria Residences, Orbit Tech Park, Aarohan Villas, Nova Horizons Township.
- Pricing or engagement models: Starter, Growth, Enterprise with feature comparison tables and CTA buttons.
- Testimonials carousel featuring developer, architect, and marketing head personas.
- CTA banners after every major section, always pointing to demo booking or bespoke requirement submission.
- Resources footer with FAQ accordion, contact form, business address (Pune, India), phone (+91 98765 43210), email (hello@aayamarts.com), and social links.

Design direction:
- Premium dark theme with teal gradients, glassmorphism cards, and smooth scroll-triggered animations.
- Use motion for hover/focus states, sticky CTA ribbons on mobile, and subtle particle background for hero.
- Ensure accessibility with proper contrast, ARIA labels, and keyboard navigation for galleries.
- Optimize for Core Web Vitals, lazy-load media, compress images, and ensure schema markup for LocalBusiness + Service.

Functional integrations:
- WordPress with Elementor Pro or Gutenberg blocks.
- Contact form hooked to CRM via webhook, calendar booking embed (Calendly), WhatsApp click-to-chat.
- Media library configured with provided videos, renders, blueprints, VR demo loops, 3D print photos (upload all supplied assets into portfolio categories).
- Analytics + tracking: Google Analytics 4, Meta Pixel, LinkedIn Insight Tag, conversion goals for demo form and CTA clicks.

Deliverables:
- Pixel-perfect responsive pages for desktop, tablet, mobile.
- Migration guide for existing hosting, SSL setup, and performance budget report.
- Documentation for updating portfolios, blogs, and CTA destinations.

Deploy the site on production-ready WordPress hosting and share administrator credentials upon completion.`}
            </pre>
          </div>
        </section>

        <section
          id="faqs"
          className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr,1.2fr] md:p-12"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-200">
              FAQs
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              What developers ask before we kick off.
            </h2>
            <p className="text-slate-200/80">
              Every partnership includes NDAs, asset confidentiality, and
              dedicated support for procurement teams that need compliance
              documentation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Share Your Questions
            </a>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-black/60 p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">
                  <div className="flex items-center justify-between gap-6">
                    <span>{faq.question}</span>
                    <span className="text-sm text-teal-200 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-sm text-slate-200/80">{faq.answer}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-200 transition hover:text-white"
                >
                  Book a consultation →
                </a>
              </details>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-10 rounded-3xl border border-teal-400/40 bg-gradient-to-br from-teal-500/10 via-slate-950 to-teal-600/10 p-8 md:grid-cols-[1.1fr,0.9fr] md:p-12"
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-200">
              Book A Demo
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Ready to immerse stakeholders in your next property launch?
            </h2>
            <p className="text-slate-200/80">
              Share your project scope and our project producer will respond
              within one business day with a tailored plan, cost sheet, and
              sample reel.
            </p>
            <div className="space-y-4 text-sm text-slate-200/75">
              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href="mailto:hello@aayamarts.com"
                  className="text-teal-200 transition hover:text-white"
                >
                  hello@aayamarts.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Call / WhatsApp</p>
                <a
                  href="tel:+919876543210"
                  className="text-teal-200 transition hover:text-white"
                >
                  +91 98765 43210
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Studio</p>
                <p>Pune, Maharashtra • Serving developers worldwide</p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200 transition hover:border-teal-200 hover:text-teal-100"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200 transition hover:border-teal-200 hover:text-teal-100"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200 transition hover:border-teal-200 hover:text-teal-100"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>
          <form
            className="grid gap-4 rounded-2xl border border-white/20 bg-black/50 p-6 text-sm text-slate-200"
            action="https://formsubmit.co/hello@aayamarts.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="https://agentic-3fb6c59f.vercel.app/thank-you" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="space-y-2" htmlFor="name">
              <span className="font-semibold text-white">Full Name</span>
              <input
                id="name"
                name="name"
                required
                placeholder="Priya Sharma"
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
            </label>
            <label className="space-y-2" htmlFor="email">
              <span className="font-semibold text-white">Work Email</span>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@company.com"
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
            </label>
            <label className="space-y-2" htmlFor="phone">
              <span className="font-semibold text-white">Phone / WhatsApp</span>
              <input
                id="phone"
                name="phone"
                required
                placeholder="+91 98xxx xxxxx"
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
            </label>
            <label className="space-y-2" htmlFor="service">
              <span className="font-semibold text-white">Service Interest</span>
              <select
                id="service"
                name="service"
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              >
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2" htmlFor="timeline">
              <span className="font-semibold text-white">Timeline</span>
              <select
                id="timeline"
                name="timeline"
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              >
                <option value="Immediate">Immediate kickoff</option>
                <option value="2weeks">Within 2 weeks</option>
                <option value="1month">1 month roadmap</option>
                <option value="tbd">Need consultation</option>
              </select>
            </label>
            <label className="space-y-2" htmlFor="requirements">
              <span className="font-semibold text-white">Project Requirements</span>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                placeholder="Tell us about your project, deliverables required, and any files we should reference."
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
            </label>
            <label className="space-y-2" htmlFor="files">
              <span className="font-semibold text-white">Attach Files / Links</span>
              <input
                id="files"
                name="files"
                type="url"
                placeholder="Share Google Drive, Dropbox, or WeTransfer URLs"
                className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Submit &amp; Book Demo
            </button>
            <p className="text-xs text-slate-400">
              By submitting this form you agree to our confidentiality policy.
              We sign NDAs before reviewing proprietary assets.
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Aayam Arts. Architectural visualization
            for visionary developers.
          </p>
          <div className="flex items-center gap-6">
            <a href="#prompt" className="transition hover:text-teal-200">
              WordPress Build Prompt
            </a>
            <a href="#services" className="transition hover:text-teal-200">
              Services
            </a>
            <a href="#contact" className="transition hover:text-teal-200">
              Book a Demo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
