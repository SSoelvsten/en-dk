export const keywords = [
  "computer science",
  "git",
  "greek alphabet",
  "mathematics",
  "software engineering",
  "typography",
] as const;

export type KeyWord = typeof keywords[number];

export type WordType = "sb." | "vb." | "adj." | "adv.";

export type Lexeme = {
  id: number,
  word: string;
  type?: WordType;
  note?: string;
  search_terms?: string[];
  translations: string[];
  keywords: KeyWord[];
  phrases?: [string, string][];
};

export const en_dk : Lexeme[] = [
  {
    id: 1,
    word: "abstract",
    type: "adj.",
    translations: ["abstrakt, -, -"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 2,
    word: "abstract",
    type: "vb.",
    translations: ["abstrahere, -r, -de, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 3,
    word: "abstract",
    type: "sb.",
    translations: ["resumé, -et, -er, -erne"],
    keywords: []
  },
  {
    id: 4,
    word: "accept",
    type: "vb.",
    translations: ["acceptere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 5,
    word: "acceptance",
    type: "sb.",
    translations: ["accept, -en, -er, -erne"],
    keywords: ["computer science"],
    phrases: [
      ["weak accept", "svag accept"],
      ["strong accept", "streng accept"]
    ]
  },
  {
    id: 6,
    word: "accepted",
    type: "adj.",
    translations: ["accepte|ret, -ret, -rede"],
    keywords: ["computer science"],
    phrases: [
      ["weakly accepted", "svagt accepteret"],
      ["strongly accepted", "strengt accepteret"]
    ]
  },
  {
    id: 7,
    word: "accepting state",
    type: "sb.",
    translations: ["accepttilstand, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 8,
    word: "acyclic",
    type: "adj.",
    translations: [
      "acyklisk, -, -e",
      "kredsfri, -t, -e"
    ],
    keywords: ["computer science"]
  },
  {
    id: 9,
    word: "adjacency list",
    type: "sb.",
    translations: ["incidensliste, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 10,
    word: "affine",
    type: "adj.",
    translations: ["affin, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 11,
    word: "ahead-of-time",
    type: "adj.",
    translations: [
      "... på forhånd",
      "forhånds..."
    ],
    keywords: ["computer science"],
    phrases: [
      ["ahead-of-time optimizations", "forhåndsoptimeret / optimeret på forhånd"]
    ]
  },
  {
    id: 12,
    word: "algebra",
    type: "sb.",
    translations: ["algebra, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 13,
    word: "algebraic",
    type: "adj.",
    translations: ["algebraisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 14,
    word: "algorithm",
    type: "sb.",
    translations: ["algoritme, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 15,
    word: "alpha",
    note: "Α α",
    translations: ["alfa"],
    keywords: ["greek alphabet"]
  },
  {
    id: 16,
    word: "alphabet",
    type: "sb.",
    translations: ["alfabet, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 17,
    word: "ambiguous",
    type: "adj.",
    translations: ["tvetydig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 18,
    word: "amend",
    type: "vb.",
    translations: ["tilrette, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    id: 19,
    word: "amortized",
    type: "adj.",
    note: "GB: amortised",
    translations: ["amortise|ret, -ret, -rede"],
    keywords: ["computer science"]
  },
  {
    id: 20,
    word: "analyse",
    type: "vb.",
    translations: ["analysere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 21,
    word: "analysis",
    type: "sb.",
    translations: ["analyse, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 22,
    word: "and",
    type: "adv.",
    note: "see also \"conjunction\"",
    translations: ["og", "både-og"],
    keywords: ["computer science"]
  },
  {
    id: 23,
    word: "angle brace",
    type: "sb.",
    note: "⟨ chevron ⟩",
    search_terms: ["<", ">", "<>", "><"],
    translations: [
      "vinkelparentes, -en, -er, -erne",
      "vinkelklamme, -n, -r, -rne",
    ],
    keywords: ["typography"]
  },
  {
    id: 24,
    word: "anonymous",
    type: "adj.",
    translations: ["anonym, -t, -e"],
    keywords: ["software engineering"]
  },
  {
    id: 25,
    word: "apostrophe",
    type: "sb.",
    translations: ["apostrof, -fen, fer, ferne"],
    keywords: ["typography"]
  },
  {
    id: 26,
    word: "array",
    type: "sb.",
    translations: [
      "række, -n, -er, -rne",
      "liste, -n, -r, -rne"
    ],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 27,
    word: "artifact",
    type: "sb.",
    translations: ["artifakt, -et, -er, -erne"],
    keywords: []
  },
  {
    id: 28,
    word: "associative",
    type: "adj.",
    translations: ["assiociativ, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 29,
    word: "asymptotic",
    type: "adj.",
    translations: ["asymptotisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 30,
    word: "author",
    type: "sb.",
    translations: ["forfatter, -en, -e, -ne"],
    keywords: []
  },
  {
    id: 31,
    word: "average",
    type: "adj.",
    translations: ["gennemsnitlig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 32,
    word: "automata",
    type: "sb.",
    translations: ["automat, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 33,
    word: "axiom",
    type: "sb.",
    translations: ["aksiom, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"],
    phrases: [
      ["axiom of choice", "udvalgsaksiomet"]
    ]
  },
  {
    id: 34,
    word: "axiomatisation",
    type: "sb.",
    translations: ["aksiomatisering, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 35,
    word: "base case",
    type: "sb.",
    translations: [
      "basis, basen, baser, baserne",
      "basisskridt, -et, -, -ene",
      "induktionsstart, -en, -er, -erne",
      "startbetingelse, -n, -r, -rne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 36,
    word: "behaviour",
    type: "sb.",
    translations: ["adfærd, -en"],
    keywords: ["computer science"]
  },
  {
    id: 37,
    word: "best-case",
    type: "adj.",
    translations: ["bedst tænkelig, -t, -e"],
    keywords: ["computer science"],
    phrases: [
      ["The best case running time is O(1)", "Den bedst tænkelige kørseltsid er O(1)"]
    ]
  },
  {
    id: 38,
    word: "beta",
    note: "Β β",
    translations: ["beta"],
    keywords: ["greek alphabet"]
  },
  {
    id: 39,
    word: "bipartite",
    type: "adj.",
    translations: ["todelt, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 40,
    word: "binary",
    type: "adj.",
    translations: ["binær, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 41,
    word: "bijection",
    type: "sb.",
    translations: ["bijektion, -en, -er, -erne"],
    keywords: ["mathematics"]
  },
  {
    id: 42,
    word: "bijective",
    type: "adj.",
    translations: ["bijektiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 43,
    word: "bit",
    type: "sb.",
    translations: ["bit, -ten, -s, -tene"],
    keywords: ["computer science"]
  },
  {
    id: 44,
    word: "bitwise",
    type: "adj.",
    translations: ["bitvis, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 45,
    word: "blame",
    type: "vb.",
    translations: ["tilrette, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    id: 46,
    word: "blockchain",
    type: "sb.",
    translations: ["blok-kæde, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 47,
    word: "Boolean",
    type: "adj.",
    translations: ["boolsk, -, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 48,
    word: "Boolean",
    type: "sb.",
    translations: ["sandhedsværdi, -en, -er, -erne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 49,
    word: "bottom",
    type: "sb.",
    note: "see also \"false\"",
    translations: ["bund, -en, -e, -ene"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 50,
    word: "bottom-up",
    type: "adj.",
    translations: ["bund-op"],
    keywords: ["computer science"],
    phrases: [
      ["bottom-up 2-4 tree", "bund-op 2-4-træ"]
    ]
  },
  {
    id: 51,
    word: "bottleneck",
    type: "sb.",
    translations: ["flaskehals, -en, -e, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 52,
    word: "bound",
    type: "sb.",
    translations: ["grænse, -n, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 53,
    word: "bound",
    type: "vb.",
    translations: ["begrænse, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 54,
    word: "brace",
    type: "sb.",
    note: "{curly} bracket",
    translations: [
      "tuborgklamme, -n, -r, -rne",
      "kap|sel, -slen, -sler, -slerne",
      "en krøllet parentes, den krøllede parentes, de krøllede parenteser",
    ],
    keywords: ["typography"]
  },
  {
    id: 55,
    word: "bracket",
    type: "sb.",
    note: "[square] bracket",
    translations: [
      "klamme, -n, -r, -rne",
      "en kantet parentes, den kantede parentes, de kantede parenteser",
    ],
    keywords: ["typography"]
  },
  {
    id: 56,
    word: "branch",
    type: "sb.",
    translations: ["gren, -en, -e, -ene"],
    keywords: ["git"]
  },
  {
    id: 57,
    word: "branch",
    type: "vb.",
    translations: ["forgrene, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    id: 58,
    word: "branching",
    type: "sb.",
    translations: ["forgrening, -en, -er, -erne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 59,
    word: "breadth-first",
    type: "adj.",
    translations: ["bredde først, -, -"],
    keywords: ["computer science"]
  },
  {
    id: 60,
    word: "breadth-first order",
    type: "sb.",
    translations: ["breddenummerering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 61,
    word: "breadth-first search",
    type: "sb.",
    translations: [
      "bredde først søgning, -en, -er, -erne",
      "breddesøgning, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 62,
    word: "byte",
    type: "sb.",
    translations: ["byte, -n, -s, -ne"],
    keywords: ["computer science"]
  },
  {
    id: 63,
    word: "calculus",
    type: "sb.",
    translations: ["kalkyle, -n, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 64,
    word: "canonical",
    type: "adj.",
    translations: ["kanonisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 65,
    word: "Cartesian product",
    type: "sb.",
    translations: ["(det) kartesiske produkt"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 66,
    word: "category",
    type: "adj.",
    translations: ["kategori, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 67,
    word: "chain",
    type: "sb.",
    translations: [
      "kæde, -n, -r, -rne",
      "(hash table) kollisionsliste, -n, -r, -rne"
    ],
    keywords: ["computer science"],
    phrases: [
      ["The table uses hashing with chaining", "Tabellen bruger kollisionslister"]
    ]
  },
  {
    id: 68,
    word: "channel",
    type: "sb.",
    translations: ["kanal, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 69,
    word: "character",
    type: "sb.",
    note: "see also \"symbol\"",
    translations: ["tegn, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 70,
    word: "characteristic",
    type: "adj.",
    translations: ["karakteristisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 71,
    word: "cherry-pick",
    type: "vb.",
    translations: ["håndplukke, -r, -de, -t"],
    keywords: ["git"],
    phrases: [
      ["We cherry-pick it from the developerbranch", "Det håndplukker vi fra udviklergrenen"]
    ]
  },
  {
    id: 72,
    word: "chi",
    note: "Χ χ",
    translations: ["chi, chei"],
    keywords: ["greek alphabet"]
  },
  {
    id: 73,
    word: "cite",
    type: "vb.",
    translations: ["henvis|e, -er, -te, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 74,
    word: "citation",
    type: "sb.",
    translations: ["henvisning, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 75,
    word: "class",
    type: "sb.",
    translations: ["klasse, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    id: 76,
    word: "closed",
    type: "adj.",
    translations: ["luk|ket, -ket, -kede"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 77,
    word: "closure",
    type: "sb.",
    translations: [
      "lukning, -en, -er, -erne",
      "afslutning, -en, -er, -erne"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 78,
    word: "closure property",
    type: "sb.",
    translations: ["lukkethedsegenskab, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 79,
    word: "coalgebra",
    type: "sb.",
    translations: ["koalgebra, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 80,
    word: "co-author",
    search_terms: ["coauthor"],
    type: "sb.",
    translations: ["medforfatter, -en, -e, -ne"],
    keywords: []
  },
  {
    id: 81,
    word: "collision",
    type: "sb.",
    translations: ["kollision, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 82,
    word: "colon",
    type: "sb.",
    translations: ["kolon, -et, -er, -erne"],
    keywords: ["typography"]
  },
  {
    id: 83,
    word: "combine",
    type: "vb.",
    translations: ["kombinere, -r, -de, -t"],
    keywords: []
  },
  {
    id: 84,
    word: "comma",
    type: "sb.",
    translations: ["komma, -et, -er, -erne"],
    keywords: ["typography"]
  },
  {
    id: 85,
    word: "commit",
    type: "sb.",
    translations: ["fastlæggelse, -n, -r, -rne"],
    keywords: ["git"]
  },
  {
    id: 86,
    word: "commit",
    type: "vb.",
    translations: ["fast|lægge, -lægger, -lagde, -lagt"],
    keywords: ["git"]
  },
  {
    id: 87,
    word: "commutative",
    type: "adj.",
    translations: ["kommutativ, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 88,
    word: "compile",
    type: "vb.",
    translations: ["over|sætte, -sætter, -satte, -sat"],
    keywords: ["computer science"]
  },
  {
    id: 89,
    word: "compiler",
    type: "sb.",
    translations: ["oversætter, -en, -e, -ne"],
    keywords: ["computer science"]
  },
  {
    id: 90,
    word: "complement",
    type: "sb.",
    translations: [
      "komplement [kʌmpləˈmεnˀd], -et, -er, -erne",
      "komplementærmængde, -n, -r, -rne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 91,
    word: "complete",
    type: "adj.",
    translations: ["fuldstændig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 92,
    word: "completeness",
    type: "sb.",
    translations: ["fuldstændighed, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 93,
    word: "complexity",
    type: "sb.",
    translations: ["kompleksitet, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 94,
    word: "component",
    type: "sb.",
    translations: ["komponent, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 95,
    word: "computer",
    type: "sb.",
    translations: ["datamat, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 96,
    word: "computer science",
    type: "sb.",
    translations: ["datalogi, -en"],
    keywords: ["computer science"]
  },
  {
    id: 97,
    word: "computer scientist",
    type: "sb.",
    translations: ["datalog, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 98,
    word: "computable",
    type: "adj.",
    translations: ["beregnelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 99,
    word: "computability",
    type: "sb.",
    translations: ["beregnelighed, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 100,
    word: "computation",
    type: "sb.",
    translations: ["beregning, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 101,
    word: "condition",
    type: "sb.",
    translations: ["betingelse, -n, -r, -rne"],
    keywords: []
  },
  {
    id: 102,
    word: "conditional",
    type: "adj.",
    translations: ["beting|et, -et, -ede"],
    keywords: []
  },
  {
    id: 103,
    word: "concatenate",
    type: "vb.",
    translations: ["konkatenere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 104,
    word: "concept",
    type: "sb.",
    translations: ["koncept, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 105,
    word: "concurrent",
    type: "adj.",
    translations: ["parallel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    id: 106,
    word: "configuration",
    type: "sb.",
    translations: ["konfiguration, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 107,
    word: "conjunction",
    type: "sb.",
    translations: ["konjunktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 108,
    word: "connected component",
    type: "sb.",
    translations: ["sammenhængskomponent, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 109,
    word: "constant",
    type: "sb.",
    translations: ["konstant, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 110,
    word: "construction",
    type: "sb.",
    translations: ["konstruktion, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 111,
    word: "constructor",
    type: "sb.",
    translations: ["konstruktør, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 112,
    word: "context-free",
    type: "adj.",
    translations: ["kontekstfri, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 113,
    word: "contradiction",
    type: "sb.",
    translations: [
      "modstrid, -en",
      "kontradiktion, -en, -er, -erne"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 114,
    word: "convex",
    type: "adj.",
    translations: ["konveks, -t, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 115,
    word: "core",
    type: "sb.",
    translations: ["kerne, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 116,
    word: "correctness",
    type: "sb.",
    translations: ["korrekthed, -en"],
    keywords: ["computer science"]
  },
  {
    id: 117,
    word: "countable",
    type: "adj.",
    translations: [
        "tællelig, -t, -e",
        "nummera|bel, -belt, -ble"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 118,
    word: "cryptography",
    type: "sb.",
    translations: ["kryptografi, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 119,
    word: "cryptographic",
    type: "adj.",
    translations: ["kryptografisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 120,
    word: "cube",
    type: "sb.",
    translations: ["kube, -n, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 121,
    word: "cubic",
    type: "adj.",
    note: "also : \"cubical\"",
    translations: ["kubisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 122,
    word: "curried",
    type: "adj.",
    translations: ["curri|et, -et, -ede"],
    keywords: ["computer science"]
  },
  {
    id: 123,
    word: "curry",
    type: "vb.",
    translations: ["curry, -er, -ede, -et"],
    keywords: ["computer science"]
  },
  {
    id: 124,
    word: "cut",
    type: "sb.",
    translations: ["snit, -tet, -, -tene"],
    keywords: ["computer science"]
  },
  {
    id: 125,
    word: "cycle",
    type: "sb.",
    translations: ["cy|kel, -klen, -kler, -klerne"],
    keywords: ["computer science"]
  },
  {
    id: 126,
    word: "cyclic",
    type: "adj.",
    translations: [
      "cyklisk, -, -e",
      "kred|set, -set, -sede"
    ],
    keywords: ["computer science"]
  },
  {
    id: 127,
    word: "deadline",
    type: "sb.",
    translations: ["frist, -en, -er, -erne"],
    keywords: []
  },
  {
    id: 128,
    word: "dash",
    type: "sb.",
    translations: ["tankestreg, -en, -er, -erne"],
    keywords: ["typography"]
  },
  {
    id: 129,
    word: "data structure",
    type: "sb.",
    translations: ["datastruktur, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 130,
    word: "debugger",
    type: "sb.",
    translations: ["fejlfinder, -en, -e, -ne"],
    keywords: ["software engineering"]
  },
  {
    id: 131,
    word: "decidable",
    type: "adj.",
    translations: ["afgørlig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 132,
    word: "decide",
    type: "vb.",
    translations: [
      "beslutte, -r, -de, -t",
      "afgøre, -r, afgjorde, afgjort"
    ],
    keywords: ["computer science"]
  },
  {
    id: 133,
    word: "decision",
    type: "sb.",
    translations: [
      "beslutning, -en, -er, -erne",
      "afgørelse, -n, -r, -rne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 134,
    word: "decision diagram",
    type: "sb.",
    translations: ["beslutningsdiagram, -met, -mer, -merne"],
    keywords: ["computer science"]
  },
  {
    id: 135,
    word: "decision problem",
    type: "sb.",
    translations: ["beslutningsproblem, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 136,
    word: "decision tree",
    type: "sb.",
    translations: ["beslutningstræ, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 137,
    word: "declarative",
    type: "adj.",
    translations: ["deklarativ, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 138,
    word: "define",
    type: "vb.",
    translations: ["definere, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 139,
    word: "delta",
    note: "Δ δ",
    translations: ["delta"],
    keywords: ["greek alphabet"]
  },
  {
    id: 140,
    word: "depth-first",
    type: "adj.",
    translations: ["dybde først, -, -"],
    keywords: ["computer science"]
  },
  {
    id: 141,
    word: "depth-first search",
    type: "sb.",
    translations: [
      "dybde først søgning, -en, -er, -erne",
      "dybdesøgning, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 142,
    word: "dereference",
    type: "vb.",
    translations: ["afreferere, -r, -de, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 143,
    word: "derivation",
    type: "sb.",
    translations: [
      "derivation, -en, -er, -erne",
      "derivationstrin, -net, -, -nene"
    ],
    keywords: ["computer science"]
  },
  {
    id: 144,
    word: "derivation tree",
    type: "sb.",
    translations: ["derivationstræ, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 145,
    word: "design pattern",
    type: "sb.",
    translations: ["designmøn|ster, -stret, -strer, -strerne"],
    keywords: ["software engineering"]
  },
  {
    id: 146,
    word: "determinisation",
    type: "sb.",
    translations: ["determinisering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 147,
    word: "deterministic",
    type: "adj.",
    translations: ["deterministisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 148,
    word: "developer",
    type: "sb.",
    translations: ["udvikler, -en, -e, -ne"],
    keywords: ["git", "software engineering"]
  },
  {
    id: 149,
    word: "diagonalization",
    type: "sb.",
    note: "GB: diagonalisation",
    search_terms: ["diagonalisation"],
    translations: ["diagonalisering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 150,
    word: "dictionary",
    type: "sb.",
    translations: ["ord|bog, -bogen, -bøger, -bøgerne"],
    keywords: ["computer science"]
  },
  {
    id: 151,
    word: "directed",
    type: "adj.",
    translations: [
      "oriente|ret, -ret, -rede",
      "ret|tet, -tet, -tede"
    ],
    keywords: ["computer science"]
  },
  {
    id: 152,
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
    id: 153,
    word: "disjunction",
    type: "sb.",
    translations: ["disjunktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 154,
    word: "distinguish",
    type: "vb.",
    translations: ["skelne, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 155,
    word: "distinguishability",
    type: "sb.",
    translations: ["skelnelighed, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 156,
    word: "distinguishable",
    type: "adj.",
    translations: ["skelnelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 157,
    word: "distributive",
    type: "adj.",
    translations: ["distributiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 158,
    word: "divide-and-conquer",
    translations: [
      "del-og-kombinér",
      "del-og-hersk",
    ],
    keywords: ["computer science"]
  },
  {
    id: 159,
    word: "duplicate",
    type: "vb.",
    translations: [
      "dublere, -r, -de, -t",
      "duplikere, -r, -de, -t"
    ],
    keywords: []
  },
  {
    id: 160,
    word: "duplication",
    type: "sb.",
    translations: [
      "dublering, -en, -er, -erne",
      "duplikation, -en, -er, -erne"],
    keywords: []
  },
  {
    id: 161,
    word: "dynamic",
    type: "adj.",
    translations: ["dynamisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 162,
    word: "execute",
    type: "vb.",
    translations: ["eksekvere, -r, -de, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 163,
    word: "edge",
    type: "sb.",
    note: "also : \"arc\"",
    translations: ["kant, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 164,
    word: "ellipsis",
    type: "sb.",
    translations: ["udeladelsesprikker"],
    keywords: ["typography"]
  },
  {
    id: 165,
    word: "empty",
    type: "adj.",
    translations: ["tom, -t, -me"],
    keywords: ["computer science"]
  },
  {
    id: 166,
    word: "enumerate",
    type: "vb.",
    translations: [
      "nummerere, -r, -de, -t",
      "opliste, -r, -de, -t"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 167,
    word: "enumerable",
    type: "adj.",
    translations: [
      "nummera|bel, -belt, -ble",
      "oplistelig, -t, -e"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 168,
    word: "epsilon",
    note: "Ε ε",
    translations: ["epsilon"],
    keywords: ["greek alphabet"]
  },
  {
    id: 169,
    word: "equivalence",
    type: "sb.",
    translations: ["ækvivalens, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 170,
    word: "equivalence class",
    type: "sb.",
    translations: ["ækvivalensklasse, -n, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 171,
    word: "equivalence relation",
    type: "sb.",
    translations: ["ækvivalensrelation, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 172,
    word: "error",
    type: "sb.",
    translations: ["fejl, -en, -, -ene"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 173,
    word: "error code",
    type: "sb.",
    translations: ["fejlkode, -n, -r, -rne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 174,
    word: "eta",
    note: "Η η",
    translations: ["eta"],
    keywords: ["greek alphabet"]
  },
  {
    id: 175,
    word: "exception",
    type: "sb.",
    translations: ["undtagelse, -n, -r, -rne"],
    keywords: ["computer science", "software engineering"],
    phrases: [
      ["an exception was thrown", "en undtagelse blev kastet"],
      ["exceptions are exceptional", "undtagelser er kun undtgelsesvis"]
    ]
  },
  {
    id: 176,
    word: "exclamation point",
    type: "sb.",
    translations: ["udråbstegn, -et, -, -ene"],
    keywords: ["typography"]
  },
  {
    id: 177,
    word: "expected",
    type: "adj.",
    translations: ["forven|tet, -tet, -tede"],
    keywords: ["computer science", "mathematics"],
    phrases: [
      ["The worst case expected running time is O(n lg n)", "Den værst tænkelige forventede kørselstid er O(n lg n)"],
      ["Its expected value is 0.5", "Dens forventede værdi er 0,5"]
    ]
  },
  {
    id: 178,
    word: "expression",
    type: "sb.",
    translations: ["udtryk, -ket, -, kene"],
    keywords: ["computer science"]
  },
  {
    id: 179,
    word: "expressiveness",
    type: "sb.",
    translations: ["udtrykskraft, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 180,
    word: "factorial",
    type: "sb.",
    translations: ["fakultet, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 181,
    word: "false",
    type: "sb.",
    note: "see also \"bot\"",
    translations: ["falsk"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 182,
    word: "fetch",
    type: "vb.",
    translations: ["hente, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    id: 183,
    word: "field",
    type: "sb.",
    translations: ["legeme, -t, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 184,
    word: "finite",
    type: "adj.",
    translations: ["endelig, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 185,
    word: "fixpoint",
    type: "sb.",
    translations: ["fixpunkt, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 186,
    word: "flow",
    type: "sb.",
    translations: ["strømning, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 187,
    word: "for all",
    type: "adj.",
    note: "also \"universal\"",
    translations: ["for alle", "universel"],
    keywords: ["computer science"]
  },
  {
    id: 188,
    word: "formal",
    type: "adj.",
    translations: ["formel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    id: 189,
    word: "forest",
    type: "sb.",
    translations: ["skov, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 190,
    word: "free",
    type: "adj.",
    translations: ["fri, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 191,
    word: "function",
    type: "sb.",
    translations: ["funktion, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 192,
    word: "functional",
    type: "adj.",
    translations: ["funktionel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    id: 193,
    word: "gamma",
    note: "Γ γ",
    translations: ["gamma"],
    keywords: ["greek alphabet"]
  },
  {
    id: 194,
    word: "global",
    type: "adj.",
    translations: ["global, -t, -e"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 195,
    word: "grammar",
    type: "sb.",
    translations: ["grammatik, -ken, -ker, -kerne"],
    keywords: ["computer science"]
  },
  {
    id: 196,
    word: "graph",
    type: "sb.",
    translations: ["graf, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 197,
    word: "greedy",
    type: "adj.",
    translations: ["grådig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 198,
    word: "hash",
    type: "vb.",
    translations: ["hakke, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 199,
    word: "hash function",
    type: "sb.",
    translations: ["hakkefunktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 200,
    word: "hash table",
    type: "sb.",
    translations: ["hakketabel, -len, -ler, -lerne"],
    keywords: ["computer science"]
  },
  {
    id: 201,
    word: "hash value",
    type: "sb.",
    translations: ["hakkeværdi, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 202,
    word: "head",
    type: "sb.",
    note: "also \"car\"",
    translations: ["hoved, -et, -er, -erne"],
    keywords: ["computer science", "git"]
  },
  {
    id: 203,
    word: "heap",
    type: "sb.",
    translations: ["hob, -en, -e, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 204,
    word: "hidden layer",
    type: "sb.",
    translations: ["(et) skjult lag, (det) skjulte lag, (de) skjulte lag"],
    keywords: ["computer science"]
  },
  {
    id: 205,
    word: "homotopy",
    type: "sb.",
    translations: ["homotopi, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 206,
    word: "homotopy",
    type: "adj.",
    translations: ["homotopisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 207,
    word: "hull",
    type: "sb.",
    translations: ["hylst|er, -eret, -re, -rerne"],
    keywords: ["computer science"]
  },
  {
    id: 208,
    word: "human-computer interaction",
    translations: ["menneske-maskine interaktion"],
    keywords: ["computer science"]
  },
  {
    id: 209,
    word: "hyphen",
    type: "sb.",
    translations: ["bindestreg, -en, -er, erne"],
    keywords: ["typography"]
  },
  {
    id: 210,
    word: "iff",
    note: "abr. \"if and only if\"",
    translations: ["hviss (hvis og kun hvis)"],
    keywords: ["mathematics"]
  },
  {
    id: 211,
    word: "imperative",
    type: "adj.",
    translations: ["imperativ, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 212,
    word: "implication",
    type: "sb.",
    translations: ["implikation, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 213,
    word: "imply",
    type: "vb.",
    translations: ["medfør|e, -er, -ede, -t"],
    keywords: ["computer science"]
  },
  {
    id: 214,
    word: "impure",
    type: "adj.",
    note: "see also \"side effect\"",
    translations: ["uren, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 215,
    word: "immutable",
    type: "adj.",
    translations: [
      "umutérbar, -t, -e",
      "uforanderlig, -t, -e"
    ],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 216,
    word: "incidence matrix",
    type: "sb.",
    translations: ["incidensmat|rix, -rixen, ricer, -ricerne"],
    keywords: ["computer science"]
  },
  {
    id: 217,
    word: "incomplete",
    type: "adj.",
    translations: ["ufuldstændig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 218,
    word: "indistinguishability",
    type: "sb.",
    translations: ["uskelnelighed, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 219,
    word: "indistinguishable",
    type: "adj.",
    translations: ["uskelnelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 220,
    word: "induction",
    type: "sb.",
    translations: ["induktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 221,
    word: "induction hypothesis",
    type: "sb.",
    translations: ["induktionshypotese, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 222,
    word: "inductive",
    type: "adj.",
    translations: ["induktiv, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 223,
    word: "inductive case",
    type: "sb.",
    translations: ["induktionstilfælde, -t, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 224,
    word: "inductive step",
    type: "sb.",
    translations: ["induktionsskridt, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 225,
    word: "infinite",
    type: "adj.",
    translations: ["uendelig, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 226,
    word: "informal",
    type: "sb.",
    translations: ["uformel, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 227,
    word: "initial state",
    type: "sb.",
    translations: ["starttilstand, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 228,
    word: "injective",
    type: "adj.",
    translations: ["injektiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 229,
    word: "input",
    type: "sb.",
    translations: ["inddata, -en, -, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 230,
    word: "insertion sort",
    type: "sb.",
    translations: ["indsættelsessortering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 231,
    word: "integer",
    type: "sb.",
    translations: ["heltal, -let, -, -lene"],
    keywords: ["computer science", "mathematics", "software engineering"]
  },
  {
    id: 232,
    word: "interface",
    type: "sb.",
    translations: ["grænseflade, -n, -r, -rne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 233,
    word: "interpret",
    type: "vb.",
    translations: ["fortolke, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 234,
    word: "interpreter",
    type: "sb.",
    translations: ["fortolker, -en, -e, -ne"],
    keywords: ["computer science"]
  },
  {
    id: 235,
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
    id: 236,
    word: "invariant",
    type: "sb.",
    translations: ["invariant, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 237,
    word: "iota",
    note: "Ι ι",
    translations: ["jota", "iota"],
    keywords: ["greek alphabet"]
  },
  {
    id: 238,
    word: "irregular",
    type: "adj.",
    note: "also \"non-regular\"",
    translations: [
      "irregulær, -t, -e",
      "ikke-regulær, t, -e"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 239,
    word: "isomorphic",
    type: "adj.",
    translations: ["isomorf, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 240,
    word: "isomorphism",
    type: "sb.",
    translations: [
      "isomorfi, -en, -er, -erne",
      "isomorfisme, -n, -r, -rne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 241,
    word: "iterate",
    type: "vb.",
    translations: ["iterere, -r, -ede, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 242,
    word: "iterator",
    type: "sb.",
    translations: ["iterator, -en, -er, -erne"],
    keywords: ["software engineering"]
  },
  {
    id: 243,
    word: "kappa",
    note: "Κ κ",
    translations: ["kappa"],
    keywords: ["greek alphabet"]
  },
  {
    id: 244,
    word: "key",
    type: "sb.",
    translations: ["nøgle, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 245,
    word: "lambda",
    type: "sb.",
    note: "Λ λ",
    translations: ["lambda"],
    keywords: ["greek alphabet"]
  },
  {
    id: 246,
    word: "lambda",
    type: "sb.",
    note: "anonymous function",
    translations: [
      "lambda, -en, -er, -erne",
      "en anonym funktion, den anonyme funktion, de anonyme funktioner"
    ],
    keywords: ["software engineering"]
  },
  {
    id: 247,
    word: "language",
    type: "sb.",
    translations: ["sprog, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 248,
    word: "language property",
    type: "sb.",
    translations: ["sprogegenskab, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 249,
    word: "lexical",
    type: "adj.",
    translations: ["leksikalsk, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 250,
    word: "lexicographic",
    type: "adj.",
    translations: ["leksikografisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 251,
    word: "lazy",
    type: "adj.",
    translations: ["doven, -t, dovne"],
    keywords: ["computer science"]
  },
  {
    id: 252,
    word: "level",
    type: "sb.",
    translations: [
      "lag, -et, -, -ene",
      "niveau, -et, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 253,
    word: "library",
    type: "sb.",
    translations: ["bibliotek, -et, -er, -erne"],
    keywords: ["software engineering"]
  },
  {
    id: 254,
    word: "lift",
    type: "vb.",
    translations: ["løfte, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 255,
    word: "limit",
    type: "sb.",
    translations: ["grænse, -n, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 256,
    word: "linear",
    type: "adj.",
    translations: ["lineær, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 257,
    word: "linearithmic",
    type: "adj.",
    translations: ["linearitmisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 258,
    word: "linear probing",
    type: "sb.",
    translations: ["lineær sondering, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 259,
    word: "link",
    type: "vb.",
    translations: ["hægte"],
      keywords: ["computer science", "software engineering"]
  },
  {
    id: 260,
    word: "linked list",
    type: "sb.",
    translations: [
      "(en) kædet liste, (den) kædede liste, (de) kædede lister",
      "(en) hægtet liste, (den) hægtede liste, (de) hægtede lister"
    ],
    keywords: ["computer science"]
  },
  {
    id: 261,
    word: "local",
    type: "adj.",
    translations: ["local, -t, -e"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 262,
    word: "location",
    type: "sb.",
    translations: ["lokation, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 263,
    word: "locality-sensitive",
    type: "adj.",
    translations: ["afstandsfølsom, -, -me"],
    keywords: ["computer science"]
  },
  {
    id: 264,
    word: "logic",
    type: "sb.",
    translations: ["logik, -ken, -ker, -kerne"],
    keywords: ["computer science"]
  },
  {
    id: 265,
    word: "lookup",
    type: "sb.",
    translations: ["opslag, -et, -, -ene"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 266,
    word: "loop",
    type: "sb.",
    translations: ["løkke, -n, -r, -rne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 267,
    word: "lower",
    type: "adj.",
    translations: ["nedre, -, -"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 268,
    word: "lowercase",
    type: "sb.",
    translations: [
      "minuskel, minusklen, minuskler, minusklerne",
    ],
    keywords: ["computer science"]
  },
  {
    id: 269,
    word: "machine learning",
    type: "sb.",
    translations: ["maskinlæring, -en"],
    keywords: ["computer science"]
  },
  {
    id: 270,
    word: "machine code",
    type: "sb.",
    translations: ["maskinkode, -n, -, rne"],
    keywords: ["computer science"]
  },
  {
    id: 271,
    word: "Markov chain",
    type: "sb.",
    translations: ["markovkæde, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 272,
    word: "material",
    type: "sb.",
    translations: ["materiale, -t, -r, -rne"],
    keywords: []
  },
  {
    id: 273,
    word: "matrix, matrices",
    type: "sb.",
    translations: ["matrix, -er, matricer, matricerne"],
    keywords: ["mathematics"]
  },
  {
    id: 274,
    word: "map",
    type: "sb.",
    note: "also \"mapping\"",
    translations: ["afbildning, -en, -er, -erne"],
    keywords: ["mathematics"]
  },
  {
    id: 275,
    word: "membership",
    type: "sb.",
    translations: ["medlemsskab, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 276,
    word: "memory",
    type: "sb.",
    translations: ["hukommelse, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 277,
    word: "merge",
    type: "vb.",
    translations: ["flette, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 278,
    word: "merge request",
    type: "sb.",
    translations: ["fletteanmodning, -en, -er, -erne"],
    keywords: ["git"]
  },
  {
    id: 279,
    word: "merge sort",
    type: "sb.",
    translations: ["flettesortering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 280,
    word: "minimization",
    type: "sb.",
    note: "GB: minimisation",
    search_terms: ["minimisation"],
    translations: ["minimering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 281,
    word: "model",
    type: "sb.",
    translations: ["model, -len, -ler, -lerne"],
    keywords: ["computer science"]
  },
  {
    id: 282,
    word: "monad",
    type: "sb.",
    translations: ["monade, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 283,
    word: "monadic",
    type: "adj.",
    translations: ["monadisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 284,
    word: "mu",
    note: "Μ μ",
    translations: ["my"],
    keywords: ["greek alphabet"]
  },
  {
    id: 285,
    word: "mu-calculus",
    note: "μ-calculus",
    translations: ["my-kalkyle, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 286,
    word: "multi-threaded",
    type: "adj.",
    translations: ["flertråd|en, -et, -ede"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 287,
    word: "mutable",
    type: "adj.",
    translations: [
      "mutérbar, -t, -e",
      "foranderlig, -t, -e"
    ],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 288,
    word: "narrow",
    type: "adj.",
    translations: ["tynd"],
    keywords: ["computer science"]
  },
  {
    id: 289,
    word: "natural deduction",
    type: "sb.",
    translations: ["naturlig deduktion"],
    keywords: ["computer science"]
  },
  {
    id: 290,
    word: "node",
    type: "sb.",
    translations: ["knude, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 291,
    word: "nondeterministic",
    type: "adj.",
    translations: [
      "nondeterministisk, -, -e",
      "ikke-deterministisk, -, -e"
    ],
    keywords: ["computer science"]
  },
  {
    id: 292,
    word: "nonterminal",
    type: "sb.",
    translations: [
      "nonterminal, -en, -er, -erne",
      "ikke-terminal, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 293,
    word: "non-trivial",
    type: "adj.",
    translations: ["ikke triviel, -t, -le"],
    keywords: []
  },
  {
    id: 294,
    word: "normalisation",
    type: "sb.",
    translations: ["normalisering"],
    keywords: ["computer science"]
  },
  {
    id: 295,
    word: "not",
    type: "adv.",
    note: "also \"negation\"",
    translations: ["ikke", "negation"],
    keywords: ["computer science"]
  },
  {
    id: 296,
    word: "nu",
    note: "Ν ν",
    translations: ["ny"],
    keywords: ["greek alphabet"]
  },
  {
    id: 297,
    word: "object",
    type: "sb.",
    translations: ["objekt, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 298,
    word: "objective function",
    type: "sb.",
    translations: ["målfunktion, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 299,
    word: "omega",
    note: "Ω ω",
    translations: ["omega"],
    keywords: ["greek alphabet"]
  },
  {
    id: 300,
    word: "omicron",
    note: "Ο ο",
    translations: ["omikron"],
    keywords: ["greek alphabet"]
  },
  {
    id: 301,
    word: "open addressing",
    type: "sb.",
    translations: ["åben adressering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 302,
    word: "operational",
    type: "adj.",
    translations: ["operationel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    id: 303,
    word: "optimization",
    type: "sb.",
    note: "GB: optimisation",
    search_terms: ["optimisation"],
    translations: ["optimering, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 304,
    word: "optimize",
    type: "vb.",
    note: "GB: optimise",
    search_terms: ["optimise"],
    translations: ["optimere, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 305,
    word: "or",
    type: "adv.",
    note: "see also \"disjunction\"",
    translations: ["eller", "og/eller"],
    keywords: ["computer science"]
  },
  {
    id: 306,
    word: "order",
    type: "sb.",
    translations: ["orden", "ordning"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 307,
    word: "order",
    type: "vb.",
    translations: ["ordne, -r, -de, -t"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 308,
    word: "ordered",
    type: "adj.",
    translations: [
      "ord|net, -net, -nede",
      "sorte|ret, -ret, -rede"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 309,
    word: "order of magnitude",
    type: "sb.",
    translations: [
      "størrelsesorden, -en, -er, -erne",
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 310,
    word: "output",
    type: "sb.",
    translations: ["uddata, -en, -, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 311,
    word: "overhead",
    type: "sb.",
    translations: [
      "overhead, -et, -s, -ene ",
      "fast omkostning, faste omkostning, faste omkostninger"
    ],
    keywords: ["computer science"]
  },
  {
    id: 312,
    word: "paper",
    type: "sb.",
    translations: ["arti|kel, -klen, -kler, -klerne"],
    keywords: []
  },
  {
    id: 313,
    word: "paradigm",
    type: "sb.",
    translations: ["paradigme, -t, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 314,
    word: "parenthesis",
    type: "sb.",
    note: "(round) bracket",
    translations: ["parentes, -en, -er, -erne"],
    keywords: ["typography"]
  },
  {
    id: 315,
    word: "partial",
    type: "adj.",
    translations: ["partiel, -t, -le"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 316,
    word: "partition",
    type: "sb.",
    translations: [
      "partition, -en, -er, -erne",
      "partitionering, -en, -er, -erne"
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 317,
    word: "path",
    type: "sb.",
    translations: [
      "sti, -en, -er, -erne",
      "vej, -en, -e, -ene"
    ],
    keywords: ["computer science"]
  },
  {
    id: 318,
    word: "path compression",
    type: "sb.",
    translations: [
      "stiforkortning, -en, -er, -erne",
      "vejforkortning, -en, -er, -erne",
    ],
    keywords: ["computer science"]
  },
  {
    id: 319,
    word: "pattern",
    type: "sb.",
    translations: ["møns|ter, -teret, -tre, -trene"],
    keywords: ["computer science"]
  },
  {
    id: 320,
    word: "pattern matching",
    type: "sb.",
    translations: ["mønstergenkendelse, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 321,
    word: "peer",
    type: "sb.",
    note: "in network",
    translations: [
      "part, -en, -er, -erne",
      "kontrahent, -en, -er, -erne"
    ],
    keywords: []
  },
  {
    id: 322,
    word: "peer",
    type: "sb.",
    note: "fellow scientist",
    translations: ["fagfælle, -n, -r, -rne"],
    keywords: []
  },
  {
    id: 323,
    word: "peer review",
    type: "sb.",
    translations: ["fagfællebedømmelse, -n, -r, -rne"],
    keywords: []
  },
  {
    id: 324,
    word: "peer review",
    type: "vb.",
    translations: ["fagfællebedøm|me, -mer, -mede, -t"],
    keywords: []
  },
  {
    id: 325,
    word: "peer reviewer",
    type: "sb.",
    translations: ["fagfællebedømmer, -en, -e, -ne"],
    keywords: []
  },
  {
    id: 326,
    word: "performance",
    type: "sb.",
    translations: ["ydeevne, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 327,
    word: "period",
    type: "sb.",
    note: "GB: full stop",
    search_terms: ["full stop"],
    translations: ["punktum, -met, -mer, merne"],
    keywords: ["typography"]
  },
  {
    id: 328,
    word: "pessimization",
    type: "sb.",
    note: "GB: pessimisation",
    search_terms: ["pessimisation"],
    translations: ["pessimering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 329,
    word: "pessimize",
    type: "vb.",
    note: "GB: pessimise",
    search_terms: ["pessimise"],
    translations: ["optimere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 330,
    word: "phi",
    note: "Φ φ",
    translations: ["phi", "phei"],
    keywords: ["greek alphabet"]
  },
  {
    id: 331,
    word: "planar",
    type: "adj.",
    translations: ["planær, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 332,
    word: "pi",
    note: "Π π",
    translations: ["pi"],
    keywords: ["greek alphabet"]
  },
  {
    id: 333,
    word: "precedence",
    type: "sb.",
    translations: ["præcedens"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 334,
    word: "pointer",
    type: "sb.",
    translations: ["peger, -en, -e, -erne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 335,
    word: "polyhedron",
    type: "sb.",
    translations: ["polyede, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    id: 336,
    word: "polynomial",
    type: "sb.",
    translations: ["polynomie, -t, -r, -rne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 337,
    word: "polynomial",
    type: "adj.",
    translations: ["polynomiel, -t, -le"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 338,
    word: "predicate",
    type: "sb.",
    translations: ["prædikat, -et, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 339,
    word: "prefix",
    type: "sb.",
    translations: ["præfiks, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 340,
    word: "prefix tree",
    type: "sb.",
    translations: ["præfikstræ, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 341,
    word: "premise",
    type: "sb.",
    translations: ["præmis, -sen, -ser, -serne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 342,
    word: "priority queue",
    type: "sb.",
    translations: ["prioritetskø, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 343,
    word: "product construction",
    type: "sb.",
    translations: ["produktkonstruktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 344,
    word: "production",
    type: "sb.",
    translations: ["produktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 345,
    word: "program",
    type: "sb.",
    translations: ["program, -et, -er, -erne"],
      keywords: ["computer science", "software engineering"]
  },
  {
    id: 346,
    word: "program",
    type: "vb.",
    translations: ["programmere, -r, -de, -t"],
    keywords: ["software engineering"]
  },
  {
    id: 347,
    word: "programming",
    type: "sb.",
    translations: [
      "programmering, -en, -er, -erne",
      "programlægning, -en, -er, -erne"
    ],
    keywords: ["software engineering"]
  },
  {
    id: 348,
    word: "programming language",
    type: "sb.",
    translations: ["programmeringssprog, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 349,
    word: "projection",
    type: "sb.",
    translations: ["projektion, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 350,
    word: "proof",
    type: "sb.",
    translations: ["bevis, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 351,
    word: "proof rule",
    type: "sb.",
    translations: ["bevis|regel, -reglen, -regler, -reglerne"],
    keywords: ["computer science"]
  },
  {
    id: 352,
    word: "property",
    type: "sb.",
    translations: ["egenskab, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 353,
    word: "psi",
    note: "Ψ ψ",
    translations: ["psi"],
    keywords: ["greek alphabet"]
  },
  {
    id: 354,
    word: "publication",
    type: "sb.",
    translations: ["publikation, -en, -er, -erne"],
    keywords: []
  },
  {
    id: 355,
    word: "publish",
    type: "vb.",
    translations: ["publicere, -r, -de, -t"],
    keywords: []
  },
  {
    id: 356,
    word: "published",
    type: "adj.",
    translations: ["publice|ret, -ret, -rede"],
    keywords: []
  },
  {
    id: 357,
    word: "pull",
    type: "vb.",
    translations: ["hale, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    id: 358,
    word: "pull request",
    type: "sb.",
    translations: ["haleanmodning, -en, -er, -erne"],
    keywords: ["git"]
  },
  {
    id: 359,
    word: "pure",
    type: "adj.",
    note: "see also \"side effect\"",
    translations: ["ren, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 360,
    word: "push",
    type: "vb.",
    translations: ["puffe, -r, -de, -t"],
    keywords: ["git"],
    phrases: [
      ["I force pushed to the main branch", "Jeg tvangspuffede vistnok til hovedgrenen"]
    ]
  },
  {
    id: 361,
    word: "quadratic",
    type: "adj.",
    translations: ["kvadratisk, -, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 362,
    word: "quadratic probing",
    type: "sb.",
    translations: ["kvadratisk sondering, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 363,
    word: "quantifier",
    type: "sb.",
    translations: ["kvantor"],
    keywords: ["computer science"]
  },
  {
    id: 364,
    word: "quantify",
    type: "vb.",
    translations: ["kvantificere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 365,
    word: "query",
    type: "sb.",
    translations: ["forespørgsel, forespørgslen, forespørgsler, forespørgslerne"],
    keywords: ["computer science"]
  },
  {
    id: 366,
    word: "query",
    type: "vb.",
    translations: ["fore|spørge, -spørger, -spurgte, -spurgt"],
    keywords: ["computer science"]
  },
  {
    id: 367,
    word: "question mark",
    type: "sb.",
    translations: ["spørgsmålstegn, -et, -, -ene"],
    keywords: ["typography"]
  },
  {
    id: 368,
    word: "queue",
    type: "sb.",
    translations: ["kø, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 369,
    word: "quick sort",
    type: "sb.",
    translations: ["kviksortering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 370,
    word: "quotation mark",
    type: "sb.",
    translations: ["citationstegn, -et, -, -ene"],
    keywords: ["typography"]
  },
  {
    id: 371,
    word: "quotient",
    type: "sb.",
    translations: ["kvotient, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 372,
    word: "random",
    type: "adj.",
    translations: [
      "tilfældig, -t, -e",
      "randomise|ret, -ret, -rede"
    ],
    keywords: ["computer science"]
  },
  {
    id: 373,
    word: "randomize",
    type: "vb.",
    note: "GB: randomise",
    search_terms: ["randomise"],
    translations: ["randomisere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 374,
    word: "randomization",
    type: "sb.",
    note: "GB: randomisation",
    search_terms: ["randomisation"],
    translations: ["randomisering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 375,
    word: "rank",
    type: "sb.",
    translations: ["rang, -en, -, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 376,
    word: "reachable",
    type: "adj.",
    translations: ["opnåelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 377,
    word: "rebase",
    type: "vb.",
    translations: ["genbasere, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    id: 378,
    word: "rebuttal",
    type: "sb.",
    translations: ["indsigelse, -n, -r, -rne"],
    keywords: []
  },
  {
    id: 379,
    word: "record",
    type: "sb.",
    translations: ["post,  -en, -er, -erne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 380,
    word: "recursion",
    type: "sb.",
    translations: ["rekursion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 381,
    word: "recursive",
    type: "adj.",
    translations: ["rekursiv, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 382,
    word: "recursively enumerable",
    type: "adj.",
    translations: ["rekursiv nummera|bel, -belt, -ble"],
    keywords: ["computer science"]
  },
  {
    id: 383,
    word: "reduction",
    type: "sb.",
    translations: ["reduktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 384,
    word: "reference",
    type: "sb.",
    translations: ["reference, -n, -r, -rne"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 385,
    word: "reference",
    type: "vb.",
    translations: ["referere, -r, -de, -t"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 386,
    word: "reflexive",
    type: "adj.",
    translations: ["refleksiv, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 387,
    word: "regular",
    type: "adj.",
    translations: ["regulær, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 388,
    word: "regularity",
    type: "sb.",
    translations: ["regularitet, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 389,
    word: "reject",
    type: "vb.",
    translations: ["afvi|se, -ser, -ste, -st"],
    keywords: ["computer science"]
  },
  {
    id: 390,
    word: "rejected",
    type: "adj.",
    translations: ["afvist, -, -e"],
    keywords: ["computer science"],
    phrases: [
      ["weakly rejected", "svagt afvist"],
      ["strongly rejected", "strengt afvist"]
    ]
  },
  {
    id: 391,
    word: "rejection",
    type: "sb.",
    translations: ["afvisning, -en, -er, -erne"],
    keywords: ["computer science"],
    phrases: [
      ["weak reject", "svag afvisning"],
      ["strong reject", "streng afvisning"]
    ]
  },
  {
    id: 392,
    word: "relation",
    type: "sb.",
    translations: ["relation, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 393,
    word: "rename",
    type: "vb.",
    translations: [
      "omdø|be, -ber, -bte, -bt",
      "omnavngive, -r, -de, -t"
    ],
    keywords: ["computer science"]
  },
  {
    id: 394,
    word: "repository",
    type: "sb.",
    translations: ["repositorium, -et, -er, -erne"],
    keywords: ["git"]
  },
  {
    id: 395,
    word: "rho",
    note: "Ρ ρ",
    translations: ["rho"],
    keywords: ["greek alphabet"]
  },
  {
    id: 396,
    word: "root",
    type: "sb.",
    translations: ["rod, -en, rødder, rødderne"],
    keywords: ["computer science"]
  },
  {
    id: 397,
    word: "rule",
    type: "sb.",
    translations: ["regel, -reglen, -regler, -reglerne"],
    keywords: ["computer science"]
  },
  {
    id: 398,
    word: "running time",
    type: "sb.",
    translations: [
      "kørselstid, -en, -er, -erne",
      "udførselstid, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 399,
    word: "reason",
    type: "vb.",
    translations: ["ræsonnere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 400,
    word: "reasoning",
    type: "sb.",
    translations: ["ræsonnement, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 401,
    word: "satisfiability",
    type: "sb.",
    translations: ["tilfredstillelse, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 402,
    word: "satisfiable",
    type: "adj.",
    translations: ["tilfredstillelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 403,
    word: "satisfy",
    type: "vb.",
    translations: ["tilfredstille, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 404,
    word: "scope",
    type: "sb.",
    translations: ["virkefelt, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 405,
    word: "search",
    type: "vb.",
    translations: ["søg|e, -er, -te, -t"],
    keywords: ["computer science"]
  },
  {
    id: 406,
    word: "search tree",
    type: "sb.",
    translations: ["søgetræ, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 407,
    word: "set",
    type: "sb.",
    translations: ["mængde, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    id: 408,
    word: "semantics",
    type: "sb.",
    translations: ["semantik, -ken, -ker, -kerne"],
    keywords: ["computer science"]
  },
  {
    id: 409,
    word: "semantic entailment",
    translations: ["logisk konsekvens"],
    keywords: ["computer science"]
  },
  {
    id: 410,
    word: "semicolon",
    type: "sb.",
    translations: ["semikolon, -et, -er, -erne"],
    keywords: ["typography"]
  },
  {
    id: 411,
    word: "sequence",
    type: "sb.",
    translations: ["sekvens, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 412,
    word: "share",
    type: "vb.",
    translations: ["dele, -r, delte, delt"],
    keywords: ["computer science"]
  },
  {
    id: 413,
    word: "shift",
    type: "vb.",
    translations: ["forskyde, -r, -de, forskudt"],
    keywords: ["computer science"]
  },
  {
    id: 414,
    word: "slash",
    type: "sb.",
    note: "forward slash",
    translations: ["skråstreg -en, -er, -erne"],
    keywords: ["typography"]
  },
  {
    id: 415,
    word: "side effect",
    type: "sb.",
    translations: [
      "bivirkning, -en, -er, -erne",
      "sideeffekt, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 416,
    word: "sigma",
    note: "Σ σ, ς",
    translations: ["sigma"],
    keywords: ["greek alphabet"]
  },
  {
    id: 417,
    word: "simplex",
    translations: ["simpleks"],
    keywords: ["computer science"]
  },
  {
    id: 418,
    word: "simplicial complex",
    type: "adj.",
    translations: ["simplicielt kompleks, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 419,
    word: "sink",
    type: "sb.",
    translations: [
      "dræn, -et, -, -ene",
      "afløb, -et, -, -ene"
    ],
    keywords: ["computer science"]
  },
  {
    id: 420,
    word: "sound",
    type: "adj.",
    translations: ["sund, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 421,
    word: "source",
    type: "sb.",
    translations: ["kilde, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 422,
    word: "source code",
    type: "sb.",
    translations: ["kildekode, -n, -r, -rne"],
    keywords: ["computer science"],
    phrases: [
      ["open-source", "åben kildekode"]
    ]
  },
  {
    id: 423,
    word: "space",
    type: "sb.",
    note: "memory",
    translations: ["plads, -en, -er, -erne"],
    keywords: ["computer science"],
    phrases: [
      ["the algorithm's uses linear space", "algoritmens pladsforbrug er lineær"]
    ]
  },
  {
    id: 424,
    word: "space",
    type: "sb.",
    note: "typography",
    translations: ["mellemrum, -met, -, -mene"],
    keywords: ["typography"],
  },
  {
    id: 425,
    word: "space complexity",
    type: "sb.",
    translations: ["pladskompleksitet, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 426,
    word: "square",
    type: "sb.",
    note: "on a tape",
    translations: ["felt, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 427,
    word: "squash",
    type: "vb.",
    translations: ["kvase, -r, kvaste / -de, kvast / -t"],
    keywords: ["git"]
  },
  {
    id: 428,
    word: "stack",
    type: "sb.",
    translations: ["stak, -ken, -ke, -kene"],
    keywords: ["computer science"]
  },
  {
    id: 429,
    word: "stash",
    type: "vb.",
    translations: ["gemme, -r, gemte, gemt"],
    keywords: ["git"]
  },
  {
    id: 430,
    word: "state",
    type: "sb.",
    translations: ["tilstand, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 431,
    word: "state space",
    type: "sb.",
    translations: ["tilstandsrum, -met, -, -mene"],
    keywords: ["computer science"]
  },
  {
    id: 432,
    word: "static",
    type: "adj.",
    translations: ["statisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 433,
    word: "string",
    type: "sb.",
    translations: [
      "streng, -en, -e, -ene",
      "ord, -et, -, -ene"
    ],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 434,
    word: "subset",
    type: "sb.",
    translations: ["delmængde, -n, -r, -rne"],
    keywords: ["mathematics"]
  },
  {
    id: 435,
    word: "subset construction",
    type: "sb.",
    translations: ["delmængdekonstruktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 436,
    word: "suffix",
    type: "sb.",
    translations: ["suffiks, -et, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 437,
    word: "supervised learning",
    type: "sb.",
    translations: ["overvåget læring"],
    keywords: ["computer science"]
  },
  {
    id: 438,
    word: "supplementary",
    type: "adj.",
    translations: ["supplerende, -, -"],
    keywords: []
  },
  {
    id: 439,
    word: "surjective",
    type: "adj.",
    translations: ["surjektiv, -t, -e"],
    keywords: ["mathematics"]
  },
  {
    id: 440,
    word: "switch",
    type: "vb.",
    translations: ["skifte, -r, -de, -t"],
    keywords: ["git"]
  },
  {
    id: 441,
    word: "symbol",
    type: "sb.",
    translations: [
      "symbol, -et, -er, -erne",
      "tegn, -et, -, -ene"
    ],
    keywords: ["computer science"]
  },
  {
    id: 442,
    word: "symmetric",
    type: "adj.",
    translations: ["symmetrisk, -t, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 443,
    word: "syntax",
    type: "sb.",
    translations: ["syntaks, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 444,
    word: "table",
    type: "sb.",
    translations: ["tabel, -len, -ler, -lerne"],
    keywords: ["computer science"]
  },
  {
    id: 445,
    word: "tag",
    type: "sb.",
    translations: ["mærke, -t, -r, -rne"],
    keywords: ["git"]
  },
  {
    id: 446,
    word: "tag",
    type: "vb.",
    translations: ["opmærke"],
    keywords: ["git"]
  },
  {
    id: 447,
    word: "tail",
    note: "also \"cdr\"",
    type: "sb.",
    translations: ["hale, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 448,
    word: "tape",
    type: "sb.",
    translations: ["bånd, -et, -, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 449,
    word: "tau",
    note: "Τ τ",
    translations: ["tau"],
    keywords: ["greek alphabet"]
  },
  {
    id: 450,
    word: "tautology",
    type: "sb.",
    translations: ["tautologi, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 451,
    word: "ternary",
    type: "sb.",
    translations: ["trinær"],
    keywords: ["computer science"]
  },
  {
    id: 452,
    word: "terminal",
    type: "sb.",
    translations: ["terminal, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 453,
    word: "termination",
    type: "sb.",
    note: "also \"halt\"",
    translations: ["terminering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 454,
    word: "test",
    type: "sb.",
    translations: ["test, -en, -, -ene"],
    keywords: ["computer science", "software engineering"],
    phrases: [
      ["unit test", "modultest / deltest"],
      ["integration test", "integrationstest"],
      ["system test", "systemtest"]
    ]
  },
  {
    id: 455,
    word: "theta",
    note: "Θ θ",
    translations: ["theta"],
    keywords: ["greek alphabet"]
  },
  {
    id: 456,
    word: "thread",
    type: "sb.",
    translations: ["tråd, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 457,
    word: "throw",
    type: "vb.",
    translations: ["kaste, -r, -ede"],
    keywords: ["computer science", "software engineering"]
  },
  {
    id: 458,
    word: "time complexity",
    type: "sb.",
    translations: ["tidskompleksitet, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 459,
    word: "tool",
    type: "sb.",
    translations: ["værktøj, -et, -er, -erne"],
    keywords: []
  },
  {
    id: 460,
    word: "top",
    type: "sb.",
    note: "see also \"true\"",
    translations: ["top, -pen, -pe, -pene"],
    keywords: ["computer science"]
  },
  {
    id: 461,
    word: "top-down",
    type: "adj.",
    translations: ["top-ned"],
    keywords: ["computer science"],
    phrases: [
      ["top-down 2-4 tree", "top-ned 2-4-træ"]
    ]
  },
  {
    id: 462,
    word: "topologic, topological",
    type: "adj.",
    translations: ["topologisk, -, -e"],
    keywords: ["computer science"]
  },
  {
    id: 463,
    word: "total",
    type: "adj.",
    translations: [
      "(automata) fuldstændig, -t, -e",
      "(correctness) total, -t, -e"
    ],
    keywords: ["computer science", "mathematics"],
  },
  {
    id: 464,
    word: "transition",
    type: "sb.",
    translations: ["transition, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 465,
    word: "transition function",
    type: "sb.",
    translations: ["transitionsfunktion, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 466,
    word: "transition system",
    type: "sb.",
    translations: ["transitionssystem, -met, -mer, -merne"],
    keywords: ["computer science"]
  },
  {
    id: 467,
    word: "transitive",
    type: "adj.",
    translations: ["transitiv, -t, -e"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 468,
    word: "trie",
    type: "sb.",
    translations: ["trie, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 469,
    word: "trivial",
    type: "adj.",
    translations: ["triviel, -t, -le"],
    keywords: []
  },
  {
    id: 470,
    word: "true",
    type: "sb.",
    note: "see also \"top\"",
    translations: ["sand"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 471,
    word: "truncate",
    type: "vb.",
    translations: ["trunkere, -r, -de, -t"],
    keywords: ["computer science"]
  },
  {
    id: 472,
    word: "truncated",
    type: "adj.",
    translations: ["trunke|ret, -ret, -rede"],
    keywords: ["computer science"]
  },
  {
    id: 473,
    word: "truth table",
    type: "sb.",
    translations: ["sandhedstabel, -len, -ler, -lerne"],
    keywords: ["computer science"]
  },
  {
    id: 474,
    word: "type",
    type: "sb.",
    translations: ["type, -n, -r, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 475,
    word: "type theory",
    type: "sb.",
    translations: ["typeteori, -n, -r, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 476,
    word: "unary",
    type: "adj.",
    translations: ["unær, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 477,
    word: "uncountable",
    type: "adj.",
    translations: [
        "overtællelig, -t, -e",
        "ikke-nummera|bel, -belt, -ble",
    ],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 478,
    word: "undecidable",
    type: "adj.",
    note: "also \"non-decidable\"",
    translations: ["uafgørlig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 479,
    word: "undirected",
    type: "adj.",
    translations: [
      "uoriente|ret, -ret, -rede",
      "uret|tet, -tet, -tede"
    ],
    keywords: ["computer science"]
  },
  {
    id: 480,
    word: "union",
    type: "sb.",
    translations: [
      "forening, -en, -er, -erne",
      "foreningsmængde, -n, -r, -rne"
    ],
    keywords: ["mathematics"]
  },
  {
    id: 481,
    word: "union-find",
    type: "sb.",
    note: "also \"disjoint-set data structure\"",
    translations: ["forén-og-find"],
    keywords: ["computer science"],
    phrases: [
      ["union by rank", "rangeret forening"],
      ["union by size", "vægtet forening"]
    ]
  },
  {
    id: 482,
    word: "unit",
    type: "sb.",
    translations: ["enhed, -en, -er, -erne"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 483,
    word: "unit type",
    type: "sb.",
    translations: ["enhedstype, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 484,
    word: "universal",
    type: "adj.",
    translations: ["universel, -t, -le"],
    keywords: ["computer science"]
  },
  {
    id: 485,
    word: "unreachable",
    type: "sb.",
    translations: ["uopnåelig, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 486,
    word: "upsilon",
    note: "Υ υ",
    translations: ["ypsilon"],
    keywords: ["greek alphabet"]
  },
  {
    id: 487,
    word: "upper",
    type: "adj.",
    translations: ["øvre, -, -"],
    keywords: ["computer science", "mathematics"]
  },
  {
    id: 488,
    word: "uppercase",
    type: "sb.",
    translations: [
      "stort bogstav",
      "versal, -en, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 489,
    word: "valid",
    type: "adj.",
    translations: ["gyldig, -t, -t"],
    keywords: ["computer science"]
  },
  {
    id: 490,
    word: "validation",
    type: "sb.",
    translations: ["validering, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 491,
    word: "vector",
    type: "sb.",
    translations: ["vektor, -en, -er, -erne"],
    keywords: ["computer science", "mathematics", "software engineering"],
    phrases: [
      ["the element is inserted into a vector", "elementet indsættes i en ubegrænset række"]
    ]
  },
  {
    id: 492,
    word: "verification",
    type: "sb.",
    translations: ["verifikation, -en, -er, -erne"],
    keywords: ["computer science"]
  },
  {
    id: 493,
    word: "vertex, vertice",
    type: "sb.",
    note: "see also \"node\"",
    translations: [
      "hjørne, -t, -r, -rne",
      "punkt, -et, -er, -erne"
    ],
    keywords: ["computer science"]
  },
  {
    id: 494,
    word: "weight",
    type: "sb.",
    translations: ["vægt, -en, -e, -ene"],
    keywords: ["computer science"]
  },
  {
    id: 495,
    word: "weighted",
    type: "adj.",
    translations: ["væg|tet, -tet, -tede"],
    keywords: ["computer science"]
  },
  {
    id: 496,
    word: "wide",
    type: "adj.",
    translations: ["bred, -t, -e"],
    keywords: ["computer science"]
  },
  {
    id: 497,
    word: "width",
    type: "sb.",
    translations: ["bredde, -n, -r, -rne"],
    keywords: ["computer science"]
  },
  {
    id: 498,
    word: "word",
    type: "sb.",
    translations: ["ord, -et, -, -ene"],
    keywords: ["computer science"],
    phrases: [
      ["a machine word is often 1 byte", "et maskinord er ofte 1 byte stor"]
    ]
  },
  {
    id: 499,
    word: "worst-case",
    type: "adj.",
    translations: ["værst tænkelig, -t, -e"],
    keywords: ["computer science"],
    phrases: [
      ["The worst case running time is O(n²)", "Den værst tænkelige kørseltsid er O(n²)"]
    ]
  },
  {
    id: 500,
    word: "xor",
    type: "adv.",
    note: "also \"exclusive or\"",
    translations: ["enten-eller", "eksklusivt eller"],
    keywords: ["computer science"]
  },
  {
    id: 501,
    word: "xi",
    note: "Ξ ξ",
    translations: ["xi"],
    keywords: ["greek alphabet"]
  },
  {
    id: 502,
    word: "zeta",
    note: "Ζ ζ",
    translations: ["zeta"],
    keywords: ["greek alphabet"]
  },
];
