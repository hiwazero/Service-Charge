import { createSlice } from "@reduxjs/toolkit";
import { serverURL } from "../server/serverURL";
import axios from "axios";
import { setupInterceptor } from "../server/setupInterceptor";

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

export const {fetchDataStart, fetchDataSuccess, fetchDataFail} = userSlice.actions

export const fetchUser = () => async(dispatch) => {
        setupInterceptor()
    try{
        let data = localStorage.getItem('data');
        let parsedData = JSON.parse(data);
        let userId = parsedData.user_id

        dispatch(fetchDataStart)
        const response = await axios.get(`${serverURL()}/users/getUser/${userId}`)
        dispatch(fetchDataSuccess(response.data[0]))
     
    }catch(error){
        dispatch(fetchDataFail(error.message))
    }
}

export default userSlice.reducer