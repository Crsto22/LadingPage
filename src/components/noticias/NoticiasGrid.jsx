import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../i18n/useLanguage.js';

const headerVariants = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
	},
};

const gridVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08, delayChildren: 0.08 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 24, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function NoticiasGrid({ noticias }) {
	const { t } = useLanguage();
	const sectionRef = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const isInView = useInView(sectionRef, { once: true, amount: 0.16 });
	const animateState = isInView || shouldReduceMotion ? 'visible' : 'hidden';

	return (
		<section ref={sectionRef} className="py-[clamp(48px,6vw,96px)]">
			<div className="mx-auto max-w-[1120px] px-[clamp(16px,4vw,48px)]">
				<motion.div
					className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
					variants={gridVariants}
					initial={shouldReduceMotion ? 'visible' : 'hidden'}
					animate={animateState}
				>
					{noticias.map((noticia) => {
						const fecha = noticia.fechaKey ? t(noticia.fechaKey) : noticia.fecha;
						const titulo = noticia.titleKey ? t(noticia.titleKey) : noticia.titulo;

						return (
						<motion.article
							key={noticia.id}
							variants={cardVariants}
							whileHover={
								shouldReduceMotion
									? undefined
									: {
											y: -7,
											scale: 1.025,
											transition: { duration: 0.24, ease: 'easeOut' },
										}
							}
							className="group relative cursor-default overflow-hidden rounded-lg border border-[#003580]/20 bg-white shadow-[0_10px_26px_rgba(0,31,84,0.08)] ring-1 ring-[#0049a4]/5 will-change-transform transition-[border-color,box-shadow] duration-300 hover:border-[#0049a4]/45 hover:shadow-[0_22px_46px_rgba(0,49,132,0.18)] hover:ring-[#0049a4]/20"
						>
							<div className="relative aspect-[16/10] w-full overflow-hidden bg-primary/5">
								<motion.img
									className="block h-full w-full object-cover"
									src={noticia.imagen}
									alt={titulo}
									loading="lazy"
									whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
									transition={{ duration: 0.38, ease: 'easeOut' }}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#001e50]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</div>

							<div className="flex min-h-[96px] flex-col gap-2.5 p-5">
								<time className="font-primary text-[11px] font-extrabold uppercase tracking-[0.08em] !text-[#0049a4] opacity-100 [-webkit-text-fill-color:#0049a4]">
									{fecha}
								</time>
								<h3 className="m-0 font-primary text-[15px] font-extrabold leading-snug !text-[#001e50] opacity-100 [-webkit-text-fill-color:#001e50] transition-colors duration-200 group-hover:!text-[#0049a4] group-hover:[-webkit-text-fill-color:#0049a4]">
									{titulo}
								</h3>
							</div>
						</motion.article>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
