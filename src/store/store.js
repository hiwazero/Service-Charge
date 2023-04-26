import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import toggleReducer from "./toggle";
import roleReducer from "./role";
import showReducer from "./show";
import userReducer from "./user";
import ticketsReducer from "./tickets";
import usersReducer from "./users";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toggle: toggleReducer,
    role: roleReducer,
    show: showReducer,
    user: userReducer,
    tickets: ticketsReducer,
    users: usersReducer,
  },
});
