import { useSelector } from "react-redux"

// Кастомный хук для отслеживания аутентификации
export const useAuth = () =>{
    //получаем из стейта(редакс) наше состояние юзера
    const {email,token,id} = useSelector(state => state.userIO)
    return (
        {
            isAuth: email ? true : false,
            email,
            token,
            id
        }
    )
};   