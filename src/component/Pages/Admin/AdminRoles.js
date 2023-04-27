import { useCallback, useEffect, useState } from "react";
import RoleTable from "./Table/RoleTable";
import axios from "axios";
import { serverURL } from "../../../server/serverURL";
import role, { fetchData } from "../../../store/role";
import { useDispatch, useSelector } from "react-redux";

const AdminRoles = () => {
  const [edit, setEdit] = useState(false);
  const [addRole, setAddRole] = useState({ role_id: 0, role: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { data: roles } = useSelector((state) => state.role);

  useEffect(() => {
    dispatch(fetchData());
    setIsSubmitted(false);
  }, [dispatch, isSubmitted]);

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
    setEdit(true);
  };

  const onClickDelete = (roleId) => {
    if (
      window.confirm(`Are you sure you want to delete role id = ${roleId}?`)
    ) {
      axios.delete(`${serverURL()}/roles/deleteRole/${roleId}`);
      setEdit(false);
      setIsSubmitted(!isSubmitted);
      dispatch(fetchData());
      window.location.reload();
    } else{
      return
    }
  };

  const addRolesSubmit = (e) => {
    e.preventDefault();

    if (edit === false) {
      axios.post(`${serverURL()}/roles/createRole`, addRole, {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (edit === true) {
      axios.put(`${serverURL()}/roles/editRole/${addRole.role_id}`, addRole, {
        headers: { "Content-Type": "application/json" },
      });
    }
    setAddRole({ role_id: 0, role: "" });
    setEdit(false);
    setIsSubmitted(!isSubmitted);
    dispatch(fetchData());
    window.location.reload();
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14 border-2 border-gray-200 shadow-sm">
          <div>
            <div className="p-5 sm:px-4 mb-4">
              <form onSubmit={addRolesSubmit}>
                <div>
                  <label
                    htmlFor="input-9"
                    className="block text-md font-medium text-gray-700"
                  >
                    {edit ? "Edit Role" : "Add Role"}
                  </label>
                  <div className="flex items-center mt-1">
                    <input
                      type="text"
                      id="role"
                      className="w-[50%] sm:w-[30%] h-10 px-3 text-md text-gray-700 border border-r-0 rounded-r-none border-black-500 focus:outline-none rounded shadow-sm"
                      placeholder="input role here ..."
                      onChange={inputHandler}
                      value={edit === true ? addRole.role : addRole.role}
                    />
                    <button className="h-10 px-4 text-md bg-alliance border border-l-0 border-alliance rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-alliance-darker hover:border-alliance-darker focus:outline-none">
                      {edit ? "Edit Role" : "Add Role"}
                    </button>
                  </div>
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
