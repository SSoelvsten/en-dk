import React, { useEffect, useState } from 'react';
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

  return (
    <div className="Filter">
      <input onChange={(e) => setInput(e.target.value)}
        placeholder="filter . . ."
      />

      <select onChange={(e) => setCategory(e.target.value as FilterCategory)}>
        {FilterCategories.map((c) => <option key={c}>{c}</option>)}
      </select>
    </div>
  );
};

export default Filter;
