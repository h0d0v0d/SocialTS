import React, { useState, useEffect } from 'react';

import Dialogs from '../Dialogs/Dialogs';
import OneDialog from '../OneDialog/OneDialog';

import { MessagesDataItemType } from '../../redux/store';
import './messages.css'

export type MessagesPropsType = {
    messagesData: Array<MessagesDataItemType>
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

    useEffect(() => {
        changeActiveDialogData()
    }, [activeIdDialog])

    return (
        <div className='messages'>
            <h2>{activeIdDialog}</h2>
            <Dialogs messagesData={props.messagesData} 
                     changeActiveIdDialog={changeActiveIdDialog}/>
            <OneDialog activeDialogData={activeDialogData}/>
        </div>
    );
};

export default Messages;