import { useState, useEffect } from "react";
import axios from "axios";

const FoodShops = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/product/food");
        setProducts(response.data);
        setFilteredProducts(response.data);
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
    setFilteredProducts(filtered);
  };

  const handleProceedToPay = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsDialogOpen(true);
  };

  const paymentStart = async () => {
    if (!selectedProduct) return;

    let amount = selectedProduct.price * quantity;
    if (!amount) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/payment",
        { amount },
        { headers: { "Content-Type": "application/json" } }
      );

      if (!razorpayLoaded) {
        alert("Razorpay SDK not loaded. Please try again.");
        return;
      }
      console.log(response.data)
      console.log(response.data.amount);
      const options = {
        key: "rzp_test_PiojQYNNG4ToiB",
        amount: response.data.amount,
        currency: "INR",
        name: "Abhishek Gorde",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: response.data.id,
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
        },
        notes: {
          address: "Razorpay Integration"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response){
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
        alert("Payment failed! Try again.");
});
      rzp1.open();
     
      setIsDialogOpen(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed! Try again.");
    }
  };

  return (
    <div className="bg-blue-50 p-8 mt-20 rounded-lg shadow-lg max-w-3xl mx-auto border border-blue-200 mb-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
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
              <div className="mt-2">
                <h4 className="text-lg font-semibold text-gray-700">Shop: {product.shop.shopName}</h4>
                <p className="text-gray-600">Address: {product.shop.address}</p>
              </div>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4 transition duration-300 hover:bg-blue-600"
                onClick={() => handleProceedToPay(product)}
              >
                Proceed To Pay
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">No products found</p>
        )}
      </div>

      {/* Dialog Box */}
      {isDialogOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">{selectedProduct.pName}</h2>
            <p className="text-gray-600">Price: ₹{selectedProduct.price}</p>
            <p className="text-gray-600">Discount: {selectedProduct.discount}%</p>
            <p className="text-gray-600">Shop: {selectedProduct.shop.shopName}</p>
            <label className="block mt-4">Quantity (kg):</label>
            <input
              type="number"
              min="1"
              max={selectedProduct.stockQuantity}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 rounded-md px-2 py-1 w-full mt-1"
            />
            <p className="mt-2">Total Price: ₹{(selectedProduct.price * quantity).toFixed(2)}</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 w-full"
              onClick={paymentStart}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodShops;
