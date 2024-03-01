import React, { useEffect, useRef, useState } from 'react';
import './Filter.scss';
import * as Dictionary from './dictionary.ts';

export interface FilterContext {
  input: string;
  category: Dictionary.KeyWord | "";
};

export const FilterNone: FilterContext = {
  input: "",
  category: "",
};

interface FilterProps {
  onChange: (ctxt: FilterContext) => void;
};

type FilterCategory = Dictionary.KeyWord | "";

const FilterCategories: FilterCategory[] = ["", ...Dictionary.keywords];

const Filter = ({ onChange }: FilterProps) => {
  const [input, setInput] = useState(FilterNone.input);
  const [category, setCategory] = useState(FilterNone.category);

  useEffect(() => onChange({ input, category }), [input, category, onChange]);

  const textInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("Filter Component: Attaching key listener");

    // Based on: https://stackoverflow.com/a/71778581/13300643
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === "F3" || (e.ctrlKey && e.key === "f")) {
        if (textInput.current) {
          e.preventDefault();
          textInput.current.focus();
        }
      }
    };

    // Add event listener and return clean-up function
    window.addEventListener('keydown', keyListener);
    return () => { window.removeEventListener('keydown', keyListener); }
  }, []);

  return (
    <div className="Filter">
      <input onChange={(e) => setInput(e.target.value)}
             placeholder="filter . . ."
             ref={textInput}
      />

      <select onChange={(e) => setCategory(e.target.value as FilterCategory)}>
        {FilterCategories.map((c) => <option key={c}>{c}</option>)}
      </select>
    </div>
  );
};

export default Filter;
