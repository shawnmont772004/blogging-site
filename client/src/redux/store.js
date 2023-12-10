import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})