import { useState } from "react";
import imagePath from "../../images/asi-logo-light.png";
import HeaderCustomer from "../UI/Header/HeaderCustomer"

const Test = () => {
  const [showSide, setShowSide] = useState(false);

  const showHandler = () => {
    setShowSide((prevState) => !prevState);
  };

  return (
    <>
      <HeaderCustomer />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 shadow-sm rounded-lg mt-14">
          <p>Test</p>
        </div>
      </div>
    </>
  );
};

export default Test;
