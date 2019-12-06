import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { Recipe } from '../../models/Recipe';
import BasicRecipe from '../BasicRecipe/BasicRecipe';
import './styles.scss';

export interface BasicRecipesProps {
  basicRecipes: Recipe[];
}

const BasicRecipes: FC<BasicRecipesProps> = ({ basicRecipes }) => {
  return (
    <section className="basicRecipesSection">
      <Row>
        {basicRecipes.map(recipe => (
          <Col key={recipe.id} xs={12} sm={4} md={4} lg={4}>
            <BasicRecipe recipe={recipe} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default BasicRecipes;
