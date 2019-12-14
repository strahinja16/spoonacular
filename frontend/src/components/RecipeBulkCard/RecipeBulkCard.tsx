// @ts-ignore
import { faClock, faHamburger, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <div className="recipeTitle">
        <div>{recipe.title}</div>
      </div>
      <Row className="row">
        <Col className="recipeFeature" xs={4} sm={4} md={4} lg={4}>
          <FontAwesomeIcon icon={faClock} />
          <span>{recipe.readyInMinutes} min</span>
        </Col>
        <Col className="recipeFeature" xs={4} sm={4} md={4} lg={4}>
          <FontAwesomeIcon icon={faHamburger} />
          <span> {recipe.servings} servings</span>
        </Col>
        <Col className="recipeFeature" xs={4} sm={4} md={4} lg={4}>
          <FontAwesomeIcon icon={faMoneyBill} />
          <span> ${recipe.pricePerServing}</span>
        </Col>
      </Row>
    </div>
    <TagsSection recipe={recipe} />
  </section>
);

export default RecipeBulkCard;
