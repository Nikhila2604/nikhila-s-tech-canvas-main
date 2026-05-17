import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, ArrowRight, ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Works — Poola Nikhila" },
      {
        name: "description",
        content:
          "Selected projects — AI healthcare, e-commerce, e-waste and peer learning platforms.",
      },
      { property: "og:title", content: "Works by Poola Nikhila" },
      { property: "og:description", content: "Selected full-stack and UI/UX projects." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "SmartCare — AI Healthcare",
    desc: "Frontend disease diagnosis platform delivering AI-driven Ayurvedic treatment suggestions.",
    stack: ["React", "Node.js", "Gemini API", "Firebase", "Tailwind"],
    tag: "AI / Full Stack",
    gradient: "from-primary/30 to-primary/5",
    emoji: "🌿",

    demo: "https://body-aura-healer.netlify.app/",
    code: "https://github.com/Nikhila-2604/SmartCare.git",
  },
  {
    title: "Amazon E-Commerce Clone",
    desc: "Intuitive Amazon-inspired storefront UI with responsive layouts and clear navigation.",
    stack: ["HTML", "CSS", "JavaScript"],
    tag: "Frontend",
    gradient: "from-accent/40 to-accent/5",
    emoji: "🛒",

    demo: "https://cp-amazon.netlify.app/",
    code: "https://github.com/Nikhila-2604/amazon-clone.git",
  },
  {
    title: "E-Waste Management System",
    desc: "Full-stack e-waste management web app focused on sustainable digital solutions.",
    stack: ["HTML", "CSS", "JavaScript"],
    tag: "Full Stack",
    gradient: "from-[color:var(--coral)]/30 to-[color:var(--coral)]/5",
    emoji: "♻️",

    demo: "https://eco-waste.poolanikhila2604.workers.dev/",
    code: "https://github.com/Nikhila-2604/Eco-Waste.git",
  },
  {
    title: "SkillSwap — Peer Learning",
    desc: "Peer-to-peer platform helping students connect, learn subjects and schedule study sessions.",
    stack: ["React", "Node.js", "Firebase", "Tailwind"],
    tag: "Product",
    gradient: "from-primary/20 to-accent/20",
    emoji: "🎓",

    demo: "https://github.com/Nikhila-2604/SKillSWAP.git",
    code: "https://github.com/Nikhila-2604/SKillSWAP.git",
  },
  {
    title: "AI Food Delivery — UX",
    desc: "Smart UI/UX system design for an AI-assisted food delivery experience.",
    stack: ["Figma", "Stitch", "Google AI Studio", "React"],
    tag: "UI / UX",
    gradient: "from-accent/40 to-primary/20",
    emoji: "🍽️",

    demo: "https://foodieesapp.netlify.app/",
    code: "https://github.com/Nikhila-2604/food-ordering-app.git",
  },
  {
    title: "Memory Card Mobile App",
    desc: "Interactive memory card game application with smooth animations, score tracking and responsive mobile-friendly design.",
    stack: ["HTML", "CSS", "JavaScript"],
    tag: "Frontend Project",
    gradient: "from-primary/30 to-accent/10",
    emoji: "🃏",

    demo: "https://mindmemory.tiiny.site/",
    code: "https://github.com/Nikhila-2604/memory-card.git",
  },
  {
    title: "E-Mart — Shopping App",
    desc: "Modern e-commerce web application with product listings, cart management and responsive shopping experience.",
    stack: ["React.js", "CSS", "Firebase"],
    tag: "React Project",
    gradient: "from-violet-500/30 to-cyan-500/10",
    emoji: "🛍️",

    demo: "https://github.com/Nikhila-2604/E-Mart.git",
    code: "https://github.com/Nikhila-2604/E-Mart.git",
  },
  {
    title: "Charting Application",
    desc: "Java-based charting system for generating dynamic graphs, visual reports and analytical data representations.",
    stack: ["Java", "Swing", "JFreeChart"],
    tag: "Java Project",
    gradient: "from-[color:var(--coral)]/30 to-primary/10",
    emoji: "📊",

    demo: "https://github.com/Nikhila-2604/Chatting-Application-.git",
    code: "https://github.com/Nikhila-2604/Chatting-Application-.git",
  },
];

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
    <Reveal delay={(i % 2) * 0.1}>
      <article
        className={`group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${p.gradient} p-8 h-full min-h-[340px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-[var(--shadow-lift)] transition-all duration-500`}
      >
        <div className="flex items-start justify-between">
          <span className="text-xs tracking-[0.2em] uppercase bg-background/70 backdrop-blur px-3 py-1 rounded-full border border-border">
            {p.tag}
          </span>
          <div className="text-5xl">{p.emoji}</div>
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold">{p.title}</h3>
          <p className="mt-3 text-muted-foreground max-w-md">{p.desc}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="text-xs bg-background/80 border border-border px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium hover:opacity-90 transition-all"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-4 py-2 text-xs font-medium hover:bg-foreground hover:text-background transition-all"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          </div>
        </div>

        <div className="absolute top-6 right-6 h-11 w-11 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </article>
    </Reveal>
  );
}

export function Projects({ preview = false }: { preview?: boolean } = {}) {
  const list = preview ? projects.slice(0, 4) : projects;
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <SectionHeading
          eyebrow="My latest works"
          title="Selected projects."
          subtitle="Perfect solutions for digital experiences — real problems, shipped."
        />
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {list.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      {preview && projects.length > list.length && (
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-7 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-all"
          >
            View more projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}

function ProjectsPage() {
  return <Projects />;
}
