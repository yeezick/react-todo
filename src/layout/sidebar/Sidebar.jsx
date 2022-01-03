import { Link } from "react-router-dom";
// utils
import { AiOutlineHome } from "react-icons/ai";
import { BsCheckSquare, BsListTask } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

export const Sidebar = ({ visibleSidebar, setVisibleSidebar }) => {
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
      <div className="nav_title">
        <p>not another</p>
        <h1>TODO APP</h1>
      </div>
      <div className="sidebar_link_wrapper">
        <div className="sidebar_link" onClick={handleSidebar}>
          <AiOutlineHome size={40} color="white" />
          <Link to="/">Incomplete</Link>
        </div>

        <div className="sidebar_link" onClick={handleSidebar}>
          <BsCheckSquare size={30} />
          <Link to="/completed">Completed</Link>
        </div>

        <div className="sidebar_link" onClick={handleSidebar}>
          <BsListTask size={40} color="white" />
          <Link to="/all">All Todos</Link>
        </div>
      </div>
    </div>
  );
};
