import * as React from "react";
import { PrintList, UIForm, PrintChat } from './Homework2'
import { useParams, Link } from 'react-router-dom'


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as Material from '@mui/material';

export function Chats() {
    const params = useParams();
    const [chatList, setChatList] = React.useState([{ name: 'support', messages: [] }, { name: 'default', messages: [] }]);

    React.useEffect(() => {
        if (chatList[params.chatId]) {
            if (chatList[params.chatId].messages.length >= 1) {
                let lastAuthor = chatList[params.chatId].messages.at(-1).author;
                if (lastAuthor != 'robot') {

                    setChatList((prevState) =>
                        //   [...prevState,{ name: 'supportw', messages: [{ author: "i", text: "ss" }] }]);
                        //  prevState.map((chat, index)=>{
                        //     chat => chat.index === params.chatId ? {} : chat
                        //     }
                        //     ));
                        prevState.map((el, index) =>
                            (index == params.chatId ? { ...el, messages: [...el.messages, { author: 'robot', text: 'Bad idea' }] } : el)
                        )
                    );
                }
            }
        }
    }, [chatList]);

    const callBack = (callBackObject) => {
        setChatList(prevState =>
            prevState.map((el, index) =>
                (index == params.chatId ? { ...el, messages: [...el.messages, { author: callBackObject.author, text: callBackObject.message }] } : el)
            )
        );
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
                    <Grid item xs={12} md={6}>
                    </Grid>
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
                <Grid item xs={12} md={6}>
                    <Item><UIForm updateStateApp={callBack}></UIForm></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item><PrintChats chats={chatList} /></Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item><PrintList props={chatList[params.chatId].messages} /></Item>
                </Grid>
            </Grid>
        </Box>
    );
}

function PrintChats({ chats }) {
    console.log('PrintChats');
    console.log(chats);

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
                    </Item>
                );
            })}
        </div>
    );
};