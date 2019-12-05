import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useSelector } from 'react-redux';
import useReactRouter from 'use-react-router';
import RecipeAnalyzedInstructions from '../../components/RecipeAnalyzedInstructions/RecipeAnalyzedInstructions';
import RecipeBulkCard from '../../components/RecipeBulkCard/RecipeBulkCard';
import { useFetching } from '../../hooks/useFetching';
import { getDetailedRecipe } from '../../store/detailedRecipe/action-creators';
import { AppState } from '../../store/reducer';

const DetailedRecipe = () => {
  const {
    match: {
      params: { id },
    },
  } = useReactRouter();
  useFetching(getDetailedRecipe, id);

  const detailedRecipe = useSelector((state: AppState) => state.detailedRecipe.detailedRecipe);
  const error = useSelector((state: AppState) => state.detailedRecipe.error);

  if (error) {
    return <div>{error}</div>;
  }

  if (detailedRecipe) {
    return (
      <section>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <RecipeBulkCard recipe={detailedRecipe} />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <RecipeAnalyzedInstructions
              analyzedInstructions={detailedRecipe.analyzedInstructions}
            />
          </Col>
        </Row>
      </section>
    );
  }

  return null;
};

export default DetailedRecipe;
