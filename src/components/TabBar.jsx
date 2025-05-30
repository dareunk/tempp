import React, {useEffect, useState} from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import './TabBar.css';
import MyIcon from '@/assets/MyIcon.svg?react';
import ChartIcon from '@/assets/ChartIcon.svg?react';
import HomeIcon from '@/assets/HomeIcon.svg?react';
import WeatherIcon from '@/assets/WeatherIcon.svg?react';
import RecommendIcon from '@/assets/RecommendIcon.svg?react';


const tabs = [
    {status:'weather', name: '날씨', icon: WeatherIcon, path:'/team/weather'},
    {status:'recommendation', name: '추천', icon: RecommendIcon, path:'/recommend'},
     {status:'home', name: '홈', icon: HomeIcon, path:'/home'},
    {status:'participationRate', name: '참여율', icon: ChartIcon, path:'/participation'},
    {status:'my', name: '마이', icon: MyIcon, path:'/mypage'}
];

export default function TabBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('home');

    /*먼저 처리하도록 함*/
    useEffect(() => {
        const current = tabs.find((tab) => location.pathname.startsWith(tab.path));
        if (current && current.status !== activeTab) setActiveTab(current.status);
    }, [location.pathname,activeTab]);

    
     return(
        <div className='tab-bar'>
            {tabs.map((tab) => {
               const Icon = tab.icon;
               return(
                <div key={tab.status} className={`tab-item ${activeTab === tab.status?'active':''}`}
                onClick={() => {
                    navigate(tab.path);
                }}>
               <div className="tab-icon"><Icon className={activeTab === tab.status ? 'tab-icon-active' : 'tab-icon-inactive'}/></div>
               <div className={`tab-label ${activeTab === tab.status ?'tab-icon-active' : 'tab-icon-inactive'}`}><p>{tab.name}</p></div>
               </div>
               );
            })}
        </div>
       
    );
}
