# Contribution Guidelines

Thank you for spending your valuable time contributing to this dictionary!

## Adding Words and Keywords

The content of the entire dictionary is pulled from `src/dictionary.ts`. This is
a type-checked list of all *lemexes* to be displayed.

### Keywords

Keywords allows the user to only look at words related to a certain subject. To
add a new keyword, add it to the `keywords` list at the very top of the file.
Please, keep this in alphabetical order.

### Words

The dictionary itself is contained in the list `en_dk`.

**Content of a Lexeme**

Each entry is a `Lexeme` which contains these mandatory values:

- `word`: A single string with the word(s) to-be translated.
- `translations`: a list with each translation.
  - Each translation includes its inflections, separated by commas. Each
    inflection (except for the first) is written as "*, -\<suffix\>*", i.e. what
    has to be appended to obtain the inflection. To ensure the inflection always
    is an appending, a *|* is placed at the end of the last syllable that all
    inflections have as a common prefix. If they have nothing in common, then
    inflections are written in their entirety and without the *|* and *-*.
    - Nouns (sb.): The translation itself is *indefinite singular*. Then follows
      the inflections in *definite singular*, *indefinite singular*, and *definite
      plural*.
    - Verbs (vb.): The translation is itself in *bare infinitive*. Then follows
      the *finite* inflections in *current* and in *past* tenses. Finally, it is
      provided in *perfect* tense.
    - Adjective (adj.): The translation itself is provided as an attribute for a
      *commonly* gendered indefinite singular noun. Then follows its inflection
      for a *neuterly* gendered indefinite singular noun. Thirdly, the
      inflection for a definite noun is given.
    - Adverbs (adv.): No inflections need to be provided.
  - Keep each list sorted from most to least endorsed translation.
  - For context, prefix a translation with "(\<context\>)"
- `keywords`: a list of keywords `Keyword`. To keep things manageable, please
  keep this list of strings alphabetically sorted.

Furthermore, a lexeme can include the following entries:

- `type`: Whether a word is a noun (*sb.*), a verb (*vb.*), an adjective
  (*adj.*), or an adverb (*adv.*).
- `note`: This is displayed in parentheses and in italic next on a separate line
  between the word and its translations. Usually, this is used to reference
  other relevant words to look up, words this translation also covers, or
  alternative spellings.
- `prases`: A list of tuples `[<English Phrase>, <Danish Phrase>]`. These can be
  used to show a translation in a particular context, e.g. if the word is
  translated differently in another context.

**Order of Lexemes**

The list of words is displayed in the order provided. Hence, keep this entire
list lexicographically sorted. If you find any word is out-of-order, please help
fixing it.

## Adding New Functionality

The entire webpage is a tiny React application. Hence, to add new functionality,
you have to edit or extend the existing components and/or add new components.
