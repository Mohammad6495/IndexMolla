import axios from "axios";

export const AddNewsLetterActions = (item) => (dispatch) => {
  try {
    dispatch({ type: "ADD_NEWS_LETTER_REQUEST" });
    setTimeout(async () => {
      const { data } = await axios.post("newsLetter", item);
      dispatch({
        type: "ADD_NEWS_LETTER_SUCCESS",
        payload: data,
      });
    }, 4000);
  } catch (error) {
    throw new Error(error);
  }
};
