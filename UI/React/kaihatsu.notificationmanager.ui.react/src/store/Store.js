import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './ProfileReducer'
import chatReducer from './Chat/Reducer'
import messageReducer from './Message/Reducer'

export default configureStore({
  reducer: {
    profile: profileReducer,
    chat: chatReducer,
    message: messageReducer,
  },
});