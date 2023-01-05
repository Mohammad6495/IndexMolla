import axios from "axios";

export const brandListActions = () => async (dispatch) => {
  try {
    dispatch({ type: "BRAND_LIST_REQUSET" });
    const { data } = await axios.get("brand");
    dispatch({
      type: "BRAND_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
