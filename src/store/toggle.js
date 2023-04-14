import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {isToggle: false};

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: initialAuth,
    reducers:{
        toggleSet(state){
            state.isToggle = !state.isToggle
        },
        toggleReset(state){
            state.isToggle = false
        }
    }
})

export const toggleActions = toggleSlice.actions;

export default toggleSlice.reducer

