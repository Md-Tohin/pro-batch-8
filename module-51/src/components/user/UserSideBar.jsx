import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { FaUserEdit } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserSideBar = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User Logout Successfully"))
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <aside className="">
        <div className="stats stats-vertical shadow w-full font-semibold">
          <div className="stat bg-orange-500">
            <div className="stat-title text-center">
              <img src={assets.profilePhoto} alt="Image" className="w-16 mx-auto border border-red-500 rounded-md pb-1" />
              <span className="text-lg font-bold text-stone-700 mr-2">                
              <span> Md. Tohin</span>
              </span>
            </div>
          </div>
          <Link to="/user/dashboard">
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                  <FaHome />
                </span>{" "}
                Dashboard
              </div>
            </div>
          </Link>
          <Link to="/user/orders">
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                <FaList />
                </span>{" "}
                My Orders
              </div>
            </div>
          </Link>
          <Link to="/user/profile">
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                <FaUserEdit />
                </span>{" "}
                Profile
              </div>
            </div>
          </Link>
          <Link to="/user/dashboard">
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                  <FaHome />
                </span>{" "}
                Change Password
              </div>
            </div>
          </Link>
          <Link onClick={handleLogOut}>
            <div className="stat">
              <div className="stat-title flex">
                {" "}
                <span className="text-xl font-bold text-stone-800 mr-2">
                  <FaHome />
                </span>{" "}
                Logout
              </div>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default UserSideBar;
