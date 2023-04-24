import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth'
import toggleReducer from './toggle'
import roleReducer from './role'
import showReducer from './show'

export const store = configureStore({
    reducer:{auth: authReducer, toggle: toggleReducer, role: roleReducer, show: showReducer}
})