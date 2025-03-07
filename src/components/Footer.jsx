import React from "react";
import './Footer.css'; // 스타일을 별도 파일로 관리
import acepharmF from '../assets/logo/acepharm_f.svg'; // SVG 파일 임포트

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="company-name">회사명: (주)에이스팜 주식회사</p>
        <p>TEL: 043) 233-2022 | FAX: 043) 233-2024</p>
        <p>ADDRESS: 충북 청주시 서원구 2 순환로 1505, 1층</p>
        <p>주문사이트: <a href="http://www.에이스팜.com" target="_blank" rel="noopener noreferrer">www.에이스팜.com</a></p>
      </div>
      <img src={acepharmF} alt="에이스팜(주)" className="logo" />
      <div className="copyright">
        &copy; {new Date().getFullYear()} (주)에이스팜 주식회사. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
