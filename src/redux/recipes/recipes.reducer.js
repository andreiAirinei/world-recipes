import { GET_LATEST_RECIPES } from '../types';

const INITIAL_STATE = {
  latestRecipes: null
}

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LATEST_RECIPES:
      return {
        ...state,
        latestRecipes: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default recipesReducer;