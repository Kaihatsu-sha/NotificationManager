import { createSlice } from '@reduxjs/toolkit'

const createdSlice = createSlice({
  name: 'chat',
  initialState: {
    chats: [{ name: 'support' }],
  },
  reducers: {
    addChat: (state, action) => {
      state.chats.push({name: action.payload});
    },
    removeChat: (state, action) => {
      if(action.payload >= 0 || action.payload < state.chats.length)
      {
        state.chats.splice(action.payload,1);
      }
    },
  },
})

export const { addChat, removeChat } = createdSlice.actions

export default createdSlice.reducer