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
          router.pathname === to ? "text-violet-400" : "hover:text-violet-400"
        )}
      >
        <Link href={to}>{children}</Link>
        <div
          className={combineClasses(
            "absolute left-0 -bottom-[3px] h-[4px] bg-violet-400  transition-all",
            router.pathname === to ? "w-full" : "w-0"
          )}
        />
      </div>
    </div>
  );
};

export default NavLink;
