import styles from './clientside.module.css';

const AppointmentsTable = ()=>{
     return (
        <div className={styles.appointmentsTable}>
            <div className={styles.eventBox}>
                <p><span className={styles.identifier}>Date</span>:23:23:34 00:00:00</p>
                <p><span className={styles.identifier}>Event</span>: Photography booking</p>
                <button className={`${styles.editButton} ${styles.cButton}`}>
                    Edit
                </button>
            </div>
        </div>
     )
}

export default AppointmentsTable;