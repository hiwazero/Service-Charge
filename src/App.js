
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerForm from "./component/Pages/Admin/CustomerForm";

// import RootAdmin from "./component/RootLayout/RootAdmin"
// import CustomerForm from "./component/Pages/Admin/CustomerForm";
// import TicketTable from "./component/UI/Table/TicketTable";
// import CreateTicket from "./component/Pages/Customer/CreateTicket";
// import Home from "./component/Pages/Customer/Home";
import Login from "./component/Pages/Login/Login";
import AdminRoot from "./component/RootLayout/AdminRoot";
import AdminDashboard from "./component/Pages/Admin/AdminDashboard";
import AccountForm from "./component/Pages/Admin/AccountForm";
import CustomerRoot from "./component/RootLayout/RootCustomer";

import CreateTicket from "./component/Pages/Customer/CreateTicket"

import Test from "./component/Templates/Test";
import Testing from "./component/Testing"
import TicketTable from "./component/Pages/Admin/Table/TicketTable";
import AdminTicket from "./component/Pages/Admin/AdminTicket";
import AdminRoles from "./component/Pages/Admin/AdminRoles";
import TicketRecords from "./component/Pages/Customer/TicketRecords";


const router = createBrowserRouter([
  { path: '/', element: <Login/> },
  { path: '/test', element: <Test/> },
  { path: '/testing', element: <Testing/> },
  { path: '/ticket', element: <TicketTable/> },
  { 
    path: 'customer',
    element: <CustomerRoot/>,
    children: [
      {path: 'createTicket', element: <CreateTicket />},
      {path: 'ticketRecords', element: <TicketRecords />}
    ]
  },
  { 
    path: 'admin',
    element: <AdminRoot />,
    children: [
      {path: 'dashboard', element: <AdminDashboard />},
      {path: 'accounts', element: <AccountForm />},
      {path: 'roles', element: <AdminRoles />},
      {path: 'tickets', element: <AdminTicket />}
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
