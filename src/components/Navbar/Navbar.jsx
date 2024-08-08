import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return ( 
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs">Messages</NavLink>
                </li>
                <li>
                    <a href="">News</a>
                </li>
                <li>
                    <a href="">Music</a>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                    <a href="">Settings</a>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;