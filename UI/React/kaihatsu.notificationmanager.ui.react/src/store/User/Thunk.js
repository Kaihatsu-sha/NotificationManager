import {createAsyncThunk} from '@reduxjs/toolkit'
import { auth } from '../../services/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";


// THUNK для создания пользователя при регистрации
export const createUserThunk = createAsyncThunk(
    'user/addUserThunk',
    async ({email,password}) => {
        try{
            const userCredit = await createUserWithEmailAndPassword(auth,email,password)
            console.log(userCredit.user)
            //ответ от firebase при успешно выполнение запроса
            const userData =  {
                email:userCredit.user.email,
                id:userCredit.user.uid,
                token:userCredit.user.accessToken
            }
           return userData
        }catch(e){
            console.log(e.code, e.message)
        }
    }
);

// THUNK для входа в систему если юзер уже зарегистрирован
export const loginThunk = createAsyncThunk(
    'user/loginThunk',
    async ({email,password}) => {
        try{
            const userCredit = await signInWithEmailAndPassword(auth,email,password)
            const userData =  {
                email:userCredit.user.email,
                id:userCredit.user.uid,
                token:userCredit.user.accessToken
            }
           return userData
        }catch(e){
            console.log(e.code, e.message)
        }
    }
);