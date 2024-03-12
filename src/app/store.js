import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage";
import authReducer from "../app/auth/authslice.js"
import categorySlice from "./blog/categorySlice.js";
import blogSlice from "./blog/blogSlice.js";
import commentSlice from "./blog/commentSlice.js";


const persistConfig = {
  key: "root",
  version: 1,
  storage
}

// Combine all your reducers into a root reducer
const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  category: categorySlice,
  blog: blogSlice,
  comment: commentSlice,
});

// Create a Redux store with the root reducer and Redux Toolkit's middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  preloadedState: {},
});

const persistor = persistStore(store)
export { persistor }
export default store;