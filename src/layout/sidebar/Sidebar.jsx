import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ visibleSidebar, setVisibleSidebar }) => {
  const handleSidebar = () => {
    setVisibleSidebar((prevState) => !prevState);
  };
  return (
    <div
      className={
        visibleSidebar ? "sidebar active-sidebar" : "sidebar inactive-sidebar"
      }
    >
      <GiHamburgerMenu size={40} onClick={handleSidebar} />
      <Link to="/">Home</Link>
      <Link to="/completed">Completed</Link>
      <Link to="/all">All</Link>
    </div>
  );
};

export default Sidebar;
