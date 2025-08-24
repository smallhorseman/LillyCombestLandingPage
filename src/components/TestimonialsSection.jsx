import React from 'react';

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

export default TestimonialsSection;
