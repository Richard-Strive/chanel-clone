import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import modalReducer from "../reducers/modalReducer";
import accountReducer from "../reducers/accountReducer";
import comingSoonReducer from "../reducers/comingSoonReducer";
import wishReducer from "../reducers/wishReducer";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  searchModal: false,
  showAccount: false,
  comingSoon: false,
  wish: false,
};

const bigReducer = combineReducers({
  searchModal: modalReducer,
  showAccount: accountReducer,
  comingSoon: comingSoonReducer,
  wish: wishReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
