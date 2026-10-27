export const portfolio = {
  name: 'Asmae Elaasri',
  role: 'Élève ingénieure en Génie Informatique',
  location: 'Casablanca, Maroc',
  introduction:
    "Élève ingénieure en 5e année à l’EMSI, spécialisée en développement digital et systèmes d’information.",
  about:
    "En 5e année du cycle ingénieur en Génie Informatique à l’EMSI, je me spécialise en développement digital et systèmes d’information. Je souhaite mettre en pratique mes compétences et acquérir une expérience professionnelle concrète dans le cadre d’un stage PFE de six mois, à partir de janvier ou février 2027. Basée à Casablanca. Je suis une personne ponctuelle et intègre, et je suis également capable d’apprendre rapidement de nouvelles technologies et de m’adapter aux besoins d’une équipe.",
  contact: {
    email: 'asmaeelassri4@gmail.com',
    phone: '+212 678-843942',
    phoneHref: 'tel:+212678843942',
    github: {
      label: 'Asmae8',
      url: 'https://github.com/Asmae8',
    },
    linkedin: {
      label: 'Asmae Elaasri',
      url: 'https://www.linkedin.com/in/asmae-elaasri-aa69842bb/',
    },
  },
  education: [
    {
      period: '2022 — Présent',
      school: 'École Marocaine des Sciences de l’Ingénieur (EMSI)',
      degree:
        '5e année du cycle ingénieur en Génie Informatique et Réseaux, parcours Développement digital et systèmes d’information',
    },
    {
      period: '2021 — 2022',
      school: 'Manara Privée',
      degree: 'Baccalauréat',
    },
  ],
  skills: [
    {
      category: 'Développement',
      items: ['React, Next.js, Spring Boot, .NET, Angular et NestJS'],
    },
    {
      category: 'Backend',
      items: ['Firebase, authentification et Firestore'],
    },
    {
      category: 'Bases de données',
      items: ['SQL / NoSQL : MySQL, MongoDB et Neo4j'],
    },
    {
      category: 'Outils & méthodes',
      items: [
        'Git et GitHub',
        'Méthodologies agiles (Scrum)',
        'API REST et Postman',
        'Docker (notions)',
      ],
    },
  ],
  projects: [
    {
      number: '01',
      title: 'Gestion hôtelière',
      subtitle: 'Réservations, factures et paiements',
      description:
        'Application web de gestion hôtelière avec opérations CRUD pour les chambres, les clients et les factures.',
      features: [
        'Gestion des réservations et des paiements',
        'Données gérées avec Entity Framework Core et migrations',
      ],
      technologies: ['ASP.NET Core MVC', 'Entity Framework Core'],
      image: 'gestion-hoteliere.jpeg',
      theme: 'light',
    },
    {
      number: '02',
      title: 'Gestion de bibliothèque',
      subtitle: 'Application mobile',
      description:
        'Application mobile pour le suivi des livres, des lecteurs et des opérations d’emprunt et de retour.',
      features: [
        'Authentification et données centralisées avec Firebase',
        'Navigation organisée autour d’un menu drawer',
      ],
      technologies: ['React Native', 'Expo', 'Firebase'],
      image: 'gestion-bibliotheque.jpeg',
      theme: 'dark',
    },
    {
      number: '03',
      title: ' Gestion de Charité (Architecture Microservices)',
      subtitle: 'Application web',
      description:
        'Application web de gestion des dons et des actions caritatives.',
      features: [
        ' 	Conception d une architecture microservices avec Eureka (découverte) et API Gateway (routage dynamique)',
         	'Sécurisation des services via Spring Security et authentification par JWT',
 	       'Isolation des données par microservice et communication inter-services via OpenFeign',

      ],
      technologies: ['Spring Boot'],
      image: 'gestion-caritative.jpeg',
      theme: 'light',
    },
  ],
  experience: [
    {
      period: 'Juillet — Août 2026',
      company: 'MNH Technologie',
      location: 'Casablanca',
      title: 'Stage en développement d’applications SaaS',
      description:
        'Participation au développement d’une application SaaS de recrutement (ATS) intégrant des fonctionnalités d’intelligence artificielle.',
      tasks: [
        'Développement Frontend avec Next.js et contribution à l’intégration avec le backend NestJS',
        'Utilisation de PostgreSQL pour la gestion des données',
        'Travail en équipe avec Git et Docker pour la gestion du code et de l’environnement de développement',
      ],
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Git', 'Docker'],
    },
    {
      period: 'Juillet — Août 2025',
      company: 'Refood SARL',
      location: 'Casablanca',
      title: 'Conception et développement d’une application web',
      description:
        'Développement d’une application web de gestion de stock pour la digitalisation du système interne de l’entreprise.',
      tasks: [
        'Conception du backend avec Django REST Framework (Python)',
        'Développement du frontend avec React.js et TypeScript',
        'Gestion des bases de données SQLite en développement et PostgreSQL',
      ],
      technologies: ['Django REST Framework', 'React.js', 'TypeScript', 'SQLite', 'PostgreSQL'],
    },
  ],
}
