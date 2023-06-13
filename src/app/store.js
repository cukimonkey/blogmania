import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";


//configuring the website, using the custom reducer created in userSlice.js

export default configureStore({
    reducer: {
        user: userReducer,
    },
});

