import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState = { 
    homePageActive: 0, 
    modalOpen: false,
}

export const name = 'reducers'

const slice = createSlice({
    name, 
    initialState, 
    reducers: {
        changeTab: (state, action: PayloadAction<number>) => { 
            state.homePageActive = action.payload
        },
        toggleModal: (state) => { 
            state.modalOpen = !state.modalOpen
            console.log("Testing modal open state", state.modalOpen)
        }
    }
})


export const { actions, reducer } = slice