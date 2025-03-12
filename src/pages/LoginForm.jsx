// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";  // 아이콘 추가
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './LoginForm.css';

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);  // 비밀번호 보이기/숨기기 상태 관리
//   const togglePassword = () => setShowPassword(!showPassword);  // 상태 토글 함수

//   return (
//     <div className="page-container">
//         <h2 className="login-header mb-4">LOGIN</h2>
//         <div className="login-box">
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>아이디</Form.Label>
//             <Form.Control type="text" placeholder="아이디를 입력해주세요." />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>비밀번호</Form.Label>
//             <div className="password-container">
//               <Form.Control
//                 type={showPassword ? "text" : "password"}  // 비밀번호 보이기/숨기기
//                 placeholder="비밀번호를 입력해주세요."
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={togglePassword}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}  {/* 아이콘 변경 */}
//               </button>
//             </div>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="w-100 mb-2">로그인</Button>
//           <Button variant="outline-secondary" as={Link} to="/registerTest" className="w-100">회원가입</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;


// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './LoginForm.css';

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [validated, setValidated] = useState(false);
//   const [form, setForm] = useState({
//     username: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});

//   const togglePassword = () => setShowPassword(!showPassword);

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value
//     });
    
//     // 에러가 있다면 입력 시 에러 메시지 제거
//     if (!!errors[field]) {
//       setErrors({
//         ...errors,
//         [field]: null
//       });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // 폼 유효성 검사
//     const newErrors = {};
    
//     // 아이디 검사
//     if (!form.username || form.username === '') {
//       newErrors.username = '아이디를 입력해주세요.';
//     }
    
//     // 비밀번호 검사
//     if (!form.password || form.password === '') {
//       newErrors.password = '비밀번호를 입력해주세요.';
//     }
    
//     // 에러가 있으면 제출 중단
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
    
//     // 여기에 로그인 로직 추가
//     console.log('로그인 시도:', form);
//   };

//   return (
//     <div className="page-container">
//       <h2 className="login-header mb-4">LOGIN</h2>
//       <div className="login-box">
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>아이디</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="아이디를 입력해주세요."
//               value={form.username}
//               onChange={(e) => setField('username', e.target.value)}
//               isInvalid={!!errors.username}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.username}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>비밀번호</Form.Label>
//             <div className="password-container">
//               <Form.Control
//                 type={showPassword ? "text" : "password"}
//                 placeholder="비밀번호를 입력해주세요."
//                 value={form.password}
//                 onChange={(e) => setField('password', e.target.value)}
//                 isInvalid={!!errors.password}
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={togglePassword}
//               >
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}
//               </button>
//               <Form.Control.Feedback type="invalid">
//                 {errors.password}
//               </Form.Control.Feedback>
//             </div>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="w-100 mb-2">로그인</Button>
//           <Button variant="outline-secondary" as={Link} to="/registerTest" className="w-100">회원가입</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";  // InputGroup 추가
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const togglePassword = () => setShowPassword(!showPassword);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    });
    
    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newErrors = {};
    
    if (!form.username || form.username === '') {
      newErrors.username = '아이디를 입력해주세요.';
    }
    
    if (!form.password || form.password === '') {
      newErrors.password = '비밀번호를 입력해주세요.';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    console.log('로그인 시도:', form);
  };

  return (
    <div className="page-container">
      <h2 className="login-header mb-4">LOGIN</h2>
      <div className="login-box">
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              type="text"
              placeholder="아이디를 입력해주세요."
              value={form.username}
              onChange={(e) => setField('username', e.target.value)}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요."
                value={form.password}
                onChange={(e) => setField('password', e.target.value)}
                isInvalid={!!errors.password}
              />
              <Button 
                variant="outline-secondary"
                onClick={togglePassword}
                className="password-toggle-btn"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </Button>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-2">로그인</Button>
          <Button variant="outline-secondary" as={Link} to="/registerTest" className="w-100">회원가입</Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
