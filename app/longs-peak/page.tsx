"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.2 };

const WHATSAPP = "https://wa.me/message/LVLY6STJJOM4K1";
const EMAIL = "ventas@lienzo.studio";
const PHONE = "+1 (720) 990-7795";

const SERVICES = [
  {
    title: "Identidad de Marca y Estrategia",
    body: "Desarrollamos identidades visuales profesionales que ayudan a tu negocio a destacar y mantenerse consistente en todos los canales.",
    items: null,
  },
  {
    title: "Branding y Contenido para Redes Sociales",
    body: "Ayudamos a tu negocio a mantener una presencia consistente y profesional en redes sociales a través de estrategia, diseño y contenido optimizado.",
    items: null,
  },
  {
    title: "Diseño Editorial y de Marketing",
    body: "Desarrollamos materiales visuales profesionales que fortalecen la comunicación de tu marca.",
    items: ["Menús", "Flyers y pósters", "Brochures", "Catálogos", "Material corporativo"],
  },
  {
    title: "Ilustración y Activos Gráficos",
    body: "Creamos ilustraciones únicas y activos visuales a medida que ayudan a tu marca a destacar y diferenciarse.",
    items: null,
  },
];

const STEPS = [
  {
    title: "Platicamos",
    body: "Te escuchamos. Entendemos en qué etapa está tu negocio, qué necesitas mostrar y quién es tu cliente ideal.",
  },
  {
    title: "Diseñamos",
    body: "Creamos las piezas visuales y el sistema de contenido que tu negocio necesita para verse completo y profesional.",
  },
  {
    title: "Lo usas en todo",
    body: "El sistema funciona en redes, anuncios, impresión y web. Tu negocio se ve fuerte en todos lados.",
  },
];

export default function LongsPeakPage() {
  useEffect(() => {
    const html = document.documentElement;
    const wasDark = html.classList.contains("dark");
    html.classList.remove("dark");
    html.setAttribute("data-theme", "light");
    return () => {
      if (wasDark) {
        html.classList.add("dark");
        html.setAttribute("data-theme", "dark");
      }
    };
  }, []);

  const trackContact = (method: string) => {
    if (typeof window === "undefined") return;
    const w = window as typeof window & {
      fbq?: (...a: unknown[]) => void;
      gtag?: (...a: unknown[]) => void;
    };
    w.fbq?.("track", "Contact", { method, source: "longs-peak" });
    w.gtag?.("event", "contact", { method, source: "longs-peak" });
  };

  return (
    <motion.main
      className="relative min-h-screen overflow-x-hidden bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* ─── HERO ─── */}
      <section className="px-4 pb-12 pt-24 sm:px-6 md:px-10 md:pt-28 2xl:px-12">
        <div className="mx-auto w-full max-w-[104rem]">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-[0_24px_90px_rgba(0,0,0,0.18)] dark:border-white/10">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/longs-peak-bg.jpg"
                alt=""
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="relative z-10 min-h-[60vh] md:min-h-[68vh]">
              {/* Logo - top center */}
              <div className="absolute inset-x-0 top-6 flex justify-center px-7 md:top-8 md:px-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/lienzo-compacto-n.svg"
                  alt="Lienzo Studio"
                  className="h-auto w-[55vw] max-w-[900px] opacity-90"
                />
              </div>
              {/* Headline - bottom left */}
              <motion.p
                className="absolute bottom-10 left-7 max-w-4xl text-balance font-display font-bold uppercase text-3xl leading-tight text-white sm:text-4xl md:bottom-14 md:left-12 md:text-5xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              >
                Si llegaste aquí, la pregunta ya te tocó.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="px-6 pb-8 pt-2 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[#0f1418] px-7 py-10 text-white shadow-[0_24px_70px_rgba(0,0,0,0.12)] dark:border-white/10 md:px-10">
          <motion.div
            className="max-w-3xl"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              El problema
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-white md:text-4xl">
              Existir no es suficiente.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/72 md:text-base">
              Millones de negocios en México tienen presencia en redes, en Google, en Maps. Pero la mayoría tiene{" "}
              <span className="font-medium text-white">perfiles sin información, sin fotos, sin descripción, sin historia.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/72 md:text-base">
              El cliente potencial llega, ve un perfil vacío, y se va. No porque tu negocio sea malo. Sino porque{" "}
              <span className="font-medium text-[#ff8f7a]">nadie puede confiar en lo que no puede ver.</span>
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Sin información",
                body: "La falta de datos crea desconfianza. Tu negocio se siente inactivo, cerrado, o peor: invisible.",
              },
              {
                label: "Sin visuales",
                body: "Sin imágenes ni identidad visual, tu negocio no comunica valor. Solo ocupa espacio en pantalla.",
              },
              {
                label: "Sin estructura",
                body: "Un perfil sin forma cierra la puerta a clientes potenciales antes de que siquiera te contacten.",
              },
            ].map((p, i) => (
              <motion.article
                key={p.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              >
                <h3 className="font-display text-xl uppercase text-white">{p.label}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/72 md:text-base">{p.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="px-6 pb-8 pt-2 md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.article
            className="rounded-[1.9rem] border border-black/10 bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#151c24]"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a61b00] dark:text-[#ff8f7a]">
              Quiénes somos
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-[#254566] dark:text-[#8fb2d6]">
              Somos Lienzo Studio.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-black/72 md:text-base dark:text-white/72">
              Somos un estudio de branding y marketing que trabaja con negocios en México y Estados Unidos. Hablamos español, entendemos cómo funciona el mercado mexicano y adaptamos cada proyecto al tamaño y la etapa real de tu negocio.
            </p>
          </motion.article>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="px-6 pb-10 pt-8 md:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-10 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#a61b00] dark:text-[#ff8f7a]">
                La solución
              </p>
              <h2 className="mt-4 font-display text-3xl uppercase text-foreground md:text-4xl">
                Tu perfil no tiene por qué estar vacío.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-black/65 md:text-base dark:text-white/65">
              Tenemos los servicios para construir, completar o fortalecer la presencia de tu negocio:
              desde la identidad visual hasta el contenido que tus clientes ven cada día.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                className="group rounded-[1.85rem] border border-black/10 bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#151c24]"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              >
                <h3 className="font-display text-2xl uppercase text-foreground">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/70 md:text-base dark:text-white/70">
                  {s.body}
                </p>
                {s.items && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs font-medium text-black/60 dark:border-white/10 dark:bg-white/5 dark:text-white/55"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="px-6 pb-10 pt-10 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,#f6f1e7_0%,#ffffff_55%,#eef2f4_100%)] p-7 shadow-[0_22px_50px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[linear-gradient(135deg,#111820_0%,#151c24_55%,#1b2631_100%)] md:p-12">
          <motion.div
            className="max-w-3xl"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/55 dark:text-white/55">
              El proceso
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-foreground md:text-4xl">
              Así funciona.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-black/70 md:text-base dark:text-white/70">
              Ya sea que estés empezando con un perfil vacío u ordenando lo que ya tienes, convertimos lo creativo en un sistema práctico que sí puedes usar con un alcance adecuado para tu negocio.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <motion.article
                key={s.title}
                className="rounded-[1.5rem] border border-black/10 bg-white/80 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              >
                <h3 className="font-display text-2xl uppercase text-foreground">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/70 dark:text-white/70">
                  {s.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / CONTACT ─── */}
      <section className="px-6 pb-22 pt-10 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[#101417] px-7 py-10 text-white shadow-[0_28px_90px_rgba(0,0,0,0.2)] dark:border-white/10 md:px-12 md:py-14">
          <motion.div
            className="max-w-3xl"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              Contacto
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase md:text-4xl">
              Tu negocio merece verse completo.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
              Escríbenos por el canal que te quede más fácil. Trabajamos con negocios en Colorado y en todo México, y adaptamos el alcance correcto a la etapa en la que estás hoy.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-5 py-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#4ade80]" />
                <p className="text-sm font-medium text-white">
                  Revisamos tu situación <span className="font-semibold text-[#4ade80]">sin costo y sin compromiso</span>.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <motion.a
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
              className="rounded-[1.4rem] border border-white/12 bg-white/5 p-6 transition hover:bg-white/8"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => trackContact("phone")}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                Teléfono
              </p>
              <p className="mt-4 text-lg font-medium text-white">{PHONE}</p>
            </motion.a>

            <motion.a
              href={`mailto:${EMAIL}`}
              className="rounded-[1.4rem] border border-white/12 bg-white/5 p-6 transition hover:bg-white/8"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              onClick={() => trackContact("email")}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                Correo
              </p>
              <p className="mt-4 text-lg font-medium text-white">{EMAIL}</p>
            </motion.a>

            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.4rem] border border-white/12 bg-white/5 p-6 transition hover:bg-white/8"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              onClick={() => trackContact("whatsapp")}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                WhatsApp
              </p>
              <p className="mt-4 text-lg font-medium text-white">Iniciar chat</p>
            </motion.a>

            <motion.div
              className="rounded-[1.4rem] border border-white/12 bg-white/5 p-6"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                Redes
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/_lienzostudio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/8"
                  onClick={() => trackContact("instagram")}
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/people/Lienzo-Studio/61588545936546/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/8"
                  onClick={() => trackContact("facebook")}
                >
                  Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
