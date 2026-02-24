
export type Topic = 
  | 'SQL vs NoSQL' 
  | 'Banco de Documentos' 
  | 'Banco de Chave-Valor' 
  | 'Banco de Coluna Larga' 
  | 'Banco de Grafos' 
  | 'Fundamentos de BD';

export interface Question {
  id: string;
  topic: Topic;
  question: string;
  options: string[];
  correctAnswer: number; // Index of options array (0-4)
  explanation: string;
}

export interface QuizState {
  currentTopic: Topic | null;
  currentQuestionIndex: number;
  score: number;
  userAnswers: { [questionId: string]: number };
  isFinished: boolean;
}
