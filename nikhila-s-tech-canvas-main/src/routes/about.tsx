import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GraduationCap, Award, Sparkles, Target, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Poola Nikhila" },
      {
        name: "description",
        content:
          "CS undergraduate at R.M.D Engineering College. Passionate about Full Stack, AI/ML and UI/UX.",
      },
      { property: "og:title", content: "About Poola Nikhila" },
      {
        property: "og:description",
        content: "CS undergraduate passionate about building real-world AI-powered products.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Target,
    title: "Real-world Focus",
    text: "I build things that solve actual problems, not demos.",
  },
  {
    icon: Sparkles,
    title: "AI-first thinking",
    text: "Exploring how intelligent systems can amplify everyday apps.",
  },
  {
    icon: Users,
    title: "Team player",
    text: "Collaboration, communication and adaptability come first.",
  },
  {
    icon: Zap,
    title: "Continuous learning",
    text: "Always picking up new tools, frameworks and design patterns.",
  },
];

const education = [
  {
    degree: "B.E — Computer Science and Engineering",
    place: "R.M.D Engineering College, Chennai",
    period: "2023 – 2027",
    score: "CGPA: 8.46 / 10",
  },
  {
    degree: "Higher Secondary Education",
    place: "Sri Chaitanya Meenakshi Campus, Tirupathi",
    period: "2021 – 2023",
    score: "92.9%",
  },
  {
    degree: "Secondary School",
    place: "Sri Chaitanya Campus, Venkatagiri",
    period: "2020 – 2021",
    score: "100%",
  },
];

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <SectionHeading eyebrow="About me" title="A curious engineer with a designer's heart." />

      <div className="mt-10 grid md:grid-cols-3 gap-10 md:gap-16">
        <Reveal className="md:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm <span className="text-foreground font-semibold">Poola Nikhila</span>, a dedicated
            and proactive technology professional passionate about learning and implementing modern
            solutions to real-world problems.
          </p>
          <p>
            Strong adaptability and commitment to continuous skill development across domains — Full
            Stack Web, AI / ML and UI/UX Design. I'm poised to add value as a reliable and
            collaborative member of progressive engineering teams.
          </p>
          <p>
            Outside of code, I sketch interfaces, explore Ayurvedic + AI product ideas, and obsess
            over the small details that make a product feel premium.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-card border border-border rounded-3xl p-6 shadow-[var(--shadow-card)] space-y-3">
            <div className="font-script text-2xl text-primary">Quick facts</div>
            <div className="text-sm">
              <span className="text-muted-foreground">Based in</span>
              <br />
              Chennai, India
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Degree</span>
              <br />
              B.E CSE — RMD Engineering College
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">CGPA</span>
              <br />
              8.46 / 10
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Open to</span>
              <br />
              Internships · Full-time roles
            </div>
          </div>
        </Reveal>
      </div>

      {/* Values */}
      <div className="mt-24 grid md:grid-cols-4 gap-5">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <div className="h-full bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] transition-all duration-500">
              <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                <v.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-xl font-bold">{v.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Education */}
      <div className="mt-28">
        <SectionHeading eyebrow="Education" title="My academic path." />
        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-10">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.1}>
                <div
                  className={`relative grid md:grid-cols-2 gap-6 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="pl-12 md:pl-0 md:pr-12">
                    <div
                      className={`bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] ${i % 2 ? "md:ml-12" : "md:mr-12 md:text-right"}`}
                    >
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <GraduationCap className="h-4 w-4" /> {e.period}
                      </div>
                      <div className="mt-2 font-display text-xl font-bold">{e.degree}</div>
                      <div className="text-muted-foreground text-sm">{e.place}</div>
                      <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--coral)]">
                        <Award className="h-4 w-4" /> {e.score}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
