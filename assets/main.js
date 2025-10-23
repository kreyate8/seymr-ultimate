document.addEventListener('DOMContentLoaded', () => {

            const translations = {
                fr: {
                    loadingTagline: "ART FRÉQUENTIEL",
                    navWork: "L'Œuvre",
                    navPhilosophy: "Philosophie",
                    navCreations: "Créations",
                    navBook: "Le Livre",
                    navArchives: "Archives",
                    navContact: "Contact",
                    navSanctuary: "Sanctuaire",
                    mobileNavWork: "L'Œuvre",
                    mobileNavPhilosophy: "Philosophie",
                    mobileNavCreations: "Créations",
                    mobileNavBook: "Le Livre",
                    mobileNavArchives: "Archives",
                    mobileNavContact: "Contact",
                    mobileNavSanctuary: "Sanctuaire",
                    heroSubtitle: "Maison de Création",
                    heroEssence: "Où le principe devient matière, et la matière devient héritage.",
                    heroCtaExplore: "Explorer les créations",
                    heroCtaInitiate: "Initier le protocole",
                    workTitle: "L'Œuvre Unique",
                    workSubtitle: "Algorithm Human — $110,000",
                    workDescription: "\"Algorithm Human\" est l'œuvre matricielle qui fonde l'identité de la Maison SEYMR®. Acclamée et présentée par Redwood Art Group, sa valorisation sur le marché de l'art établit la légitimité et la puissance de notre grammaire visuelle. Chaque création de la Maison est une déclinaison de cette vision originelle, un fragment de son ADN fréquentiel.",
                    workCta: "Consulter sur Redwood Art Group",
                    certificationTitle: "Héritage & Certificat",
                    certificationText: "Chaque œuvre SEYMR® est parachevée par son certificat de propriété numérique inaltérable. Gravé dans un registre cryptographique, il est la garantie absolue de la provenance, de l'authenticité et de la transmissibilité de votre actif. Il transforme votre acquisition en un héritage souverain et éternel.",
                    certificationLink: "Vérifier notre Portfolio",
                    philosophyTitle: "PHILOSOPHIE",
                    philosophyTab1: "Principe Fréquentiel",
                    philosophyTab2: "Alchimie Matérielle",
                    philosophyTab3: "Héritage Inaltérable",
                    philosophyPillar1Title: "L'Intelligence de la Grammaire",
                    philosophyPillar1Desc: "Toute création prend sa source dans notre grammaire visuelle propriétaire : une synthèse souveraine fusionnant l'harmonie des principes de Kemet avec la sagesse d'Abya Yala. Au sein de cette grammaire, la ligne devient intention, la forme information. C'est l'ADN de la Maison, un langage conçu pour structurer l’espace et dialoguer avec la conscience.",
                    philosophyPillar2Title: "L'Incarnation du Principe",
                    philosophyPillar2Desc: "Le principe s'incarne dans la matière par une alchimie d'exception, orchestrée au cœur de notre manufacture londonienne. Nous sélectionnons des matériaux nobles pour leur capacité intrinsèque à recevoir et magnifier cette empreinte vibratoire. Des techniques de pointe inscrivent l'information au cœur de la fibre, transformant la grammaire visuelle en une présence active. La forme est la fonction.",
                    philosophyPillar3Title: "La Pérennité de l'Actif",
                    philosophyPillar3Desc: "Toute œuvre est parachevée par son certificat de propriété numérique inaltérable. C’est l’acte final de notre protocole : graver dans un registre cryptographique l’authenticité de la pièce, son numéro unique et sa généalogie. Ce certificat est la garantie absolue de la provenance et de la transmissibilité de votre actif, le transformant en un héritage souverain et éternel.",
                    creationsTitle: "CRÉATIONS",
                    creationsIntro: "CRÉATIONS ONTOLOGIQUES DISPONIBLES",
                    
                    productName1: "FAUTEUIL « SISIT »",
                    productTagline1: "L'art comme expérience à vivre",
                    productName2: "PARAVENT",
                    productTagline2: "Une architecture fréquentielle",
                    productName3: "TAPIS « NEXUS »",
                    productTagline3: "Une fondation territoriale",
                    productName4: "REPOSE-PIEDS « SATELLITE »",
                    productTagline4: "Un satellite d'influence",
                    productName5: "POUF « COSMOSIS »",
                    productTagline5: "Centre de gravité",
                    productName6: "TIRAGE D'ART",
                    productTagline6: "Une archive fréquentielle encadrée",
                    productName7: "SAC « LE CONQUEROR »",
                    productTagline7: "Un territoire nomade",
                    productName8: "PORTE-DOCUMENTS",
                    productTagline8: "Une archive de pouvoir",
                    productName9: "VALISE",
                    productTagline9: "Un vecteur de souveraineté",
                    productName10: "CASQUETTE",
                    productTagline10: "Un sceau de reconnaissance",
                    
                    bookTitle: "LE LIVRE",
                    bookSubtitle: "Grammaire Visuelle Caribéenne",
                    bookDescription: "Ce livre est la clé de voûte de l'univers SEYMR®. Il théorise et documente la genèse de notre grammaire visuelle, de ses origines philosophiques à son incarnation dans la matière. Plus qu'un livre d'art, c'est un manifeste qui établit les principes de l'Art Fréquentiel comme un pont entre le patrimoine ancestral et l'héritage futur.",
                    bookCta: "Demander l'accès au manifeste",
                    archivesTitle: "ARCHIVES",
                    article1Title: "L'Art Fréquentiel comme Actif",
                    article1Excerpt: "Analyse de la valeur patrimoniale de l'art non-conventionnel à l'ère numérique...",
                    article2Title: "Kemet et la Géométrie Sacrée",
                    article2Excerpt: "Comment les principes millénaires de l'harmonie inspirent la création contemporaine...",
                    article3Title: "Le Savoir-Faire de la Manufacture",
                    article3Excerpt: "Plongée au cœur de nos ateliers londoniens, là où l'intention devient matière...",
                    articleReadMore: "Lire la suite",
                    contactTitle: "Protocole d'Acquisition Privé",
                    formLabelName: "Nom Complet",
                    formLabelEmail: "Adresse E-mail",
                    formLabelInterest: "Création d'intérêt",
                    formSelectDefault: "Sélectionner une création...",
                    formSelectP1: "FAUTEUIL « SISIT »",
                    formSelectP2: "PARAVENT",
                    formSelectP3: "TAPIS « NEXUS »",
                    formSelectP4: "REPOSE-PIEDS « SATELLITE »",
                    formSelectP5: "POUF « COSMOSIS »",
                    formSelectP6: "TIRAGE D'ART",
                    formSelectP7: "SAC « LE CONQUEROR »",
                    formSelectP8: "PORTE-DOCUMENTS",
                    formSelectP9: "VALISE",
                    formSelectP10: "CASQUETTE",
                    formSelectBook: "Le Livre",
                    formSelectOther: "Autre demande",
                    formLabelPersonalization: "Personnalisation (Initiales ou Nom)",
                    formPlaceholderPersonalization: "Ex: J.D. ou John Doe",
                    formLabelMessage: "Votre Message",
                    formSubmit: "Initier la demande de conseil",
                    footerCopyright: "Maison de Création © SEYMR. Tous droits réservés.",
                    footerNav: "Navigation",
                    footerPhilosophy: "Philosophie",
                    footerCreations: "Créations",
                    footerBook: "Le Livre",
                    footerSanctuary: "Sanctuaire",
                    footerLegal: "Légal",
                    footerTerms: "Conditions Générales de Vente",
                    footerPrivacy: "Politique de Confidentialité",
                    footerMentions: "Mentions Légales",
                    footerFaq: "FAQ",
                    sanctuaryTitle: "Le Sanctuaire Privé",
                    sanctuaryDesc: "Le Sanctuaire est l'espace numérique réservé exclusivement à nos collectionneurs. L'accès est accordé après votre première acquisition. Vous pourrez y gérer votre patrimoine SEYMR®, suivre la genèse de vos œuvres et consulter votre certificat de propriété inaltérable. C'est le prolongement de l'expérience, où la relation avec la Maison devient un dialogue continu.",
                    cookieText: "SEYMR® utilise des traceurs pour assurer le fonctionnement du site et optimiser votre expérience. Pour en savoir plus, consultez notre Politique de Confidentialité.",
                    cookieAccept: "Accepter",
                    chatTitle: "Concierge Digital",
                    chatWelcome: "Bienvenue à la Maison SEYMR®. Comment puis-je vous guider ?",
                    chatReply1: "Explorer les créations",
                    chatReply2: "Notre Philosophie",
                    chatReply3: "Parler à un conseiller",
                    
                },
                en: {
                    loadingTagline: "FREQUENTIAL ART",
                    navWork: "The Work",
                    navPhilosophy: "Philosophy",
                    navCreations: "Creations",
                    navBook: "The Book",
                    navArchives: "Archives",
                    navContact: "Contact",
                    navSanctuary: "Sanctuary",
                    mobileNavWork: "The Work",
                    mobileNavPhilosophy: "Philosophy",
                    mobileNavCreations: "Creations",
                    mobileNavBook: "The Book",
                    mobileNavArchives: "Archives",
                    mobileNavContact: "Contact",
                    mobileNavSanctuary: "Sanctuary",
                    heroSubtitle: "Creation House",
                    heroEssence: "Where principle becomes matter, and matter becomes heritage.",
                    heroCtaExplore: "Explore Creations",
                    heroCtaInitiate: "Initiate Protocol",
                    workTitle: "The Unique Work",
                    workSubtitle: "Algorithm Human — $110,000",
                    workDescription: "\"Algorithm Human\" is the matrix artwork that founds the identity of the House of SEYMR®. Acclaimed and presented by Redwood Art Group, its valuation on the art market establishes the legitimacy and power of our visual grammar. Each creation of the House is a variation of this original vision, a fragment of its frequential DNA.",
                    workCta: "View on Redwood Art Group",
                    certificationTitle: "Heritage & Certificate",
                    certificationText: "Each SEYMR® work is perfected by its unalterable digital certificate of ownership. Engraved in a cryptographic ledger, it is the absolute guarantee of your asset's provenance, authenticity, and transmissibility. It transforms your acquisition into a sovereign and eternal heritage.",
                    certificationLink: "Verify our Portfolio",
                    philosophyTitle: "PHILOSOPHY",
                    philosophyTab1: "Frequential Principle",
                    philosophyTab2: "Material Alchemy",
                    philosophyTab3: "Unalterable Heritage",
                    philosophyPillar1Title: "The Intelligence of Grammar",
                    philosophyPillar1Desc: "All creation originates from our proprietary visual grammar: a sovereign synthesis merging the harmony of Kemet's principles with the wisdom of Abya Yala. Within this grammar, line becomes intention, form becomes information. It is the very DNA of the House, a language designed to structure space and dialogue with consciousness.",
                    philosophyPillar2Title: "The Embodiment of Principle",
                    philosophyPillar2Desc: "The principle is embodied in matter through an alchemy of exception, orchestrated within our London manufacture. We select noble materials for their intrinsic ability to receive and magnify this vibrational imprint. Cutting-edge techniques inscribe the information into the core of the fiber, transforming the visual grammar into an active presence. Form is function.",
                    philosophyPillar3Title: "The Perpetuity of the Asset",
                    philosophyPillar3Desc: "Every work is perfected by its unalterable digital certificate of ownership. This is the final act of our protocol: engraving the piece's authenticity, its unique number, and its genealogy into a cryptographic ledger. This certificate is the absolute guarantee of your asset's provenance and transmissibility, transforming it into a sovereign and eternal heritage.",
                    creationsTitle: "CREATIONS",
                    creationsIntro: "ONTOLOGICAL CREATIONS AVAILABLE",
                    
                    productName1: "ARMCHAIR “SISIT”",
                    productTagline1: "Art as a lived experience",
                    productName2: "SCREEN",
                    productTagline2: "A frequential architecture",
                    productName3: "RUG “NEXUS”",
                    productTagline3: "A territorial foundation",
                    productName4: "FOOTSTOOL “SATELLITE”",
                    productTagline4: "A satellite of influence",
                    productName5: "POUF “COSMOSIS”",
                    productTagline5: "Center of gravity",
                    productName6: "ART PRINT",
                    productTagline6: "A framed frequential archive",
                    productName7: "BAG “THE CONQUEROR”",
                    productTagline7: "A nomadic territory",
                    productName8: "PORTFOLIO",
                    productTagline8: "An archive of power",
                    productName9: "SUITCASE",
                    productTagline9: "A vector of sovereignty",
                    productName10: "CAP",
                    productTagline10: "A seal of recognition",

                    bookTitle: "THE BOOK",
                    bookSubtitle: "Caribbean Visual Grammar",
                    bookDescription: "This book is the keystone of the SEYMR® universe. It theorizes and documents the genesis of our visual grammar, from its philosophical origins to its material embodiment. More than an art book, it is a manifesto that establishes the principles of Frequential Art as a bridge between ancestral heritage and future legacy.",
                    bookCta: "Request access to the manifesto",
                    archivesTitle: "ARCHIVES",
                    article1Title: "Frequential Art as an Asset",
                    article1Excerpt: "Analysis of the heritage value of unconventional art in the digital age...",
                    article2Title: "Kemet and Sacred Geometry",
                    article2Excerpt: "How millennial principles of harmony inspire contemporary creation...",
                    article3Title: "The Manufacture's Savoir-Faire",
                    article3Excerpt: "A dive into the heart of our London workshops, where intention becomes matter...",
                    articleReadMore: "Read More",
                    contactTitle: "Private Acquisition Protocol",
                    formLabelName: "Full Name",
                    formLabelEmail: "Email Address",
                    formLabelInterest: "Creation of Interest",
                    formSelectDefault: "Select a creation...",
                    formSelectP1: "ARMCHAIR “SISIT”",
                    formSelectP2: "SCREEN",
                    formSelectP3: "RUG “NEXUS”",
                    formSelectP4: "FOOTSTOOL “SATELLITE”",
                    formSelectP5: "POUF “COSMOSIS”",
                    formSelectP6: "ART PRINT",
                    formSelectP7: "BAG “THE CONQUEROR”",
                    formSelectP8: "PORTFOLIO",
                    formSelectP9: "SUITCASE",
                    formSelectP10: "CAP",
                    formSelectBook: "The Book",
                    formSelectOther: "Other inquiry",
                    formLabelPersonalization: "Personalization (Initials or Name)",
                    formPlaceholderPersonalization: "e.g., J.D. or John Doe",
                    formLabelMessage: "Your Message",
                    formSubmit: "Initiate Advisory Request",
                    footerCopyright: "Creation House © SEYMR. All rights reserved.",
                    footerNav: "Navigation",
                    footerPhilosophy: "Philosophy",
                    footerCreations: "Creations",
                    footerBook: "The Book",
                    footerSanctuary: "Sanctuary",
                    footerLegal: "Legal",
                    footerTerms: "Terms of Sale",
                    footerPrivacy: "Privacy Policy",
                    footerMentions: "Legal Notice",
                    footerFaq: "FAQ",
                    sanctuaryTitle: "The Private Sanctuary",
                    sanctuaryDesc: "The Sanctuary is the digital space reserved exclusively for our collectors. Access is granted after your first acquisition. Here, you can manage your SEYMR® heritage, follow the genesis of your works, and consult your unalterable certificate of ownership. It is the continuation of the experience, where the relationship with the House becomes an ongoing dialogue.",
                    cookieText: "SEYMR® uses trackers to ensure site functionality and optimize your experience. To learn more, please consult our Privacy Policy.",
                    cookieAccept: "Accept",
                    chatTitle: "Digital Concierge",
                    chatWelcome: "Welcome to the House of SEYMR®. How may I guide you?",
                    chatReply1: "Explore creations",
                    chatReply2: "Our Philosophy",
                    chatReply3: "Speak to an advisor",
                }
            };
            
            const setLanguage = (lang) => {
                document.querySelectorAll('[data-key]').forEach(element => {
                    const key = element.getAttribute('data-key');
                    if (translations[lang] && translations[lang][key]) {
                        if(element.tagName === 'INPUT' && (element.type === 'email' || element.type === 'text')) {
                            element.placeholder = translations[lang][key];
                        } else {
                            element.innerText = translations[lang][key];
                        }
                    }
                });
                document.documentElement.lang = lang;
                document.querySelectorAll('.lang-link[data-lang]').forEach(selector => {
                    selector.classList.toggle('active', selector.getAttribute('data-lang') === lang);
                });
                localStorage.setItem('seymr_language', lang);
            };

            document.querySelectorAll('.lang-link[data-lang]').forEach(selector => {
                selector.addEventListener('click', (e) => {
                    e.preventDefault();
                    setLanguage(selector.getAttribute('data-lang'));
                });
            });

            const savedLang = localStorage.getItem('seymr_language') || 'fr';
            setLanguage(savedLang);

            const loadingSequence = document.getElementById('loading-sequence');
            if (loadingSequence) { setTimeout(() => { loadingSequence.classList.add('hidden'); }, 3000); }
            
            const themeToggle = document.getElementById('themeToggle');
            const sunIcon = themeToggle.querySelector('.sun');
            const moonIcon = themeToggle.querySelector('.moon');
            const htmlEl = document.documentElement;

            const applyTheme = (theme) => {
                htmlEl.setAttribute('data-theme', theme);
                if (sunIcon && moonIcon) {
                    sunIcon.style.display = theme === 'light' ? 'block' : 'none';
                    moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
                }
            };
            
            const savedTheme = localStorage.getItem('theme') || 'dark';
            applyTheme(savedTheme);

            themeToggle.addEventListener('click', () => {
                const currentTheme = htmlEl.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });

            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 50); });

            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const navigationOverlay = document.getElementById('navigation-overlay');
            const mobileNavLinks = navigationOverlay.querySelectorAll('.nav-link');

            const toggleMenu = () => {
                mobileMenuToggle.classList.toggle('active');
                navigationOverlay.classList.toggle('active');
                document.body.style.overflow = navigationOverlay.classList.contains('active') ? 'hidden' : '';
            };
            
            mobileMenuToggle.addEventListener('click', toggleMenu);
            mobileNavLinks.forEach(link => link.addEventListener('click', toggleMenu));

            const conceptTriggers = document.querySelectorAll('.concept-trigger');
            const conceptContents = document.querySelectorAll('.concept-content');
            conceptTriggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    conceptTriggers.forEach(t => t.classList.remove('active'));
                    trigger.classList.add('active');
                    const concept = trigger.dataset.concept;
                    conceptContents.forEach(content => {
                        content.classList.toggle('active', content.id === concept);
                    });
                });
            });

            const openModal = (modal) => {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';

                const thumbnails = modal.querySelectorAll('.modal-gallery-thumbnails img');
                if (thumbnails.length > 0) {
                    const mainImage = modal.querySelector('.modal-gallery-main img');
                    thumbnails.forEach(thumb => {
                        thumb.addEventListener('click', (e) => {
                            e.stopPropagation();
                            mainImage.src = thumb.src;
                            mainImage.alt = thumb.alt;
                            thumbnails.forEach(t => t.classList.remove('active'));
                            thumb.classList.add('active');
                        });
                    });
                }
            };
            
            const closeModal = (modal) => {
                 if (modal) {
                    modal.classList.remove('active');
                    if (!document.querySelector('.modal-overlay.active')) { document.body.style.overflow = ''; }
                }
            };

            document.querySelectorAll('[data-modal-id]').forEach(trigger => {
                 trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const modalId = trigger.dataset.modalId;
                    const modal = document.getElementById(modalId);
                    if (modal) {
                        const activeModal = document.querySelector('.modal-overlay.active');
                        if(activeModal) closeModal(activeModal);
                        openModal(modal);
                    }
                });
            });

            document.querySelectorAll('.modal-overlay').forEach(modal => {
                modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
            });

            document.querySelectorAll('.modal-close').forEach(button => {
                button.addEventListener('click', () => { closeModal(button.closest('.modal-overlay')); });
            });
            
            document.querySelectorAll('.btn-initier').forEach(link => {
                link.addEventListener('click', () => { closeModal(link.closest('.modal-overlay')); });
            });
            
            const cookieBanner = document.getElementById('cookie-banner');
            const cookieAcceptBtn = document.getElementById('cookie-accept');
            
            if (!localStorage.getItem('cookies_accepted')) {
                setTimeout(() => { if(cookieBanner) cookieBanner.classList.add('show'); }, 4000);
            }

            if(cookieAcceptBtn) {
                cookieAcceptBtn.addEventListener('click', () => {
                    localStorage.setItem('cookies_accepted', 'true');
                    cookieBanner.classList.remove('show');
                });
            }

            const animatedElements = document.querySelectorAll('[data-animate]');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.dataset.delay || '0';
                        entry.target.style.transitionDelay = `${delay}s`;
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            animatedElements.forEach(el => observer.observe(el));

            const chatbotToggle = document.getElementById('chatbot-toggle');
            const chatbotWindow = document.getElementById('chatbot-window');
            const chatbotClose = document.getElementById('chatbot-close');

            if (chatbotToggle) {
                chatbotToggle.addEventListener('click', () => chatbotWindow.classList.toggle('active'));
                chatbotClose.addEventListener('click', () => chatbotWindow.classList.remove('active'));
            }
        });