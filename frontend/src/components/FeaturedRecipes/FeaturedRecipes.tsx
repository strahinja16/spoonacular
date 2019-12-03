import React, { FC } from 'react';
import { RecipeBulk } from '../../models/RecipeBulk';
import RecipeBulkComponent from '../RecipeBulkComponent/RecipeBulkComponent';

export interface FeaturedRecipesProps {
  featuredRecipes: RecipeBulk[];
}

const FeaturedRecipes: FC<FeaturedRecipesProps> = ({ featuredRecipes }) => {
  return (
    <section>
      {featuredRecipes.map(recipe => (
        <RecipeBulkComponent key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};

export default FeaturedRecipes;
