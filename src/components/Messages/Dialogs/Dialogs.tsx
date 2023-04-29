import React from 'react';

import { MessagesDataItemType } from '../../../redux/reducers/messagesReducer';
import './dialogs.css'

interface DialogsPropsType  {
    messagesData: Array<MessagesDataItemType>
    activeIdDialog: string
    changeActiveIdDialog: (id: string) => void
}


export const Dialogs: React.FC<DialogsPropsType> = ({
    messagesData,
    activeIdDialog,
    changeActiveIdDialog
}) => {
    return ( 
        <div className='dialogs'>
            {
                messagesData.map((item) => {
                    const changeActiveIdDialogHandler = () => {changeActiveIdDialog(item.id)} 
                    return (
                        <div className='dialogs-item' key={item.id}>
                            <div onClick={changeActiveIdDialogHandler} className='dialogs-item-info'>{item.name}</div>
                            <div className={`circle ${item.id === activeIdDialog ? 'active-circle': ''}`}></div>
                        </div>
                    )
                })
            }
        </div>
    );
};