// @ts-ignore
import Joi from 'joi-browser';
import React, { useCallback, useState } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signUpUserStart } from '../../store/auth/action-creators';
import './styles.scss';

const SignUpForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [inputValues, setInputValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const handleOnChange = useCallback(
    event => {
      const { name, value } = event.target;

      setInputValues({ ...inputValues, [name]: value });
    },
    [inputValues]
  );

  const validateForm = () => {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required()
        .error(new Error('Invalid email format.')),
      firstName: Joi.string()
        .required()
        .error(new Error('First name is required.')),
      lastName: Joi.string()
        .required()
        .error(new Error('Last name is required.')),
      password: Joi.string()
        .required()
        .error(new Error('Password is required.')),
    });

    const result = Joi.validate(
      {
        email: inputValues.email,
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        password: inputValues.password,
      },
      schema
    );

    if (result.error && result.error.message) {
      setError(result.error.message);
      setTimeout(() => {
        setError('');
      }, 3000);
    }
    return !result.error;
  };

  const handleSuccess = () => {
    dispatch(signUpUserStart({ ...inputValues, push: history.push }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      handleSuccess();
    }
  };

  return (
    <section className="signUpSection">
      <div className="container">
        <Row center="xs">
          <Col xs={12} sm={12} md={12} lg={12}>
            <h2>
              <span className="primaryText">Sign</span>Up
            </h2>
            <form onSubmit={handleSubmit}>
              <div className={'validationError' ? 'errorMessage' : 'hidden'}>{error}</div>
              <div>
                <label htmlFor="firstName">First name</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={inputValues.firstName}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last name</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={inputValues.lastName}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleOnChange}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={inputValues.email}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleOnChange}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={inputValues.password}
                />
              </div>
              <button className="signUpButton" type="submit" onSubmit={handleSubmit} name="button">
                Sign up
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SignUpForm;
