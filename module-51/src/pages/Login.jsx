import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserLoginEmailAndPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate('/user/dashboard');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="text-center my-8 md:mb-10 md:mt-12 text-3xl font-bold">
        Customer <span className="text-orange-500">Login</span>
      </div>
      <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center mb-8 mx-5 md:mx-0 md:mb-16">
        <div className="md:w-1/3 max-w-sm">
          <img
            src={assets.loginPhoto}
            alt="Sample image"
            className="h-[300px]"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1">Sign in with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9  rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <BiLogoFacebook
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
            <button
              type="button"
              className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <AiOutlineTwitter
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Or
            </p>
          </div>
          <form onSubmit={handleUserLoginEmailAndPassword} method="post">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="email"
              placeholder="Email Address"
              name="email"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
              name="password"
            />
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a
                className="text-orange-600 hover:text-orange-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-orange-600 hover:bg-orange-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-red-600 hover:underline hover:underline-offset-4"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
