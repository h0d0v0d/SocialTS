import { MessageItemType, MessagesDataItemType } from '../../../redux/reducers/messagesReducer';

import './oneDialog.css'

type OneDialogPropsType = {
    activeDialogData: MessagesDataItemType
    newMessageText: string
    onSendMessage: () => void
    onChangeMessageText: (text: string) => void
}

export const OneDialog: React.FC<OneDialogPropsType> = ({
    activeDialogData,
    newMessageText,
    onChangeMessageText,
    onSendMessage
}) => {
    return ( 
        <div className='one-dialog'> 
            <div className='one-dialog-name'>
                <h2>{activeDialogData.name}</h2> 
            </div>
            <div className="one-dialog-chat">
                {
                    activeDialogData.message.map((item: MessageItemType) => {
                        const classs: string = item.status === 1 ? 'one-dialog-item right' : 'one-dialog-item'
                        return (
                            <div key={item.id} className={classs}>
                                <div  className='text'> 
                                    <h2>{item.messageText}</h2>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='one-dialog-input-wrapp'>
                    <input type="text" 
                        className='one-dialog-input' 
                        value={newMessageText} 
                        onChange={(e) => onChangeMessageText(e.currentTarget.value)}/>
                    <button className='one-dialog-send-button' onClick={onSendMessage}>Отправить</button>
                </div>
            </div>
        </div> 
    );
};