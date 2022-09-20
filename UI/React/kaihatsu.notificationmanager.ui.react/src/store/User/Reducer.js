import { createSlice } from '@reduxjs/toolkit'
import { createUserThunk, loginThunk } from './Thunk'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        token: null,
        id: null,
    },
    reducers: {
        addUser: (state, action) => {
            return state = action.payload
        },
        removeUser: (state) => {
            state.email = null
            state.token = null
            state.id = null
        }
    },
    //редьюсеры для thunk функций
    extraReducers: {
        [createUserThunk.fulfilled]: (state, action) => {
            return state = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            return state = action.payload
        }

    },
});

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer