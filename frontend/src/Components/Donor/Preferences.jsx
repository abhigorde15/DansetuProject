import { useNavigate } from "react-router-dom";

const Preferences = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-blue-50 shadow-lg rounded-2xl p-6 max-w-md mx-auto border border-blue-200">
      <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">
        Donation Preferences
      </h3>
      <div className="space-y-3">
        <button
          className="w-full text-left flex items-center gap-2 bg-blue-100 hover:bg-blue-200 transition p-3 rounded-lg cursor-pointer shadow-sm"
          onClick={() => navigate("/institute/food")}
        >
          <span className="text-blue-800 font-medium">🍛 Food</span>
        </button>
        <button
          className="w-full text-left flex items-center gap-2 bg-blue-100 hover:bg-blue-200 transition p-3 rounded-lg cursor-pointer shadow-sm"
          onClick={() => navigate("/institute/medical")}
        >
          <span className="text-blue-800 font-medium">💊 Medical Supplies</span>
        </button>
        <button
          className="w-full text-left flex items-center gap-2 bg-blue-100 hover:bg-blue-200 transition p-3 rounded-lg cursor-pointer shadow-sm"
          onClick={() => navigate("/institute/clothes")}
        >
          <span className="text-blue-800 font-medium">👕 Clothes</span>
        </button>
      </div>
    </section>
  );
};

export default Preferences;
