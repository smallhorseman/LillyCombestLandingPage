import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">About Lilly Combest</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <img src="https://placehold.co/300x300/e2e8f0/000000?text=Lilly+Combest" alt="Lilly Combest" className="rounded-full shadow-lg w-48 h-48 object-cover border-4 border-green-500" />
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

export default AboutSection;
