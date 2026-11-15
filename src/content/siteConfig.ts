import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  nom: "SEDAP’Tech",

  slogan: "L’intelligence au service de l’aviculture africaine",

  email: "sedapsn221@gmail.com",

  telephone: "+221 77 248 50 06",

  whatsapp: "https://wa.me/221772485006",

  localisation: "Cité Senghor, Thiès, Sénégal",

  // =========================
  // HERO
  // =========================

  hero: {
    titre: "Pilotez votre élevage, où que vous soyez.",

    titreAccent: "Gardez le contrôle, à chaque étape.",

    sousTitre:
      "Surveillez votre élevage à distance, suivez ses performances et bénéficiez d’un accompagnement technique pour prendre de meilleures décisions au quotidien.",

    ctaPrimaire: "Parlons de votre élevage",

    ctaSecondaire: "Découvrir nos solutions",
  },

  // =========================
  // STATISTIQUES : la preuve
  // =========================
  statistiques: {
    tag: "SEDAP’Tech en chiffres",
    chiffres: [
      {
        valeur: 500,
        suffix: "+",
        label: "Éleveurs accompagnés",
      },

      {
        valeur: 10,
        suffix: "+",
        label: "Régions couvertes",
      },

      {
        valeur: 95,
        suffix: "\u00A0%",
        label: "Taux de satisfaction",
      },

      {
        valeur: 24,
        suffix: "/7",
        label: "Assistance et suivi",
      },
    ],
  },

  // =========================
  // À PROPOS
  // =========================

  apropos: {
    tag: "À propos",

    titre: "Une nouvelle vision de l’aviculture africaine",

    highlight: "nouvelle vision",

    dirigeante: {
      nom: "Mengue Diouf",
      role: "Directrice Générale",
    },

    sousTitre:
      "Avant de concevoir quoi que ce soit, nous sommes allés au cœur des élevages sénégalais, aux côtés des éleveurs, face à leurs réalités quotidiennes.",
    sousTitre2:
      "Nous avons observé, écouté et mesuré les pertes silencieuses qui fragilisent, année après année, des exploitations portées par des femmes et des hommes de conviction.",
    sousTitre3:
      "De cette immersion est née SEDAP’Tech\u00A0: une solution qui donne à chaque éleveur les moyens de piloter son activité avec précision, de décider au bon moment et de bâtir une exploitation plus performante et plus durable.",

    mission:
      "Notre mission est d’aider les éleveurs à développer des exploitations plus performantes, rentables et durables grâce à la technologie, l’accompagnement humain et l’accès au marché.",
  },

  // =========================
  // PROBLÉMATIQUE : le constat
  // =========================

  ProblematiqueSection: {
    tag: "Le constat",

    title: "Les pertes d’un élevage se repèrent souvent, trop tard",
    highlight: "trop tard",

    subtitle:
      "Sans suivi régulier ni données fiables, il devient difficile de détecter les problèmes à temps, de suivre les performances et de prendre les bonnes décisions.",

    problems: [
      {
        title: "Manque de visibilité",
        description:
          "Sans surveillance régulière, certains problèmes peuvent passer inaperçus et entraîner des pertes évitables.",
        icon: "EyeOff",
      },
      {
        title: "Données dispersées",
        description:
          "Lorsque les données sur l’alimentation, le poids, les dépenses et les ventes sont dispersées, il devient difficile de suivre les performances et d’évaluer la rentabilité d’un cycle.",
        icon: "ChartNoAxesCombined",
      },
      {
        title: "Un accompagnement technique limité",
        description:
          "Sans conseils adaptés au bon moment, il peut être difficile de corriger certaines pratiques et d’améliorer les résultats d’un cycle à l’autre.",
        icon: "HandHelping",
      },
      {
        title: "Difficulté à commercialiser",
        description:
          "Trouver des acheteurs adaptés à sa production et négocier des conditions de vente satisfaisantes peut rester difficile.",
        icon: "Store",
      },
    ],
  },
  // =========================
  // SOLUTION
  // =========================

  solution: {
    badge: "SEDAP’TECH EN ACTION",

    titre: "Des outils concrets pour mieux gérer votre élevage",

    highlight: "mieux gérer votre élevage",

    description:
      "De la surveillance de votre poulailler au suivi de vos performances, SEDAP’Tech vous aide à mieux piloter votre activité grâce à des outils connectés, un accompagnement technique et un accès facilité au marché.",

    services: [
      {
        titre: "Surveillance à distance",

        sous: "Consultez les images de votre élevage depuis votre téléphone, de jour comme de nuit, et restez informé de ce qui se passe dans votre poulailler.",
      },

      {
        titre: "Suivi des performances",

        sous: "Centralisez les données essentielles de votre cycle : alimentation, poids, mortalité, dépenses et ventes pour mieux suivre vos résultats.",
      },

      {
        titre: "Accompagnement technique",

        sous: "Bénéficiez de conseils adaptés aux observations et aux performances de votre élevage pour ajuster vos pratiques au fil des cycles.",
      },

      {
        titre: "Accès au marché",

        sous: "Facilitez la recherche de débouchés grâce à la mise en relation avec des acheteurs potentiels pour votre production.",
      },
    ],
  },

  // =========================
  // Solution Page
  // =========================
  solutionPage: {
    header: {
      titre: "Une solution complète pour mieux piloter votre élevage",
      highlight: "piloter votre élevage",
      description:
        "Des outils connectés, un suivi des performances et un accompagnement de proximité pour vous aider à mieux gérer votre activité avicole.",
    },

    camera: {
      tag: "Caméra connectée",
      verbe: "Voir",

      title: "Gardez un œil sur votre élevage, où que vous soyez",
      highlight: "où que vous soyez",

      description:
        "Accédez aux images de votre élevage en direct depuis votre téléphone, de jour comme de nuit. Recevez des alertes lorsqu’une anomalie est détectée.",

      features: [
        {
          icon: "Md360",
          title: "Vision panoramique à 360°",
        },
        {
          icon: "GiSolarPower",
          title: "Alimentation à énergie solaire",
        },
        {
          icon: "FaWifi",
          title: "Connexion 4G/5G sans Wi-Fi",
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
          title: "Communication audio à distance",
        },
      ],
    },

    plateforme: {
      tag: "Plateforme intelligente",
      verbe: "Comprendre",
      title: "Toutes vos données d’élevage au même endroit",
      highlight: "au même endroit",
      description:
        "Alimentation, poids, mortalité, dépenses et ventes réunis dans une seule application, avec des indicateurs clairs pour décider au bon moment.",
      features: [
        {
          title: "Tableau de bord en temps réel",
          icon: "layoutDashboard",
        },
        {
          title: "Suivi de l’alimentation",
          icon: "utensils",
        },
        {
          title: "Suivi du poids et de la croissance",
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
      tag: "Accès au marché",
      verbe: "Commercialiser",
      title: "Faciliter la commercialisation de votre production",
      highlight: "la commercialisation",
      description:
        "SEDAP’Tech accompagne les producteurs dans la recherche de débouchés et la mise en relation avec des acheteurs, selon les besoins et les volumes disponibles.",

      features: [
        {
          title: "Mise en relation avec des acheteurs",
          icon: "users",
        },
        {
          title: "Possibilité de rachat selon les volumes",
          icon: "handshake",
        },
        {
          title: "Échanges sur les conditions de vente",
          icon: "scale",
        },
        {
          title: "Suivi des opportunités commerciales",
          icon: "chartColumn",
        },
      ],
    },

    suiviTechnique: {
      tag: "Suivi technique",
      verbe: "Décider",
      title: "Un accompagnement technique personnalisé",
      highlight: "personnalisé",
      description:
        "Des experts analysent les données de votre élevage et vous conseillent au bon moment, pour anticiper les risques et améliorer vos performances.",

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
  // CIBLE : « est-ce pour moi ? »
  // =========================

  cible: {
    tag: "À qui s’adresse SEDAP’Tech",

    titre: "La technologie au service de chaque ambition avicole",

    highlight: "chaque ambition avicole",

    items: [
      {
        icone: "Leaf",
        titre: "Nouveaux producteurs",
        description:
          "Lancez-vous avec un suivi pas à pas et évitez les erreurs coûteuses des premiers cycles.",
      },

      {
        icone: "MonitorSmartphone",
        titre: "Investisseurs à distance",
        description:
          "Suivez votre élevage et votre équipe en direct, où que vous soyez.",
      },

      {
        icone: "Users",
        titre: "Éleveurs en croissance",
        description:
          "Mesurez, comparez et optimisez vos performances pour passer à l’échelle supérieure.",
      },
    ],
  },

  // =========================
  // CTA : l'action
  // =========================
  CtaSection: {
    tag: "Passez à l’action",
    titre: "Parlons de votre élevage",
    description:
      "Présentez-nous votre projet et échangeons sur les solutions adaptées à vos besoins.",
    ctaPrimaire: "Échanger avec notre équipe",
  },

  // =========================
  // CtaAbout
  // =========================
  ctaAbout: {
    titre: "Ensemble, construisons l’avenir de l’aviculture africaine",

    // Primaire = WhatsApp (conversion). Secondaire = page Solutions.
    ctaPrimaire: "Échanger avec notre équipe",

    ctaSecondaire: "Découvrir nos solutions",
  },

  // =========================
  // FAQ
  // =========================

  faq: {
    tag: "FAQ",
    title: "Questions fréquentes",
    description:
      "Retrouvez les réponses aux questions les plus courantes concernant notre caméra intelligente, notre plateforme de gestion et notre marché intégré.",
    aide: {
      texte: "Vous ne trouvez pas votre réponse ?",
      cta: "Écrivez-nous sur WhatsApp",
    },

    items: [
      {
        question: "La caméra fonctionne-t-elle sans connexion Wi-Fi ?",
        answer:
          "Oui. La caméra utilise une carte SIM avec une connexion mobile 4G/5G. Elle n'a donc pas besoin d'un réseau Wi-Fi pour transmettre les images.",
      },
      {
        question: "Peut-on surveiller son élevage pendant la nuit ?",
        answer:
          "Oui. La caméra dispose d'un système de vision nocturne qui permet de visualiser le poulailler même lorsque l'éclairage est faible ou absent.",
      },
      {
        question: "Comment la caméra est-elle alimentée en énergie ?",
        answer:
          "La caméra est équipée d'un panneau solaire qui assure son alimentation en énergie. Cette solution permet de limiter le recours à une alimentation électrique classique.",
      },
      {
        question: "Quelles informations puis-je suivre sur la plateforme ?",
        answer:
          "La plateforme permet de consulter plusieurs indicateurs de votre exploitation, notamment la consommation alimentaire, le poids, la mortalité, ainsi que les dépenses et les ventes.",
      },
      {
        question: "La plateforme permet-elle de recevoir des alertes ?",
        answer:
          "Oui. Des alertes peuvent signaler certaines anomalies ou certains retards afin de vous aider à suivre plus attentivement le déroulement de votre élevage.",
      },
      {
        question: "En quoi consiste le suivi technique proposé par SEDAP ?",
        answer:
          "Le suivi technique comprend des visites de l'exploitation, l'analyse des données de production et des conseils adaptés aux besoins de l'éleveur, notamment sur les pratiques d'élevage et les alternatives biologiques.",
      },
      {
        question:
          "Comment SEDAP’Tech m'aide-t-elle à commercialiser ma production ?",
        answer:
          "SEDAP’Tech facilite la mise en relation entre les producteurs et les acheteurs, en tenant compte des besoins du marché et des volumes de production disponibles.",
      },
      {
        question: "SEDAP peut-elle racheter directement ma production ?",
        answer:
          "Un rachat direct peut être envisagé selon les volumes disponibles et les conditions convenues. Il dépend des possibilités de commercialisation au moment de la demande.",
      },
    ],
  },

  // =========================
  // Mission
  // =========================
  mission: {
    titre: "Notre mission",
    description:
      "Accompagner les éleveurs dans la modernisation de leurs exploitations grâce à la technologie et à un accompagnement de proximité.",
  },
  // =========================
  // Vision
  // =========================
  vision: {
    titre: "Notre vision",
    description:
      "Une aviculture africaine plus performante, rentable et durable, portée par des éleveurs autonomes et connectés.",
  },

  // =========================
  // Engagement (en-tête de la section Mission / Vision)
  // =========================
  engagement: {
    tag: "Notre engagement",
    titre: "Une vision claire pour transformer l’élevage",
    highlight: "transformer l’élevage",
    description:
      "Nous accompagnons les éleveurs avec des solutions innovantes pour améliorer leur productivité et leur rentabilité.",
  },

  // =========================
  // Valeurs
  // =========================
  valeurs: {
    tag: "Nos valeurs",
    titre: "Ce qui nous guide au quotidien",
    description: "Les principes qui orientent chacune de nos actions.",
    items: [
      {
        icon: "Sparkles",
        titre: "Innovation",
        description:
          "Des outils connectés pour voir, mesurer et décider à distance.",
      },
      {
        icon: "Handshake",
        titre: "Proximité",
        description:
          "Un accompagnement humain, sur le terrain, aux côtés des éleveurs.",
      },
      {
        icon: "Leaf",
        titre: "Durabilité",
        description:
          "Des exploitations plus performantes et plus durables, cycle après cycle.",
      },
    ],
  },

  // =========================
  // DÉMONSTRATIONS (vidéos)
  // =========================

  demonstration: {
    header: {
      tag: "Démonstrations vidéo",
      titre: "Découvrez SEDAP’Tech en action",
      highlight: "en action",
      description:
        "Explorez nos solutions à travers des démonstrations réalisées sur le terrain et découvrez concrètement leur fonctionnement dans un élevage avicole.",
    },

    groupes: [
      {
        id: "demo-camera",
        verbe: "Voir",
        tag: "Caméra connectée",
        titre: "Surveillez votre élevage à distance",
        highlight: "à distance",
        description:
          "Découvrez le fonctionnement de notre caméra connectée, de la visualisation en direct à son installation dans un poulailler.",

        videos: [
          {
            titre: "Présentation de la caméra connectée",
            description:
              "Découvrez les principales caractéristiques de la caméra et son fonctionnement dans un élevage avicole.",
            url: "/Videos/cameraconnecté.mp4",
          },
          {
            titre: "La surveillance du poulailler en direct",
            description:
              "Observez les images transmises par la caméra et découvrez comment suivre votre élevage à distance.",
            url: "/Videos/cameravideo.mp4",
          },
          {
            titre: "Installation chez un éleveur à Mbour",
            description:
              "Découvrez les différentes étapes de l'installation de la caméra et sa mise en service sur le terrain.",
            url: "/Videos/installationday.mp4",
          },
        ],
      },

      {
        id: "demo-plateforme",
        verbe: "Comprendre",
        tag: "Plateforme numérique",
        titre: "Gérez votre exploitation depuis une seule plateforme",
        highlight: "une seule plateforme",
        description:
          "Découvrez comment la plateforme centralise les informations de votre exploitation et facilite le suivi de vos activités et de vos indicateurs de production.",

        videos: [
          {
            titre: "Découverte du tableau de bord",
            description:
              "Explorez le tableau de bord et les principaux indicateurs disponibles pour suivre votre exploitation.",
            url: "/Videos/dashboard.mp4",
          },
          {
            titre: "Gestion des élevages",
            description:
              "Découvrez comment consulter les informations de vos élevages et suivre leurs activités depuis votre espace de gestion.",
            url: "/Videos/elevage.mp4",
          },
          {
            titre: "Suivi financier de l'exploitation",
            description:
              "Découvrez les outils de consultation des dépenses, des ventes et des données financières de votre exploitation.",
            url: "/Videos/investissement.mp4",
          },
        ],
      },
    ],
  },
  // =========================
  // CONTACT
  // =========================
  contact: {
    header: {
      tag: "Contact",
      titre: "Parlons de votre élevage",
      highlight: "votre élevage",
      description:
        "Une question, une démonstration ou un projet ? Écrivez-nous, notre équipe vous répond rapidement.",
    },

    form: {
      titre: "Parlons de votre projet",
      description:
        "Présentez-nous votre demande. Vos informations seront automatiquement organisées dans un message WhatsApp que vous pourrez vérifier avant de l'envoyer.",

      champs: {
        nom: {
          label: "Nom complet",
          placeholder: "Ex. : Awa Diop",
        },
        telephone: {
          label: "Téléphone",
          placeholder: "Ex. : 77 000 00 00",
        },
        sujet: {
          label: "Objet de votre demande",
          options: [
            "Demander une démonstration",
            "Découvrir la caméra et la plateforme",
            "Vendre ou acheter sur le marché",
            "Devenir partenaire",
            "Autre question",
          ],
        },
        message: {
          label: "Votre message (facultatif)",
          placeholder:
            "Précisez votre demande, parlez-nous de votre élevage ou posez votre question...",
        },
      },
      erreurs: {
        nom: "Veuillez renseigner votre nom complet.",
        telephone: "Veuillez saisir un numéro de téléphone valide.",
      },
      messageIntro: "Bonjour l'équipe SEDAP’Tech,",
      envoyer: "Continuer sur WhatsApp",
      confirmation:
        "Vos informations seront reprises dans un message prérempli. Vous pourrez le vérifier et l'envoyer directement depuis WhatsApp.",
    },

    info: {
      titre: "Nos coordonnées",
      whatsapp: {
        titre: "Écrivez-nous sur WhatsApp",
        texte: "Le moyen le plus simple d’échanger avec notre équipe.",
        cta: "Ouvrir WhatsApp",
      },
      labels: {
        telephone: "Téléphone",
        email: "E-mail",
        localisation: "Adresse",
      },
    },
  },

  // =========================
  // FOOTER
  // =========================

  footer: {
    desc: "SEDAP’Tech met l’innovation technologique au service de l’aviculture africaine en proposant des solutions de suivi intelligent, un accompagnement technique de proximité et un accès facilité aux marchés.",

    liens: [
      {
        label: "Accueil",
        href: "/",
      },

      {
        label: "À propos",
        href: "/a_propos",
      },

      {
        label: "Solutions",
        href: "/solution",
      },

      {
        label: "Contact",
        href: "/contact",
      },
    ],

    socialLinks: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/1K1cCmvqNY/?mibextid=wwXIfr",
        icon: "Facebook",
      },

      {
        label: "Linkedin",
        href: "https://www.linkedin.com/company/sedap-s%C3%A9n%C3%A9galaise-de-d%C3%A9veloppement-agricole-et-de-prestations/",
        icon: "Linkedin",
      },

      {
        label: "Instagram",
        href: "https://www.instagram.com/la_sedap?igsh=Mm05dzg3ZWR0emJo",
        icon: "Instagram",
      },

      {
        label: "Tiktok",
        href: "https://www.tiktok.com/@sedaptech?_r=1&_t=ZS-9AX6OgeADOX",
        icon: "Tiktok",
      },
    ],

    copyright: "© 2026 SEDAP’Tech — Tous droits réservés",
  },
};
