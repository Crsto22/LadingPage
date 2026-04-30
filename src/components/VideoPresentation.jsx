import { motion } from 'framer-motion';
import fondo from '../img/fondo3.png';

const videoVariants = {
	hidden: { opacity: 0, y: 58, scale: 0.96 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.9,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const copyVariants = {
	hidden: { opacity: 0, x: -34 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.78,
			delay: 0.12,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export default function VideoPresentation() {
	const backgroundSrc = typeof fondo === 'string' ? fondo : fondo.src;

	return (
		<section className="relative overflow-hidden bg-primary py-[clamp(72px,9vw,126px)] text-surface">
			<img
				className="absolute inset-0 h-full w-full object-cover object-center"
				src={backgroundSrc}
				alt=""
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(247,255,255,0.12),transparent_28%),linear-gradient(135deg,rgba(0,73,164,0.84)_0%,rgba(6,44,120,0.88)_100%)]" />
			<div className="absolute right-0 top-0 h-full w-[42vw] bg-[linear-gradient(90deg,transparent,rgba(40,110,170,0.32))]" />

			<div className="relative mx-auto grid w-full max-w-[1540px] grid-cols-[minmax(260px,0.38fr)_minmax(0,1fr)] items-center gap-[clamp(56px,8vw,132px)] px-[clamp(18px,5vw,84px)] max-lg:grid-cols-1">
				<motion.div
					variants={copyVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35 }}
				>
					<h2 className="text-[clamp(38px,5vw,76px)] font-black leading-[0.95]">
						Presentación
						<span className="block text-surface/70">Integridad Democrática</span>
					</h2>

					<p className="mt-6 max-w-md text-[17px] font-semibold leading-7 text-surface/74">
						Una mirada directa al propósito, valores y visión del movimiento para el Perú.
					</p>
				</motion.div>

				<motion.div
					className="relative"
					variants={videoVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.32 }}
				>
					<div className="absolute -inset-4 rounded-[34px] bg-surface/10 blur-2xl" />
					<div className="relative overflow-hidden rounded-[28px] border border-surface/20 bg-primary-dark shadow-[0_34px_80px_rgba(0,24,74,0.45)]">
						<div className="aspect-video w-full">
							<iframe
								className="size-full"
								src="https://www.youtube-nocookie.com/embed/chDTPtJ52h0?autoplay=1&mute=1&start=5&rel=0&modestbranding=1&playsinline=1"
								title="Presentación Integridad Democrática"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								loading="lazy"
								referrerPolicy="strict-origin-when-cross-origin"
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
