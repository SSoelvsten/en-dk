export type KeyWord = "algorithmics"
                    | "cryptography"
                    | "formal methods"
                    | "geometry"
                    | "hashing"
                    | "language theory"
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
    word: "accept",
    note: "verb",
    translations: ["acceptere"],
    keywords: ["formal methods", "language theory"]
  },
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
    word: "algebra",
    translations: ["algebra"],
    keywords: ["mathematics"]
  },
  {
    word: "algebraic",
    translations: ["algebraisk"],
    keywords: ["mathematics"]
  },
  {
    word: "algorithm",
    translations: ["algoritme"],
    keywords: ["algorithmics"]
  },
  {
    word: "alphabet",
    translations: ["alfabet"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "ambiguous",
    translations: ["tvetydig"],
    keywords: ["formal methods"]
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
    keywords: ["algorithmics", "formal methods", "graph"]
  },
  {
    word: "base case",
    translations: ["basis, basisskridt, induktionsstart, startbetingelse"],
    keywords: ["algorithmics", "formal methods"]
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
    word: "character",
    note: "see also \"symbol\"",
    translations: ["tegn"],
    keywords: ["algorithmics", "formal methods", "language theory"]
  },
  {
    word: "class",
    translations: ["klasse"],
    keywords: ["mathematics"]
  },
  {
    word: "closed",
    translations: ["lukket"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "closure",
    translations: ["lukning"],
    keywords: ["formal methods", "graph", "mathematics"]
  },
  {
    word: "closure property",
    translations: ["lukkethedsegenskab"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "collision",
    translations: ["kollision"],
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "combine",
    translations: ["kombiner"],
    keywords: []
  },
  {
    word: "compile",
    translations: ["oversætte"],
    keywords: []
  },
  {
    word: "compiler",
    translations: ["oversætter"],
    keywords: []
  },
  {
    word: "complement",
    translations: ["komplement [kʌmpləˈmεnˀd]"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "complete",
    translations: ["komplet"],
    keywords: ["formal methods", "language theory"]
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
    word: "context-free",
    translations: ["kontekstfri"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "convex",
    translations: ["konveks"],
    keywords: ["algorithmics", "geometry", "mathematics"]
  },
  {
    word: "correctness",
    translations: ["korrekthed"],
    keywords: ["algorithmics", "formal methods"]
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
    word: "decidable",
    translations: ["afgørlig"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "decide",
    translations: ["afgøre"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "decision",
    translations: ["beslutning"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "decision problem",
    translations: ["beslutningsproblem"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "declarative",
    translations: ["deklarativ"],
    keywords: ["formal methods"]
  },
  {
    word: "depth-first",
    translations: ["dybde først"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "derivation",
    translations: ["derivation", "derivationstrin"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "derivation tree",
    translations: ["derivationstræ"],
    keywords: ["formal methods"]
  },
  {
    word: "determinisation",
    translations: ["determinisering"],
    keywords: ["algorithmics", "formal methods", "language theory"]
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
    word: "directed",
    translations: ["orienteret"],
    keywords: ["graph"]
  },
  {
    word: "difference",
    translations: ["difference, forskel"],
    keywords: ["mathematics"]
  },
  {
    word: "distinguish",
    translations: ["skelne"],
    keywords: ["formal methods"]
  },
  {
    word: "distinguishability",
    translations: ["skelnelighed"],
    keywords: ["formal methods"]
  },
  {
    word: "distinguishable",
    translations: ["skelnelig"],
    keywords: ["formal methods"]
  },
  {
    word: "divide-and-conquer",
    translations: ["Del-og-kompinér"],
    keywords: ["algorithmics"]
  },
  {
    word: "edge",
    translations: ["kant"],
    keywords: ["graph"]
  },
  {
    word: "empty",
    translations: ["tom"],
    keywords: ["algorithmics", "formal methods", "language theory", "mathematics"]
  },
  {
    word: "equivalence",
    translations: ["ækvivalens"],
    keywords: ["formal methods", "language theory", "mathematics"]
  },
  {
    word: "equivalence class",
    translations: ["ækvivalensklasse"],
    keywords: ["formal methods", "language theory", "mathematics"]
  },
  {
    word: "equivalence relation",
    translations: ["ækvivalensrelation"],
    keywords: ["formal methods", "language theory", "mathematics"]
  },
  {
    word: "expression",
    translations: ["udtryk"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "finite",
    translations: ["endelig"],
    keywords: ["mathematics"]
  },
  {
    word: "fixpoint",
    translations: ["fixpunkt"],
    keywords: ["formal methods", "language theory", "mathematics"]
  },
  {
    word: "flow",
    translations: ["strømning"],
    keywords: ["algorithmics"]
  },
  {
    word: "function",
    translations: ["funktion"],
    keywords: ["cryptography", "formal methods"]
  },
  {
    word: "grammar",
    translations: ["grammatik"],
    keywords: ["formal methods", "language theory"]
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
    keywords: ["formal methods"]
  },
  {
    word: "incidence matrix",
    translations: ["incidensmatrix"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "indistinguishability",
    translations: ["uskelnelighed"],
    keywords: ["formal methods"]
  },
  {
    word: "indistinguishable",
    translations: ["uskelnelig"],
    keywords: ["formal methods"]
  },
  {
    word: "induction",
    translations: ["induktion"],
    keywords: ["formal methods"]
  },
  {
    word: "induction hypothesis",
    translations: ["induktionshypotese"],
    keywords: ["formal methods"]
  },
  {
    word: "inductive",
    translations: ["induktiv"],
    keywords: ["formal methods"]
  },
  {
    word: "inductive case",
    translations: ["induktionskridt"],
    keywords: ["formal methods"]
  },
  {
    word: "infinite",
    translations: ["uendelig"],
    keywords: ["mathematics"]
  },
  {
    word: "initial state",
    translations: ["starttilstand"],
    keywords: ["formal methods", "graph"]
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
    word: "irregular",
    translations: ["iregulær, ikke-regulær"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "key",
    translations: ["nøgle"],
    keywords: ["cryptography", "algorithmics"]
  },
  {
    word: "language",
    translations: ["sprog"],
    keywords: ["cryptography", "formal methods", "language theory"]
  },
  {
    word: "lexical",
    translations: ["leksikalsk"],
    keywords: ["algorithmics"]
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
    word: "logic",
    translations: ["logik"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "matrix, matrices",
    translations: ["matrix, matrice"],
    keywords: ["mathematics"]
  },
  {
    word: "membership",
    translations: ["medlemsskab"],
    keywords: ["formal methods", "language theory", "mathematics"]
  },
  {
    word: "memory",
    translations: ["hukommelse"],
    keywords: ["algorithmics"]
  },
  {
    word: "minimization",
    note: "GB: minimisation",
    translations: ["minimering"],
    keywords: ["formal methods"]
  },
  {
    word: "monad",
    translations: ["monade"],
    keywords: ["formal methods"]
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
    word: "nondeterministic",
    translations: ["nondeterministisk"],
    keywords: ["algorithmics", "formal methods", "language theory"]
  },
  {
    word: "nonterminal",
    translations: ["nonterminal, ikke-terminal"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "normalisation",
    translations: ["normalisering"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "open adressing",
    translations: ["åben adressering"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "operational",
    translations: ["operationel"],
    keywords: ["formal methods"]
  },
  {
    word: "output",
    translations: ["uddata"],
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "partition",
    translations: ["partition", "partitionering"],
    keywords: ["formal methods", "mathematics"]
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
    word: "precedence",
    translations: ["præcedens"],
    keywords: ["formal methods", "mathematics"]
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
    word: "product construction",
    translations: ["produktkonsruktion"],
    keywords: ["formal methods"]
  },
  {
    word: "property",
    translations: ["egenskab"],
    keywords: ["formal methods", "language theory", "mathematics"]
  },
  {
    word: "quantified",
    translations: ["kvantificeret"],
    keywords: ["formal methods"]
  },
  {
    word: "quantifier",
    translations: ["kvantor"],
    keywords: ["formal methods"]
  },
  {
    word: "queue",
    translations: ["kø"],
    keywords: ["algorithmics"]
  },
  {
    word: "quotient",
    translations: ["kvotient"],
    keywords: ["cryptography", "formal methods", "mathematics"]
  },
  {
    word: "random",
    translations: ["tilfældig"],
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "reachable",
    translations: ["opnåelig"],
    keywords: ["formal methods", "graph", "language theory"]
  },
  {
    word: "recursion",
    translations: ["rekursion"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "recursive",
    translations: ["rekursiv"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "reduction",
    translations: ["reduktion"],
    keywords: ["cryptography", "language theory"]
  },
  {
    word: "reflexive",
    translations: ["refleksiv"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "regular",
    translations: ["regulær"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "regularity",
    translations: ["regularitet"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "relation",
    translations: ["relation"],
    keywords: ["algorithmics",  "formal methods", "graph", "language theory", "mathematics"]
  },
  {
    word: "running time",
    translations: ["udførselstid"],
    keywords: ["algorithmics"]
  },
  {
    word: "satisfiability",
    translations: ["tilfredstillelse"],
    keywords: ["formal methods"]
  },
  {
    word: "satisfiable",
    translations: ["tilfredstillelig"],
    keywords: ["formal methods"]
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
    keywords: ["formal methods", "language theory"]
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
    keywords: ["formal methods", "graph"]
  },
  {
    word: "state space",
    translations: ["tilstandsrum"],
    keywords: ["formal methods"]
  },
  {
    word: "string",
    translations: ["streng, ord"],
    keywords: ["algorithmics", "cryptography", "formal methods", "language theory"]
  },
  {
    word: "subset",
    translations: ["delmængde"],
    keywords: ["mathematics"]
  },
  {
    word: "subset construction",
    translations: ["delmængdekonsruktion"],
    keywords: ["formal methods"]
  },
  {
    word: "suffix",
    translations: ["suffiks"],
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "symbol",
    translations: ["symbol, tegn"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "ternary",
    translations: ["trinær"],
    keywords: []
  },
  {
    word: "terminal",
    translations: ["terminal"],
    keywords: ["formal methods", "language theory"]
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
    keywords: ["formal methods", "graph", "mathematics"]
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
    word: "undecidable",
    translations: ["uafgørlig"],
    keywords: ["language theory"]
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
  {
    word: "unreachable",
    translations: ["uopnåelig"],
    keywords: ["formal methods", "graph", "language theory"]
  },
  {
    word: "validation",
    translations: ["validering"],
    keywords: []
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
  {
    word: "word",
    note: "in computer",
    translations: ["maskinord"],
    keywords: ["algorithmics"]
  },
  {
    word: "word",
    note: "in language",
    translations: ["ord"],
    keywords: ["language theory"]
  },
];