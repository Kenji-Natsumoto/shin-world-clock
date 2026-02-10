/**
 * Header - Observatory-styled top navigation
 * Design: Thin elegant bar with title, subtitle, and theme toggle
 * Sticky with backdrop blur
 */
import { Globe } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center border glow-gold"
            style={{
              borderColor: "oklch(0.78 0.12 85 / 0.3)",
              background: "radial-gradient(circle, oklch(0.78 0.12 85 / 0.12), transparent)",
            }}
          >
            <Globe size={17} style={{ color: "oklch(0.78 0.12 85)" }} />
          </div>
          <div>
            <h1
              className="text-lg sm:text-xl font-bold tracking-[0.08em] text-foreground"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vibe O'Clock
            </h1>
            <p
              className="text-[8px] sm:text-[9px] text-muted-foreground tracking-[0.25em] uppercase hidden sm:block"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Global Time Observatory
            </p>
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
