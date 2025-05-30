import Calendar from "react-calendar";
import './CalendarTemplate.css';
import moment from "moment";

/*
value: 사용자가 현재 선택한 날짜 
next2Label, prev2Label : 년 단위 이동 버튼 
titleContent: 날짜 칸에 보여지는 콘텐츠 titleContent = {addContent}
showNeighboringMonth: 앞뒤 달 이어지는 날짜 보여주기 여부  -> false/true 

*/

export default function CalendarTemplate(){

    return(
        <div className="calendar-container" style={{ position: 'relative', width: '100%', height: '40dvh'}}>
        <Calendar 
        locale="ko"
        showNeighboringMonth={false}
        next2Label = {null}
        prev2Label = {null}
        formatDay={(locale, date) => moment(date).format('D')}
        />
        </div>
   
    );
}