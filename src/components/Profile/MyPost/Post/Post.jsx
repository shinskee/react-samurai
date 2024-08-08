import styles from './../../Profile.module.css'
import avatar from '../../../../img/my-profile.jpg'

function Post(props) {
    return ( 
        <div className={styles.post}>
            <img src={avatar} alt="" />
            <div>
                <h3>Simon Names</h3>
                <p>{props.message}</p>
                <div className={styles.feedback}>
                    <span>{props.likeCount} like</span>
                    <span>dislike</span>
                </div>
            </div>
        </div>
     );
}

export default Post;