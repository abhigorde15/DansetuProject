const About = () => {
  return (
    <div className="bg-gray-200 text-black  min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mt-10 mb-12">
          <h1 className="text-4xl font-bold ">About Us</h1>
          <p className="mt-4 text-black-700 text-lg max-w-2xl mx-auto">
            We are building a platform that connects donors, institutes, and suppliers to ensure help reaches the needy efficiently and transparently.
          </p>
        </div>

        {/* Mission Section */}
        <div className="text-white p-8 rounded-2xl bg-purple-500 shadow-md mb-10">
          <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-white text-lg">
            Many organizations work towards uplifting destitutes by providing education, healthcare, and food. However, misuse of funds remains a major concern.
            Our platform eliminates this issue by ensuring **direct item donations** rather than monetary transfers, building trust among all stakeholders.
          </p>
        </div>

        {/* How It Works Section */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">1</span>
                <p className="text-gray-600 text-lg">Institutes (orphanages, elderly homes) raise requests for items such as groceries or medical supplies.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">2</span>
                <p className="text-gray-600 text-lg">Donors choose to contribute by selecting required items or donating a fixed amount.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">3</span>
                <p className="text-gray-600 text-lg">Requests are sent to **verified nearby suppliers**, ensuring prompt delivery.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">4</span>
                <p className="text-gray-600 text-lg">Money is transferred **only to the shopkeeper**, not directly to the institute.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">5</span>
                <p className="text-gray-600 text-lg">Shopkeepers pack and ship items directly to the needy institutions.</p>
              </div>
              <div className="flex items-start">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">6</span>
                <p className="text-gray-600 text-lg">Institutes provide **feedback on received items** to ensure quality control.</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Transparency & Fraud Prevention Section */}
        <div className="text-white p-8 rounded-2xl shadow-md bg-purple-500">
          <h2 className="text-3xl font-semibold text-white mb-4">Ensuring Transparency & Fraud Prevention</h2>
          <p className="text-white text-lg mb-4">
            To build **trust and efficiency**, we have incorporated various anti-fraud measures in our system:
          </p>
          <ul className="list-disc list-inside text-white space-y-3 text-lg">
            <li>Large donations are **split among multiple suppliers** to avoid monopolies.</li>
            <li>Different suppliers are chosen for every transaction to prevent cartelization.</li>
            <li>AI-driven **consumption monitoring** flags unusual or excessive requests.</li>
            <li>Institutes provide **feedback on delivered items** to maintain quality standards.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
