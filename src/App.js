import LoginPage from "./component/Pages/Login/LoginPage"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./component/RootLayout/Root";
import CustomerForm from "./component/Pages/Admin/CustomerForm";
import Table from "./component/UI/Table/Table";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/' , element: <LoginPage />},
      {path: '/CustomerForm' , element: <CustomerForm />},
      {path: '/Table', element: <Table />}
    ]
  }
])

function App() {
  return (
    // <div className="App">
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
