import styles from './../Profile.module.css'
import avatar from '../../../img/my-profile.jpg'
import userPhoto from '../../../img/userPhoto.jpg'
import search from '../../../img/search.svg'
import unSearch from '../../../img/unSearch.svg'
import Preloader from '../../common/Preloader/Preloader';
import facebook from '../../../img/facebook.svg'
import vk from '../../../img/vk.svg'
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

function ProfileInfo({status, updateStatus, profile, ...props}) {
    if (!profile) {
        return <Preloader />
    }
    
    return ( 
        <div className={styles.profileUser}>
            <img className={styles.avatar} src={profile.photos.large} alt="" />
            <div className={styles.info}>
                <h3>{ profile.fullName }</h3>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
            <div className={styles.socialInfo}>
                <div className={styles.social}>
                    { profile.contacts.facebook !== null ? <a className={styles.socialIcon} href={profile.contacts.facebook}> <img src={facebook} /></a> : ''}
                    { profile.contacts.vk !== null ? <a className={styles.socialIcon} href={profile.contacts.vk}> <img src={vk} /></a> : ''}
                </div>
                <div className={styles.job}>
                    <img src={ profile.lookingForAJob ? search : unSearch } alt="" /> { profile.lookingForAJob ? 'Search job' : 'Have a job' }
                </div>
            </div>
        </div>
     );
}

export default ProfileInfo;