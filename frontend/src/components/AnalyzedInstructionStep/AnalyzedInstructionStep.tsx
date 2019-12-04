import React, { FC } from 'react';
import { InstructionStep } from '../../models/RecipeBulk';
import './styles.scss';
import { Row } from 'react-flexbox-grid';

export interface AnalyzedInstructionStepProps {
  step: InstructionStep;
}

const AnalyzedInstructionStep: FC<AnalyzedInstructionStepProps> = ({ step }) => (
    <section className="analyzedInstructionStepSection">
      <Row>{step.number}</Row>
      <Row>{step.step}</Row>
    </section>
);

export default AnalyzedInstructionStep;