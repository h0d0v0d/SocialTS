import React from 'react';

import { MessagesDataItemType } from '../../../redux/reducers/messagesReducer';
import './dialogs.css'

interface DialogsPropsType  {
    messagesData: Array<MessagesDataItemType>
    changeActiveIdDialog: (id: string) => void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className='dialogs'>
            {
                props.messagesData.map((item) => {
                    const changeActiveIdDialog = () => {props.changeActiveIdDialog(item.id)}
                    return <div key={item.id} onClick={changeActiveIdDialog} className='dialogs-item'>{item.name}</div>
                })
            }
        </div>
    );
};

export default Dialogs;