import { Link } from "react-router-dom";
const Navbar = () => (
  <nav className="navbar">
    <div className="logo">B.Tech TechBlog</div>
    <div className="nav-links">
      <Link to="/" className="nav-item">
        Home
      </Link>
    </div>
  </nav>
);

export default Navbar;
