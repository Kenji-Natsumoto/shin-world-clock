/**
 * CityCard - Main city observation panel
 * Design: Observatory instrument panel with glow accents, refined depth
 * Contains: analog clock, digital clock, city stats, news ticker, map link
 */
import { useState, useEffect } from "react";
import { MapPin, ExternalLink, Users, Briefcase, AlertTriangle, Newspaper, ChevronRight, Compass } from "lucide-react";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import type { CityInfo } from "@/lib/cityData";

interface CityCardProps {
  city: CityInfo;
}

export default function CityCard({ city }: CityCardProps) {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [newsTransition, setNewsTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsTransition(true);
      setTimeout(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % city.news.length);
        setNewsTransition(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, [city.news.length]);

  const googleMapsUrl = `https://www.google.com/maps/@${city.lat},${city.lng},12z`;

  return (
    <div
      className="flex flex-col h-full rounded-lg border overflow-hidden transition-all duration-500 hover:scale-[1.01] group"
      style={{
        borderColor: `color-mix(in oklch, ${city.accentColor} 20%, var(--border))`,
        boxShadow: `0 0 20px color-mix(in oklch, ${city.accentColor} 8%, transparent), 0 4px 20px rgba(0,0,0,0.1)`,
      }}
    >
      {/* Card inner with subtle gradient bg */}
      <div
        className="flex flex-col h-full"
        style={{
          background: `linear-gradient(180deg, var(--card) 0%, color-mix(in oklch, ${city.accentColor} 3%, var(--card)) 100%)`,
        }}
      >
        {/* Header: City name + flag + live indicator */}
        <div
          className="px-4 pt-4 pb-3"
          style={{
            borderBottom: `1px solid color-mix(in oklch, ${city.accentColor} 15%, var(--border))`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">{city.flag}</span>
              <div>
                <h2
                  className="text-xl font-bold tracking-wide text-foreground"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {city.nameJa}
                </h2>
                <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {city.nameEn} · {city.utcOffset}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: city.accentColor,
                  boxShadow: `0 0 6px ${city.accentColor}`,
                }}
              />
              <span className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                Live
              </span>
            </div>
          </div>
        </div>

        {/* Clock Section */}
        <div
          className="px-4 py-5 flex flex-col items-center gap-4"
          style={{
            borderBottom: `1px solid color-mix(in oklch, ${city.accentColor} 10%, var(--border))`,
          }}
        >
          <AnalogClock timezone={city.timezone} accentColor={city.accentColor} size={140} />
          <DigitalClock timezone={city.timezone} accentColor={city.accentColor} />
        </div>

        {/* City Stats */}
        <div
          className="px-4 py-3 space-y-2.5 text-xs"
          style={{
            borderBottom: `1px solid color-mix(in oklch, ${city.accentColor} 10%, var(--border))`,
          }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={12} style={{ color: city.accentColor }} className="flex-shrink-0" />
            <span style={{ fontFamily: "'DM Mono', monospace" }}>{city.area} km²</span>
            <span className="opacity-30 mx-0.5">|</span>
            <span className="text-[11px]">{city.countryJa}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users size={12} style={{ color: city.accentColor }} className="flex-shrink-0" />
            <span>総人口</span>
            <span className="font-medium text-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{city.population}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase size={12} style={{ color: city.accentColor }} className="flex-shrink-0" />
            <span>労働人口</span>
            <span className="font-medium text-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{city.laborForce}</span>
          </div>
          <div className="flex items-start gap-2 text-muted-foreground">
            <AlertTriangle size={12} className="mt-0.5 flex-shrink-0" style={{ color: city.accentColor }} />
            <span className="text-[11px] leading-relaxed">{city.challenge}</span>
          </div>
        </div>

        {/* News Section */}
        <div
          className="px-4 py-3 min-h-[80px]"
          style={{
            borderBottom: `1px solid color-mix(in oklch, ${city.accentColor} 10%, var(--border))`,
          }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Newspaper size={11} style={{ color: city.accentColor }} />
            <span
              className="text-[9px] text-muted-foreground tracking-[0.15em] uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              News
            </span>
          </div>
          <div className="overflow-hidden relative h-[38px]">
            <p
              className={`text-[11px] leading-[19px] line-clamp-2 text-card-foreground transition-all duration-400 ${
                newsTransition ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              <ChevronRight
                size={11}
                className="inline mr-0.5 -mt-0.5"
                style={{ color: city.accentColor }}
              />
              {city.news[currentNewsIndex]}
            </p>
          </div>
          <div className="flex gap-1.5 mt-2 justify-center">
            {city.news.map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentNewsIndex ? "12px" : "4px",
                  height: "4px",
                  backgroundColor: i === currentNewsIndex ? city.accentColor : "var(--muted-foreground)",
                  opacity: i === currentNewsIndex ? 1 : 0.3,
                }}
              />
            ))}
          </div>
        </div>

        {/* Google Maps Link */}
        <div className="px-4 py-3 mt-auto">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-xs font-medium transition-all duration-300 border bg-secondary/30 hover:bg-secondary/60 text-foreground group/btn"
            style={{
              borderColor: `color-mix(in oklch, ${city.accentColor} 20%, var(--border))`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `color-mix(in oklch, ${city.accentColor} 50%, var(--border))`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px color-mix(in oklch, ${city.accentColor} 15%, transparent)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `color-mix(in oklch, ${city.accentColor} 20%, var(--border))`;
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <Compass size={14} style={{ color: city.accentColor }} className="group-hover/btn:animate-spin" />
            <span>Google マップで見る</span>
            <ExternalLink size={11} className="opacity-40 group-hover/btn:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}
