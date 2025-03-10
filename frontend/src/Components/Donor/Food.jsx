import axios from "axios";
import { useEffect, useState } from "react";

const Food = () => {
  const [filter, setFilter] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [institutes,setInstitute] = useState([])
  
  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/institutes");
        setInstitute(response.data);
      } catch (error) {
        console.error("Error fetching institutes:", error);
      }
    };
  
    fetchInstitutes();
  }, []);
  
  const onChangeSearch = (e) => {
    setFilter(e.target.value);
  };

  const filteredInstitutes = institutes.filter((institute) =>
    institute.category.toLowerCase().includes(filter.toLowerCase())
  );

  // const getWishlistItem = (instituteId) => {
  //   console.log(instituteId);
  //   return wishlist.includes(instituteId);
  // };

  // const toggleWishlist = (instituteId) => {
  //   setWishlist((prevWishlist) =>
  //     prevWishlist.includes(instituteId)
  //       ? prevWishlist.filter((id) => id !== instituteId)
  //       : [...prevWishlist, instituteId]
  //   );
  // };

  return (
    <section className="p-8 mt-20 max-w-5xl mx-auto bg-gray-100">
      <div className="flex justify-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search category name"
          className="w-full border rounded-lg shadow-lg p-3 text-lg"
          value={filter}
          onChange={onChangeSearch}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInstitutes.map((institute,index) => (
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
            <p className="text-gray-900 font-medium text-lg">Total Price: {institute.price}</p>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Food;
