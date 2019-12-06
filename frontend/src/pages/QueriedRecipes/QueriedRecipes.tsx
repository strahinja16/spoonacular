import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import BasicRecipes from '../../components/BasicRecipes/BasicRecipes';
import NutritionRecipes from '../../components/NutritionRecipes/NutritionRecipes';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import { AppState } from '../../store/reducer';

const QueriedRecipes: FC = () => {
  const searchType = useSelector((state: AppState) => state.search.searchType);
  const basicRecipes = useSelector((state: AppState) => state.search.basicRecipes);
  const nutritionRecipes = useSelector((state: AppState) => state.search.nutritionRecipes);

  return searchType === RecipeSearchType.BASIC ? (
    <BasicRecipes basicRecipes={basicRecipes} />
  ) : (
    <NutritionRecipes nutritionRecipes={nutritionRecipes} />
  );
};

export default QueriedRecipes;
