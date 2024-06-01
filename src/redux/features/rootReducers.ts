import appDataSlice from "./appDataSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducers = combineReducers({
    appData: appDataSlice,
});

export default rootReducers;
