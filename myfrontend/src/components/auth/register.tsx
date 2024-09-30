import styles from './auth.module.css';
import GoogleAuthButton from './googleAuthButton';
import FormSubmitButton from './formSubmit';
import FormGroupEl from './formGroupEl';

const Register: React.FC = () => {
    return (
        <div className={styles.registrationContainer}>
            <div className={styles.formWrapper}>
                <div className={styles.logoWrapper}>
                    <div className={styles.imageWrapper}>
                        <img className={styles.logoImage} src='/g8.png' alt='registration logo' />
                    </div>
                    <GoogleAuthButton title='Sign up with Google' />
                </div>
                <div className={styles.formBreak}>
                    <p>Or</p>
                </div>
                <form className={styles.formInputsWrapper}>
                    {/* <FormGroupEl label='Email' type='email' name='email'/>
                    <FormGroupEl label='First Name' type='text' name='firstName'/>
                    <FormGroupEl label='Last Name' type='text' name='lastName'/>
                    <FormGroupEl label='Last Name' type='text' name='lastName'/>
                    <FormGroupEl label='password' type='password' name='password'/>
                    <FormGroupEl label='Confirm Password' type='password' name='confirmPassword'/> */}
                    <div className={styles.formBreakpassword}>
                        <p>forgot password?</p>
                    </div>
                    <FormSubmitButton />
                </form>
            </div>
        </div>
    )
}
export default Register; 