import React from 'react';

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

export default HeroSection;
