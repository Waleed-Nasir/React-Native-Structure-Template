import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slicer/Auth";
import AsyncStorage from "@react-native-community/async-storage";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import LoaderSlice from "./Slicer/LoaderSlice";
import Settings from "./Slicer/Settings";

const reducers = combineReducers({
  Auth: AuthReducer,
  Loader: LoaderSlice,
  Settings: Settings,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["Auth","Settings"],
};

const _persistReducer = persistReducer(persistConfig, reducers);

export const Store = configureStore({
  reducer: _persistReducer,
  middleware: [thunk],
});
