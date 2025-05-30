import './RecommendTitle.css';
import BackIcon from "./Back";

import Song from '@/assets/recommend/Song.svg';
import Book from '@/assets/recommend/Book.svg';
import Fortune from '@/assets/recommend/Fortune.svg';
import Saying from '@/assets/recommend/Saying.svg';
import Food from '@/assets/recommend/Food.svg';

/* Icon 객체 맵을 이용해서 import한 이미지(객체 url) 반환 */ 
const iconMap = {
    Song,
    Book,
    Food,
    Fortune,
    Saying 
}
function getFileName(str){
    if(!str) return ''; 
    const renamedStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return iconMap[renamedStr] || '';
    
}

export default function SubTitle({username, category, status}){
    const fileName = getFileName(status);
    console.log(fileName);
    return(
        <div className="subtitle-wrapper">
        <div className='title-row'>
        <BackIcon className="back-icon"/>
        <div className="title-columm">
            <div className = "title-icon">
                <p className="title">{category}</p>
                <img src={fileName} alt="icon" className="title-with-icon"/>
            </div>
            <p className="sub-title">오늘의 {username}님을 위한 {category} 추천</p>
        </div>
        </div>
        </div>
    );
}