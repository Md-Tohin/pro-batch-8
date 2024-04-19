import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import UserDashboard from "./pages/user/UserDashboard.jsx";
import UserProfile from "./pages/user/UserProfile.jsx";
import UserOrder from "./pages/user/UserOrder.jsx";
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",  
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },      
      {
        path: "/user/dashboard", 
        element: <UserDashboard /> 
      },
      {
        path: "/user/orders",
        element: <UserOrder /> 
      },
      { 
        path: "/user/profile",  
        element: <UserProfile /> 
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>  
  </React.StrictMode>
);
