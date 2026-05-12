import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../../img/galeria-1.jpg';
import img2 from '../../img/galeria-2.jpg';
import img3 from '../../img/galeria-3.jpg';
import img4 from '../../img/galeria-4.jpg';
import img5 from '../../img/galeria-5.jpg';
import img6 from '../../img/galeria-6.jpg';
import img7 from '../../img/galeria-7.jpg';
import img8 from '../../img/galeria-8.jpg';
import img9 from '../../img/galeria-9.jpg';
import fondo from '../../img/fondo.png';
import { useLanguage } from '../../i18n/useLanguage.js';

// Arreglo de imágenes para la galería. 
// El usuario puede agregar más rutas o cambiarlas fácilmente aquí.
const galeriaImagenes = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9
];

export default function ImageGallery() {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState(null);
    const getImgSrc = (img) => typeof img === 'string' ? img : img?.src;

    // Cerrar con la tecla Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Desactivar scroll al abrir el modal
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const backgroundSrc = typeof fondo === 'string' ? fondo : fondo?.src;

    return (
        <section className="py-[clamp(60px,8vw,120px)] px-[clamp(18px,5vw,84px)] text-body relative overflow-hidden bg-surface">
            <img
                className="absolute inset-0 h-full w-full object-fill object-center"
                src={backgroundSrc}
                alt=""
                aria-hidden="true"
            />
            {/* Imagen de fondo ajustada para que llene los bordes sin cortarse (object-fill) */}
            
            <div className="mx-auto max-w-[1400px] relative z-10">
                <div className="text-center mb-[clamp(40px,5vw,72px)]">
                    <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-[1.1] text-primary mb-4">
                        {t('about.gallery.headingA')} <span className="text-accent">{t('about.gallery.headingB')}</span>
                    </h2>
                    <p className="text-[clamp(16px,1.2vw,20px)] text-muted max-w-2xl mx-auto font-medium">
                        {t('about.gallery.copy')}
                    </p>
                </div>

                {/* Grid de Imágenes */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
                    {galeriaImagenes.map((src, index) => (
                        <motion.div 
                            key={index}
                            className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-[1.2rem] cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedImage(src)}
                        >
                            <img 
                                src={getImgSrc(src)} 
                                alt={t('about.gallery.alt').replace('{count}', index + 1)} 
                                className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                                onError={(e) => {
                                    // Imagen de respaldo por si el usuario aún no sube las suyas
                                    e.target.src = `https://images.unsplash.com/photo-1529156069898-49953eb1b5ae?auto=format&fit=crop&w=800&q=80&sig=${index}`;
                                }}
                            />
                            {/* Overlay en hover */}
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

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
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Botón de cerrar */}
                        <button 
                            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-accent hover:text-white text-white/80 rounded-full transition-all duration-300 z-10"
                            onClick={() => setSelectedImage(null)}
                            aria-label={t('common.closeImage')}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        {/* Imagen grande */}
                        <motion.img 
                            src={getImgSrc(selectedImage)} 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.5)]"
                            onClick={(e) => e.stopPropagation()} // Evita que al hacer clic en la imagen se cierre el modal
                            onError={(e) => {
                                // Fallback para modal
                                e.target.src = "https://images.unsplash.com/photo-1529156069898-49953eb1b5ae?auto=format&fit=crop&w=1600&q=80";
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
