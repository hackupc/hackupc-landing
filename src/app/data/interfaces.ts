export type AnswerOptions =
  | {
      type: "Text";
      content: string;
    }
  | {
      type: "List" | "Enumeration";
      content: string;
      options: string[];
    }
  | {
      type: "Link";
      content: string;
      link: string;
    };

export interface FAQs {
  id: number;
  question: string;
  answer: AnswerOptions[];
}
