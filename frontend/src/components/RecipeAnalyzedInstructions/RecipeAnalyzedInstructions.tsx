import React, { FC } from 'react';
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
    <div className="analyzedInstructionStepSection">
      <div className="headline">Preparation instructions:</div>
      {analyzedInstructions.map(({ steps }) => {
        return (
          <>
            {steps.map(step => (
              <AnalyzedInstructionStep key={step.number} step={step} />
            ))}
          </>
        );
      })}
    </div>
  );
};

export default RecipeAnalyzedInstructions;
