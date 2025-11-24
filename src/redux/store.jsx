import { createStore, combineReducers } from "redux";
import booksReducer from "./books/reducerBooks";


const rootReducer = combineReducers({
  book: booksReducer
})


const store = createStore(rootReducer)

export default store;
