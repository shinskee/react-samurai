const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {id: 1, text: 'Erisu Boreasu Gureiratto'},
        {id: 2, text: 'Friren フリーレン'},
        {id: 3, text: 'Vladilena Milizé'},
        {id: 4, text: 'Albedo アルベド'}
    ],
      
    dialogs: [
        {id: 1, name: 'Erisu Boreasu Gureiratto', img: 'https://i.pinimg.com/736x/33/ad/ca/33adca912233a8d1c198aecdb8b76dcf.jpg'},
        {id: 2, name: 'Friren フリーレン', img: 'https://sun1-21.userapi.com/impg/_xNPuWqf3cosdz_t6FVBrKnss02-GnKwsI8Mug/eQKQ-hmUBTM.jpg?size=604x586&quality=96&sign=06780db827edc420167dc1e40b4f3660&c_uniq_tag=yzLsSuK7qVYIiDQJuxIcklareCEj7H9g8LnpuZQSYBs&type=album'},
        {id: 3, name: 'Vladilena Milizé', img: 'https://avatars.mds.yandex.net/i?id=c3793120b6363fe4f87ad16b22b36c93ba76b2e9-9029818-images-thumbs&n=13'},
        {id: 4, name: 'Albedo アルベド', img: 'https://sneg.top/uploads/posts/2023-06/1687942175_sneg-top-p-albedo-avatarka-genshin-vkontakte-61.jpg'},
    ],

    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            } 
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, text: body}]
            }
        default: 
                return state
        }
}

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer