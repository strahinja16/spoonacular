import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { RecipeByNutrient } from '../../models/RecipeByNutrient';
import NutritionRecipe from '../NutritionRecipe/NutritionRecipe';
import './styles.scss';

export interface NutritionRecipesProps {
  nutritionRecipes: RecipeByNutrient[];
}

const NutritionRecipes: FC<NutritionRecipesProps> = ({ nutritionRecipes }) => {
  return (
    <section className="nutritionRecipesSection">
      <Row>
        {nutritionRecipes.map(recipe => (
          <Col key={recipe.id} xs={12} sm={4} md={4} lg={4}>
            <NutritionRecipe recipe={recipe} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default NutritionRecipes;
