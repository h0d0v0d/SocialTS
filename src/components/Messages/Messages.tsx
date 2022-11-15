import React, { useState, useEffect } from 'react';

import Dialogs from '../Dialogs/Dialogs';
import OneDialog from '../OneDialog/OneDialog';

import { MessagesDataItemType } from '../App/App';
import './messages.css'

export type MessagesPropsType = {
    messagesData: Array<MessagesDataItemType>
}

const initialObject = {
    id: 1, 
    name: 'Friend 1', 
    message: [
      {id: 1, status: 1, src: 'png', messageText: 'Привет'}, 
      {id: 2, status: 0, src: 'png', messageText: 'Привет'}
    ]
  }

const Messages = (props: MessagesPropsType) => {

    const [activeIdDialog, setActiveIdDialog] = useState<number>(1)
    const [activeDialogData, setActiveDialogData] = useState<MessagesDataItemType>(initialObject)

    const changeActiveIdDialog = (id: number) => {
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
            <OneDialog  activeDialogData={activeDialogData}/>
        </div>
    );
};

export default Messages;