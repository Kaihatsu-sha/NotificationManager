import './App.css';
import * as React from "react";
import {PrintList,UIForm,PrintChats} from './Homeworks/Homework2'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {
  const [messageList, setMessageList] = React.useState([]);
  const [chatList, setChatList] = React.useState([{id:'id1',name:'default'},{id:'id2',name:'support'}]);
  
  React.useEffect(()=>{
    console.log('useEffect');
    if(messageList.length >=1)
      {
        let lastAuthor = messageList.at(-1).author;
        if(lastAuthor !='robot')
        {
          setMessageList([...messageList,{author:'robot', text:'Bad idea'}]);
        }
      }
  },[messageList]);

  const callBack = (callBackObject)=>{
    setMessageList([...messageList,{author:callBackObject.author, text:callBackObject.message}]);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  console.log('return');
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item><UIForm updateStateApp={callBack}></UIForm></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><PrintChats props={chatList}/></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><PrintList props={messageList}/></Item>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default App;
