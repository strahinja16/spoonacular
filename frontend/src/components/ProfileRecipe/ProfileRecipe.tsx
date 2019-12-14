import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RecipeDto } from '../../models/RecipeDto';
import { removeProfileRecipeStart } from '../../store/profile/action-creators';
import { AppState } from '../../store/reducer';

export interface ProfileRecipeProps {
  recipe: RecipeDto;
}

const ProfileRecipe: FC<ProfileRecipeProps> = ({ recipe }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.auth.user);

  const onDetailedInfoClick = () => {
    history.push(`/recipe/${recipe.externalId}`);
  };

  const onRemoveFromFavorites = () => {
    dispatch(
      removeProfileRecipeStart({
        recipeId: recipe.id,
        // @ts-ignore
        userId: user.id,
      })
    );
  };

  return (
    <section className="profileRecipeSection">
      <img className="recipeImg" src={recipe.image} />
      <div className="recipeInfo">
        <div>{recipe.title}</div>
        <button onClick={onDetailedInfoClick}>Detailed preparation instructions</button>
        <button onClick={onRemoveFromFavorites}>Remove from favorites</button>
      </div>
    </section>
  );
};

export default ProfileRecipe;
