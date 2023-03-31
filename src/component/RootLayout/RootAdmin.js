import { Outlet } from "react-router-dom";
import NavigationAdmin from "../UI/Navigation/NavigationAdmin";

const RootAdmin = () => {
    return(
        <>
            <NavigationAdmin />
            <Outlet />
        </>
    )
}
export default RootAdmin