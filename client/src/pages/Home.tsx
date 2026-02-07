/**
 * Home - Main observatory dashboard page
 * Design: Horizontal scrolling city panels with observatory aesthetic
 * Layout: Header + hero + horizontally scrollable city cards
 * Mobile-first: vertical stack on mobile, horizontal scroll on desktop
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import CityCard from "@/components/CityCard";
import { cities } from "@/lib/cityData";

const HERO_DARK = "https://private-us-east-1.manuscdn.com/sessionFile/Ytf6nBhd7ERs5uIRdKCdGL/sandbox/XKXIIZumHQ7YOxg6AP8n2y-img-1_1770433490000_na1fn_aGVyby1iZy1kYXJr.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWXRmNm5CaGQ3RVJzNXVJUmRLQ2RHTC9zYW5kYm94L1hLWElJWnVtSFE3WU94ZzZBUDhuMnktaW1nLTFfMTc3MDQzMzQ5MDAwMF9uYTFmbl9hR1Z5YnkxaVp5MWtZWEpyLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NLYK9NKYhXDqsxNzItXfzCXiQQK046n9gn193kcwteXm0Cj-XnlN1wSzOfDA3SSYPK1VNOwPXcA4r7AcpXWss9uyRXlwZrbIxbcjG1fjYKpuVuq81SOgUINrg8Vp8BgE5vhXi7s2sr8uW~pTiP-vBspw4gXt12BE-ikEDcZWYEkhx6AOP0VDgAbNoYC-pFmlH1-wxJ0fFms8sFhMvY6SyKx~tY9QIsH7tzDh7qix3gXKitz~BVj74WCYIqWNRmdaJ2e~JVGkUFrWNX89Oet70nbq8snAw1ihMFQKlpldtqabTpXcKRKgt6KjNq7oZA5BWTfj6DGSxgOnnP7hSWSZQw__";

const HERO_LIGHT = "https://private-us-east-1.manuscdn.com/sessionFile/Ytf6nBhd7ERs5uIRdKCdGL/sandbox/XKXIIZumHQ7YOxg6AP8n2y-img-2_1770433485000_na1fn_aGVyby1iZy1saWdodA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWXRmNm5CaGQ3RVJzNXVJUmRLQ2RHTC9zYW5kYm94L1hLWElJWnVtSFE3WU94ZzZBUDhuMnktaW1nLTJfMTc3MDQzMzQ4NTAwMF9uYTFmbl9hR1Z5YnkxaVp5MXNhV2RvZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AOA-P4wja7DpREDXqsPXpT9dEfLYthW5-aGV5t9pG3pV6KDQ4Z5LcGpPg4W58Yy1PAYlSSsc5ETEsoZAJWUCNsziCNGV~O3NtPQf-2CD~aDVjViUtq57MbLhzZKDpwnr4s5x-vtyiWb-YsEcmqaNsTgBqjBdVf5TZ57b-kPQKvMbF56x5nuRlZQWI1smrMW4deMe1nrkxohF0fEDgBRwzPEbvaHsvzcasfaPoNgKSELeKeXk4mlAMoCyh59VFq7PLEYEMrrrJjnEFnS1dyGMfqJe754ueuMShQ4pvqIVj95WZgScq5LSkr9QHTCXh78NhH-yTSpBBQov-NMBCJiLlw__";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="relative w-full h-28 sm:h-36 lg:h-40 overflow-hidden">
        <img
          src={isDark ? HERO_DARK : HERO_LIGHT}
          alt="Observatory"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />

        {/* Hero text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock size={14} className="text-white/70" />
              <p
                className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-white/80"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  textShadow: "0 2px 15px rgba(0,0,0,0.7)",
                }}
              >
                Observing 6 Cities Across Time Zones
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint for desktop */}
      <div className="hidden lg:flex items-center justify-end px-6 py-2 gap-1.5 text-muted-foreground">
        <span className="text-[10px] tracking-wider uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
          横にスクロール
        </span>
        <ArrowRight size={12} className="animate-pulse" />
      </div>

      {/* City Cards */}
      <main className="flex-1 px-3 sm:px-4 lg:px-6 pb-4 sm:pb-6">
        {/* Desktop: horizontal scroll */}
        <div className="hidden lg:block overflow-x-auto custom-scrollbar pb-4">
          <div className="flex gap-5" style={{ width: "max-content" }}>
            {cities.map((city, index) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[290px] flex-shrink-0"
              >
                <CityCard city={city} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet: 2-3 columns grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <CityCard city={city} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="sm:hidden space-y-4">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.06,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <CityCard city={city} />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-4 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Shin World Clock Observatory
          </p>
          <p
            className="text-[10px] text-muted-foreground tracking-wider"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            All times are live · Data is approximate
          </p>
        </div>
      </footer>
    </div>
  );
}
