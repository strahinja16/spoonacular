import * as React from 'react';
import Loader from 'react-loader-spinner';
import './styles.scss';

const Loading = () => (
  <div className="loader">
    <Loader type="Oval" color="#00b906" height={100} width={100} timeout={3000} />
  </div>
);

export default Loading;
