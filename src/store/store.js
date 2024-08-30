import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers-slice/userSlice'

export const store = configureStore({
  reducer: {
    users: userReducer
  },
})
