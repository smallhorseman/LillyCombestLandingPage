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
        // The main container for the entire application, applying global styles
        <div className="bg-gray-50 text-gray-800 min-h-screen font-inter">
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
                {/* NEW: Image Gallery Section */}
                <ImageGallerySection />
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

    const closeMobileMenu = (id) => {
        setIsMobileMenuOpen(false);
        smoothScroll(id);
    };

    return (
        <header className="bg-white shadow-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* Lilly's Logo/Icon (placeholder) */}
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 0012 21a12.001 12.001 0 008.618-18.016z"/>
                    </svg>
                    {/* Link to homepage */}
                    <a href="/" className="text-2xl font-bold text-gray-900">Lilly Combest</a>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><a href="#about" onClick={() => smoothScroll('about')} className="text-gray-600 hover:text-green-600 transition duration-300">About</a></li>
                        <li><a href="#services" onClick={() => smoothScroll('services')} className="text-gray-600 hover:text-green-600 transition duration-300">Services</a></li>
                        <li><a href="#testimonials" onClick={() => smoothScroll('testimonials')} className="text-gray-600 hover:text-green-600 transition duration-300">Testimonials</a></li>
                        <li><a href="#gallery" onClick={() => smoothScroll('gallery')} className="text-gray-600 hover:text-green-600 transition duration-300">Gallery</a></li> {/* Added Gallery link */}
                        <li><a href="#contact" onClick={() => smoothScroll('contact')} className="text-gray-600 hover:text-green-600 transition duration-300">Contact</a></li>
                    </ul>
                </nav>
                {/* Mobile Menu Button (Hamburger Icon) */}
                <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <button onClick={toggleMobileMenu} className="absolute top-4 right-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <svg className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <ul className="text-3xl font-medium space-y-8">
                    <li><a href="#about" onClick={() => closeMobileMenu('about')} className="text-gray-800 hover:text-green-600 transition duration-300">About</a></li>
                    <li><a href="#services" onClick={() => closeMobileMenu('services')} className="text-gray-800 hover:text-green-600 transition duration-300">Services</a></li>
                    <li><a href="#testimonials" onClick={() => closeMobileMenu('testimonials')} className="text-gray-800 hover:text-green-600 transition duration-300">Testimonials</a></li>
                    <li><a href="#gallery" onClick={() => closeMobileMenu('gallery')} className="text-gray-800 hover:text-green-600 transition duration-300">Gallery</a></li> {/* Added Gallery link */}
                    <li><a href="#contact" onClick={() => closeMobileMenu('contact')} className="text-gray-800 hover:text-green-600 transition duration-300">Contact</a></li>
                </ul>
            </div>
        </header>
    );
};

// Hero Section Component
const HeroSection = ({ smoothScroll }) => {
    return (
        <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-20 md:py-32 text-center rounded-b-lg shadow-lg">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Unlock Your Potential with Epigenetic Wellness</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Lilly Combest helps you harness the power of your unique genetic blueprint to achieve optimal health and vitality.</p>
                <button onClick={() => smoothScroll('contact')} className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out inline-block">Book a Free Consultation</button>
            </div>
        </section>
    );
};

// About Section Component
const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">About Lilly Combest</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                    {/* UPDATED: Image for About section with the provided Flickr URL */}
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <img src="https://live.staticflickr.com/65535/54707460080_9268e14b5b_k.jpg" alt="Lilly Combest - Wellness Consultant" class="rounded-lg shadow-xl w-64 h-64 object-cover border-4 border-green-500 md:w-full md:h-auto max-w-xs md:max-w-none" />
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
                <svg className="h-12 w-12 text-green-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/>
                </svg>
            ),
            borderColor: "border-green-500"
        },
        {
            title: "Epigenetic Testing & Analysis",
            description: "Interpretation of your epigenetic data to reveal insights into your health predispositions and needs.",
            icon: (
                <svg className="h-12 w-12 text-blue-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3m0 0l3-3m-3 3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/>
                </svg>
            ),
            borderColor: "border-blue-500"
        },
        {
            title: "Tech Integration Coaching",
            description: "Guidance on utilizing wearable tech and apps to track progress and enhance your wellness journey.",
            icon: (
                <svg className="h-12 w-12 text-purple-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
            ),
            borderColor: "border-purple-500"
        },
        {
            title: "Holistic Lifestyle Coaching",
            description: "Comprehensive guidance on sleep, stress reduction, mindfulness, and environmental factors.",
            icon: (
                <svg className="h-12 w-12 text-orange-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM12 18c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2zM12 2c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM12 22c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2zM12 10c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2zM12 14c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z"/>
                </svg>
            ),
            borderColor: "border-orange-500"
        },
        {
            title: "Corporate Wellness Programs",
            description: "Workshops and programs for businesses to promote employee health and productivity.",
            icon: (
                <svg className="h-12 w-12 text-teal-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l-3 3H3m18 0l-3-3v13h3m-6 0H9m9 0a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v11a2 2 0 002 2h6z"/>
                </svg>
            ),
            borderColor: "border-teal-500"
        },
        {
            title: "Long-Term Health Partnerships",
            description: "Ongoing support and mentorship to ensure sustained progress and evolving wellness goals.",
            icon: (
                <svg className="h-12 w-12 text-red-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            ),
            borderColor: "border-red-500"
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 bg-gray-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Map through the services array to render each service card */}
                    {services.map((service, index) => (
                        <div key={index} className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 ${service.borderColor}`}>
                            {service.icon} {/* Render the SVG icon */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
                            <p className="text-gray-700 text-center">{service.description}</p>
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
            borderColor: "border-green-400" // Tailwind class for border color
        },
        {
            quote: "I was skeptical about epigenetic tech, but Lilly explained everything so clearly. Her personalized plan helped me overcome chronic fatigue. Highly recommend!",
            author: "Mark D., Software Engineer",
            borderColor: "border-blue-400"
        },
        {
            quote: "Working with Lilly has been incredible. She demystified my genetic data and provided actionable steps that fit seamlessly into my busy life. A true expert!",
            author: "Emily R., Busy Mom",
            borderColor: "border-purple-400"
        },
        {
            quote: "Lilly's insights into epigenetic tech are revolutionary. My overall well-being has significantly improved. She's a game-changer in the wellness space.",
            author: "David L., Fitness Enthusiast",
            borderColor: "border-orange-400"
        }
    ];

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">What Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Map through the testimonials array to render each testimonial card */}
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`bg-gray-50 p-6 rounded-lg shadow-md border-l-4 ${testimonial.borderColor}`}>
                            <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                            <p className="font-semibold text-gray-800">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// NEW: Image Gallery Section Component
const ImageGallerySection = () => {
    // Example Flickr-style placeholder URLs. REPLACE THESE with actual Flickr image URLs.
    const images = [
        { src: "https://live.staticflickr.com/65535/54707460080_9268e14b5b_k.jpg", alt: "Lilly Combest - Wellness Consultant" }, // Updated with your provided Flickr URL
        { src: "https://live.staticflickr.com/65535/53912345679_b2c3d4e5f6_z.jpg", alt: "Epigenetic Tech in Action" },
        { src: "https://live.staticflickr.com/65535/53912345680_c3d4e5f6g7_z.jpg", alt: "Mindful Living" },
        { src: "https://live.staticflickr.com/65535/53912345681_d4e5f6g7h8_z.jpg", alt: "Nature Connection" },
        { src: "https://live.staticflickr.com/65535/53912345682_e5f6g7h8i9_z.jpg", alt: "Personalized Wellness Plan" },
        { src: "https://live.staticflickr.com/65535/53912345683_f6g7h8i9j0_z.jpg", alt: "Client Success Story" },
    ];

    return (
        <section id="gallery" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Visualizing Wellness & Epigenetic Tech</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-semibold text-center px-4">{image.alt}</p>
                            </div>
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
                        {/* UPDATED: Phone number to 832-257-9197 */}
                        <p className="text-lg">Phone: <a href="tel:+18322579197" className="text-green-600 hover:underline">(832) 257-9197</a></p>
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

// Footer Component
const Footer = () => {
    const handleFooterLinkClick = (e) => {
        e.preventDefault(); // Prevent default link navigation
        // You can add custom logic here later, e.g., open a modal, or navigate to a placeholder route.
        console.log("Footer link clicked - not yet implemented for navigation.");
    };

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2025 Lilly Combest. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    {/* Provided actual placeholder routes for href attributes */}
                    <a href="/privacy-policy" onClick={handleFooterLinkClick} className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
                    <a href="/terms-of-service" onClick={handleFooterLinkClick} className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default App;
