// Translation System for CleanLine Website
(function() {
    'use strict';

    // Translation dictionaries
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.services': 'Services',
            'nav.portfolio': 'Portfolio',
            'nav.pricing': 'Pricing',
            'hero.subtitle': 'Leave the house cleaning chores to us',
            'hero.title': 'Let us do the dirty work, so you don\'t have to.',
            'services.subtitle': 'Services',
            'services.title': 'How We Work',
            'service.office.title': 'Office Cleaning',
            'service.office.desc': 'Comprehensive office cleaning to keep your workplace fresh, sanitized and professional for employees and visitors.',
            'service.pool.title': 'Pool Cleaning',
            'service.pool.desc': 'Specialized pool cleaning and chemical balancing to ensure clear, safe water and well-maintained pool areas.',
            'service.carpet.title': 'Carpet Cleaning',
            'service.carpet.desc': 'Deep carpet and rug cleaning using professional equipment to remove dirt, stains, and allergens for a healthier home.',
            'service.kitchen.title': 'Kitchen Cleaning',
            'service.kitchen.desc': 'Thorough kitchen cleaning and degreasing to ensure food-preparation areas are spotless and hygienic.',
            'service.garden.title': 'Garden Cleaning',
            'service.garden.desc': 'Garden and outdoor area maintenance to keep lawns, paths and patios tidy and inviting year-round.',
            'service.window.title': 'Window Cleaning',
            'service.window.desc': 'Professional window and glass cleaning for streak-free, crystal-clear views — inside and out.',
            'readmore': 'Read more',
            'project.subtitle': 'Our Project',
            'project.title': 'We have done many latest cleaning project',
            'project.house': 'House Cleaning',
            'project.window': 'Window Cleaning',
            'project.pool': 'Pool Cleaning',
            'project.office': 'Office Cleaning',
            'project.carpet': 'Carpet Cleaning',
            'project.garden': 'Garden Cleaning',
            'counter.subtitle': 'Happy Customer',
            'counter.title': 'Together we will explore new things',
            'counter.testimonies': 'Testimonies',
            'pricing.subtitle': 'Price & Plans',
            'pricing.title': 'Choose Your Perfect Plans',
            'pricing.maintenance': 'Maintenance Cleaning',
            'pricing.general': 'General Cleaning',
            'pricing.fixed': 'Fixed price – no hidden costs',
            'pricing.carpet.title': 'Carpets & Rugs Cleaning',
            'pricing.carpet.price': 'Price: 6 – 10 RON/m²',
            'pricing.carpet.minimum': '(minimum order 250 RON)',
            'pricing.room.title': 'Room-by-Room Services',
            'pricing.room.included': 'Included in general cleaning packages',
            'pricing.upholstery.title': 'Upholstery & Textiles Cleaning',
            'pricing.upholstery.desc': 'Professional cleaning without damaging materials',
            'contact.title': 'Contact Us',
            'contact.subtitle': 'Have questions or ready to book?',
            'contact.message': 'Send us a message and we\'ll get back to you as soon as possible!'
        },
        ro: {
            'nav.home': 'Acasă',
            'nav.services': 'Servicii',
            'nav.portfolio': 'Portofoliu',
            'nav.pricing': 'Prețuri',
            'hero.subtitle': 'Lasă treburile de curățenie ale casei pe seama noastră',
            'hero.title': 'Lasă-ne pe noi să facem treaba murdară, ca tu să nu trebuie.',
            'services.subtitle': 'Servicii',
            'services.title': 'Cum Lucrăm',
            'service.office.title': 'Curățenie Birou',
            'service.office.desc': 'Curățenie completă de birou pentru a menține locul de muncă proaspăt, igienizat și profesional pentru angajați și vizitatori.',
            'service.pool.title': 'Curățenie Piscină',
            'service.pool.desc': 'Curățenie specializată de piscină și echilibrare chimică pentru a asigura apă clară, sigură și zone de piscină bine întreținute.',
            'service.carpet.title': 'Curățenie Covoare',
            'service.carpet.desc': 'Curățenie profundă a covoarelor și preșurilor folosind echipamente profesionale pentru a elimina murdăria, petele și alergenii pentru o casă mai sănătoasă.',
            'service.kitchen.title': 'Curățenie Bucătărie',
            'service.kitchen.desc': 'Curățenie amănunțită a bucătăriei și degresare pentru a asigura că zonele de preparare a alimentelor sunt impecabile și igienice.',
            'service.garden.title': 'Curățenie Grădină',
            'service.garden.desc': 'Întreținere grădină și zone exterioare pentru a menține gazonul, aleile și terasele curate și primitoare pe tot parcursul anului.',
            'service.window.title': 'Curățenie Ferestre',
            'service.window.desc': 'Curățenie profesională a ferestrelor și geamurilor pentru vederi cristaline, fără urme — interior și exterior.',
            'readmore': 'Citește mai mult',
            'counter.testimonies': 'Mărturii',
            'project.subtitle': 'Proiectul Nostru',
            'project.title': 'Am realizat multe proiecte de curățenie recente',
            'project.house': 'Curățenie Casă',
            'project.window': 'Curățenie Ferestre',
            'project.pool': 'Curățenie Piscină',
            'project.office': 'Curățenie Birou',
            'project.carpet': 'Curățenie Covoare',
            'project.garden': 'Curățenie Grădină',
            'counter.subtitle': 'Clienți Mulțumiți',
            'counter.title': 'Împreună vom explora lucruri noi',
            'pricing.subtitle': 'Prețuri & Planuri',
            'pricing.title': 'Alege Planurile Tale Perfecte',
            'pricing.maintenance': 'Curățenie de Întreținere',
            'pricing.general': 'Curățenie Generală',
            'pricing.fixed': 'Preț fix – fără costuri ascunse',
            'pricing.carpet.title': 'Curățenie Covoare & Preșuri',
            'pricing.carpet.price': 'Preț: 6 – 10 RON/m²',
            'pricing.carpet.minimum': '(comandă minimă 250 RON)',
            'pricing.room.title': 'Servicii Cameră cu Cameră',
            'pricing.room.included': 'Incluse în pachetele de curățenie generală',
            'pricing.upholstery.title': 'Curățenie Tapițerie & Textile',
            'pricing.upholstery.desc': 'Curățenie profesională fără deteriorarea materialelor',
            'contact.title': 'Contactează-ne',
            'contact.subtitle': 'Ai întrebări sau ești gata să rezervi?',
            'contact.message': 'Trimite-ne un mesaj și te vom contacta cât mai curând posibil!'
        }
    };

    // Current language
    let currentLang = localStorage.getItem('language') || 'en';

    // Initialize translation on page load
    function init() {
        // Set initial language
        updateLanguage(currentLang, false);

        // Add click event to language toggle button
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', function(e) {
                e.preventDefault();
                toggleLanguage();
            });
        }
    }

    // Toggle between languages
    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'ro' : 'en';
        updateLanguage(currentLang, true);
    }

    // Update all translatable elements
    function updateLanguage(lang, saveToStorage) {
        // Save preference to localStorage
        if (saveToStorage) {
            localStorage.setItem('language', lang);
        }

        // Update language indicator
        const currentLangElement = document.getElementById('currentLang');
        if (currentLangElement) {
            currentLangElement.textContent = lang.toUpperCase();
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Translate all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(function(element) {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Add smooth transition effect
        elements.forEach(function(element) {
            element.style.transition = 'opacity 0.3s ease';
            element.style.opacity = '0';
            setTimeout(function() {
                element.style.opacity = '1';
            }, 50);
        });
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
