import React, { memo } from 'react';
import styles from './../Profile.module.css'
import Post from './Post/Post';


const MyPost = memo(props => {
    // console.log('log')
    const postsElements = props.posts.map(post => 
        <Post message={post.message} key={post.id} id={post.id} likeCount={post.likeCount}/>
    )
    
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())
        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        // props.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <>
            <div className={styles.input}>
                <textarea placeholder='Write text' ref={newPostElement} value={props.newPostText} onChange={onPostChange} name="" id=""></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={styles.myPost}>
                {postsElements}
            </div>
        </>
     );
})

export default MyPost;