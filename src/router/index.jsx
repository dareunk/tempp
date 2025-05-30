import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import MyPage from '../pages/Mypage';
import Participationrate from '../pages/Participationrate';
import Teamweather from '../pages/Teamweather';
import Recommend from '../pages/Recommend';
import Songs from '../pages/Songs';
import Book from '../pages/Book';
import Food from '../pages/Food';
import Fortune from '../pages/Fortune';
import Saying from '../pages/Saying';

export default function Router(){
    return(
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/participation" element={<Participationrate/>}/>
            <Route path="/team/weather" element={<Teamweather/>}/>
            <Route path="/recommend" element={<Recommend/>}/>
            <Route path='/recommend/songs' element={<Songs/>}/>
            <Route path='/recommend/book' element={<Book/>}/>
            <Route path='/recommend/food' element={<Food/>}/>
            <Route path='/recommend/fortune' element={<Fortune/>}/>
            <Route path='/recommend/saying' element={<Saying/>}/>
        </Routes>
    );
}