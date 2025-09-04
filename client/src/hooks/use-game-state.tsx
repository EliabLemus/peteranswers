import { useState, useCallback } from "react";
import { content } from "@/data/content";

export type Language = "en" | "es";

export function useGameState() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const [isAnswering, setIsAnswering] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const switchLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("peter-answers-lang", lang);
  }, []);


  const handleAsk = useCallback((question: string, providedSecretAnswer?: string) => {
    if (isAnswering || !question.trim()) return;

    setIsAnswering(true);
    setShowAnswer(false);

    let answer: string;
    
    if (providedSecretAnswer && providedSecretAnswer.trim()) {
      // Use the provided secret answer
      answer = providedSecretAnswer.trim();
    } else {
      // Return random answer
      const answers = content[currentLanguage].answers;
      answer = answers[Math.floor(Math.random() * answers.length)];
    }
    
    setCurrentAnswer(answer);

    // Show answer after a brief delay
    setTimeout(() => {
      setShowAnswer(true);
    }, 500);
  }, [isAnswering, currentLanguage]);

  const resetAnswer = useCallback(() => {
    if (!isAnswering) {
      setShowAnswer(false);
      setCurrentAnswer("");
    }
  }, [isAnswering]);

  // Initialize language from localStorage
  useState(() => {
    const savedLang = localStorage.getItem("peter-answers-lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setCurrentLanguage(savedLang);
    }
  });

  return {
    currentLanguage,
    isAnswering,
    currentAnswer,
    showAnswer,
    switchLanguage,
    handleAsk,
    resetAnswer,
    setIsAnswering,
  };
}
