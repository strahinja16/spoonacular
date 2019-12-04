import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { RecipeBulk } from '../../models/RecipeBulk';
import TagsSection from '../TagsSection/TagsSection';
import './styles.scss';

export interface RecipeBulkCardProps {
  recipe: RecipeBulk;
}

const RecipeBulkCard: FC<RecipeBulkCardProps> = ({ recipe }) => (
  <section className="recipeBulkCardSection">
    <img className="recipeImg" src={recipe.image} />
    <div className="recipeInfo">
      <div>{recipe.title}</div>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4}>{recipe.readyInMinutes} minutes</Col>
        <Col xs={4} sm={4} md={4} lg={4}>{recipe.servings} servings</Col>
        <Col xs={4} sm={4} md={4} lg={4}>${recipe.pricePerServing} per serving</Col>
      </Row>
    </div>
    <div className="recipeTags">
      <TagsSection recipe={recipe}/>
    </div>
  </section>
);

export default RecipeBulkCard;