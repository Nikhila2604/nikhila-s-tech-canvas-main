import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const links = [
  { hash: "", label: "HOME" },
  { hash: "about", label: "ABOUT" },
  { hash: "skills", label: "SKILLS" },
  { hash: "projects", label: "WORKS" },
  { hash: "experience", label: "EXPERIENCE" },
  { hash: "contact", label: "CONTACT" },
] as const;

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-script text-3xl text-primary leading-none">
          Nikhila
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-xs tracking-[0.2em] font-medium">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.hash ? `/#${l.hash}` : "/"}
              className="px-4 py-2 rounded-full transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+919908462604"
          className="flex items-center gap-3 group"
        >
          <span className="hidden sm:inline text-sm font-medium tracking-wide">
            +91 99084 62604
          </span>
          <span className="h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors">
            <Phone className="h-4 w-4" />
          </span>
        </a>
      </div>
    </motion.header>
  );
}
