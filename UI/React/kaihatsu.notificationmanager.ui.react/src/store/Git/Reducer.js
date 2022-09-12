import { createSlice } from '@reduxjs/toolkit'

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
  }

const createdSlice = createSlice({
  name: 'git',
  initialState: {
    gits: [],
    request:  STATUSES.IDLE,
    error: null,
  },
  reducers: {
    request: (state, action) => {
      state.request = STATUSES.REQUEST;
      state.error= null;

      console.log('request');
    },
    success: (state, action) => {
      state.request = STATUSES.SUCCESS;      
      state.gits=action.payload;  
      console.log('success');    
    },
    failure: (state, action) => {
      state.request = STATUSES.FAILURE;
      state.error= action.payload;
      console.log('failure');
    },
  },
})

export const { request, success,  failure} = createdSlice.actions

export default createdSlice.reducer
  