import { useState } from "react";

const RequestForm = ({ addRequest }) => {
  const [formData, setFormData] = useState({ category: "", quantity: "",price :"" });
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/donation/req", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newRequest = await response.json(); // Fetch newly created request
        setFormData({ category: "", quantity: "" }); // Clear form
        addRequest(newRequest); // Update request list
      }
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-blue-200">
      <h2 className="text-xl font-semibold mb-4">Raise a Request</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <select
          className="border p-2 rounded"
          name="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Medical">Medical</option>
          <option value="Clothes">Clothes</option>
        </select>

        <input
          type="text"
          name="quantity"
          className="border p-2 rounded"
          placeholder="Enter Quantity (e.g., 50 kg, 10 packs)"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          required
        />
         <input
          type="text"
          name="price"
          className="border p-2 rounded"
          placeholder="Enter Estimate Price in INR"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
