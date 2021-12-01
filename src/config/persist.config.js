import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  blacklist: ["shop"],
};
