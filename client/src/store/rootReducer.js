import {combineReducers} from "@reduxjs/toolkit";
import postMutationReducer from "./Blog/postMutationSlice.js";

const rootReducer = combineReducers({
    postMutations: postMutationReducer
})

export default rootReducer;
