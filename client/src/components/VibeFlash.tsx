/**
 * VibeFlash - "What vibe is it?" surprise overlay
 * 
 * Two triggers:
 * 1. Theme toggle: every time user switches light/dark, a dramatic flash + message
 * 2. Random surprise ("jack-in-the-box"): at random intervals (avg ~3-5 min),
 *    the screen flashes and the message appears unexpectedly
 * 
 * Design: Full-screen overlay with cinematic flash, glowing text, particle burst
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

/** Vibe messages — rotates through these for variety */
const VIBE_MESSAGES = [
  "What vibe is it?",
  "What vibe is it?",
  "What vibe is it?",
  "Vibe check! ✨",
  "It's vibe o'clock somewhere.",
  "Time is a vibe.",
  "New vibe unlocked.",
  "Vibes transcend time zones.",
];

/** Sub-messages that appear below the main text */
const SUB_MESSAGES = [
  "— Vibe O'Clock",
  "🌍 across all time zones",
  "⚡ powered by vibes",
  "✦ the clock never lies",
  "🎯 right here, right now",
  "🔮 the future is now",
];

function getRandomMessage() {
  return VIBE_MESSAGES[Math.floor(Math.random() * VIBE_MESSAGES.length)];
}

function getRandomSub() {
  return SUB_MESSAGES[Math.floor(Math.random() * SUB_MESSAGES.length)];
}

/** Particle burst effect */
function Particles({ isDark }: { isDark: boolean }) {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 600,
    y: (Math.random() - 0.5) * 400,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 0.3,
    duration: 0.8 + Math.random() * 0.6,
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: 0,
            scale: 1,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeOut",
          }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: isDark
              ? `oklch(0.78 0.12 ${60 + Math.random() * 50})`
              : `oklch(0.55 0.15 ${60 + Math.random() * 50})`,
            boxShadow: isDark
              ? `0 0 ${p.size * 2}px oklch(0.78 0.12 85 / 0.6)`
              : `0 0 ${p.size * 2}px oklch(0.55 0.15 85 / 0.4)`,
          }}
        />
      ))}
    </div>
  );
}

export default function VibeFlash() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("What vibe is it?");
  const [subMessage, setSubMessage] = useState("— Vibe O'Clock");
  const [flashType, setFlashType] = useState<"theme" | "surprise">("theme");
  const prevThemeRef = useRef(theme);
  const mountedRef = useRef(false);
  const surpriseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerFlash = useCallback((type: "theme" | "surprise") => {
    setMessage(getRandomMessage());
    setSubMessage(getRandomSub());
    setFlashType(type);
    setIsVisible(true);

    // Auto-dismiss after 2.5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  }, []);

  // Theme change trigger
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      prevThemeRef.current = theme;
      return;
    }

    if (prevThemeRef.current !== theme) {
      prevThemeRef.current = theme;
      triggerFlash("theme");
    }
  }, [theme, triggerFlash]);

  // Random surprise trigger ("jack-in-the-box")
  useEffect(() => {
    function scheduleNextSurprise() {
      // Random interval: 3-7 minutes (180,000 - 420,000 ms)
      const delay = 180_000 + Math.random() * 240_000;
      surpriseTimerRef.current = setTimeout(() => {
        triggerFlash("surprise");
        scheduleNextSurprise();
      }, delay);
    }

    scheduleNextSurprise();

    return () => {
      if (surpriseTimerRef.current) {
        clearTimeout(surpriseTimerRef.current);
      }
    };
  }, [triggerFlash]);

  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Flash overlay */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0.4, 0.15] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, times: [0, 0.08, 0.3, 1] }}
            style={{
              background: flashType === "theme"
                ? isDark
                  ? "radial-gradient(circle at center, oklch(0.88 0.14 85 / 0.5), oklch(0.18 0.03 265 / 0.8))"
                  : "radial-gradient(circle at center, oklch(0.95 0.08 85 / 0.6), oklch(0.98 0.01 85 / 0.9))"
                : isDark
                  ? "radial-gradient(circle at center, oklch(0.78 0.12 85 / 0.4), oklch(0.12 0.02 265 / 0.7))"
                  : "radial-gradient(circle at center, oklch(0.90 0.10 85 / 0.5), oklch(0.95 0.02 85 / 0.8))",
            }}
          />

          {/* Particle burst */}
          <Particles isDark={isDark} />

          {/* Concentric ring pulse */}
          <motion.div
            className="absolute rounded-full border-2"
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 600, height: 600, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              borderColor: isDark
                ? "oklch(0.78 0.12 85 / 0.4)"
                : "oklch(0.55 0.15 85 / 0.3)",
            }}
          />
          <motion.div
            className="absolute rounded-full border"
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: 400, height: 400, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            style={{
              borderColor: isDark
                ? "oklch(0.78 0.12 85 / 0.3)"
                : "oklch(0.55 0.15 85 / 0.2)",
            }}
          />

          {/* Main message */}
          <motion.div
            className="relative text-center z-10"
            initial={{ scale: 0.3, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.5, opacity: 0, y: -30 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              mass: 0.8,
            }}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.06em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: isDark ? "oklch(0.92 0.08 85)" : "oklch(0.25 0.08 85)",
                textShadow: isDark
                  ? "0 0 40px oklch(0.78 0.12 85 / 0.6), 0 0 80px oklch(0.78 0.12 85 / 0.3), 0 4px 20px rgba(0,0,0,0.5)"
                  : "0 0 30px oklch(0.78 0.12 85 / 0.3), 0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              {message}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 text-sm sm:text-base tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: isDark
                  ? "oklch(0.78 0.12 85 / 0.7)"
                  : "oklch(0.45 0.10 85 / 0.7)",
              }}
            >
              {subMessage}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="mx-auto mt-5"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              style={{
                height: 1,
                background: isDark
                  ? "linear-gradient(90deg, transparent, oklch(0.78 0.12 85 / 0.5), transparent)"
                  : "linear-gradient(90deg, transparent, oklch(0.55 0.15 85 / 0.4), transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
