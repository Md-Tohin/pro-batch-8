import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default Layout;