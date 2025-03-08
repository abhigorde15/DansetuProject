import React from "react";

const PaymentHistory = () => {
  // Sample Payment History Data
  const payments = [
    { id: 1, shop: "Grocery Mart", amount: "₹1,500", items: "Rice & Oil", invoice: "/invoices/invoice1.pdf" },
    { id: 2, shop: "Health Store", amount: "₹800", items: "Hygiene Kits", invoice: "/invoices/invoice2.pdf" },
    { id: 3, shop: "Local Supermarket", amount: "₹2,200", items: "Vegetables & Fruits", invoice: "/invoices/invoice3.pdf" },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Payment & Donation History</h3>
      <ul className="space-y-4">
        {payments.map((payment) => (
          <li key={payment.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm">
            <div>
              <p className="text-lg font-semibold">{payment.shop}</p>
              <p className="text-gray-600">{payment.amount} ({payment.items})</p>
            </div>
            <a 
              href={payment.invoice} 
              download 
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
            >
              Download Invoice
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PaymentHistory;
