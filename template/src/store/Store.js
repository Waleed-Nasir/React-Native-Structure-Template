import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slicer/Auth";
import AsyncStorage from "@react-native-community/async-storage";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import LoaderSlice from "./Slicer/LoaderSlice";

const reducers = combineReducers({
  Auth: AuthReducer,
  Loader: LoaderSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["Auth"],
};

const _persistReducer = persistReducer(persistConfig, reducers);

export const Store = configureStore({
  reducer: _persistReducer,
  middleware: [thunk],
});
