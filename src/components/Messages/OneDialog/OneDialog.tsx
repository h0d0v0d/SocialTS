import { MessageItemType, MessagesDataItemType } from '../../../redux/reducers/messagesReducer';

import './oneDialog.css'

type OneDialogPropsType = {
    activeDialogData: MessagesDataItemType
    newMessageText: string
    onSendMessage: () => void
    onChangeMessageText: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const OneDialog: React.FC<OneDialogPropsType> = (props) => {
    return ( 
        <div className='one-dialog'> 
            <div className='one-dialog-name'>
                <h2>{props.activeDialogData.name}</h2>
            </div>
            {
                props.activeDialogData.message.map((item: MessageItemType) => {
                    const classs: string = item.status === 1 ? 'one-dialog-item right' : 'one-dialog-item'
                    return (
                        <div key={item.id} className={classs}> 
                            <h2>{item.messageText}</h2>
                        </div>
                    )
                })
            }
            <div className='one-dialog-input-wrapp'>
                <input type="text" 
                       className='one-dialog-input' 
                       value={props.newMessageText} 
                       onChange={props.onChangeMessageText}/>
                <button className='one-dialog-send-button' onClick={props.onSendMessage}>Отправить</button>
            </div>
        </div> 
    );
};

export default OneDialog; 