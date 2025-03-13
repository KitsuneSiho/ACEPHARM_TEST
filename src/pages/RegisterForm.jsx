import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Card, ProgressBar } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./RegisterForm.css";

const RegisterForm = () => {
  // 현재 단계 상태 (1: 약관 동의, 2: 회원 정보 입력)
  const [step, setStep] = useState(1);
  
  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    // 약관 동의
    agreeTerms: false,
    agreePrivacy: false,
    
    // 회원 정보
    userID: "",// 유저아이디
    password: "",// 비밀번호
    passwordConfirm: "",
    representativeName: "",// 대표자명
    businessNumber: "",//사업자번호
    companyName: "",// 회사이름
    memberType: "", // 약국, 도매, 병원 중 선택
    address: "",//주소
    phone: "",
    fax: "",
    email: "",
    accountStatus: "pending", //가입 승인 대기상태
    userRole: "user" //유저 권한
  });
  
  // 유효성 검사 오류
  const [errors, setErrors] = useState({});
  
  // 컨테이너 높이 관리를 위한 ref와 상태
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState("auto");
  
  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value
    };
    
    setFormData(newFormData);
    console.log("폼 데이터 업데이트:", newFormData);
    
    // 오류 메시지 초기화
    if (!!errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // 다음 단계로 이동
  const handleNextStep = () => {
    // 약관 동의 단계 유효성 검사
    if (step === 1) {
      const newErrors = {};
      
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = "이용약관에 동의해주세요.";
      }
      
      if (!formData.agreePrivacy) {
        newErrors.agreePrivacy = "개인정보 수집 및 이용에 동의해주세요.";
      }
      
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        console.log("유효성 검사 오류:", newErrors);
        return;
      }
      
      console.log("약관 동의 완료, 다음 단계로 이동");
      setStep(2);
    }
  };
  
  // 이전 단계로 이동
  const handlePrevStep = () => {
    console.log("이전 단계로 이동");
    setStep(1);
  };
  
  // 회원가입 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 회원 정보 입력 단계 유효성 검사
    const newErrors = {};
    
    // 아이디 검사
    if (!formData.userID) {
      newErrors.userID = "아이디를 입력해주세요.";
    }
    
    // 비밀번호 검사
    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }
    
    // 비밀번호 확인 검사
    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    }
    
    // 대표자명 검사
    if (!formData.representativeName) {
      newErrors.representativeName = "대표자명을 입력해주세요.";
    }
    
    // 사업자번호 검사
    if (!formData.businessNumber) {
      newErrors.businessNumber = "사업자번호를 입력해주세요.";
    }
    
    // 회사명 검사
    if (!formData.companyName) {
      newErrors.companyName = "회사명을 입력해주세요.";
    }
    
    // 회원구분 검사
    if (!formData.memberType) {
      newErrors.memberType = "회원구분을 선택해주세요.";
    }
    
    // 주소 검사
    if (!formData.address) {
      newErrors.address = "주소를 입력해주세요.";
    }
    
    // 전화번호 검사
    if (!formData.phone) {
      newErrors.phone = "전화번호를 입력해주세요.";
    }
    
    // 이메일 검사
    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("유효성 검사 오류:", newErrors);
      return;
    }
    
    // 회원가입 요청 처리
    console.log("회원가입 데이터:", formData);
    // 여기에 API 호출 로직 추가
  };
  
  // 약관 동의 단계 렌더링
  const renderAgreementStep = () => {
    return (
      <>
        <h3 className="mb-4">약관 동의</h3>
        
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            label="이용약관에 동의합니다."
            checked={formData.agreeTerms}
            onChange={handleChange}
            isInvalid={!!errors.agreeTerms}
          />
          <Form.Control.Feedback type="invalid">
            {errors.agreeTerms}
          </Form.Control.Feedback>
          <div className="terms-box mt-2 mb-3">
            <p>이용약관 내용...</p>
          </div>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="agreePrivacy"
            name="agreePrivacy"
            label="개인정보 수집 및 이용에 동의합니다."
            checked={formData.agreePrivacy}
            onChange={handleChange}
            isInvalid={!!errors.agreePrivacy}
          />
          <Form.Control.Feedback type="invalid">
            {errors.agreePrivacy}
          </Form.Control.Feedback>
          <div className="terms-box mt-2 mb-3">
            <p>개인정보 수집 및 이용 내용...</p>
          </div>
        </Form.Group>
        
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleNextStep}>
            다음
          </Button>
        </div>
      </>
    );
  };
  
  // 회원 정보 입력 단계 렌더링
  const renderInfoStep = () => {
    return (
      <>
        <h3 className="mb-4">회원 정보 입력</h3>
        
        <Form.Group className="mb-3">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="text"
            name="userID"
            value={formData.userID}
            onChange={handleChange}
            isInvalid={!!errors.userID}
          />
          <Form.Control.Feedback type="invalid">
            {errors.userID}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            isInvalid={!!errors.passwordConfirm}
          />
          <Form.Control.Feedback type="invalid">
            {errors.passwordConfirm}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>대표자명</Form.Label>
          <Form.Control
            type="text"
            name="representativeName"
            value={formData.representativeName}
            onChange={handleChange}
            isInvalid={!!errors.representativeName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.representativeName}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>사업자번호</Form.Label>
          <Form.Control
            type="text"
            name="businessNumber"
            value={formData.businessNumber}
            onChange={handleChange}
            isInvalid={!!errors.businessNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.businessNumber}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>회사명</Form.Label>
          <Form.Control
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            isInvalid={!!errors.companyName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.companyName}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>회원구분</Form.Label>
          <Form.Select
            name="memberType"
            value={formData.memberType}
            onChange={handleChange}
            isInvalid={!!errors.memberType}
          >
            <option value="">선택해주세요</option>
            <option value="pharmacy">약국</option>
            <option value="wholesale">도매</option>
            <option value="hospital">병원</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.memberType}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>주소</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            isInvalid={!!errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>팩스</Form.Label>
          <Form.Control
            type="text"
            name="fax"
            value={formData.fax}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        
        <div className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handlePrevStep}>
            이전
          </Button>
          <Button variant="primary" type="submit">
            회원가입
          </Button>
        </div>
      </>
    );
  };
  
  // 컴포넌트 높이 측정을 위한 useEffect
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [step]);
  
  return (
    <div className="page-container">
      <Card className="register-box">
        <Card.Body>
          <ProgressBar now={step === 1 ? 50 : 100} className="mb-4" />
          
          <motion.div
            initial={{ height: containerHeight }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div ref={containerRef}>
              <Form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 1 ? renderAgreementStep() : renderInfoStep()}
                  </motion.div>
                </AnimatePresence>
              </Form>
            </div>
          </motion.div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterForm;
