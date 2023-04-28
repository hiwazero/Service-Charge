import CollectionTable from "./Table/CollectionTable";

const CollectionTicket = () => {
  return (
    <>
      <div className="p-4 sm:ml-64 w3-animate-bottom">
        <div className="p-4 rounded-lg border-2 border-gray-200 shadow-sm mt-14 h-screen">
            <CollectionTable />
        </div>
      </div>
    </>
  );
};

export default CollectionTicket;
