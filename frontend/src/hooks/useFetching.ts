import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Action, ActionCreator } from 'redux';

export const useFetching = (fetchActionCreator: ActionCreator<Action>, param?: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    param ? dispatch(fetchActionCreator(param)) : dispatch(fetchActionCreator());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
