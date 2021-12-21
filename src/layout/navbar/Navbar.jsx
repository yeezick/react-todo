import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Link to="/completed">Completed</Link>{" "}
      <Link to="/all">All</Link>
    </div>
  );
};

export default Navbar;
