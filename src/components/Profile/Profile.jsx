import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import banner from '../../img/banner.jpg'
import MyPostContainer from './MyPost/MyPostContainer';

function Profile(props) {
    return ( 
        <div className={styles.profile}>
            <div>
                <img className={styles.banner} src={banner} />
            </div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} />
            <MyPostContainer />
        </div>
     );
}

export default Profile;