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

import { getChatsRepository, getMessagesRepository, addChatRepository, addMessageRepository } from "../services/repository";

export function Chats() {
    const params = useParams();
    const dispatch = useDispatch();

    const [chatList, setChatList] = React.useState([]);
    const [messageList, setMessageList] = React.useState([]);
    const [selectedChat, setSelectedChat] = React.useState()

    const callBack = (callBackObject) => {
        addMessageRepository(callBackObject);
        getPostsHandler();
    };

    const callBackAddChat = (callBackObject) => {
        addChatRepository(callBackObject);
        getPostsHandler()
    };

    const getPostsHandler = async () => {
        let data = await getChatsRepository()
        console.log(data);
        setChatList(data);
        
        console.log("getMessagesRepository");
        data = await getMessagesRepository();
        console.log(data);
        setMessageList(data);
        
        // if (messageList?.length == 0) {
        //     console.log("setMessageList null");
        //     console.log(messageList?.length);
        //     //setMessageList([]);
        // }       

    };

    React.useEffect(() => {
        getPostsHandler()
    }, [])

    React.useEffect(() => {
        setSelectedChat(false);
        if (params?.chatId) {
            console.log("selectedChat")
            setSelectedChat(true);
        }
        getPostsHandler();
        }, [params.chatId]); 

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    if (chatList.length == 0) {
        console.log("0");
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Item><PrintChats chats={chatList} addChatCallback={callBackAddChat} /></Item>
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
                    <Item><PrintChats chats={chatList} addChatCallback={callBackAddChat} /></Item>
                </Grid>
                <Grid item xs={2} md={6}>
                    <Item> {!selectedChat ? <div>Select chat</div>
                        :<UIForm updateStateApp={callBack}></UIForm>
                    }</Item>
                    <Item></Item>
                    <Item><PrintMessageList props={messageList?.filter(x => x.chatId == params.chatId)} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                </Grid>
                <Grid item xs={2} md={4}>

                </Grid>
            </Grid>
        </Box>
    );
}

function PrintChats({ chats, addChatCallback }) {
    console.log('PrintChats');
    // console.log(chats);
    const dispatch = useDispatch()
    const params = useParams();
    let chatsLastId = 0;

    chatsLastId = chats.length;
    let newChat = { id: '0', name: "default chat" };
    newChat.id = chatsLastId;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    if (chats.length >= 1) {
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
                                <Material.Button variant="contained" onClick={() => { }
                                }>Удалить чат</Material.Button>
                            </Material.FormControl>
                        </Item>
                    );
                })}
                <Item>
                    <Material.FormControl variant="standard">
                        <Material.Button variant="contained" onClick={() => { addChatCallback(newChat) }
                        }>Добавить чат</Material.Button>
                    </Material.FormControl>
                </Item>
            </div>
        );
    }
    return (
        <div className="ListChats">
            <Item>
                <Material.FormControl variant="standard">
                    <Material.Button variant="contained" onClick={() => { addChatCallback(newChat) }
                    }>Добавить чат</Material.Button>
                </Material.FormControl>
            </Item>
        </div>
    );
};