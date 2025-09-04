import { useEffect, useState } from "react";
import type { Language } from "@/hooks/use-game-state";
import { content } from "@/data/content";

interface AnswerDisplayProps {
  language: Language;
  answer: string;
  showAnswer: boolean;
  onAnimationComplete: () => void;
}

export function AnswerDisplay({ language, answer, showAnswer, onAnimationComplete }: AnswerDisplayProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const currentContent = content[language];

  useEffect(() => {
    if (showAnswer && answer) {
      setDisplayedText("");
      setShowCursor(true);
      
      let i = 0;
      const timer = setInterval(() => {
        if (i < answer.length) {
          setDisplayedText(answer.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setShowCursor(false);
          onAnimationComplete();
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [showAnswer, answer, onAnimationComplete]);

  return (
    <div className="answer-area rounded-lg p-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h3 className="font-mystical text-xl text-yellow-400 mb-6" data-testid="text-answer-title">
          {currentContent.answerTitle}
        </h3>
        <div className="min-h-[80px] flex items-center justify-center" data-testid="container-answer">
          {showAnswer ? (
            <div className="text-foreground text-lg leading-relaxed opacity-100 transition-opacity duration-500">
              <span 
                className={`${showCursor ? 'typewriter-text' : ''}`}
                data-testid="text-answer"
              >
                {displayedText}
              </span>
            </div>
          ) : (
            <div className="text-muted-foreground italic" data-testid="text-waiting">
              {currentContent.waitingText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
