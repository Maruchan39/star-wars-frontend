import { FC } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <nav className="navigationPanel">
        <Link className="navigationItem" to="about">
          About
        </Link>
        <Link className="navigationItem" to="">
          Films
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
