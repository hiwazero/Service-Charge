import { useDispatch, useSelector } from "react-redux";
import SideNavCustomer from "./SideNavCustomer";
import SideNavAdmin from "./SideNavAdmin";
import SideNavEmployee from "./SideNavEmployee";
import { useEffect } from "react";
import { fetchUser } from "../../../store/user";

const SideNav = () => {
  const dispatch = useDispatch()
 
  const showSide = useSelector((state) => state.show.showSide);
  const {userInfo} = useSelector(state => state.user);

  const data = JSON.parse(localStorage.getItem("data"));
  const role_id = data.role_id;

  useEffect(()=>{
    dispatch(fetchUser())
  },[dispatch])

  let sideNav;

  if (role_id === 1) {
    sideNav = <SideNavAdmin />;
  } else if (role_id === 6) {
    sideNav = <SideNavCustomer />;
  } else {
    sideNav = <SideNavEmployee />;
  }

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 ${
          !showSide && "-translate-x-full"
        } transition-transform bg-alliance border-r border-gray-200 sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-alliance">
          <div
            id="dropdown-cta"
            className="p-4 rounded-lg bg-alliance-darker mb-4 flex"
            role="alert"
          >
            <p className="text-md text-white font-bold">
            {userInfo.first_name} {userInfo.last_name}
            </p>
          </div>

          {sideNav}
        </div>
      </aside>
    </>
  );
};

export default SideNav;
