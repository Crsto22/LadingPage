import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../i18n/useLanguage.js';

const faqItems = [
	{
		questionKey: 'home.faq.q1',
		answerKey: 'home.faq.a1',
	},
	{
		questionKey: 'home.faq.q2',
		answerKey: 'home.faq.a2',
	},
	{
		questionKey: 'home.faq.q3',
		answerKey: 'home.faq.a3',
	},
	{
		questionKey: 'home.faq.q4',
		answerKey: 'home.faq.a4',
	},
	{
		questionKey: 'home.faq.q5',
		answerKey: 'home.faq.a5',
	},
];

/* ── motion config ── */
const sectionVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.09, delayChildren: 0.12 },
	},
};

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
	},
};

const cardStagger = {
	hidden: { opacity: 0, y: 22 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.58,
			ease: [0.22, 1, 0.36, 1],
			delay: i * 0.08,
		},
	}),
};

/* ── Accordion item ── */
function AccordionItem({ item, index, isOpen, onToggle, shouldReduceMotion, t }) {
	return (
		<motion.div
			custom={index}
			variants={cardStagger}
			className="group"
		>
			<div
				className={`
					relative overflow-hidden rounded-2xl border bg-white
					transition-all duration-300 ease-out
					${isOpen
						? 'border-primary/25 shadow-[0_8px_30px_rgba(0,73,164,0.10)]'
						: 'border-[#e2e8f0] hover:border-primary/20 hover:shadow-[0_4px_20px_rgba(0,73,164,0.07)]'
					}
				`}
			>
				{/* Subtle top accent line when open */}
				<div
					className={`
						absolute inset-x-0 top-0 h-[2.5px] bg-primary
						transition-opacity duration-300
						${isOpen ? 'opacity-100' : 'opacity-0'}
					`}
				/>

				<button
					id={`faq-trigger-${index}`}
					aria-expanded={isOpen}
					aria-controls={`faq-panel-${index}`}
					className="flex w-full cursor-pointer items-center gap-3 px-4 py-4 text-left sm:gap-4 sm:px-7 sm:py-[22px]"
					onClick={onToggle}
					type="button"
				>
					{/* Number badge — muted blue tones to not compete with heading */}
					<span
						className={`
							flex size-8 shrink-0 items-center justify-center rounded-full sm:size-9
							text-[12px] font-black tracking-wide transition-colors duration-300
							${isOpen
								? 'bg-accent text-white shadow-[0_4px_12px_rgba(40,110,170,0.28)]'
								: 'bg-[#edf2f7] text-accent/70 group-hover:bg-accent/10 group-hover:text-accent'
							}
						`}
					>
						{String(index + 1).padStart(2, '0')}
					</span>

					{/* Question text — dark for readability */}
					<span
						className={`
							flex-1 text-[14px] font-bold leading-snug tracking-normal transition-colors duration-300
							sm:text-[16px]
							${isOpen ? 'text-primary-dark' : 'text-body group-hover:text-primary-dark'}
						`}
					>
						{t(item.questionKey)}
					</span>

					{/* Plus/minus icon — muted accent color */}
					<span
						className={`
							relative flex size-8 shrink-0 items-center justify-center rounded-lg max-sm:size-7
							transition-all duration-300
							${isOpen
								? 'bg-accent text-white shadow-[0_3px_10px_rgba(40,110,170,0.25)]'
								: 'bg-[#edf2f7] text-accent/60 group-hover:bg-accent/10 group-hover:text-accent'
							}
						`}
					>
						{/* Horizontal bar (always visible) */}
						<span className="absolute h-[2px] w-3 rounded-full bg-current transition-transform duration-300" />
						{/* Vertical bar (scales away when open) */}
						<span
							className={`
								absolute h-[2px] w-3 rounded-full bg-current
								transition-transform duration-300
								${isOpen ? 'rotate-0 scale-0' : 'rotate-90 scale-100'}
							`}
						/>
					</span>
				</button>

				<AnimatePresence initial={false}>
					{isOpen && (
						<motion.div
							id={`faq-panel-${index}`}
							role="region"
							aria-labelledby={`faq-trigger-${index}`}
							initial={shouldReduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{
								height: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
								opacity: { duration: 0.26, delay: 0.08 },
							}}
							className="overflow-hidden"
						>
							<div className="px-4 pb-5 sm:px-7 sm:pb-7">
								<div className="border-t border-[#e2e8f0] pt-4 sm:ml-[52px]">
									<p className="text-[13px] font-medium leading-[1.65] tracking-normal text-muted sm:text-[15px] sm:tracking-[0.005em]">
										{t(item.answerKey)}
									</p>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}

/* ── Main FAQ Section ── */
export default function FAQSection() {
	const { t } = useLanguage();
	const [openIndex, setOpenIndex] = useState(0);
	const shouldReduceMotion = useReducedMotion();

	const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	return (
		<section
			id="faq"
			className="relative bg-white py-[clamp(52px,9vw,130px)]"
			aria-labelledby="faq-heading"
		>
			<motion.div
				className="relative mx-auto w-full max-w-[1540px] px-[clamp(16px,5vw,84px)]"
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.12 }}
			>
				{/* Section kicker */}
				<motion.div className="mb-3 flex items-center gap-3" variants={fadeUp}>
					<span className="h-px w-8 bg-primary/30" />
					<span className="text-[10px] font-black uppercase tracking-[0.16em] text-accent sm:text-[11px] sm:tracking-[0.22em]">
						{t('home.faq.kicker')}
					</span>
				</motion.div>

				{/* Two-column layout */}
				<div className="grid items-start gap-[clamp(28px,6vw,80px)] lg:grid-cols-[minmax(320px,0.85fr)_minmax(400px,1.15fr)]">
					{/* ── Left Column: Support & Action ── */}
					<motion.div className="flex flex-col gap-6" variants={fadeUp}>
						<h2
							id="faq-heading"
							className="text-[clamp(28px,9vw,50px)] font-black leading-[1.08] tracking-normal text-primary-dark sm:tracking-[-0.02em]"
						>
							{t('home.faq.titleA')}
							<br />
							<span className="text-primary">{t('home.faq.titleB')}</span>
						</h2>

						<p className="max-w-lg text-[14px] font-medium leading-[1.65] tracking-normal text-muted sm:text-[16px] sm:leading-[1.7] sm:tracking-[0.005em]">
							{t('home.faq.copy')}
						</p>

						{/* CTA Button */}
						<div className="flex flex-wrap items-center gap-4">
							<a
								href="/"
								className="group/btn relative inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-primary px-6 text-[12px] font-black uppercase tracking-[0.04em] text-white shadow-[0_10px_28px_rgba(0,73,164,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,73,164,0.34)] sm:min-h-[50px] sm:w-auto sm:px-8 sm:text-[13px]"
							>
								{/* Hover shine effect */}
								<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/14 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
								<span className="relative">{t('home.faq.cta')}</span>
								{/* Heroicons arrow-right (outline, 20px) */}
								<svg
									aria-hidden="true"
									className="relative size-[18px] transition-transform duration-300 group-hover/btn:translate-x-0.5"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2.2}
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
								</svg>
							</a>
						</div>

						{/* Trust indicators — no header, just two clean guarantee badges */}
						<div className="mt-1 flex flex-wrap items-center gap-5 border-t border-[#e2e8f0] pt-6">
							{/* Shield guarantee */}
							<div className="flex items-center gap-3">
								<span className="flex size-10 items-center justify-center rounded-xl bg-primary/[0.06]">
									<svg aria-hidden="true" className="size-[20px] text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
									</svg>
								</span>
								<p className="text-[13px] font-bold leading-tight text-body">
									{t('home.faq.trustA1')}
									<br />
									<span className="font-extrabold text-primary-dark">{t('home.faq.trustA2')}</span>
								</p>
							</div>

							{/* Clock guarantee */}
							<div className="flex items-center gap-3">
								<span className="flex size-10 items-center justify-center rounded-xl bg-primary/[0.06]">
									<svg aria-hidden="true" className="size-[20px] text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</span>
								<p className="text-[13px] font-bold leading-tight text-body">
									{t('home.faq.trustB1')}
									<br />
									<span className="font-extrabold text-primary-dark">{t('home.faq.trustB2')}</span>
								</p>
							</div>
						</div>
					</motion.div>

					{/* ── Right Column: Accordion ── */}
					<motion.div
						className="flex flex-col gap-3"
						variants={sectionVariants}
					>
						{faqItems.map((item, index) => (
							<AccordionItem
								key={index}
								item={item}
								index={index}
								isOpen={openIndex === index}
								onToggle={() => handleToggle(index)}
								shouldReduceMotion={shouldReduceMotion}
								t={t}
							/>
						))}
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
