export type WordType = "noun" | "verb" | "adj." | "adv.";

export type KeyWord = "algorithmics"
                    | "cryptography"
                    | "geometry"
                    | "hashing"
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
    word: "acyclic",
    type: "adj.",
    translation: "acyklisk",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "adjacency list",
    type: "noun",
    translation: "incidensliste",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "algorithm",
    type: "noun",
    translation: "algoritme",
    keywords: ["algorithmics"]
  },
  {
    word: "amortised",
    type: "adj.",
    translation: "amortiseret",
    keywords: ["algorithmics"]
  },
  {
    word: "asymptotic",
    type: "adj.",
    translation: "asymptotisk",
    keywords: ["algorithmics"]
  },
  {
    word: "average",
    type: "adj.",
    translation: "asymptotisk",
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
    word: "bipartite",
    type: "adj.",
    translation: "todelt",
    keywords: ["graph"]
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
    word: "bottle neck",
    type: "noun",
    translation: "flaskehals",
    keywords: ["algorithmics"]
  },
  {
    word: "breadth-first",
    type: "adj.",
    translation: "bredde først",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "chaining (in hash table)",
    type: "noun",
    translation: "kollisionsliste",
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "closed",
    type: "adj.",
    translation: "lukket",
    keywords: ["logic", "mathematics"]
  },
  {
    word: "closure",
    type: "noun",
    translation: "lukning",
    keywords: ["graph", "logic", "mathematics"]
  },
  {
    word: "collision",
    type: "noun",
    translation: "kollision",
    keywords: ["algorithmics", "cryptography"]
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
    word: "component",
    type: "noun",
    translation: "komponent",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "computer",
    type: "noun",
    translation: "datamat",
    keywords: []
  },
  {
    word: "concatenate",
    type: "verb",
    translation: "konkatenere",
    keywords: ["cryptography", "language theory"]
  },
  {
    word: "configuration",
    type: "noun",
    translation: "konfiguration",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "connected component",
    type: "noun",
    translation: "sammenhængskomponent",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "convex",
    type: "verb",
    translation: "konveks",
    keywords: ["algorithmics", "geometry", "mathematics"]
  },
  {
    word: "correctness",
    type: "noun",
    translation: "korrekthed",
    keywords: ["algorithmics"]
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
    word: "cycle",
    type: "noun",
    translation: "cykel",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "cyclic",
    type: "adj.",
    translation: "cyklisk",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "data structure",
    type: "noun",
    translation: "datastruktur",
    keywords: ["algorithmics"]
  },
  {
    word: "deterministic",
    type: "adj.",
    translation: "deterministisk",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "dictionary",
    type: "noun",
    translation: "ordbog",
    keywords: ["algorithmics"]
  },
  {
    word: "divide-and-conquer",
    type: "adj.",
    translation: "Del-og-kompinér",
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
    word: "depth-first",
    type: "adj.",
    translation: "dybde først",
    keywords: ["algorithmics", "graph"]
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
    word: "flow",
    type: "noun",
    translation: "strømning",
    keywords: ["algorithmics"]
  },
  {
    word: "function",
    type: "noun",
    translation: "funktion",
    keywords: ["cryptography", "logic"]
  },
  {
    word: "graph",
    type: "noun",
    translation: "graf",
    keywords: ["graph"]
  },
  {
    word: "greedy",
    type: "adj.",
    translation: "grådig",
    keywords: ["algorithmics"]
  },
  {
    word: "hash",
    type: "verb",
    translation: "hakke",
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash function",
    type: "noun",
    translation: "hakkefunktion",
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash table",
    type: "noun",
    translation: "hakketabel",
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "heap",
    type: "noun",
    translation: "hob",
    keywords: ["algorithmics"]
  },
  {
    word: "hull",
    type: "noun",
    translation: "hylster",
    keywords: ["algorithmics", "geometry"]
  },
  {
    word: "imply",
    type: "verb",
    translation: "medføre",
    keywords: ["logic"]
  },
  {
    word: "incidence matrix",
    type: "noun",
    translation: "incidensmatrix",
    keywords: ["algorithmics", "graph"]
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
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "intersection",
    type: "noun",
    translation: "fællesmængde",
    keywords: ["mathematics"]
  },
  {
    word: "invariant",
    type: "noun",
    translation: "invariant",
    keywords: ["algorithmics"]
  },
  {
    word: "key",
    type: "noun",
    translation: "nøgle",
    keywords: ["cryptography", "algorithmics"]
  },
  {
    word: "language",
    type: "noun",
    translation: "sprog",
    keywords: ["cryptography", "language theory", "logic"]
  },
  {
    word: "linked list",
    type: "noun",
    translation: "kædet liste, kædede lister",
    keywords: ["algorithmics"]
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
    word: "memory",
    type: "noun",
    translation: "hukommelse",
    keywords: ["algorithmics"]
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
    word: "open adressing",
    type: "noun",
    translation: "åben adressering",
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "output",
    type: "noun",
    translation: "uddata",
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "path",
    type: "noun",
    translation: "sti, vej",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "path compression",
    type: "noun",
    translation: "stikomprimering",
    keywords: ["algorithmics"]
  },
  {
    word: "pattern",
    type: "noun",
    translation: "mønster",
    keywords: ["algorithmics"]
  },
  {
    word: "planar",
    type: "adj.",
    translation: "planar",
    keywords: ["graph"]
  },
  {
    word: "prefix",
    type: "noun",
    translation: "præfiks",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "priority queue",
    type: "noun",
    translation: "prioritetskø",
    keywords: ["algorithmics"]
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
    word: "queue",
    type: "noun",
    translation: "kø",
    keywords: ["algorithmics"]
  },
  {
    word: "random",
    type: "adj.",
    translation: "tilfældig",
    keywords: ["algorithmics", "cryptography"]
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
    keywords: ["cryptography", "language theory"]
  },
  {
    word: "relation",
    type: "noun",
    translation: "relation",
    keywords: ["algorithmics", "graph", "language theory", "logic", "mathematics"]
  },
  {
    word: "running time",
    type: "noun",
    translation: "udførselstid",
    keywords: ["algorithmics"]
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
    word: "search tree",
    type: "noun",
    translation: "søgetræ",
    keywords: ["algorithmics"]
  },
  {
    word: "set",
    type: "noun",
    translation: "mængde",
    keywords: ["mathematics"]
  },
  {
    word: "sequence",
    type: "noun",
    translation: "sekvens",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "sink",
    type: "noun",
    translation: "afløb, dræn",
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
    translation: "kilde",
    keywords: ["graph"]
  },
  {
    word: "stack",
    type: "noun",
    translation: "stak",
    keywords: ["algorithmics"]
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
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "subset",
    type: "noun",
    translation: "delmængde",
    keywords: ["mathematics"]
  },
  {
    word: "suffix",
    type: "noun",
    translation: "suffiks",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "ternary",
    type: "adj.",
    translation: "trinær",
    keywords: []
  },
  {
    word: "termination",
    type: "noun",
    translation: "terminering",
    keywords: ["algorithmics"]
  },
  {
    word: "topologic",
    type: "adj.",
    translation: "topologisk",
    keywords: ["algorithmics", "graph"]
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
    word: "transitive",
    type: "noun",
    translation: "transitiv",
    keywords: ["graph", "logic", "mathematics"]
  },
  {
    word: "trie",
    type: "noun",
    translation: "trie",
    keywords: ["algorithmics"]
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
  {
    word: "universal",
    type: "adj.",
    translation: "universel",
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  { // TODO: Add actual references
    word: "vertex, vertices",
    type: "noun",
    translation: "se \"node\"",
    keywords: ["graph"]
  },
  {
    word: "weight",
    type: "noun",
    translation: "vægt",
    keywords: ["algorithmics", "graph"]
  },
  { // TODO: Turn `translation` into a list of strings
    word: "word",
    type: "noun",
    translation: "maskinord",
    keywords: ["algorithmics"]
  },
];