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
  translations: string[];
  keywords: KeyWord[];
};

export const en_dk : Lexeme[] = [
  {
    word: "acyclic",
    translations: ["acyklisk"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "adjacency list",
    translations: ["incidensliste"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "algorithm",
    translations: ["algoritme"],
    keywords: ["algorithmics"]
  },
  {
    word: "amortised",
    translations: ["amortiseret"],
    keywords: ["algorithmics"]
  },
  {
    word: "asymptotic",
    translations: ["asymptotisk"],
    keywords: ["algorithmics"]
  },
  {
    word: "average",
    translations: ["asymptotisk"],
    keywords: ["algorithmics"]
  },
  {
    word: "automata",
    translations: ["automat"],
    keywords: ["algorithmics", "graph", "logic"]
  },
  {
    word: "base case",
    translations: ["basisskridt, induktionsstart, startbetingelse"],
    keywords: ["algorithmics", "logic"]
  },
  {
    word: "bipartite",
    translations: ["todelt"],
    keywords: ["graph"]
  },
  {
    word: "binary",
    translations: ["binær"],
    keywords: []
  },
  {
    word: "Boolean",
    translations: ["Boolsk"],
    keywords: []
  },
  {
    word: "bottle neck",
    translations: ["flaskehals"],
    keywords: ["algorithmics"]
  },
  {
    word: "breadth-first",
    translations: ["bredde først"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "chaining",
    note: "in hash table",
    translations: ["kollisionsliste"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "closed",
    translations: ["lukket"],
    keywords: ["logic", "mathematics"]
  },
  {
    word: "closure",
    translations: ["lukning"],
    keywords: ["graph", "logic", "mathematics"]
  },
  {
    word: "collision",
    translations: ["kollision"],
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "compiler",
    translations: ["oversætter"],
    keywords: []
  },
  {
    word: "complete",
    translations: ["komplet"],
    keywords: ["language theory", "logic"]
  },
  {
    word: "component",
    translations: ["komponent"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "computer",
    translations: ["datamat"],
    keywords: []
  },
  {
    word: "concatenate",
    translations: ["konkatenere"],
    keywords: ["cryptography", "language theory"]
  },
  {
    word: "configuration",
    translations: ["konfiguration"],
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "connected component",
    translations: ["sammenhængskomponent"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "convex",
    translations: ["konveks"],
    keywords: ["algorithmics", "geometry", "mathematics"]
  },
  {
    word: "correctness",
    translations: ["korrekthed"],
    keywords: ["algorithmics"]
  },
  {
    word: "countable",
    translations: ["tællelig"],
    keywords: ["mathematics"]
  },
  {
    word: "cut",
    translations: ["snit"],
    keywords: ["graph"]
  },
  {
    word: "cycle",
    translations: ["cykel"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "cyclic",
    translations: ["cyklisk"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "data structure",
    translations: ["datastruktur"],
    keywords: ["algorithmics"]
  },
  {
    word: "deterministic",
    translations: ["deterministisk"],
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "dictionary",
    translations: ["ordbog"],
    keywords: ["algorithmics"]
  },
  {
    word: "divide-and-conquer",
    translations: ["Del-og-kompinér"],
    keywords: ["algorithmics"]
  },
  {
    word: "difference",
    translations: ["difference, forskel"],
    keywords: ["mathematics"]
  },
  {
    word: "directed",
    translations: ["orienteret"],
    keywords: ["graph"]
  },
  {
    word: "depth-first",
    translations: ["dybde først"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "edge",
    translations: ["kant"],
    keywords: ["graph"]
  },
  {
    word: "finite",
    translations: ["endelig"],
    keywords: ["mathematics"]
  },
  {
    word: "flow",
    translations: ["strømning"],
    keywords: ["algorithmics"]
  },
  {
    word: "function",
    translations: ["funktion"],
    keywords: ["cryptography", "logic"]
  },
  {
    word: "graph",
    translations: ["graf"],
    keywords: ["graph"]
  },
  {
    word: "greedy",
    translations: ["grådig"],
    keywords: ["algorithmics"]
  },
  {
    word: "hash",
    translations: ["hakke"],
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash function",
    translations: ["hakkefunktion"],
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash table",
    translations: ["hakketabel"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "heap",
    translations: ["hob"],
    keywords: ["algorithmics"]
  },
  {
    word: "hull",
    translations: ["hylster"],
    keywords: ["algorithmics", "geometry"]
  },
  {
    word: "imply",
    translations: ["medføre"],
    keywords: ["logic"]
  },
  {
    word: "incidence matrix",
    translations: ["incidensmatrix"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "induction",
    translations: ["induktion"],
    keywords: ["logic"]
  },
  {
    word: "induction hypothesis",
    translations: ["induktionshypotese"],
    keywords: ["logic"]
  },
  {
    word: "inductive",
    translations: ["induktiv"],
    keywords: ["logic"]
  },
  {
    word: "inductive case",
    translations: ["induktionskridt"],
    keywords: ["logic"]
  },
  {
    word: "infinite",
    translations: ["uendelig"],
    keywords: ["mathematics"]
  },
  {
    word: "input",
    translations: ["inddata"],
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "intersection",
    translations: ["fællesmængde"],
    keywords: ["mathematics"]
  },
  {
    word: "invariant",
    translations: ["invariant"],
    keywords: ["algorithmics"]
  },
  {
    word: "key",
    translations: ["nøgle"],
    keywords: ["cryptography", "algorithmics"]
  },
  {
    word: "language",
    translations: ["sprog"],
    keywords: ["cryptography", "language theory", "logic"]
  },
  {
    word: "linked list",
    translations: ["kædet liste, kædede lister"],
    keywords: ["algorithmics"]
  },
  {
    word: "location",
    translations: ["lokation"],
    keywords: ["graph"]
  },
  {
    word: "matrix, matrices",
    translations: ["matrix, matrice"],
    keywords: ["mathematics"]
  },
  {
    word: "memory",
    translations: ["hukommelse"],
    keywords: ["algorithmics"]
  },
  {
    word: "monad",
    translations: ["monade"],
    keywords: ["logic"]
  },
  {
    word: "monadic",
    translations: ["monadisk"],
    keywords: []
  },
  {
    word: "node",
    translations: ["knude"],
    keywords: ["graph"]
  },
  {
    word: "open adressing",
    translations: ["åben adressering"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "output",
    translations: ["uddata"],
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "path",
    translations: ["sti, vej"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "path compression",
    translations: ["stikomprimering"],
    keywords: ["algorithmics"]
  },
  {
    word: "pattern",
    translations: ["mønster"],
    keywords: ["algorithmics"]
  },
  {
    word: "planar",
    translations: ["planar"],
    keywords: ["graph"]
  },
  {
    word: "prefix",
    translations: ["præfiks"],
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "priority queue",
    translations: ["prioritetskø"],
    keywords: ["algorithmics"]
  },
  {
    word: "quantified",
    translations: ["kvantificeret"],
    keywords: ["logic"]
  },
  {
    word: "quantifier",
    translations: ["kvantor"],
    keywords: ["logic"]
  },
  {
    word: "queue",
    translations: ["kø"],
    keywords: ["algorithmics"]
  },
  {
    word: "random",
    translations: ["tilfældig"],
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "recursion",
    translations: ["rekursion"],
    keywords: ["algorithmics", "logic"]
  },
  {
    word: "recursive",
    translations: ["rekursiv"],
    keywords: ["algorithmics", "logic"]
  },
  {
    word: "reduction",
    translations: ["reduktion"],
    keywords: ["cryptography", "language theory"]
  },
  {
    word: "relation",
    translations: ["relation"],
    keywords: ["algorithmics", "graph", "language theory", "logic", "mathematics"]
  },
  {
    word: "running time",
    translations: ["udførselstid"],
    keywords: ["algorithmics"]
  },
  {
    word: "satisfiability",
    translations: ["tilfredstillelse"],
    keywords: ["logic"]
  },
  {
    word: "satisfiable",
    translations: ["tilfredstillelig"],
    keywords: ["logic"]
  },
  {
    word: "search tree",
    translations: ["søgetræ"],
    keywords: ["algorithmics"]
  },
  {
    word: "set",
    translations: ["mængde"],
    keywords: ["mathematics"]
  },
  {
    word: "sequence",
    translations: ["sekvens"],
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "sink",
    translations: ["afløb, dræn"],
    keywords: ["graph"]
  },
  {
    word: "sound",
    translations: ["sund"],
    keywords: ["language theory", "logic"]
  },
  {
    word: "source",
    translations: ["kilde"],
    keywords: ["graph"]
  },
  {
    word: "stack",
    translations: ["stak"],
    keywords: ["algorithmics"]
  },
  {
    word: "state",
    translations: ["tilstand"],
    keywords: ["graph"]
  },
  {
    word: "string",
    translations: ["streng, ord"],
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "subset",
    translations: ["delmængde"],
    keywords: ["mathematics"]
  },
  {
    word: "suffix",
    translations: ["suffiks"],
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "ternary",
    translations: ["trinær"],
    keywords: []
  },
  {
    word: "termination",
    translations: ["terminering"],
    keywords: ["algorithmics"]
  },
  {
    word: "topologic",
    translations: ["topologisk"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "transition",
    translations: ["transition"],
    keywords: ["graph"]
  },
  {
    word: "transition function",
    translations: ["transitionsfunktion"],
    keywords: ["graph"]
  },
  {
    word: "transitive",
    translations: ["transitiv"],
    keywords: ["graph", "logic", "mathematics"]
  },
  {
    word: "trie",
    translations: ["trie"],
    keywords: ["algorithmics"]
  },
  {
    word: "undirected",
    translations: ["uorienteret"],
    keywords: ["graph"]
  },
  {
    word: "unary",
    translations: ["unær"],
    keywords: []
  },
  {
    word: "uncountable",
    translations: ["overtællelig"],
    keywords: ["mathematics"]
  },
  {
    word: "union",
    translations: ["forening, foreningsmængde"],
    keywords: ["mathematics"]
  },
  {
    word: "universal",
    translations: ["universel"],
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  { // TODO: Add actual references
    word: "vertex, vertices",
    note: "see also \"node\"",
    translations: ["hjørne"],
    keywords: ["geometry", "graph"]
  },
  {
    word: "weight",
    translations: ["vægt"],
    keywords: ["algorithmics", "graph"]
  },
  { // TODO: Turn `translation` into a list of strings
    word: "word",
    note: "in computer",
    translations: ["maskinord"],
    keywords: ["algorithmics"]
  },
  { // TODO: Turn `translation` into a list of strings
    word: "word",
    note: "in language",
    translations: ["ord"],
    keywords: ["language theory"]
  },
];