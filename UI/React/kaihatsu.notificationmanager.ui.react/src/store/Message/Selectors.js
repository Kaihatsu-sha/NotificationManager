export function getMessageList(state) {
    if(state.persistedReducer.message)
    {
        return state.persistedReducer.message.messages;
    }
    return state.message.messages;
};

export function getMessageListByChatId(state, chatId) {
    console.log(chatId);
    console.log(state);
    if(chatId >= 0 && chatId < state.message.messages.length)
    {
    return state.message.messages.filter(x => x.chatId == chatId);
    }
    return null;
};