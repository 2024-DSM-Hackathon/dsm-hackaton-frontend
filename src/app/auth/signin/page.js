"use client";
import { Input } from "@/components/input";
import Link from "next/link";
import { useState } from "react";

export default function Signin() {
  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex flex-col  w-[20dvw] gap-7">
        <Input
          value={loginData.id}
          name="id"
          onChange={onChangeData}
          label="아이디"
          placeholder="아이디를 입력해주세요"
        />
        <Input
          value={loginData.pw}
          name="pw"
          onChange={onChangeData}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />
      </div>
      <div className="flex flex-col gap-1">
        <button className="px-2 py-3 w-[20dvw]  text-white rounded-full bg-primary transition-all hover:bg-[#48DC7D]">
          로그인
        </button>
        <p className="self-end pr-3 text-sm text-gray-700">
          아직 계정이 없으신가요?{" "}
          <Link href="/auth/signup">
            <u>회원가입</u>
          </Link>
        </p>
      </div>
    </div>
  );
}
