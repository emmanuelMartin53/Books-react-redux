import { combineReducers, configureStore} from "@reduxjs/toolkit";
import reducerAddBooks from "./reducers/reducerAddBooks";
import reducerFetchBooks from "./reducers/reducerFetchBooks";


// Combine reducers si nécessaire
const rootReducer = combineReducers({
  library: reducerAddBooks,
  search: reducerFetchBooks
});

// Configure le store
const store = configureStore({
  reducer: rootReducer
  // ✅ Thunk est déjà inclus automatiquement
});

export default store;
