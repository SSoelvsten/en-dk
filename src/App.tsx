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

      <div>
        {Dictionary.en_dk
                   .filter((l : Dictionary.Lexeme) => {
                      return l.word.includes(filterCtxt.input)
                          && l.keywords.some((kw : string) => kw.includes(filterCtxt.category))
                    })
                   .map((l: Dictionary.Lexeme) => {
                      return <Lexeme lexeme={l} key={l.word} />
                    })}
      </div>
    </div>
  );
}

export default App;
