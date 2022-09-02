import './App.css';
import { useEffect, useState } from "react";
import {PrintList,UI} from './Homework2'

function App() {
  const [messageList, setMessageList] = useState([]);
  
  useEffect(()=>{
    console.log('useEffect');
  },[messageList]);

  const callBack = (author, message)=>{
    setMessageList([{author:author, text:message},{author:'robot', text:'Bad idea'}]);
  };

  console.log('return');
  return (
    <>
    <UI updateStateApp={callBack}></UI>
    <PrintList props={messageList}/>
    </>
  );
}

export default App;
