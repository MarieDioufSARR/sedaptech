import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  nom: "SEDAP'Tech",

  slogan: "L’intelligence au service de l’aviculture africaine",

  email: "sedapsn221@gmail.com",

  telephone: "+221 77 000 00 00",

  localisation: "Cité Senghor,Thies,Sénégal",

  // =========================
  // HERO
  // =========================

  hero: {
    titre: "L’avenir de",

    titreAccent: "l’aviculture commence aujourd’hui.",

    sousTitre:
      "Automatisez la gestion de vos élevages, surveillez vos données en temps réel et améliorez durablement vos performances grâce à SEDAP'tech, une solution pensée pour les éleveurs modernes.",

    ctaPrimaire: "Commencer maintenant",

    ctaSecondaire: "Découvrir nos solutions",

    //Navigation
    navigation: [
      {
        label: "Accueil",
        href: "/",
      },
      {
        label: "À propos",
        href: "/apropos",
      },
      {
        label: "Solutions",
        href: "/solution",
      },
      {
        label: "Contact",
        href: "#contact",
      },
    ],
  },

  // =========================
  // Statistiques
  // =========================
  statistiques: {
    tag: "Nos chiffres",
    chiffres: [
      {
        valeur: 500,
        suffix: "+",
        label: "Producteurs accompagnés",
      },

      {
        valeur: 10,
        suffix: "+",
        label: "Régions couvertes",
      },

      {
        valeur: 95,
        suffix: "%",
        label: "Taux de satisfaction",
      },

      {
        valeur: 24,
        suffix: "/7",
        label: "Assistance & suivi",
      },
    ],
  },
  // =========================
  // À PROPOS
  // =========================

  apropos: {
    tag: "À propos",

    titre: "Une nouvelle vision de l’aviculture africaine",

    sousTitre:
      "Avant de concevoir quoi que ce soit, nous sommes allés là où tout se joue au cœur des élevages sénégalais, aux côtés des producteurs, face à leurs réalités quotidiennes.",
    sousTitre2:
      "Nous avons observé, écouté et mesuré l'étendue des pertes silencieuses qui fragilisent, année après année, des exploitations entières portées par des femmes et des hommes de conviction.",
    sousTitre3:
      "De cette immersion est née SEDAP'Tech, une solution pensée dans ses moindres détails pour donner à chaque éleveur les moyens de piloter son activité avec précision, de prendre les bonnes décisions et de bâtir, cycle après cycle, une exploitation plus performante et plus durable.",

    mission:
      "Notre mission est d’aider les producteurs à développer des exploitations plus performantes, rentables et durables grâce à la technologie, l’accompagnement humain et l’accès au marché.",
  },
  // =========================
  // PROBLEMATIQUES
  // =========================

  ProblematiqueSection: {
    title: "L’aviculture reste un défi majeur ",

    subtitle:
      "De nombreux producteurs font encore face à des difficultés qui limitent leur rentabilité et compromettent leurs performances. Entre le manque de suivi, les pertes invisibles et l’absence de marché structuré, gérer un élevage devient un véritable défi au quotidien.",

    problems: [
      {
        icon: "EyeOff",

        title: "Manque de visibilité",

        description:
          "Impossible de surveiller l’élevage en temps réel et d’anticiper les problèmes avant qu’ils ne deviennent critiques.",
      },

      {
        icon: "BarChart3",

        title: "Gestion des données inefficace",

        description:
          "L’absence d’outils centralisés complique le suivi des données techniques, financières et opérationnelles de l’élevage.",
      },

      {
        icon: "Smartphone",

        title: "Gestion difficile à distance",

        description:
          "Les producteurs qui investissent à distance manquent souvent d’outils fiables pour suivre efficacement leurs opérations et encadrer leur personnel.",
      },

      {
        icon: "Store",

        title: "Difficulté à vendre",

        description:
          "L’accès à des acheteurs fiables et à un marché structuré reste un frein majeur pour écouler la production de manière rentable.",
      },
    ],
  },
  // =========================
  // SOLUTIONS
  // =========================

  solution: {
    badge: "Sedap’Tech en action",

    titre: "Une solution complète pour transformer votre élevage",

    description:
      "SEDAP'Tech combine technologie, accompagnement et intelligence terrain afin de sécuriser et accélérer la croissance de votre activité.",
    services: [
      {
        titre: "Surveillance en temps reel",
        sous: "Gardez le contrôle de votre élevage à tout moment grace à des cameras connectées et intelligentes.",
      },
      {
        titre: "Gestion Centralisée",
        sous: "Suivez vos données techniques et financières dans une interface simple et accessible depuis votre smartphone.",
      },
      {
        titre: "Accompagnement terrain",
        sous: "Bénéficiez d’un suivi humain structuré pour améliorer vos performances et résoudre vos problèmes spécifiques.",
      },
      {
        titre: "Accès au marché",
        sous: "Connectez votre production à des acheteurs qualifiés pour améliorer vos ventes et votre stabilité.",
      },
    ],
  },

  // =========================
  // Solution Page
  // =========================
  solutionPage: {
    camera: {
      tag: "Caméra connectée",
      title: "Surveillez votre élevage où que vous soyez",
      description:
        "Gardez un œil sur votre exploitation en temps réel depuis votre téléphone et recevez des alertes instantanées en cas d'anomalie.",

      features: [
        {
          icon: "Md360",
          title: "Vision 360°",
        },
        {
          icon: "GiSolarPower",
          title: "Alimentation solaire",
        },
        {
          icon: "FaWifi",
          title: "Connexion 4G / 5G",
        },
        {
          icon: "FaBell",
          title: "Alertes en temps réel",
        },
        {
          icon: "MdOutlineNightlight",
          title: "Vision nocturne HD",
        },
        {
          icon: "FaMicrophone",
          title: "Audio bidirectionnel",
        },
      ],
    },
    plateforme: {
      tag: "plateforme Intelligente",
      title: "Toutes vos données d'élevage au même endroit",
      description:
        "Centralisez toutes les données de votre exploitation dans une application unique. Suivez vos performances, recevez des alertes en temps réel et prenez les bonnes décisions grâce à des indicateurs clairs et accessibles partout.",
      features: [
        {
          title: "Tableau de bord en temps réel",
          icon: "layoutDashboard",
        },
        {
          title: "Suivi de l'alimentation",
          icon: "utensils",
        },
        {
          title: "Analyse du poids et de la croissance",
          icon: "scale",
        },
        {
          title: "Suivi de la mortalité",
          icon: "heartPulse",
        },
        {
          title: "Alertes intelligentes",
          icon: "bell",
        },
        {
          title: "Gestion des dépenses",
          icon: "wallet",
        },
        {
          title: "Suivi des ventes",
          icon: "chartColumn",
        },
        {
          title: "Rapports et statistiques",
          icon: "barChart3",
        },
      ],
    },
    market: {
      tag: "Marché intégré",
      title: "Commercialisez votre production en toute sérénité",
      description:
        "Notre marché numérique connecte les éleveurs à un réseau d’acheteurs fiables et vérifiés.Leur permettant bénéficier de débouchés garantis, de prix justes et d’une meilleure stabilité de revenus.",

      features: [
        {
          title: "Acheteurs vérifiés",

          icon: "users",
        },
        {
          title: "Transactions sécurisées",

          icon: "shield",
        },
        {
          title: "Rachat direct de production",

          icon: "handshake",
        },
        {
          title: "Prix justes et transparents",

          icon: "scale",
        },
        {
          title: "Revenus sécurisés",

          icon: "wallet",
        },
        {
          title: "Accès à de nouveaux marchés",

          icon: "chartColumn",
        },
      ],
    },
    suiviTechnique: {
      tag: "Suivi technique",
      title: "Un accompagnement technique Personnalisé",
      description:
        "Les éleveurs bénéficient en complement d’un suivi technique continu leur permettant d’anticiper les risques, d’améliorer leurs performances et de prendre les bonnes décisions au bon moment.",

      features: [
        {
          title: "Suivi des performances",

          icon: "chartColumn",
        },

        {
          title: "Conseils techniques",

          icon: "brain",
        },
        {
          title: "Suivi sanitaire",

          icon: "heartPulse",
        },
        {
          title: "Assistance à distance",

          icon: "headset",
        },
      ],
    },
  },

  // =========================
  // Call to action
  // =========================
  CtaSection: {
    tag: "Prêt à moderniser votre élevage ?",
    titre: "Rejoignez la révolution de l’aviculture moderne",
    ctaPrimaire: "Commencer maintenant",
  },
  // =========================
  // PILIERS
  // =========================

  piliers: [
    {
      num: "01",

      icone: "MonitorSmartphone",

      titre: "Surveillance connectée",

      sous: "Gardez le contrôle de votre élevage en temps réel depuis votre smartphone.",

      points: [
        "Suivi intelligent des paramètres essentiels",

        "Alertes automatiques en cas d’anomalie",

        "Accès aux données à distance 24h/24",
      ],
    },

    {
      num: "02",

      icone: "HandHelping",

      titre: "Accompagnement terrain",

      sous: "Bénéficiez d’un suivi humain structuré pour améliorer vos performances.",

      points: [
        "Conseils personnalisés",

        "Protocoles d’élevage optimisés",

        "Assistance technique continue",
      ],
    },

    {
      num: "03",

      icone: "ChartNoAxesCombined",

      titre: "Développement rentable",

      sous: "Optimisez votre production et développez une exploitation durable.",

      points: [
        "Réduction des pertes",

        "Amélioration des rendements",

        "Accès à des débouchés fiables",
      ],
    },
  ],

  // =========================
  // CIBLE
  // =========================

  cible: {
    tag: "Pour qui ?",

    titre: "La technologie au service de chaque ambition avicole",

    items: [
      {
        icone: "Leaf",
        titre: "Nouveaux producteurs",
      },

      {
        icone: "MonitorSmartphone",
        titre: "Investisseurs à distance",
      },

      {
        icone: "Users",
        titre: "Élevages ambitieux",
      },
    ],
  },

  // =========================
  // CtaAbout
  // =========================
  ctaAbout: {
    titre: "Ensemble, construisons l’avenir de l’aviculture africaine.",

    ctaPrimaire: "Découvrir nos solutions",

    ctaSecondaire: "Prendre un rv",
  },

  // =========================
  // MARCHÉ
  // =========================

  marche: {
    tag: "Commercialisation",

    titre: "Accédez à des débouchés plus fiables",

    sousTitre:
      "Nous connectons votre production à des acheteurs qualifiés afin d’améliorer vos ventes et votre stabilité.",

    debouches: [
      {
        icone: "Utensils",

        titre: "Restaurants & Hôtels",

        desc: "Des partenaires à la recherche de produits frais, réguliers et de qualité.",
      },

      {
        icone: "Store",

        titre: "Marchés & Revendeurs",

        desc: "Un réseau fiable pour écouler rapidement vos volumes de production.",
      },

      {
        icone: "Building2",

        titre: "Professionnels & Grossistes",

        desc: "Des partenaires capables d’acheter de grands volumes de manière continue.",
      },
    ],
  },

  // =========================
  // faq
  // =========================

  faq: {
    tag: "FAQ",
    title: "Questions fréquentes",
    description:
      "Retrouvez les réponses aux questions les plus courantes concernant notre caméra intelligente, notre plateforme de gestion et notre marché intégré.",

    items: [
      {
        question: "La caméra fonctionne-t-elle sans connexion Wi-Fi ?",
        answer:
          "Oui. Notre caméra est équipée d’une carte SIM 4G/5G et ne nécessite pas de connexion Wi-Fi pour fonctionner.",
      },

      {
        question: "La caméra fonctionne-t-elle la nuit ?",
        answer:
          "Oui. Grâce à sa vision 360° jour et nuit, vous gardez un œil sur votre élevage à tout moment.",
      },

      {
        question: "La caméra nécessite-t-elle une alimentation électrique ?",
        answer:
          "Non. Elle est alimentée par énergie solaire, ce qui la rend idéale pour les zones rurales ou les sites éloignés.",
      },

      {
        question: "Que puis-je suivre sur la plateforme ?",
        answer:
          "La plateforme permet de suivre la consommation d’aliments, le poids des animaux, la mortalité, les dépenses, les ventes et les performances globales de l’élevage.",
      },

      {
        question: "Recevrai-je des alertes en cas de problème ?",
        answer:
          "Oui. Des notifications sont envoyées automatiquement lorsqu’une anomalie ou un retard est détecté.",
      },

      {
        question: "Comment fonctionne le suivi technique ?",
        answer:
          "Nos experts analysent les données de votre élevage et vous accompagnent avec des recommandations et des visites de suivi pour améliorer vos performances.",
      },

      {
        question: "Comment vendre ma production sur votre marché ?",
        answer:
          "Notre marché met les éleveurs en relation avec des acheteurs fiables et sécurise les transactions afin de faciliter la commercialisation.",
      },

      {
        question: "Pouvez-vous racheter directement ma production ?",
        answer:
          "Oui. Selon les volumes et les conditions, nous pouvons proposer le rachat direct de votre production afin de garantir un débouché sécurisé.",
      },
    ],
  },

  // =========================
  // CONTACT
  // =========================

  contact: {
    tag: "Passez à l’action",

    titre: "Construisons ensemble une aviculture plus rentable et durable",

    sousTitre:
      "Rejoignez les producteurs qui font confiance à SEDAP'Tech pour moderniser et sécuriser leur activité.",

    wolof:
      "« Ndank ndank mooy japp golo ci ñaay » — Les grandes réussites commencent toujours par une première décision.",

    avantages: [
      "Diagnostic gratuit de votre projet",

      "Accompagnement personnalisé",

      "Réponse rapide sous 24h",
    ],

    formTitre: "Parlez-nous de votre projet",

    formSous:
      "Complétez ce formulaire et un conseiller SEDAP'Tech vous recontactera rapidement.",

    situations: [
      "Je souhaite lancer un élevage avicole",

      "Je possède déjà une exploitation",

      "Je veux gérer mon élevage à distance",

      "Je recherche des débouchés commerciaux",

      "Autre situation",
    ],
  },

  // =========================
  // VALEURS
  // =========================

  // valeurs: [
  //   {
  //     check: "BadgeCheck",

  //     titre: "Pilotage intelligent",

  //     desc: "Surveillez votre exploitation en temps réel grâce à des outils simples et connectés.",
  //   },

  //   {
  //     check: "TrendingUp",

  //     titre: "Performance rentable",

  //     desc: "Réduisez les pertes et améliorez durablement vos performances économiques.",
  //   },

  //   {
  //     check: "ShieldCheck",

  //     titre: "Croissance durable",

  //     desc: "Développez une activité moderne, stable et adaptée aux enjeux du futur.",
  //   },
  // ],

  // =========================
  // Mission
  // =========================
  mission: {
    titre: "Notre mission",
    description:
      "Accompagner les producteurs dans la modernisation de leurs exploitations grâce à la technologie et à un accompagnement de proximité.",
  },
  // =========================
  // Vision
  // =========================
  vision: {
    titre: "Notre vision",
    description:
      "Une aviculture africaine plus performante, rentable et durable, portée par des producteurs autonomes et connectés.",
  },
  // =========================
  // FOOTER
  // =========================

  footer: {
    desc: "SEDAP'Tech accompagne la transformation de l’aviculture africaine grâce à la technologie, l’accompagnement et l’innovation terrain.",

    badge: "🇸🇳 Innovation sénégalaise • Vision africaine",

    liens: [
      {
        label: "Accueil",
        href: "/ ",
      },

      {
        label: "À propos",
        href: "/aboutPage",
      },

      {
        label: "Solutions",
        href: "/solutionPage",
      },

      {
        label: "Contact",
        href: "/contact",
      },
    ],

    socialLinks: [
      {
        label: "Facebook",
        href: "https://facebook.com",
        icon: "Facebook",
      },

      {
        label: "Linkedin",
        href: "https://linkedin.com",
        icon: "Linkedin",
      },

      {
        label: "Instagram",
        href: "https://instagram.com",
        icon: "Instagram",
      },

      {
        label: "Tiktok",
        href: "https://tiktok.com",
        icon: "Tiktok",
      },
    ],

    copyright: "© 2026 SEDAP'Tech — Tous droits réservés",

    mention: "Conçu au Sénégal pour l’agriculture africaine",
  },
};
