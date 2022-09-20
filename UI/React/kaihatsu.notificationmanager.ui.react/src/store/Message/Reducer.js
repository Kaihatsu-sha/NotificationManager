import { createSlice } from '@reduxjs/toolkit'

import { addMessageRepository } from "../../services/repository";

const createdSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      addMessageRepository(action.payload);
    },
    removeMessage: (state, action) => {
      //null
    },
  },
})

export const { addMessage, removeMessage } = createdSlice.actions

export default createdSlice.reducer