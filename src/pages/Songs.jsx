import { useEffect } from "react";
import TabBar from "../components/TabBar";
import './Songs.css'
import RecommendTitle from "../components/RecommendTitle";
import '@/styles/Recommend.css';
import '@/styles/RecommendDetail.css';
import axios from "axios";
export default function Songs(){
    const username = "세니";
    const category = "PLAYLIST";
    /* 서버로 API <get> */
    /*
    const [songs, setSongs] = useState([]);
    useEffect(()=>{
        axios.get('/temp') // 서버 주소로 교체
        .then(res => setSongs(res.data.music)) // 이것도 api return 데이터 형태에 맞춰서 교체 필요
        .catch(error => console.log('failed to load songs:', error));
    },[]);
    */

    const test = [
    {
      "title": "좋은 날",
      "artist": "아이유",
      "imageUrl": "https://i.scdn.co/image/ab67616d0000b27315cf3110f19687b1a24943d1",
      "youtubeId": "NbmtT4n2hyk",
      "musicLength": 238000
    },
    {
      "title": "좋은 날",
      "artist": "아이유",
      "imageUrl": "https://i.scdn.co/image/ab67616d0000b27315cf3110f19687b1a24943d1",
      "youtubeId": "NbmtT4n2hyk",
      "musicLength": 238000
    },
        {
      "title": "좋은 날",
      "artist": "아이유",
      "imageUrl": "https://i.scdn.co/image/ab67616d0000b27315cf3110f19687b1a24943d1",
      "youtubeId": "NbmtT4n2hyk",
      "musicLength": 238000
    },
        {
      "title": "좋은 날",
      "artist": "아이유",
      "imageUrl": "https://i.scdn.co/image/ab67616d0000b27315cf3110f19687b1a24943d1",
      "youtubeId": "NbmtT4n2hyk",
      "musicLength": 238000
    },
        {
      "title": "좋은 날",
      "artist": "아이유",
      "imageUrl": "https://i.scdn.co/image/ab67616d0000b27315cf3110f19687b1a24943d1",
      "youtubeId": "NbmtT4n2hyk",
      "musicLength": 238000
    },
        {
      "title": "좋은 날",
      "artist": "아이유",
      "imageUrl": "https://i.scdn.co/image/ab67616d0000b27315cf3110f19687b1a24943d1",
      "youtubeId": "NbmtT4n2hyk",
      "musicLength": 238000
    },    {
      "title": "좋은 날",
      "artist": "아이유",
      "imageUrl": "https://i.scdn.co/image/ab67616d0000b27315cf3110f19687b1a24943d1",
      "youtubeId": "NbmtT4n2hyk",
      "musicLength": 238000
    }
    
    ];

    return(
        <div style={{position: 'relative', width: '100%', height: '100dvh'}}>
          <div className ="wrapper">
          <div className = "header"> 
             <RecommendTitle username={username} category={category} status='song'></RecommendTitle>
          </div>
          <div className = "music-container">
            <div className = "music-inner-container">
            {test.map((music, idx) => (
                <div className="music-content" key={idx}>
                    <img src={music.imageUrl} alt={music.title} className="album-img"/>
                    <div className="music-info">
                        <p className="music-title">{music.title}</p>
                        <p className="music-artist">{music.artist}</p>
                    </div>
                </div>
            ))}
            </div>
          </div>
          </div>
          <TabBar/>
      </div>
    );
}