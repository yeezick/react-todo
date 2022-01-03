//! must revisit to add styling & logic for desktop view mode
import { Link } from "react-router-dom";
// utils
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

export const Navbar = ({ visibleSidebar, setVisibleSidebar }) => {
  const handleSidebar = () => {
    setVisibleSidebar((prevState) => !prevState);
  };
  return (
    <div className="nav_parent">
      <div className="nav_hamburger">
        <GiHamburgerMenu size={40} onClick={handleSidebar} />
      </div>
      <div className="nav_title">
        <p>not another</p>
        <h1>TODO APP</h1>
      </div>
      {/* <Link to="/">Home</Link>
          <Link to="/completed">Completed</Link>
          <Link to="/all">All</Link> */}
    </div>
  );
};
