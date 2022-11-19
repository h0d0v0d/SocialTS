import React from 'react';

import { MessagesDataItemType } from '../../redux/store';
import './dialogs.css'

interface DialogsPropsType  {
    messagesData: Array<MessagesDataItemType>
    changeActiveIdDialog: (id: string) => void
}


const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className='dialogs'>
            {
                props.messagesData.map((item) => {
                    return <div key={item.id} onClick={() => {props.changeActiveIdDialog(item.id)}} className='dialogs-item'>{item.name}</div>
                })
            }
        </div>
    );
};

export default Dialogs;