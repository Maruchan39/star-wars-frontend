import { FC } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <Link to="about">About</Link>
          <Link to="">Films</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
