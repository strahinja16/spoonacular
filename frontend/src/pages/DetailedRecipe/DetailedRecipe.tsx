import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import RecipeAnalyzedInstructions from '../../components/RecipeAnalyzedInstructions/RecipeAnalyzedInstructions';
import RecipeBulkCard from '../../components/RecipeBulkCard/RecipeBulkCard';
import { useFetching } from '../../hooks/useFetching';
import { getDetailedRecipe } from '../../store/detailedRecipe/action-creators';
import { AppState } from '../../store/reducer';
import './styles.scss';

const DetailedRecipe = () => {
  const { params } = useRouteMatch();
  useFetching(getDetailedRecipe, params.id);

  const detailedRecipe = useSelector((state: AppState) => state.detailedRecipe.detailedRecipe);
  const error = useSelector((state: AppState) => state.detailedRecipe.error);

  if (error) {
    return <div>{error}</div>;
  }

  if (detailedRecipe) {
    return (
      <section className="detailedRecipeSection">
        <RecipeBulkCard recipe={detailedRecipe} />
        <RecipeAnalyzedInstructions analyzedInstructions={detailedRecipe.analyzedInstructions} />
      </section>
    );
  }

  return null;
};

export default DetailedRecipe;
