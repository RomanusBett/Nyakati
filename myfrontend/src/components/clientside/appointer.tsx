import styles from './clientside.module.css';
import TimePicker from './timePicker';
import { useEffect, useState } from 'react';

const Appointer = () => {
    const [upcomingDays, setUpcomingDays] = useState<Date[]>([])
    useEffect(() => {
        let times: Date[] = [];
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const selectDate = new Date(today);
            selectDate.setDate(today.getDate() + i);
            times.push(selectDate)
        }
        setUpcomingDays(times);
        console.log(upcomingDays);

    }, [])

    return (
        <div>
            <div className={styles.slotContainer}>
                {
                    upcomingDays.map((t) =>
                        <div className={styles.gridWrapper}>
                            <div className={`${styles.gridDate} ${styles.gridItem}`}>
                                {t.toLocaleDateString('ro-RO')}
                            </div>
                            <div className={`${styles.gridTimeGroup} ${styles.gridItem}`}>
                                <TimePicker />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Appointer;