import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverURL } from "../server/serverURL";

const initialValue = { loading: false, error: null, users: [] };

const usersSlice = createSlice({
  name: "users",
  initialState: initialValue,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
      state.users = [];
    },
    fetchUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchUsersStart, fetchUsersSuccess, fetchUsersFail} = usersSlice.actions

export const fetchUsers = () => async (dispatch) =>{
    try{
        dispatch(fetchUsersStart)
        const response = await axios.get(`${serverURL()}/users/getAll`);
        dispatch(fetchUsersSuccess(response.data.data))
    }catch(error){
        dispatch(fetchUsersFail(error))
    }
}

export default usersSlice.reducer