import React, { FC, useCallback, useState } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { useHistory } from 'react-router-dom';
import { RecipeSearchByNutrientParams } from '../../models/Params/RecipeSearchByNutrientParams';
import { RecipeSearchType } from '../../models/RecipeSearchType';
import spoonacularService from '../../services/Api/SpoonacularService';
import './styles.scss';

// tslint:disable-next-line:no-empty-interface
export interface SearchRecipeByNutritionFormProps {}

const SearchRecipeByNutritionForm: FC<SearchRecipeByNutritionFormProps> = () => {
  const history = useHistory();
  const [error, setError] = useState('');
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

  const validateForm = (): boolean => {
    Object.values(inputValues).forEach(val => !isNaN(Number(val)));

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

  const handleSuccess = () => {
    const payload: any = {};

    // eslint-disable-next-line array-callback-return
    Object.keys(inputValues).map(key => {
      payload[key] = Number((inputValues as any)[key]);
    });

    history.push({
      pathname: '/queried-recipes',
      state: { inputValues, searchType: RecipeSearchType.BY_NUTRITION },
    });
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
                  type="text"
                  placeholder="100"
                  name="minCalories"
                  value={inputValues.minCalories}
                />
              </div>
              <div>
                <label htmlFor="maxCalories">Maximum calories</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="500"
                  name="maxCalories"
                  value={inputValues.maxCalories}
                />
              </div>
              <div>
                <label htmlFor="minProtein">Minimum protein</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="20"
                  name="minProtein"
                  value={inputValues.minProtein}
                />
              </div>
              <div>
                <label htmlFor="maxProtein">Maximum protein</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="120"
                  name="maxProtein"
                  value={inputValues.maxProtein}
                />
              </div>
              <div>
                <label htmlFor="minCarbs">Minimum carbs</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="30"
                  name="minCarbs"
                  value={inputValues.minCarbs}
                />
              </div>
              <div>
                <label htmlFor="maxCarbs">Maximum carbs</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="50"
                  name="maxCarbs"
                  value={inputValues.maxCarbs}
                />
              </div>
              <div>
                <label htmlFor="minFat">Minimum fat</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="5"
                  name="minFat"
                  value={inputValues.minFat}
                />
              </div>
              <div>
                <label htmlFor="maxFat">Maximum fat</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  placeholder="15"
                  name="maxFat"
                  value={inputValues.maxFat}
                />
              </div>
              <button type="submit" onSubmit={handleSubmit} name="button">
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
