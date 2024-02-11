export interface AnswerOptions {
  type: "Link" | "Text" | "List" | "Enumeration";
  content: string;
  link?: string;
  options?: string[];
}

export interface FAQs {
  id: number;
  question: string;
  answer: AnswerOptions[];
}
