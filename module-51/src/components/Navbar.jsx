import { Link, NavLink } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Shop", link: "/shop" },
    { title: "Contact", link: "/contact" },
    { title: "Dashboard", link: "/user/dashboard" },
  ];

  return (
    <div className="bg-orange-500">
      <div className="navbar w-5/6 mx-auto font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-orange-500"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BIG SHOP</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-md mr-2 bg-orange-600 hover:bg-orange-700 outline-none border-none ">
          <FaLock /> Login
          </Link>
          <div className="hidden md:block">
          <Link to="/register" className="btn btn-md bg-orange-600 hover:bg-orange-700 outline-none border-none ">
          <span className="font-bold text-lg"><FaUserPlus /></span> Register
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
