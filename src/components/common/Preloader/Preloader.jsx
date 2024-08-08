import loading from './../../../img/loading.svg'
import styles from './Preloader.module.css'

function Preloader(props) {
    return ( 
        <img src={loading} className={styles.loading}/>
     );
}

export default Preloader;