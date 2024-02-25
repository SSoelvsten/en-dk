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
  note?: string;
  translation: string;
  keywords: KeyWord[];
};

export const en_dk : Lexeme[] = [
  {
    word: "acyclic",
    translation: "acyklisk",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "adjacency list",
    translation: "incidensliste",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "algorithm",
    translation: "algoritme",
    keywords: ["algorithmics"]
  },
  {
    word: "amortised",
    translation: "amortiseret",
    keywords: ["algorithmics"]
  },
  {
    word: "asymptotic",
    translation: "asymptotisk",
    keywords: ["algorithmics"]
  },
  {
    word: "average",
    translation: "asymptotisk",
    keywords: ["algorithmics"]
  },
  {
    word: "automata",
    translation: "automat",
    keywords: ["algorithmics", "graph", "logic"]
  },
  {
    word: "base case",
    translation: "basisskridt, induktionsstart, startbetingelse",
    keywords: ["algorithmics", "logic"]
  },
  {
    word: "bipartite",
    translation: "todelt",
    keywords: ["graph"]
  },
  {
    word: "binary",
    translation: "binær",
    keywords: []
  },
  {
    word: "Boolean",
    translation: "Boolsk",
    keywords: []
  },
  {
    word: "bottle neck",
    translation: "flaskehals",
    keywords: ["algorithmics"]
  },
  {
    word: "breadth-first",
    translation: "bredde først",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "chaining",
    note: "in hash table",
    translation: "kollisionsliste",
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "closed",
    translation: "lukket",
    keywords: ["logic", "mathematics"]
  },
  {
    word: "closure",
    translation: "lukning",
    keywords: ["graph", "logic", "mathematics"]
  },
  {
    word: "collision",
    translation: "kollision",
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "compiler",
    translation: "oversætter",
    keywords: []
  },
  {
    word: "complete",
    translation: "komplet",
    keywords: ["language theory", "logic"]
  },
  {
    word: "component",
    translation: "komponent",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "computer",
    translation: "datamat",
    keywords: []
  },
  {
    word: "concatenate",
    translation: "konkatenere",
    keywords: ["cryptography", "language theory"]
  },
  {
    word: "configuration",
    translation: "konfiguration",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "connected component",
    translation: "sammenhængskomponent",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "convex",
    translation: "konveks",
    keywords: ["algorithmics", "geometry", "mathematics"]
  },
  {
    word: "correctness",
    translation: "korrekthed",
    keywords: ["algorithmics"]
  },
  {
    word: "countable",
    translation: "tællelig",
    keywords: ["mathematics"]
  },
  {
    word: "cut",
    translation: "snit",
    keywords: ["graph"]
  },
  {
    word: "cycle",
    translation: "cykel",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "cyclic",
    translation: "cyklisk",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "data structure",
    translation: "datastruktur",
    keywords: ["algorithmics"]
  },
  {
    word: "deterministic",
    translation: "deterministisk",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "dictionary",
    translation: "ordbog",
    keywords: ["algorithmics"]
  },
  {
    word: "divide-and-conquer",
    translation: "Del-og-kompinér",
    keywords: ["algorithmics"]
  },
  {
    word: "difference",
    translation: "difference, forskel",
    keywords: ["mathematics"]
  },
  {
    word: "directed",
    translation: "orienteret",
    keywords: ["graph"]
  },
  {
    word: "depth-first",
    translation: "dybde først",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "edge",
    translation: "kant",
    keywords: ["graph"]
  },
  {
    word: "finite",
    translation: "endelig",
    keywords: ["mathematics"]
  },
  {
    word: "flow",
    translation: "strømning",
    keywords: ["algorithmics"]
  },
  {
    word: "function",
    translation: "funktion",
    keywords: ["cryptography", "logic"]
  },
  {
    word: "graph",
    translation: "graf",
    keywords: ["graph"]
  },
  {
    word: "greedy",
    translation: "grådig",
    keywords: ["algorithmics"]
  },
  {
    word: "hash",
    translation: "hakke",
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash function",
    translation: "hakkefunktion",
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash table",
    translation: "hakketabel",
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "heap",
    translation: "hob",
    keywords: ["algorithmics"]
  },
  {
    word: "hull",
    translation: "hylster",
    keywords: ["algorithmics", "geometry"]
  },
  {
    word: "imply",
    translation: "medføre",
    keywords: ["logic"]
  },
  {
    word: "incidence matrix",
    translation: "incidensmatrix",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "induction",
    translation: "induktion",
    keywords: ["logic"]
  },
  {
    word: "induction hypothesis",
    translation: "induktionshypotese",
    keywords: ["logic"]
  },
  {
    word: "inductive",
    translation: "induktiv",
    keywords: ["logic"]
  },
  {
    word: "inductive case",
    translation: "induktionskridt",
    keywords: ["logic"]
  },
  {
    word: "infinite",
    translation: "uendelig",
    keywords: ["mathematics"]
  },
  {
    word: "input",
    translation: "inddata",
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "intersection",
    translation: "fællesmængde",
    keywords: ["mathematics"]
  },
  {
    word: "invariant",
    translation: "invariant",
    keywords: ["algorithmics"]
  },
  {
    word: "key",
    translation: "nøgle",
    keywords: ["cryptography", "algorithmics"]
  },
  {
    word: "language",
    translation: "sprog",
    keywords: ["cryptography", "language theory", "logic"]
  },
  {
    word: "linked list",
    translation: "kædet liste, kædede lister",
    keywords: ["algorithmics"]
  },
  {
    word: "location",
    translation: "lokation",
    keywords: ["graph"]
  },
  {
    word: "matrix, matrices",
    translation: "matrix, matrice",
    keywords: ["mathematics"]
  },
  {
    word: "memory",
    translation: "hukommelse",
    keywords: ["algorithmics"]
  },
  {
    word: "monad",
    translation: "monade",
    keywords: ["logic"]
  },
  {
    word: "monadic",
    translation: "monadisk",
    keywords: []
  },
  {
    word: "node",
    translation: "knude",
    keywords: ["graph"]
  },
  {
    word: "open adressing",
    translation: "åben adressering",
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "output",
    translation: "uddata",
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "path",
    translation: "sti, vej",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "path compression",
    translation: "stikomprimering",
    keywords: ["algorithmics"]
  },
  {
    word: "pattern",
    translation: "mønster",
    keywords: ["algorithmics"]
  },
  {
    word: "planar",
    translation: "planar",
    keywords: ["graph"]
  },
  {
    word: "prefix",
    translation: "præfiks",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "priority queue",
    translation: "prioritetskø",
    keywords: ["algorithmics"]
  },
  {
    word: "quantified",
    translation: "kvantificeret",
    keywords: ["logic"]
  },
  {
    word: "quantifier",
    translation: "kvantor",
    keywords: ["logic"]
  },
  {
    word: "queue",
    translation: "kø",
    keywords: ["algorithmics"]
  },
  {
    word: "random",
    translation: "tilfældig",
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "recursion",
    translation: "rekursion",
    keywords: ["algorithmics", "logic"]
  },
  {
    word: "recursive",
    translation: "rekursiv",
    keywords: ["algorithmics", "logic"]
  },
  {
    word: "reduction",
    translation: "reduktion",
    keywords: ["cryptography", "language theory"]
  },
  {
    word: "relation",
    translation: "relation",
    keywords: ["algorithmics", "graph", "language theory", "logic", "mathematics"]
  },
  {
    word: "running time",
    translation: "udførselstid",
    keywords: ["algorithmics"]
  },
  {
    word: "satisfiability",
    translation: "tilfredstillelse",
    keywords: ["logic"]
  },
  {
    word: "satisfiable",
    translation: "tilfredstillelig",
    keywords: ["logic"]
  },
  {
    word: "search tree",
    translation: "søgetræ",
    keywords: ["algorithmics"]
  },
  {
    word: "set",
    translation: "mængde",
    keywords: ["mathematics"]
  },
  {
    word: "sequence",
    translation: "sekvens",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "sink",
    translation: "afløb, dræn",
    keywords: ["graph"]
  },
  {
    word: "sound",
    translation: "sund",
    keywords: ["language theory", "logic"]
  },
  {
    word: "source",
    translation: "kilde",
    keywords: ["graph"]
  },
  {
    word: "stack",
    translation: "stak",
    keywords: ["algorithmics"]
  },
  {
    word: "state",
    translation: "tilstand",
    keywords: ["graph"]
  },
  {
    word: "string",
    translation: "streng, ord",
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "subset",
    translation: "delmængde",
    keywords: ["mathematics"]
  },
  {
    word: "suffix",
    translation: "suffiks",
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "ternary",
    translation: "trinær",
    keywords: []
  },
  {
    word: "termination",
    translation: "terminering",
    keywords: ["algorithmics"]
  },
  {
    word: "topologic",
    translation: "topologisk",
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "transition",
    translation: "transition",
    keywords: ["graph"]
  },
  {
    word: "transition function",
    translation: "transitionsfunktion",
    keywords: ["graph"]
  },
  {
    word: "transitive",
    translation: "transitiv",
    keywords: ["graph", "logic", "mathematics"]
  },
  {
    word: "trie",
    translation: "trie",
    keywords: ["algorithmics"]
  },
  {
    word: "undirected",
    translation: "uorienteret",
    keywords: ["graph"]
  },
  {
    word: "unary",
    translation: "unær",
    keywords: []
  },
  {
    word: "uncountable",
    translation: "overtællelig",
    keywords: ["mathematics"]
  },
  {
    word: "union",
    translation: "forening, foreningsmængde",
    keywords: ["mathematics"]
  },
  {
    word: "universal",
    translation: "universel",
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  { // TODO: Add actual references
    word: "vertex, vertices",
    translation: "se \"node\"",
    keywords: ["graph"]
  },
  {
    word: "weight",
    translation: "vægt",
    keywords: ["algorithmics", "graph"]
  },
  { // TODO: Turn `translation` into a list of strings
    word: "word",
    translation: "maskinord",
    keywords: ["algorithmics"]
  },
];