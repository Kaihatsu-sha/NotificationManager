import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { firestore } from './firebase'

export const getChatsRepository = async() =>{
    const response = await getDocs(collection(firestore,'chats')) 
    console.log(response)
    const dataArray = response.docs.map(e => e.data())
    return dataArray;
}

export const getMessagesRepository = async() =>{
    const response = await getDocs(collection(firestore,'messages')); 
    console.log(response);
    const dataArray = response.docs.map(e => e.data());
    return dataArray;
}

export const addMessageRepository = async(data)=>{
    const result = await addDoc(collection(firestore,'messages'),data);
}

export const addChatRepository = async(data)=>{
    console.log("addChatRepository");
    console.log(data);
    const result = await addDoc(collection(firestore,'chats'),data);
}