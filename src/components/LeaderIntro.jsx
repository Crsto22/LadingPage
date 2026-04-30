import React, { useState, useEffect } from 'react';
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import fondo from '../img/fondo.png';
import { motion } from 'framer-motion';

const textVariants = {
    hidden: { opacity: 0, x: -46 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.82,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const portraitVariants = {
    hidden: { opacity: 0, y: 72, scale: 0.94 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.95,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const detailVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 0.7,
            delay: 0.28,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function LeaderIntro() {
    const images = [image1, image2];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const tid = setInterval(() => setCurrent(i => (i + 1) % images.length), 4000);
        return () => clearInterval(tid);
    }, []);

    const imageSrc = typeof images[current] === 'string' ? images[current] : images[current].src;
    const backgroundSrc = typeof fondo === 'string' ? fondo : fondo.src;

    return (
        <section className="relative overflow-hidden bg-surface py-[clamp(72px,9vw,132px)] text-body">
            <img
                className="absolute inset-0 h-full w-full object-cover object-center "
                src={backgroundSrc}
                alt=""
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,255,255,0.78)_0%,rgba(247,255,255,0.58)_38%,rgba(234,244,255,0.68)_100%)]" />
            <div className="absolute top-0 left-0 h-full w-[38vw] bg-[linear-gradient(90deg,rgba(0,73,164,0.18),transparent)]" />
            <motion.div
                className="absolute right-[8%] bottom-0 hidden h-[72%] w-px origin-bottom bg-primary/15 lg:block"
                variants={detailVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
            />

            <div className="relative mx-auto grid w-full max-w-[1500px] grid-cols-[minmax(0,0.95fr)_minmax(320px,0.8fr)] items-end gap-[clamp(36px,6vw,96px)] px-[clamp(18px,5vw,84px)] max-lg:grid-cols-1">
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                >

                    <h2 className="text-[clamp(48px,7vw,104px)] font-black leading-[0.88] text-primary">
                        WOLFGANG
                        <span className="block text-accent">GROZO</span>
                    </h2>

                    <div className="mt-8 max-w-3xl border-l-4 border-accent pl-6">
                        <p className="text-[clamp(18px,1.5vw,25px)] font-extrabold leading-[1.22] text-primary-dark">
                            Mayor General FAP (r), ex Director de Inteligencia de la Fuerza Aérea, Maestro en Desarrollo y Defensa Nacional, Doctor en Desarrollo y Seguridad Estratégica, con una trayectoria militar íntegra y una sólida formación académica.
                        </p>

                        <p className="mt-6 text-[clamp(16px,1.1vw,19px)] font-semibold leading-8 text-muted">
                            Con una visión clara de los desafíos que enfrenta el Perú, hoy asume el compromiso de servir a la Patria desde la política. Su visión se sustenta en la integridad, el bien común y la convicción de que el servicio al país no termina con el uniforme, sino que se proyecta en cada decisión y acción.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="relative min-h-[520px] max-lg:min-h-[460px] max-sm:min-h-[360px]"
                    variants={portraitVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                >
                    <motion.img
                        key={current}
                        src={imageSrc}
                        alt="Wolfgang Grozo"
                        loading="lazy"
                        className="absolute right-[4%] bottom-0 h-[min(620px,92%)] w-auto max-w-[92%] object-contain drop-shadow-[0_14px_0_rgba(0,0,0,0.95)] [filter:drop-shadow(0_0_2px_rgba(0,0,0,0.95))_drop-shadow(18px_28px_28px_rgba(0,0,0,0.42))]"
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
