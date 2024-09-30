import { ChangeEvent } from 'react';
import styles from './auth.module.css';

type formGroupElProps = {
    label: string;
    type: string;
    name: string;
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
}

const FormGroupEl: React.FC<formGroupElProps> = ({label, type, name, onChange})=>{
return (
    <div className={styles.formGroup}>
        <label>{label}</label>
        <input className={styles.formInput} type={type} name={name} onChange={e=>onChange}/>
    </div>
)
}

export default FormGroupEl;