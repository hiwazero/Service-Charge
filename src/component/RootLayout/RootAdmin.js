import { Outlet } from "react-router-dom";
import Navigation from "../UI/Navigation/Navigation";

const RootAdmin = () => {
    return(
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default RootAdmin