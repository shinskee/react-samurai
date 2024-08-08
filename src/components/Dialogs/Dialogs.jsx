import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';


const DialogsItem = (props) => {
    return (
        <NavLink className={styles.dialog} to={'/dialogs/' + props.id}>
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
        </NavLink>
    )
} 

const Messeges = (props) => {
    return (
        <NavLink className={styles.message}>
            {props.text}
        </NavLink>
    )
}

function Dialogs(props) {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(dialog => 
        <DialogsItem name={dialog.name} img={dialog.img} key={dialog.id} id={dialog.id}/>
    )
    let messageElements = state.messages.map(message => 
        <Messeges key={message.id} text={message.text}/>
    )

    let onNewMessageTextChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    
    let onSendMessegeClick = () => {
        props.sendMessage()
    }  

    return ( 
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={styles.messagesInner}>
                    <div className={styles.messages}>
                        {messageElements}
                    </div>
                    <div className={styles.messagesInput}>
                        <textarea 
                            onChange={onNewMessageTextChange}
                            value={state.newMessageBody}></textarea>
                        <button onClick={onSendMessegeClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Dialogs;