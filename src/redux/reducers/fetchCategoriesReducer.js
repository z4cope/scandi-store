import { FETCH_CATEGORIS } from "../actions/fetchCategories/fetchCategoriesActionType";

const initState = {
  data: [],
  products: {},
};

const fetchCategoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIS:
      return {
        ...state,
        data: action.payload.originalData,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

export default fetchCategoriesReducer;
