# Contribution Guidelines

Thank you for spending your valuable time contributing to this dictionary!

## Adding Words and Keywords

The content of the entire dictionary is pulled from `src/dictionary.ts`. This is a type-checked list
of all *lemexes* to be displayed.

### Keywords

Keywords allows the user to only look at words related to a certain subject. To add a new keyword,
add it to the `keywords` list at the very top of the file. Please, keep this in alphabetical order.

### Words

The dictionary itself is contained in the list `en_dk`.

**Content of a Lexeme**

Each entry is a `Lexeme` which contains three mandatory values:

- `word`: a single string with the word(s) to-be translated.
- `translations`: a list with each translation. Note, there is a difference between putting in
  `["a,b"]` and `["a", "b"]`. The former renders as a single line *~ a,b* whereas the latter ends up
  as two separate lines *~ a* and *~ b*. Use the former, if *a* and *b* are alternative translations
  in the same context. Use the latter, if the translation depends on the context.

  Keep each list sorted from most to least endorsed translation.
- `keywords`: a list of keywords `Keyword`. To keep things manageable, please keep this list of
  strings alphabetically sorted.

Furthermore, a lexeme can include a fourth entry, a `note`, which is displayed in parentheses and in
italic next to `word`.

**Order of Lexemes**

The list of words is displayed in the order provided. Hence, keep this entire list lexicographically
sorted. If you find any word is out-of-order, please help fixing it.

## Adding New Functionality

The entire webpage is a tiny React application. Hence, to add new functionality, you have to edit or
extend the existing components and/or add new components.
