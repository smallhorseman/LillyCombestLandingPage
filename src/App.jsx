import React, { useState, useEffect } from 'react';

// --- MOCK BLOG DATA ---
// In a real application, this would come from a CMS or database.
const blogPosts = [
    {
        id: 1,
        title: "The Power of Epigenetics: A Natural Remedy for Wellness in The Woodlands",
        author: "Lilly Combest",
        date: "August 24, 2025",
        snippet: "Discover how the science of epigenetics is revolutionizing our approach to health. As a wellness consultant serving The Woodlands and the greater North Houston area, I see how personalized diet and lifestyle changes can act as a natural remedy...",
        content: `
            <p class="mb-4">Discover how the science of epigenetics is revolutionizing our approach to health. As a wellness consultant serving The Woodlands and the greater North Houston area, I see how personalized diet and lifestyle changes can act as a natural remedy for many of today's health concerns. It’s not just about the genes you were born with; it’s about how your environment and choices influence them.</p>
            <p class="mb-4">For my clients in Spring, TX, and Pinehurst, the journey often begins with understanding that holistic medicine isn't about a quick fix. It's about creating sustainable habits. Through epigenetic analysis, we can pinpoint specific needs for supplements, design effective meal plans, and even refine your skincare routine. This data-driven approach to natural healing empowers you to take control of your health.</p>
            <h3 class="text-2xl font-bold mt-6 mb-4">Your Diet as a Wellness Tool</h3>
            <p>A generic diet plan doesn't account for your unique biology. Epigenetics allows us to create custom meal plans that support your specific health goals, whether it's boosting energy, improving skin clarity, or managing weight. This is the future of wellness, available right here in the North Houston area.</p>
        `
    },
    {
        id: 2,
        title: "Finding Your Houston Life Coach: A Guide to Holistic Health",
        author: "Lilly Combest",
        date: "August 18, 2025",
        snippet: "Navigating the world of wellness can be overwhelming. As a life coach and wellness consultant in Houston, I specialize in holistic medicine and natural healing. My goal is to guide you through the noise and help you find a path that works for you...",
        content: `
            <p class="mb-4">Navigating the world of wellness can be overwhelming. As a life coach and wellness consultant in Houston, I specialize in holistic medicine and natural healing. My goal is to guide you through the noise and help you find a path that works for you, whether you're in Tomball, Magnolia, or right here in Houston.</p>
            <p class="mb-4">A life coach does more than just offer advice; we create a partnership to help you achieve your health goals. This includes everything from developing a sustainable diet and supplement strategy to finding a skincare routine that complements your internal health. We look at the whole picture, because true wellness is interconnected.</p>
            <h3 class="text-2xl font-bold mt-6 mb-4">What is Holistic Medicine?</h3>
            <p>Holistic medicine treats the body as a whole, integrated system. Instead of just treating symptoms, we look for the root cause. This could mean adjusting your meal plans, recommending specific supplements as a natural remedy, or developing stress-management techniques. It’s a comprehensive approach to long-term health and vitality.</p>
        `
    },
    {
        id: 3,
        title: "Custom Meal Plans for a Healthier You in the North Houston Area",
        author: "Lilly Combest",
        date: "August 12, 2025",
        snippet: "Are you tired of diets that don't deliver? As a wellness consultant in the North Houston area, I create scientifically-backed meal plans tailored to your unique epigenetic profile. This isn't just a diet; it's a blueprint for your optimal health...",
        content: `
            <p class="mb-4">Are you tired of diets that don't deliver? As a wellness consultant in the North Houston area, I create scientifically-backed meal plans tailored to your unique epigenetic profile. This isn't just a diet; it's a blueprint for your optimal health, serving clients from Pinehurst to The Woodlands.</p>
            <p class="mb-4">Your body has unique needs, and a generic meal plan can't address them. We use epigenetic data to understand what your body craves and what it should avoid. This informs the creation of delicious, easy-to-follow meal plans that work in harmony with your genes. We also identify the most effective supplements to support your wellness journey, providing a complete natural healing strategy.</p>
        `
    }
];

// Main App Component
function App() {
    const [view, setView] = useState({ page: 'home', id: null });

    // Function for smooth scrolling to a specific section ID
    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Scroll to top when view changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const navigate = (page, id = null) => {
        setView({ page, id });
    };

    const renderContent = () => {
        switch (view.page) {
            case 'blog':
                return <BlogPage navigate={navigate} posts={blogPosts} />;
            case 'post':
                const post = blogPosts.find(p => p.id === view.id);
                return <BlogPost navigate={navigate} post={post} />;
            case 'home':
            default:
                return (
                    <>
                        <HeroSection smoothScroll={smoothScroll} />
                        <AboutSection />
                        <ServicesSection />
                        <TestimonialsSection />
                        <ContactSection />
                    </>
                );
        }
    };

    return (
        <div className="bg-stone-50 text-stone-800 min-h-screen font-sans">
            <Header smoothScroll={smoothScroll} navigate={navigate} setView={setView} />
            <main>{renderContent()}</main>
            <Footer />
        </div>
    );
}

// Header Component
const Header = ({ smoothScroll, navigate, setView }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (page, id) => {
        navigate(page);
        if (id) {
            // Use timeout to allow the page to render before scrolling
            setTimeout(() => smoothScroll(id), 100);
        }
    };

    const handleHomeLinkClick = (id) => {
        setView({ page: 'home', id: null });
        setTimeout(() => smoothScroll(id), 100);
    };

    return (
        <header className="bg-white shadow-sm py-2 sticky top-0 z-40">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#home" onClick={() => navigate('home')} className="flex items-center cursor-pointer">
                        <img 
                            src="https://live.staticflickr.com/65535/54741156968_f2f1431cbd.jpg" 
                            alt="Lilly Combest Logo - Wellness Consultant in Houston" 
                            className="h-16 w-auto"
                        />
                    </a>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('about'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">About</a></li>
                        <li><a href="#services" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('services'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">Services</a></li>
                        <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('testimonials'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">Testimonials</a></li>
                        <li><a href="#blog" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">Blog</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('contact'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">Contact</a></li>
                    </ul>
                </nav>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500">
                    <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>
            <div className={`md:hidden fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 p-2 rounded-md"><svg className="h-8 w-8 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
                <ul className="text-3xl font-medium space-y-8">
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleHomeLinkClick('about'); }} className="text-stone-800 hover:text-rose-500">About</a></li>
                    <li><a href="#services" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleHomeLinkClick('services'); }} className="text-stone-800 hover:text-rose-500">Services</a></li>
                    <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleHomeLinkClick('testimonials'); }} className="text-stone-800 hover:text-rose-500">Testimonials</a></li>
                    <li><a href="#blog" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleNavClick('blog'); }} className="text-stone-800 hover:text-rose-500">Blog</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleHomeLinkClick('contact'); }} className="text-stone-800 hover:text-rose-500">Contact</a></li>
                </ul>
            </div>
        </header>
    );
};

// --- BLOG COMPONENTS ---

const BlogPage = ({ navigate, posts }) => {
    return (
        <section id="blog" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">Wellness & Health Blog</h2>
                <div className="space-y-12">
                    {posts.map(post => (
                        <div key={post.id} className="bg-stone-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-stone-800 mb-2">{post.title}</h3>
                            <p className="text-sm text-stone-500 mb-4">By {post.author} on {post.date}</p>
                            <p className="text-stone-700 mb-6">{post.snippet}</p>
                            <button onClick={() => navigate('post', post.id)} className="text-rose-500 hover:text-rose-600 font-semibold">Read More &rarr;</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BlogPost = ({ navigate, post }) => {
    if (!post) return <div>Post not found.</div>;
    return (
        <section id="blog-post" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <button onClick={() => navigate('blog')} className="text-rose-500 hover:text-rose-600 font-semibold mb-8">&larr; Back to Blog</button>
                <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">{post.title}</h1>
                <p className="text-md text-stone-500 mb-8">By {post.author} on {post.date}</p>
                <div className="prose lg:prose-xl max-w-none text-stone-700" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </section>
    );
};


// --- EXISTING PAGE SECTIONS (UNCHANGED) ---

const HeroSection = ({ smoothScroll }) => {
    return (
        <section className="bg-gradient-to-r from-rose-200 to-amber-100 text-stone-800 py-20 md:py-32 text-center rounded-b-lg shadow-lg">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Houston Wellness Consultant & Life Coach</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Discover holistic medicine and natural healing with Lilly Combest, your expert wellness consultant in The Woodlands, Spring, and the North Houston area. Unlock your health potential through epigenetics.</p>
                <button onClick={() => smoothScroll('contact')} className="bg-white text-rose-600 hover:bg-rose-50 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out inline-block">Book Your Free Wellness Consultation</button>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">Your Health & Wellness Coach in Magnolia, TX</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <img src="https://live.staticflickr.com/65535/54707460080_9268e14b5b_k.jpg" alt="Lilly Combest - Life Coach for Natural Healing" className="rounded-lg shadow-xl w-64 h-64 object-cover border-4 border-rose-300 md:w-full md:h-auto max-w-xs md:max-w-none" />
                    </div>
                    <div className="md:w-2/3 text-lg leading-relaxed">
                        <p className="mb-4">As a passionate <strong className="font-semibold">Wellness Consultant and Life Coach</strong> serving Houston, Magnolia, and Tomball, Lilly Combest is dedicated to your personal health journey. She specializes in integrating cutting-edge <strong className="font-semibold">epigenetics</strong> to offer a truly personalized approach to wellness. This isn't just another diet or remedy; it's a science-backed path to vitality.</p>
                        <p className="mb-4">Her mission is to provide a natural healing strategy through <strong className="font-semibold">holistic medicine</strong>. Lilly helps you understand how your lifestyle impacts your genes, creating customized meal plans, supplement recommendations, and even skincare advice. Achieve lasting well-being with a health plan designed for you.</p>
                        <p>If you're in Pinehurst, Spring, or The Woodlands and looking for a life coach focused on holistic health, discover how Lilly can guide you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesSection = () => {
    const services = [
        {
            title: "Custom Meal Plans & Diet Coaching",
            description: "Personalized diet and meal plans based on your epigenetic profile to optimize your health and wellness. A natural remedy for better living.",
            icon: (
                <svg className="h-12 w-12 text-rose-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002-2h2a2 2 0 002 2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
            ),
            borderColor: "border-rose-300"
        },
        {
            title: "Epigenetics & Health Analysis",
            description: "We analyze your unique genetic expression to provide insights into your health, guiding supplement choices and lifestyle adjustments.",
            icon: (
                <svg className="h-12 w-12 text-sky-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6"/></svg>
            ),
            borderColor: "border-sky-300"
        },
        {
            title: "Holistic Skincare Solutions",
            description: "Achieve radiant skin from within. We offer guidance on skincare and supplements that align with your body's needs.",
            icon: (
                <svg className="h-12 w-12 text-violet-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            ),
            borderColor: "border-violet-300"
        },
        {
            title: "Life Coach for Natural Healing",
            description: "Embrace holistic medicine with a life coach who guides you through natural healing techniques for mind and body wellness.",
            icon: (
                 <svg className="h-12 w-12 text-amber-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            ),
            borderColor: "border-amber-400"
        },
        {
            title: "Corporate Wellness (North Houston)",
            description: "Wellness consultant services for businesses in The Woodlands, Spring, and Tomball to boost employee health and productivity.",
            icon: (
                <svg className="h-12 w-12 text-teal-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            ),
            borderColor: "border-teal-300"
        },
        {
            title: "Supplement Strategy & Guidance",
            description: "Stop guessing which supplements to take. Get a personalized remedy and plan based on scientific data for optimal health.",
            icon: (
                <svg className="h-12 w-12 text-stone-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            ),
            borderColor: "border-stone-400"
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">Holistic Wellness Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 ${service.borderColor}`}>
                            {service.icon}
                            <h3 className="text-xl font-semibold text-stone-900 mb-4 text-center">{service.title}</h3>
                            <p className="text-stone-700 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Lilly is the best wellness consultant in Houston! Her life coach approach combined with epigenetics changed my health. The meal plans were a perfect remedy for my fatigue.",
            author: "Sarah J., The Woodlands, TX",
            borderColor: "border-rose-300"
        },
        {
            quote: "I found Lilly when searching for holistic medicine in Spring. Her natural healing philosophy and guidance on diet and supplements have been invaluable.",
            author: "Mark D., Spring, TX",
            borderColor: "border-sky-300"
        },
        {
            quote: "As a life coach, Lilly is incredible. She helped me with a new diet, skincare routine, and supplements. I highly recommend her wellness services in the Tomball area.",
            author: "Emily R., Tomball, TX",
            borderColor: "border-violet-300"
        },
        {
            quote: "The personalized meal plans and health insights from the epigenetic testing were a game-changer. A top-tier wellness consultant for the North Houston area.",
            author: "David L., Houston, TX",
            borderColor: "border-amber-300"
        }
    ];

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">Client Wellness Journeys</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

const ContactSection = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const showCustomAlert = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
    };

    const closeCustomAlert = () => {
        setShowAlert(false);
        setAlertMessage("");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form data:", data);
        showCustomAlert("Thank you for your message! Lilly will get back to you soon.");
        e.target.reset();
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">Contact Your Houston Wellness Consultant</h2>
                <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-rose-300">
                    <p className="text-center text-lg mb-8 text-stone-700">Ready to begin your natural healing journey? Contact Lilly, your life coach for wellness in Houston, The Woodlands, Magnolia, Tomball, Spring, Pinehurst, and the entire North Houston area.</p>
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
                            <textarea id="message" name="message" rows="5" className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="Tell me about your health and wellness goals..." required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-rose-500 text-white hover:bg-rose-600 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">Send Message</button>
                        </div>
                    </form>
                    <div className="mt-8 text-center text-stone-600">
                        <p>Or connect with your wellness consultant directly:</p>
                        <p className="mt-2 text-lg">Email: <a href="mailto:lilly@lillycombest.com" className="text-rose-500 hover:underline">lilly@lillycombest.com</a></p>
                        <p className="text-lg">Phone: <a href="tel:+18322579197" className="text-rose-500 hover:underline">(832) 257-9197</a></p>
                    </div>
                </div>
            </div>
            {showAlert && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
                        <p className="text-xl font-semibold mb-4 text-stone-800">{alertMessage}</p>
                        <button onClick={closeCustomAlert} className="bg-rose-500 text-white hover:bg-rose-600 font-bold py-2 px-6 rounded-full transition duration-300">Got It!</button>
                    </div>
                </div>
            )}
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-stone-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2025 Lilly Combest | Wellness Consultant & Life Coach | Houston, TX</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#privacy" onClick={e => e.preventDefault()} className="text-stone-400 hover:text-white transition duration-300">Privacy Policy</a>
                    <a href="#terms" onClick={e => e.preventDefault()} className="text-stone-400 hover:text-white transition duration-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default App;
