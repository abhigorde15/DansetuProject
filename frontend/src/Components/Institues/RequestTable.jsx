const RequestTable = ({ requests, cancelRequest }) => {
  return (
    <div className="p-6 rounded-lg shadow-lg border border-gray-200 w-full bg-blue-100">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Requests Overview</h2>

      {requests.length === 0 ? (
        <p className="text-gray-500 text-center">No requests found. Start by raising a new request.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-b hover:bg-gray-100 transition">
                <td className="p-3">{req.category}</td>
                <td className="p-3">{req.quantity}</td>
                <td className="p-3">{req.price}</td>
                <td
                  className={`p-3 font-semibold ${
                    req.status === "Approved"
                      ? "text-yellow-500"
                      : req.status === "Pending"
                      ? "text-blue-500"
                      : "text-green-500"
                  }`}
                >
                 Pending
                </td>
                <td className="p-3 text-center">
                  {/* {req.status === "Pending" && ( */}
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                      onClick={() => cancelRequest(req.reqId)}
                    >
                      Cancel
                    </button>
                  {/* )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RequestTable;
