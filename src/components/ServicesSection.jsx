import React from 'react';

const ServicesSection = () => {
    // Array of service objects for easy management and rendering
    const services = [
        {
            title: "Personalized Wellness Plans",
            description: "Customized strategies based on your unique epigenetic profile, covering diet, exercise, and lifestyle.",
            icon: (
                // SVG icon for Personalized Wellness Plans
                <svg className="h-12 w-12 text-green-600 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"/>
                </svg>
            ),
            borderColor: "border-green-500" // Tailwind class for border color
        },
        {
            title: "Epigenetic Testing & Analysis",
            description: "Interpretation of your epigenetic data to reveal insights into your health predispositions and needs.",
            icon: (
                // SVG icon for Epigenetic Testing & Analysis
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
                // SVG icon for Tech Integration Coaching
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
                // SVG icon for Holistic Lifestyle Coaching
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
                // SVG icon for Corporate Wellness Programs
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
                // SVG icon for Long-Term Health Partnerships
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

export default ServicesSection;
