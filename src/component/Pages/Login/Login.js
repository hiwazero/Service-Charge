import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageLogo from "../../../images/asi-logo-invert.svg";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({user_type: 'Customer'});

  const inputHandler = (e) => {
    const { id, value } = e.target;

    setLogin((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    // if(login.user_type === 'Customer'){
    //   navigate('customer/createTicket')
    // }
    // else if(login.user_type === 'Admin'){
    //   navigate('admin/dashboard')
    // }
  };

  return (
    <>
      <section className="h-screen w-screen">
        <div className="h-full w-full flex flex-col sm:flex-row">
          <div className="img-container h-full hidden sm:block w-3/5"></div>

          <div className="flex flex-col w-full sm:w-2/5 p-10">
            <img src={imageLogo} alt="Alliance" />

            <form>
              <div className="relative z-10 w-full my-10 group">
                <input
                  type="username"
                  name="floating_username"
                  id="username"
                  className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  onChange={inputHandler}
                  required
                />
                <label
                  htmlFor="floating_username"
                  className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>

              <div className="relative z-10 w-full my-10 group">
                <input
                  type="password"
                  name="floating_password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  onChange={inputHandler}
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>

                {/* <div className="my-10">
                  <label htmlFor="underline_select" className="sr-only">
                    Underline select
                  </label>
                  <select
                    id="user_type"
                    className="block py-2.5 px-0 w-1/2 text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    onChange={inputHandler}
                  >
                    <option value="Customer">Customer</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div> */}

                <div className="my-10">
                  <div className="flex items-center justify-between">
                    <button
                      className={`my-6 bg-alliance text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline`}
                      type="submit"
                      onClick={loginHandler}
                    >
                      Sign In
                    </button>
                    <a
                      className={`text-alliance inline-block align-baseline font-bold text-md`}
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
