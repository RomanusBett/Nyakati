import { FcGoogle } from "react-icons/fc";
import styles from './auth.module.css';

type GoogleAuthButtonProps = {
    title: string;
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ title }) => {
    return (
        <div className={styles.socialAuthWrapper}>
            <button>
                {title} <FcGoogle />
            </button>
        </div>
    )
}

export default GoogleAuthButton;