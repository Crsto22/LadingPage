import { motion, useReducedMotion } from 'framer-motion';
import fondo from '../../img/fondo1.png';
import principlesImage from '../../img/principiosimg.webp';
import { useLanguage } from '../../i18n/useLanguage.js';

const principles = [
	{
		titleKey: 'home.principle.1.title',
		kickerKey: 'home.principle.1.kicker',
		position: 'lg:col-start-1 lg:row-start-1',
	},
	{
		titleKey: 'home.principle.2.title',
		kickerKey: 'home.principle.2.kicker',
		position: 'lg:col-start-4 lg:row-start-1',
	},
	{
		titleKey: 'home.principle.3.title',
		kickerKey: 'home.principle.3.kicker',
		position: 'lg:col-start-1 lg:row-start-2',
	},
	{
		titleKey: 'home.principle.4.title',
		kickerKey: 'home.principle.4.kicker',
		position: 'lg:col-start-4 lg:row-start-2',
	},
	{
		titleKey: 'home.principle.5.title',
		kickerKey: 'home.principle.5.kicker',
		position: 'lg:col-start-1 lg:row-start-3',
	},
	{
		titleKey: 'home.principle.6.title',
		kickerKey: 'home.principle.6.kicker',
		position: 'lg:col-start-2 lg:row-start-3',
	},
	{
		titleKey: 'home.principle.7.title',
		kickerKey: 'home.principle.7.kicker',
		position: 'lg:col-start-3 lg:row-start-3',
	},
	{
		titleKey: 'home.principle.8.title',
		kickerKey: 'home.principle.8.kicker',
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
	const { t } = useLanguage();
	const shouldReduceMotion = useReducedMotion();
	const backgroundSrc = typeof fondo === 'string' ? fondo : fondo.src;
	const imageSrc = typeof principlesImage === 'string' ? principlesImage : principlesImage.src;

	return (
		<section className="relative isolate overflow-hidden bg-white py-[clamp(52px,9vw,130px)] text-body">
			<img
				className="absolute inset-0 h-full w-full object-cover object-center"
				src={backgroundSrc}
				alt=""
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)]" />

			<motion.div
				className="relative mx-auto w-full max-w-[1540px] px-[clamp(16px,5vw,84px)]"
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.18 }}
			>
				<motion.div className="mx-auto max-w-4xl text-center" variants={fadeUp}>
					<h2 className="mt-4 text-[clamp(32px,11vw,86px)] font-black leading-[0.98] text-primary-dark [text-shadow:0_8px_24px_rgba(247,255,255,0.35)]">
						{t('home.principles.headingA')}
						<span className="block text-primary">{t('home.principles.headingB')}</span>
					</h2>
				</motion.div>

				<div className="mt-[clamp(28px,5vw,72px)] grid gap-4 md:grid-cols-2 lg:grid-cols-[minmax(190px,0.82fr)_minmax(260px,1.18fr)_minmax(260px,1.18fr)_minmax(190px,0.82fr)] lg:grid-rows-[170px_170px_170px] lg:items-stretch xl:grid-cols-[minmax(214px,0.9fr)_minmax(290px,1.2fr)_minmax(290px,1.2fr)_minmax(214px,0.9fr)] xl:grid-rows-[180px_180px_180px] xl:gap-6">
					<motion.div
						className="group relative order-first overflow-hidden rounded-[30px] border border-white/18 bg-white/10 shadow-[0_34px_90px_rgba(0,12,36,0.42)] backdrop-blur max-sm:rounded-2xl md:col-span-2 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3"
						variants={fadeUp}
						whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
						transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
					>
						<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_38%,rgba(0,19,52,0.62))]" />
						<img
							className="h-full min-h-[240px] w-full object-cover object-center saturate-[1.06] sm:min-h-[300px] lg:min-h-0"
							src={imageSrc}
							alt={t('home.principles.imageAlt')}
							loading="lazy"
						/>
						<div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-[clamp(16px,3vw,34px)] text-white">
							<div>
								<p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f0c66b] sm:text-[11px] sm:tracking-[0.22em]">
									{t('home.principles.brand')}
								</p>
								<p className="mt-2 max-w-md text-[clamp(18px,7vw,38px)] font-black leading-[1.02]">
									{t('home.principles.copy')}
								</p>
							</div>
						</div>
					</motion.div>

					{principles.map((item, index) => (
						<motion.article
							className={`group relative min-h-[118px] overflow-hidden rounded-[18px] border border-primary/12 bg-primary p-4 shadow-[0_22px_54px_rgba(0,73,164,0.18)] sm:min-h-[150px] sm:rounded-[26px] sm:p-5 lg:min-h-0 ${item.position}`}
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
							key={item.titleKey}
						>
								<div className="relative flex h-full flex-col justify-between gap-4 sm:gap-6">
								<div className="flex items-center justify-between gap-3">
									<span className="inline-flex size-8 items-center justify-center rounded-full bg-white text-xs font-black text-primary shadow-[0_12px_26px_rgba(0,24,74,0.25)] sm:size-10 sm:text-sm">
										{String(index + 1).padStart(2, '0')}
									</span>
									<span className="text-[9px] font-black uppercase tracking-[0.14em] text-white/70 sm:text-[10px] sm:tracking-[0.2em]">
										{t(item.kickerKey)}
									</span>
								</div>
								<h3 className="max-w-[15rem] text-[clamp(15px,4.8vw,22px)] font-black leading-[1.12] text-white">
									{t(item.titleKey)}
								</h3>
							</div>
						</motion.article>
					))}
				</div>
			</motion.div>
		</section>
	);
}
