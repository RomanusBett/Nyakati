import styles from './auth.module.css';
import GoogleAuthButton from './googleAuthButton';
import FormSubmitButton from './formSubmit';
import FormGroupEl from './formGroupEl';
import React, { useState } from 'react';


const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [firstName, setFname] = useState<string>('');
    const [lastName, setLname] = useState<string>('');
    const [password1, setPassword1] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');

    
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
                    <FormGroupEl label='Email' type='email' name='email' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}}/>
                    <FormGroupEl label='First Name' type='text' name='firstName' onChange={(e)=>{setFname(e.target.value)}}/>
                    <FormGroupEl label='Last Name' type='text' name='lastName' onChange={(e)=>{setLname(e.target.value)}}/>
                    <FormGroupEl label='password' type='password' name='password' onChange={(e)=>{setPassword1(e.target.value)}}/>
                    <FormGroupEl label='Confirm Password' type='password' name='confirmPassword' onChange={(e)=>{setPassword2(e.target.value)}}/>
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