export type KeyWord = "algorithmics"
                    | "cryptography"
                    | "formal methods"
                    | "geometry"
                    | "hashing"
                    | "language theory"
                    | "graph"
                    | "mathematics"
                    | "complexity theory"
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
    word: "accept state",
    translations: ["accepttilstand"],
    keywords: ["formal methods", "graph", "language theory"]
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
    word: "affine",
    translations: ["affin"],
    keywords: ["mathematics"]
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
    word: "and",
    note: "also: \"conjunction\"",
    translations: ["og, både-og, konjunktion"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "associative",
    translations: ["assiociativ"],
    keywords: ["mathematics"]
  },
  {
    word: "asymptotic",
    translations: ["asymptotisk"],
    keywords: ["algorithmics"]
  },
  {
    word: "average",
    translations: ["gennemsnitlig"],
    keywords: ["algorithmics"]
  },
  {
    word: "automata",
    translations: ["automat"],
    keywords: ["algorithmics", "formal methods", "graph"]
  },
  {
    word: "axiom",
    translations: ["aksiom"],
    keywords: ["mathematics"]
  },
  {
    word: "axiomatisation",
    translations: ["aksiomatisering"],
    keywords: ["formal methods", "mathematics"]
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
    keywords: ["mathematics"]
  },
  {
    word: "bijection",
    translation: ["bijektion"],
    keywords: ["mathematics"]
  },
  {
    word: "bijective",
    translation: ["bijektiv"],
    keywords: ["mathematics"]
  },
  {
    word: "Boolean",
    translations: ["boolsk"],
    keywords: []
  },
  {
    word: "bottleneck",
    translations: ["flaskehals"],
    keywords: ["algorithmics"]
  },
  {
    word: "breadth-first",
    translations: ["bredde først"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "canonical",
    translations: ["kanonisk"],
    keywords: ["algorithmics", "formal methods", "language theory", "mathematics"]
  },
  {
    word: "cartesian",
    translations: ["kartesisk"],
    keywords: ["formal methods", "language theory", "mathematics"]
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
    word: "characteristic",
    translations: ["karakteristisk"],
    keywords: ["formal methods", "language theory", "mathematics"]
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
    word: "commutative",
    translations: ["kommutativ"],
    keywords: ["mathematics"]
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
    translations: ["komplement [kʌmpləˈmεnˀd]", "komplementærmængde"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "complete",
    translations: ["fuldstændig"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "completeness",
    translations: ["fuldstændighed"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "complexity",
    translations: ["kompleksitet"],
    keywords: ["algorithmics", "complexity theory"]
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
    word: "computable",
    translations: ["beregnelig"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "computability",
    translations: ["beregnelighed"],
    keywords: ["formal methods", "language theory"]
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
    word: "constant",
    translations: ["konstant"],
    keywords: ["algorithmics", "cryptography", "formal methods", "language theory", "mathematics"]
  },
  {
    word: "context-free",
    translations: ["kontekstfri"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "contradiction",
    translations: ["modstrid, kontradiktion"],
    keywords: ["formal methods", "mathematics"]
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
    translations: ["beslutning, afgørelse"],
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
    word: "diagonalization",
    note: "GS: diagonalisation",
    translations: ["diagonalisering"],
    keywords: ["formal methods", "language theory"]
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
    word: "distributive",
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
    translations: ["kant"],
    keywords: ["graph"]
  },
  {
    word: "empty",
    translations: ["tom"],
    keywords: ["algorithmics", "formal methods", "language theory", "mathematics"]
  },
  {
    word: "enumerate",
    translations: ["enumerere, opliste"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "enumerable",
    translations: ["enumererbar, oplistelig"],
    keywords: ["formal methods", "mathematics"]
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
    word: "expressability",
    translations: ["udtrykskraft"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "false",
    note: "also: \"bot\"",
    translations: ["falsk, kontradiktion", "bund"],
    keywords: ["cryptography", "formal methods"]
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
    word: "for all",
    translations: ["for alle, universel"],
    keywords: ["formal methods"]
  },
  {
    word: "formal",
    translations: ["formel"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "free",
    translations: ["fri"],
    keywords: ["formal methods"]
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
    word: "iff",
    note: "abr. if-and-only-if",
    translations: ["hviss (hvis og kun hvis)"],
    keywords: ["mathematics"]
  },
  {
    word : "implication",
    translations: ["implikation"],
    keywords: ["formal methods, mathematics"]
  },
  {
    word: "implies",
    translations: ["medfører, implikation"],
    keywords: ["formal methods"]
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
    word: "incomplete",
    translations: ["ufuldstændig"],
    keywords: ["formal methods"]
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
    translations: ["induktionstilfælde"],
    keywords: ["formal methods"]
  },
  {
    word: "inductive step",
    translations: ["induktionsskridt"],
    keywords: ["formal methods"]
  },
  {
    word: "infinite",
    translations: ["uendelig"],
    keywords: ["mathematics"]
  },
  {
    word: "informal",
    translations: ["uformel"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "initial state",
    translations: ["starttilstand"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "injective",
    translations: ["injektiv"],
    keywords: ["mathematics"]
  },
  {
    word: "input",
    translations: ["inddata"],
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "intersection",
    translations: ["fællesmængde", "snit, snitmængde"],
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
    word: "language property",
    translations: ["sprogegenskab"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "lexical",
    translations: ["leksikalsk"],
    keywords: ["algorithmics"]
  },
  {
    word: "lexicographic",
    translations: ["leksikografisk"],
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
    word: "model",
    translations: ["model"],
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
    word: "natural deduction",
    translations: ["naturlig deduktion"],
    keywords: ["formal methods"]
  },
  {
    word: "node",
    translations: ["knude"],
    keywords: ["graph"]
  },
  {
    word: "nondeterministic",
    translations: ["nondeterministisk", "ikke-deterministisk"],
    keywords: ["algorithmics", "formal methods", "language theory"]
  },
  {
    word: "nonterminal",
    translations: ["nonterminal, ikke-terminal"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "non-trivial",
    translations: ["ikke triviel"],
    keywords: []
  },
  {
    word: "normalisation",
    translations: ["normalisering"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "not",
    note: "also: \"negation\"",
    translations: ["ikke, negation"],
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
    word: "or",
    note: "also: \"disjunction\"",
    translations: ["eller, og/eller, disjunktion"],
    keywords: ["algorithmics", "formal methods"]
  },
  {
    word: "order",
    translations: ["orden, rækkefølge, sortering", "ordning"],
    keywords: ["algorithmics", "formal methods", "language theory", "mathematics"]
  },
  {
    word: "ordered",
    translations: ["ordnet", "sorteret"],
    keywords: ["algorithmics, mathematics"]
  },
  {
    word: "output",
    translations: ["uddata"],
    keywords: ["algorithmics", "cryptography", "language theory"]
  },
  {
    word: "partial",
    translations: ["partiel"],
    keywords: ["formal methods", "mathematics"]
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
    translations: ["planær"],
    keywords: ["graph"]
  },
  {
    word: "precedence",
    translations: ["præcedens"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "predicate",
    translations: ["prædikat"],
    keywords: ["algorithmics", "formal methods", "language theory", "mathematics"]
  },
  {
    word: "prefix",
    translations: ["præfiks"],
    keywords: ["algorithmics", "language theory"]
  },
  {
    word: "premise",
    translations: ["præmis"],
    keywords: ["formal methods", "mathematics"]
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
    word: "production",
    translations: ["produktion"],
    keywords: ["formal methods"]
  },
  {
    word: "proof",
    translations: ["bevis"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "proof rule",
    translations: ["bevisregel"],
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
    word: "rank",
    translations: ["rang"],
    keywords: ["algorithmics"]
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
    keywords: ["algorithmics", "formal methods", "language theory"]
  },
  {
    word: "recursively enumerable",
    translations: ["rekursiv enumerabel"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "reduction",
    translations: ["reduktion"],
    keywords: ["cryptography", "language theory"]
  },
  {
    word: "reflexive",
    translations: ["reflektiv"],
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
    word: "regular expression",
    translations: ["regulær udtryk"],
    keywords: ["language theory"]
  },
  {
    word: "reject",
    translations: ["afvise"],
    keywords: ["cryptography", "formal methods", "language theory"]
  },
  {
    word: "relation",
    translations: ["relation"],
    keywords: ["algorithmics",  "formal methods", "graph", "language theory", "mathematics"]
  },
  {
    word: "rename",
    translations: ["omdøb", "omnavngive"],
    keywords: ["formal methods"]
  },
  {
    word: "running time",
    translations: ["udførselstid", "kørselstid"],
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
    word: "satisfy",
    translations: ["tilfredstille"],
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
    word: "semantics",
    translations: ["semantik"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "semantic entailment",
    translations: ["logisk konsekvens"],
    keywords: ["formal methods"]
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
    word: "space complexity",
    translations: ["rumkompleksitet"], // better suggestion?
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "square",
    note: "on a tape",
    translations: ["felt"],
    keywords: ["formal methods", "language theory"]
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
    word: "surjective",
    translations: ["surjektiv"],
    keywords: ["mathematics"]
  },
  {
    word: "symbol",
    translations: ["symbol, tegn"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "symmetric",
    translations: ["symmetrisk"],
    keywords: ["formal methods", "mathematics"]
  },
  {
    word: "syntax",
    translations: ["syntaks"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "tape",
    translations: ["bånd"],
    keywords: ["formal methods", "language theory"]
  },
  {
    word: "tautology",
    translations: ["tautologi"],
    keywords: ["formal methods"]
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
    note: "also: \"halt\"",
    translations: ["terminering"],
    keywords: ["algorithmics", "formal methods", "language theory"]
  },
  {
    word: "time complexity",
    translations: ["tidskompleksitet"],
    keywords: ["algorithmics", "complexity theory"]
  },
  {
    word: "topologic",
    translations: ["topologisk"],
    keywords: ["algorithmics", "graph"]
  },
  {
    word: "total",
    note: "automata",
    translations: ["fuldstændig"],
    keywords: ["formal methods", "graph", "mathematics"]
  },
  {
    word: "total",
    note: "correctness",
    translations: ["total"],
    keywords: ["formal methods"]
  },
  {
    word: "transition",
    translations: ["transition"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "transition function",
    translations: ["transitionsfunktion"],
    keywords: ["formal methods", "graph"]
  },
  {
    word: "transition system",
    translations: ["transitionssystem"],
    keywords: ["formal methods", "graph"]
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
    word: "trivial",
    translations: ["triviel"],
    keywords: []
  },
  {
    word: "true",
    note: "also: \"top\"",
    translations: ["sand, tautologi", "top"],
    keywords: ["cryptography", "formal methods"]
  },
  {
    word: "truth table",
    translations: ["sandhedstabel"],
    keywords: ["formal methods"]
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
    note: "also: \"non-decidable\"",
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
    word: "valid",
    translations: ["gyldig"],
    keywords: ["formal methods"]
  },
  {
    word: "validation",
    translations: ["validering"],
    keywords: []
  },
  { // TODO: Add actual references
    word: "vertex, vertices",
    note: "see also \"node\"",
    translations: ["hjørne", "punkt", "knude"],
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
  {
    word: "xor",
    note: "also: \"exclusive or\"",
    translations: ["enten-eller, eksklusivt eller"],
    keywords: ["algorithmics", "formal methods"]
  },
];
