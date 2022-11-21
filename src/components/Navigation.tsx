import NavLink from "./NavLink";
import { useRouter } from "next/dist/client/router";

const Navigation = () => {
  const router = useRouter();
  const links = [
    {
      path: "/",
      label: "Home",
    },
    { path: "/career", label: "My career" },
  ];
  return (
    <nav className="container flex gap-4 print:hidden">
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
