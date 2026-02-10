/**
 * Home - Main observatory dashboard page
 * Design: Horizontal scrolling city panels with observatory aesthetic
 * Layout: Header + hero + horizontally scrollable city cards
 * Mobile-first: vertical stack on mobile, horizontal scroll on desktop
 * Features: customizable city selection, add/remove/reorder
 */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Plus, Settings2 } from "lucide-react";
import Header from "@/components/Header";
import CityCard from "@/components/CityCard";
import CitySelector from "@/components/CitySelector";
import { useCitySelection } from "@/hooks/useCitySelection";

const HERO_DARK = "https://private-us-east-1.manuscdn.com/sessionFile/Ytf6nBhd7ERs5uIRdKCdGL/sandbox/XKXIIZumHQ7YOxg6AP8n2y-img-1_1770433490000_na1fn_aGVyby1iZy1kYXJr.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWXRmNm5CaGQ3RVJzNXVJUmRLQ2RHTC9zYW5kYm94L1hLWElJWnVtSFE3WU94ZzZBUDhuMnktaW1nLTFfMTc3MDQzMzQ5MDAwMF9uYTFmbl9hR1Z5YnkxaVp5MWtZWEpyLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NLYK9NKYhXDqsxNzItXfzCXiQQK046n9gn193kcwteXm0Cj-XnlN1wSzOfDA3SSYPK1VNOwPXcA4r7AcpXWss9uyRXlwZrbIxbcjG1fjYKpuVuq81SOgUINrg8Vp8BgE5vhXi7s2sr8uW~pTiP-vBspw4gXt12BE-ikEDcZWYEkhx6AOP0VDgAbNoYC-pFmlH1-wxJ0fFms8sFhMvY6SyKx~tY9QIsH7tzDh7qix3gXKitz~BVj74WCYIqWNRmdaJ2e~JVGkUFrWNX89Oet70nbq8snAw1ihMFQKlpldtqabTpXcKRKgt6KjNq7oZA5BWTfj6DGSxgOnnP7hSWSZQw__";

const HERO_LIGHT = "https://private-us-east-1.manuscdn.com/sessionFile/Ytf6nBhd7ERs5uIRdKCdGL/sandbox/XKXIIZumHQ7YOxg6AP8n2y-img-2_1770433485000_na1fn_aGVyby1iZy1saWdodA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWXRmNm5CaGQ3RVJzNXVJUmRLQ2RHTC9zYW5kYm94L1hLWElJWnVtSFE3WU94ZzZBUDhuMnktaW1nLTJfMTc3MDQzMzQ4NTAwMF9uYTFmbl9hR1Z5YnkxaVp5MXNhV2RvZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AOA-P4wja7DpREDXqsPXpT9dEfLYthW5-aGV5t9pG3pV6KDQ4Z5LcGpPg4W58Yy1PAYlSSsc5ETEsoZAJWUCNsziCNGV~O3NtPQf-2CD~aDVjViUtq57MbLhzZKDpwnr4s5x-vtyiWb-YsEcmqaNsTgBqjBdVf5TZ57b-kPQKvMbF56x5nuRlZQWI1smrMW4deMe1nrkxohF0fEDgBRwzPEbvaHsvzcasfaPoNgKSELeKeXk4mlAMoCyh59VFq7PLEYEMrrrJjnEFnS1dyGMfqJe754ueuMShQ4pvqIVj95WZgScq5LSkr9QHTCXh78NhH-yTSpBBQov-NMBCJiLlw__";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const { selectedCities, addCity, removeCity, resetToDefault, isSelected } = useCitySelection();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  const cityCount = selectedCities.length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="relative w-full h-24 sm:h-32 lg:h-36 overflow-hidden">
        <img
          src={isDark ? HERO_DARK : HERO_LIGHT}
          alt="Observatory"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />

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
                Observing {cityCount} {cityCount === 1 ? "City" : "Cities"} Across Time Zones
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toolbar: scroll hint + city management buttons */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectorOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium border border-border/60 bg-secondary/30 hover:bg-secondary/60 text-foreground transition-all"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <Settings2 size={13} style={{ color: "oklch(0.78 0.12 85)" }} />
            Edit Cities
          </button>
          <span className="text-[10px] text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
            Showing {cityCount} {cityCount === 1 ? "city" : "cities"}
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-1.5 text-muted-foreground">
          <span className="text-[10px] tracking-wider uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
            Scroll horizontally
          </span>
          <ArrowRight size={12} className="animate-pulse" />
        </div>
      </div>

      {/* City Cards */}
      <main className="flex-1 px-3 sm:px-4 lg:px-6 pb-4 sm:pb-6">
        {selectedCities.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed border-border"
            >
              <Clock size={24} className="text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-sm">No cities to display</p>
            <button
              onClick={() => setSelectorOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-white"
              style={{
                background: "oklch(0.78 0.12 85)",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              <Plus size={15} />
              Add a City
            </button>
          </div>
        ) : (
          <>
            {/* Desktop: horizontal scroll */}
            <div className="hidden lg:block overflow-x-auto custom-scrollbar pb-4">
              <div className="flex gap-5" style={{ width: "max-content" }}>
                <AnimatePresence mode="popLayout">
                  {selectedCities.map((city, index) => (
                    <motion.div
                      key={city.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="w-[290px] flex-shrink-0"
                    >
                      <CityCard city={city} onRemove={() => removeCity(city.id)} />
                    </motion.div>
                  ))}
                </AnimatePresence>
                {/* Add city card */}
                <motion.div
                  layout
                  className="w-[290px] flex-shrink-0"
                >
                  <button
                    onClick={() => setSelectorOpen(true)}
                    className="w-full h-full min-h-[400px] rounded-lg border-2 border-dashed border-border/50 hover:border-border flex flex-col items-center justify-center gap-3 transition-all hover:bg-secondary/20 group"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border border-border/60 group-hover:border-border transition-colors"
                      style={{
                        background: "color-mix(in oklch, oklch(0.78 0.12 85) 8%, transparent)",
                      }}
                    >
                      <Plus size={20} style={{ color: "oklch(0.78 0.12 85)" }} />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      Add City
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Tablet: 2-3 columns grid */}
            <div className="hidden sm:grid lg:hidden grid-cols-2 md:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {selectedCities.map((city, index) => (
                  <motion.div
                    key={city.id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <CityCard city={city} onRemove={() => removeCity(city.id)} />
                  </motion.div>
                ))}
              </AnimatePresence>
              <button
                onClick={() => setSelectorOpen(true)}
                className="min-h-[300px] rounded-lg border-2 border-dashed border-border/50 hover:border-border flex flex-col items-center justify-center gap-3 transition-all hover:bg-secondary/20"
              >
                <Plus size={20} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Add City</span>
              </button>
            </div>

            {/* Mobile: vertical stack */}
            <div className="sm:hidden space-y-4">
              <AnimatePresence mode="popLayout">
                {selectedCities.map((city, index) => (
                  <motion.div
                    key={city.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <CityCard city={city} onRemove={() => removeCity(city.id)} />
                  </motion.div>
                ))}
              </AnimatePresence>
              <button
                onClick={() => setSelectorOpen(true)}
                className="w-full py-6 rounded-lg border-2 border-dashed border-border/50 hover:border-border flex items-center justify-center gap-2 transition-all hover:bg-secondary/20"
              >
                <Plus size={16} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Add City</span>
              </button>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-4 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Shin World Clock — Global Time Observatory
          </p>
          <p
            className="text-[10px] text-muted-foreground tracking-wider"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            All times are live · Data is approximate
          </p>
        </div>
      </footer>

      {/* City Selector Modal */}
      <CitySelector
        isOpen={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        onAddCity={addCity}
        onRemoveCity={removeCity}
        isSelected={isSelected}
        onReset={resetToDefault}
      />
    </div>
  );
}
