import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const passwordHashSaltRounds = 10;

const decrypt = token => jwt.verify(token, 'appKey');

const encrypt = data => jwt.sign(data, 'appKey');

const hashPassword = password => bcrypt.hashSync(password, passwordHashSaltRounds);

const comparePasswords = (plainPass, encrypted) => bcrypt.compare(plainPass, encrypted);

export {
  decrypt,
  encrypt,
  comparePasswords,
  hashPassword,
};
