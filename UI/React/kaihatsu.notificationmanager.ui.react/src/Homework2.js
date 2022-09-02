import { useEffect, useRef, useState,useCallback } from "react";

export function PrintList({ props }) {

    props.map((message) => { console.log(message) });

    return (
        <div className="List">{
            props.map((message) => {
                return <PrintMessage author={message.author} text={message.text} />
            })}
        </div>
    );
};

export function PrintMessage({ author, text }) {
    console.log('PrintMessage');
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
        <form ref={refForm} onSubmit={() => updateStateApp(refForm.current.author.value.toString(), refForm.current.message.value.toString())}>
            <input name="author" type="text" placeholder="author"></input>
            <input name="message" type="text" placeholder="message"></input>
            <button type="submit">Send</button>
        </form>
    );
};