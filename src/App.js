import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Pages/Login/Login";
import AdminDashboard from "./component/Pages/Admin/AdminDashboard";
import AccountForm from "./component/Pages/Admin/AccountForm";

import CreateTicket from "./component/Pages/Customer/CreateTicket";

import Testing from "./component/Testing";
import TicketTable from "./component/Pages/Admin/Table/TicketTable";
import AdminTicket from "./component/Pages/Admin/AdminTicket";
import AdminRoles from "./component/Pages/Admin/AdminRoles";
import TicketRecords from "./component/Pages/Customer/TicketRecords";

import EmployeeTicket from "./component/Pages/Employee/EmployeeTicket";
import EmployeeNotifications from "./component/Pages/Employee/EmployeeNotifications";
import RootEmployee from "./component/RootLayout/RootEmployee";
import Tickets from "./component/Pages/Customer/Tickets";
import MainHeader from "./component/UI/Header/MainHeader";
import RootLayout from "./component/RootLayout/RootLayout"
import MainEmployee from "./component/Pages/Employee/MainEmployee";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  // { path: "/test", element: <Test /> },
  // { path: "/testing", element: <Testing /> },
  { path: "/ticket", element: <TicketTable /> },
  { path: "/test", element: <MainHeader /> },
  {
    path: "customer",
    element: <RootLayout />,
    children: [
      { path: "createTicket", element: <CreateTicket /> },
       { path: "ticketApplications", element: <Tickets /> },
      { path: "ticketRecords", element: <TicketRecords /> },
    ],
  },
  {
    path: "admin",
    element: <RootLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "accounts", element: <AccountForm /> },
      { path: "roles", element: <AdminRoles /> },
      { path: "tickets", element: <AdminTicket /> },
    ],
  },
  {
    path: "employee",
    element: <RootLayout />,
    children: [
      { path: "employeeticket", element: <MainEmployee /> },
      { path: "employeenotif", element: <EmployeeNotifications /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
