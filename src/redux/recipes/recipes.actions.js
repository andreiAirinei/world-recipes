import { GET_LATEST_RECIPES } from '../types';

export const getLatestRecipes = () => async dispatch => {
  try {
    const res = await fetch('https://www.themealdb.com/api/json/v2/9973533/latest.php');
    const data = await res.json();

    dispatch({
      type: GET_LATEST_RECIPES,
      payload: data.meals
    });
  } catch (err) {
    console.log(err.response.statusText)
  }
}