import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect1 } from '../../hoc/withAuthRedirect1.jsx';
import { compose } from '@reduxjs/toolkit';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect1
)(Dialogs);