import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

enum Routes {
  FILMS = "/",
  ABOUT = "/about",
}

export const Sidebar: FC = () => {
  const location = useLocation();
  const isLinkActive = (to: string) => location.pathname === to;
  return (
    <div className="sidebar">
      <nav className="navigationPanel">
        <Link
          className={`navigationItem ${
            isLinkActive(Routes.ABOUT) && "navigationItemActive"
          }`}
          to={Routes.ABOUT}
        >
          About
        </Link>
        <Link
          className={`navigationItem ${
            isLinkActive(Routes.FILMS) && "navigationItemActive"
          }`}
          to={Routes.FILMS}
        >
          Films
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
