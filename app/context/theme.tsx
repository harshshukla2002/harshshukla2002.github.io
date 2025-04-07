"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Define Theme Types
type Theme = "light" | "dark";

// Create Context
const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

// Theme Provider Component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Save theme in localStorage and apply class to `<html>`
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to Use Theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
