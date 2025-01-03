import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import UserSlice from "./reducers/UserSlice";
import {persistStore, persistReducer} from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import CategoriesSlice from "./reducers/CategoriesSlice";
import { DonationSlice } from "./reducers/DonationsSlice";

const rootReducer = combineReducers({
    user: UserSlice.reducer,
    categories: CategoriesSlice.reducer,
    donations: DonationSlice.reducer
})

const configuration = {
    key : "root",
    storage : AsyncStorage,
    version: 1
}

const persistantReducer = persistReducer(configuration, rootReducer)

const store = configureStore({
    reducer : persistantReducer,
    middleware : getDefaultMiddleWare => {
        return getDefaultMiddleWare({
            serializableCheck : false
        }).concat(logger)
    }
})

export default store
export const persistor = persistStore(store)
    