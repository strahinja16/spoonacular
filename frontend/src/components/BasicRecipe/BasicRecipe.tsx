import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Recipe } from '../../models/Recipe';
import './styles.scss';

export interface BasicRecipeProps {
  recipe: Recipe;
}

const BasicRecipe: FC<BasicRecipeProps> = ({ recipe }) => (
  <section className="basicRecipeSection">
    <img className="recipeImg" src={recipe.image} />
    <div className="recipeInfo">
      <div>{recipe.title}</div>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4}>
          {recipe.readyInMinutes} minutes
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          {recipe.servings} servings
        </Col>
      </Row>
    </div>
  </section>
);

export default BasicRecipe;
