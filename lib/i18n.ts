export type Locale = "en" | "es";

export const defaultLocale: Locale = "en";
export const supportedLocales = ["en", "es"] as const;

export function isLocale(value: string | undefined): value is Locale {
  return supportedLocales.some((locale) => locale === value);
}

export function getLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const preferredLocale = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag = "", ...params] = part.trim().split(";");
      const qualityParam = params.find((param) => param.trim().startsWith("q="));
      const quality = qualityParam ? Number.parseFloat(qualityParam.split("=")[1] ?? "0") : 1;

      return {
        tag: tag.toLowerCase(),
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter(({ tag, quality }) => tag && quality > 0)
    .sort((a, b) => b.quality - a.quality)
    .find(({ tag }) => {
      const baseTag = tag.split("-")[0];
      return isLocale(baseTag);
    });

  const baseTag = preferredLocale?.tag.split("-")[0];
  return isLocale(baseTag) ? baseTag : defaultLocale;
}

type Translations = {
  nav: {
    home: string;
    portfolio: string;
    services: string;
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
    locationsEyebrow: string;
    locationsTitle: string;
    locationsBody: string;
    locationsCta: string;
    teamTitle: string;
    teamSubtitle: string;
    teamLabel: string;
    photoLabel: string;
    teamMembers: { name: string; role: string }[];
  };
  landing: {
    adImageAlt: string;
    eyebrow: string;
    heroTitle: string;
    heroBody: string;
    primaryCta: string;
    homeCta: string;
    problemEyebrow: string;
    problemTitle: string;
    problemIntro: string;
    painPoints: string[];
    introEyebrow: string;
    introTitle: string;
    introBody: string;
    whereEyebrow: string;
    whereTitle: string;
    whereBody: string;
    whatEyebrow: string;
    whatTitle: string;
    whatBody: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesIntro: string;
    serviceLabel: string;
    services: { title: string; body: string }[];
    integrationEyebrow: string;
    integrationTitle: string;
    integrationIntro: string;
    stepLabel: string;
    integrationSteps: { title: string; body: string }[];
    contactEyebrow: string;
    contactTitle: string;
    contactIntro: string;
    contactPhoneLabel: string;
    contactEmailLabel: string;
    contactWhatsappLabel: string;
    contactWhatsappValue: string;
    contactSocialLabel: string;
  };
  portfolio: {
    title: string;
    intro: string;
    scrollHint: string;
    moreComing: string;
    viewProject: string;
    projectTitle: (index: number) => string;
    projectDescPrimary: string;
    projectDescSecondary: string;
    projectDescTertiary: string;
    projectDescQuaternary: string;
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
    privacy: {
      title: string;
      lastUpdated: string;
      sections: { title: string; content: string | string[] }[];
      footerLink: string;
    };
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      services: "Services",
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
      locationsEyebrow: "Where We Work",
      locationsTitle: "From Mexico to the Front Range",
      locationsBody:
        "We built our foundation working with businesses in Durango, Mexico, developing deep experience in brand, design, and content creation. Based in Fort Lupton, CO, we are now bringing that same quality and approach to small and medium businesses across the Front Range and the Denver metro.",
      locationsCta: "See All Locations",
      teamTitle: "Meet The Team",
      teamSubtitle:
        "A tight-knit team working across the U.S. and Mexico. We collaborate closely on every project, blending perspectives and craft to deliver focused, high-impact brand work.",
      teamLabel: "Team",
      photoLabel: "Photo",
      teamMembers: [
        { name: "Edison Carrillo", role: "Founder & Director" },
        { name: "Eduardo Carrillo", role: "Brand Designer" },
        { name: "Michelle Portillo", role: "Graphic and Editorial Designer" },
        { name: "Reymundo Torres", role: "Brand Designer" },
      ],
    },
    landing: {
      adImageAlt: "Longs Peak campaign ad asking if your profile is empty",
      eyebrow: "Your profile is part of your first impression",
      heroTitle: "If Someone Finds Your Business Today, What Do They Actually See?",
      heroBody:
        "This campaign is built around a simple truth: an empty or incomplete profile quietly turns away potential clients. We help businesses in Colorado and across Mexico turn that first glance into trust, clarity, and action.",
      primaryCta: "Request Your Review",
      homeCta: "Visit The Main Site",
      problemEyebrow: "Why It Matters",
      problemTitle: "An Incomplete Profile Costs Attention Before A Conversation Ever Starts",
      problemIntro:
        "When people discover your business through Instagram, Facebook, Google, or referrals, they make decisions quickly. If the information is missing or the presentation feels weak, most people move on before you get the chance to explain what you offer.",
      painPoints: [
        "Missing information creates doubt and makes your business feel inactive or hard to trust.",
        "Weak visuals and inconsistent messaging make it harder for people to understand your value.",
        "A profile without structure can close the door on leads before they ever contact you.",
      ],
      introEyebrow: "Who We Are",
      introTitle: "A Creative Studio Built Around Brand Growth",
      introBody:
        "We are a branding and marketing studio focused on helping businesses present themselves with clarity, consistency, and confidence. Our work blends strategy, design, and execution so every touchpoint feels intentional, approachable, and ready to perform at the stage your business is in now.",
      whereEyebrow: "Our Perspective",
      whereTitle: "Rooted In Colorado With Reach Across Mexico",
      whereBody:
        "Our studio is rooted in Colorado, but this campaign is also built for businesses across Mexico, especially owners who want a stronger digital presence without feeling like they need a distant agency. We keep the process bilingual, practical, and close to the realities of the markets we work in.",
      whatEyebrow: "What We Do",
      whatTitle: "We Turn Empty Profiles Into Stronger Business Presence",
      whatBody:
        "From profile optimization and social media systems to brand identity, content, and launch support, we create the tools businesses need to look more complete, communicate more clearly, and convert more of the people already finding them.",
      servicesEyebrow: "Services",
      servicesTitle: "What We Offer",
      servicesIntro:
        "Each service is designed to strengthen how your business appears online, how it communicates value, and how it moves from an incomplete profile to a more confident system.",
      serviceLabel: "Service",
      services: [
        {
          title: "Profile & Presence Strategy",
          body: "We help define what your business should communicate first, what information needs to be visible, and how your profiles should guide people toward action instead of confusion.",
        },
        {
          title: "Social & Ad Creative",
          body: "We design social media content and ad creatives tailored to your goals, audience, and platforms, so your business can show up consistently and with stronger conversion intent.",
        },
        {
          title: "Content Production",
          body: "We create photo, video, and branded design assets that give your business the polished visual library it needs for launches, campaigns, and day-to-day marketing.",
        },
        {
          title: "Campaign & Launch Support",
          body: "We bring campaigns together through launch planning, landing pages, creative direction, and rollout support that keeps your message cohesive from click to conversion.",
        },
      ],
      integrationEyebrow: "How It Fits",
      integrationTitle: "How Businesses Can Apply This Right Away",
      integrationIntro:
        "Our work is meant to integrate into real business needs. Whether you are starting from an empty profile, cleaning up what already exists, or launching a more complete campaign, we help turn creative into a practical system you can use with a scope that fits your business, your priorities, and your market.",
      stepLabel: "Step",
      integrationSteps: [
        {
          title: "Clarify Your Offer",
          body: "We define what your business needs to say, who it needs to reach, and what should stand out first so your marketing feels aligned instead of improvised.",
        },
        {
          title: "Build The Assets",
          body: "We create the brand pieces, content, and campaign materials your team actually needs to launch, promote, and communicate with consistency.",
        },
        {
          title: "Use It Across Your Business",
          body: "The final system can support ads, websites, social media, printed collateral, launches, and customer communication so your business shows up stronger everywhere.",
        },
      ],
      contactEyebrow: "Contact",
      contactTitle: "Let’s Make Sure Your Business Looks Ready",
      contactIntro:
        "If your profile, content, or digital presence feels incomplete, reach out through whichever channel feels easiest. We work with businesses in Colorado and across Mexico, and we tailor the right scope to where you are now.",
      contactPhoneLabel: "Phone",
      contactEmailLabel: "Email",
      contactWhatsappLabel: "WhatsApp",
      contactWhatsappValue: "Start A Chat",
      contactSocialLabel: "Social",
    },
    portfolio: {
      title: "PORTFOLIO",
      intro:
        "A focused selection of work we have shaped with our clients. Each project is built with intention, tailored to the story, and designed to perform across every touchpoint.",
      scrollHint: "Scroll for more",
      moreComing:
        "More projects are on the way. Keep an eye out for upcoming launches, brand stories, and campaigns as our portfolio grows.",
      viewProject: "View project",
      projectTitle: (index) =>
        index === 1
          ? "WicFix"
          : index === 2
            ? "Mass Architecture"
            : index === 3
              ? "Dulce Michi"
              : index === 4
                ? "Revista San Miguel de Allende"
              : `Project ${index}`,
      projectDescPrimary:
        "Full brand identity and social media management for a tech services company in Durango, Mexico, built from scratch with a clean, professional aesthetic.",
      projectDescSecondary:
        "Brand redesign for Mass Architecture, with a refined visual identity, updated typography system, and cohesive brand language for a professional architecture firm.",
      projectDescTertiary:
        "Complete brand identity, product packaging mockups, and social media management for a dessert café specializing in Japanese-French pastries.",
      projectDescQuaternary:
        "Full editorial design for Revista San Miguel de Allende, including the layout system, typography, and print-ready design for a cultural magazine built entirely from scratch.",
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
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 2026",
      footerLink: "Privacy Policy",
      sections: [
        {
          title: "1. Who We Are",
          content: "Lienzo Studio is a branding and digital marketing agency registered in the state of Colorado, United States. We specialize in brand identity, social media content systems, editorial design, and custom graphic assets.\n\nFor any questions regarding this policy, you can contact us at: hello@lienzo.studio"
        },
        {
          title: "2. Information We Collect",
          content: [
            "Through our contact forms and advertising campaigns, we only collect the following personal information:",
            "- Full name",
            "- Email address",
            "- Phone number (when provided voluntarily)",
            "We do not collect sensitive information such as financial data, passwords, or identity documents."
          ]
        },
        {
          title: "3. How We Use Your Information",
          content: [
            "The information we collect is used exclusively to:",
            "- Respond to and follow up on your service request",
            "- Schedule consultation calls or appointments",
            "- Send you relevant information about our services, if requested",
            "We do not use your information for purposes other than those mentioned without your prior consent."
          ]
        },
        {
          title: "4. Sharing Information with Third Parties",
          content: "Lienzo Studio does not sell, rent, or share your personal information with third parties under any circumstances.\n\nYour information remains within our team and is treated with strict confidentiality."
        },
        {
          title: "5. Data Retention",
          content: "We keep your information only for as long as necessary to attend to your request or as long as there is an active working relationship between Lienzo Studio and your business. If you wish for us to delete your data, you can request it at any time."
        },
        {
          title: "6. Your Rights",
          content: [
            "You have the right to request at any time:",
            "- Access to the information we have about you",
            "- Correction of incorrect data",
            "- Deletion of your information from our records",
            "To exercise any of these rights, write to us at hello@lienzo.studio and we will respond within a maximum of 5 business days."
          ]
        },
        {
          title: "7. Changes to This Policy",
          content: "We may update this policy occasionally. Any changes will be posted on this page with the corresponding update date. We recommend you review it periodically."
        }
      ]
    },
  },
  es: {
    nav: {
      home: "Inicio",
      portfolio: "Portafolio",
      services: "Servicios",
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
      locationsEyebrow: "Dónde Trabajamos",
      locationsTitle: "De México al Front Range",
      locationsBody:
        "Construimos nuestra base trabajando con negocios en Durango, México, desarrollando experiencia profunda en marca, diseño y creación de contenido. Con base en Fort Lupton, CO, ahora llevamos esa misma calidad y enfoque a pequeñas y medianas empresas en el Front Range y el metro de Denver.",
      locationsCta: "Ver Todas las Ciudades",
      teamTitle: "Conoce al Equipo",
      teamSubtitle:
        "Un equipo unido que trabaja entre Estados Unidos y México. Colaboramos de cerca en cada proyecto, combinando perspectivas y oficio para entregar trabajo de marca enfocado y de alto impacto.",
      teamLabel: "Equipo",
      photoLabel: "Foto",
      teamMembers: [
        { name: "Edison Carrillo", role: "Fundador y director" },
        { name: "Eduardo Carrillo", role: "Diseñador de marca" },
        { name: "Michelle Portillo", role: "Diseñadora grafica y Editorial" },
        { name: "Reymundo Torres", role: "Diseñador de marca" },
      ],
    },
    landing: {
      adImageAlt: "Anuncio de la campaña Longs Peak que pregunta si tu perfil está vacío",
      eyebrow: "Tu perfil también es tu primera impresión",
      heroTitle: "Si hoy alguien encuentra tu negocio, ¿qué es lo que realmente ve?",
      heroBody:
        "Esta campaña parte de una verdad simple: un perfil vacío o incompleto aleja clientes potenciales en silencio. Ayudamos a negocios en Colorado y en todo México a convertir esa primera impresión en confianza, claridad y acción.",
      primaryCta: "Solicitar Revisión",
      homeCta: "Ver Sitio Principal",
      problemEyebrow: "Por Qué Importa",
      problemTitle: "Un Perfil Incompleto Te Cuesta Atención Antes De Que Empiece La Conversación",
      problemIntro:
        "Cuando alguien encuentra tu negocio por Instagram, Facebook, Google o una recomendación, decide rápido. Si falta información o la presentación se siente débil, la mayoría sigue de largo antes de darte la oportunidad de explicar lo que ofreces.",
      painPoints: [
        "La falta de información genera duda y hace que tu negocio se sienta inactivo o difícil de confiar.",
        "Los visuales débiles y el mensaje inconsistente hacen más difícil entender el valor de tu negocio.",
        "Un perfil sin estructura puede cerrar la puerta a clientes potenciales antes de que te contacten.",
      ],
      introEyebrow: "Quiénes Somos",
      introTitle: "Un Estudio Creativo Enfocado En El Crecimiento De Marca",
      introBody:
        "Somos un estudio de branding y marketing enfocado en ayudar a negocios a presentarse con claridad, consistencia y confianza. Nuestro trabajo une estrategia, diseño y ejecución para que cada punto de contacto se sienta intencional, cercano y listo para rendir según la etapa en la que está tu negocio hoy.",
      whereEyebrow: "Nuestra Perspectiva",
      whereTitle: "Con Raíces En Colorado Y Alcance En Todo México",
      whereBody:
        "Nuestro estudio tiene raíces en Colorado, pero esta campaña también está pensada para negocios en todo México, especialmente para dueños que quieren una presencia digital más fuerte sin sentir que necesitan una agencia lejana. Mantenemos el proceso bilingüe, práctico y cercano a la realidad de los mercados con los que trabajamos.",
      whatEyebrow: "Lo Que Hacemos",
      whatTitle: "Convertimos Perfiles Vacíos En Una Presencia Más Fuerte",
      whatBody:
        "Desde optimización de perfiles y sistemas para redes sociales hasta identidad de marca, contenido y apoyo en lanzamientos, creamos las herramientas que tu negocio necesita para verse más completo, comunicar mejor y convertir a más personas que ya te están encontrando.",
      servicesEyebrow: "Servicios",
      servicesTitle: "Lo Que Ofrecemos",
      servicesIntro:
        "Cada servicio está pensado para fortalecer cómo se ve tu negocio en línea, cómo comunica su valor y cómo pasa de un perfil incompleto a un sistema más sólido.",
      serviceLabel: "Servicio",
      services: [
        {
          title: "Estrategia De Perfil Y Presencia",
          body: "Definimos qué debe comunicar primero tu negocio, qué información necesita ser visible y cómo tus perfiles deben guiar a la gente hacia una acción en vez de dejarla con dudas.",
        },
        {
          title: "Creativos Para Redes Y Ads",
          body: "Diseñamos contenido para redes sociales y anuncios alineados a tus metas, audiencia y plataformas, para que tu negocio se muestre con consistencia y con una intención de conversión más clara.",
        },
        {
          title: "Producción de Contenido",
          body: "Creamos foto, video y piezas de diseño de marca que le dan a tu negocio la biblioteca visual que necesita para lanzamientos, campañas y marketing diario.",
        },
        {
          title: "Soporte Para Campañas Y Lanzamientos",
          body: "Unimos campañas a través de planeación, landing pages, dirección creativa y apoyo en rollout para mantener tu mensaje coherente desde el clic hasta la conversión.",
        },
      ],
      integrationEyebrow: "Cómo Se Integra",
      integrationTitle: "Cómo Puede Aplicarlo Tu Negocio Desde Ya",
      integrationIntro:
        "Nuestro trabajo está diseñado para integrarse a necesidades reales del negocio. Ya sea que estés empezando con un perfil vacío, ordenando lo que ya tienes o lanzando una campaña más completa, convertimos lo creativo en un sistema práctico que sí puedes usar con un alcance adecuado para tu negocio, tus prioridades y tu mercado.",
      stepLabel: "Paso",
      integrationSteps: [
        {
          title: "Aclaramos Tu Oferta",
          body: "Definimos qué necesita comunicar tu negocio, a quién debe llegar y qué debe resaltar primero para que tu marketing se sienta alineado y no improvisado.",
        },
        {
          title: "Creamos Los Activos",
          body: "Diseñamos las piezas de marca, contenido y materiales de campaña que tu equipo realmente necesita para lanzar, promocionar y comunicar con consistencia.",
        },
        {
          title: "Lo Usas En Todo Tu Negocio",
          body: "El sistema final puede apoyar anuncios, sitios web, redes sociales, material impreso, lanzamientos y comunicación con clientes para que tu negocio se vea más fuerte en todas partes.",
        },
      ],
      contactEyebrow: "Contacto",
      contactTitle: "Hagamos Que Tu Negocio Se Vea Listo",
      contactIntro:
        "Si sientes que tu perfil, tu contenido o tu presencia digital están incompletos, escríbenos por el canal que te quede más fácil. Trabajamos con negocios en Colorado y en todo México, y adaptamos el alcance correcto a la etapa en la que estás hoy.",
      contactPhoneLabel: "Teléfono",
      contactEmailLabel: "Correo",
      contactWhatsappLabel: "WhatsApp",
      contactWhatsappValue: "Iniciar Chat",
      contactSocialLabel: "Redes",
    },
    portfolio: {
      title: "PORTAFOLIO",
      intro:
        "Una selección enfocada de trabajo que hemos desarrollado con nuestros clientes. Cada proyecto está creado con intención, adaptado a su historia y diseñado para rendir en cada punto de contacto.",
      scrollHint: "Desliza para ver más",
      moreComing:
        "Más proyectos vienen en camino. Mantente pendiente de próximos lanzamientos, historias de marca y campañas mientras crece nuestro portafolio.",
      viewProject: "Ver proyecto",
      projectTitle: (index) =>
        index === 1
          ? "WicFix"
          : index === 2
            ? "Mass Architecture"
            : index === 3
              ? "Dulce Michi"
              : index === 4
                ? "Revista San Miguel de Allende"
              : `Proyecto ${index}`,
      projectDescPrimary:
        "Diseño de identidad de marca y manejo de redes sociales para una empresa de servicio técnico en Durango, México, construido desde cero con estética profesional y limpia.",
      projectDescSecondary:
        "Rediseño de marca para Mass Architecture, con identidad visual refinada, sistema tipográfico actualizado y lenguaje de marca cohesivo para un despacho de arquitectura profesional.",
      projectDescTertiary:
        "Identidad de marca completa, mockups de empaque de producto y manejo de redes sociales para una cafetería de postres especializada en repostería japonesa-francesa.",
      projectDescQuaternary:
        "Diseño editorial completo para Revista San Miguel de Allende, con sistema de maquetación, selección tipográfica y diseño listo para impresión de una revista cultural creada desde cero.",
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
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: Abril 2026",
      footerLink: "Política de Privacidad",
      sections: [
        {
          title: "1. Quiénes somos",
          content: "Lienzo Studio es una agencia de branding y marketing digital registrada en el estado de Colorado, Estados Unidos. Nos especializamos en identidad de marca, sistemas de contenido para redes sociales, diseño editorial y activos gráficos personalizados.\n\nPara cualquier pregunta relacionada con esta política, puedes contactarnos en: hello@lienzo.studio"
        },
        {
          title: "2. Información que recopilamos",
          content: [
            "A través de nuestros formularios de contacto y campañas publicitarias, recopilamos únicamente la siguiente información personal:",
            "- Nombre completo",
            "- Correo electrónico",
            "- Número de teléfono (cuando se proporciona voluntariamente)",
            "No recopilamos información sensible como datos financieros, contraseñas ni documentos de identidad."
          ]
        },
        {
          title: "3. Cómo usamos tu información",
          content: [
            "La información que recopilamos se utiliza exclusivamente para:",
            "- Responderte y dar seguimiento a tu solicitud de servicio",
            "- Agendar llamadas o citas de consulta",
            "- Enviarte información relevante sobre nuestros servicios, si así lo solicitaste",
            "No utilizamos tu información para fines distintos a los mencionados sin tu consentimiento previo."
          ]
        },
        {
          title: "4. Compartir información con terceros",
          content: "Lienzo Studio no vende, renta ni comparte tu información personal con terceros bajo ninguna circunstancia.\n\nTu información permanece dentro de nuestro equipo de trabajo y es tratada con estricta confidencialidad."
        },
        {
          title: "5. Retención de datos",
          content: "Conservamos tu información únicamente durante el tiempo necesario para atender tu solicitud o mientras exista una relación de trabajo activa entre Lienzo Studio y tu negocio. Si deseas que eliminemos tus datos, puedes solicitarlo en cualquier momento."
        },
        {
          title: "6. Tus derechos",
          content: [
            "Tienes derecho a solicitar en cualquier momento:",
            "- Acceso a la información que tenemos sobre ti",
            "- Corrección de datos incorrectos",
            "- Eliminación de tu información de nuestros registros",
            "Para ejercer cualquiera de estos derechos, escríbenos a hello@lienzo.studio y responderemos en un plazo máximo de 5 días hábiles."
          ]
        },
        {
          title: "7. Cambios a esta política",
          content: "Podemos actualizar esta política ocasionalmente. Cualquier cambio será publicado en esta misma página con la fecha de actualización correspondiente. Te recomendamos revisarla periódicamente."
        }
      ]
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}
