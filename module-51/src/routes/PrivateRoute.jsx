import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { assets } from "../assets/assets";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="h-96 bg-white">
        <div className="flex justify-center items-center h-full ">
          <img
            className=" w-40"
            src={assets.loaderImage}
            alt="image"
          />
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
