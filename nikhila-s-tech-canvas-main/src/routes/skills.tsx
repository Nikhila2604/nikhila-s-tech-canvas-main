import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Poola Nikhila" },
      { name: "description", content: "Technical skills, design tools and soft skills." },
      { property: "og:title", content: "Skills — Poola Nikhila" },
      { property: "og:description", content: "Full Stack, UI/UX and AI tools I work with." },
    ],
  }),
  component: Skills,
});

const tech = [
  { name: "Java", level: 85 },
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "HTML / CSS", level: 95 },
  { name: "Node.js", level: 50 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Firebase", level: 60 },
  { name: "SQL", level: 65 },
];

const tools = ["Figma", "Stitch", "Google AI Studio", "Canva", "Maze", "Cursor"];
const soft = ["Communication", "Teamwork", "Adaptability", "Creativity", "Problem Solving", "Collaboration"];

export function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <SectionHeading eyebrow="Toolbox" title="Skills & stack I work with." />

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {/* Tech */}
        <Reveal className="md:col-span-2">
          <div className="bg-card border border-border rounded-3xl p-8 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-2xl font-bold">Technical Skills</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {tech.map((t, i) => (
                <div key={t.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{t.name}</span>
                    <span className="text-muted-foreground">{t.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-primary to-[color:var(--coral)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Tools */}
        <Reveal delay={0.1}>
          <div className="h-full bg-foreground text-background rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold">AI + Design</h3>
            <p className="text-background/70 text-sm mt-2">Design & AI tooling</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full border border-background/20 text-sm hover:bg-background hover:text-foreground transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Soft */}
      <Reveal className="mt-6">
        <div className="bg-accent/30 border border-border rounded-3xl p-8">
          <h3 className="font-display text-2xl font-bold">Soft Skills</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {soft.map((s) => (
              <span key={s} className="bg-background border border-border px-5 py-2 rounded-full text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
