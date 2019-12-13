const { decrypt } = require('../services/auth');

export default async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).send({
      message: 'Auth token required',
    });
  }

  try {
    request.user = decrypt(authorization);
    return next();
  } catch (exception) {
    return response.status(401).send({
      message: 'Auth token invalid',
    });
  }
};
