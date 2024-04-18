import { Outlet } from "react-router-dom";
import UserSideBar from "../components/user/UserSideBar";

const UserLayout = () => {
    return (
        <>
            <UserSideBar />
            <Outlet />
        </>
    );
};

export default UserLayout;