import TabBar from "../components/TabBar";
import '@/styles/Recommend.css';
/* 공통으로 적용되는 css는 styles -> Recommend.css로 통일 */
import '@/styles/RecommendDetail.css';
import './Saying.css';
import RecommendTitle from '../components/RecommendTitle';
import RecommendBox from "../components/RecommendBox1";
import RecommendSeni from "../components/RecommendSeni";
import SayingSeni from '@/assets/seni/Saying.png';
import SayingIcon from '@/assets/recommend/Saying.svg';

/*1. JWT 연결하면 사용자 데이터 받아와서 sub-title을 user.name으로 변경하기 */
const test = `새로운 일의 시작이나 거래의 성사 등 분주한 시간을 보내게 될 거예요`;

export default function Saying(){
    const username = "세니";
    const category = "명언";
    return(
        <div style={{position: 'relative', width: '100%', height: '100dvh'}}>
              <div className ="wrapper">
              <div className = "header"> 
                <RecommendTitle username={username} category={category} status='saying'></RecommendTitle>
              </div>
              <div className = "content-detail">
                <RecommendSeni imgURL={SayingSeni} status='saying'></RecommendSeni>
                <RecommendBox context={test} status="saying" imgURL={SayingIcon}></RecommendBox>
              </div>
              </div>
              <TabBar/>
        </div>
    );
}