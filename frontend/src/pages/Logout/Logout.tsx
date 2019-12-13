import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/auth/action-creators';

const Logout: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  dispatch(logout(history.push));

  return null;
};

export default Logout;
