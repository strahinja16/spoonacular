import React, { FC } from 'react';
import { Row } from 'react-flexbox-grid';
import { AnalyzedInstruction } from '../../models/RecipeBulk';
import AnalyzedInstructionStep from '../AnalyzedInstructionStep/AnalyzedInstructionStep';
import './styles.scss';

export interface RecipeDetailedPreparationProps {
  analyzedInstructions: AnalyzedInstruction[];
}

const RecipeAnalyzedInstructions: FC<RecipeDetailedPreparationProps> = ({
  analyzedInstructions,
}) => {
  return (
    <section className="recipeDetailedPreparationSection">
      {analyzedInstructions.map(({ name, steps }) => {
        return (
          <section key={name}>
            <Row>{name}</Row>
            {steps.map(step => (
              <AnalyzedInstructionStep key={step.number} step={step} />
            ))}
          </section>
        );
      })}
    </section>
  );
};

export default RecipeAnalyzedInstructions;
