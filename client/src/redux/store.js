import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const combReducer= combineReducers({userss:userReducer});

const persistConfig = {
  key: 'root',
  storage,
  version : 1
}

const persistedReducer = persistReducer(persistConfig,combReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
});

export const persistor = persistStore(store)