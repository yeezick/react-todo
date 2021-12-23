import { Link } from "react-router-dom";
// utils
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { BsCheckSquare, BsListTask } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

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
      <IoIosClose size={50} onClick={handleSidebar} />
      <div className="sidebar_link_wrapper">
        <div className="sidebar_link" onClick={handleSidebar}>
          <AiOutlineHome size={40} color="white" />
          <Link to="/">Home</Link>
        </div>

        <div className="sidebar_link" onClick={handleSidebar}>
          <BsCheckSquare size={30} />
          <Link to="/completed">Completed</Link>
        </div>

        <div className="sidebar_link" onClick={handleSidebar}>
          <BsListTask size={40} color="white" />
          <Link to="/all">All</Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
