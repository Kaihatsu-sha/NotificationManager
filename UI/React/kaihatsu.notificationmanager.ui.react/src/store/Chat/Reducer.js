import { createSlice } from '@reduxjs/toolkit'

import { addChatRepository } from "../../services/repository";

const createdSlice = createSlice({
  name: 'chat',
  initialState: {
    chats: [],
  },
  reducers: {
    addChat: (state, action) => {
      addChatRepository(action.payload);
    },
    removeChat: (state, action) => {
      //null
    },
  },
})

export const { addChat, removeChat } = createdSlice.actions

export default createdSlice.reducer