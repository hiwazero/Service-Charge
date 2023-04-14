import { dateFormatter } from "../../../../../hooks/dateFormatter";

const role = (role_id) => {
  let role = "";

  if (role_id === 1) {
    role = "Admin";
  } else if (role_id === 2) {
    role = "Customer";
  } else if (role_id === 3) {
    role = "Test";
  }

  return role;
};

const AccountRows = (props) => {
  const onClickDelete = () => {
    props.onClickDelete(props.user);
  };

  const toggleEdit = () => {
    props.toggleEdit(props.user);
  };

  return (
    <>
      <tr className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <td className="p-3">{props.user.user_id}</td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{props.user.first_name}</p>
          </div>
        </td>

        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{props.user.middle_name}</p>
          </div>
        </td>

        <td className="p-3">{props.user.last_name}</td>
        <td className="p-3">{props.user.gender}</td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{dateFormatter(props.user.birth_date)}</p>
          </div>
        </td>
        <td className="p-3">
          {role(props.user.role_id)}
          {props.user.role_id}
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{props.user.address}</p>
          </div>
        </td>
        <td className="p-3">{props.user.zipcode}</td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{props.user.email}</p>
          </div>
        </td>
        <td className="p-3">{props.user.phone_number}</td>

        <td className="p-3">
          <div className="flex align-items-center flex-col sm:flex-row">
            <button onClick={toggleEdit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>

            <button onClick={onClickDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AccountRows;
