import React, { FC } from 'react';
import { InstructionStep } from '../../models/RecipeBulk';
import './styles.scss';

export interface AnalyzedInstructionStepProps {
  step: InstructionStep;
}

const AnalyzedInstructionStep: FC<AnalyzedInstructionStepProps> = ({ step }) => (
  <section className="analyzedInstructionStepSection">
    <div className="step">{step.number}. step</div>
    <div className="ingredient">
      <span className="bold">Ingredients: </span>
      {step.ingredients.map((ingredient, index, array) => {
        return index < array.length - 1 ? (
          <span>{`${ingredient.name}, `}</span>
        ) : (
          <span>{ingredient.name}</span>
        );
      })}
    </div>
    <div className="preparation">
      <span className="bold">Preparation: </span>
      {step.step}
    </div>
  </section>
);

export default AnalyzedInstructionStep;
