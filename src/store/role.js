import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverURL } from "../server/serverURL";
import { setupInterceptor } from "../server/setupInterceptor";

const initialAuth = { loading: false, error: null, data: [] };

const roleSlice = createSlice({
    name: 'role',
    initialState: initialAuth,
    reducers:{
        fetchDataStart(state){
            state.loading = true
            state.error = null
            state.data = []
        },
        fetchDataSuccess(state, action){
            state.loading = false
            state.data = action.payload
        },
        fetchDataFail(state, action){
            state.loading = false
            state.error = action.payload
        }
    }
})


export const {fetchDataStart, fetchDataSuccess, fetchDataFail} = roleSlice.actions

export const fetchData = () => async (dispatch) => {
        setupInterceptor();
    try{
        dispatch(fetchDataStart)
        const response = await axios.get(`${serverURL()}/roles/getAllRoles`)
        dispatch(fetchDataSuccess(response.data.data))
    }catch(error){
        dispatch(fetchDataFail(error.message))
    }
}

export default roleSlice.reducer