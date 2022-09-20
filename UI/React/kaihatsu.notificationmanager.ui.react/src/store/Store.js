import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
//Redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import {combineReducers} from "redux"; 

import profileReducer from './Profile/Reducer'
import chatReducer from './Chat/Reducer'
import messageReducer from './Message/Reducer'
import gitReducer from './Git/Reducer'

import { СhatBot } from './Chat/Middleware/ChatBot'
import {Logger,CrashReporter} from './Middleware/Logger'
import {GitAPILoader} from './Git/Middleware/GitAPI'
import UserReducer from './User/Reducer';

//Локальное хранение данных
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// // комбинируем редьюсеры
// const rootReducer = combineReducers({
//   profile: profileReducer,
//   chat: chatReducer,
//   message: messageReducer,
//   git: gitReducer,
// });
// // оборачиваем редьюсеры в persist
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: {
    profile: profileReducer,
    chat: chatReducer,
    message: messageReducer,
    userIO: UserReducer,
    git: gitReducer,
    //persistedReducer: persistedReducer,
  },
  middleware:
    [...getDefaultMiddleware(),
      СhatBot,
      Logger,
      CrashReporter,
      GitAPILoader]
      
});