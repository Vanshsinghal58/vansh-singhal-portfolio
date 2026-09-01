import profileImage from "@/assets/vansh-singhal-profile.jpg";

import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  ArrowUpRight,
  Sprout,
  LineChart,
  BadgeCheck,
} from "lucide-react";
import profileAsset from "@/assets/vansh-singhal-portrait.jpg.asset.json";
const avatar = profileImage;
<img
  src={avatar}
  alt="Neon portrait of Vansh Singhal"
  width={768}
  height={768}
  className="mx-auto h-32 w-32 rounded-full object-cover neon-ring ring-1 ring-border"
/>
import { SideRail } from "@/components/SideRail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vansh Singhal — Frontend & Data Analytics Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Vansh Singhal, B.Tech CSE (AI) student at MIET Meerut building responsive web interfaces and Python data projects.",
      },
      { property: "og:title", content: "Vansh Singhal — Frontend & Data Analytics Portfolio" },
      {
        property: "og:description",
        content:
          "Responsive web interfaces in HTML, CSS and JavaScript, plus Python data preprocessing, modeling and visualization.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { name: "HTML5 / CSS3", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "Python (Pandas, NumPy)", level: 78 },
  { name: "Java", level: 70 },
  { name: "Data Analysis & Visualization", level: 75 },
  { name: "Git & GitHub", level: 72 },
  { name: "React (learning)", level: 45 },
];

const skillGroups = [
  { title: "Languages", items: ["Python", "JavaScript", "Java", "C"] },
  { title: "Web & Frontend", items: ["HTML5", "CSS3", "Responsive UI", "React (learning)"] },
  { title: "Data & Analytics", items: ["Pandas", "NumPy", "EDA", "Visualization"] },
  { title: "Core CS & Tools", items: ["DSA", "OOPs", "DBMS", "Git", "VS Code"] },
];

const projects = [
  {
    title: "Farmer-to-Customer Web Platform",
    stack: ["HTML", "CSS", "JavaScript"],
    Icon: Sprout,
    points: [
      "Responsive platform connecting farmers directly with customers, cutting out middlemen.",
      "Product listing pages and dynamic UI for smooth buyer-seller browsing.",
      "Layout responsiveness and usability across devices, versioned with Git.",
    ],
  },
  {
    title: "Crop Yield Prediction System",
    stack: ["Python", "Pandas", "NumPy", "ML"],
    Icon: LineChart,
    points: [
      "Machine learning model predicting crop yield from historical agricultural data.",
      "Cleaned, preprocessed and structured raw data for modeling.",
      "Visualizations communicating trends and model accuracy as actionable insight.",
    ],
  },
];

const education = [
  {
    title: "B.Tech, Computer Science Engineering (AI)",
    org: "MIET, Meerut · Expected 2027",
    meta: "CGPA 7.5 / 10.0",
  },
  {
    title: "Senior Secondary (XII), CBSE",
    org: "P.R. Public School",
    meta: "81.4%",
  },
  {
    title: "Secondary (X), CBSE",
    org: "P.R. Public School",
    meta: "87%",
  },
];

const certifications = [
  { title: "Business Analytics & Visualization", org: "Eduskills Academy" },
  { title: "Python Programming", org: "HackerRank" },
  { title: "Java Basics", org: "Oracle Academy" },
  { title: "Introduction to Cybersecurity", org: "CISCO Networking Academy" },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.35em] text-neon-soft">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-neon-gradient sm:text-4xl">{title}</h2>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <SideRail />

      <main className="mx-auto max-w-5xl px-5 pb-24 pl-20 md:pl-28">
        {/* Hero */}
        <section id="home" className="flex min-h-screen items-center py-20">
          <div className="panel glow-edge w-full px-6 py-14 text-center sm:px-12">
            <img
              src={avatar}
              alt="Neon portrait of Vansh Singhal"
              width={768}
              height={768}
              className="mx-auto h-32 w-32 rounded-full object-cover neon-ring ring-1 ring-border"
            />
            <h1 className="mt-8 text-4xl font-bold sm:text-6xl">
              Hi, I&apos;m <span className="text-neon-gradient">Vansh</span>
            </h1>
            <p className="mt-3 text-lg text-neon-soft sm:text-xl">
              Frontend Developer &amp; Data Analytics Enthusiast
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              B.Tech CSE (AI) student at MIET Meerut. I build responsive, user-facing web
              interfaces and turn raw data into insight with Python — end to end, from UI to
              pipeline.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] neon-ring"
              >
                View My Work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:vanshsinghal588@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" /> Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 py-16">
          <SectionTitle eyebrow="Profile" title="About Me" />
          <div className="panel glow-edge p-7 sm:p-9">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              I&apos;m comfortable working across a project end to end — from interface to data
              pipeline — and quick to pick up new tools without hand-holding. Business Analytics
              and Visualization certified, with two independently built and shipped projects. I
              bring a builder&apos;s mindset, an honest and coachable approach, and a strong
              Git/GitHub workflow, and I&apos;m growing fast into React, Next.js, Node and SQL
              through real product work.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Graduating", "2027"],
                ["CGPA", "7.5 / 10"],
                ["Shipped Projects", "2"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-surface-2/60 p-4">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-2xl font-bold text-neon">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 py-16">
          <SectionTitle eyebrow="Toolkit" title="My Skills" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="panel glow-edge p-7">
              <ul className="space-y-5">
                {skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="h-full rounded-full neon-ring"
                        style={{
                          width: `${s.level}%`,
                          background: "var(--gradient-neon)",
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.title} className="panel glow-edge p-5">
                  <h3 className="text-sm font-semibold text-neon">{g.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <li
                        key={i}
                        className="rounded-full border border-border bg-surface-2/70 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 py-16">
          <SectionTitle eyebrow="Selected Work" title="My Portfolio" />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map(({ title, stack, points, Icon }) => (
              <article key={title} className="panel glow-edge flex flex-col p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-neon neon-ring">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <ul className="mt-4 flex-1 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-xs text-neon-soft"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-20 py-16">
          <SectionTitle eyebrow="Background" title="Education & Certifications" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="panel glow-edge p-7">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neon">
                Education
              </h3>
              <ul className="mt-5 space-y-4">
                {education.map((e) => (
                  <li key={e.title} className="rounded-xl border border-border bg-surface-2/60 p-4">
                    <p className="text-sm font-medium">{e.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{e.org}</p>
                    <p className="mt-2 text-xs text-neon-soft">{e.meta}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel glow-edge p-7">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neon">
                Certifications
              </h3>
              <ul className="mt-5 space-y-4">
                {certifications.map((c) => (
                  <li
                    key={c.title}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface-2/60 p-4"
                  >
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-neon" strokeWidth={1.75} />
                    <div>
                      <p className="text-sm font-medium">{c.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">
                Participated in inter-college coding and problem-solving competitions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-16">
          <SectionTitle eyebrow="Say Hello" title="Let's Build Something" />
          <div className="panel glow-edge grid gap-4 p-7 sm:grid-cols-2">
            {[
              {
                Icon: Mail,
                label: "vanshsinghal588@gmail.com",
                href: "mailto:vanshsinghal588@gmail.com",
              },
              { Icon: Phone, label: "+91 93685 69020", href: "tel:+919368569020" },
              {
                Icon: Linkedin,
                label: "linkedin.com/in/vansh-singhal-a140801a8/",
                href: "https://www.linkedin.com/in/vansh-singhal-a140801a8/",
              },
              { Icon: MapPin, label: "Meerut, Uttar Pradesh", href: undefined },
            ].map(({ Icon, label, href }) => {
              const content = (
                <>
                  <Icon className="h-4 w-4 text-neon" strokeWidth={1.75} />
                  <span className="text-sm">{label}</span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/60 p-4 transition-colors hover:bg-secondary"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/60 p-4"
                >
                  {content}
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vansh Singhal
          </p>
        </section>
      </main>
    </div>
  );
}
