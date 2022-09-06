import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'defaultProfile',
    isAgreed : false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    toggleAgreement: (state) => {
      state.isAgreed = !state.isAgreed;
      console.log(state.isAgreed);
    },
  },
})

export const { setName, toggleAgreement } = profileSlice.actions

export default profileSlice.reducer