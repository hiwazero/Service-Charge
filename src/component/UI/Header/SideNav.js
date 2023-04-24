import { useSelector } from "react-redux";
import SideNavCustomer from "./SideNavCustomer";
import SideNavAdmin from "./SideNavAdmin";
import SideNavEmployee from "./SideNavEmployee";

const SideNav = () => {
  const showSide = useSelector((state) => state.show.showSide);
  const data = JSON.parse(localStorage.getItem("data"));
  const role_id = data.role_id;

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
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-400 mr-2">
              <span className="text-xl font-medium leading-none text-white font-bold">
                T
              </span>
            </div>
            <p className="text-sm text-white font-bold">
              Tiffany Rose Alimusa
            </p>
          </div>

          {sideNav}
        </div>
      </aside>
    </>
  );
};

export default SideNav;
