import { LogoIcon } from "@/assets/logo";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between w-full px-10 py-2 border-b-2">
        <div className="flex items-center gap-4">
          <LogoIcon size={40} />
          <h3 className="text-2xl font-bold">WANT</h3>
        </div>
      </div>
      {children}
    </div>
  );
}
