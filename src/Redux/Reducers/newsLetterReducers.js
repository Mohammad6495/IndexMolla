const initialState = {
  newsletter: [],
};

export const AddnewsLetterReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEWS_LETTER_REQUEST":
      return { loading: true, newsletter: [], message: "در حال ثبت ایمیل..." };
    case "ADD_NEWS_LETTER_SUCCESS":
      return {
        loadin: false,
        newsletter: action.payload,
        message: "ایمیل شما ثبت شد",
        statusSending:true,
      };
    default:
      return state;
  }
};
