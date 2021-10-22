import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import combineClasses from "../utils/combineClasses";

const NavLink: React.FC<{ to: string }> = ({ to, children }) => {
  const router = useRouter();
  return (
    <div className="HomeLink mb-2">
      <div
        className={combineClasses(
          "inline relative font-black transition-colors",
          router.pathname === to ? "text-blue-500" : "hover:text-blue-500"
        )}
      >
        <Link href={to}>{children}</Link>
        <div
          className={combineClasses(
            "absolute left-0 -bottom-[2px] h-[4px] bg-blue-500 transition-all",
            router.pathname === to ? "w-full" : "w-0"
          )}
        />
      </div>
    </div>
  );
};

export default NavLink;
