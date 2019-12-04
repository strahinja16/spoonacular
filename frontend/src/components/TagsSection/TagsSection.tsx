import React, { FC } from 'react';
import { RecipeBulk } from '../../models/RecipeBulk';
import './styles.scss';

export interface TagsSectionProps {
  recipe: RecipeBulk;
}

const TagsSection: FC<TagsSectionProps> = ({ recipe }) => {
  const tags = Object.keys(recipe).filter(key => {
    const el = (recipe as any)[key];
    return typeof(el) === 'boolean' && el;
  });

  return (
    <section className="tagsSection">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
    </section>
  );
};

export default TagsSection;
