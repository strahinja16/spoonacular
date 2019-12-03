import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import FeaturedRecipes from '../../components/FeaturedRecipes/FeaturedRecipes';
import Loading from '../../components/Loading/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getFeaturedRecipes } from '../../store/featuredRecipes/action-creators';
import { AppState } from '../../store/reducer';

const Featured: FC = () => {
  useFetching(getFeaturedRecipes);
  const featuredRecipes = useSelector((state: AppState) => state.featured.featuredRecipes);

  return featuredRecipes.length === 0 ? (
    <Loading />
  ) : (
    <FeaturedRecipes featuredRecipes={featuredRecipes} />
  );
};

export default Featured;
