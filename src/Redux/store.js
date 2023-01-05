import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import {
  productTypeListReducers,
  productListReducers,
} from "./Reducers/productReducers";
import { AddnewsLetterReducers } from "./Reducers/newsLetterReducers";
import { brandListReducers } from "./Reducers/brandReducers";

const reducer = combineReducers({
  pTypeList: productTypeListReducers,
  brandList: brandListReducers,
  productsList: productListReducers,
  addNewsLetter: AddnewsLetterReducers,
});

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
