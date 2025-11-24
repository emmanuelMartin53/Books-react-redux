import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerAddBooks from "./reducers/reducerAddBooks";

// Combine reducers si nécessaire
const rootReducer = combineReducers({
  library: reducerAddBooks
});

// Configure le store
const store = configureStore({
  reducer: rootReducer
  // ✅ Thunk est déjà inclus automatiquement
});

export default store;
