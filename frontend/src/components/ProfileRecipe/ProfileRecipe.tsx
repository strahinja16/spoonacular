import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipeDto } from '../../models/RecipeDto';

export interface ProfileRecipeProps {
  recipe: RecipeDto;
}

const ProfileRecipe: FC<ProfileRecipeProps> = ({ recipe }) => {
  const history = useHistory();

  const onDetailedInfoClick = () => {
    history.push(`/recipe/${recipe.externalId}`);
  };

  return (
    <section className="profileRecipeSection">
      <img className="recipeImg" src={recipe.image} />
      <div className="recipeInfo">
        <div>{recipe.title}</div>
        <button onClick={onDetailedInfoClick}>Detailed info</button>
      </div>
    </section>
  );
};

export default ProfileRecipe;
