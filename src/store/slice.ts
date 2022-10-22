import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState = { 
    homePageActive: 0, 
    modalOpen: false,
    drawerOpen: false,
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
        }, 
        toggleDrawer: (state) => { 
            state.drawerOpen = !state.drawerOpen
            console.log("Testing drawer open state", state.drawerOpen)
        }
    }
})


export const { actions, reducer } = slice