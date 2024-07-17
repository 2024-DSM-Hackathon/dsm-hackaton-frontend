"use client";
import { loginApi } from "@/api/auth";
import { Input } from "@/components/input";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const nav = useRouter();
  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  })

  const { mutate: loginMutate } = useMutation({
    mutationFn: loginApi,
    mutationKey: ["loginApi"],
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.access_token);
      nav.push("/company");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const onSubmit = () => {
    if (!loginData.id || !loginData.pw) {
      alert("아이디 및 비밀번호를 입력해주세요");
      return;
    }
    loginMutate(loginData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = () => {
    console.log("loginData",loginData)
    if(!loginData.id || !loginData.pw) {
      alert("아이디 및 비밀번호를 입력해주세요")
      return
    }
    loginMutate(loginData)
  }

  const handleChange = (e)=>{
    const {name, value}=  e.target;

    setLoginData({...loginData, [name]:value})
  }

  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex flex-col  w-[23dvw] gap-7">
        <Input
          value={loginData.id}
          name="id"
          onChange={handleChange}
          label="아이디"
          placeholder="아이디를 입력해주세요"
        />
        <Input
          value={loginData.pw}
          name="pw"
          onChange={handleChange}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
        />
      </div>
      <div className="flex flex-col gap-1">
        <button
          className="px-2 py-3 w-[23dvw]  text-white rounded-full bg-primary transition-all hover:bg-[#48DC7D]"
          onClick={onSubmit}
        >
          로그인
        </button>
        <p className="self-center pr-3 text-sm text-gray-700">
          아직 계정이 없으신가요?
          <Link href="/auth/signup">
            <u>회원가입</u>
          </Link>
        </p>
      </div>
    </div>
  );
}
