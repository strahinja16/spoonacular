import React, { FC, useCallback, useState } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import useReactRouter from 'use-react-router';
import spoonacularService from '../../services/Api/SpoonacularService';
import './styles.scss';

// tslint:disable-next-line:no-empty-interface
export interface BasicRecipeSearchFormProps {}

const BasicRecipeSearchForm: FC<BasicRecipeSearchFormProps> = () => {
  const {
    history: { push },
  } = useReactRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    diet: '',
    excludeIngredients: '',
    intolerances: '',
    query: '',
  });

  const handleOnChange = useCallback(
    event => {
      const { name, value } = event.target;

      setInputValues({ ...inputValues, [name]: value });
    },
    [inputValues]
  );

  const validateForm = (): boolean => {
    return inputValues.query !== '';
  };

  const handleSuccess = () => {
    setLoading(true);

    spoonacularService
      .searchRecipe(inputValues)
      .then(() => {
        setLoading(false);
        push('/');
      })
      .catch((e: any) => {
        setLoading(false);
        setError(e.toString());
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      handleSuccess();
    } else {
      setError('Search query missing');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  return (
    <section className="basicRecipeSearchFormSection">
      <div className="container">
        <Row center="xs">
          <Col xs={12} sm={12} md={12} lg={12}>
            <form onSubmit={handleSubmit}>
              <div className={error ? 'message' : 'hidden'}>{error}</div>
              <div>
                <label htmlFor="query">Search term</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Search term"
                  name="query"
                  value={inputValues.query}
                />
              </div>
              <div>
                <label htmlFor="diet">Diet</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="vegetarian, vegan"
                  name="diet"
                  value={inputValues.diet}
                />
              </div>
              <div>
                <label htmlFor="excludeIngredients">Excluded ingredients</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="coconut, peach"
                  name="excludeIngredients"
                  value={inputValues.excludeIngredients}
                />
              </div>
              <div>
                <label htmlFor="intolerances">Intolerances</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="egg, gluten"
                  name="intolerances"
                  value={inputValues.intolerances}
                />
              </div>
              <button disabled={loading} type="submit" onSubmit={handleSubmit} name="button">
                Search
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default BasicRecipeSearchForm;
