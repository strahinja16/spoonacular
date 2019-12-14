import {
  faBacon,
  faBreadSlice,
  faDrumstickBite,
  faThumbsUp,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useUserLikedRecipe } from '../../hooks/useUserLikedRecipe';
import { CreateProfileRecipeDto } from '../../models/Params/CreateProfileRecipeDto';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
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
      <section className="infoSection">
        <img className="recipeImg" src={recipe.image} />
        <div className="recipeInfo">
          <div className="recipeTitle">
            <div>{recipe.title}</div>
          </div>
          <Row className="row">
            <Col className="recipeFeature" xs={3} sm={3} md={3} lg={3}>
              <FontAwesomeIcon icon={faUtensils} />
              <span>{recipe.calories} kcal</span>
            </Col>
            <Col className="recipeFeature" xs={3} sm={3} md={3} lg={3}>
              <FontAwesomeIcon icon={faDrumstickBite} />
              <span> {recipe.protein} p</span>
            </Col>
            <Col className="recipeFeature" xs={3} sm={3} md={3} lg={3}>
              <FontAwesomeIcon icon={faBreadSlice} />
              <span>{recipe.carbs} c</span>
            </Col>
            <Col className="recipeFeature" xs={3} sm={3} md={3} lg={3}>
              <FontAwesomeIcon icon={faBacon} />
              <span> {recipe.fat} f</span>
            </Col>
          </Row>
        </div>
      </section>
      <button onClick={onDetailedPreparationClick} className="instructions">
        Detailed preparation instructions
      </button>
      {!userLikedRecipe && (
        <div onClick={onLikeRecipe} className="likeRecipe">
          <FontAwesomeIcon icon={faThumbsUp} className="likeThumbs" />
        </div>
      )}
    </section>
  );
};

export default NutritionRecipe;
