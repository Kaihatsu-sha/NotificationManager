import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
//Redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import {combineReducers} from "redux"; 

import profileReducer from './ProfileReducer'
import chatReducer from './Chat/Reducer'
import messageReducer from './Message/Reducer'

import { СhatBot } from './Middleware/ChatBot'
import {Logger,CrashReporter} from './Middleware/Logger'

const persistConfig = {
  key: 'root',
  storage,
}
// комбинируем редьюсеры
const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
  message: messageReducer,
});
// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: {
    // profile: profileReducer,
    // chat: chatReducer,
    // message: messageReducer,
    persistedReducer: persistedReducer,
  },
  middleware:
    [...getDefaultMiddleware(),
      СhatBot,
      Logger,
      CrashReporter]
});