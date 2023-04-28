import BillingTicket from "./BillingTicket";
import CollectionTicket from "./CollectionTicket";
import EmployeeTicket from "./EmployeeTicket";
import TreasuryTicket from "./TreasuryTicket";

const MainEmployee = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const role_id = data.role_id;

  let page;

  if (role_id === 2) {
    page = <EmployeeTicket />;
  } else if (role_id === 3) {
    page = <BillingTicket />;
  } else if (role_id === 4){
    page = <CollectionTicket />
  } else if (role_id === 5){
    page = <TreasuryTicket />
  }

  return <>{page}</>;
};

export default MainEmployee;
