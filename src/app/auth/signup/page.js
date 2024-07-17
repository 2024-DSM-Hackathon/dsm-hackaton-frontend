"use client";
import { signUpApi } from "@/api/auth";
import { imageUpload } from "@/api/imageUpload";
import { Input } from "@/components/input";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Signup() {
  const nav = useRouter();
  const [disable, setDisable] = useState(false);
  const [loginData, setLoginData] = useState({
    registration_number: "",
    name: "",
    id: "",
    pw: "",
    info: "",
    image: "",
    industrySector: "",
  });

  const [mainImg, setMainImg] = useState();

  const { mutate: getImgUrl } = useMutation({
    mutationFn: imageUpload,
    mutationKey: ["imageUpload"],
    onSuccess: (data) => {
      setLoginData({ ...loginData, image: data.url });
      setDisable(false);
    },
  });

  const { mutate: signUpMutate } = useMutation({
    mutationFn: signUpApi,
    mutationKey: ["signUpApi"],
    onSuccess: (data) => {
      nav.push("/auth/signin");
    },
    onError: (error) => {
      console.log("error : ", data);
      alert(error);
    },
  });

  const onSubmit = () => {
    if (
      !loginData.registration_number ||
      !loginData.name ||
      !loginData.id ||
      !loginData.pw ||
      !loginData.info ||
      !loginData.image ||
      !loginData.industrySector
    ) {
      alert("지정된 양식을 다 채워주세요");
      return;
    }
    signUpMutate(loginData);
  };

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  useEffect(() => {
    if (mainImg) {
      setDisable(true);
      getImgUrl(mainImg);
    }
  }, [mainImg]);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col w-[23dvw] gap-7">
        <Input
          onChange={(e) => setMainImg(e.target.files[0])}
          label="회사 대표 사진"
          type="file"
          disable={disable}
        />
        <Input
          value={loginData.registration_number}
          name="registration_number"
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
          value={loginData.industrySector}
          name="industrySector"
          onChange={onChangeData}
          label="분야"
          placeholder="기업 분야"
        />
        <Input
          value={loginData.info}
          name="info"
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
        <button
          className="px-2 py-3 w-[23dvw]  text-white rounded-full bg-primary transition-all hover:bg-[#48DC7D]"
          onClick={onSubmit}
        >
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
