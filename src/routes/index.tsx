import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Zap,
  Bot,
  Cloud,
  Rocket,
  Container,
  MessageSquare,
  Check,
  Github,
  Mail,
  Phone,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  GitBranch,
  Terminal,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      {
        title:
          "DevLauch — Deploy your GitHub repo in 2 minutes | AI DevOps & CI/CD",
      },
      {
        name: "description",
        content:
          "DevLauch automates CI/CD, Docker, and cloud deploys for students and teams. Push to GitHub and get a live URL in under 2 minutes — with AI that fixes failed builds.",
      },
      {
        name: "keywords",
        content:
          "DevOps automation, CI/CD pipeline, auto deploy, GitHub deploy, Docker deploy, Jenkins setup, AI build fix, AWS deployment, deploy to VPS, student deployment",
      },
      { property: "og:title", content: "DevLauch — You Write the Code. We Deploy It." },
      {
        property: "og:description",
        content:
          "GitHub → live URL in 2 minutes. AI-powered CI/CD, auto-deploy to any VPS, and self-healing builds.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "DevLauch" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DevLauch — You Write the Code. We Deploy It." },
      {
        name: "twitter:description",
        content: "GitHub → live URL in 2 minutes. AI-powered CI/CD and auto-deploy.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DevLauch",
          url: "https://devlauch.com",
          description:
            "DevOps automation platform: CI/CD pipelines, Docker, and cloud deploys with AI self-healing builds.",
          contactPoint: {
            "@type": "ContactPoint",
            email: "support@devlauch.com",
            telephone: "+91-95356-48896",
            contactType: "customer support",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DevLauch",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "AI-powered DevOps automation that deploys any GitHub repo to a live URL in under two minutes.",
        }),
      },
    ],
  }),
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Logos />
      <Problem />
      <Services />
      <Pipeline />
      <Students />
      <HowItWorks />
      <Compare />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#pipeline", label: "Platform" },
    { href: "#students", label: "For Students" },
    { href: "#how", label: "How it works" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
            <Rocket className="w-4 h-4" />
          </span>
          DevLauch<span className="text-brand">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.devlauch.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground text-sm font-semibold shadow-[var(--shadow-glow)] hover:opacity-95 transition"
          >
            Get in touch <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground text-sm font-semibold"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand" />
          AI-powered DevOps automation
          <span className="hidden sm:inline text-border">·</span>
          <span className="hidden sm:inline">Now with self-healing builds</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-display font-bold text-[42px] leading-[1.05] sm:text-6xl lg:text-7xl tracking-tight"
        >
          You write the code. <br />
          <span className="text-gradient">We deploy it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground"
        >
          DevLauch sets up pipelines, containers, and servers for you — so your GitHub repo
          goes from commit to live URL in under two minutes. No YAML, no Docker headaches,
          no 3 a.m. build failures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="https://app.devlauch.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover:opacity-95 transition"
          >
            Try the platform
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface/60 backdrop-blur text-foreground font-semibold hover:bg-surface transition"
          >
            <MessageSquare className="w-4 h-4" /> Talk to us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-left"
        >
          {[
            { num: "2 min", label: "GitHub → live URL" },
            { num: "5×", label: "AI self-healing retries" },
            { num: "Any VPS", label: "AWS · DO · Hetzner" },
            { num: "24/7", label: "Auto-deploy on push" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                {s.num}
              </div>
              <div className="text-xs text-muted-foreground max-w-[120px] leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Hero terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-6 bg-[image:var(--gradient-brand)] opacity-25 blur-3xl rounded-3xl animate-pulse-glow" />
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}

function TerminalCard() {
  const lines = [
    { tag: "$", color: "text-brand", text: "devlauch deploy github.com/you/portfolio" },
    { tag: "✓", color: "text-emerald-400", text: "Repo cloned · main @ a8f3d12" },
    { tag: "✓", color: "text-emerald-400", text: "Dockerfile generated by AI" },
    { tag: "✓", color: "text-emerald-400", text: "Image built · 142 MB" },
    { tag: "⚠", color: "text-amber-400", text: "Build retry 1/5 · npm peer dep fixed" },
    { tag: "✓", color: "text-emerald-400", text: "Deployed to ec2-us-east-1" },
    { tag: "→", color: "text-brand", text: "Live at https://portfolio-a8f3.devlauch.app" },
  ];
  return (
    <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-xl shadow-[var(--shadow-card)] overflow-hidden text-left">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2/60">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">~ devlauch</span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          live pipeline
        </span>
      </div>
      <div className="p-5 sm:p-7 font-mono text-[13px] sm:text-sm space-y-1.5">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
            className="flex gap-3"
          >
            <span className={`${l.color} w-4 shrink-0`}>{l.tag}</span>
            <span className="text-foreground/90">{l.text}</span>
          </motion.div>
        ))}
        <div className="flex gap-3 pt-2">
          <span className="text-brand">$</span>
          <span className="w-2 h-4 bg-brand animate-blink" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- LOGOS ---------------- */
function Logos() {
  const stack = ["GitHub", "Docker", "Jenkins", "AWS", "DigitalOcean", "Hetzner", "Nginx", "Cloudflare"];
  return (
    <section className="py-12 border-y border-border bg-surface/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
          Works with the stack you already use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground/80">
          {stack.map((s) => (
            <span key={s} className="font-display font-semibold tracking-tight text-lg sm:text-xl hover:text-foreground transition">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const items = [
    { e: "😤", t: '"I built the project but have no idea how to deploy it."' },
    { e: "🔁", t: '"My Docker build keeps failing. I\'ve tried 10 times."' },
    { e: "💸", t: '"We can\'t afford a full-time DevOps engineer."' },
    { e: "📋", t: '"Jenkins setup took 3 days and still doesn\'t work."' },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow="The pain" title="Sound familiar?" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="p-6 rounded-2xl border border-border bg-surface/60 backdrop-blur hover:border-brand/40 transition"
            >
              <div className="text-3xl mb-3">{i.e}</div>
              <p className="text-sm text-foreground/85 leading-relaxed">{i.t}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-lg text-muted-foreground">
          We fix all of this — in a <span className="text-gradient font-semibold">single session</span>.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    {
      icon: Zap,
      title: "CI/CD Pipeline Setup",
      desc: "Jenkins or GitHub Actions — full pipeline, Jenkinsfile, Dockerfile, wired to your repo.",
    },
    {
      icon: Bot,
      title: "AI Self-Healing Builds",
      desc: "When builds fail, our agent reads the log, patches the fix, and retries — up to 5×.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      desc: "We provision AWS EC2, RDS, and S3 with security groups, Docker, and SSH preconfigured.",
    },
    {
      icon: Rocket,
      title: "Auto-Deploy Anywhere",
      desc: "Every successful build ships via SSH to AWS, DigitalOcean, Hetzner, or your own VPS.",
    },
    {
      icon: Container,
      title: "Docker & Containers",
      desc: "Dockerfiles, registries (Docker Hub, ECR, GCR), and multi-service Compose — handled.",
    },
    {
      icon: MessageSquare,
      title: "DevOps Consultation",
      desc: "Not sure what you need? We assess your stack, find the gaps, and hand you a clear plan.",
    },
  ];
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="DevOps services that actually ship"
          sub="We consult, set up, and hand you a working system — not just slide decks and advice."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (idx % 3) * 0.08, duration: 0.5 }}
              className="group relative p-7 rounded-2xl border border-border bg-surface/60 backdrop-blur hover:bg-surface transition overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[image:var(--gradient-brand)] opacity-0 group-hover:opacity-20 blur-3xl transition" />
              <div className="relative">
                <div className="inline-grid place-items-center w-11 h-11 rounded-xl bg-brand/15 text-brand border border-brand/25">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PIPELINE VIS ---------------- */
function Pipeline() {
  const steps = [
    { icon: GitBranch, label: "git push", status: "PASS" },
    { icon: Terminal, label: "checkout", status: "PASS" },
    { icon: Container, label: "docker build", status: "PASS" },
    { icon: ShieldCheck, label: "trivy scan", status: "PASS" },
    { icon: Rocket, label: "deploy to VM", status: "PASS" },
  ];
  return (
    <section id="pipeline" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader eyebrow="The platform" title={<>One push.<br /><span className="text-gradient">Five green checks.</span></>} align="left" />
          <p className="mt-5 text-muted-foreground max-w-lg">
            Every commit triggers a full pipeline — build, scan, deploy. If anything red flashes,
            our AI agent steps in with a patch and reruns the stage. You ship while you sleep.
          </p>
          <ul className="mt-7 space-y-3 text-sm">
            {[
              "Container scanning with Trivy on every build",
              "Zero-downtime rolling deploys via SSH",
              "Auto-rollback on health-check failure",
              "Slack & email notifications baked in",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-brand/20 text-brand">
                  <Check className="w-3 h-3" />
                </span>
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-[image:var(--gradient-brand)] opacity-15 blur-3xl rounded-3xl" />
          <div className="relative rounded-2xl border border-border bg-surface/70 backdrop-blur-xl p-6 sm:p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 mb-5">
              <Github className="w-4 h-4 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">you/portfolio · main</span>
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" /> all systems go
              </span>
            </div>
            <ol className="space-y-2.5">
              {steps.map((s, i) => (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 rounded-xl bg-surface-2/70 border border-border"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand/15 text-brand shrink-0">
                      <s.icon className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-sm truncate">{s.label}</span>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <Check className="w-3.5 h-3.5" /> {s.status}
                  </span>
                </motion.li>
              ))}
            </ol>
            <div className="mt-5 px-4 py-3 rounded-xl border border-brand/30 bg-brand/10 flex items-center gap-3">
              <Rocket className="w-4 h-4 text-brand shrink-0" />
              <span className="text-sm">Live at <span className="font-mono text-brand">portfolio.devlauch.app</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STUDENTS ---------------- */
function Students() {
  const perks = [
    "Works with any stack — Node, Python, Java, Go, React",
    "GitHub repo → live URL in under 2 minutes",
    "Automatic redeploy on every push",
    "Builds fail? AI fixes it automatically",
    "Free for student portfolio projects",
  ];
  return (
    <section id="students" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 backdrop-blur p-8 sm:p-14">
          <div className="absolute inset-0 bg-[image:var(--gradient-radial)] opacity-60 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" /> For students
              </div>
              <h2 className="mt-5 font-display font-bold text-4xl sm:text-5xl leading-tight">
                Built a project?<br />
                Let's get it <span className="text-gradient">live.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                You spent weeks on your portfolio project — don't let deployment kill it. We wire
                the entire pipeline in one session, free for students.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground font-semibold shadow-[var(--shadow-glow)]"
              >
                Claim student access <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-background/40">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-emerald-400/15 text-emerald-300 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "You reach out", d: "Email us or book a call. Tell us your project, stack, and goal." },
    { n: "02", t: "We assess & plan", d: "We review your repo and infra and lay out exactly what's needed — no jargon." },
    { n: "03", t: "We set it up", d: "Pipeline, Dockerfile, server deploy — all wired through our platform." },
    { n: "04", t: "You ship forever", d: "Push code → it deploys. Build fails → AI fixes it. You focus on building." },
  ];
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow="Process" title="How it works" sub="From first email to live deployment in one session." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-7 rounded-2xl border border-border bg-surface/60 backdrop-blur"
            >
              <div className="font-mono text-sm text-brand">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPARE ---------------- */
function Compare() {
  const rows: Array<[string, string | boolean, string | boolean, string | boolean, string | boolean]> = [
    ["Deploy to your own server", true, false, false, true],
    ["AI-generated pipeline config", true, false, false, false],
    ["Auto-fix failed builds", true, false, false, false],
    ["Provision cloud infrastructure", true, false, false, false],
    ["Works with any backend language", true, false, true, true],
    ["Setup time", "2 min", "2 min", "5–10 min", "Half a day+"],
  ];
  const cols = ["DevLauch", "Frontend hosts", "Managed cloud", "DIY CI/CD"];
  const cell = (v: string | boolean, highlight: boolean) => {
    if (typeof v === "boolean") {
      return v ? (
        <span className={`inline-grid place-items-center w-6 h-6 rounded-full ${highlight ? "bg-brand/20 text-brand" : "bg-emerald-400/15 text-emerald-300"}`}>
          <Check className="w-3.5 h-3.5" />
        </span>
      ) : (
        <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-muted text-muted-foreground">
          <X className="w-3.5 h-3.5" />
        </span>
      );
    }
    return <span className={highlight ? "text-gradient font-semibold" : "text-muted-foreground"}>{v}</span>;
  };
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow="Compare" title="Why teams pick DevLauch" sub="Not all deploy tools are built for the same problem." />
        <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-surface/60 backdrop-blur">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="text-left">
                <th className="p-5"></th>
                {cols.map((c, i) => (
                  <th
                    key={c}
                    className={`p-5 font-semibold ${i === 0 ? "text-foreground bg-brand/10 border-x border-brand/20" : "text-muted-foreground"}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-t border-border">
                  <td className="p-5 text-foreground/90">{r[0]}</td>
                  {[r[1], r[2], r[3], r[4]].map((v, ci) => (
                    <td
                      key={ci}
                      className={`p-5 ${ci === 0 ? "bg-brand/10 border-x border-brand/20" : ""}`}
                    >
                      {cell(v as string | boolean, ci === 0)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA / CONTACT ---------------- */
function CTA() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 backdrop-blur-xl p-8 sm:p-14">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[image:var(--gradient-brand)] opacity-30 blur-3xl rounded-full" />
          <div className="relative grid lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/60 text-xs font-medium text-muted-foreground">
                Get in touch
              </div>
              <h2 className="mt-5 font-display font-bold text-4xl sm:text-5xl leading-tight">
                Ready to ship?<br />
                <span className="text-gradient">Let's talk.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Student deploying your first project or a team needing a full DevOps setup —
                reach out and we'll respond within a few hours.
              </p>
              <div className="mt-7 space-y-3">
                <a
                  href="mailto:support@devlauch.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background/40 hover:border-brand/40 transition"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-brand/15 text-brand">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm font-medium truncate">support@devlauch.com</div>
                  </div>
                </a>
                <a
                  href="tel:+919535648896"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background/40 hover:border-brand/40 transition"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-brand/15 text-brand">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-sm font-medium">+91 95356 48896</div>
                  </div>
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                (window as unknown as { trackConversion?: (n: string, p?: Record<string, unknown>) => void })
                  .trackConversion?.("contact_form_submit", { location: "landing_cta" });
              }}
              className="rounded-2xl border border-border bg-background/60 p-6 sm:p-7 space-y-4"
            >
              <Field label="Your name" placeholder="Ada Lovelace" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">I am a…</label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-sm focus:outline-none focus:border-brand">
                  <option>Student / Fresher</option>
                  <option>Startup / Small team</option>
                  <option>Company</option>
                  <option>Freelancer</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">What do you need help with?</label>
                <textarea
                  rows={4}
                  placeholder="My Node.js app is on GitHub and I want to deploy it to a VPS automatically…"
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-sm focus:outline-none focus:border-brand resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover:opacity-95 transition"
              >
                Send message <ArrowRight className="w-4 h-4" />
              </button>
              {sent && (
                <div className="text-sm text-emerald-300 text-center">
                  ✓ Message sent! We'll get back within a few hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-sm focus:outline-none focus:border-brand placeholder:text-muted-foreground/60"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground">
              <Rocket className="w-4 h-4" />
            </span>
            DevLauch<span className="text-brand">.</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            DevOps made simple. From GitHub commit to live URL in under two minutes.
          </p>
        </div>
        <FooterCol title="Product" links={[["Services", "#services"], ["Platform", "#pipeline"], ["How it works", "#how"], ["Pricing", "#contact"]]} />
        <FooterCol title="Company" links={[["For students", "#students"], ["Contact", "#contact"], ["Sign in", "https://app.devlauch.com"]]} />
        <FooterCol title="Contact" links={[["support@devlauch.com", "mailto:support@devlauch.com"], ["+91 95356 48896", "tel:+919535648896"]]} />
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} DevLauch. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80 font-semibold">{title}</div>
      <ul className="mt-4 space-y-2.5">
        {links.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="text-sm text-foreground/85 hover:text-brand transition">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- shared ---------------- */
function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/60 text-xs font-medium text-muted-foreground ${align === "center" ? "" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
        {title}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
