import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Award, Briefcase, BadgeCheck, Trophy } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Poola Nikhila" },
      { name: "description", content: "Internships, certifications and achievements." },
      { property: "og:title", content: "Experience — Poola Nikhila" },
      { property: "og:description", content: "Internships across Java, Web Dev, AI/ML and UI/UX." },
    ],
  }),
  component: Experience,
});

const internships = [
  {
    org: "Codec Technologies",
    role: "UI/UX Designer",
    period: "Nov 2025 – Dec 2025",
    color: "bg-primary",
    link: "https://drive.google.com/file/d/1PWwR9fAL6hQ9Yq1YP38_gjsw_fxMMwZD/view?usp=sharing",
  },
  {
    org: "BharatVersity",
    role: "AI/ML Internship (Offline)",
    period: "Jul 2025 – Aug 2025",
    color: "bg-[color:var(--coral)]",
    link: "https://drive.google.com/file/d/1IyaRu__WDUnz-gpeLyUkrTrnBM4yBWGV/view?usp=sharing",
  },
  {
    org: "Elewayte",
    role: "Web Development Internship",
    period: "Aug 2024 – Sep 2024",
    color: "bg-accent",
    link: "https://drive.google.com/file/d/14n7SZwf331hIfwt9kFm8Me7awOFL5QYo/view?usp=sharing",
  },
  {
    org: "InternPe",
    role: "Java Programming Internship",
    period: "Jun 2024 – Jul 2024",
    color: "bg-foreground",
    link: "https://drive.google.com/file/d/1CBTHj5kpSFVpQWuuRRbbcrYoqer4XaxO/view?usp=sharing",
  },
];

const certs = [
  {
    name: "Java SE 17 Developer — Oracle Certified Professional",
    link: "https://drive.google.com/file/d/1Gn-9_CKO2sf8iCE2z9N5KJBOlL3lSQkB/view?usp=sharing" },
  {
    name: "UI/UX — Udemy",
    link: "https://drive.google.com/file/d/1nBACwTnN91A41n1lT22ZMWuZ-QJJoBLt/view?usp=sharing",
  },
  {
    name: "Java Programming — NPTEL",
    link: "https://drive.google.com/file/d/1XNBSDW2yDne4Lu_kf3tProiHfB9hN0-h/view?usp=sharing",
  },
  {
    name: "Java programming — Infosys",
    link: "https://drive.google.com/file/d/1e1SVYnAcQPBx72LFq24Kl_ZotgHLRsXB/view?usp=sharing",
  },
  {
    name: "DevOps Professional — Oracle",
    link: "https://drive.google.com/file/d/1cukv5gYJqSW9suRw4Af4wUVSj0vs87ve/view?usp=sharing",
  },
];

const achievements = [
  {
    title: "Prototype Challenge",
    detail: "Participated at R.M.D Engineering College",
    icon: Trophy,
  },
  { title: "1st Prize", detail: "Math Day Drawing Competition", icon: Award },
  { title: "2nd Prize", detail: "Soap Carving Competition", icon: BadgeCheck },
];

export function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <SectionHeading eyebrow="My work experience" title="Internships & journey." />

      <div className="mt-14 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          {internships.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.08}>
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="grid grid-cols-[auto_1fr] gap-5">
                  <div className="flex flex-col items-center">
                    <div className={`h-4 w-4 rounded-full ${job.color}`} />
                    {i < internships.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      {job.period}
                    </div>
                    <div className="mt-1 font-display text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                      <Briefcase className="h-4 w-4 text-primary" /> {job.org}
                    </div>
                    <div className="text-muted-foreground">{job.role}</div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="bg-foreground text-background rounded-3xl p-8 h-full">
            <h3 className="font-display text-2xl font-bold">Certifications</h3>
            <ul className="mt-6 space-y-4">
              {certs.map((c) => (
                <li key={c.name} className="border-b border-background/10 pb-4 last:border-0">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-accent transition-colors"
                  >
                    <BadgeCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{c.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Achievements */}
      <div className="mt-24">
        <SectionHeading eyebrow="Accolades" title="Achievements." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="relative overflow-hidden bg-card border border-border rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-500">
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/10" />
                <a.icon className="h-8 w-8 text-[color:var(--coral)]" />
                <div className="mt-4 font-display text-2xl font-bold">{a.title}</div>
                <div className="text-muted-foreground text-sm mt-1">{a.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
