import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Main from './Main'
import { Chats } from './Chats'
import Profile from "./Profile";

function Routed() {
    console.log('Routed');
    return (
        <BrowserRouter>
            <Navigation />
            <div>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="chats" element={<Chats></Chats>} >
                        <Route path=":chatId" element={<Chats></Chats>} />
                    </Route>
                    <Route path="*" element={<div>NOT FOUND 404</div>} />
                </Routes>
            </div>

        </BrowserRouter>
    );
};

function Navigation() {
    const [title, setTitle] = useState('Домашняя страница');

    const handleClickNavigation = (event) => {
        event.stopPropagation();
        setTitle(event.target.innerText);
    };

    return (

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
                        <Link to="/" onClick={handleClickNavigation}><Button>Домашняя страница</Button></Link>
                        <Link to="profile" onClick={handleClickNavigation}><Button>Профиль</Button></Link>
                        <Link to="chats" onClick={handleClickNavigation}><Button>Чаты</Button></Link>
                    </ButtonGroup>
                </Box>              
            </nav>
        </div>
    );
}

export default Routed;