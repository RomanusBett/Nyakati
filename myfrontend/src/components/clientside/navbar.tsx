import styles from './clientside.module.css';
import Logo from './logo';

const Navbar = () => {
    return (
        <nav className={styles.homeNav}>
            <div>
                <Logo />
            </div>
            <div className={styles.nameBox}>
                <p>
                    <span className={styles.introName}>Hello</span> <span className={styles.nameField}>John</span>
                </p>
            </div>
        </nav>
    )
}
export default Navbar;