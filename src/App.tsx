import React, { useState } from 'react';
import './App.scss';

import Filter, { FilterNone } from './Filter.tsx';
import Lexeme from './Lexeme.tsx';

import * as Dictionary from './dictionary.ts';

const App = () => {
  const [filterCtxt, setFilterCtxt] = useState(FilterNone);

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
            const key = l.word + (l.type ? l.type : "") + (l.note ? l.note : "");
            return <Lexeme lexeme={l} key={key} />
          })}
      </div>
    </div>
  );
}

export default App;
