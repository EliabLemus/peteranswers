import { useState, KeyboardEvent, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Language } from "@/hooks/use-game-state";
import { content } from "@/data/content";

interface MysticalInputProps {
  language: Language;
  onAsk: (question: string, secretAnswer?: string) => void;
  onFocus: () => void;
  isAnswering: boolean;
}

export function MysticalInput({ language, onAsk, onFocus, isAnswering }: MysticalInputProps) {
  const [displayValue, setDisplayValue] = useState("");
  const [secretMode, setSecretMode] = useState(false);
  const [secretAnswer, setSecretAnswer] = useState("");
  const [actualInput, setActualInput] = useState(""); // What the user is actually typing
  const currentContent = content[language];
  const inputRef = useRef<HTMLInputElement>(null);
  const petition = currentContent.secretPhrase; // "Pedro por favor responde esta pregunta:"

  const handleAsk = () => {
    if (isAnswering || !displayValue.trim()) return;
    
    if (secretAnswer && secretAnswer.trim()) {
      // Use secret answer
      onAsk(displayValue, secretAnswer.trim());
    } else {
      // Normal question
      onAsk(displayValue);
    }
    
    // Reset everything
    setDisplayValue("");
    setActualInput("");
    setSecretMode(false);
    setSecretAnswer("");
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAsk();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAsk();
      return;
    }
    
    // Si no está en modo secreto y presiona '.', activar modo secreto
    if (!secretMode && e.key === '.' && actualInput === '') {
      setSecretMode(true);
      setActualInput('.');
      setDisplayValue('');
      e.preventDefault();
      return;
    }
    
    if (secretMode) {
      e.preventDefault();
      
      if (e.key === 'Backspace') {
        const newInput = actualInput.slice(0, -1);
        setActualInput(newInput);
        
        if (newInput === '') {
          setSecretMode(false);
          setSecretAnswer('');
          setDisplayValue('');
          return;
        }
        
        // Recalcular display
        updateDisplay(newInput);
        return;
      }
      
      if (e.key.length === 1) { // Solo caracteres normales
        const newInput = actualInput + e.key;
        setActualInput(newInput);
        updateDisplay(newInput);
      }
    }
  };
  
  const updateDisplay = (input: string) => {
    if (!input.startsWith('.')) return;
    
    const secondDotIndex = input.indexOf('.', 1);
    
    if (secondDotIndex === -1) {
      // Aún escribiendo respuesta secreta
      const secretLength = input.length - 1;
      const visibleText = petition.substring(0, secretLength);
      setDisplayValue(visibleText);
    } else {
      // Ya tiene segundo punto
      const secret = input.substring(1, secondDotIndex);
      setSecretAnswer(secret);
      
      const afterSecondDot = input.substring(secondDotIndex + 1);
      const totalLength = secret.length + afterSecondDot.length;
      
      if (totalLength <= petition.length) {
        setDisplayValue(petition.substring(0, totalLength));
      } else {
        const extraLength = totalLength - petition.length;
        const questionPart = afterSecondDot.substring(afterSecondDot.length - extraLength);
        setDisplayValue(petition + ' ' + questionPart);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!secretMode) {
      const value = e.target.value;
      setActualInput(value);
      setDisplayValue(value);
    }
  };

  // Reset when language changes
  useEffect(() => {
    if (secretMode && actualInput) {
      // Re-process the input with new language
      const event = { target: { value: actualInput } } as React.ChangeEvent<HTMLInputElement>;
      handleInputChange(event);
    }
  }, [language]);

  return (
    <div className="mb-8">
      <Label className="block text-center text-yellow-400 font-mystical text-xl mb-4" data-testid="label-question">
        {currentContent.questionLabel}
      </Label>
      <div className="relative max-w-2xl mx-auto">
        <Input
          ref={inputRef}
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          className="mystical-input w-full px-6 py-4 text-lg"
          placeholder={currentContent.questionPlaceholder}
          data-testid="input-question"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Button
            onClick={handleAsk}
            disabled={isAnswering || !displayValue.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid="button-ask"
          >
            {currentContent.askButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
