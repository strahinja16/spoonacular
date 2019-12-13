import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import ProfileRecipes from '../../components/ProfileRecipes/ProfileRecipes';
import { useFetching } from '../../hooks/useFetching';
import { getProfileRecipes } from '../../store/profile/action-creators';
import { AppState } from '../../store/reducer';

const Profile: FC = () => {
  const user = useSelector((state: AppState) => state.auth.user);
  useFetching(getProfileRecipes, user ? user.id : '0');
  const profileRecipes = useSelector((state: AppState) => state.profile.recipes);

  return profileRecipes.length === 0 ? (
    <Loading />
  ) : (
    <ProfileRecipes profileRecipes={profileRecipes} />
  );
};

export default Profile;
