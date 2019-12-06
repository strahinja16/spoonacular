import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
import './styles.scss';

export interface NutritionRecipeProps {
  recipe: RecipeByNutrient;
}

const NutritionRecipe: FC<NutritionRecipeProps> = ({ recipe }) => (
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
    </div>
  </section>
);

export default NutritionRecipe;
