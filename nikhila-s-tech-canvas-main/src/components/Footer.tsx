import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="font-script text-4xl text-primary">Nikhila</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Building smart digital solutions with creativity, code, and innovation.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-display text-lg mb-3">Information</h4>
          <p className="text-muted-foreground">Chennai, India</p>
          <a href="mailto:poolanikhila2604@gmail.com" className="block mt-1 hover:text-primary">
            poolanikhila2604@gmail.com
          </a>
          <a href="tel:+919908462604" className="block hover:text-primary">
            +91 99084 62604
          </a>
        </div>
        <div className="text-sm flex flex-col gap-1">
          <h4 className="font-display text-lg mb-3">Navigate</h4>
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/projects", "Works"],
            ["/experience", "Experience"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <Link key={to} to={to} className="text-muted-foreground hover:text-primary w-fit">
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-wrap justify-between text-xs text-muted-foreground">
          <span className="font-script text-xl text-foreground">Nikhila</span>
          <span>© 2025. All Rights Reserved.</span>
          <span>Designed & Built with ♥</span>
        </div>
      </div>
    </footer>
  );
}
