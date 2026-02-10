/**
 * DigitalClock - Monospace digital time display with observatory aesthetic
 * Design: Precision instrument readout with glow effect
 * Shows time in HH:MM:SS format with date below
 */
import { useEffect, useState } from "react";

interface DigitalClockProps {
  timezone: string;
  accentColor: string;
}

export default function DigitalClock({ timezone, accentColor }: DigitalClockProps) {
  const [time, setTime] = useState(() => getFormattedTime(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime(timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="text-center">
      <div
        className="text-2xl sm:text-[28px] font-medium tracking-[0.12em] glow-text"
        style={{
          fontFamily: "'DM Mono', monospace",
          color: accentColor,
        }}
      >
        {time.time}
      </div>
      <div
        className="text-[10px] text-muted-foreground mt-1.5 tracking-[0.1em]"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {time.date}
      </div>
      {/* Day/Night indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-1">
        <span className="text-[9px]">{time.isDay ? "☀️" : "🌙"}</span>
        <span
          className="text-[9px] text-muted-foreground tracking-wider uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {time.isDay ? "Day" : "Night"}
        </span>
      </div>
    </div>
  );
}

function getFormattedTime(timezone: string) {
  const now = new Date();

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
  });

  const hourFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    hour12: false,
  });
  const hour = parseInt(hourFormatter.format(now));
  const isDay = hour >= 6 && hour < 18;

  return {
    time: timeFormatter.format(now),
    date: dateFormatter.format(now),
    isDay,
  };
}
