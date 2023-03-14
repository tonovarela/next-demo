
import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink';
export const NavBar = () => {
    return (
        <nav className={styles['menu-container']} >                    
            <ActiveLink texto={'Home'}  href="/"/>
            <ActiveLink texto={'About'} href="/about"/>
            <ActiveLink texto={'Contact'} href="/contact"/>
        </nav>
    )
};

