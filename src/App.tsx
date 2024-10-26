import React, { useState } from 'react';
import './App.scss';

import Filter, { FilterDefault } from './Filter.tsx';
import Lexeme from './Lexeme.tsx';

import * as Dictionary from './dictionary.ts';

const App = () => {
  const [filterCtxt, setFilterCtxt] = useState(FilterDefault);

  return (
    <div className="App">
      <Filter onChange={setFilterCtxt} />

      <div className="Words">
        {Dictionary.en_dk
          .filter((l: Dictionary.Lexeme) => {
            return (l.word.includes(filterCtxt.input)
              || (l.note && l.note.includes(filterCtxt.input))
              || (l.phrases && l.phrases.some(([en, _]) => en.includes(filterCtxt.input))))
              && (filterCtxt.category === "" || l.keywords.some((kw: string) => kw === filterCtxt.category))
          })
          .map((l: Dictionary.Lexeme) => {
            return <Lexeme lexeme={l} key={JSON.stringify(l)} />
          })}
      </div>
    </div>
  );
}

export default App;
