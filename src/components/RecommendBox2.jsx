import './RecommendBox2.css';
export default function RecommendBox2({imgURL, status, content=''}){
    /*default 이미지 생성 후 추가하기 */
    const resultImg = imgURL? imgURL: '';
    if(status === 'food'){
    return(
        <div className="recommend-container">
            <div className='recommend-image'>
                <img src={resultImg} className={status}/>
            </div>
            <div className='recommend-label'><p className="food-name">{content}</p></div>
        </div>
    );
    }else{
        return(
  <div className="recommend-container">
            <div className='recommend-image'>
                <img src={resultImg} className={status}/>
            </div>
            <div className='recommend-label'>
                <p className="book-title">{content.title}</p>
                <p className="book-author">{content.author}</p>
            </div>
        </div>
        );
    }

}