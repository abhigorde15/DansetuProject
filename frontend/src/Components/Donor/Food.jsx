import { useState, useEffect } from "react";
import axios from "axios";

const Food = () => {
 
  const [institutes, setInstitutes] = useState([]);
  const [filter, setFilter] = useState("");
  const [wishlistState, setWishlistState] = useState({});
  const [wishlist,SetWishlist] = useState({})
  const token = localStorage.getItem("token")
  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/institutes");
        setInstitutes(response.data);
      } catch (error) {
        console.error("Error fetching institutes:", error);
      }
    };

    fetchInstitutes();
  }, []);


  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/wishlist",{
          headers:{
            Authorization : `${token}`
          }
        });
        console.log(token)
        console.log(wishlist)
        SetWishlist(response.data);
      } catch (error) {
        console.error("Error fetching institutes:", error);
      }
    };

    fetchInstitutes();
  }, []);
  const onChangeSearch = (e) => {
    setFilter(e.target.value);
  };

  // Apply filtering
  const filteredInstitutes = institutes.filter((institute) =>
    institute.category.toLowerCase().includes(filter.toLowerCase())
  );
 const toggleWishlist = (index)=>{
  setWishlistState((prev)=>({
    ...prev,[index]:!prev[index],
  }))
 }
  return (
    <section className="p-8 mt-20 max-w-5xl mx-auto bg-gray-100">
      {/* Search Bar */}
      <div className="flex justify-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search category name"
          className="w-full border rounded-lg shadow-lg p-3 text-lg"
          value={filter}
          onChange={onChangeSearch}
        />
      </div>

      {/* Institute Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInstitutes.map((institute, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-lg bg-white flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={institute.image}
              alt={institute.name}
              className="w-36 h-36 object-cover rounded-full mb-4 shadow-md"
            />
            <h3 className="text-2xl font-bold">{institute.name}</h3>
            <p className="text-gray-500 text-lg">Email: {institute.email}</p>
            <p className="text-gray-600 text-lg">Category: {institute.category}</p>
            <p className="text-gray-900 font-medium text-lg">Quantity: {institute.quantity}</p>

            {/* Wishlist Button */}
            <button
              className={`mt-3 px-4 py-2 rounded-lg text-white font-semibold transition ${
                wishlistState[index] ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
              }`}
              onClick={() => toggleWishlist(index)}
            >
              {wishlistState[index] ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Food;
