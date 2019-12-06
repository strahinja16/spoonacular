import React, { FC, useState } from 'react';
import { Option } from 'react-dropdown';
import BasicRecipeSearchForm from '../../components/BasicRecipeSearchForm/BasicRecipeSearchForm';
import RecipeSearchDropdown, {
  recipeSearchOptions,
} from '../../components/RecipeSearchDropdown/RecipeSearchDropdown';
import SearchRecipeByNutritionForm from '../../components/SearchRecipeByNutritionForm/SearchRecipeByNutritionForm';

export enum SearchForm {
  BASIC_SEARCH = 'basic',
  SEARCH_BY_NUTRITION = 'nutrition',
}

const SearchRecipes: FC = () => {
  const [option, setOption] = useState(recipeSearchOptions[0]);
  const onSelect = (selectedOption: Option) => {
    setOption(selectedOption);
  };

  return (
    <>
      <RecipeSearchDropdown onSelect={onSelect} />
      {option.value === SearchForm.BASIC_SEARCH && <BasicRecipeSearchForm />}
      {option.value === SearchForm.SEARCH_BY_NUTRITION && <SearchRecipeByNutritionForm />}
    </>
  );
};

export default SearchRecipes;
