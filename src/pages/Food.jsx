import TabBar from "../components/TabBar";
import '@/styles/Recommend.css';
import '@/styles/RecommendDetail.css';
import RecommendTitle from '../components/RecommendTitle';
import RecommendBox from '../components/RecommendBox2';
import TestImg from '@/assets/testImg/foodImg.png';
export default function Food(){
    const username = "세니";
    const category = "음식";
    const content = "양념치킨 맛도리";
    return(
       <div style={{position: 'relative', width: '100%', height: '100dvh'}}>
        <div className ="header" style={{paddingTop: '5dvh', paddingLeft: '5dvh'}}> 
          <RecommendTitle username={username} category={category} status='food'/>
        </div>
          <RecommendBox imgURL={TestImg} status='food' content={content}/>
          <TabBar/>
        </div>
    );
}