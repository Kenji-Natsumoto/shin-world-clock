/**
 * CitySelector - Modal dialog for searching and adding cities
 * Design: Observatory aesthetic with search input and region-based browsing
 * Features: text search, region filter, add/remove toggle
 */
import { useState, useMemo } from "react";
import { Search, Plus, Check, X, Globe2, RotateCcw } from "lucide-react";
import { allCities, searchCities } from "@/lib/cityData";
import type { CityInfo } from "@/lib/cityData";

interface CitySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCity: (cityId: string) => void;
  onRemoveCity: (cityId: string) => void;
  isSelected: (cityId: string) => boolean;
  onReset: () => void;
}

type Region = "all" | "asia" | "europe" | "americas" | "oceania" | "africa" | "middle_east";

const REGIONS: { key: Region; label: string }[] = [
  { key: "all", label: "All" },
  { key: "asia", label: "Asia" },
  { key: "europe", label: "Europe" },
  { key: "americas", label: "Americas" },
  { key: "middle_east", label: "Middle East" },
  { key: "oceania", label: "Oceania" },
  { key: "africa", label: "Africa" },
];

function getRegion(city: CityInfo): Region {
  const tz = city.timezone;
  if (tz.startsWith("Asia/Dubai") || tz.startsWith("Europe/Istanbul")) return "middle_east";
  if (tz.startsWith("Asia/")) return "asia";
  if (tz.startsWith("Europe/")) return "europe";
  if (tz.startsWith("America/") || tz.startsWith("Pacific/Honolulu")) return "americas";
  if (tz.startsWith("Australia/") || tz.startsWith("Pacific/")) return "oceania";
  if (tz.startsWith("Africa/")) return "africa";
  return "asia";
}

export default function CitySelector({
  isOpen,
  onClose,
  onAddCity,
  onRemoveCity,
  isSelected,
  onReset,
}: CitySelectorProps) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Region>("all");

  const filteredCities = useMemo(() => {
    let results: CityInfo[];
    if (query.trim()) {
      results = searchCities(query);
    } else {
      results = [...allCities];
    }
    if (region !== "all") {
      results = results.filter(c => getRegion(c) === region);
    }
    // Sort: selected first, then alphabetical
    results.sort((a, b) => {
      const aSelected = isSelected(a.id) ? 0 : 1;
      const bSelected = isSelected(b.id) ? 0 : 1;
      if (aSelected !== bSelected) return aSelected - bSelected;
      return a.name.localeCompare(b.name, "en");
    });
    return results;
  }, [query, region, isSelected]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        className="relative w-full sm:w-[520px] max-h-[85vh] sm:max-h-[75vh] bg-card border border-border rounded-t-2xl sm:rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300"
        style={{
          boxShadow: "0 0 40px oklch(0.78 0.12 85 / 0.08), 0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <div className="flex items-center gap-2.5">
            <Globe2 size={18} style={{ color: "oklch(0.78 0.12 85)" }} />
            <h2
              className="text-lg font-bold text-foreground tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Select Cities
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              style={{ fontFamily: "'DM Mono', monospace" }}
              title="Reset to defaults"
            >
              <RotateCcw size={11} />
              Reset
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="px-5 pb-3">
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city or country name..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
              autoFocus
            />
          </div>
        </div>

        {/* Region filter tabs */}
        <div className="px-5 pb-3 overflow-x-auto">
          <div className="flex gap-1.5" style={{ width: "max-content" }}>
            {REGIONS.map((r) => (
              <button
                key={r.key}
                onClick={() => setRegion(r.key)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all whitespace-nowrap ${
                  region === r.key
                    ? "text-primary-foreground"
                    : "bg-secondary/40 text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                }`}
                style={
                  region === r.key
                    ? {
                        background: "oklch(0.78 0.12 85)",
                        color: "oklch(0.12 0.03 265)",
                        fontFamily: "'DM Mono', monospace",
                      }
                    : { fontFamily: "'DM Mono', monospace" }
                }
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* City list */}
        <div className="flex-1 overflow-y-auto px-5 pb-5">
          <div className="space-y-1.5">
            {filteredCities.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No matching cities found
              </div>
            )}
            {filteredCities.map((city) => {
              const selected = isSelected(city.id);
              return (
                <button
                  key={city.id}
                  onClick={() => {
                    if (selected) {
                      onRemoveCity(city.id);
                    } else {
                      onAddCity(city.id);
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-lg transition-all text-left group ${
                    selected
                      ? "bg-secondary/60 border border-border/80"
                      : "hover:bg-secondary/40 border border-transparent"
                  }`}
                >
                  <span className="text-lg flex-shrink-0">{city.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground truncate">
                        {city.name}
                      </span>
                      <span
                        className="text-[10px] text-muted-foreground tracking-wider"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {city.utcOffset}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {city.country}
                    </p>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      selected
                        ? "text-white"
                        : "border border-border/60 text-muted-foreground group-hover:border-border"
                    }`}
                    style={
                      selected
                        ? {
                            background: "oklch(0.78 0.12 85)",
                          }
                        : {}
                    }
                  >
                    {selected ? <Check size={14} /> : <Plus size={14} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
