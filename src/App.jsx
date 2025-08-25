import React, { useState, useEffect, useContext, createContext } from 'react';
import { useForm } from '@formspree/react';

// --- TRANSLATION CONFIGURATION ---
// All text content for both languages is stored here.
const translations = {
  en: {
    translation: {
      // Header & Navigation
      nav_about: "About",
      nav_services: "Services",
      nav_testimonials: "Testimonials",
      nav_blog: "Blog",
      nav_contact: "Contact",
      logo_alt: "Lilly Combest Logo - Wellness Consultant in Houston",

      // Hero Section
      hero_title: "Houston Wellness Consultant",
      hero_subtitle: "Discover holistic wellness and natural health strategies with Lilly Combest, your expert wellness consultant serving The Woodlands, Spring, and the greater North Houston area. Unlock your health's potential through personalized guidance.",
      hero_cta: "Book Your Free Wellness Consultation",

      // About Section
      about_title: "Your Health & Wellness Consultant in Magnolia, TX",
      about_p1: "As a passionate <strong>Wellness Consultant</strong> serving Houston, Magnolia, and Tomball, Lilly Combest is dedicated to your personal health journey. She specializes in creating a truly personalized approach to wellness based on your unique goals. This isn't just another diet or temporary fix; it's a science-backed path to vitality.",
      about_p2: "Her mission is to provide a natural health strategy through a <strong>holistic approach</strong>. Lilly helps you understand how your lifestyle impacts your well-being, creating customized meal plans, supplement recommendations, and even skincare advice. Achieve lasting wellness with a health plan designed specifically for you.",
      about_p3: "If you're in Pinehurst, Spring, or The Woodlands and looking for a consultant focused on holistic health, discover how Lilly can guide you.",
      about_img_alt: "Lilly Combest - Consultant for Natural Wellness",

      // Services Section
      services_title: "Holistic Wellness Services",
      service1_title: "Custom Meal Plans & Diet Coaching",
      service1_desc: "Personalized diet and meal plans based on your unique profile to optimize your health and wellness. A natural approach for better living.",
      service2_title: "Personalized Health Analysis",
      service2_desc: "We analyze your lifestyle and goals to provide insights into your health, guiding supplement choices and lifestyle adjustments.",
      service3_title: "Holistic Skincare Solutions",
      service3_desc: "Achieve radiant skin from within. We offer guidance on skincare and supplements that align with your body's needs.",
      service4_title: "Guidance for Natural Health",
      service4_desc: "Embrace a holistic approach with a consultant who guides you through natural techniques for mind and body wellness.",
      service5_title: "Corporate Wellness (North Houston)",
      service5_desc: "Wellness consulting for businesses in The Woodlands, Spring, and Tomball to boost employee health and productivity.",
      service6_title: "Supplement Strategy & Guidance",
      service6_desc: "Stop guessing which supplements to take. Get a personalized plan based on your wellness goals for optimal health.",
      
      // Testimonials Section
      testimonials_title: "Client Wellness Journeys",
      testimonial1_quote: "Lilly is the best wellness consultant in Houston! Her personalized approach changed my health. The meal plans were a perfect solution for my fatigue.",
      testimonial1_author: "Sarah J., The Woodlands, TX",
      testimonial2_quote: "I found Lilly when searching for holistic wellness in Spring. Her natural health philosophy and guidance on diet and supplements have been invaluable.",
      testimonial2_author: "Mark D., Spring, TX",
      testimonial3_quote: "Lilly is an incredible wellness consultant. She helped me with a new diet, skincare routine, and supplements. I highly recommend her services in the Tomball area.",
      testimonial3_author: "Emily R., Tomball, TX",
      testimonial4_quote: "The personalized meal plans and health insights were a game-changer. A top-tier wellness consultant for the North Houston area.",
      testimonial4_author: "David L., Houston, TX",

      // Contact Section
      contact_title: "Contact Your Houston Wellness Consultant",
      contact_intro: "Ready to begin your natural health journey? Contact Lilly, your wellness consultant for Houston, The Woodlands, Magnolia, Tomball, Spring, Pinehurst, and the entire North Houston area.",
      contact_name: "Name",
      contact_email: "Email",
      contact_message: "Message",
      contact_name_placeholder: "Your Name",
      contact_email_placeholder: "your@email.com",
      contact_message_placeholder: "Tell me about your health and wellness goals...",
      contact_submit: "Send Message",
      contact_connect: "Or connect with your wellness consultant directly:",
      contact_success_message: "Thank you for your message!",
      contact_success_close: "Got It!",

      // Footer
      footer_copyright: "© 2025 Lilly Combest | Wellness Consultant | Houston, TX",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",

      // Blog
      blog_title: "Wellness & Health Blog",
      blog_back_button: "← Back to Blog",
      blog_read_more: "Read More →",
      blog_post1_title: "The Power of Personalized Nutrition: A Natural Approach for Wellness in The Woodlands",
      blog_post1_snippet: "Discover how a personalized approach to health is revolutionizing wellness. As a wellness consultant serving The Woodlands and the greater North Houston area, I see how personalized diet and lifestyle changes can be a natural solution...",
      blog_post1_content: `
          <p class="mb-4">Discover how a personalized approach is revolutionizing our path to health. As a wellness consultant serving The Woodlands and the greater North Houston area, I see how individualized diet and lifestyle changes can act as a natural solution for many of today's health concerns. It’s about how your environment and choices influence your well-being.</p>
          <p class="mb-4">For my clients in Spring, TX, and Pinehurst, the journey often begins with understanding that a holistic approach isn't about a quick fix. It's about creating sustainable habits. Through careful analysis of your goals, we can pinpoint specific needs for supplements, design effective meal plans, and even refine your skincare routine. This data-driven approach to natural health empowers you to take control of your wellness.</p>
          <h3 class="text-2xl font-bold mt-6 mb-4">Your Diet as a Wellness Tool</h3>
          <p>A generic diet plan doesn't account for your unique biology. We work together to create custom meal plans that support your specific health goals, whether it's boosting energy, improving skin clarity, or managing weight. This is the future of wellness, available right here in the North Houston area.</p>
      `,
      blog_post2_title: "Finding Your Houston Wellness Consultant: A Guide to Holistic Health",
      blog_post2_snippet: "Navigating the world of wellness can be overwhelming. As a wellness consultant in Houston, I specialize in holistic and natural health. My goal is to guide you through the noise and help you find a path that works for you...",
      blog_post2_content: `
          <p class="mb-4">Navigating the world of wellness can be overwhelming. As a wellness consultant in Houston, I specialize in holistic and natural health. My goal is to guide you through the noise and help you find a path that works for you, whether you're in Tomball, Magnolia, or right here in Houston.</p>
          <p class="mb-4">A wellness consultant does more than just offer advice; we create a partnership to help you achieve your health goals. This includes everything from developing a sustainable diet and supplement strategy to finding a skincare routine that complements your internal health. We look at the whole picture, because true wellness is interconnected.</p>
          <h3 class="text-2xl font-bold mt-6 mb-4">What is a Holistic Approach?</h3>
          <p>A holistic approach treats the body as a whole, integrated system. Instead of just treating symptoms, we look for the root cause. This should mean adjusting your meal plans, recommending specific supplements as a natural solution, or developing stress-management techniques. It’s a comprehensive approach to long-term health and vitality.</p>
      `,
      blog_post3_title: "Custom Meal Plans for a Healthier You in the North Houston Area",
      blog_post3_snippet: "Are you tired of diets that don't deliver? As a wellness consultant in the North Houston area, I create scientifically-backed meal plans tailored to your unique profile. This isn't just a diet; it's a blueprint for your optimal health...",
      blog_post3_content: `
          <p class="mb-4">Are you tired of diets that don't deliver? As a wellness consultant in the North Houston area, I create scientifically-backed meal plans tailored to your unique profile and goals. This isn't just a diet; it's a blueprint for your optimal health, serving clients from Pinehurst to The Woodlands.</p>
          <p class="mb-4">Your body has unique needs, and a generic meal plan can't address them. We use your health goals to understand what your body craves and what it should avoid. This informs the creation of delicious, easy-to-follow meal plans that work in harmony with your body. We also identify the most effective supplements to support your wellness journey, providing a complete natural health strategy.</p>
      `,
    }
  },
  es: {
    translation: {
      // Header & Navigation
      nav_about: "Sobre Mí",
      nav_services: "Servicios",
      nav_testimonials: "Testimonios",
      nav_blog: "Blog",
      nav_contact: "Contacto",
      logo_alt: "Logo de Lilly Combest - Consultora de Bienestar en Houston",

      // Hero Section
      hero_title: "Consultora de Bienestar en Houston",
      hero_subtitle: "Descubre el bienestar holístico y las estrategias de salud natural con Lilly Combest, tu experta consultora de bienestar en The Woodlands, Spring y el área del norte de Houston. Desbloquea el potencial de tu salud a través de una guía personalizada.",
      hero_cta: "Reserva tu Consulta de Bienestar Gratuita",

      // About Section
      about_title: "Tu Consultora de Salud y Bienestar en Magnolia, TX",
      about_p1: "Como una apasionada <strong>Consultora de Bienestar</strong> que sirve a Houston, Magnolia y Tomball, Lilly Combest se dedica a tu viaje de salud personal. Se especializa en crear un enfoque de bienestar verdaderamente personalizado basado en tus metas únicas. Esto no es solo otra dieta o solución temporal; es un camino hacia la vitalidad respaldado por la ciencia.",
      about_p2: "Su misión es proporcionar una estrategia de salud natural a través de un <strong>enfoque holístico</strong>. Lilly te ayuda a comprender cómo tu estilo de vida impacta tu bienestar, creando planes de comidas personalizados, recomendaciones de suplementos e incluso consejos para el cuidado de la piel. Logra un bienestar duradero con un plan de salud diseñado para ti.",
      about_p3: "Si estás en Pinehurst, Spring o The Woodlands y buscas una consultora enfocada en la salud holística, descubre cómo Lilly puede guiarte.",
      about_img_alt: "Lilly Combest - Consultora para el Bienestar Natural",

      // Services Section
      services_title: "Servicios de Bienestar Holístico",
      service1_title: "Planes de Comidas y Asesoramiento Nutricional Personalizados",
      service1_desc: "Planes de dieta y comidas personalizados basados en tu perfil único para optimizar tu salud y bienestar. Un enfoque natural para una vida mejor.",
      service2_title: "Análisis de Salud Personalizado",
      service2_desc: "Analizamos tu estilo de vida y metas para proporcionar información sobre tu salud, guiando la elección de suplementos y ajustes de estilo de vida.",
      service3_title: "Soluciones Holísticas para el Cuidado de la Piel",
      service3_desc: "Logra una piel radiante desde adentro. Ofrecemos orientación sobre el cuidado de la piel y suplementos que se alinean con las necesidades de tu cuerpo.",
      service4_title: "Guía para la Salud Natural",
      service4_desc: "Adopta un enfoque holístico con una consultora que te guía a través de técnicas naturales para el bienestar de la mente y el cuerpo.",
      service5_title: "Bienestar Corporativo (Norte de Houston)",
      service5_desc: "Servicios de consultoría de bienestar para empresas en The Woodlands, Spring y Tomball para impulsar la salud y productividad de los empleados.",
      service6_title: "Estrategia y Guía de Suplementos",
      service6_desc: "Deja de adivinar qué suplementos tomar. Obtén un plan personalizado basado en tus metas de bienestar para una salud óptima.",

      // Testimonials Section
      testimonials_title: "Historias de Bienestar de Clientes",
      testimonial1_quote: "¡Lilly es la mejor consultora de bienestar en Houston! Su enfoque personalizado cambió mi salud. Los planes de comidas fueron una solución perfecta para mi fatiga.",
      testimonial1_author: "Sarah J., The Woodlands, TX",
      testimonial2_quote: "Encontré a Lilly buscando bienestar holístico en Spring. Su filosofía de salud natural y su guía sobre dieta y suplementos han sido invaluables.",
      testimonial2_author: "Mark D., Spring, TX",
      testimonial3_quote: "Lilly es una consultora de bienestar increíble. Me ayudó con una nueva dieta, rutina de cuidado de la piel y suplementos. Recomiendo encarecidamente sus servicios en el área de Tomball.",
      testimonial3_author: "Emily R., Tomball, TX",
      testimonial4_quote: "Los planes de comidas personalizados y los conocimientos de salud fueron un antes y un después. Una consultora de bienestar de primer nivel para el área del norte de Houston.",
      testimonial4_author: "David L., Houston, TX",

      // Contact Section
      contact_title: "Contacta a tu Consultora de Bienestar en Houston",
      contact_intro: "¿Lista para comenzar tu viaje de salud natural? Contacta a Lilly, tu consultora de bienestar para Houston, The Woodlands, Magnolia, Tomball, Spring, Pinehurst y toda el área del norte de Houston.",
      contact_name: "Nombre",
      contact_email: "Correo Electrónico",
      contact_message: "Mensaje",
      contact_name_placeholder: "Tu Nombre",
      contact_email_placeholder: "tu@email.com",
      contact_message_placeholder: "Cuéntame sobre tus metas de salud y bienestar...",
      contact_submit: "Enviar Mensaje",
      contact_connect: "O conéctate directamente con tu consultora de bienestar:",
      contact_success_message: "¡Gracias por tu mensaje!",
      contact_success_close: "¡Entendido!",

      // Footer
      footer_copyright: "© 2025 Lilly Combest | Consultora de Bienestar | Houston, TX",
      footer_privacy: "Política de Privacidad",
      footer_terms: "Términos de Servicio",
      
      // Blog
      blog_title: "Blog de Bienestar y Salud",
      blog_back_button: "← Volver al Blog",
      blog_read_more: "Leer Más →",
      blog_post1_title: "El Poder de la Nutrición Personalizada: Un Enfoque Natural para el Bienestar en The Woodlands",
      blog_post1_snippet: "Descubre cómo un enfoque personalizado de la salud está revolucionando el bienestar. Como consultora de bienestar que sirve a The Woodlands y el área metropolitana del norte de Houston, veo cómo la dieta y los cambios de estilo de vida personalizados pueden ser una solución natural...",
      blog_post1_content: `
          <p class="mb-4">Descubre cómo un enfoque personalizado está revolucionando nuestro camino hacia la salud. Como consultora de bienestar que sirve a The Woodlands y el área metropolitana del norte de Houston, veo cómo los cambios individualizados en la dieta y el estilo de vida pueden actuar como una solución natural para muchas de las preocupaciones de salud actuales. Se trata de cómo tu entorno y tus elecciones influyen en tu bienestar.</p>
          <p class="mb-4">Para mis clientes en Spring, TX y Pinehurst, el viaje a menudo comienza con la comprensión de que un enfoque holístico no es una solución rápida. Se trata de crear hábitos sostenibles. A través de un análisis cuidadoso de tus metas, podemos identificar necesidades específicas de suplementos, diseñar planes de comidas efectivos e incluso refinar tu rutina de cuidado de la piel. Este enfoque basado en datos para la salud natural te empodera para tomar el control de tu bienestar.</p>
          <h3 class="text-2xl font-bold mt-6 mb-4">Tu Dieta como Herramienta de Bienestar</h3>
          <p>Un plan de dieta genérico no tiene en cuenta tu biología única. Trabajamos juntos para crear planes de comidas personalizados que apoyen tus objetivos de salud específicos, ya sea aumentar la energía, mejorar la claridad de la piel o controlar el peso. Este es el futuro del bienestar, disponible aquí mismo en el área del norte de Houston.</p>
      `,
      blog_post2_title: "Encontrando a tu Consultora de Bienestar en Houston: Una Guía para la Salud Holística",
      blog_post2_snippet: "Navegar por el mundo del bienestar puede ser abrumador. Como consultora de bienestar en Houston, me especializo en salud holística y natural. Mi objetivo es guiarte a través del ruido y ayudarte a encontrar un camino que funcione para ti...",
      blog_post2_content: `
          <p class="mb-4">Navegar por el mundo del bienestar puede ser abrumador. Como consultora de bienestar en Houston, me especializo en salud holística y natural. Mi objetivo es guiarte a través del ruido y ayudarte a encontrar un camino que funcione para ti, ya sea que estés en Tomball, Magnolia o aquí mismo en Houston.</p>
          <p class="mb-4">Una consultora de bienestar hace más que solo ofrecer consejos; creamos una asociación para ayudarte a alcanzar tus metas de salud. Esto incluye todo, desde desarrollar una dieta sostenible y una estrategia de suplementos hasta encontrar una rutina de cuidado de la piel que complemente tu salud interna. Miramos el panorama completo, porque el verdadero bienestar está interconectado.</p>
          <h3 class="text-2xl font-bold mt-6 mb-4">¿Qué es un Enfoque Holístico?</h3>
          <p>Un enfoque holístico trata el cuerpo como un sistema completo e integrado. En lugar de solo tratar los síntomas, buscamos la causa raíz. Esto podría significar ajustar tus planes de comidas, recomendar suplementos específicos como solución natural o desarrollar técnicas de manejo del estrés. Es un enfoque integral para la salud y la vitalidad a largo plazo.</p>
      `,
      blog_post3_title: "Planes de Comidas Personalizados para un Tú Más Saludable en el Área del Norte de Houston",
      blog_post3_snippet: "¿Estás cansado de las dietas que no funcionan? Como consultora de bienestar en el área del norte de Houston, creo planes de comidas respaldados por la ciencia y adaptados a tu perfil único. Esto no es solo una dieta; es un plan para tu salud óptima...",
      blog_post3_content: `
          <p class="mb-4">¿Estás cansado de las dietas que no funcionan? Como consultora de bienestar en el área del norte de Houston, creo planes de comidas respaldados por la ciencia y adaptados a tu perfil y metas únicas. Esto no es solo una dieta; es un plan para tu salud óptima, sirviendo a clientes desde Pinehurst hasta The Woodlands.</p>
          <p class="mb-4">Tu cuerpo tiene necesidades únicas, y un plan de comidas genérico no puede abordarlas. Usamos tus metas de salud para entender lo que tu cuerpo anhela y lo que debe evitar. Esto informa la creación de planes de comidas deliciosos y fáciles de seguir que funcionan en armonía con tu cuerpo. También identificamos los suplementos más efectivos para apoyar tu viaje de bienestar, proporcionando una estrategia completa de salud natural.</p>
      `,
    }
  }
};

// --- CUSTOM I18N IMPLEMENTATION ---
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const t = (key) => {
        // Basic key navigation, e.g., "hero_title"
        return translations[language]?.translation[key] || translations['en']?.translation[key] || key;
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, t, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

const useTranslation = () => useContext(LanguageContext);

// --- BLOG DATA (Now uses i18n keys) ---
const getBlogPosts = (t) => [
    { id: 1, author: "Lilly Combest", date: "August 24, 2025", titleKey: "blog_post1_title", snippetKey: "blog_post1_snippet", contentKey: "blog_post1_content" },
    { id: 2, author: "Lilly Combest", date: "August 18, 2025", titleKey: "blog_post2_title", snippetKey: "blog_post2_snippet", contentKey: "blog_post2_content" },
    { id: 3, author: "Lilly Combest", date: "August 12, 2025", titleKey: "blog_post3_title", snippetKey: "blog_post3_snippet", contentKey: "blog_post3_content" },
];


// Main App Component
function AppInternal() {
    const [view, setView] = useState({ page: 'home', id: null });

    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const navigate = (page, id = null) => {
        setView({ page, id });
    };

    const renderContent = () => {
        switch (view.page) {
            case 'blog':
                return <BlogPage navigate={navigate} />;
            case 'post':
                return <BlogPost navigate={navigate} postId={view.id} />;
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

// Language Switcher Component
const LanguageSwitcher = () => {
    const { language, changeLanguage } = useTranslation();
    
    return (
        <div className="flex items-center space-x-2 ml-4">
            <button 
                onClick={() => changeLanguage('en')} 
                className={`px-3 py-1 text-sm rounded-md font-semibold transition-colors ${language === 'en' ? 'bg-rose-500 text-white' : 'bg-stone-200 text-stone-700'}`}
            >
                EN
            </button>
            <button 
                onClick={() => changeLanguage('es')} 
                className={`px-3 py-1 text-sm rounded-md font-semibold transition-colors ${language === 'es' ? 'bg-rose-500 text-white' : 'bg-stone-200 text-stone-700'}`}
            >
                ES
            </button>
        </div>
    );
};

// Header Component
const Header = ({ smoothScroll, navigate, setView }) => {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (page) => {
        navigate(page);
        setIsMobileMenuOpen(false);
    };

    const handleHomeLinkClick = (id) => {
        setView({ page: 'home', id: null });
        setIsMobileMenuOpen(false);
        setTimeout(() => smoothScroll(id), 100);
    };

    return (
        <header className="bg-white shadow-sm py-2 sticky top-0 z-40">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="flex-shrink-0">
                    <img src="https://live.staticflickr.com/65535/54741156968_f2f1431cbd.jpg" alt={t('logo_alt')} className="h-16 w-auto"/>
                </a>
                <div className="hidden md:flex items-center">
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('about'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">{t('nav_about')}</a></li>
                            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('services'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">{t('nav_services')}</a></li>
                            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('testimonials'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">{t('nav_testimonials')}</a></li>
                            <li><a href="#blog" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">{t('nav_blog')}</a></li>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('contact'); }} className="text-stone-600 hover:text-rose-500 transition duration-300">{t('nav_contact')}</a></li>
                        </ul>
                    </nav>
                    <LanguageSwitcher />
                </div>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500">
                    <svg className="h-6 w-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>
            <div className={`md:hidden fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 p-2 rounded-md"><svg className="h-8 w-8 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
                <ul className="text-3xl font-medium space-y-8 text-center">
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('about'); }} className="text-stone-800 hover:text-rose-500">{t('nav_about')}</a></li>
                    <li><a href="#services" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('services'); }} className="text-stone-800 hover:text-rose-500">{t('nav_services')}</a></li>
                    <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('testimonials'); }} className="text-stone-800 hover:text-rose-500">{t('nav_testimonials')}</a></li>
                    <li><a href="#blog" onClick={(e) => { e.preventDefault(); handleNavClick('blog'); }} className="text-stone-800 hover:text-rose-500">{t('nav_blog')}</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleHomeLinkClick('contact'); }} className="text-stone-800 hover:text-rose-500">{t('nav_contact')}</a></li>
                </ul>
                 <LanguageSwitcher />
            </div>
        </header>
    );
};


// --- BLOG COMPONENTS ---
const BlogPage = ({ navigate }) => {
    const { t } = useTranslation();
    const posts = getBlogPosts(t);

    return (
        <section id="blog" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">{t('blog_title')}</h2>
                <div className="space-y-12">
                    {posts.map(post => (
                        <div key={post.id} className="bg-stone-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-stone-800 mb-2">{t(post.titleKey)}</h3>
                            <p className="text-sm text-stone-500 mb-4">By {post.author} on {post.date}</p>
                            <p className="text-stone-700 mb-6">{t(post.snippetKey)}</p>
                            <button onClick={() => navigate('post', post.id)} className="text-rose-500 hover:text-rose-600 font-semibold">{t('blog_read_more')}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BlogPost = ({ navigate, postId }) => {
    const { t } = useTranslation();
    const posts = getBlogPosts(t);
    const post = posts.find(p => p.id === postId);

    if (!post) return <div>Post not found.</div>;

    return (
        <section id="blog-post" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <button onClick={() => navigate('blog')} className="text-rose-500 hover:text-rose-600 font-semibold mb-8">{t('blog_back_button')}</button>
                <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">{t(post.titleKey)}</h1>
                <p className="text-md text-stone-500 mb-8">By {post.author} on {post.date}</p>
                <div className="prose lg:prose-xl max-w-none text-stone-700" dangerouslySetInnerHTML={{ __html: t(post.contentKey) }} />
            </div>
        </section>
    );
};

// --- HOMEPAGE COMPONENTS ---
const HeroSection = ({ smoothScroll }) => {
    const { t } = useTranslation();
    return (
        <section className="bg-gradient-to-r from-rose-200 to-amber-100 text-stone-800 py-20 md:py-32 text-center rounded-b-lg shadow-lg">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">{t('hero_title')}</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{t('hero_subtitle')}</p>
                <button onClick={() => smoothScroll('contact')} className="bg-white text-rose-600 hover:bg-rose-50 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">{t('hero_cta')}</button>
            </div>
        </section>
    );
};

const AboutSection = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">{t('about_title')}</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-8">
                    <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                        <img src="https://live.staticflickr.com/65535/54707460080_9268e14b5b_k.jpg" alt={t('about_img_alt')} className="rounded-lg shadow-xl w-64 h-64 object-cover border-4 border-rose-300 md:w-full md:h-auto max-w-xs md:max-w-none" />
                    </div>
                    <div className="md:w-2/3 text-lg leading-relaxed">
                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('about_p1') }} />
                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('about_p2') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('about_p3') }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesSection = () => {
    const { t } = useTranslation();
    const services = [
        { title: t('service1_title'), description: t('service1_desc'), icon: <svg className="h-12 w-12 text-rose-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002-2h2a2 2 0 002 2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>, borderColor: "border-rose-300" },
        { title: t('service2_title'), description: t('service2_desc'), icon: <svg className="h-12 w-12 text-sky-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6"/></svg>, borderColor: "border-sky-300" },
        { title: t('service3_title'), description: t('service3_desc'), icon: <svg className="h-12 w-12 text-violet-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>, borderColor: "border-violet-300" },
        { title: t('service4_title'), description: t('service4_desc'), icon: <svg className="h-12 w-12 text-amber-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>, borderColor: "border-amber-400" },
        { title: t('service5_title'), description: t('service5_desc'), icon: <svg className="h-12 w-12 text-teal-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>, borderColor: "border-teal-300" },
        { title: t('service6_title'), description: t('service6_desc'), icon: <svg className="h-12 w-12 text-stone-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, borderColor: "border-stone-400" },
    ];
    return (
        <section id="services" className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">{t('services_title')}</h2>
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
    const { t } = useTranslation();
    const testimonials = [
        { quote: t('testimonial1_quote'), author: t('testimonial1_author'), borderColor: "border-rose-300" },
        { quote: t('testimonial2_quote'), author: t('testimonial2_author'), borderColor: "border-sky-300" },
        { quote: t('testimonial3_quote'), author: t('testimonial3_author'), borderColor: "border-violet-300" },
        { quote: t('testimonial4_quote'), author: t('testimonial4_author'), borderColor: "border-amber-300" },
    ];
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">{t('testimonials_title')}</h2>
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
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("xzzapyen");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-16 md:py-24 bg-stone-100">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <div className="bg-white p-12 rounded-lg shadow-xl border-t-4 border-rose-300">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-stone-900">{t('contact_success_message')}</h2>
                        <p className="text-lg text-stone-700">Lilly will get back to you soon.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">{t('contact_title')}</h2>
                <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-rose-300">
                    <p className="text-center text-lg mb-8 text-stone-700">{t('contact_intro')}</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-stone-700">{t('contact_name')}</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder={t('contact_name_placeholder')} required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-stone-700">{t('contact_email')}</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder={t('contact_email_placeholder')} required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-stone-700">{t('contact_message')}</label>
                            <textarea id="message" name="message" rows="5" className="mt-1 block w-full px-4 py-2 border border-stone-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder={t('contact_message_placeholder')} required></textarea>
                        </div>
                        <div className="text-center">
                             <button 
                                type="submit" 
                                disabled={state.submitting} 
                                className="bg-rose-500 text-white hover:bg-rose-600 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out disabled:bg-stone-400 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? 'Sending...' : t('contact_submit')}
                            </button>
                        </div>
                    </form>
                    <div className="mt-8 text-center text-stone-600">
                        <p>{t('contact_connect')}</p>
                        <p className="mt-2 text-lg">Email: <a href="mailto:lilly@lillycombest.com" className="text-rose-500 hover:underline">lilly@lillycombest.com</a></p>
                        <p className="text-lg">Phone: <a href="tel:+18322579197" className="text-rose-500 hover:underline">(832) 257-9197</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-stone-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>{t('footer_copyright')}</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#privacy" onClick={e => e.preventDefault()} className="text-stone-400 hover:text-white transition duration-300">{t('footer_privacy')}</a>
                    <a href="#terms" onClick={e => e.preventDefault()} className="text-stone-400 hover:text-white transition duration-300">{t('footer_terms')}</a>
                </div>
            </div>
        </footer>
    );
};

// The main export wraps the app in the language provider
export default function App() {
    return (
        <LanguageProvider>
            <AppInternal />
        </LanguageProvider>
    );
}
