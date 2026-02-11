import { Course, Session } from "./types";

export const COURSES: Course[] = [
  {
    id: "sst-initial",
    title: "Sauveteur Secouriste du Travail (SST)",
    category: "SST",
    duration: "14 heures (2 jours)",
    price: "Sur devis",
    description:
      "Devenez le premier maillon de la chaîne de secours. Une formation vitale pour intervenir efficacement en cas d'accident.",
    image:
      "https://images.unsplash.com/photo-1622115297822-a3798fdbe1f6?fm=jpg&q=80&w=1200&auto=format&fit=crop",
    tags: ["Obligatoire", "Vital", "Certifiant"],
    program: [
      "Cadre juridique",
      "Protéger",
      "Examiner",
      "Faire alerter",
      "Secourir",
    ],
    prerequisites: ["Aucun prérequis"],
  },
  {
    id: "caces-r489",
    title: "CACES® R489 - Chariots élévateurs",
    category: "CACES",
    duration: "2 à 5 jours",
    price: "Sur devis",
    description:
      "Maîtrisez la conduite en sécurité des chariots de manutention à conducteur porté. Indispensable pour la logistique.",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
    tags: ["Logistique", "Conduite", "Sécurité"],
    program: [
      "Réglementation",
      "Technologie des chariots",
      "Vérifications",
      "Conduite et manœuvres",
    ],
    prerequisites: ["Aptitude médicale", "18 ans minimum"],
  },
  {
    id: "habil-elec-b1",
    title: "Habilitation Électrique B1v / B2v",
    category: "Habilitation",
    duration: "3 jours",
    price: "Sur devis",
    description:
      "Pour le personnel électricien chargé d'assurer des travaux, des dépannages ou des essais sur des ouvrages électriques.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    tags: ["BTP", "Industrie", "Danger Mortel"],
    program: [
      "Dangers de l'électricité",
      "Zones d'environnement",
      "Niveaux d'habilitation",
      "Procédures",
    ],
    prerequisites: ["Notions d'électricité"],
  },
  {
    id: "incendie-epi",
    title: "Équipier de Première Intervention (EPI)",
    category: "Incendie",
    duration: "0.5 jour",
    price: "Sur devis",
    description:
      "Apprenez à réagir face à un départ de feu et à manipuler les extincteurs en toute sécurité.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    tags: ["Prévention", "Action Rapide"],
    program: [
      "Théorie du feu",
      "Moyens d'extinction",
      "Exercices pratiques sur feux réels",
    ],
    prerequisites: ["Aucun"],
  },
  {
    id: "gestes-postures",
    title: "Gestes et Postures",
    category: "Gestes",
    duration: "1 jour",
    price: "Sur devis",
    description:
      "Prévention des troubles musculo-squelettiques (TMS). Adoptez les bonnes positions au travail.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    tags: ["Santé", "Bien-être", "Tertiaire"],
    program: [
      "Fonctionnement du corps",
      "Facteurs de risques",
      "Principes de sécurité",
      "Exercices pratiques",
    ],
    prerequisites: ["Aucun"],
  },
];

export const SESSIONS: Session[] = [
  {
    id: "s1",
    courseId: "sst-initial",
    date: "2025-11-15",
    location: "Paris 12",
    seatsTotal: 10,
    seatsTaken: 8,
  },
  {
    id: "s2",
    courseId: "sst-initial",
    date: "2025-11-22",
    location: "Lyon",
    seatsTotal: 10,
    seatsTaken: 2,
  },
  {
    id: "s3",
    courseId: "caces-r489",
    date: "2025-11-20",
    location: "Paris Nord",
    seatsTotal: 6,
    seatsTaken: 4,
  },
  {
    id: "s4",
    courseId: "habil-elec-b1",
    date: "2025-12-05",
    location: "Paris 12",
    seatsTotal: 8,
    seatsTaken: 5,
  },
  {
    id: "s5",
    courseId: "incendie-epi",
    date: "2025-12-10",
    location: "Intra-entreprise",
    seatsTotal: 12,
    seatsTaken: 0,
  },
];
