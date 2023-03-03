export const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Product":
      return {
        ...state,
        product: action.payload,
      };
    case "addtocart":
      return {
        ...state,
        Cart: [...state.Cart, { ...action.payload, qty: 1 }],
      };
    case "remove_from_cart":
      return {
        ...state,
        Cart: state.Cart.filter((item) => item.id !== action.payload.id),
      };
    case "filterdata": {
      const filteredData = state.product.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        
        ...state,filteredDatas: filteredData,
      };
    }
    case "Add_qty":
      return {
        Cart: [...action.payload],
      };

    default:
  }
  return state;
};
