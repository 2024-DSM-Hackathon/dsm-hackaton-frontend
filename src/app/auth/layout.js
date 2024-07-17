import { LogoIcon } from "@/assets/logo";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-5 min-h-dvh w-dvw">
      <div className="flex flex-col items-center gap-3 text-4xl">
        <Link href="/">
          <div className="flex justify-center gap-5">
            <LogoIcon size={40} />
            <h1 className="font-extrabold text-primary">WANT</h1>
          </div>
        </Link>
        <h1>더 나은 노동 환경을 위한</h1>
      </div>
      {children}
    </div>
  );
}
