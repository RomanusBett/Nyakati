import Navbar from "./navbar";
import styles from './clientside.module.css';
import AppointmentsTable from "./appointmentsTable";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Navbar />
            <div className={styles.appointmentsContainer}>
                <div className={styles.appntsBox}>
                    <div className={styles.appointmentsGroup}>
                        <h1>Your Appointments</h1>
                        <div>
                            <button className={`${styles.addButton} ${styles.cButton}`}>
                                Add
                            </button>
                        </div>
                        <div>
                            <AppointmentsTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;