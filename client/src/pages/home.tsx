import { CrystalBall } from "@/components/crystal-ball";
import { FloatingOrbs } from "@/components/floating-orbs";
import { LanguageToggle } from "@/components/language-toggle";
import { MysticalInput } from "@/components/mystical-input";
import { AnswerDisplay } from "@/components/answer-display";
import { useGameState } from "@/hooks/use-game-state";
import { content } from "@/data/content";

export default function Home() {
  const {
    currentLanguage,
    isAnswering,
    currentAnswer,
    showAnswer,
    switchLanguage,
    handleAsk,
    resetAnswer,
    setIsAnswering,
  } = useGameState();

  const currentContent = content[currentLanguage];

  const onAnimationComplete = () => {
    setIsAnswering(false);
  };

  return (
    <div className="mystical-bg min-h-screen relative overflow-x-hidden">
      {/* Floating mystical orbs */}
      <FloatingOrbs />

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-center">
            <h1 className="font-mystical text-3xl md:text-4xl text-yellow-400 mb-2 animate-glow" data-testid="text-title">
              {currentContent.title}
            </h1>
            <p className="text-muted-foreground text-sm font-light" data-testid="text-subtitle">
              {currentContent.subtitle}
            </p>
          </div>
          
          <LanguageToggle 
            currentLanguage={currentLanguage}
            onLanguageChange={switchLanguage}
          />
        </div>
      </header>

      {/* Main Game */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Crystal Ball Section */}
          <CrystalBall />

          {/* Question Input Section */}
          <MysticalInput
            language={currentLanguage}
            onAsk={handleAsk}
            onFocus={resetAnswer}
            isAnswering={isAnswering}
          />

          {/* Answer Display Section */}
          <AnswerDisplay
            language={currentLanguage}
            answer={currentAnswer}
            showAnswer={showAnswer}
            onAnimationComplete={onAnimationComplete}
          />

          {/* Mystical Instructions */}
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-instructions">
              {currentContent.instructions}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm" data-testid="text-footer">
            {currentContent.footerText}
          </p>
        </div>
      </footer>
    </div>
  );
}
