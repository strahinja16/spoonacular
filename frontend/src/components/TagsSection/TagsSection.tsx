import React, { FC } from 'react';
import { RecipeBulk } from '../../models/RecipeBulk';
import './styles.scss';

export interface TagsSectionProps {
  recipe: RecipeBulk;
}

const TagsSection: FC<TagsSectionProps> = ({ recipe }) => {
  const tags = Object.keys(recipe)
    .filter(key => {
      const el = (recipe as any)[key];
      return typeof el === 'boolean' && el;
    })
    .map(tag => tag.split(/(?=[A-Z])/).map(t => `${t.toLowerCase()} `));

  return (
    <section className="tagsSection">
      {tags.map(tag => (
        <span key={tag[0]} className="tag">
          {tag.map(tagWord => (
            <span key={tagWord}>{tagWord}</span>
          ))}
        </span>
      ))}
    </section>
  );
};

export default TagsSection;
