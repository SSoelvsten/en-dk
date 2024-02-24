export type WordType = "noun" | "verb" | "adj." | "adv.";

export type KeyWord = "algorithmics"
                    | "language theory"
                    | "logic"
                    | "graph"
                    | "mathematics"
;

export type Lexeme = {
  word: string;
  type: WordType;
  translation: string;
  keywords: KeyWord[];
};

export const en_dk : Lexeme[] = [
  {
    word: "algorithm",
    type: "noun",
    translation: "algoritme",
    keywords: ["algorithmics"]
  },
  {
    word: "automata",
    type: "noun",
    translation: "automat",
    keywords: ["algorithmics", "graph", "logic"]
  },
  {
    word: "base case",
    type: "noun",
    translation: "basisskridt, induktionsstart, startbetingelse",
    keywords: ["algorithmics", "logic"]
  },
  {
    word: "binary",
    type: "adj.",
    translation: "binær",
    keywords: []
  },
  {
    word: "Boolean",
    type: "noun",
    translation: "Boolsk",
    keywords: []
  },
  {
    word: "closed",
    type: "adj.",
    translation: "lukket",
    keywords: ["logic", "mathematics"]
  },
  {
    word: "concatenate",
    type: "verb",
    translation: "konkatenere",
    keywords: ["language theory"]
  },
  {
    word: "compiler",
    type: "noun",
    translation: "oversætter",
    keywords: []
  },
  {
    word: "complete",
    type: "adj.",
    translation: "komplet",
    keywords: ["language theory", "logic"]
  },
  {
    word: "computer",
    type: "noun",
    translation: "datamat",
    keywords: []
  },
  {
    word: "countable",
    type: "adj.",
    translation: "tællelig",
    keywords: ["mathematics"]
  },
  {
    word: "cut",
    type: "noun",
    translation: "snit",
    keywords: ["graph"]
  },
  {
    word: "data structure",
    type: "noun",
    translation: "datastruktur",
    keywords: ["algorithmics"]
  },
  {
    word: "difference",
    type: "noun",
    translation: "difference, forskel",
    keywords: ["mathematics"]
  },
  {
    word: "directed",
    type: "adj.",
    translation: "orienteret",
    keywords: ["graph"]
  },
  {
    word: "edge",
    type: "noun",
    translation: "kant",
    keywords: ["graph"]
  },
  {
    word: "finite",
    type: "adj.",
    translation: "endelig",
    keywords: ["mathematics"]
  },
  {
    word: "function",
    type: "noun",
    translation: "funktion",
    keywords: ["logic"]
  },
  {
    word: "graph",
    type: "noun",
    translation: "graf",
    keywords: ["graph"]
  },
  {
    word: "hash",
    type: "verb",
    translation: "hakke",
    keywords: ["algorithmics"]
  },
  {
    word: "hash function",
    type: "noun",
    translation: "hakkefunktion",
    keywords: ["algorithmics"]
  },
  {
    word: "hash table",
    type: "noun",
    translation: "hakketabel",
    keywords: ["algorithmics"]
  },
  {
    word: "heap",
    type: "noun",
    translation: "hob",
    keywords: ["algorithmics"]
  },
  {
    word: "imply",
    type: "verb",
    translation: "medføre",
    keywords: ["logic"]
  },
  {
    word: "induction",
    type: "noun",
    translation: "induktion",
    keywords: ["logic"]
  },
  {
    word: "induction hypothesis",
    type: "noun",
    translation: "induktionshypotese",
    keywords: ["logic"]
  },
  {
    word: "inductive",
    type: "adj.",
    translation: "induktiv",
    keywords: ["logic"]
  },
  {
    word: "inductive case",
    type: "noun",
    translation: "induktionskridt",
    keywords: ["logic"]
  },
  {
    word: "infinite",
    type: "adj.",
    translation: "uendelig",
    keywords: ["mathematics"]
  },
  {
    word: "input",
    type: "noun",
    translation: "inddata",
    keywords: []
  },
  {
    word: "intersection",
    type: "noun",
    translation: "fællesmængde",
    keywords: ["mathematics"]
  },
  {
    word: "language",
    type: "noun",
    translation: "sprog",
    keywords: ["language theory", "logic"]
  },
  {
    word: "location",
    type: "noun",
    translation: "lokation",
    keywords: ["graph"]
  },
  {
    word: "matrix, matrices",
    type: "noun",
    translation: "matrix, matrice",
    keywords: ["mathematics"]
  },
  {
    word: "monad",
    type: "noun",
    translation: "monade",
    keywords: ["logic"]
  },
  {
    word: "monadic",
    type: "adj.",
    translation: "monadisk",
    keywords: []
  },
  {
    word: "node",
    type: "noun",
    translation: "knude",
    keywords: ["graph"]
  },
  {
    word: "output",
    type: "noun",
    translation: "uddata",
    keywords: []
  },
  {
    word: "quantified",
    type: "adj.",
    translation: "kvantificeret",
    keywords: ["logic"]
  },
  {
    word: "quantifier",
    type: "noun",
    translation: "kvantor",
    keywords: ["logic"]
  },
  {
    word: "random",
    type: "adj.",
    translation: "tilfældig",
    keywords: ["algorithmics"]
  },
  {
    word: "recursion",
    type: "noun",
    translation: "rekursion",
    keywords: ["algorithmics", "logic"]
  },
  {
    word: "recursive",
    type: "adj.",
    translation: "rekursiv",
    keywords: ["algorithmics", "logic"]
  },
  {
    word: "reduction",
    type: "noun",
    translation: "reduktion",
    keywords: ["language theory"]
  },
  {
    word: "satisfiability",
    type: "noun",
    translation: "tilfredstillelse",
    keywords: ["logic"]
  },
  {
    word: "satisfiable",
    type: "adj.",
    translation: "tilfredstillelig",
    keywords: ["logic"]
  },
  {
    word: "set",
    type: "noun",
    translation: "mængde",
    keywords: ["mathematics"]
  },
  {
    word: "sink",
    type: "noun",
    translation: "dræn",
    keywords: ["graph"]
  },
  {
    word: "sound",
    type: "adj.",
    translation: "sund",
    keywords: ["language theory", "logic"]
  },
  {
    word: "source",
    type: "noun",
    translation: "dræn",
    keywords: ["graph"]
  },
  {
    word: "state",
    type: "noun",
    translation: "tilstand",
    keywords: ["graph"]
  },
  {
    word: "string",
    type: "noun",
    translation: "streng, ord",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "subset",
    type: "noun",
    translation: "delmængde",
    keywords: ["mathematics"]
  },
  {
    word: "ternary",
    type: "adj.",
    translation: "trinær",
    keywords: []
  },
  {
    word: "transition",
    type: "noun",
    translation: "transition",
    keywords: ["graph"]
  },
  {
    word: "transition function",
    type: "noun",
    translation: "transitionsfunktion",
    keywords: ["graph"]
  },
  {
    word: "undirected",
    type: "adj.",
    translation: "uorienteret",
    keywords: ["graph"]
  },
  {
    word: "unary",
    type: "adj.",
    translation: "unær",
    keywords: []
  },
  {
    word: "uncountable",
    type: "adj.",
    translation: "overtællelig",
    keywords: ["mathematics"]
  },
  {
    word: "union",
    type: "noun",
    translation: "forening, foreningsmængde",
    keywords: ["mathematics"]
  },
  { // TODO: Add actual references
    word: "vertex, vertices",
    type: "noun",
    translation: "se \"node\"",
    keywords: ["graph"]
  },
];