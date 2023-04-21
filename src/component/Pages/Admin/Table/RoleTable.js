import Rows from "./Rows/Rows";

const RoleTable = (props) => {
  const roles = props.roles;

  const rolesData = props.roles.map((role) => {
    return (
      <Rows key={role.role_id} role={role} onEditHandler={props.onEditHandler} onClickDelete={props.onClickDelete} />
    );
  });

  return (
    <>
      <div className="container flex justify-center min-h-screen w-full w3-animate-bottom">
        <div className="col-span-12 w-full p-2 sm:p-4">
          {/* lg:overflow-visible */}
          <div className="overflow-auto">
            <table className="table text-gray-400 border-collapse space-y-6 text-sm w-full">
              <thead className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <tr className="">
                  <th className="p-3 text-left">Role ID</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rolesData}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleTable;
