import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Action, ActionCreator } from 'redux';

export const useFetching = (someFetchActionCreator: ActionCreator<Action>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(someFetchActionCreator());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
