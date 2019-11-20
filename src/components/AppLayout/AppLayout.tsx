import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';

interface Props {
  location: {
    pathname: string;
  };
}

// @ts-ignore
const AppLayout: FC<Props> = ({ children, location }) => {
  return (
    <div>
      <Header activeItem={location.pathname} />
      <main>{children}</main>
    </div>
  );
};

// @ts-ignore
export default withRouter(AppLayout);
