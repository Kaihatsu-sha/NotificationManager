import * as React from 'react';
import * as Material from '@mui/material';

export function PrintList({ props }) {
    console.log('PrintList');

    return (
        <div className="ListItems">{
            props.map((message, index) => {
                return <div key={index}><PrintMessage author={message.author} text={message.text} index={index} /></div>
            })}
        </div>
        );
};

export function PrintChats({ props }) {
    console.log('PrintChats');

    return (
        <div className="ListItems">{
            props.map((chat, index) => {
                return (
                    <div key={index}>
                    <Material.List sx={{ width: '100%', maxWidth: 360, bgcolor: 'primary.main' }}>
                        <Material.ListItem alignItems="center">
                        <Material.ListItemText
                            primary={chat.id}
                            secondary={chat.name}
                        />
                        </Material.ListItem>
                    </Material.List>
                    </div>
                );
            })}
        </div>
        );
};

export function PrintMessage({ index, author, text }) {
    console.log('PrintMessage');
    let bgColor = 'primary.main';
    
    if(index%2 >= 1)
    {
        bgColor = 'warning.main';
    }

    return (
        <Material.List sx={{ width: '100%', maxWidth: 360, bgcolor: bgColor }}>
            <Material.ListItem alignItems="flex-start">
            <Material.ListItemText
                primary={author}
                secondary={text}
            />
            </Material.ListItem>
        </Material.List>
    );
};

export function UIForm({ updateStateApp }) {
    console.log('UIForm');

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
                    updateStateApp({author:author, message:message});
                    setAuthor('');
                    setMessage('');
                }}>Отправить</Material.Button>
            </Material.FormControl>
        </Material.Box>
    );
};