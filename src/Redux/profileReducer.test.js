import profileReducer, { addPostActionCreator } from "./profileReducer";

it ('post deleted', () => {
    let action = deletePost(1)
    let state = {
        posts: [
            {id: 1, message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero omnis ullam distinctio debitis nostrum mollitia odio inventore fugit vel maiores. Qui dolorem quos asperiores veniam autem provident at saepe nulla?', likeCount: 2},
            {id: 2, message: 'TEXT', likeCount: 12},
            {id: 3, message: 'TEXT TEXT TEXT TEXT', likeCount: 1}
        ],
        newPostText: '',
    }
    let newState = profileReducer(state, action)

    expect (newState.posts.length).toBe(5)
})

