/**
 * AnalogClock - SVG-based analog clock with observatory aesthetic
 * Design: Precision instrument with glow effects, metallic hands
 * Smooth second hand rotation via requestAnimationFrame
 */
import { useEffect, useRef, useState } from "react";

interface AnalogClockProps {
  timezone: string;
  accentColor: string;
  size?: number;
}

export default function AnalogClock({ timezone, accentColor, size = 140 }: AnalogClockProps) {
  const [time, setTime] = useState(() => getTimeInTimezone(timezone));
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      setTime(getTimeInTimezone(timezone));
      rafRef.current = requestAnimationFrame(update);
    };
    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, [timezone]);

  const { hours, minutes, seconds, milliseconds } = time;
  const smoothSeconds = seconds + milliseconds / 1000;
  const smoothMinutes = minutes + smoothSeconds / 60;
  const smoothHours = (hours % 12) + smoothMinutes / 60;

  const secondAngle = smoothSeconds * 6;
  const minuteAngle = smoothMinutes * 6;
  const hourAngle = smoothHours * 30;

  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 10;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="drop-shadow-lg"
    >
      <defs>
        {/* Glow filter for accent elements */}
        <filter id={`glow-${timezone.replace(/\//g, '-')}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Radial gradient for face */}
        <radialGradient id={`face-${timezone.replace(/\//g, '-')}`}>
          <stop offset="0%" className="[stop-color:var(--card)]" stopOpacity="1" />
          <stop offset="85%" className="[stop-color:var(--card)]" stopOpacity="1" />
          <stop offset="100%" className="[stop-color:var(--muted)]" stopOpacity="0.5" />
        </radialGradient>
      </defs>

      {/* Outer decorative ring */}
      <circle
        cx={cx}
        cy={cy}
        r={r + 6}
        fill="none"
        stroke={accentColor}
        strokeWidth="0.5"
        opacity="0.2"
      />

      {/* Main bezel ring */}
      <circle
        cx={cx}
        cy={cy}
        r={r + 3}
        fill="none"
        className="stroke-border"
        strokeWidth="1.5"
      />

      {/* Clock face background */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={`url(#face-${timezone.replace(/\//g, '-')})`}
      />

      {/* Inner ring */}
      <circle
        cx={cx}
        cy={cy}
        r={r - 1}
        fill="none"
        className="stroke-border"
        strokeWidth="0.3"
        opacity="0.5"
      />

      {/* Hour numbers (12, 3, 6, 9) */}
      {[12, 3, 6, 9].map((num) => {
        const angle = ((num * 30) - 90) * (Math.PI / 180);
        const numR = r - 20;
        return (
          <text
            key={num}
            x={cx + Math.cos(angle) * numR}
            y={cy + Math.sin(angle) * numR}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-foreground"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "11px",
              fontWeight: 600,
            }}
            opacity="0.7"
          >
            {num}
          </text>
        );
      })}

      {/* Hour markers */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const isMain = i % 3 === 0;
        const outerR = r - 3;
        const innerR = isMain ? r - 12 : r - 8;
        return (
          <line
            key={i}
            x1={cx + Math.cos(angle) * innerR}
            y1={cy + Math.sin(angle) * innerR}
            x2={cx + Math.cos(angle) * outerR}
            y2={cy + Math.sin(angle) * outerR}
            stroke={isMain ? accentColor : "currentColor"}
            strokeWidth={isMain ? 2 : 1}
            className={isMain ? "" : "text-muted-foreground"}
            opacity={isMain ? 0.8 : 0.4}
            strokeLinecap="round"
          />
        );
      })}

      {/* Minute tick marks */}
      {Array.from({ length: 60 }, (_, i) => {
        if (i % 5 === 0) return null;
        const angle = (i * 6 - 90) * (Math.PI / 180);
        const outerR = r - 3;
        const innerR = r - 6;
        return (
          <line
            key={`m-${i}`}
            x1={cx + Math.cos(angle) * innerR}
            y1={cy + Math.sin(angle) * innerR}
            x2={cx + Math.cos(angle) * outerR}
            y2={cy + Math.sin(angle) * outerR}
            className="text-muted-foreground"
            stroke="currentColor"
            strokeWidth={0.4}
            opacity={0.25}
          />
        );
      })}

      {/* Hour hand - thick, tapered */}
      <line
        x1={cx - Math.cos((hourAngle - 90) * (Math.PI / 180)) * 8}
        y1={cy - Math.sin((hourAngle - 90) * (Math.PI / 180)) * 8}
        x2={cx + Math.cos((hourAngle - 90) * (Math.PI / 180)) * (r * 0.48)}
        y2={cy + Math.sin((hourAngle - 90) * (Math.PI / 180)) * (r * 0.48)}
        className="stroke-foreground"
        strokeWidth={3.5}
        strokeLinecap="round"
      />

      {/* Minute hand - medium */}
      <line
        x1={cx - Math.cos((minuteAngle - 90) * (Math.PI / 180)) * 8}
        y1={cy - Math.sin((minuteAngle - 90) * (Math.PI / 180)) * 8}
        x2={cx + Math.cos((minuteAngle - 90) * (Math.PI / 180)) * (r * 0.68)}
        y2={cy + Math.sin((minuteAngle - 90) * (Math.PI / 180)) * (r * 0.68)}
        className="stroke-foreground"
        strokeWidth={2.2}
        strokeLinecap="round"
      />

      {/* Second hand - thin with accent color and glow */}
      <line
        x1={cx - Math.cos((secondAngle - 90) * (Math.PI / 180)) * (r * 0.18)}
        y1={cy - Math.sin((secondAngle - 90) * (Math.PI / 180)) * (r * 0.18)}
        x2={cx + Math.cos((secondAngle - 90) * (Math.PI / 180)) * (r * 0.78)}
        y2={cy + Math.sin((secondAngle - 90) * (Math.PI / 180)) * (r * 0.78)}
        stroke={accentColor}
        strokeWidth={1}
        strokeLinecap="round"
        filter={`url(#glow-${timezone.replace(/\//g, '-')})`}
      />

      {/* Center hub */}
      <circle cx={cx} cy={cy} r={4} fill={accentColor} />
      <circle cx={cx} cy={cy} r={2} className="fill-card" />
      <circle cx={cx} cy={cy} r={1} fill={accentColor} opacity="0.6" />
    </svg>
  );
}

function getTimeInTimezone(timezone: string) {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
  const parts = formatter.formatToParts(now);
  const hours = parseInt(parts.find(p => p.type === "hour")?.value || "0");
  const minutes = parseInt(parts.find(p => p.type === "minute")?.value || "0");
  const seconds = parseInt(parts.find(p => p.type === "second")?.value || "0");
  const milliseconds = now.getMilliseconds();
  return { hours, minutes, seconds, milliseconds };
}
