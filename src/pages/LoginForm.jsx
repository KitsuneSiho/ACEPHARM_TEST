import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  return (
    <div className="page-container">
        <h2 className="text-center mb-4">로그인</h2>
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="email" placeholder="아이디를 입력해주세요." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="비밀번호를 입력해주세요." />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-2">로그인</Button>
          <Button variant="outline-secondary" as={Link} to="/register" className="w-100">회원가입</Button>
        </Form>
      </div>
  );
}

export default LoginForm;
