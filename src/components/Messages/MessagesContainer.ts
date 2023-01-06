import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Messages from './Messages';

import { sendMessageAC, changeMessageTextAC } from '../../redux/reducers/messagesReducer';

import { RootStateType} from '../../redux/store';
import { MessagesDataItemType } from '../../redux/reducers/messagesReducer'


type MapStateToPropsType = {
    messagesData: Array<MessagesDataItemType>
    newMessageText: string
}
type MapDispatchToPropsType = {
    onChangeMessageText: (e: ChangeEvent<HTMLInputElement>) => void
    onSendMessage: (id: string) => void
}

export type MessagesCommonType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeMessageText: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeMessageTextAC(e.currentTarget.value)) 
        },
        onSendMessage: (activeIdDialog: string) => {
            dispatch(sendMessageAC(activeIdDialog))  
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer














/* const MessagesContainer: React.FC<MessagesContainerPropsType> = (props) => {

    const onChangeMessageText = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changeMessageTextActionCreator(e.currentTarget.value)) 
    }

    const onSendMessage = (activeIdDialog: string) => {
        props.dispatch(sendMessageActionCreator(activeIdDialog)) 
    }

    return (
        <Messages messagesData={props.messagesPageData.messagesData}
                    newMessageText={props.messagesPageData.newMessageText}
                    onChangeMessageText={onChangeMessageText}
                    onSendMessage={onSendMessage}/>
    );
};

export default MessagesContainer;  */