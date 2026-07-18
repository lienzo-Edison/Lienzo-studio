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
    customerPortal: string;
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
    audiencesTitle: string;
    audiencesIntro: string;
    audiences: {
      eyebrow: string;
      headline: string;
      body: string;
      cta: string;
    }[];
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
      customerPortal: "Customer portal",
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
        "We are a bilingual marketing and creative studio working across the U.S. and Latin America.\nWe help ambitious companies sharpen their position, earn attention, and turn a stronger market presence into growth.",
      whatTitle: "What We Do",
      whatBody:
        "We connect marketing strategy, SEO, websites, campaigns, brand identity, and design.\nEvery engagement is built around a business objective: reach the right buyers, clarify the offer, and create momentum.",
      locationsEyebrow: "Where We Work",
      locationsTitle: "From Mexico to the Front Range",
      locationsBody:
        "We built our foundation in Durango, Mexico and now partner remotely with growth-minded companies across the Colorado Front Range, the United States, Mexico, and LATAM. Our bilingual perspective helps teams communicate clearly across markets without losing strategic focus.",
      locationsCta: "See All Locations",
      teamTitle: "Meet The Team",
      teamSubtitle:
        "A close team working across the U.S. and Mexico. We collaborate on every project, combining perspectives and craft to deliver focused, effective brand work.",
      teamLabel: "Team",
      photoLabel: "Photo",
      teamMembers: [
        { name: "Edison Carrillo", role: "Founder & Director" },
        { name: "Eduardo Carrillo", role: "Brand Designer" },
        { name: "Michelle Portillo", role: "Graphic and Editorial Designer" },
        { name: "Reymundo Torres", role: "Brand Designer" },
      ],
      audiencesTitle: "Built for the Next Stage",
      audiencesIntro:
        "We partner with companies that have real expertise, complex offers, and a clear reason to invest in stronger growth infrastructure.",
      audiences: [
        {
          eyebrow: "Established Companies",
          headline: "Turn expertise into a market position buyers understand.",
          body: "When the company has outgrown its messaging or digital presence, growth gets harder than it should be. We align positioning, search visibility, website experience, and brand so your value is clear before the sales conversation begins.",
          cta: "Explore Growth Marketing",
        },
        {
          eyebrow: "Growth-Stage Teams",
          headline: "Build a marketing system that can support the next move.",
          body: "Launching a new service, entering a market, or moving upmarket requires more than isolated deliverables. We create the SEO, content, campaign, website, and sales-facing assets your team needs to generate and convert demand.",
          cta: "Explore Growth Services",
        },
        {
          eyebrow: "Cross-Border Brands",
          headline: "One strategy. Two languages. No loss of meaning.",
          body: "Companies working between the U.S., Mexico, and LATAM need more than translation. We shape bilingual messaging, search strategy, campaigns, and brand systems around how business buyers evaluate value in each market.",
          cta: "Explore Bilingual Marketing",
        },
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
      lastUpdated: "Last Updated: July 2026",
      footerLink: "Privacy Policy",
      sections: [
        {
          title: "1. Who We Are",
          content: "Lienzo Studio is a branding and digital marketing agency registered in the State of Colorado, United States. We specialize in brand identity, social media management, editorial design, website design, and digital marketing solutions.\n\nIf you have any questions about this Privacy Policy or how we handle your information, please contact us at hello@lienzo.studio."
        },
        {
          title: "2. Information We Collect",
          content: [
            "When you contact us through our website, forms, social media, or other communication channels, we may collect information such as:",
            "- Full name",
            "- Email address",
            "- Phone number (when provided voluntarily)",
            "- Business or company name (when applicable)",
            "- Information you choose to share regarding your project or service request",
            "We do not intentionally collect sensitive personal information such as government identification numbers, passwords, payment credentials, or medical information."
          ]
        },
        {
          title: "3. How We Use Your Information",
          content: [
            "We use the information you provide solely to support our business relationship with you, including:",
            "- Responding to inquiries and service requests",
            "- Scheduling consultations and meetings",
            "- Preparing proposals and project documentation",
            "- Delivering our services",
            "- Communicating throughout your project",
            "- Providing customer support",
            "- Sending service-related communications that you request or are necessary for an active project",
            "We do not sell your personal information or use it for unrelated marketing purposes without your consent."
          ]
        },
        {
          title: "4. Meeting Recordings",
          content: [
            "With your knowledge or consent where required by applicable law, Lienzo Studio may record discovery calls, strategy sessions, project meetings, or other project-related discussions.",
            "These recordings are used exclusively for internal business purposes, including:",
            "- Documenting project requirements",
            "- Preparing meeting notes",
            "- Creating project documentation",
            "- Improving communication and collaboration",
            "- Maintaining accurate project records",
            "- Supporting the delivery of our services",
            "Recordings and any notes or transcripts generated from them are used solely by Lienzo Studio in connection with your project.",
            "When necessary, recordings may be securely processed using trusted service providers that assist us with transcription, documentation, or productivity tools. These providers process information only as needed to perform services on our behalf and are not authorized to use your information for their own marketing or unrelated commercial purposes.",
            "Access to recordings is limited to authorized Lienzo Studio team members working on your project."
          ]
        },
        {
          title: "5. Sharing Information",
          content: "We do not sell, rent, or trade your personal information.\n\nWe may share limited information only when necessary to operate our business or provide our services, including trusted providers such as website hosting, payment processing, email services, cloud storage, scheduling platforms, or documentation and transcription tools. These providers are permitted to process information only for the services they perform on our behalf.\n\nWe may also disclose information if required by applicable law or to protect our legal rights."
        },
        {
          title: "6. Data Retention",
          content: [
            "We retain your information only for as long as reasonably necessary to:",
            "- Respond to your inquiries",
            "- Deliver our services",
            "- Maintain project records",
            "- Comply with legal or contractual obligations",
            "If you request deletion of your personal information, we will honor your request whenever legally and contractually permitted."
          ]
        },
        {
          title: "7. Your Rights",
          content: [
            "You may request at any time:",
            "- Access to the personal information we hold about you",
            "- Correction of inaccurate or incomplete information",
            "- Deletion of your personal information, where applicable",
            "To exercise these rights, contact us at hello@lienzo.studio. We will make reasonable efforts to respond within five (5) business days."
          ]
        },
        {
          title: "8. Changes to This Policy",
          content: "We may update this Privacy Policy from time to time to reflect changes in our services, business practices, or legal requirements.\n\nAny updates will be posted on this page with a revised “Last Updated” date. Continued use of our services after changes become effective constitutes acceptance of the updated policy."
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
      customerPortal: "Portal de clientes",
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
        "Somos un estudio bilingüe de marketing y creatividad que trabaja entre Estados Unidos y Latinoamérica.\nAyudamos a empresas ambiciosas a fortalecer su posición, ganar atención y convertir una mejor presencia en crecimiento.",
      whatTitle: "Lo Que Hacemos",
      whatBody:
        "Conectamos estrategia de marketing, SEO, sitios web, campañas, identidad de marca y diseño.\nCada proyecto parte de un objetivo de negocio: llegar a los compradores correctos, aclarar la oferta y crear impulso.",
      locationsEyebrow: "Dónde Trabajamos",
      locationsTitle: "De México al Front Range",
      locationsBody:
        "Construimos nuestra base en Durango, México y hoy colaboramos de forma remota con empresas enfocadas en crecer en el Front Range de Colorado, Estados Unidos, México y LATAM. Nuestra perspectiva bilingüe ayuda a comunicar con claridad entre mercados sin perder el enfoque estratégico.",
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
      audiencesTitle: "Hecho para la siguiente etapa",
      audiencesIntro:
        "Colaboramos con empresas que tienen experiencia real, ofertas complejas y una razón clara para invertir en una infraestructura de crecimiento más fuerte.",
      audiences: [
        {
          eyebrow: "Empresas establecidas",
          headline: "Convierte tu experiencia en una posición que el mercado entienda.",
          body: "Cuando la empresa supera su mensaje o presencia digital, crecer se vuelve más difícil. Alineamos posicionamiento, visibilidad en buscadores, experiencia web y marca para que tu valor sea claro antes de la conversación de ventas.",
          cta: "Explorar marketing de crecimiento",
        },
        {
          eyebrow: "Equipos en crecimiento",
          headline: "Construye un sistema de marketing que sostenga el siguiente paso.",
          body: "Lanzar un servicio, entrar a un mercado o subir de categoría requiere más que entregables aislados. Creamos el SEO, contenido, campañas, sitio web y activos comerciales que tu equipo necesita para generar y convertir demanda.",
          cta: "Explorar servicios de crecimiento",
        },
        {
          eyebrow: "Marcas binacionales",
          headline: "Una estrategia. Dos idiomas. Sin perder el significado.",
          body: "Las empresas que trabajan entre Estados Unidos, México y LATAM necesitan más que traducción. Creamos mensajes bilingües, estrategia de búsqueda, campañas y sistemas de marca alrededor de cómo cada mercado evalúa el valor.",
          cta: "Explorar marketing bilingüe",
        },
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
      lastUpdated: "Última actualización: julio de 2026",
      footerLink: "Política de Privacidad",
      sections: [
        {
          title: "1. Quiénes somos",
          content: "Lienzo Studio es una agencia de branding y marketing digital registrada en el estado de Colorado, Estados Unidos. Nos especializamos en identidad de marca, gestión de redes sociales, diseño editorial, diseño de sitios web y soluciones de marketing digital.\n\nSi tienes alguna pregunta sobre esta Política de Privacidad o sobre cómo tratamos tu información, contáctanos en hello@lienzo.studio."
        },
        {
          title: "2. Información que recopilamos",
          content: [
            "Cuando te comunicas con nosotros a través de nuestro sitio web, formularios, redes sociales u otros canales de comunicación, podemos recopilar información como:",
            "- Nombre completo",
            "- Correo electrónico",
            "- Número de teléfono (cuando se proporciona voluntariamente)",
            "- Nombre del negocio o empresa (cuando corresponda)",
            "- Información que decidas compartir sobre tu proyecto o solicitud de servicio",
            "No recopilamos intencionalmente información personal sensible, como números de identificación emitidos por el gobierno, contraseñas, credenciales de pago o información médica."
          ]
        },
        {
          title: "3. Cómo usamos tu información",
          content: [
            "Utilizamos la información que proporcionas únicamente para apoyar nuestra relación comercial contigo, lo que incluye:",
            "- Responder consultas y solicitudes de servicio",
            "- Programar consultas y reuniones",
            "- Preparar propuestas y documentación del proyecto",
            "- Prestar nuestros servicios",
            "- Comunicarnos contigo durante tu proyecto",
            "- Brindar atención al cliente",
            "- Enviar comunicaciones relacionadas con el servicio que solicites o que sean necesarias para un proyecto activo",
            "No vendemos tu información personal ni la utilizamos para fines de marketing no relacionados sin tu consentimiento."
          ]
        },
        {
          title: "4. Grabaciones de reuniones",
          content: [
            "Con tu conocimiento o consentimiento, según lo exija la legislación aplicable, Lienzo Studio puede grabar llamadas de descubrimiento, sesiones de estrategia, reuniones de proyecto u otras conversaciones relacionadas con el proyecto.",
            "Estas grabaciones se utilizan exclusivamente para fines comerciales internos, incluidos:",
            "- Documentar los requisitos del proyecto",
            "- Preparar notas de las reuniones",
            "- Crear documentación del proyecto",
            "- Mejorar la comunicación y la colaboración",
            "- Mantener registros precisos del proyecto",
            "- Apoyar la prestación de nuestros servicios",
            "Lienzo Studio utiliza las grabaciones y las notas o transcripciones generadas a partir de ellas únicamente en relación con tu proyecto.",
            "Cuando sea necesario, las grabaciones podrán ser procesadas de forma segura por proveedores de servicios de confianza que nos apoyan con herramientas de transcripción, documentación o productividad. Estos proveedores procesan la información solo en la medida necesaria para prestar servicios en nuestro nombre y no están autorizados a utilizar tu información para su propio marketing ni para fines comerciales no relacionados.",
            "El acceso a las grabaciones está limitado a los miembros autorizados del equipo de Lienzo Studio que trabajan en tu proyecto."
          ]
        },
        {
          title: "5. Cómo compartimos la información",
          content: "No vendemos, alquilamos ni intercambiamos tu información personal.\n\nPodemos compartir información limitada únicamente cuando sea necesario para operar nuestro negocio o prestar nuestros servicios, incluso con proveedores de confianza, como servicios de alojamiento web, procesamiento de pagos, correo electrónico, almacenamiento en la nube, plataformas de programación de citas o herramientas de documentación y transcripción. Estos proveedores solo pueden procesar la información para prestar los servicios que realizan en nuestro nombre.\n\nTambién podemos divulgar información si así lo exige la legislación aplicable o para proteger nuestros derechos legales."
        },
        {
          title: "6. Retención de datos",
          content: [
            "Conservamos tu información solo durante el tiempo que sea razonablemente necesario para:",
            "- Responder a tus consultas",
            "- Prestar nuestros servicios",
            "- Mantener registros del proyecto",
            "- Cumplir con obligaciones legales o contractuales",
            "Si solicitas la eliminación de tu información personal, atenderemos tu solicitud siempre que esté permitido legal y contractualmente."
          ]
        },
        {
          title: "7. Tus derechos",
          content: [
            "Puedes solicitar en cualquier momento:",
            "- Acceso a la información personal que conservamos sobre ti",
            "- Corrección de información inexacta o incompleta",
            "- Eliminación de tu información personal, cuando corresponda",
            "Para ejercer estos derechos, contáctanos en hello@lienzo.studio. Haremos esfuerzos razonables para responder en un plazo de cinco (5) días hábiles."
          ]
        },
        {
          title: "8. Cambios a esta política",
          content: "Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestros servicios, prácticas comerciales o requisitos legales.\n\nTodas las actualizaciones se publicarán en esta página con una fecha de «Última actualización» revisada. El uso continuado de nuestros servicios después de que los cambios entren en vigor constituye la aceptación de la política actualizada."
        }
      ]
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}
