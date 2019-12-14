import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RecipeDto } from '../../models/RecipeDto';
import { removeProfileRecipeStart } from '../../store/profile/action-creators';
import { AppState } from '../../store/reducer';
import './styles.scss';

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
      <section className="infoSection">
        <img className="recipeImg" src={recipe.image} />
        <div className="recipeInfo">
          <div className="recipeTitle">
            <div>{recipe.title}</div>
          </div>
        </div>
      </section>
      <button className="instructions" onClick={onDetailedInfoClick}>
        Detailed preparation instructions
      </button>
      <div onClick={onRemoveFromFavorites} className="likeRecipe">
        <FontAwesomeIcon icon={faThumbsDown} className="likeThumbs" />
      </div>
    </section>
  );
};

export default ProfileRecipe;
