import Back from './Back';
import './RecommendBox1.css';

export default function RecommendBox1({context, status, imgURL=''}){
    return(

        <div className={`context-box ${status==='saying'?'context-box-saying': status === 'fortune'?'context-box-fortune':''}`}>
            {imgURL && <img src={imgURL} className={status}/>}
            <p>{context}</p>
            {imgURL && <img src={imgURL} className={`saying ${status === 'saying' ? 'quote-back': ''}`} />}
        </div>
    );
}