import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState = { 
    homePageActive: 0
}

export const name = 'counter'

const slice = createSlice({
    name, 
    initialState, 
    reducers: {
        changeTab: (state, action: PayloadAction<number>) => { 
            // if (state.homePageActive === "Home") {
            //     state.homePageActive = "Trends"
            // } else {
            //     state.homePageActive = "Home"
            // }
            state.homePageActive = action.payload
            console.log("Testing home page state",state.homePageActive)
        }
    }
})


export const { actions, reducer } = slice