import { useEffect, useState } from "react";
import axios from "axios";

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = localStorage.getItem("token"); // 🔹 JWT Token from localStorage

        const response = await axios.get("http://localhost:8080/api/user/orders", {
          headers: { Authorization: `${token}` }, // 🔹 Authorization Header
        });

        setDonations(response.data);
      } catch (err) {
        setError("Failed to load donations");
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="bg-blue-50 p-6 mt-5 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">
        Recent Donations
      </h3>
      {donations.length === 0 ? (
        <p className="text-center text-gray-500">No donations found.</p>
      ) : (
        <ul className="space-y-3">
          {donations.map((donation, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-blue-100 shadow-md"
            >
              <div>
                <span className="font-semibold text-blue-900">
                  {donation.amount} {donation.currency}
                </span>
                <p className="text-sm text-blue-700">
                  → {donation.receipt}
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
      )}
    </section>
  );
};

export default DonationList;
