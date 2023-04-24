import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverURL } from "../server/serverURL";

const initialAuth = {loading: false, error: null, usersData: []};

const usersSlice = createSlice({
    name: 'users',
    initialState: initialAuth,
    reducers:{
        fetchDataStart(state){
            state.loading = true
            state.error = null
            state.usersData = []
        },
        fetchDataSuccess(state, action){
            state.loading = false
            state.usersData = action.payload
        },
        fetchDataFail(state, action){
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {fetchDataStart, fetchDataSuccess, fetchDataFail} = usersSlice.actions

export const fetchUsers = () => async(dispatch) => {
    try {
        dispatch(fetchDataStart)
        const response = await axios.get(`${serverURL()}/users/getAll`);
        dispatch(fetchDataSuccess(response.data.data))
    } catch (error) {
        dispatch(fetchDataFail(error.message))
    }
}

export default usersSlice.reducer