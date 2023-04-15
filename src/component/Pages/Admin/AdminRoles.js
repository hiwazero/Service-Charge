import { useCallback, useEffect, useState } from "react";
import RoleTable from "./Table/RoleTable";
import axios from "axios";
import { serverURL } from "../../../server/serverURL";
import role, { fetchData } from "../../../store/role";
import { useDispatch, useSelector } from "react-redux";

const AdminRoles = () => {
  // const [roles, setRoles] = useState([{ id: 0, role: "" }]);
  const [edit, setEdit] = useState(false);
  const [addRole, setAddRole] = useState({ role_id: 0, role: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { data: roles } = useSelector((state) => state.role);

  // const fetchData = async () => {
  //   const response = await axios.get(`${serverURL()}/roles/getAllRoles`);
  //   const resData = await response.data.data;

  //   if (resData.length === 0) {
  //     return;
  //   }

  //   if (resData !== 0) {
  //     const mappedArray = Object.entries(resData).map(([key, value]) => {
  //       return { id: value.role_id, role: value.role };
  //     });
  //     setRoles(mappedArray);
  //     return;
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  //   setIsSubmitted(false);
  // }, [isSubmitted]);

  // const test = useCallback(() => {
  //   dispatch(fetchData())
  // },[dispatch])

  useEffect(() => {
    // test()
    dispatch(fetchData());
    setIsSubmitted(false);
  }, [isSubmitted]);

  // console.log(roles)
  // console.log(isSubmitted)
  // console.log(addRole);
  // console.log(roles)

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setAddRole((prevState) => ({ ...prevState, [id]: value }));
    console.log("working");
  };

  const onEditHandler = (data) => {
    console.log(data);
    setAddRole((prevState) => ({
      ...prevState,
      role_id: data.role_id,
      role: data.role,
    }));
    // setEditValue({role_id: data.id, role: data.role})
    setEdit(true);
  };

  const onClickDelete = (roleId) => {
    // console.log("working");
    // console.log(roleId);
    axios.delete(`${serverURL()}/roles/deleteRole/${roleId}`);
    setEdit(false);
    setIsSubmitted(!isSubmitted);
  };

  const addRolesSubmit = (e) => {
    e.preventDefault();

    if (edit === false) {
      axios.post(`${serverURL()}/roles/createRole`, addRole, {
        headers: { "Content-Type": "application/json" },
      });
      window.location.reload();
    }

    if (edit === true) {
      axios.put(`${serverURL()}/roles/editRole/${addRole.role_id}`, addRole, {
        headers: { "Content-Type": "application/json" },
      });
    }
    setAddRole({ role_id: 0, role: "" });
    setEdit(false);
    setIsSubmitted(!isSubmitted);
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14 border-2 border-gray-200 shadow-sm">
          <div>
            <div className="p-5 sm:px-4 mb-4">
              <form onSubmit={addRolesSubmit}>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="role"
                    onChange={inputHandler}
                    value={edit === true ? addRole.role : addRole.role}
                  />
                  <button
                    className={`flex bg-alliance hover:bg-alliance-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    type="submit"
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
                    {edit ? "Edit Role" : "Add Role"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <RoleTable
            roles={roles}
            onEditHandler={onEditHandler}
            onClickDelete={onClickDelete}
          />
        </div>
      </div>
    </>
  );
};

export default AdminRoles;
