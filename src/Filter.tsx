import React, { useEffect, useState } from 'react';
import './Filter.scss';
import * as Dictionary from './dictionary.ts';

export interface FilterContext {
  input: string;
  category: Dictionary.KeyWord | "";
};

export const FilterNone : FilterContext = {
  input: "",
  category: "",
};

interface FilterProps {
  onChange: (ctxt: FilterContext) => void;
};

const Filter = ({ onChange } : FilterProps) => {
  const [input, setInput] = useState(FilterNone.input);
  const [category, setCategory] = useState(FilterNone.category);

  useEffect(() => onChange({ input, category }), [input, category, onChange]);

  const categories : (Dictionary.KeyWord | "")[] = [
    "",
    "algorithmics",
    "cryptography",
    "formal methods",
    "geometry",
    "graph",
    "hashing",
    "language theory",
    "mathematics",
  ];

  return (
    <div className="Filter">
        <input onChange={(e) => setInput(e.target.value)}
               placeholder="filter . . ."
        />

        <select onChange={(e) => setCategory(e.target.value as any)}>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
    </div>
  );
};

export default Filter;