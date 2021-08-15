import * as types from "./ActionTypes";

export default function reducer(state, action) {
  var item = state.cart.find((elem) => elem.product._id === action.product._id);
  
  switch(action.type) {
    case types.ADD_TO_CART:
      var arr = [...state.cart, { product: action.product, qty: 1 }];

      if (item) {
        arr = state.cart.map((elem) => {
          if (elem.product._id === action.product._id) {
            return { ...elem, qty: item.qty + 1 }
          }
          return elem;
        });
      }
      return {
        cart: arr
      };

    case types.INCREASE_QTY:
      return {
        cart: state.cart.map((elem) => {
          if (elem.product._id === action.product._id) return { ...elem, qty: elem.qty + 1 };
          return elem;
        })
      }
      
    case types.DECREASE_QTY:
      return {
        cart: state.cart.map((elem) => {
          if (elem.product._id === action.product._id) {
            return {
              ...elem, 
              qty: elem.qty > 0 ? elem.qty - 1 : elem.qty
            };
          }
          return elem;
        })
      }
    case types.REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((elem) => elem.product._id !== action.product._id),
      };

    default:
      throw new Error();
  }
}