import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {showSide: false};

const showSlice = createSlice({
    name: 'show',
    initialState: initialAuth,
    reducers:{
        setShowSide(state){
            state.showSide = !state.showSide
        }
    }
}) 

export const showActions = showSlice.actions;

export default showSlice.reducer;
