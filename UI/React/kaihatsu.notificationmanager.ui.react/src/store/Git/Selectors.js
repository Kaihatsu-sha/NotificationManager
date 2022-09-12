export function getChatList(state) {
    console.log(state);
    if(state.persistedReducer.chat)
    {
        return state.persistedReducer.chat.chats;
    }
    return state.chat.chats;
};