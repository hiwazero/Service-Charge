import HeaderCustomer from "../UI/Header/HeaderCustomer"
import { Outlet } from "react-router-dom"

const CustomerRoot = () => {
    return(
        <>
            <HeaderCustomer />
            <Outlet />
        </>
    )
}

export default CustomerRoot