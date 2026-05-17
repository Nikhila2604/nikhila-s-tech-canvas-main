import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, MessageSquare, Loader2, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Poola Nikhila" },
      { name: "description", content: "Let's build something impactful together." },
      { property: "og:title", content: "Contact Poola Nikhila" },
      { property: "og:description", content: "Available for internships & collaborations." },
    ],
  }),
  component: Contact,
});

// TODO: Replace YOUR_FORM_ID with your actual Formspree form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdwaqzw";

type FormState = { name: string; email: string; message: string };

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const firstName = form.name.trim().split(" ")[0] || "friend";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <Reveal>
        <div className="text-center mb-10">
          <div className="font-script text-2xl md:text-3xl text-primary">Get in touch</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display font-black text-balance">
            Let's make something <em className="text-primary not-italic">amazing</em>.
          </h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_oklch(0.24_0.04_200/0.35)]">
          {/* decorative gradient ring */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(1200px 200px at 0% 0%, oklch(0.78 0.16 65 / 0.18), transparent 60%), radial-gradient(800px 200px at 100% 100%, oklch(0.52 0.11 185 / 0.18), transparent 60%)",
            }}
          />
          {/* soft blurred blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-40"
            style={{ background: "oklch(0.78 0.16 65 / 0.5)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl opacity-40"
            style={{ background: "oklch(0.52 0.11 185 / 0.5)" }}
          />

          <div className="relative grid md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* LEFT — illustration + info */}
            <LeftColumn />

            {/* RIGHT — form */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="font-script text-2xl text-primary">Get in touch</div>
                      <h2 className="text-2xl md:text-3xl font-display font-black mt-1">
                        Let's make something amazing together
                      </h2>
                    </div>

                    <FieldGroup>
                      <AnimatedField delay={0.05}>
                        <UnderlineField
                          icon={<User className="h-4 w-4" />}
                          label="Full Name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(v) => setForm({ ...form, name: v })}
                        />
                      </AnimatedField>

                      <AnimatedField delay={0.15}>
                        <UnderlineField
                          icon={<Mail className="h-4 w-4" />}
                          label="Email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(v) => setForm({ ...form, email: v })}
                        />
                      </AnimatedField>

                      <AnimatedField delay={0.25}>
                        <UnderlineField
                          icon={<MessageSquare className="h-4 w-4" />}
                          label="Message"
                          textarea
                          required
                          value={form.message}
                          onChange={(v) => setForm({ ...form, message: v })}
                        />
                      </AnimatedField>
                    </FieldGroup>

                    {error && <p className="text-sm text-destructive">{error}</p>}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.4 }}
                    >
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group w-full rounded-full bg-foreground text-background py-3.5 font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
                          </>
                        )}
                      </button>
                    </motion.div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center min-h-[420px] py-10"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    >
                      <CheckCircle2 className="h-20 w-20 text-primary" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6 text-3xl font-display font-black"
                    >
                      Message sent!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-3 text-muted-foreground max-w-sm"
                    >
                      Thank you, <span className="text-primary font-semibold">{firstName}</span>!
                      I'll get back to you as soon as possible.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div className="space-y-5">{children}</div>;
}

function AnimatedField({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function UnderlineField({
  icon,
  label,
  type = "text",
  textarea,
  required,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        className={`flex items-center gap-2 text-xs uppercase tracking-wider transition-colors duration-300 ${
          active ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {icon}
        {label}
      </label>
      {textarea ? (
        <textarea
          required={required}
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="mt-2 w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-2 resize-none text-foreground placeholder:text-muted-foreground transition-colors duration-300"
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="mt-2 w-full bg-transparent border-0 border-b border-border focus:border-primary focus:outline-none py-2 text-foreground placeholder:text-muted-foreground transition-colors duration-300"
        />
      )}
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary origin-left"
        initial={false}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="relative flex flex-col items-center md:items-start justify-between gap-8">
      {/* Floating illustration */}
      <div className="relative w-full flex justify-center">
        {/* decorative pulsing dots */}
        <motion.div
          aria-hidden
          className="absolute top-4 left-4 h-3 w-3 rounded-full bg-primary"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <motion.div
          aria-hidden
          className="absolute top-12 right-8 h-2 w-2 rounded-full"
          style={{ background: "oklch(0.78 0.16 65)" }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.4 }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-8 left-10 h-2.5 w-2.5 rounded-full bg-primary/70"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.8 }}
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <GirlWithLaptop />
        </motion.div>
      </div>

      {/* Contact info */}
      <div className="w-full space-y-3">
        <a
          href="mailto:poolanikhila2604@gmail.com"
          className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors group"
        >
          <span className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Mail className="h-4 w-4 text-primary" />
          </span>
          poolanikhila2604@gmail.com
        </a>
        <a
          href="tel:+919908462604"
          className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors group"
        >
          <span className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Phone className="h-4 w-4 text-primary" />
          </span>
          +91 99084 62604
        </a>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Open to opportunities
        </div>
      </div>
    </div>
  );
}

function GirlWithLaptop() {
  return (
    <svg
      width="260"
      height="240"
      viewBox="0 0 260 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-xl"
    >
      {/* ground shadow */}
      <ellipse cx="130" cy="225" rx="80" ry="6" fill="oklch(0.24 0.04 200 / 0.15)" />

      {/* cushion */}
      <ellipse cx="130" cy="200" rx="70" ry="14" fill="oklch(0.52 0.11 185 / 0.35)" />

      {/* legs (crossed) */}
      <path
        d="M85 195 Q110 175 130 188 Q150 175 175 195 Q175 205 130 205 Q85 205 85 195 Z"
        fill="oklch(0.45 0.09 260)"
      />

      {/* body */}
      <path
        d="M95 175 Q95 130 130 128 Q165 130 165 175 Q165 190 130 190 Q95 190 95 175 Z"
        fill="oklch(0.78 0.16 65)"
      />

      {/* arms holding laptop */}
      <path d="M100 165 Q90 155 95 145 L115 150 Z" fill="oklch(0.85 0.05 50)" />
      <path d="M160 165 Q170 155 165 145 L145 150 Z" fill="oklch(0.85 0.05 50)" />

      {/* laptop base */}
      <rect x="100" y="155" width="60" height="8" rx="2" fill="oklch(0.3 0.02 240)" />
      {/* laptop screen */}
      <rect x="105" y="125" width="50" height="32" rx="3" fill="oklch(0.25 0.03 240)" />
      <rect x="108" y="128" width="44" height="26" rx="2" fill="oklch(0.52 0.11 185)" />
      {/* screen content lines */}
      <rect x="112" y="133" width="20" height="2" rx="1" fill="white" opacity="0.8" />
      <rect x="112" y="138" width="30" height="2" rx="1" fill="white" opacity="0.6" />
      <rect x="112" y="143" width="16" height="2" rx="1" fill="white" opacity="0.6" />

      {/* head */}
      <circle cx="130" cy="95" r="28" fill="oklch(0.85 0.05 50)" />

      {/* hair */}
      <path
        d="M102 95 Q102 65 130 62 Q158 65 158 95 Q158 80 145 75 Q140 92 130 92 Q120 92 115 75 Q102 80 102 95 Z"
        fill="oklch(0.25 0.03 30)"
      />
      {/* hair bun */}
      <circle cx="130" cy="62" r="10" fill="oklch(0.25 0.03 30)" />

      {/* face */}
      <circle cx="121" cy="98" r="1.8" fill="oklch(0.2 0.02 30)" />
      <circle cx="139" cy="98" r="1.8" fill="oklch(0.2 0.02 30)" />
      <path
        d="M124 108 Q130 113 136 108"
        stroke="oklch(0.4 0.08 20)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* cheeks */}
      <circle cx="116" cy="105" r="3" fill="oklch(0.78 0.16 20 / 0.4)" />
      <circle cx="144" cy="105" r="3" fill="oklch(0.78 0.16 20 / 0.4)" />

      {/* floating sparkles */}
      <circle cx="50" cy="60" r="2" fill="oklch(0.78 0.16 65)" />
      <circle cx="210" cy="50" r="2.5" fill="oklch(0.52 0.11 185)" />
      <circle cx="220" cy="120" r="1.8" fill="oklch(0.78 0.16 65)" />
      <circle cx="40" cy="130" r="1.8" fill="oklch(0.52 0.11 185)" />
    </svg>
  );
}
