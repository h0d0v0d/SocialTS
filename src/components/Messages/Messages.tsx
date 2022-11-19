import React, { useState, useEffect } from 'react';

import Dialogs from '../Dialogs/Dialogs';
import OneDialog from '../OneDialog/OneDialog';

import { MessagesDataItemType, ActionType} from '../../redux/store';
import { sendMessageActionCreator } from '../../redux/reducers/messagesReducer';

import './messages.css'

export type MessagesPropsType = {
    messagesData: Array<MessagesDataItemType>
    newMessageText: string
    dispatch: (a: ActionType) => void
}

const Messages = (props: MessagesPropsType) => {

    const [activeIdDialog, setActiveIdDialog] = useState<string>(props.messagesData[0].id)
    const [activeDialogData, setActiveDialogData] = useState<MessagesDataItemType>(props.messagesData[0])

    const changeActiveIdDialog = (id: string) => {
        console.log('changed')
        setActiveIdDialog(id)
    }

    const changeActiveDialogData = () => {
        const activeDialogData = props.messagesData.filter(t => t.id === activeIdDialog)[0]
        setActiveDialogData(activeDialogData)
    }

    const onSendMessage = () => {
        props.dispatch(sendMessageActionCreator(activeIdDialog))
    }

    useEffect(() => {
        changeActiveDialogData() 
    }, [activeIdDialog])

    return (
        <div className='messages'>
            <Dialogs messagesData={props.messagesData} 
                     changeActiveIdDialog={changeActiveIdDialog}/>
            <OneDialog activeDialogData={activeDialogData}
                       onSendMessage={onSendMessage}
                       dispatch={props.dispatch}
                       newMessageText={props.newMessageText}/>
        </div>
    );
};

export default Messages;