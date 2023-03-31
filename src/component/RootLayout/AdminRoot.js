import { Outlet } from "react-router-dom"
import HeaderAdmin from "../UI/Header/HeaderAdmin"
const AdminRoot = () => {
    return(
        <>
            <HeaderAdmin/>
            <Outlet />
        </>
    )
}

export default AdminRoot