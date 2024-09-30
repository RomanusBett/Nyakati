import styles from './clientside.module.css';

const TimePicker = () => {  
    const timeSlots = ['9:00AM', '12:00PM', '2:00PM', '4:00PM']
    return (
        <div className={styles.gridTimeSelect}>
            {timeSlots.map((time) => (
                <div className={styles.timeSelectBox}>
                    <p>{time}</p>
                </div>
            ))}
        </div>
    )
}

export default TimePicker;