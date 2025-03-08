import { useState } from "react";

const FilterComponent = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        category: "",
        location: "",
        urgency: "",
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-gray-900 mb-5 shadow-md rounded-lg p-4 flex flex-wrap gap-4 justify-center md:justify-between">
            {/* Category Filter */}
            <select
                name="category"
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full md:w-1/4"
            >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Medical">Medical Supplies</option>
                <option value="Clothes">Clothes</option>
                <option value="Hygiene">Hygiene Kits</option>
            </select>

            {/* Location Input */}
            <input
                type="text"
                name="location"
                placeholder="Enter city or pin code"
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full md:w-1/4"
            />

            {/* Urgency Filter */}
            <select
                name="urgency"
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full md:w-1/4"
            >
                <option value="">Select Urgency</option>
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
            </select>

            {/* Apply Button */}
            <button
                onClick={() => onFilter(filters)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default FilterComponent;