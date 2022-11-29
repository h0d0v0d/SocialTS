import React from 'react';

import { MessagesDataItemType } from '../../../redux/reducers/messagesReducer';
import './dialogs.css'

interface DialogsPropsType  {
    messagesData: Array<MessagesDataItemType>
    activeIdDialog: string
    changeActiveIdDialog: (id: string) => void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return ( 
        <div className='dialogs'>
            {
                props.messagesData.map((item) => {
                    const changeActiveIdDialog = () => {props.changeActiveIdDialog(item.id)} 
                    return (
                        <div className='dialogs-item' key={item.id}>
                            <div onClick={changeActiveIdDialog} className='dialogs-item-info'>{item.name}</div>
                            <div className={`circle ${item.id === props.activeIdDialog ? 'active-circle': ''}`}></div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Dialogs;