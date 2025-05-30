import TabBar from "../components/TabBar";
import '@/styles/Recommend.css';
import '@/styles/RecommendDetail.css';
import RecommendTitle from '../components/RecommendTitle';
import RecommendBox from "../components/RecommendBox1";
import RecommendSeni from "../components/RecommendSeni";
import FortuneSeni from '@/assets/seni/Fortune.png';
/*1. JWT 연결하면 사용자 데이터 받아와서 sub-title을 user.name으로 변경하기 */
const test = `오늘은 감정이 들쑥날쑥할 수 있지만, 그 안에서 아주 작은 기쁨 하나가 찾아올 수 있는 날이에요.

무심코 스친 노래 가사, 누군가의 한마디, 따뜻한 햇빛이 당신의 마음을 조용히 어루 만져 줄 거에요. 

스스로를 너무 밀어붙이지 말고, 그냥 '있는 그대로'의 당신을 잠깐 안아주세요.
`;

export default function Fortune(){
    const username = "세니";
    const category = "운세";
    return(
        <div style={{position: 'relative', width: '100%', height: '100dvh'}}>
              <div className ="wrapper">
              <div className = "header"> 
                <RecommendTitle username={username} category={category} status='fortune'></RecommendTitle>
              </div>
              <div className = "content-detail">
                <RecommendSeni imgURL={FortuneSeni} status='fortune'></RecommendSeni>
                <RecommendBox context={test} status="fortune"></RecommendBox>
              </div>
              </div>
              <TabBar/>
        </div>
    );
}