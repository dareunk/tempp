/* 서버 API 연결 공통 설정 파일 */

import axios from 'axios';

const instance = axios.create({
    baseURL: 'temp',
    timeout: 5000,
    headers: {
        'Content-Type' : 'application/json',
    },
});

export default instance;