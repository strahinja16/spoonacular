import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import BasicRecipes from '../../components/BasicRecipes/BasicRecipes';
import Loading from '../../components/Loading/Loading';
import NutritionRecipes from '../../components/NutritionRecipes/NutritionRecipes';
import { useFetching } from '../../hooks/useFetching';
import { RecipeSearchByNutrientParams } from '../../models/Params/RecipeSearchByNutrientParams';
import { RecipeSearchParams } from '../../models/Params/RecipeSearchParams';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import { getQueryRecipes } from '../../store/queryRecipes/action-creators';
import { AppState } from '../../store/reducer';

export interface QueryRecipesLocationState {
  inputValues: RecipeSearchParams | RecipeSearchByNutrientParams;
  searchType: RecipeSearchType;
}

const QueriedRecipes: FC = () => {
  const location = useLocation();
  useFetching(getQueryRecipes, location.state);
  const searchType = useSelector((state: AppState) => state.query.searchType);
  const basicRecipes = useSelector((state: AppState) => state.query.basicRecipes);
  const nutritionRecipes = useSelector((state: AppState) => state.query.nutritionRecipes);

  if (basicRecipes.length === 0 && nutritionRecipes.length === 0) {
    return <Loading />;
  }
  return searchType === RecipeSearchType.BASIC ? (
    <BasicRecipes basicRecipes={basicRecipes} />
  ) : (
    <NutritionRecipes nutritionRecipes={nutritionRecipes} />
  );
};

export default QueriedRecipes;
