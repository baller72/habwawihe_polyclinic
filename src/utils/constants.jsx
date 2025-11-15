// Application constants and configuration

export const APP_CONFIG = {
  name: "HABWAWIHE MEDICAL POLYCLINIC",
  slogan: {
    fr: "Intégrité, Professionnalisme, Développement",
    en: "Integrity, Professionalism, Development"
  },
  contact: {
    phone: "71528178",
    email: "habwawihepolyclinic@gmail.com",
    address: "Quartier Muyaga, Zone Gihosha, Bujumbura-Burundi",
    hours: {
      emergency: "24h/24 - 7j/7",
      regular: "Lundi-Samedi: 08h00-18h00"
    }
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#"
  }
};

export const SERVICES = {
  pediatrics: {
    icon: "Baby",
    color: "#4FC3F7"
  },
  emergency: {
    icon: "Ambulance",
    color: "#F44336"
  },
  maternity: {
    icon: "Female",
    color: "#E91E63"
  },
  surgery: {
    icon: "Scissors",
    color: "#FF9800"
  },
  consultation: {
    icon: "User",
    color: "#2196F3"
  },
  laboratory: {
    icon: "Microscope",
    color: "#009688"
  },
  pharmacy: {
    icon: "Pill",
    color: "#4CAF50"
  }
};

export const LANGUAGES = {
  fr: "Français",
  en: "English"
};

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  large: 1200
};

export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.9
  },
  easing: {
    easeOut: [0.4, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1]
  }
};

export const COLORS = {
  primary: "#1a73e8",
  primaryDark: "#0d47a1",
  secondary: "#34a853",
  accent: "#fbbc05",
  danger: "#ea4335",
  warning: "#fbbc05",
  success: "#34a853",
  info: "#1a73e8",
  light: "#f8f9fa",
  dark: "#202124",
  gray: "#5f6368"
};

// Free services offered by the polyclinic
export const FREE_SERVICES = [
  {
    id: 'vaccination',
    title: {
      fr: 'Vaccination',
      en: 'Vaccination'
    },
    description: {
      fr: 'Programme complet de vaccination pour enfants et adultes',
      en: 'Complete vaccination program for children and adults'
    },
    icon: 'Shield'
  },
  {
    id: 'family_planning',
    title: {
      fr: 'Planning Familial',
      en: 'Family Planning'
    },
    description: {
      fr: 'Conseils et méthodes de planification familiale',
      en: 'Family planning advice and methods'
    },
    icon: 'Users'
  },
  {
    id: 'prenatal_care',
    title: {
      fr: 'Consultation Pré et Post Natal',
      en: 'Pre and Post Natal Consultation'
    },
    description: {
      fr: 'Suivi complet de la grossesse et après accouchement',
      en: 'Complete pregnancy and post-delivery follow-up'
    },
    icon: 'Baby'
  }
];

// Medical equipment information
export const MEDICAL_EQUIPMENT = [
  {
    id: 1,
    name: {
      fr: "Couveuse Nouvelle Génération",
      en: "New Generation Incubator"
    },
    description: {
      fr: "Couveuse de pointe pour soins aux nouveau-nés prématurés",
      en: "State-of-the-art incubator for premature newborn care"
    },
    features: {
      fr: ["Contrôle température", "Monitoring continu", "Environnement stérile"],
      en: ["Temperature control", "Continuous monitoring", "Sterile environment"]
    }
  },
  {
    id: 2,
    name: {
      fr: "Réchauffeur Infantile",
      en: "Infant Warmer"
    },
    description: {
      fr: "Équipement pour maintenir la température des nourrissons",
      en: "Equipment to maintain infant temperature"
    },
    features: {
      fr: ["Chauffage radiant", "Alarme sécurité", "Contrôle automatique"],
      en: ["Radiant heating", "Safety alarms", "Automatic control"]
    }
  }
];

export default {
  APP_CONFIG,
  SERVICES,
  LANGUAGES,
  BREAKPOINTS,
  ANIMATION,
  COLORS,
  FREE_SERVICES,
  MEDICAL_EQUIPMENT
};