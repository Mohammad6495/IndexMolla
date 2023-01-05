const initialState = {
  products: [],
  pType: [],
};

export const productTypeListReducers = (state = initialState, action) => {
  switch (action.type) {
    case "P_TYPE_LIST_REQUEST":
      return { loading: true, pType: [] };
    case "P_TYPE_LIST_SUCCESS":
      return { loading: false, pType: action.payload };
    default:
      return state;
  }
};

export const productListReducers = (state = initialState, action) => {
  switch (action.type) {
    case "P_LIST_REQUEST":
      return { loading: true, products: [] };
    case "P_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    default:
      return state;
  }
};
