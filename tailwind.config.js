/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./responder_side/**/*.html",
    "./client_side/**/*.html",
    "./commander_side/**/*.html",
    "./login_process/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: { main: ["DM Sans", "sans-serif"] },
      colors: {
        emergency: "#DC2626",
        "emergency-light": "#FEE2E2",
        success: "#16A34A",
        "success-light": "#DCFCE7",
        warning: "#D97706",
        "warning-light": "#FEF3C7",
        "offline-muted": "#991B1B",
        "gps-blue": "#3B82F6",
        "gps-blue-light": "#DBEAFE",
        surface: "#FFFFFF",
        bg: "#F8FAFC",
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        "text-muted": "#94A3B8",
        border: "#E2E8F0",
      },
    },
  },
  plugins: [],
};
