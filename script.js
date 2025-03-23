document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentLanguage = "en";

  // Translations
  const translations = {
    en: {
      title: "Bitcoin Use Cases",
      subtitle:
        "Exploring the practical applications and value propositions of Bitcoin in today's world",
      footer: {
        agree: "Don't you agree?",
        propose: "Propose or discuss on GitHub",
      },
      useCases: {
        storeOfValue: {
          title: "Store of Value",
          short:
            "Bitcoin serves as a digital store of value, similar to gold but with enhanced properties.",
          full: "Bitcoin's fixed supply of 21 million coins makes it scarce by design, protecting against inflation and currency debasement. Unlike traditional assets, Bitcoin can be stored securely without reliance on third parties and transported across borders effortlessly. Its digital nature combined with strong security makes it an attractive alternative to traditional value storage methods.",
        },
        financialSovereignty: {
          title: "Financial Sovereignty",
          short:
            "Bitcoin enables individuals to have complete control over their financial assets.",
          full: "With Bitcoin, users can truly own their money without depending on banks or financial institutions. The phrase 'not your keys, not your coins' emphasizes this sovereignty. Bitcoin allows people to be their own bank, making financial decisions without permission from centralized authorities, and protecting assets from confiscation, censorship, or account freezes.",
        },
        inflationHedge: {
          title: "Inflation Hedge",
          short:
            "Bitcoin provides protection against currency devaluation and monetary inflation.",
          full: "In countries experiencing high inflation or currency crises, Bitcoin offers an alternative that cannot be devalued through excessive money printing. Its fixed supply cap ensures that, unlike fiat currencies, it cannot be inflated away. This makes Bitcoin particularly valuable in regions with unstable monetary policies or where citizens face rapid devaluation of their national currency.",
        },
        globalPayments: {
          title: "Global, Borderless Payments",
          short:
            "Bitcoin enables fast, low-cost transfers of value across international borders.",
          full: "Traditional international money transfers are slow, expensive, and subject to numerous restrictions. Bitcoin transactions can be sent anywhere in the world within minutes, regardless of amount, at relatively low fees. This makes it especially valuable for remittances, international commerce, and providing financial services to the unbanked population worldwide.",
        },
        p2pTransactions: {
          title: "Peer-to-Peer Transactions",
          short:
            "Bitcoin allows direct value transfer between individuals without intermediaries.",
          full: "Bitcoin was designed as a peer-to-peer electronic cash system, enabling direct transactions without the need for trusted third parties like banks or payment processors. This reduces costs, eliminates permission requirements, and removes single points of failure from the financial system, creating a more resilient network for value exchange.",
        },
        censorshipResistant: {
          title: "Censorship-Resistant Transactions",
          short:
            "Bitcoin transactions cannot be easily blocked, censored, or reversed by authorities.",
          full: "In a world where financial censorship is increasingly common, Bitcoin provides a way to transact that is resistant to external control. Payments cannot be blocked by governments or corporations, accounts cannot be frozen, and transactions cannot be reversed without the owner's consent. This makes Bitcoin valuable for legitimate transactions that might otherwise be restricted by political or corporate policies.",
        },
        alternativeBanking: {
          title: "Alternative Banking System",
          short:
            "Bitcoin provides financial services to the unbanked and underbanked populations.",
          full: "Billions of people worldwide lack access to basic banking services but have mobile phones. Bitcoin requires only internet access to participate, providing banking-like services to those excluded from the traditional financial system. This includes savings, payments, and even complex financial services through decentralized finance (DeFi) applications built on Bitcoin and related networks.",
        },
        selfCustody: {
          title: "Self-Custody Savings",
          short:
            "Bitcoin enables secure long-term savings without counterparty risk.",
          full: "Traditional savings require trusting banks or investment firms with your assets, exposing you to counterparty risk. Bitcoin allows individuals to self-custody their savings with proper security practices, eliminating dependence on financial institutions. This makes it an attractive option for long-term savings, especially in regions with unstable banking systems or for those seeking to diversify beyond traditional financial assets.",
        },
      },
    },
    es: {
      title: "Casos de Uso de Bitcoin",
      subtitle:
        "Explorando las aplicaciones prácticas y propuestas de valor de Bitcoin en el mundo actual",
      footer: {
        agree: "¿No estás de acuerdo?",
        propose: "Propón o discute en GitHub",
      },
      useCases: {
        storeOfValue: {
          title: "Reserva de Valor",
          short:
            "Bitcoin sirve como una reserva de valor digital, similar al oro pero con propiedades mejoradas.",
          full: "El suministro fijo de Bitcoin de 21 millones de monedas lo hace escaso por diseño, protegiéndolo contra la inflación y la devaluación de la moneda. A diferencia de los activos tradicionales, Bitcoin puede almacenarse de forma segura sin depender de terceros y transportarse a través de fronteras sin esfuerzo. Su naturaleza digital combinada con una fuerte seguridad lo convierte en una alternativa atractiva a los métodos tradicionales de almacenamiento de valor.",
        },
        financialSovereignty: {
          title: "Soberanía Financiera",
          short:
            "Bitcoin permite a las personas tener control completo sobre sus activos financieros.",
          full: "Con Bitcoin, los usuarios pueden ser verdaderos dueños de su dinero sin depender de bancos o instituciones financieras. La frase 'no tus llaves, no tus monedas' enfatiza esta soberanía. Bitcoin permite a las personas ser su propio banco, tomando decisiones financieras sin permiso de autoridades centralizadas, y protegiendo activos de la confiscación, censura o congelación de cuentas.",
        },
        inflationHedge: {
          title: "Protección contra la Inflación",
          short:
            "Bitcoin proporciona protección contra la devaluación de la moneda y la inflación monetaria.",
          full: "En países que experimentan alta inflación o crisis monetarias, Bitcoin ofrece una alternativa que no puede ser devaluada mediante la impresión excesiva de dinero. Su límite de suministro fijo asegura que, a diferencia de las monedas fiduciarias, no puede ser inflado. Esto hace que Bitcoin sea particularmente valioso en regiones con políticas monetarias inestables o donde los ciudadanos enfrentan una rápida devaluación de su moneda nacional.",
        },
        globalPayments: {
          title: "Pagos Globales Sin Fronteras",
          short:
            "Bitcoin permite transferencias de valor rápidas y de bajo costo a través de fronteras internacionales.",
          full: "Las transferencias internacionales de dinero tradicionales son lentas, costosas y están sujetas a numerosas restricciones. Las transacciones de Bitcoin pueden enviarse a cualquier parte del mundo en minutos, independientemente del monto, con tarifas relativamente bajas. Esto lo hace especialmente valioso para remesas, comercio internacional y para proporcionar servicios financieros a la población no bancarizada en todo el mundo.",
        },
        p2pTransactions: {
          title: "Transacciones Peer-to-Peer",
          short:
            "Bitcoin permite la transferencia directa de valor entre individuos sin intermediarios.",
          full: "Bitcoin fue diseñado como un sistema de efectivo electrónico peer-to-peer, permitiendo transacciones directas sin la necesidad de terceros de confianza como bancos o procesadores de pagos. Esto reduce costos, elimina requisitos de permisos y elimina puntos únicos de fallo del sistema financiero, creando una red más resiliente para el intercambio de valor.",
        },
        censorshipResistant: {
          title: "Transacciones Resistentes a la Censura",
          short:
            "Las transacciones de Bitcoin no pueden ser fácilmente bloqueadas, censuradas o revertidas por las autoridades.",
          full: "En un mundo donde la censura financiera es cada vez más común, Bitcoin proporciona una forma de transacción que es resistente al control externo. Los pagos no pueden ser bloqueados por gobiernos o corporaciones, las cuentas no pueden ser congeladas y las transacciones no pueden ser revertidas sin el consentimiento del propietario. Esto hace que Bitcoin sea valioso para transacciones legítimas que de otro modo podrían estar restringidas por políticas políticas o corporativas.",
        },
        alternativeBanking: {
          title: "Sistema Bancario Alternativo",
          short:
            "Bitcoin proporciona servicios financieros a poblaciones no bancarizadas y sub-bancarizadas.",
          full: "Miles de millones de personas en todo el mundo carecen de acceso a servicios bancarios básicos pero tienen teléfonos móviles. Bitcoin solo requiere acceso a Internet para participar, proporcionando servicios similares a los bancarios a aquellos excluidos del sistema financiero tradicional. Esto incluye ahorros, pagos e incluso servicios financieros complejos a través de aplicaciones de finanzas descentralizadas (DeFi) construidas sobre Bitcoin y redes relacionadas.",
        },
        selfCustody: {
          title: "Ahorros de Auto-Custodia",
          short:
            "Bitcoin permite ahorros seguros a largo plazo sin riesgo de contraparte.",
          full: "Los ahorros tradicionales requieren confiar tus activos a bancos o firmas de inversión, exponiéndote al riesgo de contraparte. Bitcoin permite a los individuos auto-custodiar sus ahorros con prácticas de seguridad adecuadas, eliminando la dependencia de instituciones financieras. Esto lo convierte en una opción atractiva para ahorros a largo plazo, especialmente en regiones con sistemas bancarios inestables o para aquellos que buscan diversificar más allá de los activos financieros tradicionales.",
        },
      },
    },
  };

  // DOM elements
  const languageToggle = document.getElementById("language-toggle");
  const languageText = document.getElementById("language-text");
  const mainTitle = document.getElementById("main-title");
  const mainSubtitle = document.getElementById("main-subtitle");
  const useCasesContainer = document.getElementById("use-cases-container");
  const footerAgree = document.getElementById("footer-agree");
  const footerPropose = document.getElementById("footer-propose");

  // Icons for use cases
  const icons = {
    storeOfValue: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>`,
    financialSovereignty: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>`,
    inflationHedge: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>`,
    globalPayments: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
    p2pTransactions: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>`,
    censorshipResistant: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    alternativeBanking: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>`,
    selfCustody: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>`,
  };

  // Toggle icons
  const chevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>`;
  const chevronUp = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"></path></svg>`;

  // Initialize
  updateContent();

  // Event listeners
  languageToggle.addEventListener("click", toggleLanguage);

  // Functions
  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    updateContent();
  }

  function updateContent() {
    const t = translations[currentLanguage];

    // Update language button
    languageText.textContent = currentLanguage === "en" ? "Español" : "English";

    // Update header
    mainTitle.textContent = t.title;
    mainSubtitle.textContent = t.subtitle;

    // Update footer
    footerAgree.textContent = t.footer.agree;
    footerPropose.textContent = t.footer.propose;

    // Update use cases
    useCasesContainer.innerHTML = "";

    const useCaseKeys = [
      "storeOfValue",
      "financialSovereignty",
      "inflationHedge",
      "globalPayments",
      "p2pTransactions",
      "censorshipResistant",
      "alternativeBanking",
      "selfCustody",
    ];

    useCaseKeys.forEach((key) => {
      const useCase = t.useCases[key];
      if (!useCase) return;

      const card = document.createElement("div");
      card.className = "use-case-card";
      card.innerHTML = `
        <div class="use-case-header">
          <div class="use-case-title-container">
            <div class="use-case-icon">${icons[key]}</div>
            <h3 class="use-case-title">${useCase.title}</h3>
          </div>
          <button class="use-case-toggle" aria-label="Toggle details">${chevronDown}</button>
        </div>
        <div class="use-case-content">
          <p class="use-case-short">${useCase.short}</p>
          <div class="use-case-full">${useCase.full}</div>
        </div>
      `;

      useCasesContainer.appendChild(card);

      // Add click event to toggle expansion
      card.addEventListener("click", function () {
        this.classList.toggle("expanded");
        const toggle = this.querySelector(".use-case-toggle");
        toggle.innerHTML = this.classList.contains("expanded")
          ? chevronUp
          : chevronDown;
      });
    });
  }
});
