import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BackIcon from '@/assets/BackIcon.svg?react';
import './Back.css';

export default function Back(){
    const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);
    const handleBack = () => {
            navigate(-1); // 이전 페이지로 이동하기 
            // 어차피 그 경로로 가는 건 메인 추천 페이지 -> 히위 페이지 
        // -1로 충분
        // 그리고 나중에 다른 페이지에서 뒤로 가기 버튼 누를 때 재사용성 측면에서 이렇게 구성하는 게 좋을듯?
    };

    return(
        <div className='back-container' onClick = {handleBack} onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
            <BackIcon className={isHovering ? 'back-icon-active' : 'back-icon-inactive'} style={{width: '100%', height: '100%'}}/>
        </div>
    );
}