import React, { FC } from 'react';
import { Row } from 'react-flexbox-grid';
import { InstructionStep } from '../../models/RecipeBulk';
import './styles.scss';

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
