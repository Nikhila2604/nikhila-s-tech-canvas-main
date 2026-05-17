import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <div
          className={`font-script text-2xl text-primary mb-2 ${
            align === "center" ? "" : ""
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-6xl font-display font-black text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-muted-foreground max-w-2xl text-balance ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
