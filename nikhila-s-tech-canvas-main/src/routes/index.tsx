import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Monitor,
  Smartphone,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import nikhilaPortrait from "@/assets/nikhila-portrait.png";
import { About } from "./about";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Contact } from "./contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poola Nikhila — CS Engineer & Designer" },
      {
        name: "description",
        content:
          "Portfolio of Poola Nikhila — Full Stack Learner, UI/UX Designer and AI/ML Enthusiast.",
      },
      { property: "og:title", content: "Poola Nikhila — Portfolio" },
      {
        property: "og:description",
        content: "Building smart digital solutions with creativity, code, and innovation.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Monitor,
    label: "Website Design",
    count: "4+ Projects",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: Smartphone,
    label: "Mobile App Design",
    count: "2+ Projects",
    color: "bg-accent/25 text-accent-foreground",
  },
  {
    icon: Sparkles,
    label: "AI / UX Design",
    count: "2+ Projects",
    color: "bg-[color:var(--coral)]/20 text-[color:var(--coral)]",
  },
];

function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const start = setTimeout(() => {
      const t = setInterval(() => {
        setI((p) => {
          if (p >= text.length) {
            clearInterval(t);
            return p;
          }
          return p + 1;
        });
      }, 130);
      return () => clearInterval(t);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);
  return (
    <span className="text-primary">
      {text.slice(0, i)}
      <span className="inline-block w-[3px] h-[0.85em] bg-primary align-middle ml-1 animate-pulse" />
    </span>
  );
}

function HeroPhoto() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="relative w-[min(90vw,460px)] aspect-[3/4]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
        </div>
        <motion.img
          src={nikhilaPortrait}
          alt="Nikhila portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — INTRO (sticky so it stays while right column scrolls) */}
          <div className="relative z-20 order-2 md:order-1 md:sticky md:top-24 md:self-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-black tracking-tight text-foreground text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.05]"
            >
              Hello, I am <Typewriter text="Nikhila" delay={400} />
              <br />
              <span className="font-black">Fullstack</span>{" "}
              <span
                className="font-black"
                style={{
                  WebkitTextStroke: "2px var(--foreground)",
                  color: "transparent",
                }}
              >
                Developer
              </span>
              <br />
              Based In <span className="font-black">India.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 max-w-xl text-muted-foreground leading-relaxed text-base md:text-lg"
            >
              Passionate about technology, I specialize in Web Development and UI/UX Design. I'm
              focused on building innovative solutions and continuously expanding my skills. My goal
              is to grow as a developer and contribute to impactful projects in the tech industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-10 flex items-center gap-4"
            >
              {[
                { icon: Mail, href: "mailto:poolanikhila2604@gmail.com", label: "Email" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/nikhila2604/",
                  label: "LinkedIn",
                },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "https://github.com/Nikhila-2604", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-12 w-12 rounded-xl border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="https://drive.google.com/file/d/1bKJAkKNp1tmiA_ePQvOg8x6y885AC84M/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-primary transition-colors"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90"
              >
                Contact <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — SCROLL-DRIVEN IMAGE STACK */}
          <div className="order-1 md:order-2">
            <HeroPhoto />
          </div>
        </div>
      </section>

      {/* SERVICES + What do I help */}
      <section className="bg-card border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            {services.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <a href="#projects" className="block">
                  <div className="group flex items-center gap-5 bg-background border border-border rounded-2xl p-5 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                    <div
                      className={`h-14 w-14 rounded-xl flex items-center justify-center ${s.color}`}
                    >
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-display text-xl font-bold">{s.label}</div>
                      <div className="text-sm text-muted-foreground">{s.count}</div>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-display font-black">What do I help?</h2>
              <p className="mt-6 text-muted-foreground">
                I help teams and clients craft full-stack web products — from clean, intuitive
                interfaces to AI-powered features. I turn messy problems into elegant digital
                experiences using thoughtful design and reliable code.
              </p>
              <p className="mt-4 text-muted-foreground">
                My focus is on real impact: solutions that look premium, feel fast and solve the
                right problem for real users.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8 max-w-sm">
                <div>
                  <div className="text-5xl font-display font-black text-primary">8+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects Built</div>
                </div>
                <div>
                  <div className="text-5xl font-display font-black text-[color:var(--coral)]">
                    4+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Internships</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-16 border-b border-border/60 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10">
              {[
                "Full Stack",
                "UI / UX",
                "AI / ML",
                "React",
                "Node.js",
                "Firebase",
                "Figma",
                "Tailwind",
              ].map((t) => (
                <span
                  key={t + k}
                  className="font-display italic text-5xl md:text-7xl font-black text-foreground/80"
                >
                  {t} <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects preview />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
