import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        arc: "hsl(var(--arc))",
        "arc-glow": "hsl(var(--arc-glow))",
        "arc-mid": "hsl(var(--arc-mid))",
        "arc-dim": "hsl(var(--arc-dim))",
        "stark-red": "hsl(var(--stark-red))",
        "stark-gold": "hsl(var(--stark-gold))",
        "stark-gold-bright": "hsl(var(--stark-gold-bright))",
        "text-dim": "hsl(var(--text-dim))",
        "green-status": "hsl(var(--green-status))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "arc-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.3)", opacity: "0.6" },
        },
        "scan-line": {
          "0%": { top: "0", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "grid-drift": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "60px 60px" },
        },
        "helmet-float": {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(12px) rotate(1deg)" },
        },
        "reactor-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "blink-status": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "boot-load": {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "flicker": {
          "0%, 100%": { opacity: "0" },
          "20%": { opacity: "0.2" },
          "40%": { opacity: "0" },
          "60%": { opacity: "0.6" },
          "80%": { opacity: "0.3" },
        },
        "power-up": {
          from: { filter: "brightness(0.5)" },
          to: { filter: "brightness(1.6)" },
        },
        "core-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        "repulsor-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.25)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "arc-pulse": "arc-pulse 2s ease-in-out infinite",
        "scan-line": "scan-line 3s ease-in-out infinite",
        "grid-drift": "grid-drift 25s linear infinite",
        "helmet-float": "helmet-float 6s ease-in-out infinite",
        "reactor-spin": "reactor-spin 8s linear infinite",
        "blink-status": "blink-status 1.5s ease-in-out infinite",
        "boot-load": "boot-load 2.8s ease-out forwards",
        "flicker": "flicker 1.2s ease-in-out",
        "power-up": "power-up 1.5s ease-out forwards",
        "core-pulse": "core-pulse 1.5s infinite",
        "repulsor-pulse": "repulsor-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
