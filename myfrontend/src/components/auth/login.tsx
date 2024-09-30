import styles from './auth.module.css';
import GoogleAuthButton from './googleAuthButton';
import FormSubmitButton from './formSubmit';
import FormGroupEl from './formGroupEl';
import axios, {AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders} from 'axios';
import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')

    const submit = async (e:React.FormEvent)=>{
        e.preventDefault();

        (async ()=>{
            const user = {
                email: email,
                password: password
            }
    
            const config: AxiosRequestConfig = {
                headers : {
                    'Accept': 'application/json'
                } as RawAxiosRequestHeaders,
            };
            const response: AxiosResponse = await axios.post('http://localhost:32000/accounts/login', user, config);
            console.log(response.status);
            console.log(response.data);
            
        })()

    }

    const onchangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);
    }
    const onchangePassword  = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    return (
        <div className={styles.registrationContainer}>
            <div className={styles.formWrapper}>
                <div className={styles.logoWrapper}>
                    <div className={styles.imageWrapper}>
                        <img className={styles.logoImage} src='/g8.png' alt='registration logo' />
                    </div>
                    <GoogleAuthButton title='Sign in with Google' />
                </div>
                <div className={styles.formBreak}>
                    <p>Or</p>
                </div>
                <form className={styles.formInputsWrapper} onSubmit={submit}>
                    <FormGroupEl label='Email' type='email' name='email' onChange={onchangeEmail} />
                    <FormGroupEl label='password' type='password' name='password' onChange={onchangePassword}/>
                    <div className={styles.formBreakpassword}>
                        <p>forgot password?</p>
                    </div>
                    <FormSubmitButton />
                </form>
            </div>
        </div>
    )
}
export default Login; 