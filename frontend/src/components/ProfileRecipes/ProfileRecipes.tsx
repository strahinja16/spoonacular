import React, { FC } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { RecipeDto } from '../../models/RecipeDto';
import ProfileRecipe from '../ProfileRecipe/ProfileRecipe';

export interface ProfileRecipesProps {
  profileRecipes: RecipeDto[];
}

const ProfileRecipes: FC<ProfileRecipesProps> = ({ profileRecipes }) => {
  return (
    <section className="profileRecipesSection">
      <Row>
        {profileRecipes.map((recipe: RecipeDto) => (
          <Col key={recipe.id} xs={12} sm={4} md={4} lg={4}>
            <ProfileRecipe recipe={recipe} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProfileRecipes;
