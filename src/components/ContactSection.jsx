import React, { useState } from 'react';

const ContactSection = () => {
    // State to manage the visibility and message of the custom alert modal
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    // Function to display the custom alert
    const showCustomAlert = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
    };

    // Function to close the custom alert
    const closeCustomAlert = () => {
        setShowAlert(false);
        setAlertMessage("");
    };

    // Handler for form submission
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // In a real application, you would send this data to a backend or an email service.
        // For demonstration, we'll just log it and show the custom alert.
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form data:", data);

        // Display the custom alert message
        showCustomAlert("Thank you for your message! Lilly will get back to you soon.");

        // Clear the form after submission
        e.target.reset();
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-gray-100">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Get in Touch</h2>
                <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-green-500">
                    <p className="text-center text-lg mb-8 text-gray-700">Ready to start your journey to optimal health? Fill out the form below or reach out directly.</p>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="your@email.com" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows="5" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Tell me about your wellness goals..." required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">Send Message</button>
                        </div>
                    </form>
                    <div className="mt-8 text-center text-gray-600">
                        <p>Or connect with Lilly:</p>
                        <p className="mt-2 text-lg">Email: <a href="mailto:lilly@lillycombest.com" className="text-green-600 hover:underline">lilly@lillycombest.com</a></p>
                        <p className="text-lg">Phone: <a href="tel:+15551234567" className="text-green-600 hover:underline">(555) 123-4567</a></p>
                    </div>
                </div>
            </div>

            {/* Custom Alert/Modal */}
            {showAlert && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
                        <p className="text-xl font-semibold mb-4 text-gray-800">{alertMessage}</p>
                        <button onClick={closeCustomAlert} className="bg-green-600 text-white hover:bg-green-700 font-bold py-2 px-6 rounded-full transition duration-300">
                            Got It!
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactSection;
