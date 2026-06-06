import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Check, Play, X, Gift, BadgeCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EnrollmentPopup } from "@/components/EnrollmentPopup";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const PRICE = 400;

const VIDEOS = [
  { title: "Fashion Ad", tag: "Fashion Ad" },
  { title: "UGC", tag: "UGC" },
  { title: "Product Ad", tag: "Product Ad" },
  { title: "Fashion Ad", tag: "Fashion Ad" },
];

const INCLUDES = [
  {
    title: "Fashion Ad Creation",
    desc: "Cinematic, editorial-grade fashion campaigns. Models, wardrobe, lighting — all generated.",
  },
  {
    title: "UGC Content Creation",
    desc: "Native-feeling unboxings, try-ons, and reactions that look filmed on a phone, not by an AI.",
  },
  {
    title: "Product Ad Creation",
    desc: "Hero shots, 360° spins, and lifestyle inserts engineered to convert on paid social.",
  },
];

const TOOLS = [
  { name: "Google Veo 3", desc: "Cinematic AI video generation" },
  { name: "Google Gemini", desc: "Scripting, ideation, prompting" },
  { name: "ChatGPT", desc: "Hooks, captions, ad copy" },
  { name: "CapCut", desc: "Editing, captions, finishing" },
];

const COMPARISON = [
  { feature: "Cost per ad", ai: "Free to get started", physical: "50,000 – 5,00,000+" },
  { feature: "Turnaround", ai: "A few hours", physical: "2 – 6 weeks" },
  { feature: "Models & crew", ai: "Not needed", physical: "10 – 30 people" },
  { feature: "Studio / location", ai: "Your laptop", physical: "Rented & scheduled" },
  { feature: "Revisions", ai: "Unlimited, instant", physical: "Costly reshoots" },
  { feature: "Variations", ai: "Infinite", physical: "1 – 2 cuts" },
];

const TESTIMONIALS = [
  {
    name: "Aarav Sharma",
    city: "Mumbai",
    quote:
      "Bhai, the course is amazing. Sab kuch step-by-step samjhaya hai. I made my first AI fashion ad in 2 days.",
  },
  {
    name: "Priya Iyer",
    city: "Bengaluru",
    quote:
      "Super understandable. My D2C brand saved lakhs on photoshoots. Veo 3 + the prompts in the kit = magic.",
  },
  {
    name: "Rohan Patel",
    city: "Ahmedabad",
    quote:
      "Honestly worth way more than 400. The prompt guide alone is gold. Clients think I hired a full crew.",
  },
  {
    name: "Sneha Reddy",
    city: "Hyderabad",
    quote:
      "I'm not technical at all and I still got it. Ads for my boutique look like Zara campaigns now.",
  },
  {
    name: "Karan Mehta",
    city: "Delhi",
    quote:
      "Started freelancing within a week. Charging 15k per ad. Course paid for itself 30x in the first month.",
  },
  {
    name: "Ananya Nair",
    city: "Kochi",
    quote:
      "Best 400 I've spent this year. No fluff, only working workflows. UGC module is a banger.",
  },
];

const FAQS = [
  {
    q: "Is this a live class or recorded?",
    a: "It's a fully recorded session you can access for a lifetime. Watch at your own pace, rewatch anytime, on any device.",
  },
  {
    q: "Are there any upsells after I buy?",
    a: "Zero upsells. You pay once, you get everything — the full kit, the prompt guide, and all future updates.",
  },
  {
    q: "Do the AI tools cost extra?",
    a: "All tools we use — Google Veo 3, Google Gemini, ChatGPT, and CapCut — are free to get started with. You can complete the course and ship real ads on the free tiers; paid plans are optional if you want higher limits later.",
  },
  {
    q: "Will I really be able to make professional ads?",
    a: "Yes — we 100% guarantee that by the end of the course you'll be making professional, client-ready ads. The workflows are battle-tested.",
  },
  {
    q: "Is the price permanent?",
    a: "Yes. You pay once at the listed price and get lifetime access — no hidden fees or price increases later.",
  },
  {
    q: "Do I get the prompt guide for free?",
    a: "Yes. The Prompt Guide worth 399 is included absolutely free with your purchase.",
  },
  {
    q: "Do I need prior experience?",
    a: "None. If you can use a phone and a laptop, you can follow this course.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <EnrollmentPopup />
      {/* Top price bar */}
      <div className="bg-lime text-lime-foreground border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 py-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em]">
          <span className="text-base sm:text-lg">{PRICE}</span>
          <span className="opacity-60">•</span>
          <span>No upsells · Lifetime access</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-card border-b border-border">
        <div className="overflow-hidden py-2.5">
          <div className="marquee text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 pr-12">
                {[
                  "★ No cameras",
                  "★ No models",
                  "★ No studio rental",
                  "★ Free to get started",
                  "★ Lifetime access",
                  "★ Zero upsells",
                ].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="px-6 sm:px-10 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <span className="w-2 h-2 rounded-full bg-lime" />
          AI Fashion Ad Kit
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#examples" className="hover:text-foreground">Examples</a>
          <a href="#compare" className="hover:text-foreground">AI vs Physical</a>
          <a href="#testimonials" className="hover:text-foreground">Reviews</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
        >
          Get {PRICE} <ArrowRight className="size-4" />
        </a>
      </header>

      {/* Hero */}
      <section className="relative px-6 sm:px-10 pt-12 sm:pt-20 pb-20 text-center">
        <div
          className="absolute inset-0 -z-10 opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, oklch(0.92 0.21 130 / 0.18), transparent 70%)",
          }}
        />
        <div className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-lime">
          <Sparkles className="size-3.5" />
          The AI Fashion Ad Kit
        </div>

        <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-[88px] leading-[1.02] tracking-tight max-w-5xl mx-auto">
          Make TV-commercial fashion ads —{" "}
          <em className="text-lime not-italic font-display italic font-normal">without a camera</em>.
        </h1>

        <p className="mt-7 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
          A fully recorded course + creator kit for generating cinematic fashion ads, native UGC,
          and scroll-stopping product spots — using AI tools that are free to get started.
          Lifetime access. No upsells.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-7 py-4 text-base font-semibold glow-lime hover:opacity-90 transition"
          >
            Get it for {PRICE} <ArrowRight className="size-4" />
          </a>
          <a
            href="#examples"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-medium hover:bg-card transition"
          >
            <Play className="size-4" /> Watch examples
          </a>
        </div>

        <p className="mt-5 text-xs text-muted-foreground italic">
          One-time payment · Lifetime recorded access · No upsells, ever
        </p>
      </section>

      {/* Free Bonus banner */}
      <section className="px-6 sm:px-10 -mt-6 pb-16">
        <div className="max-w-4xl mx-auto rounded-2xl border border-lime/50 bg-lime/10 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="size-12 shrink-0 rounded-full bg-lime text-lime-foreground flex items-center justify-center">
            <Gift className="size-6" />
          </div>
          <div className="flex-1">
            <div className="text-[11px] uppercase tracking-[0.2em] text-lime font-semibold">
              Free bonus included
            </div>
            <div className="mt-1.5 font-display text-2xl sm:text-3xl tracking-tight">
              Prompt Guide{" "}
              <span className="text-muted-foreground line-through text-xl">worth 399</span>{" "}
              <span className="text-lime">absolutely FREE</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              200+ copy-paste prompts for Veo 3, Gemini, and ChatGPT — bundled with your kit.
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="px-6 sm:px-10 pt-4 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-6xl tracking-tight">
            Everything below is <em className="text-lime italic font-normal">AI.</em>
          </h2>
          <p className="mt-3 text-muted-foreground font-display italic text-lg">
            And the course teaches you exactly how to make it.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {VIDEOS.map((v, i) => (
            <VideoCard key={i} title={v.title} tag={v.tag} index={i} />
          ))}
        </div>
      </section>

      {/* What's included */}
      <section id="includes" className="px-6 sm:px-10 py-24 border-t border-border bg-card/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-lime">What's inside</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight max-w-2xl">
                Three production lines.{" "}
                <em className="italic text-lime font-normal">One kit.</em>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Battle-tested prompts, references, and full workflows for the three formats
              that actually move the needle on social.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {INCLUDES.map((item, i) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-border bg-background p-7 hover:border-lime/60 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl text-lime/80">0{i + 1}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Module
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {["Prompt library", "Reference pack", "Workflow walkthrough"].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-foreground/80">
                      <Check className="size-4 text-lime" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools (free to get started) */}
      <section className="px-6 sm:px-10 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-lime">The toolkit</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight">
            Built with tools that are{" "}
            <em className="italic text-lime font-normal">free to get started.</em>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Every tool used in the course has a free tier that's enough to follow along and ship real
            ads. Upgrade later only if you want higher limits — it's never required.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {TOOLS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card/60 p-6 text-center hover:border-lime/60 transition"
            >
              <div className="inline-flex items-center gap-1.5 rounded-full bg-lime/10 text-lime text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1">
                <Check className="size-3" /> Free to start
              </div>
              <div className="mt-4 font-display text-xl tracking-tight">{t.name}</div>
              <div className="mt-1.5 text-xs text-muted-foreground">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI vs Physical comparison */}
      <section id="compare" className="px-6 sm:px-10 py-24 border-t border-border bg-card/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-lime">AI ads vs Physical ads</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight">
              Why burn lakhs when AI does it{" "}
              <em className="italic text-lime font-normal">in hours?</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl border border-border overflow-hidden">
            <div className="bg-background p-5 font-semibold text-sm uppercase tracking-[0.15em] text-muted-foreground border-b md:border-b-0 md:border-r border-border">
              &nbsp;
            </div>
            <div className="bg-lime/10 p-5 font-display text-xl text-lime border-b md:border-b-0 md:border-r border-border">
              AI Ads (this kit)
            </div>
            <div className="bg-background p-5 font-display text-xl text-muted-foreground border-b md:border-b-0 border-border">
              Physical Ads
            </div>

            {COMPARISON.map((row, i) => (
              <div key={row.feature} className="contents">
                <div className={`p-5 text-sm font-semibold border-t border-border md:border-r ${i % 2 ? "bg-background" : "bg-card/60"}`}>
                  {row.feature}
                </div>
                <div className={`p-5 text-sm border-t border-border md:border-r flex items-start gap-2 ${i % 2 ? "bg-background" : "bg-card/60"}`}>
                  <Check className="size-4 text-lime mt-0.5 shrink-0" />
                  <span>{row.ai}</span>
                </div>
                <div className={`p-5 text-sm border-t border-border flex items-start gap-2 text-muted-foreground ${i % 2 ? "bg-background" : "bg-card/60"}`}>
                  <X className="size-4 text-destructive mt-0.5 shrink-0" />
                  <span>{row.physical}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100% guarantee */}
      <section className="px-6 sm:px-10 py-24 border-t border-border">
        <div className="max-w-4xl mx-auto rounded-3xl border border-lime/50 bg-card p-10 sm:p-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-lime/15 text-lime px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-semibold">
            <BadgeCheck className="size-4" /> 100% Guarantee
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl tracking-tight">
            By the end of this course, you'll be a{" "}
            <em className="italic text-lime font-normal">professional ad maker.</em>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            We guarantee it — 100%. Follow the workflows, use the prompt library, and you'll be
            shipping client-ready fashion, UGC, and product ads with total confidence.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 sm:px-10 py-24 border-t border-border bg-card/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-lime">Loved across India</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight">
              What our students are{" "}
              <em className="italic text-lime font-normal">saying.</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-background p-6 hover:border-lime/60 transition"
              >
                <div className="flex gap-0.5 text-lime text-sm">★★★★★</div>
                <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-lime/20 text-lime flex items-center justify-center font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.city}, India</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / pricing */}
      <section id="pricing" className="px-6 sm:px-10 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto rounded-3xl border border-lime/40 bg-card p-10 sm:p-14 text-center glow-lime">
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
            Ship your first AI ad{" "}
            <em className="italic text-lime font-normal">tonight.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Recorded session · Lifetime access · No upsells · Free Prompt Guide (399) included
          </p>

          <div className="mt-8">
            <span className="font-display text-6xl">{PRICE}</span>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-sm max-w-md mx-auto">
            {[
              "Lifetime recorded access",
              "All tools are free to get started",
              "Prompt Guide worth 399 free",
              "Zero upsells, ever",
              "100% professional guarantee",
              "Works for brands & creators",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="size-4 text-lime mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-8 py-4 text-base font-semibold hover:opacity-90 transition"
          >
            Get the Kit for {PRICE} <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 sm:px-10 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-lime">FAQ</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight">
              Quick <em className="italic text-lime font-normal">questions.</em>
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-12 w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg cursor-pointer hover:text-lime">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="px-6 sm:px-10 py-10 border-t border-border text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} AI Fashion Ad Kit. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function VideoCard({ title, tag, index }: { title: string; tag: string; index: number }) {
  const aspect =
    index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-[3/4]" : "aspect-[9/16]";
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${aspect}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            index % 2 === 0
              ? "linear-gradient(135deg, oklch(0.25 0.02 240), oklch(0.18 0.005 240))"
              : "linear-gradient(135deg, oklch(0.22 0.03 130 / 0.4), oklch(0.18 0.005 240))",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="rounded-full bg-lime text-lime-foreground text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1">
          {tag}
        </span>
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <div className="font-display text-xl text-white">{title}</div>
          <div className="text-xs text-white/60 mt-1">100% AI generated</div>
        </div>
        <button
          aria-label="Play"
          className="size-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-lime group-hover:text-lime-foreground transition"
        >
          <Play className="size-4" />
        </button>
      </div>
    </div>
  );
}
