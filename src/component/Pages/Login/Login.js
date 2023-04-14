import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageLogo from "../../../images/asi-logo-invert.svg";
import "./Login.css";
import axios from "axios";

import { Base64 } from "js-base64";
import { basicAuth } from "../../../server/basicAuth";


const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState(undefined);
  const [error, setError] = useState(undefined)

  const inputHandler = (e) => {
    const { id, value } = e.target;

    setLoginInfo((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("username", loginInfo.username);
    formData.append("password", loginInfo.password);

    const headers = {
      Authorization: `Basic ${Base64.encode(basicAuth())}`,
    };

    axios
      .post(
        "http://localhost:8080/spring-hibernate-jpa/oauth/token",
        formData,
        { headers }
      )
      .then((res) => {
        localStorage.setItem("data", JSON.stringify(res.data));
        let role = res.data.role_id;
        if(role === 1){
          navigate('admin/dashboard')
        }else if(role === 6){
          navigate('customer/createTicket')
        }
        
      })
      .catch((e) => {
        setError('Invalid username or password')
        console.log(e);
      })
  };

  const errorMessage = <p className="text-red-700">{error}</p>


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

                {error && errorMessage}

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
