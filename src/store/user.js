import { createSlice } from "@reduxjs/toolkit";
import { fetchDataSuccess } from "./role";
import { serverURL } from "../server/serverURL";

const initialAuth = {loading: false, error: null, userInfo: {}}

const userSlice = createSlice({
    name: 'user',
    initialState: initialAuth,
    reducers: {
        fetchDataStart(state){
            state.loading = true
            state.error = null
            state.userInfo = []
        },
        fetchDataSuccess(state, action){
            state.loading = false
            state.userInfo = action.payload
        },
        fetchDataFail(state, action){
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {fetchDataStart, fetchDataSuccess, fetchDataFail} = rolesSlice.actions

export const fetchData = () => async(dispatch) => {
    try{
        let data = localStorage.getItem('data');
        let parsedData = JSON.parse(data);
        let userId = parsedData.user_id

        dispatch(fetchDataStart())
     
    }catch(error){
        dispatch(fetchDataFail(error.message))
    }
}

export default roleSlice.reducer