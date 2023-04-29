import React, { useState, useEffect } from 'react';

import {Dialogs} from './Dialogs/Dialogs';
import {OneDialog} from './OneDialog/OneDialog';
import { MessagesDataItemType, messagesReducerActions } from '../../redux/reducers/messagesReducer';

import './messages.css'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import withRedirect from '../HOC/withRedirect';


export const Messages: React.FC = withRedirect(() => { 

    const {messagesData, newMessageText} = useAppSelector(state => state.messagesPage)
    const dispatch = useAppDispatch()
    const [activeIdDialog, setActiveIdDialog] = useState<string>(messagesData[0].id) 
    const [activeDialogData, setActiveDialogData] = useState<MessagesDataItemType>(messagesData[0]) 

    const onChangeMessageText = (text: string) => {
        dispatch(messagesReducerActions.changeMessageTextAC(text))
    }

    const onSendMessage = () => {
        dispatch(messagesReducerActions.sendMessageAC(activeIdDialog))
    }
 
    const changeActiveIdDialog = (id: string) => {
        setActiveIdDialog(id) 
    }

    const changeActiveDialogData = () => {
        setActiveDialogData(messagesData.filter((t: MessagesDataItemType) => t.id === activeIdDialog)[0]) 
    }

    useEffect(() => {
        changeActiveDialogData()
    }, [messagesData, activeIdDialog])

    return (
        <div className='messages'> 
            <Dialogs messagesData={messagesData} 
                     activeIdDialog={activeIdDialog}
                     changeActiveIdDialog={changeActiveIdDialog}/>
            <OneDialog activeDialogData={activeDialogData}
                       onSendMessage={onSendMessage}
                       newMessageText={newMessageText}
                       onChangeMessageText={onChangeMessageText}/>
        </div>
    );
});
