import { useEffect, useRef, useState,useCallback } from "react";

export function PrintList({ props }) {
    console.log('PrintList');
    props.map((message) => { console.log(message) });

    return (
        <div className="List">{
            props.map((message, index) => {
                return <div key={index}><PrintMessage author={message.author} text={message.text} index={index} /></div>
            })}
        </div>
    );
};

export function PrintMessage({ index, author, text }) {
    console.log('PrintMessage');
    console.log('PrintMessage:'+author+text+index);
    return (
        <div className="message">
            <h4>{author}</h4> : {text}
        </div>
    );
};

export function UI({ updateStateApp }) {
    console.log('UI');
    const refForm = useRef(null);

    return (
        <form ref={refForm} onSubmit={() => updateStateApp([{author:refForm.current.author.value.toString(), text:refForm.current.message.value.toString()}])}>
            <input name="author" type="text" placeholder="author"></input>
            <input name="message" type="text" placeholder="message"></input>
            <button type="submit">Send</button>
        </form>
    );
};