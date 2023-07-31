import { combineReducers, createStore, applyMiddleware } from "redux";
import { cakeReducer } from "./cake/reducer";
import iceReducer from "./iceCream/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const rootReducer = combineReducers({
    ice: iceReducer,
    cake: cakeReducer
})
const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(logger)))

export default store