import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <Link href="/login">Login Main</Link>
        </li>
        <li>
          <Link href="/login/loginuser">Login Regular User</Link>
        </li>
        <li>
          <Link href="/login/loginadmin">Login Admin</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
