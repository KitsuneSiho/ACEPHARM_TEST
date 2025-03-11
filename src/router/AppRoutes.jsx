import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom"
import './AppRoute.css';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Notice from '../pages/Notice';
import OrderList from '../pages/OrderList';
import LoginForm from '../pages/LoginForm';
import RegisterForm from '../pages/RegisterForm';
import RegisterTest from '../pages/RegisterTest';


function AppRoute() { 
    return (
        <BrowserRouter>
            <Routes>
                {/* 홈 기본 경로 */}
                <Route element={<Layout />}>
                <Route path="/" element={<Home/>} /> 
                {/* 페이지들 */}
                <Route path="/notice" element={<Notice/>} />
                <Route path="/orderList" element={<OrderList/>} />
                <Route path="/loginForm" element={<LoginForm/>} />
                <Route path="/registerForm" element={<RegisterForm/>} />
                <Route path="/registerTest" element={<RegisterTest/>} />
                <Route path="*" element={<NotFound404 />}/>  {/* 없는 페이지 처리*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function NotFound404(){
    return (
        <div className='error-container'>
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h2 style={{color: 'wheat', fontWeight: 'bold'}}>⚠️ 404 : 페이지를 찾을 수 없습니다.</h2>
            <p>잘못된 접근이거나 URL이 유효하지 않습니다.</p>
            <Link to="/">
            <button style={{backgroundColor: '#c32c2c'}}>메인으로 이동</button>
            </Link>
            </div>
        </div>
    );
}

export default AppRoute;

//AppRoute.jsx