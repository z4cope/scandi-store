//Action type
import { TOGGLE_CART_ACTION } from "./toggleCartActionType";
import { TOGGLE_CURRENCY_MENU } from "./toggleCartActionType";

export const toggleCartAction = () => (dispatch) => {
  dispatch({
    type: TOGGLE_CART_ACTION,
  });
};

export const toggleCurrencyMenu = () => (dispatch) => {
  dispatch({
    type: TOGGLE_CURRENCY_MENU,
  });
};
