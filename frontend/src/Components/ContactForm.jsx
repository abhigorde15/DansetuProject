import { useState } from "react";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .send(
                "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
                "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
                formData,
                "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setSuccess("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log("FAILED...", error);
                    setSuccess("Failed to send message. Please try again.");
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div id="Contact" className="max-w-lg mx-auto  p-8  shadow-xl rounded-lg ">
            <h2 className="text-2xl font-bold text-gray-900  text-center">Contact Us</h2>
            <p className="text-center text-gray-600 dark:text-gray-500 mb-6">We'd love to hear from you!</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 ">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 "
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-900">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-900 ">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:text-white"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-3 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {success && <p className="text-center mt-4 text-sm font-medium text-green-600 dark:text-green-400">{success}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
