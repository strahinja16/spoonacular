import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useUserLikedRecipe } from '../../hooks/useUserLikedRecipe';
import { CreateProfileRecipeDto } from '../../models/Params/CreateProfileRecipeDto';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
import { RecipeDto } from '../../models/RecipeDto';
import { createProfileRecipe } from '../../store/profile/action-creators';
import { AppState } from '../../store/reducer';
import './styles.scss';

export interface NutritionRecipeProps {
  recipe: RecipeByNutrient;
}

const NutritionRecipe: FC<NutritionRecipeProps> = ({ recipe }) => {
  const history = useHistory();
  const dispatch = useDispatch();
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
    <section className="nutritionRecipeSection">
      <img className="recipeImg" src={recipe.image} />
      <div className="recipeInfo">
        <div>{recipe.title}</div>
        <Row>
          <Col xs={4} sm={4} md={4} lg={4}>
            {recipe.calories} calories
          </Col>
          <Col xs={4} sm={4} md={4} lg={4}>
            {recipe.carbs} carbs
          </Col>
        </Row>
        <button onClick={onDetailedPreparationClick} className="instructions">
          Detailed preparation instructions
        </button>
        {userLikedRecipe || (
          <button onClick={onLikeRecipe} className="likeRecipe">
            Like
          </button>
        )}
      </div>
    </section>
  );
};

export default NutritionRecipe;
