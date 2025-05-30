import TabBar from "../components/TabBar";
import '@/styles/Recommend.css';
import '@/styles/RecommendDetail.css';
import RecommendTitle from '../components/RecommendTitle';
import RecommendBox from "../components/RecommendBox2";
import TestImg from "@/assets/testImg/bookImg.jpeg";

export default function Book(){
    const username = "세니";
    const category = "도서";
    const title = "어른의 기억법";
    const author = "김혜남";

    const book = {title, author};
    book.title = title;
    book.author = category;

    return(
         <div style={{position: 'relative', width: '100%', height: '100dvh'}}>
          <div className ="header" style={{paddingTop: '5dvh', paddingLeft: '5dvh'}}> 
            <RecommendTitle username={username} category={category} status='book'/>
          </div>
            <RecommendBox imgURL={TestImg} status='book' content={book}></RecommendBox>
            <TabBar/>
          </div>
    );
}