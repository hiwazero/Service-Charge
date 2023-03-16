import LoginPage from "./component/Pages/Login/LoginPage"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./component/RootLayout/Root";
import RootAdmin from "./component/RootLayout/RootAdmin"
import CustomerForm from "./component/Pages/Admin/CustomerForm";
import Table from "./component/UI/Table/Table";
import Notification from "./component/Notification";
import TicketTable from "./component/UI/Table/TicketTable";
import Menubar from "./component/UI/Navigation/MenuBar";
import Testing from "./component/Testing"
import HeaderContent from "./component/UI/Navigation/HeaderContent";
import HeaderLogin from "./component/UI/Navigation/HeaderLogin";
import Test from "./component/Test.js";
import Navigation from "./component/UI/Navigation/Navigation";

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <LoginPage/> },
      { 
        path: 'admin', 
        element: <RootAdmin /> ,
        children:[
          { path: 'customerForm', element: <CustomerForm/> },
          { path: 'tickets', element: <TicketTable /> }
        ]
      },
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
