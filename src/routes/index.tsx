import { createFileRoute } from "@tanstack/react-router";
import raedPhoto from "@/assets/raed.jpg";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Brain,
  Code2,
  Cpu,
  Database,
  Sparkles,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    title: "Music Architect AI",
    tag: "Cloud-Native · Multimodal",
    description:
      "AI platform for automated music and visual generation. RAG pipeline with ChromaDB, GPU inference on SageMaker, and orchestration with AWS Step Functions.",
    stack: ["FastAPI", "Next.js", "AWS", "SageMaker", "Qwen 2.5", "SDXL Turbo"],
  },
  {
    title: "Autonomous Car — Object Detection",
    tag: "Computer Vision",
    description:
      "Deep learning system that detects speed signs and tracks road lanes in real time for an autonomous vehicle prototype.",
    stack: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
  },
  {
    title: "Facial Recognition Access Control",
    tag: "Security · CV",
    description:
      "Automated door access system that verifies a user's face against a database to grant or deny entry.",
    stack: ["Python", "OpenCV", "Face Recognition"],
  },
  {
    title: "Spam Email Detection Web App",
    tag: "ML · Full-stack",
    description:
      "Trained a machine-learning classifier and shipped it behind an interactive Flask web interface for real-time email testing.",
    stack: ["Python", "Flask", "ML", "JavaScript"],
  },
  {
    title: "Library E-commerce Platform",
    tag: "Full-stack",
    description:
      "Full-stack web application with an Angular frontend, Flask REST API and SQL database to manage products, orders and users.",
    stack: ["Angular", "Flask", "REST API", "SQL"],
  },
];

const skills = [
  { icon: Code2, title: "Programming", items: ["Python", "Java", "C++", "SQL"] },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Analysis"],
  },
  {
    icon: Cpu,
    title: "Web Development",
    items: ["Angular", "Flask", "Spring Boot", "REST APIs", "HTML/CSS/JS", "PHP"],
  },
  { icon: Database, title: "Tools & Methods", items: ["Docker", "AWS", "Git", "Agile", "Cloud"] },
];

const timeline = [
  {
    kind: "education",
    date: "Ongoing",
    title: "Engineering Degree in Computer Science — 4th year",
    org: "EPI International Multidisciplinary School",
  },
  {
    kind: "experience",
    date: "Jun — Aug 2023",
    title: "Industrial Maintenance Intern",
    org: "2Ideal Break Ben Hassen, Monastir",
  },
  {
    kind: "experience",
    date: "Feb — May 2023",
    title: "AI Intern — Autonomous Car Object Detection",
    org: "Techno-Soft Solution",
  },
  {
    kind: "education",
    date: "Prior",
    title: "Master's Studies in Embedded Electronic Systems",
    org: "ISSAT Mahdia",
  },
  {
    kind: "education",
    date: "Prior",
    title: "Bachelor's in Industrial Computing & Automation",
    org: "ISSAT Sousse",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm font-bold tracking-tight">
            <span className="text-primary">raed</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <div className="hidden gap-8 md:flex">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Journey", "#journey"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Let's talk
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="relative grid gap-12 py-24 md:grid-cols-[1.4fr_1fr] md:py-32">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
            style={{ background: "var(--gradient-radial)" }}
          />
          <div className="flex flex-col justify-center">
            <p className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Available for opportunities
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Building <span className="text-primary">intelligent</span> systems
              <br />
              with code & AI.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I'm{" "}
              <span className="text-foreground font-medium">Raed Belkacem</span>, a computer
              engineering student specialized in Artificial Intelligence. I design and ship
              full-stack AI products — from computer vision to cloud-native generative platforms.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                View projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/40"
              >
                <Mail className="h-4 w-4" /> Contact me
              </a>
            </div>
            <div className="mt-10 flex gap-5 text-muted-foreground">
              <a href="https://github.com/raedbelkacem" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/belkacem-raed/" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:raedbe2@gmail.com" className="transition-colors hover:text-primary" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-8 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-card)]">
              <div className="h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-muted">
                <img
                  src={raedPhoto}
                  alt="Portrait of Raed Belkacem"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-4 py-3 font-mono text-xs shadow-[var(--shadow-card)]">
                <div className="text-muted-foreground">status</div>
                <div className="flex items-center gap-2 text-primary">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  online & coding
                </div>
              </div>
              <div className="absolute -top-4 -right-4 rounded-2xl border border-border bg-card px-4 py-3 font-mono text-xs shadow-[var(--shadow-card)]">
                <div className="text-muted-foreground">focus</div>
                <div className="text-foreground">AI · Cloud · Full-stack</div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE STATS */}
        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            ["5+", "Featured projects"],
            ["2", "Industry internships"],
            ["4+", "IEEE & clubs"],
            ["∞", "Curiosity"],
          ].map(([k, v]) => (
            <div key={v} className="bg-card px-6 py-8">
              <div className="font-mono text-3xl font-bold text-primary">{k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{v}</div>
            </div>
          ))}
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 py-28">
          <SectionHeader index="01" title="About" subtitle="Who I am" />
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Future computer engineer passionate about emerging technologies, artificial
                intelligence and software development. Curious, self-disciplined and a fast learner,
                I continuously sharpen my skills through practical projects and self-learning.
              </p>
              <p>
                I've built solid foundations in programming, data analysis and problem solving. I'm
                looking to join a dynamic team where I can ship innovative products and grow my
                technical expertise in a stimulating professional environment.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 font-mono text-sm">
              <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="ml-2 text-xs">~/raed/profile.json</span>
              </div>
              <pre className="whitespace-pre-wrap text-xs leading-6 text-foreground/90">
{`{
  "role": "AI & Software Engineer",
  "location": "Tunisia",
  "focus": ["AI", "Cloud", "Full-stack"],
  "learning": "generative AI systems",
  "open_to": "internships & collab"
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 py-16">
          <SectionHeader index="02" title="Projects" subtitle="Selected work" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-45" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 py-28">
          <SectionHeader index="03" title="Skills" subtitle="Tools of the trade" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="inline-flex rounded-xl border border-primary/30 bg-primary/10 p-2.5 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="scroll-mt-24 py-16">
          <SectionHeader index="04" title="Journey" subtitle="Education & experience" />
          <ol className="mt-10 space-y-4">
            {timeline.map((t) => (
              <li
                key={t.title}
                className="group relative grid gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:grid-cols-[180px_1fr_auto] md:items-center"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-primary">
                  {t.date}
                </div>
                <div>
                  <h3 className="font-semibold">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.org}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] text-muted-foreground md:justify-self-end">
                  {t.kind === "education" ? (
                    <GraduationCap className="h-3.5 w-3.5" />
                  ) : (
                    <Briefcase className="h-3.5 w-3.5" />
                  )}
                  {t.kind}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Involvement
            </div>
            <div className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
              <p>· IEEE Robotics and Automation Society — projects & competitions</p>
              <p>· IEEE Computational Intelligence Society — Media Manager & Webmaster</p>
              <p>· Junior Chamber International — community & leadership</p>
              <p>· Radio Club — communication & event hosting</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 py-28">
          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16"
            style={{ backgroundImage: "var(--gradient-radial)" }}
          >
            <SectionHeader index="05" title="Contact" subtitle="Let's build something" />
            <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              Have a project in mind? <span className="text-primary">Let's talk.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              I'm open to internships, freelance collaborations and full-time opportunities in AI
              and software engineering.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <ContactCard icon={Mail} label="Email" value="raedbe2@gmail.com" href="mailto:raedbe2@gmail.com" />
              <ContactCard icon={Phone} label="Phone" value="+216 54 423 691" href="tel:+21654423691" />
              <ContactCard icon={MapPin} label="Based in" value="Tunisia" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Raed Belkacem — Crafted with care.
          </p>
          <div className="flex gap-4 text-muted-foreground">
            <a href="https://github.com/raedbelkacem" target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/belkacem-raed/" target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:raedbe2@gmail.com" className="hover:text-primary" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {index} — {subtitle}
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      </div>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-background/50 p-5 transition-colors hover:border-primary/40">
      <div className="rounded-xl border border-primary/30 bg-primary/10 p-2.5 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
