import * as jwt from 'jsonwebtoken';
import * as passwordHash from 'password-hash';

const decrypt = token => jwt.verify(token, 'appKey');

const encrypt = data => jwt.sign(data, 'appKey');

const hashPassword = password => passwordHash.generate(password);

const comparePasswords = (plainPass, encrypted) => passwordHash.verify(plainPass, encrypted);

export {
  decrypt,
  encrypt,
  comparePasswords,
  hashPassword,
};
