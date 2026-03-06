"use client";
import { motion } from "framer-motion";
import Prism from "@/components/Prism";
import SplitText from "@/components/SplitText";

const teamMembers = Array.from({ length: 4 }).map((_, i) => ({
  name: `Team Member ${i + 1}`,
  role: "Role Placeholder",
  bio: "Short profile description placeholder. Replace this with each member's bio.",
}));

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.2 };

export default function Home() {
  const showHeroTitle = true;

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <motion.main
      className="relative min-h-screen w-full overflow-x-hidden bg-[#eae5d9] text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Hero Section */}
      <section className="px-6 pb-8 pt-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-black/10 shadow-[0_20px_80px_rgba(0,0,0,0.2)] md:aspect-[16/9]">
            <div className="absolute inset-0">
              <Prism
                animationType="hover"
                timeScale={0.6}
                height={4.6}
                baseWidth={5.5}
                scale={3.9}
                hueShift={0}
                colorFrequency={1}
                noise={0}
                glow={1}
              />
            </div>
            <div className="absolute inset-0 bg-black/35"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/15"></div>

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
              {showHeroTitle ? (
                <>
                  <SplitText
                    text="LIENZO STUDIO"
                    className="mx-auto max-w-4xl text-3xl font-semibold tracking-[0.16em] text-white md:text-5xl"
                    delay={80}
                    duration={0.4}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                    showCallback
                  />
                  <div className="mt-6">
                    <SplitText
                      text="Creativity that crosses every border."
                      className="mx-auto max-w-2xl text-base font-medium tracking-[0.06em] text-white/90 md:text-xl"
                      delay={35}
                      duration={0.35}
                      ease="power3.out"
                      splitType="words"
                      from={{ opacity: 0, y: 20 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                      onLetterAnimationComplete={handleAnimationComplete}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-6 pb-28 pt-10 text-center md:pt-14">
          <motion.article
            className="space-y-6"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold">Who We Are</h2>
            <p className="text-lg text-black/80">
              Lienzo Studio is a digital design and media agency specializing in crafting modern, engaging websites and digital experiences that elevate brands.
            </p>
          </motion.article>

          <motion.article
            className="space-y-6 mt-16"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold">What We Do</h2>
            <p className="text-lg text-black/80">
              We provide end-to-end solutions including branding, web design, content creation, and social media strategy to help businesses connect with their audience effectively.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-white/55 p-8 md:p-12">
          <motion.div
            className="text-center"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold">Meet The Team</h2>
            <p className="mt-4 text-black/65">
              Placeholder cards for the four current team members.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.article
                key={member.name}
                className="rounded-2xl border border-black/10 bg-white/75 p-6 text-center"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              >
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-black/20 bg-black/5 text-[10px] uppercase tracking-[0.2em] text-black/50">
                  Photo
                </div>
                <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-black/55">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
