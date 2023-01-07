import { connect } from 'react-redux';
import { compose } from 'redux';
import { Dispatch } from 'redux';

import Messages from './Messages';

import { actions } from '../../redux/reducers/messagesReducer';
import { RootStateType} from '../../redux/store';
import { MessagesDataItemType } from '../../redux/reducers/messagesReducer'
import withRedirect from '../HOC/withRedirect';

const {sendMessageAC, changeMessageTextAC} = actions

type MapStateToPropsType = {
    messagesData: Array<MessagesDataItemType>
    newMessageText: string
}
type MapDispatchToPropsType = {
    onChangeMessageText: (text: string) => void
    onSendMessage: (id: string) => void 
}

export type MessagesCommonType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return { 
        onChangeMessageText: (text: string) => {
            dispatch(changeMessageTextAC(text)) 
        },
        onSendMessage: (activeIdDialog: string) => {
            dispatch(sendMessageAC(activeIdDialog))  
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    withRedirect)
    (Messages)









