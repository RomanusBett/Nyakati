import { daysInWeek } from "./helper";
import './calendar.css';

const AccountCalendar = () => {
    let days: Date[] = [];
    const getDaysInMonth = (month: number, year: number) => (new Array(31)).fill('').map((v, i) => new Date(year, month - 1, i + 1)).filter(v => v.getMonth() === month - 1);
    const date = new Date();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    days = [...getDaysInMonth(month, year)];

    let correctYear;
    let lastMonth;
    if (month === 1) {
        correctYear = year - 1;
        lastMonth = 12;
    } else {
        correctYear = year;
        lastMonth = month - 1;
    }

    const lastMonthDays = [...getDaysInMonth(lastMonth, correctYear)];

    const groupedDays: Record<string, Date[]> = {
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
    }

    const firstDayPrevMonth = days[0].getDay();
    let lastWeekDaysPrevMonth = lastMonthDays.splice(-firstDayPrevMonth)

    lastWeekDaysPrevMonth.forEach((day: Date) => {
        const lastMonthDayNames = daysInWeek[day.getDay()]
        groupedDays[lastMonthDayNames].push(day);
    })

    days.forEach((day) => {
        const dayName = daysInWeek[day.getDay()];
        groupedDays[dayName].push(day);
    })

    return (
        <div>
            <table className="weekday">
                <thead>
                    <tr>
                        {daysInWeek.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {daysInWeek.map(day => (
                            <td key={day}>
                                {groupedDays[day].map((d, index) => (
                                    <div className="date-cell" key={index}>{d.getDate()}</div>
                                ))}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <div
                className="daysInMonth">
            </div>
        </div>
    )
}

export default AccountCalendar;
