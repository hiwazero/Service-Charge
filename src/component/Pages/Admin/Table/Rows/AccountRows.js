import { dateFormatter } from "../../../../../hooks/dateFormatter";

const role = (role_id) => {
  let role = "";

  if (role_id === 1) {
    role = "Admin";
  } else if (role_id === 2) {
    role = "Sales";
  } else if (role_id === 3) {
    role = "Billing-in-Charge";
  } else if(role_id === 4) {
    role = "Collection-in-Charge";
  } else if(role_id === 5) {
    role = "Treasury";
  } else {
    role = "Client";
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

  const onClickReset = () => {
    if(window.confirm(`Are you sure you want to reset password of user = ${props.user.user_id}?`)){
      // deleteTest();
      // dispatch(toggleActions.toggleSet());
    }else{
      return
    }
  }

  return (
    <>
      <tr className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <td className="p-3 text-center">{props.user.user_id}</td>
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
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{props.user.address}</p>
          </div>
        </td>
        <td className="p-3">{props.user.zipcode}</td>
        <td className="p-3">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{props.user.email}</p>
          </div>
        </td>
        <td className="p-3">{props.user.phone_number}</td>

        <td className="p-3">
          <div className="flex align-items-center flex-col sm:flex-row">
            <button
              onClick={toggleEdit}
              className="border border-teal-500 bg-teal-500 text-white rounded-md px-2 py-2 m-1 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
            >
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

            <button
              onClick={onClickReset}
              className="border-yellow-500 bg-yellow-500 text-white rounded-md px-2 py-2 m-1 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
            >
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
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>

            <button
              onClick={onClickDelete}
              className="border border-red-500 bg-red-500 text-white rounded-md px-2 py-2 m-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
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
