import * as React from 'react';
import * as Material from '@mui/material';
import { useParams, Link } from 'react-router-dom'

export function UIForm({ updateStateApp }) {
    console.log('UIForm');
    const params = useParams();
    const [author, setAuthor] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    };
    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };

    let authorRef = React.useRef(null);
    React.useEffect(() => {
        console.log('useEffect ref');
        authorRef.current?.focus();
        }, [author]);        

    return (
        <Material.Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off" >
            <Material.FormControl variant="standard">
                <Material.InputLabel>Автор</Material.InputLabel>
                <Material.Input id="author" name="author" value={author} onChange={handleChangeAuthor} placeholder="Автор" inputRef={authorRef}/>
            </Material.FormControl>
            <Material.FormControl variant="standard">
                <Material.InputLabel>Сообщение</Material.InputLabel>
                <Material.Input id="message" name="message" value={message} onChange={handleChangeMessage} placeholder="Сообщение"/>
            </Material.FormControl>
            <Material.FormControl variant="standard">
                <Material.Button variant="contained" onClick={()=>{
                    updateStateApp({chatId: params.chatId, author:author, text:message});
                    setAuthor('');
                    setMessage('');
                }}>Отправить</Material.Button>
            </Material.FormControl>
        </Material.Box>
    );
};