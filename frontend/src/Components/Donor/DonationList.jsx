const DonationList = () => {
  const donations = [
    { item: "10 kg Rice", institute: "Orphanage A", status: "Delivered" },
    { item: "5 Liters Oil", institute: "Elderly Home B", status: "In Progress" },
  ];

  return (
    <section className="bg-blue-50 p-6 mt-5 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">
        Recent Donations
      </h3>
      <ul className="space-y-3">
        {donations.map((donation, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-blue-100 shadow-md"
          >
            <div>
              <span className="font-semibold text-blue-900">
                {donation.item}
              </span>
              <p className="text-sm text-blue-700">
                → {donation.institute}
              </p>
            </div>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                donation.status === "Delivered"
                  ? "bg-green-200 text-green-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {donation.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DonationList;
