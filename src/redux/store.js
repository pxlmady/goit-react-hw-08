import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/slice.js";
import { filtersReducer } from "./filters/slice.js";
import { authReducer } from "./auth/slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const authPeristConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
export const store = configureStore({
  reducer: {
    selectContacts: contactsReducer,
    selectNameFilter: filtersReducer,
    auth: persistReducer(authPeristConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
