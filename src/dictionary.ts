export type WordType = "noun" | "verb" | "adj." | "adv.";

export type KeyWord = "set theory" | "logic";

export type Lexeme = {
  word: string;
  type: WordType;
  translation: string;
  keywords: KeyWord[];
};

export const en_dk : Lexeme[] = [
  {
    word: "complete",
    type: "adj.",
    translation: "komplet",
    keywords: ["logic"]
  },
  {
    word: "intersection",
    type: "noun",
    translation: "fællesmængde",
    keywords: ["set theory"]
  },
  {
    word: "set",
    type: "noun",
    translation: "mængde",
    keywords: ["set theory"]
  },
  {
    word: "sound",
    type: "adj.",
    translation: "sund",
    keywords: ["logic"]
  },
  {
    word: "subset",
    type: "noun",
    translation: "delmængde",
    keywords: ["set theory"]
  },
  {
    word: "union",
    type: "noun",
    translation: "forening, foreningsmængde",
    keywords: ["set theory"]
  },
];