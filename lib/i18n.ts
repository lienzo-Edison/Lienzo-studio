export type Locale = "en" | "es";

export const defaultLocale: Locale = "en";

type Translations = {
  nav: {
    home: string;
    portfolio: string;
    contact: string;
  };
  toggle: {
    en: string;
    es: string;
    ariaLabel: string;
  };
  home: {
    heroTitle: string;
    heroLogoAlt: string;
    heroSubtitle: string;
    whoTitle: string;
    whoBody: string;
    whatTitle: string;
    whatBody: string;
    teamTitle: string;
    teamSubtitle: string;
    photoLabel: string;
    teamMemberName: (index: number) => string;
    teamRole: string;
    teamBio: string;
  };
  portfolio: {
    title: string;
    projectTitle: (index: number) => string;
    projectDescPrimary: string;
    projectDescOther: string;
    projectOverviewPrimary: string;
    projectOverviewOther: (index: number) => string;
    overviewHeading: string;
    scopeHeading: string;
    scopeItems: string[];
    expandedViewLabel: string;
    closeDetailsLabel: string;
    close: string;
  };
  masonry: {
    projectImageAlt: (index: number) => string;
  };
  portfolioModal: {
    detailAlt: (title: string, index: number) => string;
    thumbAlt: (title: string, index: number) => string;
  };
  contact: {
    title: string;
    intro: string;
    revealPrompt: string;
    revealButton: string;
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    toggle: {
      en: "EN",
      es: "ES",
      ariaLabel: "Toggle language",
    },
    home: {
      heroTitle: "LIENZO STUDIO",
      heroLogoAlt: "Lienzo Studio logo",
      heroSubtitle: "Creativity that crosses every border.",
      whoTitle: "Who We Are",
      whoBody:
        "Lienzo Studio is a digital design and media agency specializing in crafting modern, engaging websites and digital experiences that elevate brands.",
      whatTitle: "What We Do",
      whatBody:
        "We provide end-to-end solutions including branding, web design, content creation, and social media strategy to help businesses connect with their audience effectively.",
      teamTitle: "Meet The Team",
      teamSubtitle: "Placeholder cards for the four current team members.",
      photoLabel: "Photo",
      teamMemberName: (index) => `Team Member ${index}`,
      teamRole: "Role Placeholder",
      teamBio: "Short profile description placeholder. Replace this with each member's bio.",
    },
    portfolio: {
      title: "PORTFOLIO",
      projectTitle: (index) => `Project ${index}`,
      projectDescPrimary: "Residential remodel with warm materials and natural light study.",
      projectDescOther: "Brief description of the project goes here.",
      projectOverviewPrimary:
        "Project 1 is a full-home design concept focused on balancing clean modern geometry with lived-in comfort. The goal was to create a layout that feels bright and calm while still supporting daily family routines.",
      projectOverviewOther: (index) =>
        `Project ${index} expanded overview placeholder. Replace this with your full project story, design intent, and key outcomes.`,
      overviewHeading: "Project Overview",
      scopeHeading: "Scope",
      scopeItems: [
        "Defined spatial concept, circulation, and furniture zoning.",
        "Refined palette and material direction for a cohesive look.",
        "Prepared visual studies to communicate mood and final intent.",
      ],
      expandedViewLabel: "Expanded project view",
      closeDetailsLabel: "Close project details",
      close: "Close",
    },
    masonry: {
      projectImageAlt: (index) => `Project image ${index}`,
    },
    portfolioModal: {
      detailAlt: (title, index) => `${title} detail image ${index}`,
      thumbAlt: (title, index) => `${title} thumbnail ${index}`,
    },
    contact: {
      title: "Contact Us",
      intro: "If you're interested in working with us or have any questions, feel free to reach out via email.",
      revealPrompt: "Click below to reveal our contact email.",
      revealButton: "Reveal Email",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      portfolio: "Portafolio",
      contact: "Contacto",
    },
    toggle: {
      en: "EN",
      es: "ES",
      ariaLabel: "Cambiar idioma",
    },
    home: {
      heroTitle: "LIENZO STUDIO",
      heroLogoAlt: "Logotipo de Lienzo Studio",
      heroSubtitle: "Creatividad que cruza todas las fronteras.",
      whoTitle: "Quiénes Somos",
      whoBody:
        "Lienzo Studio es una agencia de diseño digital y medios especializada en crear sitios web modernos y experiencias digitales que elevan las marcas.",
      whatTitle: "Lo Que Hacemos",
      whatBody:
        "Ofrecemos soluciones integrales que incluyen branding, diseño web, creación de contenido y estrategia en redes sociales para ayudar a las empresas a conectar con su audiencia de forma efectiva.",
      teamTitle: "Conoce al Equipo",
      teamSubtitle: "Tarjetas de muestra para los cuatro miembros actuales del equipo.",
      photoLabel: "Foto",
      teamMemberName: (index) => `Miembro del Equipo ${index}`,
      teamRole: "Rol de Ejemplo",
      teamBio: "Descripción breve de perfil. Reemplaza esto con la biografía de cada miembro.",
    },
    portfolio: {
      title: "PORTAFOLIO",
      projectTitle: (index) => `Proyecto ${index}`,
      projectDescPrimary: "Remodelación residencial con materiales cálidos y estudio de luz natural.",
      projectDescOther: "Descripción breve del proyecto aquí.",
      projectOverviewPrimary:
        "El Proyecto 1 es un concepto de diseño integral centrado en equilibrar geometría moderna y comodidad cotidiana. El objetivo fue crear un espacio luminoso y sereno que apoye las rutinas diarias de la familia.",
      projectOverviewOther: (index) =>
        `Proyecto ${index} con un resumen ampliado de muestra. Reemplaza esto con la historia completa del proyecto, intención de diseño y resultados clave.`,
      overviewHeading: "Resumen del Proyecto",
      scopeHeading: "Alcance",
      scopeItems: [
        "Definimos el concepto espacial, la circulación y las zonas de mobiliario.",
        "Refinamos la paleta y la dirección de materiales para un resultado coherente.",
        "Preparamos estudios visuales para comunicar el ambiente y la intención final.",
      ],
      expandedViewLabel: "Vista ampliada del proyecto",
      closeDetailsLabel: "Cerrar detalles del proyecto",
      close: "Cerrar",
    },
    masonry: {
      projectImageAlt: (index) => `Imagen del proyecto ${index}`,
    },
    portfolioModal: {
      detailAlt: (title, index) => `${title} imagen de detalle ${index}`,
      thumbAlt: (title, index) => `${title} miniatura ${index}`,
    },
    contact: {
      title: "Contáctanos",
      intro: "Si te interesa trabajar con nosotros o tienes alguna pregunta, contáctanos por correo.",
      revealPrompt: "Haz clic abajo para mostrar nuestro correo de contacto.",
      revealButton: "Mostrar correo",
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}
