import { useRouter } from "next/dist/client/router";
import React from "react";
import NavLink from "./NavLink";

const Navigation = () => {
  const router = useRouter();
  const links = [
    {
      path: "/",
      label: "Harry",
    },
    { path: "/radio", label: "Radio" },
  ];
  return (
    <nav className="container flex gap-4">
      {links.map((link) => {
        return (
          <NavLink to={link.path} key={link.path}>
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
