import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero omnis ullam distinctio debitis nostrum mollitia odio inventore fugit vel maiores. Qui dolorem quos asperiores veniam autem provident at saepe nulla?', likeCount: 2},
                {id: 2, message: 'TEXT', likeCount: 12},
                {id: 3, message: 'TEXT TEXT TEXT TEXT', likeCount: 1}
            ],
            newPostText: ''
        },
    
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)   
    }
}

export default store
