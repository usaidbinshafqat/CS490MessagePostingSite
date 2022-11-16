import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState = { 
    homePageActive: "home", 
    modalOpen: false,
    drawerOpen: false,
}

export const name = 'reducers'

const slice = createSlice({
    name, 
    initialState, 
    reducers: {
        changeTab: (state, action: PayloadAction<string>) => { 
            state.homePageActive = action.payload
        },
        toggleModal: (state) => { 
            state.modalOpen = !state.modalOpen
        }, 
        toggleDrawer: (state) => { 
            state.drawerOpen = !state.drawerOpen
        }
    }
})


export const { actions, reducer } = slice