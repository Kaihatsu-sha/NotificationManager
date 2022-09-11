import { addMessage, removeMessage } from '../Message/Reducer'

// standard middleware definition, with 3 nested functions:
// 1) Accepts `{dispatch, getState}`
// 2) Accepts `next`
// 3) Accepts `action`
export const СhatBot = ({ dispatch, getState }) => next => action => {
    
    if (action.type == "message/addMessage") {
        addBotMessageThunk(action.payload.author, action.payload.chatId,dispatch);
    }

    return next(action)
};

function addBotMessageThunk(author, chatId, dispatch) {

    if (author !== 'bot') {
        const robotMessage = { chatId: chatId, author: 'bot', text: 'Bad idea' };
        setTimeout(() => dispatch(addMessage(robotMessage)), 2000);
    }
};