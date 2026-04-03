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
    teamLabel: string;
    photoLabel: string;
    teamMembers: { name: string; role: string }[];
    teamBio: string;
  };
  portfolio: {
    title: string;
    projectTitle: (index: number) => string;
    projectDescPrimary: string;
    projectDescSecondary: string;
    projectDescTertiary: string;
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
      preferEmail: string;
      whatsappButton: string;
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
        "We are a branding and marketing studio working across the U.S. and Latin America.\nWe create bold, high-quality visuals backed by strategy so brands don’t just look good, they grow.",
      whatTitle: "What We Do",
      whatBody:
        "We build brands and create marketing that performs.\nFrom identity design to advertising creatives, everything we deliver is made to attract, communicate, and convert.",
      teamTitle: "Meet The Team",
      teamSubtitle:
        "A tight-knit team working across the U.S. and Mexico. We collaborate closely on every project, blending perspectives and craft to deliver focused, high-impact brand work.",
      teamLabel: "Team",
      photoLabel: "Photo",
      teamMembers: [
        { name: "Edison Carrillo", role: "Founder & Director" },
        { name: "Eduardo Carrillo", role: "Brand Designer" },
        { name: "Michelle Portillo", role: "Brand Designer" },
        { name: "Reymundo Torres", role: "Brand Designer" },
      ],
      teamBio: "Short profile description placeholder. Replace this with each member's bio.",
    },
    portfolio: {
      title: "PORTFOLIO",
      projectTitle: (index) =>
        index === 1
          ? "WicFix"
          : index === 2
            ? "Mass Architecture"
            : index === 3
              ? "Dulce Michi"
              : `Project ${index}`,
      projectDescPrimary:
        "Premium tech repair and maintenance in Durango, Mexico, with white-glove care and meticulous detail.",
      projectDescSecondary:
        "Mass Architecture brand redesign with refined positioning, crisp typography, and a premium architectural tone.",
      projectDescTertiary:
        "Dessert cafe serving cookies, cakes, and Japanese-French pastries with coffee and tea.",
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
      intro: "If you're interested in working with us or have any questions, reach out by phone, WhatsApp, or email.",
      revealPrompt: "Click below to reveal our contact email.",
      revealButton: "Reveal Email",
      preferEmail: "Prefer email?",
      whatsappButton: "Message us on WhatsApp",
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
        "Somos un estudio de branding y marketing que trabaja en Estados Unidos y México.\nCreamos visuales audaces y de alta calidad respaldados por estrategia para que las marcas no solo se vean bien, sino que crezcan.",
      whatTitle: "Lo Que Hacemos",
      whatBody:
        "Construimos marcas y creamos marketing que funciona.\nDesde el diseño de identidad hasta creativos publicitarios, todo lo que entregamos está hecho para atraer, comunicar y convertir.",
      teamTitle: "Conoce al Equipo",
      teamSubtitle:
        "Un equipo unido que trabaja entre Estados Unidos y México. Colaboramos de cerca en cada proyecto, combinando perspectivas y oficio para entregar trabajo de marca enfocado y de alto impacto.",
      teamLabel: "Equipo",
      photoLabel: "Foto",
      teamMembers: [
        { name: "Edison Carrillo", role: "Fundador y director" },
        { name: "Eduardo Carrillo", role: "Diseñador de marca" },
        { name: "Michelle Portillo", role: "Diseñadora de marca" },
        { name: "Reymundo Torres", role: "Diseñador de marca" },
      ],
      teamBio: "Descripción breve de perfil. Reemplaza esto con la biografía de cada miembro.",
    },
    portfolio: {
      title: "PORTAFOLIO",
      projectTitle: (index) =>
        index === 1
          ? "WicFix"
          : index === 2
            ? "Mass Architecture"
            : index === 3
              ? "Dulce Michi"
              : `Proyecto ${index}`,
      projectDescPrimary:
        "Servicio premium de reparación y mantenimiento tecnológico en Durango, México, con atención tipo concierge y detalle impecable.",
      projectDescSecondary:
        "Rediseño de marca para Mass Architecture con posicionamiento refinado, tipografía precisa y un tono arquitectónico premium.",
      projectDescTertiary:
        "Cafetería de postres con galletas, pasteles y repostería japonesa-francesa, café y té.",
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
      intro: "Si te interesa trabajar con nosotros o tienes alguna pregunta, contáctanos por teléfono, WhatsApp o correo.",
      revealPrompt: "Haz clic abajo para mostrar nuestro correo de contacto.",
      revealButton: "Mostrar correo",
      preferEmail: "¿Prefieres correo?",
      whatsappButton: "Escríbenos por WhatsApp",
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}
