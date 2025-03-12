import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";  // 아이콘 추가
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);  // 비밀번호 보이기/숨기기 상태 관리
  const togglePassword = () => setShowPassword(!showPassword);  // 상태 토글 함수

  return (
    <div className="page-container">
        <h2 className="login-header mb-4">LOGIN</h2>
        <div className="login-box">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" placeholder="아이디를 입력해주세요." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <div className="password-container">
              <Form.Control
                type={showPassword ? "text" : "password"}  // 비밀번호 보이기/숨기기
                placeholder="비밀번호를 입력해주세요."
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}  {/* 아이콘 변경 */}
              </button>
            </div>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-2">로그인</Button>
          <Button variant="outline-secondary" as={Link} to="/registerTest" className="w-100">회원가입</Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
