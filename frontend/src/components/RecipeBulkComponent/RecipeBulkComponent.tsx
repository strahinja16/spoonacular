import React, { FC } from 'react';
import { RecipeBulk } from '../../models/RecipeBulk';

export interface RecipeBulkComponentProps {
  recipe: RecipeBulk;
}

const RecipeBulkComponent: FC<RecipeBulkComponentProps> = ({ recipe }) => {
  return <section>{recipe.id}</section>;
};

export default RecipeBulkComponent;
