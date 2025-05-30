import TabBar from "../components/TabBar";
import './Mypage.css';
import MypageTitle from '../components/calendar/MypageTitle';
import Calendar from "../components/calendar/CalendarTemplate";

export default function Mypage(){
    const username = "세니";
    const month = 6;

    return(
        <div style={{position: 'relative', width: '100%', height: '100dvh'}}>
            <div className ="wrapper">
              <div className = "header-type2"> 
                <MypageTitle username={username} month={month}/>
                <div className="weather-box"/>
              </div>
            <Calendar/>
            <TabBar/>
        </div>
        </div>
    );
}