import React, { useState } from 'react';

// Main App Component
function App() {
    // Function for smooth scrolling to a specific section ID
    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Scroll to the element with smooth behavior
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // The main container for the entire application, applying the new pastel/earthy theme
        <div className="bg-stone-50 text-stone-800 min-h-screen font-sans">
            {/* Render the Header component */}
            <Header smoothScroll={smoothScroll} />
            <main>
                {/* Render the HeroSection */}
                <HeroSection smoothScroll={smoothScroll} />
                {/* Render the AboutSection */}
                <AboutSection />
                {/* Render the ServicesSection */}
                <ServicesSection />
                {/* Render the TestimonialsSection */}
                <TestimonialsSection />
                {/* Render the ContactSection */}
                <ContactSection />
            </main>
            {/* Render the Footer component */}
            <Footer />
        </div>
    );
}

// Header Component
const Header = ({ smoothScroll }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Closes the mobile menu and then scrolls to the selected section
    const closeMobileMenu = (id) => {
        setIsMobileMenuOpen(false);
        smoothScroll(id);
    };

    return (
        <header className="bg-white shadow-sm py-2 sticky top-0 z-40">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Replaced SVG with the uploaded logo image */}
                    <a href="/" className="flex items-center">
                        <img 
                            src="http://googleusercontent.com/file_content/1" 
                            alt="Lilly Combest Logo" 
                            className="h-16 w-auto" // Adjusted height for better visibility
                        />
                    </a>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('about'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">About</a></li>
                        <li><a href="#services" onClick={(e) => { e.preventDefault(); smoothScroll('services'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">Services</a></li>
                        <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); smoothScroll('testimonials'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">Testimonials</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); smoothScroll('contact'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">Contact</a></li>
                    </ul>
                </nav>
                {/* Mobile Menu Button (Hamburger Icon) */}
                <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500">
                    <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <button onClick={toggleMobileMenu} className="absolute top-4 right-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500">
                    <svg className="h-8 w-8 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <ul className="text-3xl font-medium space-y-8">
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); closeMobileMenu('about'); }} className="text-stone-800 hover:text-rose-500 transition duration-300">About</a></li>
                    <li><a href="#services" onClick={(e) => { e.preventDefault(); closeMobileMenu('services'); }} className="text-stone-800 hover:text-rose-500 transition duration-300">Services</a></li>
                    <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); closeMobileMenu('testimonials'); }} className="text-stone-800 hover:text-rose-500 transition duration-300">Testimonials</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); closeMobileMenu('contact'); }} className="text-stone-800 hover:text-rose-500 transition duration-300">Contact</a></li>
                </ul>
            </div>
        </header>
    );
};

// Hero Section Component
const HeroSection = ({ smoothScroll }) => {
    return (
        <section className="bg-gradient-to-r from-rose-200 to-amber-100 text-stone-800 py-20 md:py-32 text-center rounded-b-lg shadow-lg">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Unlock Your Potential with Epigenetic Wellness</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Lilly Combest helps you harness the power of your unique genetic blueprint to achieve optimal health and vitality.</p>
                <button onClick={() => smoothScroll('contact')} className="bg-white text-rose-600 hover:bg-rose-50 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out inline-block">Book a Free Consultation</button>
            </div>
        </section>
    );
};

// About Section Component
const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">About Lilly Combest</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                    {/* Image for About section with new border color */}
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <img src="https://live.staticflickr.com/65535/54707460080_9268e14b5b_k.jpg" alt="Lilly Combest - Wellness Consultant" className="rounded-lg shadow-xl w-64 h-64 object-cover border-4 border-rose-300 md:w-full md:h-auto max-w-xs md:max-w-none" />
                    </div>
                    <div className="md:w-2/3 text-lg leading-relaxed">
                        <p className="mb-4">As a passionate <strong className="font-semibold">Wellness Consultant</strong>, Lilly Combest specializes in integrating cutting-edge <strong className="font-semibold">epigenetic technology</strong> to empower individuals on their health journeys. With years of experience and a deep understanding of how lifestyle influences gene expression, Lilly provides personalized strategies that go beyond one-size-fits-all approaches.</p>
                        <p className="mb-4">Her mission is to help you understand your body at a foundational level, leveraging the science of epigenetics to optimize your nutrition, fitness, sleep, and stress management. Lilly believes in sustainable, science-backed solutions that lead to lasting well-being and a vibrant life.</p>
                        <p>Discover how your genes and environment interact, and learn to make informed choices that positively impact your health and future.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Services Section Component
const ServicesSection = () => {
    const services = [
        {
            title: "Personalized Wellness Plans",
            description: "Customized strategies based on your unique epigenetic profile, covering diet, exercise, and lifestyle.",
            icon: (
                <svg className="h-12 w-12 text-rose-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002-2h2a2 2 0 002 2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
            ),
            borderColor: "border-rose-300"
        },
        {
            title: "Epigenetic Testing & Analysis",
            description: "Interpretation of your epigenetic data to reveal insights into your health predispositions and needs.",
            icon: (
                <svg className="h-12 w-12 text-sky-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6"/>
                </svg>
            ),
            borderColor: "border-sky-300"
        },
        {
            title: "Tech Integration Coaching",
            description: "Guidance on utilizing wearable tech and apps to track progress and enhance your wellness journey.",
            icon: (
                <svg className="h-12 w-12 text-violet-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
            ),
            borderColor: "border-violet-300"
        },
        {
            title: "Holistic Lifestyle Coaching",
            description: "Comprehensive guidance on sleep, stress reduction, mindfulness, and environmental factors.",
            icon: (
                 <svg className="h-12 w-12 text-amber-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            ),
            borderColor: "border-amber-400"
        },
        {
            title: "Corporate Wellness Programs",
            description: "Workshops and programs for businesses to promote employee health and productivity.",
            icon: (
                <svg className="h-12 w-12 text-teal-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
            ),
            borderColor: "border-teal-300"
        },
        {
            title: "Long-Term Health Partnerships",
            description: "Ongoing support and mentorship to ensure sustained progress and evolving wellness goals.",
            icon: (
                <svg className="h-12 w-12 text-stone-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
            ),
            borderColor: "border-stone-400"
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Map through the services array to render each service card */}
                    {services.map((service, index) => (
                        <div key={index} className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 ${service.borderColor}`}>
                            {service.icon} {/* Render the SVG icon */}
                            <h3 className="text-xl font-semibold text-stone-900 mb-4 text-center">{service.title}</h3>
                            <p className="text-stone-700 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Testimonials Section Component
const TestimonialsSection = () => {
    // Array of testimonial objects for easy management and rendering
    const testimonials = [
        {
            quote: "Lilly's approach to wellness transformed my life! Understanding my epigenetic profile made all the difference. I feel more energetic and focused than ever before.",
            author: "Sarah J., Entrepreneur",
            borderColor: "border-rose-300"
        },
        {
            quote: "I was skeptical about epigenetic tech, but Lilly explained everything so clearly. Her personalized plan helped me overcome chronic fatigue. Highly recommend!",
            author: "Mark D., Software Engineer",
            borderColor: "border-sky-300"
        },
        {
            quote: "Working with Lilly has been incredible. She demystified my genetic data and provided actionable steps that fit seamlessly into my busy life. A true expert!",
            author: "Emily R., Busy Mom",
            borderColor: "border-violet-300"
        },
        {
            quote: "Lilly's insights into epigenetic tech are revolutionary. My overall well-being has significantly improved. She's a game-changer in the wellness space.",
            author: "David L., Fitness Enthusiast",
            borderColor: "border-amber-300"
        }
    ];

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">What Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Map through the testimonials array to render each testimonial card */}
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`bg-stone-50 p-6 rounded-lg shadow-md border-l-4 ${testimonial.borderColor}`}>
                            <p className="italic text-stone-700 mb-4">"{testimonial.quote}"</p>
                            <p className="font-semibold text-stone-800">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
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
        <section id="contact" className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">Get in Touch</h2>
                <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-rose-300">
                    <p className="text-center text-lg mb-8 text-stone-700">Ready to start your journey to optimal health? Fill out the form below or reach out directly.</p>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-stone-700">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="your@email.com" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
                            <textarea id="message" name="message" rows="5" className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="Tell me about your wellness goals..." required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-rose-500 text-white hover:bg-rose-600 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">Send Message</button>
                        </div>
                    </form>
                    <div className="mt-8 text-center text-stone-600">
                        <p>Or connect with Lilly:</p>
                        <p className="mt-2 text-lg">Email: <a href="mailto:lilly@lillycombest.com" className="text-rose-500 hover:underline">lilly@lillycombest.com</a></p>
                        <p className="text-lg">Phone: <a href="tel:+18322579197" className="text-rose-500 hover:underline">(832) 257-9197</a></p>
                    </div>
                </div>
            </div>

            {/* Custom Alert/Modal */}
            {showAlert && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
                        <p className="text-xl font-semibold mb-4 text-stone-800">{alertMessage}</p>
                        <button onClick={closeCustomAlert} className="bg-rose-500 text-white hover:bg-rose-600 font-bold py-2 px-6 rounded-full transition duration-300">
                            Got It!
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-stone-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2025 Lilly Combest. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#privacy" onClick={e => e.preventDefault()} className="text-stone-400 hover:text-white transition duration-300">Privacy Policy</a>
                    <a href="#terms" onClick={e => e.preventDefault()} className="text-stone-400 hover:text-white transition duration-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default App;
