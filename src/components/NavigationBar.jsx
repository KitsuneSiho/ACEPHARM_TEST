// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './NavigationBar.css';
// import acepharmS from '../assets/logo/acepharm_s.svg'; // 로고 이미지 임포트

// const NavigationBar = () => {
//   return (
//       <Navbar expand="lg" className="bg-body-tertiary" id="nav-bar-bg">
//         <Container className="nav-bar-container">
//           {/* 브랜드 로고 */}
//           <Navbar.Brand as={NavLink} to="/">
//             <img src={acepharmS} alt="에이스팜(주))" width="auto" height="50" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto"> {/* 왼쪽 정렬 */}
//               <Nav.Link as={NavLink} to="/notice">공지사항</Nav.Link>
//               <Nav.Link as={NavLink} to="/qna">문의게시판</Nav.Link>
//               <Nav.Link as={NavLink} to="/order">주문하기</Nav.Link>
//               <Nav.Link as={NavLink} to="/wishList">장바구니</Nav.Link>
//             </Nav>
//             <Nav className="ms-auto"> {/* 오른쪽 정렬 */}
//               <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//   );
// };

// export default NavigationBar;

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import acepharmS from '../assets/logo/acepharm_s.svg'; // 로고 이미지 임포트

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="nav-bar-bg">
      <Container className="nav-bar-container">
        {/* 브랜드 로고 */}
        <Navbar.Brand as={NavLink} to="/">
          <img src={acepharmS} alt="에이스팜(주))" width="auto" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> {/* 왼쪽 정렬 */}
            <Nav.Link as={NavLink} to="/notice" className="custom-nav-link">공지사항</Nav.Link>
            <Nav.Link as={NavLink} to="/qna" className="custom-nav-link">문의게시판</Nav.Link>
            <Nav.Link as={NavLink} to="/order" className="custom-nav-link">주문하기</Nav.Link>
            <Nav.Link as={NavLink} to="/wishList" className="custom-nav-link">장바구니</Nav.Link>
          </Nav>
          <Nav className="ms-auto"> {/* 오른쪽 정렬 */}
            <Nav.Link as={NavLink} to="/login" className="custom-nav-link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;


