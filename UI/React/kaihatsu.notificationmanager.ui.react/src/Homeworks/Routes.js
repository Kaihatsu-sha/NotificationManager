import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useMatch
} from "react-router-dom";

import Main from './Main'
import { Chats } from './Chats'
import Profile from "./Profile";
import GitPage from "./GitPage";
import Signup from "./SignUp";
import Signin from "./SignIn";
import { useAuth } from "../store/User/Hooks";

export default function Routed() {
    
    // const[authed, setAuthed] = useState(false);
    //  useEffect(() => {
    //     useAuth
    // }, []);

    return(
        <BrowserRouter>
            <Navigation />
            <div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="chats" element={<Chats></Chats>} >
                        <Route path=":chatId" element={<Chats></Chats>} />
                    </Route>
                    <Route path="gitpage" element={<GitPage></GitPage>} />

                    <Route path="login" element={<Signin></Signin>} />
                    <Route path="signup" element={<Signup></Signup>} />
                    <Route path="*" element={<div>NOT FOUND 404</div>} />
                </Routes>
            </div>

        </BrowserRouter>
    );
};

function Navigation() {
    const [title, setTitle] = useState('Домашняя страница');
    
    const auth = useAuth();

    const handleClickNavigation = (event) => {
        event.stopPropagation();
        setTitle(event.target.innerText);
    };

    // const params = useMatch();
    // useEffect(()=>{

    //     console.log(params);
    //     //setTitle();
    // },[title]);

    return  auth.isAuth ?(
        <div>
            <h1>Hello, {auth.email} from page: {title}</h1>
            <nav>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Link to="/" onClick={handleClickNavigation}><Button>Домашняя страница</Button></Link>
                        <Link to="profile" onClick={handleClickNavigation}><Button>Профиль</Button></Link>
                        <Link to="chats" onClick={handleClickNavigation}><Button>Чаты</Button></Link>
                        <Link to="gitpage" onClick={handleClickNavigation}><Button>API Git</Button></Link>
                        <Link to="login" onClick={handleClickNavigation}><Button>Войти</Button></Link>
                        <Link to="signup" onClick={handleClickNavigation}><Button>Зарегестрироваться</Button></Link>
                    </ButtonGroup>
                </Box>
            </nav>
        </div>
    ) :
    (
        <div>
            <h1>{title}</h1>
            <nav>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Link to="login" onClick={handleClickNavigation}><Button>Войти</Button></Link>
                        <Link to="signup" onClick={handleClickNavigation}><Button>Зарегестрироваться</Button></Link>
                    </ButtonGroup>
                </Box>
            </nav>
        </div>
    );
};