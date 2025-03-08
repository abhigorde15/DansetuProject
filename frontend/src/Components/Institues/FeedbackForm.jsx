import { useState } from "react";

const FeedbackForm = ({ submitFeedback }) => {
  const [feedbackData, setFeedbackData] = useState({ item: "", feedback: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedbackData.item && feedbackData.feedback) {
      submitFeedback(feedbackData);
      setFeedbackData({ item: "", feedback: "" });
    }
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-blue-200">
      <h2 className="text-xl font-semibold mb-4">Give Feedback</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Enter Item Name"
          value={feedbackData.item}
          onChange={(e) => setFeedbackData({ ...feedbackData, item: e.target.value })}
          required
        />

        <textarea
          className="border p-2 rounded"
          placeholder="Write your feedback here..."
          rows="3"
          value={feedbackData.feedback}
          onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
          required
        ></textarea>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
