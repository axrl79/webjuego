import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Colores bolivianos personalizados
        bolivia: {
          red: "#CE1126",
          yellow: "#FFD100",
          green: "#007934",
        },
        abyss: {
          dark: "#0A0A0A",
          red: "#8B0000",
          gray: "#1A1A1A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "road-movement": "roadMovement 8s linear infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        lightning: "lightning 10s ease-in-out infinite",
        "sinister-glow": "sinisterGlow 3s ease-in-out infinite alternate",
        "abyss-glow": "abyssGlow 2.5s ease-in-out infinite alternate",
        "sinister-button": "sinisterButton 2s ease-in-out infinite alternate",
        "trailer-zoom": "trailerZoom 20s ease-in-out infinite",
      },
      keyframes: {
        roadMovement: {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(100px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0.3" },
          "50%": { transform: "translateY(-15px)", opacity: "0.8" },
        },
        lightning: {
          "0%, 30%, 100%": { opacity: "0" },
          "31%, 34%": { opacity: "0.3" },
          "32%, 33%": { opacity: "0.8" },
        },
        sinisterGlow: {
          from: { textShadow: "0 0 30px rgba(139, 0, 0, 0.8)" },
          to: { textShadow: "0 0 50px rgba(139, 0, 0, 1), 0 0 70px rgba(80, 0, 0, 0.5)" },
        },
        abyssGlow: {
          from: { textShadow: "0 0 20px rgba(139, 0, 0, 0.6)" },
          to: { textShadow: "0 0 40px rgba(139, 0, 0, 0.9), 0 0 60px rgba(50, 0, 0, 0.4)" },
        },
        sinisterButton: {
          from: { boxShadow: "0 0 40px rgba(139, 0, 0, 0.6)" },
          to: { boxShadow: "0 0 60px rgba(139, 0, 0, 0.9), 0 0 80px rgba(80, 0, 0, 0.4)" },
        },
        trailerZoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      backgroundImage: {
        "abyss-gradient": "linear-gradient(45deg, #8B0000, #550000, #330000)",
        "bolivia-gradient": "linear-gradient(45deg, #CE1126, #FFD100, #007934)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
