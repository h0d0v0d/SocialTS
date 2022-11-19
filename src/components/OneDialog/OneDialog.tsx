import { MessageItemType, MessagesDataItemType } from '../../redux/store';
import { changeMessageTextActionCreator } from '../../redux/reducers/messagesReducer';

import './oneDialog.css'

type OneDialogPropsType = {
    activeDialogData: MessagesDataItemType
    newMessageText: string
    onSendMessage: () => void
    dispatch: (m: any) => void
}

const OneDialog = (props: OneDialogPropsType) => {

    const onChangeNewMessageText = (text: string) => {
        props.dispatch(changeMessageTextActionCreator(text))
    }

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
                       value={props.newMessageText} 
                       onChange={(e) => {onChangeNewMessageText(e.currentTarget.value)}}/>
                <button className='one-dialog-send-button' onClick={() => {props.onSendMessage()}}>Отправить</button>
            </div>
        </div> 
    );
};

export default OneDialog; 