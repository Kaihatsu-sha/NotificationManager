import * as React from "react";
import { PrintList, UIForm, PrintChat } from './Homework2'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PrintMessageList from "./Messages";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as Material from '@mui/material';
import { addChat, removeChat } from '../store/Chat/Reducer'
import { getChatList } from '../store/Chat/Selectors'
import { addMessage, removeMessage } from '../store/Message/Reducer'
import { getMessageList, getMessageListByChatId } from '../store/Message/Selectors'

export function Chats() {
    const params = useParams();

//   const getSelectedChat = React.useMemo(() => getMessageListByChatId(params.chatId), [params.chatId]);
//   const selectedChat = useSelector(getSelectedChat);

    const chatList = useSelector(getChatList);
    const messageList = useSelector(getMessageList);

    const dispatch = useDispatch()

    React.useEffect(() => {
        if (chatList[params.chatId]) {
            //let messagesByChatId = useSelector(getMessageListByChatId(params.chatId));
            let messagesByChatId = messageList.filter(x => x.chatId == params.chatId);
            console.log(messagesByChatId);
            if (messagesByChatId.length >= 1) {
                let lastAuthor = messagesByChatId.at(-1).author;
                if (lastAuthor != 'robot') {
                    dispatch(addMessage({chatId: params.chatId, author: 'robot', text: 'Bad idea' }));
                }
            }
        }
    }, [messageList]);

    const callBack = (callBackObject) => {
        dispatch(addMessage(callBackObject));
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    if (!chatList[params.chatId]) {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Item><PrintChats chats={chatList} /></Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                    </Grid>
                </Grid>
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>                
                <Grid item xs={6} md={4}>
                    <Item><PrintChats chats={chatList} /></Item>
                </Grid>
                <Grid item xs={2} md={6}>
                    <Item><UIForm updateStateApp={callBack}></UIForm></Item>
                    <Item></Item>
                    <Item><PrintMessageList props={messageList.filter(x => x.chatId == params.chatId)} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    </Grid>
                <Grid item xs={2} md={4}>
                    
                </Grid>
            </Grid>
        </Box>
    );
}

function PrintChats({ chats }) {
    console.log('PrintChats');
    console.log(chats);
    const dispatch = useDispatch()
    const params = useParams();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className="ListChats">{
            chats.map((chat, index) => {
                let bgColor = 'primary.main';

                if (params.chatId == index) {
                    bgColor = 'success.main';
                }

                return (
                    <Item key={index}>
                        <Link to={index.toString()}>
                            <Material.List sx={{ width: '100%', maxWidth: 360, bgcolor: bgColor }}>
                                <Material.ListItem alignItems="center">
                                    <Material.ListItemText
                                        secondary={chat.name}
                                    />
                                </Material.ListItem>

                            </Material.List>
                        </Link>
                        <Material.FormControl variant="standard">
                            <Material.Button variant="contained" onClick={() => { dispatch(removeChat(index)) }
                            }>Удалить чат</Material.Button>
                        </Material.FormControl>
                    </Item>
                );
            })}
            <Item>
                <Material.FormControl variant="standard">
                    <Material.Button variant="contained" onClick={() => { dispatch(addChat("default chat")) }
                    }>Добавить чат</Material.Button>
                </Material.FormControl>
            </Item>
        </div>
    );
};