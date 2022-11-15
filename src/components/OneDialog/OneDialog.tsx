import React from 'react';

import './oneDialog.css'
import { MessagesDataItemType } from '../App/App';
import { MessageItemType } from '../App/App';

type OneDialogPropsType = {
    activeDialogData: any
}

const OneDialog = (props: OneDialogPropsType) => {
    return (
        <div className='one-dialog'>
            <div className='one-dialog-name'>
                <h2>{props.activeDialogData.name}</h2>
            </div>
            {
                props.activeDialogData.message.map((item: MessageItemType) => {
                    return (
                        <div key={item.id} className={`${item.id === 1 ? 'one-dialog-item right' : 'one-dialog-item'}`}> 
                            <h2>{item.messageText}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default OneDialog; 