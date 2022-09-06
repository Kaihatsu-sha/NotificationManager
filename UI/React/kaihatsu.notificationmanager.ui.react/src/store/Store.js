import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './ProfileReducer'

export default configureStore({
  reducer: {
    profile: profileReducer,
  },
});