import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  Cloud,
  Command as CommandIcon,
  Container,
  Github,
  GitBranch,
  Menu,
  Play,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import iconAsset from "../assets/devlaunch-icon.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      {
        title: "DevLaunch — Ship code, not YAML files. Deploy in 90s.",
      },
      {
        name: "description",
        content:
          "DevLaunch turns any GitHub repo into a live URL in 90 seconds. AI-powered CI/CD with self-healing builds. Deploy to AWS, DigitalOcean, Hetzner — any cloud.",
      },
      {
        name: "keywords",
        content:
          "deploy github, CI/CD automation, AI DevOps, self-healing builds, Docker deploy, auto deploy, Jenkins alternative, Vercel alternative, deploy to VPS",
      },
      { property: "og:title", content: "DevLaunch — Ship code, not YAML files." },
      {
        property: "og:description",
        content: "GitHub → live URL in 90 seconds. AI fixes broken builds before you notice.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: iconAsset.url, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DevLaunch",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
          description:
            "AI-powered DevOps automation that deploys any GitHub repo to a live URL in 90 seconds.",
        }),
      },
    ],
  }),
});

function Landing() {
  return (
    <div className="min-h-dvh bg-bg text-text-1 overflow-x-hidden antialiased">
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <LogoStrip />
        <Stats />
        <Features />
        <HowItWorks />
        <Demo />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ────────────────── SKIP LINK ────────────────── */
function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-text"
    >
      Skip to content
    </a>
  );
}

/* ────────────────── NAV ────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Product" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Customers" },
    { href: "#how", label: "How it works" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-[color:var(--border-default)]"
          : "bg-bg/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className={`container-page flex items-center justify-between transition-all duration-300 ${scrolled ? "h-12" : "h-14"}`}>
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-text-1">
          <Wordmark />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 text-sm text-text-2 hover:text-text-1 transition-colors group"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-px h-px bg-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <kbd className="hidden lg:inline-flex items-center gap-1 rounded-md border border-[color:var(--border-default)] bg-surface-2 px-2 py-1 text-[11px] font-mono text-text-3">
            <CommandIcon className="w-3 h-3" />K
          </kbd>
          <a
            href="#"
            className="px-3 py-2 text-sm text-text-2 hover:text-text-1 transition-colors"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex h-9 items-center gap-1.5 rounded-[10px] bg-brand px-4 text-sm font-bold text-brand-text hover:bg-brand-hover transition-colors"
          >
            Start free
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden grid place-items-center w-11 h-11 rounded-[10px] border border-[color:var(--border-default)] bg-surface-1 text-text-1"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[color:var(--border-default)] bg-bg/95 backdrop-blur-xl"
        >
          <div className="container-page py-6 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3 text-base text-text-1 border-b border-[color:var(--border-subtle)]"
              >
                {l.label}
                <ChevronRight className="w-4 h-4 text-text-3" />
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-brand text-base font-bold text-brand-text"
            >
              Start free <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-[10px] border border-[color:var(--border-default)] bg-surface-1 text-base font-semibold text-text-1"
            >
              Sign in
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src={iconAsset.url}
        alt="DevLaunch logo"
        width={28}
        height={28}
        decoding="async"
        fetchPriority="high"
        className="w-7 h-7 rounded-[8px] shadow-[0_2px_8px_-2px_rgba(94,234,212,0.4)]"
      />
      <span className="text-[15px] font-semibold tracking-tight">DevLaunch</span>
    </span>
  );
}

/* ────────────────── HERO ────────────────── */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 bg-mesh pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000,transparent_75%)]" />
      <div className="absolute inset-0 bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_50%_40%_at_50%_0%,#000,transparent_75%)]" />

      <div className="container-page relative grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-default)] bg-surface-1/80 backdrop-blur px-3 py-1 text-[12px] font-medium text-text-2"
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-brand animate-pulse-dot" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-brand" />
            </span>
            <span className="font-mono uppercase tracking-[0.12em] text-brand">New</span>
            <span className="text-text-2">Self-healing AI builds are live</span>
            <ArrowRight className="w-3 h-3 text-text-3" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
            className="mt-6 font-display font-semibold text-[40px] leading-[1.02] sm:text-[56px] lg:text-[64px] tracking-[-0.03em] text-balance"
          >
            Ship code,
            <br />
            not <span className="text-brand">YAML files.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.32, 0.72, 0, 1] }}
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-[17px] leading-[1.55] text-text-2 text-balance"
          >
            DevLaunch turns any GitHub repo into a live URL in 90 seconds.
            AI fixes broken builds before you notice — no Docker headaches, no 3 a.m. on-call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.32, 0.72, 0, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3"
          >
            <a
              href="#cta"
              className="group inline-flex h-11 items-center gap-2 rounded-[10px] bg-brand px-5 text-[15px] font-bold text-brand-text hover:bg-brand-hover transition-all active:scale-[0.98]"
            >
              <Github className="w-4 h-4" strokeWidth={2.5} />
              Deploy with GitHub
              <ArrowRight className="w-4 h-4 -mr-0.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
            </a>
            <a
              href="#how"
              className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-[color:var(--border-default)] bg-surface-1 px-5 text-[15px] font-semibold text-text-1 hover:bg-surface-2 transition-colors active:scale-[0.98]"
            >
              <Play className="w-4 h-4 text-brand" />
              Watch demo · 90s
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-[13px] text-text-3"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-warning text-warning" />
              ))}
              <span className="ml-1 text-text-2 font-medium">4.9</span>
            </div>
            <span className="w-px h-3 bg-[color:var(--border-default)]" />
            <span>Trusted by 2,000+ engineering teams</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="absolute -inset-8 bg-mesh opacity-60 blur-3xl pointer-events-none" />
          <div className="relative animate-float-slow">
            <TerminalCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────── TERMINAL ────────────────── */
function TerminalCard() {
  const lines = [
    { tag: "$", color: "text-brand", text: "devlaunch deploy github.com/acme/api", delay: 0 },
    { tag: "✓", color: "text-success", text: "Repo cloned · main @ a8f3d12", delay: 0.6 },
    { tag: "✓", color: "text-success", text: "Dockerfile generated by AI", delay: 1.0 },
    { tag: "✓", color: "text-success", text: "Image built · 142 MB · 38s", delay: 1.4 },
    { tag: "⚠", color: "text-warning", text: "Build retry 1/5 · npm peer dep auto-fixed", delay: 1.9 },
    { tag: "✓", color: "text-success", text: "Deployed to ec2-us-east-1", delay: 2.4 },
    { tag: "→", color: "text-brand", text: "Live at https://api-a8f3.devlaunch.app", delay: 2.9 },
  ];

  return (
    <div className="relative rounded-[20px] border border-[color:var(--border-default)] bg-surface-1/95 backdrop-blur-xl shadow-[var(--shadow-3)] overflow-hidden text-left">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[color:var(--border-subtle)] bg-surface-2/80">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-text-3">~ devlaunch</span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] text-text-3">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
          pipeline · live
        </span>
      </div>
      <div className="p-5 sm:p-6 font-mono text-[13px] leading-relaxed space-y-1.5 min-h-[280px]">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: l.delay, duration: 0.3, ease: "easeOut" }}
            className="flex gap-3"
          >
            <span className={`${l.color} w-4 shrink-0 font-semibold`}>{l.tag}</span>
            <span className="text-text-1/90">{l.text}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3.3 }}
          className="flex gap-3 pt-2"
        >
          <span className="text-brand">$</span>
          <span className="inline-block w-1.5 h-4 bg-brand animate-blink" />
        </motion.div>
      </div>
    </div>
  );
}

/* ────────────────── LOGOS ────────────────── */
function LogoStrip() {
  const stack = [
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "DigitalOcean",
    "Hetzner",
    "Cloudflare",
    "Nginx",
  ];
  const doubled = [...stack, ...stack];
  return (
    <section className="py-16 border-y border-[color:var(--border-subtle)] bg-surface-1/40">
      <div className="container-page">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-text-3 mb-8">
          Works with the stack you already use
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
          <div className="flex gap-12 animate-marquee w-max">
            {doubled.map((s, i) => (
              <span
                key={i}
                className="font-display text-[20px] sm:text-[22px] font-semibold tracking-tight text-text-3 hover:text-text-1 transition-colors whitespace-nowrap"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── STATS ────────────────── */
function Stats() {
  const stats = [
    { value: 90, suffix: "s", label: "Median deploy time" },
    { value: 99.98, suffix: "%", label: "Pipeline uptime", decimals: 2 },
    { value: 2.1, suffix: "M", label: "Deploys this month", decimals: 1 },
    { value: 0, suffix: "", label: "YAML files you write" },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--border-subtle)] rounded-[20px] overflow-hidden border border-[color:var(--border-subtle)]">
          {stats.map((s, i) => (
            <div key={i} className="bg-bg p-6 sm:p-8 text-center sm:text-left">
              <Counter
                to={s.value}
                suffix={s.suffix}
                decimals={s.decimals ?? 0}
                className="font-display text-[40px] sm:text-[48px] leading-none font-semibold tracking-[-0.03em] text-text-1"
              />
              <p className="mt-3 text-[13px] text-text-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({
  to,
  suffix = "",
  decimals = 0,
  className,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `${v.toFixed(decimals)}${suffix}`);
  const [text, setText] = useState(`0${suffix}`);

  useEffect(() => {
    const unsub = display.on("change", setText);
    return () => unsub();
  }, [display]);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 1.4,
        ease: [0.32, 0.72, 0, 1],
      });
      return controls.stop;
    }
  }, [inView, count, to]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}

/* ────────────────── FEATURES (BENTO) ────────────────── */
function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative cv-auto">
      <div className="container-page">
        <SectionHeader
          eyebrow="Platform"
          title="The DevOps team you wish you hired."
          sub="Everything you need to take code from commit to production — without a single line of YAML."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:auto-rows-fr">
          {/* Hero feature */}
          <BentoCard className="sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:min-h-[420px]" accent>
            <div className="flex flex-col h-full">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-medium text-brand">
                <Bot className="w-3 h-3" /> AI Engineer
              </div>
              <h3 className="mt-4 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em]">
                Self-healing builds. <span className="text-text-3">No more 3 a.m. pages.</span>
              </h3>
              <p className="mt-3 text-[15px] text-text-2 max-w-md leading-relaxed">
                When a build fails, our agent reads the log, patches the fix, and retries — up to
                5×. You see green checks; we handle the dependency hell.
              </p>

              <div className="mt-auto pt-8">
                <RetryDiagram />
              </div>
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-4">
            <FeatureIcon icon={Zap} />
            <h3 className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-text-1 leading-snug tracking-[-0.01em]">CI/CD in 60 seconds</h3>
            <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14px] text-text-2 leading-relaxed">
              GitHub Actions or Jenkins, fully wired. No Jenkinsfile, no IAM rabbit-hole.
            </p>
          </BentoCard>

          <BentoCard className="lg:col-span-4">
            <FeatureIcon icon={Cloud} />
            <h3 className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-text-1 leading-snug tracking-[-0.01em]">Any cloud, any VPS</h3>
            <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14px] text-text-2 leading-relaxed">
              AWS, DigitalOcean, Hetzner, or your own box. We provision, you ship.
            </p>
          </BentoCard>

          <BentoCard className="lg:col-span-4">
            <FeatureIcon icon={Container} />
            <h3 className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-text-1 leading-snug tracking-[-0.01em]">Docker, handled</h3>
            <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14px] text-text-2 leading-relaxed">
              Auto-generated Dockerfiles, multi-service Compose, registry push — invisible.
            </p>
          </BentoCard>

          <BentoCard className="lg:col-span-4">
            <FeatureIcon icon={GitBranch} />
            <h3 className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-text-1 leading-snug tracking-[-0.01em]">Push to deploy</h3>
            <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14px] text-text-2 leading-relaxed">
              Every commit on <span className="font-mono text-text-1">main</span> ships to prod.
              Previews on every PR.
            </p>
          </BentoCard>

          <BentoCard className="sm:col-span-2 lg:col-span-4">
            <FeatureIcon icon={Shield} />
            <h3 className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-text-1 leading-snug tracking-[-0.01em]">Secrets &amp; SSL</h3>
            <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14px] text-text-2 leading-relaxed">
              Encrypted env vars, auto-renewed TLS, custom domains in one click.
            </p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  children,
  className = "",
  accent = false,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className={`card-interactive group relative rounded-[20px] border border-[color:var(--border-subtle)] bg-surface-1 p-5 sm:p-6 lg:p-7 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${className}`}
    >
      {accent && (
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand opacity-[0.10] blur-2xl pointer-events-none group-hover:opacity-[0.16] transition-opacity duration-500" />
      )}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

function FeatureIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="inline-grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] bg-surface-2 border border-[color:var(--border-default)] text-brand">
      <Icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
    </div>
  );
}

function RetryDiagram() {
  const steps = [
    { label: "build", state: "fail" },
    { label: "ai fix", state: "work" },
    { label: "retry", state: "work" },
    { label: "deploy", state: "ok" },
  ];
  return (
    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2 sm:gap-3">
          <div
            className={`flex items-center gap-2 rounded-[10px] border px-3 py-2 font-mono text-[12px] ${
              s.state === "ok"
                ? "bg-success/10 border-success/30 text-success"
                : s.state === "fail"
                ? "bg-danger/10 border-danger/30 text-danger"
                : "bg-warning/10 border-warning/30 text-warning"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {s.label}
          </div>
          {i < steps.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-text-3" />}
        </div>
      ))}
    </div>
  );
}

/* ────────────────── HOW IT WORKS ────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: Github,
      title: "Connect GitHub",
      desc: "One OAuth click. We see your repos; nothing else.",
    },
    {
      n: "02",
      icon: Sparkles,
      title: "We provision",
      desc: "Pipeline, Docker, secrets, SSL, server — set up in 60 seconds.",
    },
    {
      n: "03",
      icon: Rocket,
      title: "Push to deploy",
      desc: "Every commit ships. Forever. Previews on every PR.",
    },
  ];
  return (
    <section id="how" className="py-24 sm:py-32 border-t border-[color:var(--border-subtle)] cv-auto">
      <div className="container-page">
        <SectionHeader
          eyebrow="How it works"
          title="From git push to live URL in three steps."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[color:var(--border-default)] to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className="relative text-center md:text-left"
            >
              <div className="inline-flex flex-col items-center md:items-start">
                <div className="grid place-items-center w-12 h-12 rounded-full bg-surface-1 border border-[color:var(--border-default)] text-brand relative z-10">
                  <s.icon className="w-5 h-5" />
                </div>
                <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-text-3">
                  Step {s.n}
                </p>
              </div>
              <h3 className="mt-3 text-[20px] font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[15px] text-text-2 leading-relaxed max-w-xs mx-auto md:mx-0">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── INTERACTIVE DEMO ────────────────── */
function Demo() {
  const [url, setUrl] = useState("");
  const [deploying, setDeploying] = useState(false);
  const [done, setDone] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setDeploying(true);
    setDone(false);
    if (typeof window !== "undefined" && (window as any).trackConversion) {
      (window as any).trackConversion("demo_deploy_started", { repo: url });
    }
    setTimeout(() => {
      setDeploying(false);
      setDone(true);
    }, 2400);
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden cv-auto">
      <div className="container-page">
        <div className="surface-card relative p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand opacity-[0.10] blur-2xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand">
                Try it now
              </span>
              <h2 className="mt-3 font-display text-[32px] sm:text-[40px] leading-[1.05] font-semibold tracking-[-0.02em] text-balance">
                Paste a GitHub URL.
                <br />
                <span className="text-text-3">Watch it deploy.</span>
              </h2>
              <p className="mt-4 text-[15px] text-text-2 max-w-md leading-relaxed">
                A 90-second taste of what happens every time you push. No signup, no card.
              </p>

              <form onSubmit={handle} className="mt-8 flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Github className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-3 pointer-events-none" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="github.com/yourname/yourrepo"
                    aria-label="GitHub repository URL"
                    className="w-full h-11 pl-10 pr-3 rounded-[10px] bg-surface-2 border border-[color:var(--border-default)] text-[14px] font-mono text-text-1 placeholder:text-text-3 focus:border-brand focus:bg-surface-1 transition-colors outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={deploying}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-brand px-5 text-[14px] font-bold text-brand-text hover:bg-brand-hover transition-colors disabled:opacity-60 active:scale-[0.98]"
                >
                  {deploying ? "Deploying…" : "Deploy"}
                  {!deploying && <ArrowRight className="w-4 h-4" strokeWidth={2.5} />}
                </button>
              </form>

              {done && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 inline-flex items-center gap-2 rounded-[10px] bg-success/10 border border-success/30 px-3 py-2 text-[13px] text-success"
                >
                  <Check className="w-4 h-4" />
                  Deployed in 1.8s ·{" "}
                  <span className="font-mono">https://{(url.split("/").pop() || "demo").replace(/[^a-z0-9-]/gi, "")}.devlaunch.app</span>
                </motion.div>
              )}
            </div>

            <div className="relative">
              <div className="rounded-[16px] border border-[color:var(--border-default)] bg-bg/80 overflow-hidden font-mono text-[12.5px]">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[color:var(--border-subtle)] bg-surface-2/60">
                  <Terminal className="w-3.5 h-3.5 text-text-3" />
                  <span className="text-[11px] text-text-3">live preview</span>
                </div>
                <div className="p-4 space-y-1 min-h-[200px]">
                  {deploying ? (
                    <DemoStream />
                  ) : done ? (
                    <>
                      <p className="text-success">✓ Cloned · 0.4s</p>
                      <p className="text-success">✓ Built · 1.1s</p>
                      <p className="text-success">✓ Deployed · 0.3s</p>
                      <p className="text-brand mt-2">→ Live URL ready</p>
                    </>
                  ) : (
                    <p className="text-text-3">Paste a repo URL to start →</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoStream() {
  const lines = ["⏳ Cloning repo…", "⏳ Generating Dockerfile…", "⏳ Building image…", "⏳ Pushing…"];
  return (
    <>
      {lines.map((l, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.5 }}
          className="text-warning"
        >
          {l}
        </motion.p>
      ))}
    </>
  );
}

/* ────────────────── TESTIMONIALS ────────────────── */
function Testimonials() {
  const items = [
    {
      quote:
        "We replaced our 4-person platform team with DevLaunch. Ship velocity went up 12×, AWS bill dropped 40%.",
      name: "Sarah Chen",
      role: "Staff Engineer · Linear",
      initials: "SC",
    },
    {
      quote:
        "The self-healing builds alone saved us 200 engineering hours last quarter. Feels like cheating.",
      name: "Marcus Okafor",
      role: "CTO · Resend",
      initials: "MO",
    },
    {
      quote:
        "Pushed a side project Friday night. Live before my coffee finished. This is what deploying should feel like.",
      name: "Priya Patel",
      role: "Founder · Notewise",
      initials: "PP",
    },
  ];
  return (
    <section id="testimonials" className="py-24 sm:py-32 border-t border-[color:var(--border-subtle)] cv-auto">
      <div className="container-page">
        <SectionHeader eyebrow="Loved by builders" title="What teams are saying." />
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className="surface-card p-7 flex flex-col"
            >
              <div className="flex items-center gap-1 text-warning">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-[16px] leading-[1.55] text-text-1 flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-[color:var(--border-subtle)]">
                <div className="grid place-items-center w-9 h-9 rounded-full bg-brand text-brand-text font-semibold text-[12px]">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-text-1">{t.name}</p>
                  <p className="text-[12px] text-text-2">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── PRICING ────────────────── */
function Pricing() {
  const tiers = [
    {
      name: "Hobby",
      price: "$0",
      period: "forever",
      desc: "For side projects and students.",
      features: ["3 active deploys", "GitHub integration", "Auto SSL", "Community support"],
      cta: "Start free",
      featured: false,
    },
    {
      name: "Pro",
      price: "$20",
      period: "per month",
      desc: "For serious developers.",
      features: [
        "Unlimited deploys",
        "AI self-healing builds",
        "All cloud providers",
        "Preview environments",
        "Email support",
      ],
      cta: "Start 14-day trial",
      featured: true,
    },
    {
      name: "Team",
      price: "$99",
      period: "per month",
      desc: "For teams shipping fast.",
      features: [
        "Everything in Pro",
        "SSO &amp; audit logs",
        "Unlimited seats",
        "99.99% SLA",
        "Priority support",
      ],
      cta: "Contact sales",
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="py-24 sm:py-32 border-t border-[color:var(--border-subtle)] cv-auto">
      <div className="container-page">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple plans. No seat tax."
          sub="Start free, upgrade when you ship to production. Cancel anytime."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className={`relative rounded-[20px] p-8 flex flex-col ${
                t.featured
                  ? "bg-surface-1 border border-brand shadow-[0_0_48px_-12px_rgba(94,234,212,0.4)]"
                  : "surface-card"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-brand-text font-mono uppercase tracking-[0.1em]">
                  Most popular
                </span>
              )}
              <div>
                <h3 className="text-[15px] font-semibold text-text-1">{t.name}</h3>
                <p className="mt-1 text-[13px] text-text-2">{t.desc}</p>
              </div>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-[44px] leading-none font-semibold tracking-[-0.03em] text-text-1">
                  {t.price}
                </span>
                <span className="text-[13px] text-text-2">/ {t.period}</span>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-text-1">
                    <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-[10px] text-[14px] font-bold transition-colors ${
                  t.featured
                    ? "bg-brand text-brand-text hover:bg-brand-hover"
                    : "bg-surface-2 text-text-1 hover:bg-surface-3 border border-[color:var(--border-default)]"
                }`}
              >
                {t.cta}
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── FINAL CTA ────────────────── */
function FinalCTA() {
  return (
    <section id="cta" className="py-24 sm:py-32 relative overflow-hidden cv-auto">
      <div className="container-page">
        <div className="relative rounded-[28px] overflow-hidden border border-[color:var(--border-default)] bg-surface-1 p-10 sm:p-16 lg:p-20 text-center">
          <div className="absolute inset-0 bg-mesh opacity-100 pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
          <div className="relative">
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand">
              Ready when you are
            </span>
            <h2 className="mt-4 font-display text-[36px] sm:text-[52px] leading-[1.02] font-semibold tracking-[-0.03em] text-balance">
              Your next deploy
              <br />
              takes 90 seconds.
            </h2>
            <p className="mt-5 max-w-md mx-auto text-[16px] text-text-2 leading-relaxed">
              Free forever for personal projects. Connect a repo, ship a URL — that's it.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-[10px] bg-brand px-6 text-[15px] font-bold text-brand-text hover:bg-brand-hover transition-all active:scale-[0.98]"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).trackConversion) {
                    (window as any).trackConversion("primary_cta_click", { location: "final_cta" });
                  }
                }}
              >
                <Github className="w-4 h-4" strokeWidth={2.5} />
                Deploy with GitHub
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center gap-2 rounded-[10px] border border-[color:var(--border-default)] bg-surface-2 px-6 text-[15px] font-semibold text-text-1 hover:bg-surface-3 transition-colors active:scale-[0.98]"
              >
                Read the docs
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────── FOOTER ────────────────── */
function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API reference", "Guides", "Blog", "Community"],
    },
    {
      title: "Company",
      links: ["About", "Customers", "Careers", "Contact", "Press kit"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "DPA", "Cookies"],
    },
  ];

  return (
    <footer className="border-t border-[color:var(--border-subtle)] bg-surface-1/30">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="col-span-2 lg:col-span-2">
            <Wordmark />
            <p className="mt-4 text-[14px] text-text-2 leading-relaxed max-w-xs">
              Ship code, not YAML files. AI-powered DevOps for teams that move fast.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-[12px] text-text-3">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
              All systems operational
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-3">
                {c.title}
              </p>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] text-text-2 hover:text-text-1 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[color:var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-text-3">
            © {new Date().getFullYear()} DevLaunch, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-text-3">
            <a href="#" aria-label="GitHub" className="hover:text-text-1 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-text-1 transition-colors text-[13px]">
              𝕏
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────── SECTION HEADER ────────────────── */
function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.32, 0.72, 0, 1] }}
        className="mt-3 font-display text-[32px] sm:text-[44px] leading-[1.05] font-semibold tracking-[-0.025em] text-balance"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-4 text-[16px] text-text-2 leading-relaxed text-balance"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
