import React, { useState } from 'react';

import './oneDialog.css'
import { MessageItemType, MessagesDataItemType } from '../../redux/store';


type OneDialogPropsType = {
    activeDialogData: MessagesDataItemType
}

const OneDialog = (props: OneDialogPropsType) => {

    const [value, setValue] = useState<string>('')

    console.log(props.activeDialogData)
    return (
        <div className='one-dialog'>
            <div className='one-dialog-name'>
                <h2>{props.activeDialogData.name}</h2>
            </div>
            {
                props.activeDialogData.message.map((item: MessageItemType) => {
                    return (
                        <div key={item.id} className={`${item.status === 1 ? 'one-dialog-item right' : 'one-dialog-item'}`}> 
                            <h2>{item.messageText}</h2>
                        </div>
                    )
                })
            }
            <div className='one-dialog-input-wrapp'>
                <input type="text" 
                       className='one-dialog-input' 
                       value={value} 
                       onChange={(e) => {setValue(e.currentTarget.value)}}/>
                <button className='one-dialog-send-button'>Отправить</button>
            </div>
        </div> 
    );
};

export default OneDialog; 