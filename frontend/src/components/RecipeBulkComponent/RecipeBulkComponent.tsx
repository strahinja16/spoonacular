import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { RecipeBulk } from '../../models/RecipeBulk';
import RecipeBulkCard from '../RecipeBulkCard/RecipeBulkCard';
import './styles.scss';

export interface RecipeBulkComponentProps {
  recipe: RecipeBulk;
}

const RecipeBulkComponent: FC<RecipeBulkComponentProps> = ({ recipe }) => {
  const history = useHistory();

  const onDetailedPreparationClick = () => {
    history.push(`/recipe/${recipe.id}`);
  };

  return (
    <section className="recipeBulkSection">
      <RecipeBulkCard recipe={recipe} />
      <button onClick={onDetailedPreparationClick} className="instructions">
        Detailed preparation instructions
      </button>
    </section>
  );
};

export default RecipeBulkComponent;
