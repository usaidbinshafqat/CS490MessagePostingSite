import { configureStore } from "@reduxjs/toolkit";
import { reducer, name } from "./slice";


const store = configureStore({
    reducer: { 
        [name]: reducer
    }
})

export default store