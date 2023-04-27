const EmptyRow = () => {
  return (
    <>
      <tbody>
        <tr className="text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <td colSpan={8} className="p-3">
            No Records yet.
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default EmptyRow;
