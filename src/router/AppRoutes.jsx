import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom"
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Notice from '../pages/Notice';
import OrderList from '../pages/OrderList';
import LoginForm from '../pages/LoginForm';


function AppRoute() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                <Route path="/" element={<Home/>} /> {/* 홈 기본 경로 */}
                <Route path="/notice" element={<Notice/>} />
                <Route path="/orderList" element={<OrderList/>} />
                <Route path="/loginForm" element={<LoginForm/>} />
                <Route path="*" element={<NotFound404 />}/>  {/* 없는 페이지 처리*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function NotFound404(){
    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h2>404 - 페이지를 찾을 수 없습니다.</h2>
            <p>잘못된 접근이거나 URL이 잘못 되었습니다.</p>
            <Link to="/">
            <button>메인으로 이동</button>
            </Link>
            </div>
    );
}

export default AppRoute;

//AppRoute.jsx