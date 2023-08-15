import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar: FC = () => {
  const location = useLocation();
  const isLinkActive = (to: string) => location.pathname === to;
  return (
    <div className="sidebar">
      <nav className="navigationPanel">
        <Link
          className={`navigationItem ${
            isLinkActive("/about") && "navigationItemActive"
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`navigationItem ${
            isLinkActive("/") && "navigationItemActive"
          }`}
          to="/"
        >
          Films
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
