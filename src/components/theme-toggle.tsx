import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-mode") === "light" ? "dark" : "light";
  root.setAttribute("data-mode", next);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Penyimpanan diblokir: tema tetap berganti, hanya tidak diingat.
  }
}

export function ThemeToggle() {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light or dark mode"
    >
      <Moon className="theme-toggle__moon" size={19} strokeWidth={1.7} aria-hidden="true" />
      <Sun className="theme-toggle__sun" size={19} strokeWidth={1.7} aria-hidden="true" />
    </button>
  );
}
