import {List, ListItem, ListItemText} from '@mui/material';

export default function PrintMessageList({ props }) {
    console.log('PrintList');
    console.log(props);

    if (props.length <= 0) {
        return (
            <div className="ListItems">
            </div>
        );
    }
    return (
        <div className="ListItems">{
            props.map((message, index) => {
                return <PrintMessage key={index} author={message.author} text={message.text} index={index} />
            })}
        </div>
    );
};


function PrintMessage({ index, author, text }) {
    let bgColor = 'primary.main';

    if (index % 2 >= 1) {
        bgColor = 'warning.main';
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: bgColor }}>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={author}
                    secondary={text}
                />
            </ListItem>
        </List>
    );
};