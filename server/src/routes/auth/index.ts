
import { Router } from 'express';
import { createModels } from '../../../db/models';
import { Login, SignUp } from '../../requests/models/auth';
import { encrypt, comparePasswords, hashPassword } from '../../services/auth';

const db = createModels();
const router = Router();

const responseWrongPass = res => res.status(400).send({ message: 'Invalid email/password.' });
const responseUserExists = res => res.status(400).send({ message: 'User already exists.' });

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body as Login;

    const user = await db.User.findOne({
      where: { email },
      raw: true,
    });

    if (!user) {
      return responseWrongPass(res);
    }
    if (!(await comparePasswords(password, user.password))) {
      return responseWrongPass(res);
    }

    delete user.password;
    const userToken = encrypt(user);

    return res.status(200).send({
      user,
      token: userToken,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: 'Something went wrong.',
    });
  }
});

router.post('/sign-up', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body as SignUp;

    const userExists = await db.User.findOne({
      where: { email },
      raw: true,
    });

    if (userExists) {
      return responseUserExists(res);
    }

    await db.User.create({
      email,
      firstName,
      lastName,
      password: hashPassword(password),
    });

    return res.send();
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: 'Something went wrong.',
    });
  }
});

export default {
  routes: router,
  path: '/auth'
};
