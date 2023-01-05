const intialState = {
  brand: [],
};

export const brandListReducers = (state = intialState, action) => {
  switch (action.type) {
    case "BRAND_LIST_REQUSET":
      return { loading: true, brand: [] };
    case "BRAND_LIST_SUCCESS":
      return { loading: false, brand: action.payload };
    default:
      return state;
  }
};
