import { useState } from "react";
import FilterComponent from "../Filter/Filter";

const hardcodedDonations = [
  { id: 1, category: "Food", location: "Delhi", urgency: "High", image: "/Food_Categorization2.webp" },
  { id: 2, category: "Medical", location: "Mumbai", urgency: "Medium", image: "/medical.avif" },
  { id: 3, category: "Clothes", location: "Delhi", urgency: "Low", image: "/clothes.jpg" },
  { id: 4, category: "Hygiene", location: "Bangalore", urgency: "High", image: "/hygeine.avif" },
  { id: 5, category: "Food", location: "Mumbai", urgency: "Low",  image: "/Food_Categorization2.webp" },
];


const DonationList = () => {
    const [filteredDonations, setFilteredDonations] = useState(hardcodedDonations);

    const applyFilters = (filters) => {
        let filteredData = hardcodedDonations;

        if (filters.category) {
            filteredData = filteredData.filter(item => item.category === filters.category);
        }
        if (filters.location) {
            filteredData = filteredData.filter(item => item.location.toLowerCase().includes(filters.location.toLowerCase()));
        }
        if (filters.urgency) {
            filteredData = filteredData.filter(item => item.urgency === filters.urgency);
        }

        setFilteredDonations(filteredData);
    };

    return (
      <div className="p-6 ">
      <FilterComponent onFilter={applyFilters} />
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  bg-gray-200">
          {filteredDonations.length > 0 ? (
              filteredDonations.map((donation) => (
                  <div
                      key={donation.id}
                      className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-400 dark:border-gray-700"
                  >
                      <a href="#">
                          <img
                              className="rounded-t-lg h-65 w-full object-cover"
                              src={donation.image || "/default-image.jpg"}
                              alt={donation.category}
                          />
                      </a>
                      <div className="p-4">
                          <a href="#">
                              <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
                                  {donation.category}
                              </h5>
                          </a>
                          <p className="mb-2 text-sm text-gray-900">
                              Location: {donation.location}
                          </p>
                          <p className="mb-2 text-sm  text-gray-900">
                              Urgency: {donation.urgency}
                          </p>
                          <a
                              href="#"
                              className="inline-flex items-center px-2 py-1 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                              Donate Now
                              <svg
                                  className="rtl:rotate-180 w-3 h-3 ml-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 10"
                              >
                                  <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"
                                  />
                              </svg>
                          </a>
                      </div>
                  </div>
              ))
          ) : (
              <p className="text-center col-span-3  text-gray-500">No donations found.</p>
          )}
      </div>
  </div>
  
    );
};

export default DonationList;
