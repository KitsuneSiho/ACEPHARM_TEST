import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>회원정보</p>
      <input type="text" placeholder="아이디" {...register("아이디", {required: true, max: -2, min: 3, maxLength: 20, pattern: /^[a-zA-Z0-9]+$/i})} />
      <input type="password" placeholder="비밀번호" {...register("비밀번호", {required: true, min: 8})} />
      <input type="password" placeholder="비밀번호 확인" {...register("비밀번호 확인", {required: true, min: 8, maxLength: 100})} />

      <p>회사정보</p>
      <input type="text" placeholder="대표자명" {...register("대표자명", {required: true, min: 1})} />
      <input type="text" placeholder="회사명" {...register("회사명", {required: true, min: 1})} />
      <input type="text" placeholder="사업자번호" {...register("사업자번호", {required: true, min: 1})} />
      <input {...register("회원구분", { required: true })} type="radio" value="약국" />
      <input {...register("회원구분", { required: true })} type="radio" value="도매" />
      <input {...register("회원구분", { required: true })} type="radio" value="병원" />
      <input type="text" placeholder="회사주소" {...register("회사주소", {required: true, min: 1})} />
      <input type="tel" placeholder="전화" {...register("전화", {required: true, min: 1})} />
      <input type="tel" placeholder="팩스" {...register("팩스", {required: true, min: 1})} />
      <input type="email" placeholder="이메일" {...register("이메일", {required: true})} />

      <input type="submit" />
    </form>
  );
}