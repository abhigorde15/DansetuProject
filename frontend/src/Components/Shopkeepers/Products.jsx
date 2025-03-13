import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomizedDialogs from "./CustomizedDialogs2";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [open, setOpen] = useState(false);
  const handleButton = (product) => {
    setProduct(product);
    setOpen(true);
  }
  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      if (!token) {
        console.error("No token found.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8080/api/product/user", {
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  const handleUpdate = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };
  const handleDelete = async (id) => {
    try{
      const response = await axios.delete(`http://localhost:8080/api/product/delete/${id}`);
      if(response.status === 200){
        setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
      }
    }catch(error){
      console.error("Error deleting product:", error);
    }

  }
  return (
    <div className="bg-blue-50 p-6  rounded-lg shadow-lg max-w-4xl mx-auto border border-blue-200 mb-6">
      <h1 className="text-2xl font-bold text-center mb-4">Products</h1>

      {/* Product List Container */}
      <div className="flex gap-6 overflow-x-auto p-2 flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-64 flex-shrink-0"
            >
              <img
                src={product.imageUrl}
                alt={product.pName}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold">{product.pName}</h2>
              <p className="text-gray-600 text-sm">{product.description || "No description"}</p>
              <p className="text-gray-800 font-bold mt-2">Price: ${product.price}</p>
              <p className="text-gray-700">Stock: {product.stockQuantity}</p>
              <p className="text-blue-600 font-semibold">Category: {product.category}</p>
              <button 
                type="button" 
                className="bg-green-700 hover:bg-green-800 text-center font-medium rounded-lg p-2 m-1" 
                onClick={()=>handleButton(product) } // ✅ Function inside arrow function
              >
  Update
</button>

               <button type="button" className="bg-red-500 hover:bg-red-600 text-center font-medium rounded-lg 
              p-2 m-1"
              onClick={()=>handleDelete(product.id)} // ✅ Function inside arrow function
              >Delete</button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>
      <CustomizedDialogs open={open} handleClose={() => setOpen(false)} product={product}  onUpdate={handleUpdate}/>
    </div>
  );
};

export default Products;
