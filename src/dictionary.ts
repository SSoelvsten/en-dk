export const keywords = [
  "algorithmics",
  "complexity theory",
  "cryptography",
  "databases",
  "formal methods",
  "geometry",
  "hashing",
  "graph",
  "greek alphabet",
  "machine learning",
  "mathematics",
] as const;

export type KeyWord = typeof keywords[number];

export type WordType = "sb." | "vb." | "adj." | "adv.";

export type Lexeme = {
  word: string;
  type?: WordType;
  note?: string;
  translations: string[];
  keywords: KeyWord[];
};

export const en_dk : Lexeme[] = [
  {
    word: "accept",
    type: "vb.",
    translations: ["acceptere"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "accepting state",
    type: "sb.",
    translations: ["accepttilstand"],
    keywords: ["complexity theory", "formal methods", "graph"]
  },
  {
    word: "acyclic",
    type: "adj.",
    translations: ["acyklisk"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "adjacency list",
    type: "sb.",
    translations: ["incidensliste"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "affine",
    type: "adj.",
    translations: ["affin"],
    keywords: ["mathematics"]
  },
  {
    word: "algebra",
    type: "sb.",
    translations: ["algebra"],
    keywords: ["mathematics"]
  },
  {
    word: "algebraic",
    type: "adj.",
    translations: ["algebraisk"],
    keywords: ["mathematics"]
  },
  {
    word: "algorithm",
    type: "sb.",
    translations: ["algoritme"],
    keywords: ["algorithmics"]
  },
  {
    word: "alpha",
    note: "Α α",
    translations: ["alfa"],
    keywords: ["greek alphabet"]
  },
  {
    word: "alphabet",
    type: "sb.",
    translations: ["alfabet"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "ambiguous",
    type: "adj.",
    translations: ["tvetydig"],
    keywords: ["formal methods"]
  },
  {
    word: "amortised",
    type: "adj.",
    translations: ["amortiseret"],
    keywords: ["algorithmics"]
  },
  {
    word: "and",
    type: "adv.",
    note: "see also: \"conjunction\"",
    translations: ["og", "både-og"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "associative",
    type: "adj.",
    translations: ["assiociativ"],
    keywords: ["mathematics"]
  },
  {
    word: "asymptotic",
    type: "adj.",
    translations: ["asymptotisk"],
    keywords: ["algorithmics"]
  },
  {
    word: "average",
    type: "adj.",
    translations: ["gennemsnitlig"],
    keywords: ["algorithmics"]
  },
  {
    word: "automata",
    type: "sb.",
    translations: ["automat"],
    keywords: ["algorithmics", "formal methods", "graph"]
  },
  {
    word: "axiom",
    type: "sb.",
    translations: ["aksiom"],
    keywords: ["mathematics"]
  },
  {
    word: "axiomatisation",
    type: "sb.",
    translations: ["aksiomatisering"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "base case",
    type: "sb.",
    translations: ["basis", "basisskridt", "induktionsstart", "startbetingelse"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "beta",
    note: "Β β",
    translations: ["beta"],
    keywords: ["greek alphabet"]
  },
  {
    word: "bipartite",
    type: "adj.",
    translations: ["todelt"],
    keywords: ["graph"]
  },
  {
    word: "binary",
    type: "adj.",
    translations: ["binær"],
    keywords: ["mathematics"]
  },
  {
    word: "bijection",
    type: "sb.",
    translations: ["bijektion"],
    keywords: ["mathematics"]
  },
  {
    word: "bijective",
    type: "adj.",
    translations: ["bijektiv"],
    keywords: ["mathematics"]
  },
  {
    word: "Boolean",
    type: "adj.",
    translations: ["boolsk"],
    keywords: ["mathematics"]
  },
  {
    word: "bottom",
    type: "sb.",
    note: "see also: \"false\"",
    translations: ["bund"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "bottleneck",
    type: "sb.",
    translations: ["flaskehals"],
    keywords: ["algorithmics"]
  },
  {
    word: "bound",
    type: "sb.",
    translations: ["grænse"],
    keywords: ["algorithmics"]
  },
  {
    word: "breadth-first",
    type: "adj.",
    translations: ["bredde først"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "calculus",
    type: "sb.",
    translations: ["kalkyle"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "canonical",
    type: "adj.",
    translations: ["kanonisk"],
    keywords: ["algorithmics", "complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "Cartesian product",
    type: "sb.",
    translations: ["kartesiske produkt"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "chain",
    type: "sb.",
    note: "in hash table",
    translations: ["kollisionsliste"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "character",
    type: "sb.",
    note: "see also \"symbol\"",
    translations: ["tegn"],
    keywords: ["algorithmics", "complexity theory", "formal methods"]
  },
  {
    word: "characteristic",
    type: "sb.",
    translations: ["karakteristisk"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "chi",
    note: "Χ χ",
    translations: ["chi, chei"],
    keywords: ["greek alphabet"]
  },
  {
    word: "class",
    type: "sb.",
    translations: ["klasse"],
    keywords: ["mathematics"]
  },
  {
    word: "closed",
    type: "adj.",
    translations: ["lukket"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "closure",
    type: "sb.",
    translations: ["lukning"],
    keywords: ["formal methods", "graph", "mathematics"]
  },
  {
    word: "closure property",
    type: "sb.",
    translations: ["lukkethedsegenskab"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "collision",
    type: "sb.",
    translations: ["kollision"],
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "combine",
    type: "vb.",
    translations: ["kombiner"],
    keywords: []
  },
  {
    word: "commutative",
    type: "adj.",
    translations: ["kommutativ"],
    keywords: ["mathematics"]
  },
  {
    word: "compile",
    type: "vb.",
    translations: ["oversætte"],
    keywords: []
  },
  {
    word: "compiler",
    type: "sb.",
    translations: ["oversætter"],
    keywords: []
  },
  {
    word: "complement",
    type: "sb.",
    translations: ["komplement [kʌmpləˈmεnˀd]", "komplementærmængde"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "complete",
    type: "adj.",
    translations: ["fuldstændig"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "completeness",
    type: "sb.",
    translations: ["fuldstændighed"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "complexity",
    type: "sb.",
    translations: ["kompleksitet"],
    keywords: ["complexity theory", "algorithmics"]
  },
  {
    word: "component",
    type: "sb.",
    translations: ["komponent"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "computer",
    type: "sb.",
    translations: ["datamat"],
    keywords: []
  },
  {
    word: "computable",
    type: "adj.",
    translations: ["beregnelig"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "computability",
    type: "sb.",
    translations: ["beregnelighed"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "computation",
    type: "sb.",
    translations: ["beregning"],
    keywords: ["complexity theory"]
  },
  {
    word: "concatenate",
    type: "vb.",
    translations: ["konkatenere"],
    keywords: ["complexity theory", "cryptography"]
  },
  {
    word: "configuration",
    type: "sb.",
    translations: ["konfiguration"],
    keywords: ["complexity theory", "algorithmics"]
  },
  {
    word: "conjunction",
    type: "sb.",
    translations: ["konjunktion"],
    keywords: ["formal methods"]
  },
  {
    word: "connected component",
    type: "sb.",
    translations: ["sammenhængskomponent"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "constant",
    type: "sb.",
    translations: ["konstant"],
    keywords: ["algorithmics", "complexity theory", "cryptography", "formal methods", "mathematics"]
  },
  {
    word: "context-free",
    type: "adj.",
    translations: ["kontekstfri"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "contradiction",
    type: "sb.",
    translations: ["modstrid", "kontradiktion"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "convex",
    type: "adj.",
    translations: ["konveks"],
    keywords: ["algorithmics", "geometry", "mathematics"]
  },
  {
    word: "correctness",
    type: "sb.",
    translations: ["korrekthed"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "countable",
    type: "adj.",
    translations: ["tællelig"],
    keywords: ["complexity theory", "mathematics"]
  },
  {
    word: "cut",
    type: "sb.",
    translations: ["snit"],
    keywords: ["graph"]
  },
  {
    word: "cycle",
    type: "sb.",
    translations: ["cykel"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "cyclic",
    type: "adj.",
    translations: ["cyklisk"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "data structure",
    type: "sb.",
    translations: ["datastruktur"],
    keywords: ["algorithmics"]
  },
  {
    word: "decidable",
    type: "adj.",
    translations: ["afgørlig"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "decide",
    type: "vb.",
    translations: ["afgøre"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "decision",
    type: "sb.",
    translations: ["beslutning", "afgørelse"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "decision problem",
    type: "sb.",
    translations: ["beslutningsproblem"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "decision tree",
    type: "sb.",
    translations: ["beslutningstræ"],
    keywords: ["machine learning"]
  },
  {
    word: "declarative",
    type: "adj.",
    translations: ["deklarativ"],
    keywords: ["formal methods"]
  },
  {
    word: "delta",
    note: "Δ δ",
    translations: ["delta"],
    keywords: ["greek alphabet"]
  },
  {
    word: "depth-first",
    type: "adj.",
    translations: ["dybde først"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "derivation",
    type: "sb.",
    translations: ["derivation", "derivationstrin"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "derivation tree",
    type: "sb.",
    translations: ["derivationstræ"],
    keywords: ["formal methods"]
  },
  {
    word: "determinisation",
    type: "sb.",
    translations: ["determinisering"],
    keywords: ["complexity theory", "algorithmics", "formal methods"]
  },
  {
    word: "deterministic",
    type: "adj.",
    translations: ["deterministisk"],
    keywords: ["complexity theory", "algorithmics"]
  },
  {
    word: "diagonalization",
    type: "sb.",
    note: "GB: diagonalisation",
    translations: ["diagonalisering"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "dictionary",
    type: "sb.",
    translations: ["ordbog"],
    keywords: ["algorithmics"]
  },
  {
    word: "directed",
    type: "adj.",
    translations: ["orienteret"],
    keywords: ["graph"]
  },
  {
    word: "directed acyclic graph",
    translations: ["orienteret acyklisk graf"],
    keywords: ["graph"]
  },
  {
    word: "directed edge",
    type: "sb.",
    note: "also : \"arc\"",
    translations: ["orienteret kant"],
    keywords: ["graph"]
  },
  {
    word: "difference",
    type: "sb.",
    translations: ["differens", "difference", "forskel"],
    keywords: ["mathematics"]
  },
  {
    word: "disjunction",
    type: "sb.",
    translations: ["disjunktion"],
    keywords: ["formal methods"]
  },
  {
    word: "distinguish",
    type: "vb.",
    translations: ["skelne"],
    keywords: ["formal methods"]
  },
  {
    word: "distinguishability",
    type: "sb.",
    translations: ["skelnelighed"],
    keywords: ["formal methods"]
  },
  {
    word: "distinguishable",
    type: "adj.",
    translations: ["skelnelig"],
    keywords: ["formal methods"]
  },
  {
    word: "distributive",
    type: "adj.",
    translations: ["distributiv"],
    keywords: ["mathematics"]
  },
  {
    word: "divide-and-conquer",
    translations: ["del-og-kombinér"],
    keywords: ["algorithmics"]
  },
  {
    word: "edge",
    type: "sb.",
    translations: ["kant"],
    keywords: ["graph", "geometry"]
  },
  {
    word: "empty",
    type: "adj.",
    translations: ["tom"],
    keywords: ["algorithmics", "complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "empty set",
    type: "sb.",
    translations: ["tomme mængde"],
    keywords: ["mathematics"]
  },
  {
    word: "enumerate",
    type: "vb.",
    translations: ["enumerere", "opliste"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "enumerable",
    type: "adj.",
    translations: ["enumererbar", "oplistelig"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "epsilon",
    note: "Ε ε",
    translations: ["epsilon"],
    keywords: ["greek alphabet"]
  },
  {
    word: "equivalence",
    type: "sb.",
    translations: ["ækvivalens"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "equivalence class",
    type: "sb.",
    translations: ["ækvivalensklasse"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "equivalence relation",
    type: "sb.",
    translations: ["ækvivalensrelation"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "eta",
    note: "Η η",
    translations: ["eta"],
    keywords: ["greek alphabet"]
  },
  {
    word: "expression",
    type: "sb.",
    translations: ["udtryk"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "expressability",
    type: "sb.",
    translations: ["udtrykskraft"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "false",
    type: "sb.",
    note: "see also: \"bot\"",
    translations: ["falsk"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "finite",
    type: "adj.",
    translations: ["endelig"],
    keywords: ["mathematics"]
  },
  {
    word: "fixpoint",
    type: "sb.",
    translations: ["fixpunkt"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "flow",
    type: "sb.",
    translations: ["strømning"],
    keywords: ["algorithmics"]
  },
  {
    word: "for all",
    type: "adj.",
    note: "also \"universal\"",
    translations: ["for alle", "universel"],
    keywords: ["formal methods"]
  },
  {
    word: "formal",
    type: "adj.",
    translations: ["formel"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "free",
    type: "adj.",
    translations: ["fri"],
    keywords: ["formal methods"]
  },
  {
    word: "function",
    type: "sb.",
    translations: ["funktion"],
    keywords: ["cryptography", "formal methods"]
  },
  {
    word: "gamma",
    note: "Γ γ",
    translations: ["gamma"],
    keywords: ["greek alphabet"]
  },
  {
    word: "grammar",
    type: "sb.",
    translations: ["grammatik"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "graph",
    type: "sb.",
    translations: ["graf"],
    keywords: ["graph"]
  },
  {
    word: "greedy",
    type: "adj.",
    translations: ["grådig"],
    keywords: ["algorithmics"]
  },
  {
    word: "hash",
    type: "vb.",
    translations: ["hakke"],
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash function",
    type: "sb.",
    translations: ["hakkefunktion"],
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash table",
    type: "sb.",
    translations: ["hakketabel"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "heap",
    type: "sb.",
    translations: ["hob"],
    keywords: ["algorithmics"]
  },
  {
    word: "hidden layer",
    type: "sb.",
    translations: ["skjulte lagg"],
    keywords: ["machine learning"]
  },
  {
    word: "hull",
    type: "sb.",
    translations: ["hylster"],
    keywords: ["algorithmics", "geometry"]
  },
  {
    word: "human-computer interaction",
    translations: ["menneske-maskine interaktion"],
    keywords: []
  },
  {
    word: "iff",
    note: "abr. \"if and only if\"",
    translations: ["hviss (hvis og kun hvis)"],
    keywords: ["mathematics"]
  },
  {
    word : "implication",
    type: "sb.",
    translations: ["implikation"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "implies",
    type: "adv.",
    translations: ["medfører, implikation"],
    keywords: ["formal methods"]
  },
  {
    word: "imply",
    type: "vb.",
    translations: ["medføre"],
    keywords: ["formal methods"]
  },
  {
    word: "incidence matrix",
    type: "sb.",
    translations: ["incidensmatrix"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "incomplete",
    type: "adj.",
    translations: ["ufuldstændig"],
    keywords: ["formal methods"]
  },
  {
    word: "indistinguishability",
    type: "sb.",
    translations: ["uskelnelighed"],
    keywords: ["formal methods"]
  },
  {
    word: "indistinguishable",
    type: "adj.",
    translations: ["uskelnelig"],
    keywords: ["formal methods"]
  },
  {
    word: "induction",
    type: "sb.",
    translations: ["induktion"],
    keywords: ["formal methods"]
  },
  {
    word: "induction hypothesis",
    type: "sb.",
    translations: ["induktionshypotese"],
    keywords: ["formal methods"]
  },
  {
    word: "inductive",
    type: "adj.",
    translations: ["induktiv"],
    keywords: ["formal methods"]
  },
  {
    word: "inductive case",
    type: "sb.",
    translations: ["induktionstilfælde"],
    keywords: ["formal methods"]
  },
  {
    word: "inductive step",
    type: "sb.",
    translations: ["induktionsskridt"],
    keywords: ["formal methods"]
  },
  {
    word: "infinite",
    type: "adj.",
    translations: ["uendelig"],
    keywords: ["mathematics"]
  },
  {
    word: "informal",
    type: "sb.",
    translations: ["uformel"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "initial state",
    type: "sb.",
    translations: ["starttilstand"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "injective",
    type: "adj.",
    translations: ["injektiv"],
    keywords: ["mathematics"]
  },
  {
    word: "input",
    type: "sb.",
    translations: ["inddata"],
    keywords: ["complexity theory", "algorithmics", "cryptography"]
  },
  {
    word: "intersection",
    type: "sb.",
    translations: ["fællesmængde", "snit, snitmængde"],
    keywords: ["mathematics"]
  },
  {
    word: "invariant",
    type: "sb.",
    translations: ["invariant"],
    keywords: ["algorithmics"]
  },
  {
    word: "iota",
    note: "Ι ι",
    translations: ["jota", "iota"],
    keywords: ["greek alphabet"]
  },
  {
    word: "irregular",
    type: "adj.",
    translations: ["iregulær, ikke-regulær"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "kappa",
    note: "Κ κ",
    translations: ["kappa"],
    keywords: ["greek alphabet"]
  },
  {
    word: "key",
    type: "sb.",
    translations: ["nøgle"],
    keywords: ["cryptography", "algorithmics"]
  },
  {
    word: "lambda",
    note: "Λ λ",
    translations: ["lambda"],
    keywords: ["greek alphabet"]
  },
  {
    word: "language",
    type: "sb.",
    translations: ["sprog"],
    keywords: ["complexity theory", "cryptography", "formal methods"]
  },
  {
    word: "language property",
    type: "sb.",
    translations: ["sprogegenskab"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "lexical",
    type: "adj.",
    translations: ["leksikalsk"],
    keywords: ["algorithmics"]
  },
  {
    word: "lexicographic",
    type: "adj.",
    translations: ["leksikografisk"],
    keywords: ["algorithmics"]
  },
  {
    word: "linear",
    type: "adj.",
    translations: ["lineær"],
    keywords: ["mathematics"]
  },
  {
    word: "linked list",
    type: "sb.",
    translations: ["kædet liste, kædede lister"],
    keywords: ["algorithmics"]
  },
  {
    word: "location",
    type: "sb.",
    translations: ["lokation"],
    keywords: ["graph"]
  },
  {
    word: "logic",
    type: "sb.",
    translations: ["logik"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "lower bound",
    type: "sb.",
    translations: ["nedre grænse"],
    keywords: ["algorithmics"]
  },
  {
    word: "machine learning",
    type: "sb.",
    translations: ["maskinlæring"],
    keywords: ["machine learning"]
  },
  {
    word: "matrix, matrices",
    type: "sb.",
    translations: ["matrix", "matrice"],
    keywords: ["mathematics"]
  },
  {
    word: "map",
    type: "sb.",
    note: "also \"mapping\"",
    translations: ["afbildning"],
    keywords: ["mathematics"]
  },
  {
    word: "membership",
    type: "sb.",
    translations: ["medlemsskab"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "memory",
    type: "sb.",
    translations: ["hukommelse"],
    keywords: ["algorithmics"]
  },
  {
    word: "minimization",
    type: "sb.",
    note: "GB: minimisation",
    translations: ["minimering"],
    keywords: ["formal methods"]
  },
  {
    word: "model",
    type: "sb.",
    translations: ["model"],
    keywords: ["formal methods"]
  },
  {
    word: "monad",
    type: "sb.",
    translations: ["monade"],
    keywords: ["formal methods"]
  },
  {
    word: "monadic",
    type: "adj.",
    translations: ["monadisk"],
    keywords: []
  },
  {
    word: "mu",
    note: "Μ μ",
    translations: ["my"],
    keywords: ["greek alphabet"]
  },
  {
    word: "mu-calculus",
    note: "μ-calculus",
    translations: ["my-kalkyle"],
    keywords: ["formal methods"]
  },
  {
    word: "narrow",
    type: "adj.",
    translations: ["tynd"],
    keywords: ["graph"]
  },
  {
    word: "natural deduction",
    type: "sb.",
    translations: ["naturlig deduktion"],
    keywords: ["formal methods"]
  },
  {
    word: "node",
    type: "sb.",
    translations: ["knude"],
    keywords: ["graph"]
  },
  {
    word: "nondeterministic",
    type: "adj.",
    translations: ["nondeterministisk", "ikke-deterministisk"],
    keywords: ["algorithmics", "complexity theory", "formal methods"]
  },
  {
    word: "nonterminal",
    type: "sb.",
    translations: ["nonterminal", "ikke-terminal"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "non-trivial",
    type: "adj.",
    translations: ["ikke triviel"],
    keywords: []
  },
  {
    word: "normalisation",
    type: "sb.",
    translations: ["normalisering"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "not",
    type: "adv.",
    note: "also: \"negation\"",
    translations: ["ikke", "negation"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "nu",
    note: "Ν ν",
    translations: ["ny"],
    keywords: ["greek alphabet"]
  },
  {
    word: "omega",
    note: "Ω ω",
    translations: ["omega"],
    keywords: ["greek alphabet"]
  },
  {
    word: "omicron",
    note: "Ο ο",
    translations: ["omikron"],
    keywords: ["greek alphabet"]
  },
  {
    word: "open adressing",
    type: "sb.",
    translations: ["åben adressering"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "operational",
    type: "adj.",
    translations: ["operationel"],
    keywords: ["formal methods"]
  },
  {
    word: "or",
    type: "adv.",
    note: "see also: \"disjunction\"",
    translations: ["eller", "og/eller"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "order",
    type: "sb.",
    translations: ["orden", "rækkefølge", "sortering", "ordning"],
    keywords: ["algorithmics", "complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "ordered",
    type: "adj.",
    translations: ["ordnet", "sorteret"],
    keywords: ["algorithmics", "mathematics"]
  },
  {
    word: "output",
    type: "sb.",
    translations: ["uddata"],
    keywords: ["algorithmics", "complexity theory", "cryptography"]
  },
  {
    word: "paradigm",
    type: "sb.",
    note: "programming",
    translations: ["paradigme"],
    keywords: []
  },
  {
    word: "partial",
    type: "adj.",
    translations: ["partiel"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "partial correctness",
    type: "sb.",
    translations: ["partiel korrekthed"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "partition",
    type: "sb.",
    translations: ["partition", "partitionering"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "path",
    type: "sb.",
    translations: ["sti", "vej"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "path compression",
    type: "sb.",
    translations: ["stikomprimering"],
    keywords: ["algorithmics"]
  },
  {
    word: "pattern",
    type: "sb.",
    translations: ["mønster"],
    keywords: ["algorithmics"]
  },
  {
    word: "phi",
    note: "Φ φ",
    translations: ["phi", "phei"],
    keywords: ["greek alphabet"]
  },
  {
    word: "planar",
    type: "adj.",
    translations: ["planær"],
    keywords: ["graph"]
  },
  {
    word: "pi",
    note: "Π π",
    translations: ["pi"],
    keywords: ["greek alphabet"]
  },
  {
    word: "precedence",
    type: "sb.",
    translations: ["præcedens"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "predicate",
    type: "sb.",
    translations: ["prædikat"],
    keywords: ["algorithmics", "complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "prefix",
    type: "sb.",
    translations: ["præfiks"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "premise",
    type: "sb.",
    translations: ["præmis"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "priority queue",
    type: "sb.",
    translations: ["prioritetskø"],
    keywords: ["algorithmics"]
  },
  {
    word: "product construction",
    type: "sb.",
    translations: ["produktkonstruktion"],
    keywords: ["formal methods"]
  },
  {
    word: "production",
    type: "sb.",
    translations: ["produktion"],
    keywords: ["formal methods"]
  },
  {
    word: "projection",
    type: "sb.",
    translations: ["projektion"],
    keywords: ["databases", "mathematics"]
  },
  {
    word: "proof",
    type: "sb.",
    translations: ["bevis"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "proof rule",
    type: "sb.",
    translations: ["bevisregel"],
    keywords: ["formal methods"]
  },
  {
    word: "property",
    type: "sb.",
    translations: ["egenskab"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "psi",
    note: "Ψ ψ",
    translations: ["psi"],
    keywords: ["greek alphabet"]
  },
  {
    word: "quantified",
    type: "adj.",
    translations: ["kvantificeret"],
    keywords: ["formal methods"]
  },
  {
    word: "quantifier",
    type: "sb.",
    translations: ["kvantor"],
    keywords: ["formal methods"]
  },
  {
    word: "queue",
    type: "sb.",
    translations: ["kø"],
    keywords: ["algorithmics"]
  },
  {
    word: "quotient",
    type: "sb.",
    translations: ["kvotient"],
    keywords: ["cryptography", "formal methods", "mathematics"]
  },
  {
    word: "random",
    type: "adj.",
    translations: ["tilfældig"],
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "rank",
    type: "sb.",
    translations: ["rang"],
    keywords: ["algorithmics"]
  },
  {
    word: "reachable",
    type: "adj.",
    translations: ["opnåelig"],
    keywords: ["complexity theory", "formal methods", "graph"]
  },
  {
    word: "recursion",
    type: "sb.",
    translations: ["rekursion"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "recursive",
    type: "adj.",
    translations: ["rekursiv"],
    keywords: ["algorithmics", "complexity theory", "formal methods"]
  },
  {
    word: "recursively enumerable",
    type: "adj.",
    translations: ["rekursiv enumerabel"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "reduction",
    type: "sb.",
    translations: ["reduktion"],
    keywords: ["complexity theory", "cryptography"]
  },
  {
    word: "reflexive",
    type: "adj.",
    translations: ["reflektiv"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "regular",
    type: "adj.",
    translations: ["regulær"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "regularity",
    type: "sb.",
    translations: ["regularitet"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "regular expression",
    type: "sb.",
    translations: ["regulær udtryk"],
    keywords: ["complexity theory"]
  },
  {
    word: "reject",
    type: "vb.",
    translations: ["afvise"],
    keywords: ["complexity theory", "cryptography", "formal methods"]
  },
  {
    word: "relation",
    type: "sb.",
    translations: ["relation"],
    keywords: ["algorithmics", "complexity theory", "formal methods", "graph", "mathematics"]
  },
  {
    word: "rename",
    type: "vb.",
    translations: ["omdøbe", "omnavngive"],
    keywords: ["formal methods"]
  },
  {
    word: "rho",
    note: "Ρ ρ",
    translations: ["rho"],
    keywords: ["greek alphabet"]
  },
  {
    word: "running time",
    type: "sb.",
    translations: ["udførselstid", "kørselstid"],
    keywords: ["algorithmics"]
  },
  {
    word: "satisfiability",
    type: "sb.",
    translations: ["tilfredstillelse"],
    keywords: ["formal methods"]
  },
  {
    word: "satisfiable",
    type: "adj.",
    translations: ["tilfredstillelig"],
    keywords: ["formal methods"]
  },
  {
    word: "satisfy",
    type: "vb.",
    translations: ["tilfredstille"],
    keywords: ["formal methods"]
  },
  {
    word: "search tree",
    type: "sb.",
    translations: ["søgetræ"],
    keywords: ["algorithmics"]
  },
  {
    word: "set",
    type: "sb.",
    translations: ["mængde"],
    keywords: ["mathematics"]
  },
  {
    word: "semantics",
    type: "sb.",
    translations: ["semantik"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "semantic entailment",
    translations: ["logisk konsekvens"],
    keywords: ["formal methods"]
  },
  {
    word: "sequence",
    type: "sb.",
    translations: ["sekvens"],
    keywords: ["complexity theory", "algorithmics"]
  },
  {
    word: "sigma",
    note: "Σ σ, ς",
    translations: ["sigma"],
    keywords: ["greek alphabet"]
  },
  {
    word: "simplex",
    translations: ["simpleks"],
    keywords: ["geometry"]
  },
  {
    word: "simplicial complex",
    type: "adj.",
    translations: ["simplicielt kompleks"],
    keywords: ["geometry"]
  },
  {
    word: "sink",
    type: "sb.",
    translations: ["dræn", "afløb"],
    keywords: ["graph"]
  },
  {
    word: "sound",
    type: "adj.",
    translations: ["sund"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "source",
    type: "sb.",
    translations: ["kilde"],
    keywords: ["graph"]
  },
  {
    word: "space",
    type: "sb.",
    translations: ["plads"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "space complexity",
    type: "sb.",
    translations: ["pladskompleksitet"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "square",
    type: "sb.",
    note: "on a tape",
    translations: ["felt"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "stack",
    type: "sb.",
    translations: ["stak"],
    keywords: ["algorithmics"]
  },
  {
    word: "state",
    type: "sb.",
    translations: ["tilstand"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "state space",
    type: "sb.",
    translations: ["tilstandsrum"],
    keywords: ["formal methods"]
  },
  {
    word: "string",
    type: "sb.",
    translations: ["streng", "ord"],
    keywords: ["algorithmics", "complexity theory", "cryptography", "formal methods"]
  },
  {
    word: "subset",
    type: "sb.",
    translations: ["delmængde"],
    keywords: ["mathematics"]
  },
  {
    word: "subset construction",
    type: "sb.",
    translations: ["delmængdekonsruktion"],
    keywords: ["formal methods"]
  },
  {
    word: "suffix",
    type: "sb.",
    translations: ["suffiks"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "supervised learning",
    type: "sb.",
    translations: ["overvåget læring"],
    keywords: ["machine learning"]
  },
  {
    word: "surjective",
    type: "adj.",
    translations: ["surjektiv"],
    keywords: ["mathematics"]
  },
  {
    word: "symbol",
    type: "sb.",
    translations: ["symbol", "tegn"],
    keywords: ["formal methods", "complexity theory"]
  },
  {
    word: "symmetric",
    type: "adj.",
    translations: ["symmetrisk"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "syntax",
    type: "sb.",
    translations: ["syntaks"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "tape",
    type: "sb.",
    translations: ["bånd"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "tau",
    note: "Τ τ",
    translations: ["tau"],
    keywords: ["greek alphabet"]
  },
  {
    word: "tautology",
    type: "sb.",
    translations: ["tautologi"],
    keywords: ["formal methods"]
  },
  {
    word: "ternary",
    type: "sb.",
    translations: ["trinær"],
    keywords: []
  },
  {
    word: "terminal",
    type: "sb.",
    translations: ["terminal"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "termination",
    type: "sb.",
    note: "also: \"halt\"",
    translations: ["terminering"],
    keywords: ["algorithmics", "complexity theory", "formal methods"]
  },
  {
    word: "theta",
    note: "Θ θ",
    translations: ["theta"],
    keywords: ["greek alphabet"]
  },
  {
    word: "time complexity",
    type: "sb.",
    translations: ["tidskompleksitet"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "top",
    type: "sb.",
    note: "see also: \"true\"",
    translations: ["top"],
    keywords: ["cryptography", "formal methods"]
  },
  {
    word: "topologic, topological",
    type: "adj.",
    translations: ["topologisk"],
    keywords: ["algorithmics", "graph"]
  },
  {
      word: "topological order",
      type: "sb.",
      translations: ["topologisk ordning"],
      keywords: ["algorithmics", "graph"]
  },
  {
      word: "topological ordered",
      type: "adj.",
      translations: ["topologisk ordnet"],
      keywords: ["algorithmics", "graph"]
  },
  {
    word: "topological sort",
    type: "sb.",
    translations: ["topologisk sortering"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "total",
    type: "adj.",
    note: "automata",
    translations: ["fuldstændig"],
    keywords: ["formal methods", "graph", "mathematics"]
  },
  {
    word: "total correctness",
    type: "sb.",
    translations: ["total korrekthed"],
    keywords: ["formal methods"]
  },
  {
    word: "transition",
    type: "sb.",
    translations: ["transition"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "transition function",
    type: "sb.",
    translations: ["transitionsfunktion"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "transition system",
    type: "sb.",
    translations: ["transitionssystem"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "transitive",
    type: "adj.",
    translations: ["transitiv"],
    keywords: ["formal methods", "graph", "mathematics"]
  },
  {
    word: "trie",
    type: "sb.",
    translations: ["trie"],
    keywords: ["algorithmics"]
  },
  {
    word: "trivial",
    type: "adj.",
    translations: ["triviel"],
    keywords: []
  },
  {
    word: "true",
    type: "sb.",
    note: "see also: \"top\"",
    translations: ["sand"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "truth table",
    type: "sb.",
    translations: ["sandhedstabel"],
    keywords: ["formal methods"]
  },
  {
    word: "undirected",
    type: "adj.",
    translations: ["uorienteret"],
    keywords: ["graph"]
  },
  {
    word: "unary",
    type: "adj.",
    translations: ["unær"],
    keywords: []
  },
  {
    word: "uncountable",
    type: "adj.",
    translations: ["overtællelig"],
    keywords: ["complexity theory", "mathematics"]
  },
  {
    word: "undecidable",
    type: "adj.",
    note: "also: \"non-decidable\"",
    translations: ["uafgørlig"],
    keywords: ["complexity theory"]
  },
  {
    word: "union",
    type: "sb.",
    translations: ["forening", "foreningsmængde"],
    keywords: ["mathematics"]
  },
  {
    word: "universal",
    type: "adj.",
    translations: ["universel"],
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "unreachable",
    type: "sb.",
    translations: ["uopnåelig"],
    keywords: ["complexity theory", "formal methods", "graph"]
  },
  {
    word: "upsilon",
    note: "Υ υ",
    translations: ["ypsilon"],
    keywords: ["greek alphabet"]
  },
  {
    word: "upper bound",
    type: "sb.",
    translations: ["øvre grænse"],
    keywords: ["algorithmics"]
  },
  {
    word: "valid",
    type: "adj.",
    translations: ["gyldig"],
    keywords: ["formal methods"]
  },
  {
    word: "validation",
    type: "sb.",
    translations: ["validering"],
    keywords: []
  },
  { // TODO: Add actual references
    word: "vertex, vertice",
    type: "sb.",
    note: "see also \"node\"",
    translations: ["hjørne", "punkt"],
    keywords: ["geometry", "graph"]
  },
  {
    word: "weight",
    type: "sb.",
    translations: ["vægt"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "wide",
    type: "adj.",
    translations: ["bred"],
    keywords: ["graph"]
  },
  {
    word: "width",
    type: "sb.",
    translations: ["bredde"],
    keywords: ["graph"]
  },
  {
    word: "word",
    type: "sb.",
    translations: ["ord"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "word",
    type: "sb.",
    note: "in hardware",
    translations: ["maskinord"],
    keywords: []
  },
  {
    word: "xor",
    type: "adv.",
    note: "also: \"exclusive or\"",
    translations: ["enten-eller", "eksklusivt eller"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "xi",
    note: "Ξ ξ",
    translations: ["xi"],
    keywords: ["greek alphabet"]
  },
  {
    word: "zeta",
    note: "Ζ ζ",
    translations: ["zeta"],
    keywords: ["greek alphabet"]
  },
];
