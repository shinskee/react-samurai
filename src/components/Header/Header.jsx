import styles from './Header.module.css'
import logo from './../../img/logo.svg'
import { NavLink } from 'react-router-dom';
import login from './../../img/login.svg'

function Header(props) {
    return ( 
        <header className={styles.header}>
            <a href="">
                <img src={logo} alt="" width={'100'} />
            </a>
            <div className={styles.loginBlock}>
                {props.isAuth 
                    ?   <div>
                            <div>{props.login}</div>
                            <button onClick={props.logout}>Logout</button>
                        </div>
                    : <NavLink to={'/login'} ><img src={login} alt="" />Login</NavLink>}
            </div>
        </header>
     )
}

export default Header;