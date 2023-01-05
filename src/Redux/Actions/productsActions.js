import axios from "axios";

export const productTypeListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "P_TYPE_LIST_REQUEST" });
    const { data } = await axios.get("pType");
    dispatch({
      type: "P_TYPE_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "P_LIST_REQUEST" });
    const { data } = await axios.get("products");
    dispatch({
      type: "P_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
