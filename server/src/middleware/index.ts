
import auth from './auth';

const mapping = {
  auth,
};

export default (middleware) => {
  if (mapping[middleware]) {
    return mapping[middleware];
  }

  return (req, res, next) => next();
};
