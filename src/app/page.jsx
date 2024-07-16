import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center w-dvw h-dvh">
      <Image src="/landingbg.png" fill className="z-[-100]" />
      <div className="absolute top-0 left-0 z-[-100] bg-black bg-opacity-75 w-dvw h-dvh" />
      <div className="flex w-[55%] justify-between">
        <div className="flex flex-col text-white">
          <div className="flex gap-3 text-4xl">
            <h1>더 나은 노동 환경을 위한</h1>
            <h1 className="font-bold text-primary">WANT</h1>
          </div>
          <p className="text-lg text-gray-200">
            <b>W</b>orker<b>A</b>uthority<b>A</b>etworking<b>A</b>ask
          </p>
        </div>
        <Link href="/auth/signin">
          <button className="px-10 py-5 self-end  text-white rounded-full bg-primary w-fit transition-all hover:bg-[#48DC7D]">
            기업 시작하기
          </button>
        </Link>
      </div>
    </div>
  );
}
