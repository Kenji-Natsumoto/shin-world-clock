/**
 * useCitySelection - Custom hook for managing selected cities
 * Features: add/remove/reorder cities, persist to localStorage
 */
import { useState, useEffect, useCallback } from "react";
import { allCities, DEFAULT_CITY_IDS, getAccentColor } from "@/lib/cityData";
import type { CityInfo } from "@/lib/cityData";

const STORAGE_KEY = "vibe-o-clock-cities";

export function useCitySelection() {
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Validate that all IDs exist
          const valid = parsed.filter((id: string) => allCities.some(c => c.id === id));
          if (valid.length > 0) return valid;
        }
      }
    } catch {
      // ignore
    }
    return DEFAULT_CITY_IDS;
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds));
  }, [selectedIds]);

  // Get full city objects with dynamic accent colors
  const selectedCities: CityInfo[] = selectedIds
    .map((id, index) => {
      const city = allCities.find(c => c.id === id);
      if (!city) return null;
      return { ...city, accentColor: getAccentColor(index) };
    })
    .filter((c): c is CityInfo => c !== null);

  const addCity = useCallback((cityId: string) => {
    setSelectedIds(prev => {
      if (prev.includes(cityId)) return prev;
      return [...prev, cityId];
    });
  }, []);

  const removeCity = useCallback((cityId: string) => {
    setSelectedIds(prev => prev.filter(id => id !== cityId));
  }, []);

  const moveCity = useCallback((fromIndex: number, toIndex: number) => {
    setSelectedIds(prev => {
      const next = [...prev];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  }, []);

  const resetToDefault = useCallback(() => {
    setSelectedIds(DEFAULT_CITY_IDS);
  }, []);

  const isSelected = useCallback((cityId: string) => {
    return selectedIds.includes(cityId);
  }, [selectedIds]);

  return {
    selectedCities,
    selectedIds,
    addCity,
    removeCity,
    moveCity,
    resetToDefault,
    isSelected,
  };
}
