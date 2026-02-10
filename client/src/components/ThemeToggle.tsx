/**
 * ThemeToggle - Observatory-styled theme switch
 * Design: Sun/Moon toggle with smooth transition
 */
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        size={14}
        className={`transition-all duration-300 ${
          isDark ? "text-muted-foreground scale-75" : "text-gold scale-100"
        }`}
        style={!isDark ? { color: "oklch(0.78 0.12 85)" } : {}}
      />
      <div
        className="w-7 h-4 rounded-full relative transition-colors duration-300"
        style={{
          backgroundColor: isDark ? "oklch(0.78 0.12 85 / 0.3)" : "oklch(0.78 0.12 85 / 0.2)",
        }}
      >
        <div
          className="absolute top-0.5 w-3 h-3 rounded-full transition-all duration-300 shadow-sm"
          style={{
            left: isDark ? "14px" : "2px",
            backgroundColor: "oklch(0.78 0.12 85)",
          }}
        />
      </div>
      <Moon
        size={14}
        className={`transition-all duration-300 ${
          isDark ? "text-gold scale-100" : "text-muted-foreground scale-75"
        }`}
        style={isDark ? { color: "oklch(0.78 0.12 85)" } : {}}
      />
    </button>
  );
}
