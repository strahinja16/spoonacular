import React, { FC, useCallback, useState } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import useReactRouter from 'use-react-router';
import { RecipeSearchByNutrientParams } from '../../models/Params/RecipeSearchByNutrientParams';
import spoonacularService from '../../services/Api/SpoonacularService';
import './styles.scss';

// tslint:disable-next-line:no-empty-interface
export interface SearchRecipeByNutritionFormProps {}

const SearchRecipeByNutritionForm: FC<SearchRecipeByNutritionFormProps> = () => {
  const {
    history: { push },
  } = useReactRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    maxCalories: '',
    maxCarbs: '',
    maxFat: '',
    maxProtein: '',
    minCalories: '',
    minCarbs: '',
    minFat: '',
    minProtein: '',
  });

  const handleOnChange = useCallback(
    event => {
      const { name, value } = event.target;

      setInputValues({ ...inputValues, [name]: value });
    },
    [inputValues]
  );

  const handleSuccess = () => {
    setLoading(true);
    const payload: any = {};

    // eslint-disable-next-line array-callback-return
    Object.keys(inputValues).map(key => {
      payload[key] = Number((inputValues as any)[key]);
    });

    spoonacularService
      .searchRecipeByNutrient(payload as RecipeSearchByNutrientParams)
      .then(() => {
        setLoading(false);
        push('/');
      })
      .catch((e: any) => {
        setLoading(false);
        setError(e.toString());
      });
  };

  const validateForm = (): boolean => {
    return (
      Number(inputValues.minFat) <= Number(inputValues.maxFat) &&
      Number(inputValues.minCarbs) <= Number(inputValues.maxCarbs) &&
      Number(inputValues.minProtein) <= Number(inputValues.maxProtein) &&
      Number(inputValues.minCalories) <= Number(inputValues.maxCalories)
    );
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      handleSuccess();
    } else {
      setError('Invalid input.');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  return (
    <section className="searchRecipeByNutritionFormSection">
      <div className="container">
        <Row center="xs">
          <Col xs={12} sm={12} md={12} lg={12}>
            <form onSubmit={handleSubmit}>
              <div className={error ? 'message' : 'hidden'}>{error}</div>
              <div>
                <label htmlFor="minCalories">Minimum calories</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  placeholder="250"
                  name="minCalories"
                  value={inputValues.minCalories}
                />
              </div>
              <div>
                <label htmlFor="maxCalories">Maximum calories</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  placeholder="250"
                  name="maxCalories"
                  value={inputValues.maxCalories}
                />
              </div>
              <div>
                <label htmlFor="minProtein">Minimum protein</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  placeholder="250"
                  name="minProtein"
                  value={inputValues.minProtein}
                />
              </div>
              <div>
                <label htmlFor="maxProtein">Maximum protein</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  placeholder="250"
                  name="maxProtein"
                  value={inputValues.maxProtein}
                />
              </div>
              <div>
                <label htmlFor="minCarbs">Minimum carbs</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  placeholder="250"
                  name="minCarbs"
                  value={inputValues.minCarbs}
                />
              </div>
              <div>
                <label htmlFor="maxCarbs">Maximum carbs</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  placeholder="250"
                  name="maxCarbs"
                  value={inputValues.maxCarbs}
                />
              </div>
              <div>
                <label htmlFor="minFat">Minimum fat</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  placeholder="250"
                  name="minFat"
                  value={inputValues.minFat}
                />
              </div>
              <div>
                <label htmlFor="maxFat">Maximum fat</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  placeholder="250"
                  name="maxFat"
                  value={inputValues.maxFat}
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

export default SearchRecipeByNutritionForm;
