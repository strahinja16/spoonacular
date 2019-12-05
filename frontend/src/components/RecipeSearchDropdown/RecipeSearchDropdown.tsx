import React, { FC, useState } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';

export interface RecipeSearchDropdownProps {
  onSelect: (option: Option) => void;
}

export const recipeSearchOptions: Option[] = [
  { value: 'basic', label: 'Basic search', className: '' },
  { value: 'nutrition', label: 'Search by nutrition', className: '' },
];

const RecipeSearchDropdown: FC<RecipeSearchDropdownProps> = ({ onSelect }) => {
  const [opt, setOption] = useState(recipeSearchOptions[0]);

  const onChange = (selectedOption: Option) => {
    setOption(selectedOption);
    onSelect(selectedOption);
  };

  return (
    <Dropdown
      options={recipeSearchOptions}
      onChange={onChange}
      value={opt}
      placeholder="Select an option"
    />
  );
};

export default RecipeSearchDropdown;
