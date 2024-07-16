"use client";
import { Input } from "@/components/input";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [loginData, setLoginData] = useState({
    businessNumber: "",
    name: "",
    id: "",
    pw: "",
    description: "",
    image: "",
  });

  const [mainImg, setMainImg] = useState();

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col  w-[23dvw] gap-7">
        <Input
          name="businessNumber"
          onChange={(e) => setMainImg(e.target.files[0])}
          label="회사 대표 사진"
          type="file"
        />
        <Input
          value={loginData.businessNumber}
          name="businessNumber"
          onChange={onChangeData}
          label="사업자 번호"
          placeholder="사업자 등록번호 직접 입력 (10자리)"
        />
        <Input
          value={loginData.name}
          name="name"
          onChange={onChangeData}
          label="기업명"
          placeholder="기업명 입력 (사업자등록증명원 기업명)"
        />
        <Input
          value={loginData.description}
          name="description"
          onChange={onChangeData}
          label="회사 설명"
          placeholder="5~50자리"
        />
        <Input
          value={loginData.id}
          name="id"
          onChange={onChangeData}
          label="아이디"
          placeholder="4~20자리 / 영문, 숫자, 특수문자 사용 가능"
        />
        <Input
          value={loginData.pw}
          name="pw"
          onChange={onChangeData}
          label="비밀번호"
          placeholder="8~16자리/영문 대소문자, 숫자, 특수문자 조합"
          type="password"
        />
      </div>
      <div className="flex flex-col gap-1">
        <button className="px-2 py-3 w-[23dvw]  text-white rounded-full bg-primary transition-all hover:bg-[#48DC7D]">
          회원가입
        </button>
        <p className="self-center pr-3 text-sm text-gray-700">
          이미 계정이 있으신가요?{" "}
          <Link href="/auth/signin">
            <u>로그인</u>
          </Link>
        </p>
      </div>
    </div>
  );
}
