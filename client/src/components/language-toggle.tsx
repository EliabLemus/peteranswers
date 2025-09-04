import { cn } from "@/lib/utils";
import type { Language } from "@/hooks/use-game-state";

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onLanguageChange("en")}
        className={cn(
          "language-toggle px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
          currentLanguage === "en" 
            ? "language-toggle-active" 
            : ""
        )}
        data-testid="button-language-en"
      >
        English
      </button>
      <button
        onClick={() => onLanguageChange("es")}
        className={cn(
          "language-toggle px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
          currentLanguage === "es" 
            ? "language-toggle-active" 
            : ""
        )}
        data-testid="button-language-es"
      >
        Español
      </button>
    </div>
  );
}
