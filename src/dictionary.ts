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
  "programming languages",
  "software engineering"
] as const;

export type KeyWord = typeof keywords[number];

export type WordType = "sb." | "vb." | "adj." | "adv.";

export type Lexeme = {
  word: string;
  type?: WordType;
  note?: string;
  translations: string[];
  keywords: KeyWord[];
  phrases?: [string, string][];
};

export const en_dk : Lexeme[] = [
  {
    word: "accept",
    type: "vb.",
    translations: ["acceptere, -r, -de, -t"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "accepting state",
    type: "sb.",
    translations: ["accepttilstand, -en, -e, -ene"],
    keywords: ["complexity theory", "formal methods", "graph"]
  },
  {
    word: "acyclic",
    type: "adj.",
    translations: ["acyklisk, -, -e"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "adjacency list",
    type: "sb.",
    translations: ["incidensliste, -n, -r, -rne"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "affine",
    type: "adj.",
    translations: ["affin, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "algebra",
    type: "sb.",
    translations: ["algebra, -en, -er, -erne"],
    keywords: ["mathematics"]
  },
  {
    word: "algebraic",
    type: "adj.",
    translations: ["algebraisk, -, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "algorithm",
    type: "sb.",
    translations: ["algoritme, -n, -r, -rne"],
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
    translations: ["alfabet, -et, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "ambiguous",
    type: "adj.",
    translations: ["tvetydig, -t, -e"],
    keywords: ["formal methods"]
  },
  {
    word: "amortised",
    type: "adj.",
    translations: ["amortise|ret, -ret, -rede"],
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
    translations: ["assiociativ, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "asymptotic",
    type: "adj.",
    translations: ["asymptotisk, -, -e"],
    keywords: ["algorithmics"]
  },
  {
    word: "average",
    type: "adj.",
    translations: ["gennemsnitlig, -t, -e"],
    keywords: ["algorithmics"]
  },
  {
    word: "automata",
    type: "sb.",
    translations: ["automat, -en, -er, -erne"],
    keywords: ["algorithmics", "formal methods", "graph"]
  },
  {
    word: "axiom",
    type: "sb.",
    translations: ["aksiom, -et, -er, -erne"],
    keywords: ["mathematics"]
  },
  {
    word: "axiomatisation",
    type: "sb.",
    translations: ["aksiomatisering, -en, -er, -erne"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "base case",
    type: "sb.",
    translations: [
      "basis, basen, baser, baserne",
      "basisskridt, -et, -, -ene",
      "induktionsstart, -en, -er, -erne",
      "startbetingelse, -n, -r, -rne"
    ],
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
    translations: ["todelt, -, -e"],
    keywords: ["graph"]
  },
  {
    word: "binary",
    type: "adj.",
    translations: ["binær, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "bijection",
    type: "sb.",
    translations: ["bijektion, -en, -er, -erne"],
    keywords: ["mathematics"]
  },
  {
    word: "bijective",
    type: "adj.",
    translations: ["bijektiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "bit",
    type: "sb.",
    translations: ["bit, -ten, -s, -tene"],
    keywords: []
  },
  {
    word: "blockchain",
    type: "sb.",
    translations: ["blok-kæde, -n, -r, -rne"],
    keywords: ["cryptography"]
  },
  {
    word: "Boolean",
    type: "adj.",
    translations: ["boolsk, -, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "bottom",
    type: "sb.",
    note: "see also: \"false\"",
    translations: ["bund, -en, -e, -ene"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "bottleneck",
    type: "sb.",
    translations: ["flaskehals, -en, -e, -erne"],
    keywords: ["algorithmics"]
  },
  {
    word: "bound",
    type: "sb.",
    translations: ["grænse, -n, -r, -rne"],
    keywords: ["algorithmics", "mathematics"]
  },
  {
    word: "bound",
    type: "vb.",
    translations: ["begrænse, -r, -de, -t"],
    keywords: ["algorithmics", "mathematics"]
  },
  {
    word: "breadth-first",
    type: "adj.",
    translations: ["bredde først, -, -"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "byte",
    type: "sb.",
    translations: ["byte, -n, -s, -ne"],
    keywords: []
  },
  {
    word: "calculus",
    type: "sb.",
    translations: ["kalkyle, -n, -r, -rne"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "canonical",
    type: "adj.",
    translations: ["kanonisk, -, -e"],
    keywords: ["algorithmics", "complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "Cartesian product",
    type: "sb.",
    translations: ["(det) kartesiske produkt"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "chain",
    type: "sb.",
    translations: [
      "kæde, -n, -r, -rne",
      "(hash table) kollisionsliste, -n, -r, -rne"
    ],
    keywords: ["algorithmics", "hashing"],
    phrases: [
      ["The table uses hashing with chaining", "Tabellen bruger kollisionslister"]
    ]
  },
  {
    word: "character",
    type: "sb.",
    note: "see also \"symbol\"",
    translations: ["tegn, -et, -, -ene"],
    keywords: ["algorithmics", "complexity theory", "formal methods"]
  },
  {
    word: "characteristic",
    type: "adj.",
    translations: ["karakteristisk, -, -e"],
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
    translations: ["klasse, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    word: "closed",
    type: "adj.",
    translations: ["luk|ket, -ket, -kede"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "closure",
    type: "sb.",
    translations: ["lukning, -en, -er, -erne"],
    keywords: ["formal methods", "graph", "mathematics"]
  },
  {
    word: "closure property",
    type: "sb.",
    translations: ["lukkethedsegenskab, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "collision",
    type: "sb.",
    translations: ["kollision, -en, -er, -erne"],
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "combine",
    type: "vb.",
    translations: ["kombinere, -r, -de, -t"],
    keywords: []
  },
  {
    word: "commutative",
    type: "adj.",
    translations: ["kommutativ, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "compile",
    type: "vb.",
    translations: ["over|sætte, -sætter, -satte, -sat"],
    keywords: ["programming languages"]
  },
  {
    word: "compiler",
    type: "sb.",
    translations: ["oversætter, -en, -e, -ne"],
    keywords: ["programming languages"]
  },
  {
    word: "complement",
    type: "sb.",
    translations: [
      "komplement [kʌmpləˈmεnˀd], -et, -er, -erne",
      "komplementærmængde, -n, -r, -rne"
    ],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "complete",
    type: "adj.",
    translations: ["fuldstændig, -t, -e"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "completeness",
    type: "sb.",
    translations: ["fuldstændighed, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "complexity",
    type: "sb.",
    translations: ["kompleksitet, -en, -er, -erne"],
    keywords: ["complexity theory", "algorithmics"]
  },
  {
    word: "component",
    type: "sb.",
    translations: ["komponent, -en, -er, -erne"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "computer",
    type: "sb.",
    translations: ["datamat, -en, -er, -erne"],
    keywords: []
  },
  {
    word: "computer science",
    type: "sb.",
    translations: ["datalogi, -en"],
    keywords: []
  },
  {
    word: "computer scientist",
    type: "sb.",
    translations: ["datalog, -en, -er, -erne"],
    keywords: []
  },
  {
    word: "computable",
    type: "adj.",
    translations: ["beregnelig, -t, -e"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "computability",
    type: "sb.",
    translations: ["beregnelighed, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "computation",
    type: "sb.",
    translations: ["beregning, -en, -er, -erne"],
    keywords: ["complexity theory"]
  },
  {
    word: "concatenate",
    type: "vb.",
    translations: ["konkatenere, -r, -de, -t"],
    keywords: ["complexity theory", "cryptography"]
  },
  {
    word: "configuration",
    type: "sb.",
    translations: ["konfiguration, -en, -er, -erne"],
    keywords: ["complexity theory", "algorithmics"]
  },
  {
    word: "conjunction",
    type: "sb.",
    translations: ["konjunktion, -en, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "connected component",
    type: "sb.",
    translations: ["sammenhængskomponent, -en, -er, -erne"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "constant",
    type: "sb.",
    translations: ["konstant, -en, -er, -erne"],
    keywords: ["algorithmics", "complexity theory", "cryptography", "formal methods", "mathematics"]
  },
  {
    word: "context-free",
    type: "adj.",
    translations: ["kontekstfri, -t, -e"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "contradiction",
    type: "sb.",
    translations: [
      "modstrid, -en",
      "kontradiktion, -en, -er, -erne"
    ],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "convex",
    type: "adj.",
    translations: ["konveks, -t, -e"],
    keywords: ["algorithmics", "geometry", "mathematics"]
  },
  {
    word: "correctness",
    type: "sb.",
    translations: ["korrekthed, -en"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "countable",
    type: "adj.",
    translations: ["tællelig, -t, -e"],
    keywords: ["complexity theory", "mathematics"]
  },
  {
    word: "cut",
    type: "sb.",
    translations: ["snit, -tet, -, -tene"],
    keywords: ["graph"]
  },
  {
    word: "cycle",
    type: "sb.",
    translations: ["cy|kel, -klen, -kler, -klerne"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "cyclic",
    type: "adj.",
    translations: ["cyklisk, -, -e"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "data structure",
    type: "sb.",
    translations: ["datastruktur, -en, -er, -erne"],
    keywords: ["algorithmics"]
  },
  {
    word: "debugger",
    type: "sb.",
    translations: ["fejlfinder, -en, -e, -ne"],
    keywords: ["software engineering"]
  },
  {
    word: "decidable",
    type: "adj.",
    translations: ["afgørlig, -t, -e"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "decide",
    type: "vb.",
    translations: [
      "beslutte, -r, -de, -t",
      "afgøre, -r, afgjorde, afgjort"
    ],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "decision",
    type: "sb.",
    translations: [
      "beslutning, -en, -er, -erne",
      "afgørelse, -n, -r, -rne"
    ],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "decision problem",
    type: "sb.",
    translations: ["beslutningsproblem, -et, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "decision tree",
    type: "sb.",
    translations: ["beslutningstræ, -et, -er, -erne"],
    keywords: ["machine learning"]
  },
  {
    word: "declarative",
    type: "adj.",
    translations: ["deklarativ, -t, -e"],
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
    translations: ["dybde først, -, -"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "derivation",
    type: "sb.",
    translations: [
      "derivation, -en, -er, -erne",
      "derivationstrin, -net, -, -nene"
    ],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "derivation tree",
    type: "sb.",
    translations: ["derivationstræ, -et, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "determinisation",
    type: "sb.",
    translations: ["determinisering, -en, -er, -erne"],
    keywords: ["complexity theory", "algorithmics", "formal methods"]
  },
  {
    word: "deterministic",
    type: "adj.",
    translations: ["deterministisk, -, -e"],
    keywords: ["complexity theory", "algorithmics"]
  },
  {
    word: "diagonalization",
    type: "sb.",
    note: "GB: diagonalisation",
    translations: ["diagonalisering, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "dictionary",
    type: "sb.",
    translations: ["ord|bog, -bogen, -bøger, -bøgerne"],
    keywords: ["algorithmics"]
  },
  {
    word: "directed",
    type: "adj.",
    translations: ["oriente|ret, -ret, -rede"],
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
    translations: ["orienteret kant, _, -er, _"],
    keywords: ["graph"]
  },
  {
    word: "difference",
    type: "sb.",
    translations: [
      "differens, -en, -er, -erne",
      "difference,  -n, -r, -rne",
      "forskel, -len, -le, -lene"
    ],
    keywords: ["mathematics"]
  },
  {
    word: "disjunction",
    type: "sb.",
    translations: ["disjunktion, -en, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "distinguish",
    type: "vb.",
    translations: ["skelne, -r, -de, -t"],
    keywords: ["formal methods"]
  },
  {
    word: "distinguishability",
    type: "sb.",
    translations: ["skelnelighed, -en, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "distinguishable",
    type: "adj.",
    translations: ["skelnelig, -t, -e"],
    keywords: ["formal methods"]
  },
  {
    word: "distributive",
    type: "adj.",
    translations: ["distributiv, -t, -e"],
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
    translations: ["kant, -en, -er, -erne"],
    keywords: ["graph", "geometry"]
  },
  {
    word: "empty",
    type: "adj.",
    translations: ["tom, -t, -me"],
    keywords: ["algorithmics", "complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "enumerate",
    type: "vb.",
    translations: [
      "enumerere, -r, -de, -t",
      "opliste, -r, -de, -t"
    ],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "enumerable",
    type: "adj.",
    translations: [
      "enumererbar, -t, -e",
      "oplistelig, -t, -e"
    ],
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
    translations: ["ækvivalens, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "equivalence class",
    type: "sb.",
    translations: ["ækvivalensklasse, -n, -r, -rne"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "equivalence relation",
    type: "sb.",
    translations: ["ækvivalensrelation, -en, -er, -erne"],
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
    translations: ["udtryk, -ket, -, kene"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "expressability",
    type: "sb.",
    translations: ["udtrykskraft, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "factorial",
    type: "sb.",
    translations: ["fakultet, -et, -er, -erne"],
    keywords: ["complexity theory", "mathematics"]
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
    translations: ["endelig, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "fixpoint",
    type: "sb.",
    translations: ["fixpunkt, -et, -er, -erne"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "flow",
    type: "sb.",
    translations: ["strømning, -en, -er, -erne"],
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
    translations: ["formel, -t, -le"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "free",
    type: "adj.",
    translations: ["fri, -t, -e"],
    keywords: ["formal methods"]
  },
  {
    word: "function",
    type: "sb.",
    translations: ["funktion, -en, -er, -erne"],
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
    translations: ["grammatik, -ken, -ker, -kerne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "graph",
    type: "sb.",
    translations: ["graf, -en, -er, -erne"],
    keywords: ["graph"]
  },
  {
    word: "greedy",
    type: "adj.",
    translations: ["grådig, -t, -e"],
    keywords: ["algorithmics"]
  },
  {
    word: "hash",
    type: "vb.",
    translations: ["hakke, -r, -de, -t"],
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash function",
    type: "sb.",
    translations: ["hakkefunktion, -en, -er, -erne"],
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "hash table",
    type: "sb.",
    translations: ["hakketabel, -len, -ler, -lerne"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "heap",
    type: "sb.",
    translations: ["hob, -en, -e, -erne"],
    keywords: ["algorithmics"]
  },
  {
    word: "hidden layer",
    type: "sb.",
    translations: ["(et) skjult lag, (det) skjulte lag, (de) skjulte lag"],
    keywords: ["machine learning"]
  },
  {
    word: "hull",
    type: "sb.",
    translations: ["hylst|er, -eret, -re, -rerne"],
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
    translations: ["implikation, -en, -er, -erne"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "imply",
    type: "vb.",
    translations: ["medfør|e, -er, -ede, -t"],
    keywords: ["formal methods"]
  },
  {
    word: "impure",
    type: "adj.",
    translations: ["uren, -t, -e"],
    keywords: ["programming languages"]
  },
  {
    word: "incidence matrix",
    type: "sb.",
    translations: ["incidensmat|rix, -rixen, ricer, -ricerne"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "incomplete",
    type: "adj.",
    translations: ["ufuldstændig, -t, -e"],
    keywords: ["formal methods"]
  },
  {
    word: "indistinguishability",
    type: "sb.",
    translations: ["uskelnelighed, -en, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "indistinguishable",
    type: "adj.",
    translations: ["uskelnelig, -t, -e"],
    keywords: ["formal methods"]
  },
  {
    word: "induction",
    type: "sb.",
    translations: ["induktion, -en, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "induction hypothesis",
    type: "sb.",
    translations: ["induktionshypotese, -n, -r, -rne"],
    keywords: ["formal methods"]
  },
  {
    word: "inductive",
    type: "adj.",
    translations: ["induktiv, -t, -e"],
    keywords: ["formal methods"]
  },
  {
    word: "inductive case",
    type: "sb.",
    translations: ["induktionstilfælde, -t, -r, -rne"],
    keywords: ["formal methods"]
  },
  {
    word: "inductive step",
    type: "sb.",
    translations: ["induktionsskridt, -et, -, -ene"],
    keywords: ["formal methods"]
  },
  {
    word: "infinite",
    type: "adj.",
    translations: ["uendelig, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "informal",
    type: "sb.",
    translations: ["uformel, -t, -e"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "initial state",
    type: "sb.",
    translations: ["starttilstand, -en, -e, -ene"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "injective",
    type: "adj.",
    translations: ["injektiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "input",
    type: "sb.",
    translations: ["inddata, -en, -, -ene"],
    keywords: ["complexity theory", "algorithmics", "cryptography"]
  },
  {
    word: "interface",
    type: "sb.",
    translations: ["grænseflade, -n, -r, -rne"],
    keywords: ["programming languages", "software engineering"]
  },
  {
    word: "interpret",
    type: "vb.",
    translations: ["fortolke, -r, -de, -t"],
    keywords: ["programming languages"]
  },
  {
    word: "interpreter",
    type: "sb.",
    translations: ["fortolker, -en, -e, -ne"],
    keywords: ["programming languages"]
  },
  {
    word: "intersection",
    type: "sb.",
    translations: [
      "fællesmængde, -n, -r, -rne",
      "snit, -tet, -, -tene",
      "snitmængde, -n, -r, -rne"
    ],
    keywords: ["mathematics"]
  },
  {
    word: "invariant",
    type: "sb.",
    translations: ["invariant, -en, -er, -erne"],
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
    note: "also: \"non-regular\"",
    translations: [
      "irregulær, -t, -e",
      "ikke-regulær, t, -e"
    ],
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
    translations: ["nøgle, -n, -r, -rne"],
    keywords: ["cryptography", "algorithmics"]
  },
  {
    word: "lambda",
    type: "sb.",
    note: "Λ λ",
    translations: ["lambda, -en, -er, -erne"],
    keywords: ["greek alphabet"]
  },
  {
    word: "language",
    type: "sb.",
    translations: ["sprog, -et, -, -ene"],
    keywords: ["complexity theory", "cryptography", "formal methods"]
  },
  {
    word: "language property",
    type: "sb.",
    translations: ["sprogegenskab, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "lexical",
    type: "adj.",
    translations: ["leksikalsk, -, -e"],
    keywords: ["algorithmics"]
  },
  {
    word: "lexicographic",
    type: "adj.",
    translations: ["leksikografisk, -, -e"],
    keywords: ["algorithmics"]
  },
  {
    word: "lazy",
    type: "adj.",
    translations: ["doven, -t, dovne"],
    keywords: ["programming languages"]
  },
  {
    word: "linear",
    type: "adj.",
    translations: ["lineær, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "linked list",
    type: "sb.",
    translations: ["(en) kædet liste, (den) kædede liste, (de) kædede lister"],
    keywords: ["algorithmics"]
  },
  {
    word: "location",
    type: "sb.",
    translations: ["lokation, -en, -er, -erne"],
    keywords: ["graph"]
  },
  {
    word: "logic",
    type: "sb.",
    translations: ["logik, -ken, -ker, -kerne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "lower",
    type: "adj.",
    translations: ["nedre, -, -"],
    keywords: ["algorithmics", "mathematics"]
  },
  {
    word: "machine learning",
    type: "sb.",
    translations: ["maskinlæring, -en"],
    keywords: ["machine learning"]
  },
  {
    word: "machine code",
    type: "sb.",
    translations: ["maskinkode, -n, -, rne"],
    keywords: ["programming languages"]
  },
  {
    word: "matrix, matrices",
    type: "sb.",
    translations: ["matrix, -er, matricer, matricerne"],
    keywords: ["mathematics"]
  },
  {
    word: "map",
    type: "sb.",
    note: "also \"mapping\"",
    translations: ["afbildning, -en, -er, -erne"],
    keywords: ["mathematics"]
  },
  {
    word: "membership",
    type: "sb.",
    translations: ["medlemsskab, -et, -er, -erne"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "memory",
    type: "sb.",
    translations: ["hukommelse, -n, -r, -rne"],
    keywords: ["algorithmics"]
  },
  {
    word: "minimization",
    type: "sb.",
    note: "GB: minimisation",
    translations: ["minimering, -en, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "model",
    type: "sb.",
    translations: ["model, -len, -ler, -lerne"],
    keywords: ["formal methods"]
  },
  {
    word: "monad",
    type: "sb.",
    translations: ["monade, -n, -r, -rne"],
    keywords: ["formal methods"]
  },
  {
    word: "monadic",
    type: "adj.",
    translations: ["monadisk, -, -e"],
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
    translations: ["my-kalkyle, -n, -r, -rne"],
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
    translations: ["knude, -n, -r, -rne"],
    keywords: ["graph"]
  },
  {
    word: "nondeterministic",
    type: "adj.",
    translations: [
      "nondeterministisk, -, -e",
      "ikke-deterministisk, -, -e"
    ],
    keywords: ["algorithmics", "complexity theory", "formal methods"]
  },
  {
    word: "nonterminal",
    type: "sb.",
    translations: [
      "nonterminal, -en, -er, -erne",
      "ikke-terminal, -en, -er, -erne"
    ],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "non-trivial",
    type: "adj.",
    translations: ["ikke triviel, -t, -le"],
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
    translations: ["åben adressering, -en, -er, -erne"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "operational",
    type: "adj.",
    translations: ["operationel, -t, -le"],
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
    translations: [
      "ord|net, -ret, -nede",
      "sorte|ret, -ret, -rede"
    ],
    keywords: ["algorithmics", "mathematics"]
  },
  {
    word: "output",
    type: "sb.",
    translations: ["uddata, -en, -, -ene"],
    keywords: ["algorithmics", "complexity theory", "cryptography"]
  },
  {
    word: "paradigm",
    type: "sb.",
    translations: ["paradigme, -t, -r, -rne"],
    keywords: []
  },
  {
    word: "partial",
    type: "adj.",
    translations: ["partiel, -t, -le"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "partition",
    type: "sb.",
    translations: [
      "partition, -en, -er, -erne",
      "partitionering, -en, -er, -erne"
    ],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "path",
    type: "sb.",
    translations: [
      "sti, -en, -er, -erne",
      "vej, -en, -e, -ene"
    ],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "path compression",
    type: "sb.",
    translations: ["stikomprimering, -en, -er, -erne"],
    keywords: ["algorithmics"]
  },
  {
    word: "pattern",
    type: "sb.",
    translations: ["møns|ter, -teret, -tre, -trene"],
    keywords: ["algorithmics"]
  },
  {
    word: "pattern matching",
    type: "sb.",
    translations: ["mønstergenkendelse, -n, -r, -rne"],
    keywords: ["programming languages"]
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
    translations: ["planær, -t, -e"],
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
    translations: ["prædikat, -et, -er, -erne"],
    keywords: ["algorithmics", "complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "prefix",
    type: "sb.",
    translations: ["præfiks, -et, -er, -erne"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "premise",
    type: "sb.",
    translations: ["præmis, -sen, -ser, -serne"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "priority queue",
    type: "sb.",
    translations: ["prioritetskø, -en, -er, -erne"],
    keywords: ["algorithmics"]
  },
  {
    word: "product construction",
    type: "sb.",
    translations: ["produktkonstruktion, -en, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "production",
    type: "sb.",
    translations: ["produktion, -en, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "programming language",
    type: "sb.",
    translations: ["programmeringssprog, -et, -, -ene"],
    keywords: ["programming languages"]
  },
  {
    word: "projection",
    type: "sb.",
    translations: ["projektion, -en, -er, -erne"],
    keywords: ["databases", "mathematics"]
  },
  {
    word: "proof",
    type: "sb.",
    translations: ["bevis, -et, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "proof rule",
    type: "sb.",
    translations: ["bevis|regel, -reglen, -regler, -reglerne"],
    keywords: ["formal methods"]
  },
  {
    word: "property",
    type: "sb.",
    translations: ["egenskab, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods", "mathematics"]
  },
  {
    word: "psi",
    note: "Ψ ψ",
    translations: ["psi"],
    keywords: ["greek alphabet"]
  },
  {
    word: "pure",
    type:  "adj.",
    translations: ["ren, -t, -e"],
    keywords: ["programming languages"]
  },
  {
    word: "quantifier",
    type: "sb.",
    translations: ["kvantor"],
    keywords: ["formal methods"]
  },
  {
    word: "quantify",
    type: "vb.",
    translations: ["kvantificere, -r, -ede, -t"],
    keywords: ["formal methods"]
  },
  {
    word: "queue",
    type: "sb.",
    translations: ["kø, -en, -er, -erne"],
    keywords: ["algorithmics"]
  },
  {
    word: "quotient",
    type: "sb.",
    translations: ["kvotient, -en, -er, -erne"],
    keywords: ["cryptography", "formal methods", "mathematics"]
  },
  {
    word: "random",
    type: "adj.",
    translations: ["tilfældig, -t, -e"],
    keywords: ["algorithmics", "cryptography"]
  },
  {
    word: "rank",
    type: "sb.",
    translations: ["rang, -en, -, -ene"],
    keywords: ["algorithmics"]
  },
  {
    word: "reachable",
    type: "adj.",
    translations: ["opnåelig, -t, -e"],
    keywords: ["complexity theory", "formal methods", "graph"]
  },
  {
    word: "recursion",
    type: "sb.",
    translations: ["rekursion, -en, -er, -erne"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "recursive",
    type: "adj.",
    translations: ["rekursiv, -t, -e"],
    keywords: ["algorithmics", "complexity theory", "formal methods"]
  },
  {
    word: "recursively enumerable",
    type: "adj.",
    translations: ["rekursiv enumera|bel, -belt, -ble"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "reduction",
    type: "sb.",
    translations: ["reduktion, -en, -er, -erne"],
    keywords: ["complexity theory", "cryptography"]
  },
  {
    word: "reflexive",
    type: "adj.",
    translations: ["reflektiv, -t, -e"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "regular",
    type: "adj.",
    translations: ["regulær, -t, -e"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "regularity",
    type: "sb.",
    translations: ["regularitet, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "reject",
    type: "vb.",
    translations: ["afvi|se, -ser, -ste, -st"],
    keywords: ["complexity theory", "cryptography", "formal methods"]
  },
  {
    word: "relation",
    type: "sb.",
    translations: ["relation, -en, -er, -erne"],
    keywords: ["algorithmics", "complexity theory", "formal methods", "graph", "mathematics"]
  },
  {
    word: "rename",
    type: "vb.",
    translations: [
      "omdø|be, -ber, -bte, -bt",
      "omnavngive, -r, -de, -t"
    ],
    keywords: ["formal methods"]
  },
  {
    word: "rho",
    note: "Ρ ρ",
    translations: ["rho"],
    keywords: ["greek alphabet"]
  },
  {
    word: "rule",
    type: "sb.",
    translations: ["regel, -reglen, -regler, -reglerne"],
    keywords: ["formal methods"]
  },
  {
    word: "running time",
    type: "sb.",
    translations: [
      "udførselstid, -en, -er, -erne",
      "kørselstid, -en, -er, -erne"],
    keywords: ["algorithmics"]
  },
  {
    word: "satisfiability",
    type: "sb.",
    translations: ["tilfredstillelse, -n, -r, -rne"],
    keywords: ["formal methods"]
  },
  {
    word: "satisfiable",
    type: "adj.",
    translations: ["tilfredstillelig, -t, -e"],
    keywords: ["formal methods"]
  },
  {
    word: "satisfy",
    type: "vb.",
    translations: ["tilfredstille, -r, -de, -t"],
    keywords: ["formal methods"]
  },
  {
    word: "search tree",
    type: "sb.",
    translations: ["søgetræ, -et, -er, -erne"],
    keywords: ["algorithmics"]
  },
  {
    word: "set",
    type: "sb.",
    translations: ["mængde, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    word: "semantics",
    type: "sb.",
    translations: ["semantik, -ken, -ker, -kerne"],
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
    translations: ["sekvens, -en, -er, -erne"],
    keywords: ["complexity theory", "algorithmics"]
  },
  {
    word: "side effect",
    type: "sb.",
    translations: ["bivirkning, -en, -er, -erne"],
    keywords: ["programming languages"]
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
    translations: ["simplicielt kompleks, -t, -e"],
    keywords: ["geometry"]
  },
  {
    word: "sink",
    type: "sb.",
    translations: [
      "dræn, -et, -, -ene",
      "afløb, -et, -, -ene"
    ],
    keywords: ["graph"]
  },
  {
    word: "sound",
    type: "adj.",
    translations: ["sund, -t, -e"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "source",
    type: "sb.",
    translations: ["kilde, -n, -r, -rne"],
    keywords: ["graph"]
  },
  {
    word: "source code",
    type: "sb.",
    translations: ["kildekode, -n, -r, -rne"],
    keywords: ["programming languages"]
  },
  {
    word: "space",
    type: "sb.",
    translations: ["plads, -en, -er, -erne"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "space complexity",
    type: "sb.",
    translations: ["pladskompleksitet, -en, -er, -erne"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "square",
    type: "sb.",
    note: "on a tape",
    translations: ["felt, -et, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "stack",
    type: "sb.",
    translations: ["stak, -ken, -ke, -kene"],
    keywords: ["algorithmics"]
  },
  {
    word: "state",
    type: "sb.",
    translations: ["tilstand, -en, -e, -ene"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "state space",
    type: "sb.",
    translations: ["tilstandsrum, -met, -, -mene"],
    keywords: ["formal methods"]
  },
  {
    word: "string",
    type: "sb.",
    translations: [
      "streng, -en, -e, -ene",
      "ord, -et, -, -ene"
    ],
    keywords: ["algorithmics", "complexity theory", "cryptography", "formal methods"]
  },
  {
    word: "subset",
    type: "sb.",
    translations: ["delmængde, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    word: "subset construction",
    type: "sb.",
    translations: ["delmængdekonsruktion, -en, -er, -erne"],
    keywords: ["formal methods"]
  },
  {
    word: "suffix",
    type: "sb.",
    translations: ["suffiks, -et, -er, -erne"],
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
    translations: ["surjektiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    word: "symbol",
    type: "sb.",
    translations: [
      "symbol, -et, -er, -erne",
      "tegn, -et, -, -ene"
    ],
    keywords: ["formal methods", "complexity theory"]
  },
  {
    word: "symmetric",
    type: "adj.",
    translations: ["symmetrisk, -t, -e"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "syntax",
    type: "sb.",
    translations: ["syntaks, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "table",
    type: "sb.",
    translations: ["tabel, -len, -ler, -lerne"],
    keywords: ["algorithmics", "hashing"]
  },
  {
    word: "tape",
    type: "sb.",
    translations: ["bånd, -et, -, -ene"],
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
    translations: ["tautologi, -en, -er, -erne"],
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
    translations: ["terminal, -en, -er, -erne"],
    keywords: ["complexity theory", "formal methods"]
  },
  {
    word: "termination",
    type: "sb.",
    note: "also: \"halt\"",
    translations: ["terminering, -en, -er, -erne"],
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
    translations: ["tidskompleksitet, -en, -er, -erne"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "top",
    type: "sb.",
    note: "see also: \"true\"",
    translations: ["top, -pen, -pe, -pene"],
    keywords: ["cryptography", "formal methods"]
  },
  {
    word: "topologic, topological",
    type: "adj.",
    translations: ["topologisk, -, -e"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "total",
    type: "adj.",
    translations: [
      "(automata) fuldstændig, -t, -e",
      "(correctness) total, -t, -e"
    ],
    keywords: ["formal methods", "graph", "mathematics"],
  },
  {
    word: "transition",
    type: "sb.",
    translations: ["transition, -en, -er, -erne"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "transition function",
    type: "sb.",
    translations: ["transitionsfunktion, -en, -er, -erne"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "transition system",
    type: "sb.",
    translations: ["transitionssystem, -met, -mer, -merne"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "transitive",
    type: "adj.",
    translations: ["transitiv, -t, -e"],
    keywords: ["formal methods", "graph", "mathematics"]
  },
  {
    word: "trie",
    type: "sb.",
    translations: ["trie, -n, -r, -rne"],
    keywords: ["algorithmics"]
  },
  {
    word: "trivial",
    type: "adj.",
    translations: ["triviel, -t, -le"],
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
    translations: ["sandhedstabel, -len, -ler, -lerne"],
    keywords: ["formal methods"]
  },
  {
    word: "undirected",
    type: "adj.",
    translations: ["uoriente|ret, -ret, -rede"],
    keywords: ["graph"]
  },
  {
    word: "unary",
    type: "adj.",
    translations: ["unær, -t, -e"],
    keywords: []
  },
  {
    word: "uncountable",
    type: "adj.",
    translations: ["overtællelig, -t, -e"],
    keywords: ["complexity theory", "mathematics"]
  },
  {
    word: "undecidable",
    type: "adj.",
    note: "also: \"non-decidable\"",
    translations: ["uafgørlig, -t, -e"],
    keywords: ["complexity theory"]
  },
  {
    word: "union",
    type: "sb.",
    translations: [
      "forening, -en, -er, -erne",
      "foreningsmængde, -n, -r, -rne"
    ],
    keywords: ["mathematics"]
  },
  {
    word: "universal",
    type: "adj.",
    translations: ["universel, -t, -le"],
    keywords: ["algorithmics", "cryptography", "hashing"]
  },
  {
    word: "unreachable",
    type: "sb.",
    translations: ["uopnåelig, -t, -e"],
    keywords: ["complexity theory", "formal methods", "graph"]
  },
  {
    word: "upsilon",
    note: "Υ υ",
    translations: ["ypsilon"],
    keywords: ["greek alphabet"]
  },
  {
    word: "upper",
    type: "adj.",
    translations: ["øvre, -, -"],
    keywords: ["algorithmics", "mathematics"]
  },
  {
    word: "valid",
    type: "adj.",
    translations: ["gyldig, -t, -t"],
    keywords: ["formal methods"]
  },
  {
    word: "validation",
    type: "sb.",
    translations: ["validering, -en, -er, -erne"],
    keywords: []
  },
  {
    word: "vertex, vertice",
    type: "sb.",
    note: "see also \"node\"",
    translations: [
      "hjørne, -t, -r, -rne",
      "punkt, -et, -er, -erne"
    ],
    keywords: ["geometry", "graph"]
  },
  {
    word: "weight",
    type: "sb.",
    translations: ["vægt, -en, -e, -ene"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "wide",
    type: "adj.",
    translations: ["bred, -t, -e"],
    keywords: ["graph"]
  },
  {
    word: "width",
    type: "sb.",
    translations: ["bredde, -n, -r, -rne"],
    keywords: ["graph"]
  },
  {
    word: "word",
    type: "sb.",
    translations: ["ord, -et, -, -ene"],
    keywords: ["algorithmics", "complexity theory"],
    phrases: [
      ["a machine word is often 1 byte", "et maskinord er ofte 1 byte stor"]
    ]
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
