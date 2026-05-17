import { useEffect, useRef } from "react";

/**
 * Interactive constellation background:
 * - Slow-moving grid via CSS
 * - Floating particles that link with lines and react to mouse
 */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    const count = Math.min(90, Math.floor((width * height) / 18000));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6 || 0.3,
      vy: (Math.random() - 0.5) * 0.6 || 0.3,
      r: Math.random() * 1.6 + 0.6,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // mouse attraction (optional, additive only)
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 140 * 140 && d2 > 0) {
          const dist = Math.sqrt(d2);
          const f = (140 - dist) / 140;
          p.vx += (dx / dist) * f * 0.04;
          p.vy += (dy / dist) * f * 0.04;
        }
        p.x += p.vx;
        p.y += p.vy;

        // Keep speed alive — no damping below a floor so particles always drift
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const minSpeed = 0.25;
        if (speed < minSpeed) {
          const angle = Math.atan2(p.vy || (Math.random() - 0.5), p.vx || (Math.random() - 0.5));
          p.vx = Math.cos(angle) * minSpeed;
          p.vy = Math.sin(angle) * minSpeed;
        } else if (speed > 1.4) {
          p.vx *= 0.96;
          p.vy *= 0.96;
        }

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > height) { p.y = height; p.vy *= -1; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(220, 130, 240, 0.75)";
        ctx.fill();
      }

      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 150, 210, ${(1 - dist / 120) * 0.3})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Animated SVG grid */}
      <div
        className="absolute inset-0 opacity-[0.18] animate-grid-pan"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-primary/10 blur-3xl" />
      {/* Constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
