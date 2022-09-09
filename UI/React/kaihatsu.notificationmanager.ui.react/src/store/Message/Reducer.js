import { createSlice } from '@reduxjs/toolkit'

const createdSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [{chatId: '0', author: "test", text:"test text"}],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    removeMessage: (state, action) => {
      if(action.payload >= 0 || action.payload < state.messages.length)
      {
        state.messages.splice(action.payload,1);
      }
    },
  },
})

export const { addMessage, removeMessage } = createdSlice.actions

export default createdSlice.reducer