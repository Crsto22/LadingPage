import { motion, useReducedMotion } from 'framer-motion';
import fondo from '../../img/fondo1.png';
import principlesImage from '../../img/principiosimg.webp';

const principles = [
	{
		title: 'La persona primero',
		kicker: 'Dignidad',
		position: 'lg:col-start-1 lg:row-start-1',
	},
	{
		title: 'La familia',
		kicker: 'Comunidad',
		position: 'lg:col-start-4 lg:row-start-1',
	},
	{
		title: 'Educaci\u00f3n integral',
		kicker: 'Futuro',
		position: 'lg:col-start-1 lg:row-start-2',
	},
	{
		title: 'Econom\u00eda al servicio de la gente',
		kicker: 'Progreso',
		position: 'lg:col-start-4 lg:row-start-2',
	},
	{
		title: 'Desarrollo con solidaridad',
		kicker: 'Equidad',
		position: 'lg:col-start-1 lg:row-start-3',
	},
	{
		title: 'Instituciones fuertes y descentralizadas',
		kicker: 'Gobernanza',
		position: 'lg:col-start-2 lg:row-start-3',
	},
	{
		title: 'Cultura y medio ambiente',
		kicker: 'Ra\u00edces',
		position: 'lg:col-start-3 lg:row-start-3',
	},
	{
		title: 'Autoridad al servicio del Bien Com\u00fan',
		kicker: 'Servicio',
		position: 'lg:col-start-4 lg:row-start-3',
	},
];

const sectionVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.08,
		},
	},
};

const fadeUp = {
	hidden: { opacity: 0, y: 34 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 26, scale: 0.96 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function PrinciplesSection() {
	const shouldReduceMotion = useReducedMotion();
	const backgroundSrc = typeof fondo === 'string' ? fondo : fondo.src;
	const imageSrc = typeof principlesImage === 'string' ? principlesImage : principlesImage.src;

	return (
		<section className="relative isolate overflow-hidden bg-white py-[clamp(72px,9vw,130px)] text-body">
			<img
				className="absolute inset-0 h-full w-full object-cover object-center"
				src={backgroundSrc}
				alt=""
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]" />

			<motion.div
				className="relative mx-auto w-full max-w-[1540px] px-[clamp(18px,5vw,84px)]"
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.18 }}
			>
				<motion.div className="mx-auto max-w-4xl text-center" variants={fadeUp}>
					<h2 className="mt-4 text-[clamp(42px,6vw,86px)] font-black leading-[0.92] text-primary-dark [text-shadow:0_8px_24px_rgba(247,255,255,0.35)]">
						Nuestros
						<span className="block text-primary">principios</span>
					</h2>
				</motion.div>

				<div className="mt-[clamp(38px,5vw,72px)] grid gap-5 md:grid-cols-2 lg:grid-cols-[minmax(190px,0.82fr)_minmax(260px,1.18fr)_minmax(260px,1.18fr)_minmax(190px,0.82fr)] lg:grid-rows-[170px_170px_170px] lg:items-stretch xl:grid-cols-[minmax(214px,0.9fr)_minmax(290px,1.2fr)_minmax(290px,1.2fr)_minmax(214px,0.9fr)] xl:grid-rows-[180px_180px_180px] xl:gap-6">
					<motion.div
						className="relative order-first overflow-hidden rounded-[30px] border border-white/18 bg-white/10 shadow-[0_34px_90px_rgba(0,12,36,0.42)] backdrop-blur md:col-span-2 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3"
						variants={fadeUp}
						whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
						transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
					>
						<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_38%,rgba(0,19,52,0.62))]" />
						<img
							className="h-full min-h-[300px] w-full object-cover object-center saturate-[1.06] lg:min-h-0"
							src={imageSrc}
							alt="Equipo de Integridad Democr\u00e1tica"
							loading="lazy"
						/>
						<div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-[clamp(20px,3vw,34px)] text-white">
							<div>
								<p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f0c66b]">
									Integridad Democr\u00e1tica
								</p>
								<p className="mt-2 max-w-md text-[clamp(22px,2.8vw,38px)] font-black leading-none">
									Una agenda humana, firme y descentralizada.
								</p>
							</div>
						</div>
					</motion.div>

					{principles.map((item, index) => (
						<motion.article
							className={`group relative min-h-[150px] overflow-hidden rounded-[26px] border border-primary/12 bg-primary p-5 shadow-[0_22px_54px_rgba(0,73,164,0.18)] lg:min-h-0 ${item.position}`}
							variants={cardVariants}
							whileHover={
								shouldReduceMotion
									? undefined
									: {
											y: -8,
											backgroundColor: '#286EAA',
											transition: { duration: 0.28 },
										}
							}
							key={item.title}
						>
							<div className="relative flex h-full flex-col justify-between gap-6">
								<div className="flex items-center justify-between gap-3">
									<span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-sm font-black text-primary shadow-[0_12px_26px_rgba(0,24,74,0.25)]">
										{String(index + 1).padStart(2, '0')}
									</span>
									<span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
										{item.kicker}
									</span>
								</div>
								<h3 className="max-w-[15rem] text-[clamp(17px,1.45vw,22px)] font-black leading-[1.08] text-white">
									{item.title}
								</h3>
							</div>
						</motion.article>
					))}
				</div>
			</motion.div>
		</section>
	);
}
