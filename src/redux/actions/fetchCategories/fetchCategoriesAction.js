import { FETCH_CATEGORIS } from "./fetchCategoriesActionType";
import { client } from "../../../server/apollo";
import { getCategories } from "../../../server/queries/getCategoris";

export const fetchCategoriesAction = () => async (dispatch, getState) => {
  const state = getState().categories;
  if (state.data.length) {
    return;
  }

  const { data: readOnlyData } = await client.query({ query: getCategories });

  const data = JSON.parse(JSON.stringify(readOnlyData));

  const productsObject = {};
  for (let category of data.categories) {
    for (let product of category.products) {
      productsObject[product.id] = product;
    }
  }

  dispatch({
    type: FETCH_CATEGORIS,
    payload: { originalData: data.categories, products: productsObject },
  });
};
