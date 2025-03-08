import React, { useState, useEffect } from "react";

const Wishlist = () => {
  // Load wishlist from localStorage
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist)); // Convert JSON string to array
    }
  }, []);

  const removeItem = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage
  };
  

  return (
    <section className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-blue-200">
      <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">
        Saved Requests
      </h3>
      {wishlist.length > 0 ? (
        <ul className="space-y-3">
          {wishlist.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-blue-100 p-3 rounded-lg shadow-sm"
            >
              <span className="text-blue-900 font-medium">{item.name}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">No saved requests.</p>
      )}
    </section>
  );
};

export default Wishlist;
