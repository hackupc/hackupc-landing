export type AnswerOptions =
  | {
      type: "Text";
      answer: string;
    }
  | {
      type: "List" | "Enumeration";
      answer: string;
      options: string[];
    }
  | {
      type: "Link";
      answer: string;
      link: string;
    };

export interface FAQs {
  id: number;
  question: string;
  answer: AnswerOptions[];
}
