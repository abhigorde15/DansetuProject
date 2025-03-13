import { useState, useEffect } from "react";
import axios from "axios";

const FoodShops = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // New state for filtering
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/product/food");
        console.log(response.data);
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filteredProducts
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = products.filter((product) =>
      product.pName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered); // Update filteredProducts, not products
  };

  return (
    <div className="bg-blue-50 p-8 mt-20 rounded-lg shadow-lg max-w-3xl mx-auto border border-blue-200 mb-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Enter Name of Product"
          className="border border-gray-300 rounded-md px-3 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-2 transition duration-300"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>

      {/* Product List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
              <img
                src={product.imageUrl}
                alt={product.pName}
                className="w-40 h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">{product.pName}</h3>
              <p className="text-gray-600 font-medium text-lg">Price: ₹{product.price}</p>
              <p className="text-blue-600 font-medium text-lg">Discount: {product.discount}%</p>
              <p className="text-gray-600 font-medium text-lg">Quantity: {product.stockQuantity} kg</p>

              {/* Shop Details */}
              <div className="mt-2">
                <h4 className="text-lg font-semibold text-gray-700">Shop: {product.shop.shopName}</h4>
                <p className="text-gray-600">Address: {product.shop.address}</p>
              </div>

              <button className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4 transition duration-300 hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">No products found</p>
        )}
      </div>
    </div>
  );
};

export default FoodShops;
