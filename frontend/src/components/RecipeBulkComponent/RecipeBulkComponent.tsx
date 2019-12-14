import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useUserLikedRecipe } from '../../hooks/useUserLikedRecipe';
import { CreateProfileRecipeDto } from '../../models/Params/CreateProfileRecipeDto';
import { RecipeBulk } from '../../models/RecipeBulk';
import { SPOONACULAR_IMAGES_URL } from '../../services/Api/Axios/Constants';
import { createProfileRecipe } from '../../store/profile/action-creators';
import { AppState } from '../../store/reducer';
import Loading from '../Loading/Loading';
import RecipeBulkCard from '../RecipeBulkCard/RecipeBulkCard';
import './styles.scss';

export interface RecipeBulkComponentProps {
  recipe: RecipeBulk;
}

const RecipeBulkComponent: FC<RecipeBulkComponentProps> = ({ recipe }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLoggedIn = !!useSelector((state: AppState) => state.auth.token);
  const userLikedRecipe = useUserLikedRecipe(recipe.id.toString());
  const user = useSelector((state: AppState) => state.auth.user);

  const onDetailedPreparationClick = () => {
    history.push(`/recipe/${recipe.id}`);
  };

  const onLikeRecipe = () => {
    const payload = {
      recipe: {
        externalId: recipe.id.toString(),
        image: recipe.image,
        title: recipe.title,
        // @ts-ignore
        // tslint:disable-next-line:object-literal-sort-keys
        UserId: user.id,
      },
      // @ts-ignore
      userId: user.id,
    } as CreateProfileRecipeDto;

    dispatch(createProfileRecipe(payload));
  };

  return (
    <section className="recipeBulkSection">
      <RecipeBulkCard recipe={recipe} />
      {userLoggedIn && (
        <button onClick={onDetailedPreparationClick} className="instructions">
          Detailed preparation instructions
        </button>
      )}
      {userLoggedIn && !userLikedRecipe && (
        <button onClick={onLikeRecipe} className="likeRecipe">
          Like
        </button>
      )}
    </section>
  );
};

export default RecipeBulkComponent;
