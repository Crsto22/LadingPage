import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import quienesSomosImg from '../../img/nosotros-quienes-somos.jpg';
import iconIntegridad from '../../img/icon-integridad.png';
import iconIgualdad from '../../img/icon-igualdadyjusticia.png';
import iconDemocracia from '../../img/icon-democracia.png';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function NosotrosContent() {
    const [selectedImage, setSelectedImage] = useState(null);
    const getImgSrc = (img) => typeof img === 'string' ? img : img.src;

    return (
        <div className="bg-surface text-body w-full">
            {/* Quiénes Somos Section */}
            <section className="relative overflow-hidden py-[clamp(60px,8vw,120px)] px-[clamp(18px,5vw,84px)]">
                <div className="absolute top-0 right-0 w-[40vw] h-full bg-[linear-gradient(-90deg,rgba(0,73,164,0.06),transparent)]" />

                <div className="relative mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-primary mb-6">
                            Quiénes <span className="text-accent">Somos</span>
                        </h2>
                        <div className="border-l-4 border-accent pl-6 mb-8">
                            <p className="text-[clamp(18px,1.5vw,24px)] font-bold leading-[1.4] text-primary-dark">
                                Integridad Democrática es una organización política formada por ciudadanos comprometidos con el servicio al país, que entienden la política como un medio para alcanzar el Bien Común.
                            </p>
                        </div>
                        <p className="text-[clamp(16px,1.1vw,19px)] font-medium leading-[1.6] text-muted">
                            Nuestra visión se inspira en un enfoque humanista y se sustenta en valores y principios firmes, que ponen en el centro a la persona, la familia y la sociedad.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_48px_rgba(0,16,54,0.18)] group cursor-pointer"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        onClick={() => setSelectedImage(getImgSrc(quienesSomosImg))}
                    >
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500 z-10 pointer-events-none flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                                <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                            </div>
                        </div>
                        <img
                            src={getImgSrc(quienesSomosImg)}
                            alt="Equipo Integridad Democrática"
                            className="w-full h-[clamp(320px,35vw,550px)] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1529156069898-49953eb1b5ae?q=80&w=1470&auto=format&fit=crop";
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Nuestros Valores Section */}
            <section className="relative bg-[linear-gradient(135deg,#001e50_0%,#003580_100%)] text-white py-[clamp(60px,8vw,120px)] px-[clamp(18px,5vw,84px)] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />

                <div className="relative mx-auto max-w-[1400px]">
                    <motion.div
                        className="text-center max-w-4xl mx-auto mb-[clamp(48px,6vw,80px)]"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] text-[#f7ffff] mb-6">
                            Nuestros <span className="text-accent">Valores</span>
                        </h2>
                        <p className="text-[clamp(18px,1.4vw,22px)] font-semibold leading-[1.5] text-white/90">
                            Aspiramos a construir un país justo, libre, solidario y ganador, el Perú que todos queremos y merecemos.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(24px,3vw,48px)]"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {[
                            {
                                title: "Integridad",
                                icon: iconIntegridad,
                                fallbackIcon: "🛡️",
                                desc: "Para garantizar un ejercicio transparente y honesto de la política, combatiendo la corrupción."
                            },
                            {
                                title: "Igualdad y Justicia",
                                icon: iconIgualdad,
                                fallbackIcon: "⚖️",
                                desc: "Para asegurar que todos los peruanos tengan las mismas oportunidades y acceso a sus derechos."
                            },
                            {
                                title: "Democracia",
                                icon: iconDemocracia,
                                fallbackIcon: "🏛️",
                                desc: "Para construir una sociedad libre, participativa y representativa, donde tu voz importa."
                            }
                        ].map((val, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-[clamp(32px,4vw,48px)] flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300 overflow-hidden"
                            >
                                {/* Decorative glow */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-accent/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="w-[120px] h-[120px] bg-[#002660] rounded-full flex items-center justify-center mb-6 border border-accent/40 shadow-[0_0_24px_rgba(0,16,54,0.4)] relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={getImgSrc(val.icon)}
                                        alt={val.title}
                                        className="w-[70px] h-[70px] object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    <span className="text-[40px] hidden">{val.fallbackIcon}</span>
                                </div>
                                <h3 className="text-[clamp(24px,2.2vw,32px)] font-bold text-accent mb-4 relative z-10">
                                    {val.title}
                                </h3>
                                <p className="text-[clamp(16px,1.1vw,18px)] leading-[1.6] text-white/85 relative z-10 font-medium">
                                    {val.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Modal Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#001036]/90 backdrop-blur-lg p-4 md:p-10"
                    >
                        <button
                            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-accent hover:text-white text-white/80 rounded-full transition-all duration-300 z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <motion.img
                            src={selectedImage}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.5)]"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
