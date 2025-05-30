import './RecommendSeni.css'
export default function RecommendSeni({imgURL, status}){
    return(
        <div className='recommend-seni'>
            <img src={imgURL} alt={status}/>
        </div>
    );
}