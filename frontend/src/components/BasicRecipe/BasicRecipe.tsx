import { faClock, faHamburger, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useUserLikedRecipe } from '../../hooks/useUserLikedRecipe';
import { CreateProfileRecipeDto } from '../../models/Params/CreateProfileRecipeDto';
import { Recipe } from '../../models/Recipe';
import { SPOONACULAR_IMAGES_URL } from '../../services/Api/Axios/Constants';
import { createProfileRecipe } from '../../store/profile/action-creators';
import { AppState } from '../../store/reducer';
import './styles.scss';

export interface BasicRecipeProps {
  recipe: Recipe;
}

const BasicRecipe: FC<BasicRecipeProps> = ({ recipe }) => {
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
        image: `${SPOONACULAR_IMAGES_URL}${recipe.image}`,
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
    <section className="basicRecipeSection">
      <section className="infoSection">
        <img className="recipeImg" src={`${SPOONACULAR_IMAGES_URL}${recipe.image}`} />
        <div className="recipeInfo">
          <div className="recipeTitle">
            <div>{recipe.title}</div>
          </div>
          <Row className="row">
            <Col className="recipeFeature" xs={6} sm={6} md={6} lg={6}>
              <FontAwesomeIcon icon={faClock} />
              <span>{recipe.readyInMinutes} min</span>
            </Col>
            <Col className="recipeFeature" xs={6} sm={6} md={6} lg={6}>
              <FontAwesomeIcon icon={faHamburger} />
              <span> {recipe.servings} servings</span>
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

export default BasicRecipe;
