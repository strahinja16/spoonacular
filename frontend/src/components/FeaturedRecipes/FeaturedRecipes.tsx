import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { RecipeBulk } from '../../models/RecipeBulk';
import RecipeBulkComponent from '../RecipeBulkComponent/RecipeBulkComponent';
import './styles.scss';

export interface FeaturedRecipesProps {
  featuredRecipes: RecipeBulk[];
}

const FeaturedRecipes: FC<FeaturedRecipesProps> = ({ featuredRecipes }) => {
  return (
    <section className="featuredRecipesSection">
      <Row>
        {featuredRecipes.map(recipe => (
          <Col key={recipe.id} xs={12} sm={4} md={4} lg={4}>
            <RecipeBulkComponent recipe={recipe} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default FeaturedRecipes;
