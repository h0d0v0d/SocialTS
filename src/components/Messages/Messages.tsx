import React, { useState, useEffect } from 'react';

import Dialogs from './Dialogs/Dialogs';
import OneDialog from './OneDialog/OneDialog';

import { MessagesCommonType } from '../Containers/MessagesContainer';
import { MessagesDataItemType } from '../../redux/reducers/messagesReducer';

import './messages.css'

const Messages: React.FC<MessagesCommonType> = (props) => { 

    const [activeIdDialog, setActiveIdDialog] = useState<string>(props.messagesData[0].id) 
    const [activeDialogData, setActiveDialogData] = useState<MessagesDataItemType>(props.messagesData[0]) 

    const onSendMessage = () => {
        props.onSendMessage(activeIdDialog)
    }
 
    const changeActiveIdDialog = (id: string) => {
        setActiveIdDialog(id)
    }

    const changeActiveDialogData = () => {
        setActiveDialogData(props.messagesData.filter((t: MessagesDataItemType) => t.id === activeIdDialog)[0]) 
    }

    useEffect(() => {
        changeActiveDialogData()
    }, [props.messagesData, activeIdDialog])
    
    return (
        <div className='messages'> 
            <Dialogs messagesData={props.messagesData} 
                     activeIdDialog={activeIdDialog}
                     changeActiveIdDialog={changeActiveIdDialog}/>
            <OneDialog activeDialogData={activeDialogData}
                       onSendMessage={onSendMessage}
                       newMessageText={props.newMessageText}
                       onChangeMessageText={props.onChangeMessageText}/>
        </div>
    );
};

export default Messages;