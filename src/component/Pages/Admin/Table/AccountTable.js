import axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";
import { serverURL } from "../../../../server/serverURL";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../../../store/toggle";
import AccountRows from "./Rows/AccountRows";
import { fetchData } from "../../../../store/role";

const AccountTable = (props) => {
  const [users, setUsers] = useState([]);

  const searchRef = useRef();

  const [roleId, setRoleId] = useState("0");

  const dispatch = useDispatch();
  const isToggle = useSelector((state) => state.toggle.isToggle);
  const { data: roles } = useSelector((state) => state.role);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const getData = async () => {
    const response = await axios.get(`${serverURL()}/users/getAll`);
    const data = await response.data.data;
    setUsers(data);
  };

  useEffect(() => {
    if(isToggle === false){
      getData();
      return
    }else{
      getData();
      dispatch(toggleActions.toggleReset());
    }   
  }, [dispatch, isToggle]);



  const onClickDelete = (user) => {
    const deleteTest = async () => {
      try {
        await axios.delete(`${serverURL()}/users/deleteUser/${user.user_id}`);
      } catch (error) {
        console.log(error.message);
      }
    };

    if(window.confirm("Are you sure you want to delete user?")){
      deleteTest();
      dispatch(toggleActions.toggleSet());
    }else{
      return
    }
  };

  const toggleRegister = () => {
    props.toggleRegister();
  };

  const onChangeHandler = (e) => {
    setRoleId(e.target.value);
    if (e.target.value === "0" && searchRef.current.value === "") {
      getData();
    
    } else {
      if (searchRef.current.value === "") {
        axios
          .get(`${serverURL()}/users/filterUser/${e.target.value}`)
          .then((response) => {
            const data = response.data.data;
            setUsers(data);
          })
          .catch((e) => console.log(e.message));
      } else {
        onClickSearch(e.target.value);
      }
    }
  };

  const onClearSearch = () => {
    searchRef.current.value = "";
    setRoleId("0");
    getData();
  };

  const onClickSearch = (role) => {
    var search = searchRef.current.value;
    var roleId = parseInt(role);

    var url = ``;

    if (role === undefined || roleId === 0) {
      url = `${serverURL()}/users/searchUser/?search=${search}`;
    }
    if (roleId > 0) {
      url = `${serverURL()}/users/searchUser/?search=${search}&role_id=${roleId}`;
    }

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setUsers(data);
      })
      .catch((e) => console.log(e.message));

    // useEffect(() => {
    //   onClickSearch();
    // }, [onClickSearch]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // setSearch(searchRef.current.value)
      onClickSearch();
      console.log("enter is working");
    }
  };

  const rows = users.map((user) => {
    return (
      <AccountRows
        key={user.user_id}
        user={user}
        onClickDelete={onClickDelete}
        toggleEdit={props.toggleEdit}
        toggleRegister={toggleRegister}
      />
    );
  });

  return (
    <>
      <div className="flex px-2 sm:px-4">
        <div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <button
                className={`flex bg-alliance hover:bg-alliance-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                onClick={toggleRegister}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
                Add Account
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-2 sm:px-4 justify-between">
        <div className="relative flex">
          <input
            className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-alliance focus:border-alliance focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search..."
            ref={searchRef}
            onKeyDown={handleKeyPress}
          />
          <div
            className="absolute right-0 inset-y-0 flex items-center"
            onClick={onClearSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div
            className="absolute left-0 inset-y-0 flex items-center"
            // onClick={onClickSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="w-[40%] sm:w-[20%] mx-2">
          <label
            className="block text-sm font-medium text-gray-900 dark:text-black"
            htmlFor="birthdate"
          >
            Sort by role
          </label>
          <select
            id="role_id"
            className="block py-0 px-0 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={onChangeHandler}
            value={roleId}
          >
            <option value={0}>none</option>
            {roles.map((role) => (
              <option key={role.role_id} value={role.role_id}>
                {role.role}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container flex justify-center h-screen w-full w3-animate-bottom">
        <div className="col-span-12 w-full p-2 sm:p-4">
          {/* lg:overflow-visible */}
          <div className="overflow-auto h-screen">
            <table className="table text-gray-400 border-collapse space-y-6 text-sm w-full">
              <thead className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <tr className="">
                  <th className="p-3 text-left">ID Number</th>
                  <th className="p-3 text-left">First Name</th>
                  <th className="p-3 text-left">Middle Name</th>
                  <th className="p-3 text-left">Last Name</th>
                  <th className="p-3 text-left">Gender</th>
                  <th className="p-3 text-left">Birthdate</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Address</th>
                  <th className="p-3 text-left">Zipcode</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone Number</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountTable;
