import { useRef, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const emailRef = useRef("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //  login
  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    const formData = event.target;
    const email = formData.email.value;
    const password = formData.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        
        //  email verify
        if (!user.emailVerified) {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            setSuccessMsg("Please check your email to verify your account.");
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
        }
        else{
          setSuccessMsg("User successfully Logged!");
        }        
        formData.reset();
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg("User login Failed!");
        console.error("Error: " + errorCode + " " + errorMessage);
      });
  };

  //  forget password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if(email == ''){
      setErrorMsg("Please enter your email!");      
      return;
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      setErrorMsg("Please enter a valid email!");
      return;
    }

    sendPasswordResetEmail(auth, email)
    .then(() => {
       setSuccessMsg("Password reset link sent!");
    })
    .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMsg("Password reset failed!");
       console.error("Error: " + errorCode + " " + errorMessage);
     })
  }

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1">Sign in with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
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
          {
            successMsg && <>
            <div role="alert" className="alert alert-success mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Success: {successMsg}</span>
            </div>
            </>
          }
          {errorMsg && (
            <>
              <div role="alert" className="alert alert-error mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error! {errorMsg}</span>
              </div>
            </>
          )}
          <form onSubmit={handleLogin} method="post">
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="email"
              placeholder="Email Address"
              name="email"
              ref={emailRef}
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
              <a onClick={handleForgetPassword}
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4 cursor-pointer"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
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
