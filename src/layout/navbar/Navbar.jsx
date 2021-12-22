//! must revisit to add styling & logic for desktop view mode
import { Link } from "react-router-dom";
// utils
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = ({ visibleSidebar, setVisibleSidebar }) => {
  const handleSidebar = () => {
    setVisibleSidebar((prevState) => !prevState);
  };
  return (
    <div className="nav_parent">
      {!visibleSidebar && (
        <>
          <GiHamburgerMenu size={40} onClick={handleSidebar} />
          {/* <Link to="/">Home</Link>
          <Link to="/completed">Completed</Link>
          <Link to="/all">All</Link> */}
        </>
      )}
    </div>
  );
};

export default Navbar;
