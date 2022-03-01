import { Reducer } from "redux";
import produce from "immer";
import { ActionType, ICartState } from "./types";

const INIITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

export const cart: Reducer<ICartState> = (state = INIITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionType.addProductToCartSucces: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        break;
      }

      case ActionType.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
