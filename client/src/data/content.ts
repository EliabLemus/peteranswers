export interface GameContent {
  title: string;
  subtitle: string;
  questionLabel: string;
  questionPlaceholder: string;
  askButtonText: string;
  answerTitle: string;
  waitingText: string;
  instructions: string;
  footerText: string;
  secretPhrase: string;
  answers: string[];
}

export const content: Record<string, GameContent> = {
  en: {
    title: "Peter Answers",
    subtitle: "Ask and the universe shall respond",
    questionLabel: "What do you seek to know?",
    questionPlaceholder: "Type your question here...",
    askButtonText: "Ask",
    answerTitle: "The Answer Reveals Itself...",
    waitingText: "Ask your question and discover what the universe holds for you...",
    instructions: "Focus your mind, ask your question, and let the cosmic energies guide you to the truth. The ancient spirits are waiting to share their wisdom with those who seek it.",
    footerText: "© 2024 Peter Answers - Pedro Responde. The mysteries of the universe await.",
    secretPhrase: "Peter please answer this question:",
    answers: [
      "The stars align in your favor.",
      "The path ahead is clouded, proceed with caution.",
      "Your destiny is in your own hands.",
      "The universe whispers: Yes, but patience is required.",
      "The cosmic forces say no at this time.",
      "Look within yourself for the answer you seek.",
      "The future holds great promise for you.",
      "Obstacles are temporary, your spirit is eternal.",
      "The answer lies in what you already know.",
      "Trust your intuition, it will guide you well.",
      "The winds of change are approaching.",
      "Success awaits those who persevere.",
      "The moon's wisdom guides you toward truth.",
      "Ancient knowledge flows through your spirit.",
      "The universe conspires to help you.",
      "Your heart knows the way forward.",
      "Time reveals all mysteries eventually.",
      "The energy you put forth returns threefold."
    ]
  },
  es: {
    title: "Pedro Responde",
    subtitle: "Pregunta y el universo te responderá",
    questionLabel: "¿Qué deseas saber?",
    questionPlaceholder: "Escribe tu pregunta aquí...",
    askButtonText: "Preguntar",
    answerTitle: "La Respuesta Se Revela...",
    waitingText: "Haz tu pregunta y descubre lo que el universo guarda para ti...",
    instructions: "Enfoca tu mente, haz tu pregunta, y deja que las energías cósmicas te guíen hacia la verdad. Los espíritus ancestrales esperan compartir su sabiduría con quienes la buscan.",
    footerText: "© 2024 Peter Answers - Pedro Responde. Los misterios del universo te esperan.",
    secretPhrase: "Pedro por favor responde esta pregunta:",
    answers: [
      "Las estrellas se alinean a tu favor.",
      "El camino adelante está nublado, procede con cautela.",
      "Tu destino está en tus propias manos.",
      "El universo susurra: Sí, pero se requiere paciencia.",
      "Las fuerzas cósmicas dicen que no en este momento.",
      "Busca dentro de ti mismo la respuesta que buscas.",
      "El futuro guarda grandes promesas para ti.",
      "Los obstáculos son temporales, tu espíritu es eterno.",
      "La respuesta está en lo que ya sabes.",
      "Confía en tu intuición, te guiará bien.",
      "Los vientos del cambio se acercan.",
      "El éxito espera a quienes perseveran.",
      "La sabiduría de la luna te guía hacia la verdad.",
      "El conocimiento ancestral fluye por tu espíritu.",
      "El universo conspira para ayudarte.",
      "Tu corazón conoce el camino hacia adelante.",
      "El tiempo revela todos los misterios eventualmente.",
      "La energía que proyectas regresa triplicada."
    ]
  }
};
