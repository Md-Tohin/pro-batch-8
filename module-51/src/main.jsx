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
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AuthRoute from "./routes/AuthRoute.jsx";

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
        element: <PrivateRoute><Contact /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <AuthRoute><Login /></AuthRoute>,
      },
      {
        path: "/register",
        element: <Register />,
      },      
      {
        path: "/user/dashboard", 
        element: <PrivateRoute><UserDashboard /></PrivateRoute>
      },
      {
        path: "/user/orders",
        element: <PrivateRoute><UserOrder /> </PrivateRoute>
      },
      { 
        path: "/user/profile",
        element: <PrivateRoute><UserProfile /> </PrivateRoute>
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
