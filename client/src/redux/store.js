import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'
export const store = configureStore({
  reducer: {
    userss:userReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})