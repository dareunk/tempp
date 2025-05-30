import TabBar from "../components/TabBar";
import '@/styles/Recommend.css';
import './Recommend.css';
import { useNavigate } from "react-router-dom";
/*
import Song from '@/assets/Song.svg?react';
import Food from '@/assets/Food.svg?react';
import Book from '@/assets/Book.svg?react';
import Quote from '@/assets/Quote.svg?react';
import Fortune from '@/assets/Fortune.svg?react';
*/

/* 성능 저하가 있기 때문에 componenet로 사용하지 않고, 직접 탑재하는 방식을 사용 */
import Song  from '@/assets/recommend/Song.svg';
import Food from '@/assets/recommend/Food.svg';
import Book from'@/assets/recommend/Book.svg';
import Saying from '@/assets/recommend/Saying.svg';
import Fortune from '@/assets/recommend/Fortune.svg';

/* react component로 사용하는 경우가 아니라 단순 이미지로 처리하는 경우에는 직접 경로를 이용해서 사용하는 것이 좋음 -> 성능이 안 좋음) */
/* 또는 require 이용 -> 코드 가독성을 위해 이 방법 채택 */


const recommendations = [
    {status: 'song', name: '노래', color: '#C5E8F5', path:'/recommend/songs', icon:Song },
    {status: 'food', name: '음식', color: '#FEEACD', path:'/recommend/food', icon: Food},
    {status: 'book', name: '도서', color: '#FCF2DD', path:'/recommend/book', icon: Book},
    {status: 'quote', name: '명언', color: '#E6E7F8', path: '/recommend/saying', icon: Saying},
    {status: 'fortune', name: '운세', color: '#FED7C9', path: '/recommend/fortune', icon: Fortune}
];
export default function Recommend(){
    const navigate = useNavigate();
    return(
        /* weather-box와 content의 width 길이를 맞추기 위해서 wrapper 생성 */
    <div style={{position: 'relative', width: '100%', height: '100dvh'}}>
        <div className ="wrapper">
        <div className = "header">
            <p className="title">오늘의 추천</p>
            <div className="weather-box"></div>
        </div>
        <div className = "content">
            {recommendations.map((item, idx)=> {
              return(
                <div className="recommendation-box" key={idx} style={{backgroundColor: item.color, cursor:'pointer'}}
                onClick={() => {navigate(item.path)}}>
                <img src={item.icon}  className="recommend-icon"/>
                <div className="recommend-icon-label">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <TabBar/>
    </div>
    );
}