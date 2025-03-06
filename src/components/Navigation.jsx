import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <Navbar className="top-nav-custom" bg="light" expand="lg">
      <Container className="custom-container">
        <Navbar.Brand as={Link} to="/" className="nav-brand">ACE PHARM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="me-auto">
        <NavLink to="notice" className={({ isActive }) => 
        isActive ? "nav-link custom-nav-link active" : "nav-link custom-nav-link"
          }>공지사항</NavLink>
        <NavLink to="orderList" className={({ isActive }) => 
        isActive ? "nav-link custom-nav-link active" : "nav-link custom-nav-link"
          }>주문하기</NavLink>
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="login" className="custom-nav-link">로그인</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

//Navigation.jsx