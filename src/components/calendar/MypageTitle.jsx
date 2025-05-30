import './CalendarTemplate.css';
import BackIcon from '../Back';

export default function MypageTitle({username, month}){
    return(
        <div className="subtitle-wrapper">
            <div className='title-row'>
                <BackIcon className="back-icon"/>
                 <div className="title-columm">
                        <p className="title">나의 감정날씨</p>
                        <p className="sub-title">{username}의 {month}월 평균 날씨는?</p>
                </div>
            </div>
        </div>
    );
}