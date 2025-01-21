import React, { useState } from 'react';
import './App.scss';

import Filter, { FilterDefault } from './Filter.tsx';
import Lexeme from './Lexeme.tsx';

import * as Dictionary from './dictionary.ts';
import Download from './Download.tsx';

const App = () => {
  const [filterCtxt, setFilterCtxt] = useState(FilterDefault);

  const lexemes = Dictionary.en_dk
    .filter((l: Dictionary.Lexeme) => {
      const input_lowered = filterCtxt.input.toLocaleLowerCase();
      return (l.word.toLocaleLowerCase().includes(input_lowered)
        || (l.search_terms && l.search_terms.some((x) => x.toLocaleLowerCase().includes(input_lowered)))
        || (l.phrases && l.phrases.some(([en, _]) => en.includes(input_lowered))))
        && (filterCtxt.category === "" || l.keywords.some((kw: string) => kw === filterCtxt.category))
    });

  return (
    <div className="App">
      <Download lexemes={lexemes} />
      <Filter onChange={setFilterCtxt} />

      <div className="Words">
        {lexemes.map(l => <Lexeme lexeme={l} key={JSON.stringify(l)} />)}
      </div>
    </div>
  );
}

export default App;
