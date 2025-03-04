import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

function Route() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} /> {/* 홈 기본 경로 */}
                // 라우트 경로 처리

                <Route path="*" element={<NotFound404 />}/>  {/* 없는 페이지 처리*/}
            </Routes>
        </BrowserRouter>
    );
}

function NotFound404(){
    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h2>404 - 페이지를 찾을 수 업습니다.</h2>
            <p>잘못된 접근이거나 URL이 잘못 되었습니다.</p>
            <a href="/">
                <button>메인으로 이동</button>
            </a>
            </div>
    );
}