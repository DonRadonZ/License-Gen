import {ThunkAction} from "../../../component/countermessage/storeTypes"
import { setMemberships } from "pubnub-redux";
import { focusOnConversation } from "../currentConversation/currentConversationModel";


/**
 * Join a conversation.
 * The membership in the conversation will be stored.
 * The channel for the converstation will be subscribed to to receive messages.
 * The new conversation will be made the selected conversation
 */
export const joinConversation = (
    userId: string,
    conversationId: string  
): ThunkAction<Promise<void>> => {
    return(dispatch, getState, context)=>{
    return dispatch(
        setMemberships({
            uuid: userId,
            channels: [{ id: conversationId}]
        })
    ).then(()=> {
        context.pubnub.api.subscribe({
            channels: [conversationId],
            withPresence:true
        });
        dispatch(focusOnConversation(conversationId))
    })
}
}
