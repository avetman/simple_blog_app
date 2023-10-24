import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {postsApi} from "./Blog/apiSlice.js";
import rootReducer from "./rootReducer.js";

const store = configureStore({
    reducer: {
        root: rootReducer,
        [postsApi.reducerPath]: postsApi.reducer
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware)

})
setupListeners(store.dispatch);
export default store;
