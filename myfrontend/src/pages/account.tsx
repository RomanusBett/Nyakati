import AccountCalendar from "../components/calendar";
import UsrProfile from "../components/usrProfile";
import './pages.css';

const Account = ()=>{
    return(
        <div className="account-container">
            <UsrProfile />
            <AccountCalendar />
        </div>
    )
}
export default Account;