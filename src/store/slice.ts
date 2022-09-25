import { createSlice } from "@reduxjs/toolkit"



const initialState = { 
    homePageActive: "Home"
}

export const name = 'counter'

const slice = createSlice({
    name, 
    initialState, 
    reducers: {
        changeTab: (state) => { 
            if (state.homePageActive === "Home") {
                state.homePageActive = "Trends"
            } else {
                state.homePageActive = "Home"
            }
            console.log("Testing home page state",state.homePageActive)
        }
    }
})


export const { actions, reducer } = slice