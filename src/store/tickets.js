import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverURL } from "../server/serverURL";
import { userId } from "../hooks/userId";
import { setupInterceptor } from "../server/setupInterceptor";

const initialValue = { loading: false, error: null, ticketList: [] };

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: initialValue,
  reducers: {
    fetchTicketStart(state) {
      state.loading = true;
      state.error = null;
      state.ticketList = [];
    },
    fetchTicketSuccess(state, action) {
      state.loading = false;
      state.ticketList = action.payload;
    },
    fetchTicketFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTicketStart, fetchTicketSuccess, fetchTicketFail } =
  ticketsSlice.actions;

export const fetchTickets = () => async (dispatch) => {
  setupInterceptor();
  try {
    dispatch(fetchTicketStart);
    const response = await axios.get(`${serverURL()}/ticket/getAllTicketsAssigneeId/${userId()}`);
    dispatch(fetchTicketSuccess(response.data.data))
  } catch (error) {
    dispatch(fetchTicketFail(error))
  }
};

export default ticketsSlice.reducer