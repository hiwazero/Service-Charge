import TreasuryTable from "./Table/TreasuryTable";

const TreasuryTicket = () => {
  return (
    <>
      <div className="p-4 sm:ml-64 w3-animate-bottom">
        <div className="p-4 rounded-lg border-2 border-gray-200 shadow-sm mt-14 h-screen">
            <TreasuryTable />
        </div>
      </div>
    </>
  );
};
export default TreasuryTicket
