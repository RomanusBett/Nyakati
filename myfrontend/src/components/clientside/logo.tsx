import styles from './clientside.module.css';

const Logo = () => {
    return (
        <div className={styles.homelogoBox}>
            <img className={styles.logoImage} src='/g8.png' alt='' />
        </div>
    )

}
export default Logo;