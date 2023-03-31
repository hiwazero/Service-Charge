// import HeaderContent from "../../UI/Navigation/HeaderContent";
import style from "./CustomerForm.module.css";

const CustomerForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
     
      <div
        className={`${style.form} relative shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-9/12 sm:w-2/5`}
      >
        <form onSubmit={submitHandler}>
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div> */}

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_firstName"
              id="firstName"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_firstName"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_username"
              id="lastName"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_username"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last Name
            </label>
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div> */}

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user_type"
            >
              Gender:
            </label>

            <select
              data-te-select-init
              className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div> */}

          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Gender:
            </label>
            <select
              id="gender"
              className="bg-gray-50 border border-0 border-b-2 border-gray-200 text-gray-900 text-sm focus:ring-gray-700 focus:border-gray-700 block w-2/5 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500"
              required
            >
              <option value="Customer">Male</option>
              <option value="Employee">Female</option>
            </select>
            {/* <select
              id="underline_select"
              class="block py-2.5 px-0 w-full sm:w-2/5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              placeholder="test"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> */}
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              htmlFor="birthdate"
            >
              Birthdate
            </label>
            <input
              className="bg-gray-50 border border-0 border-b-2 border-gray-200 text-gray-900 text-sm focus:ring-gray-700 focus:border-gray-700 block w-2/5 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500"
              id="birthdate"
              type="date"
              placeholder="Birthdate"
            />
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_address"
              id="address"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_address"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address
            </label>
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Address"
            />
          </div> */}

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="floating_zipcode"
              id="zipcode"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_zipcode"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Zipcode
            </label>
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="zipcode"
            >
              Zipcode
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="zipcode"
              type="number"
              placeholder="Zipcode"
            />
          </div> */}

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="email"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email_address@gmail.com"
            />
          </div> */}

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="floating_phoneNumber"
              id="phoneNumber"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phoneNumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="number"
              placeholder="09xxxxxxxxx"
            />
          </div> */}

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <button
                className={`${style.loginButton} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomerForm;
