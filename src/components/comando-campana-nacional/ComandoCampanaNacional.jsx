import React from 'react';
import { motion } from 'framer-motion';
import fondo from '../../img/fondo.png';
import gardoImg from '../../img/comando-campana-nacional/gardo-antonio.png';
import { useLanguage } from '../../i18n/useLanguage.js';

const members = [
	{
		name: 'Gardo Antonio',
		lastName: 'Gómez Jiménez',
		roleKey: 'role.campaignChief',
		image: gardoImg,
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1,
		},
	},
};

const imageVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.7,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

function MemberImage({ member, t }) {
	const imgSrc = typeof member.image === 'string' ? member.image : member.image.src;

	return (
		<motion.div
			className="group relative flex flex-col items-center"
			variants={imageVariants}
			whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
		>
			<div className="relative h-72 w-72">
				<img
					src={imgSrc}
					alt={member.name}
					className="h-full w-full object-contain object-bottom [filter:drop-shadow(0_0_2px_rgba(0,0,0,0.95))_drop-shadow(10px_18px_18px_rgba(0,0,0,0.45))]"
				/>
			</div>

			<div className="mt-6 flex flex-col items-center text-center">
				<h3 className="text-[1.35rem] font-extrabold text-primary-dark leading-tight">
					{member.name}
				</h3>
				<p className="mt-1.5 text-[0.95rem] font-bold tracking-[0.04em] text-accent uppercase">
					{member.lastName}
				</p>
				<div className="mt-2.5 h-px w-10 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
				<p className="mt-2.5 text-[0.9rem] font-semibold leading-snug text-muted">
					{t(member.roleKey)}
				</p>
			</div>
		</motion.div>
	);
}

export default function ComandoCampanaNacional() {
	const { t } = useLanguage();
	const backgroundSrc = typeof fondo === 'string' ? fondo : fondo.src;

	return (
		<section className="relative overflow-hidden bg-surface text-primary">
			<img
				className="absolute inset-0 h-full w-full object-cover object-center"
				src={backgroundSrc}
				alt=""
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,255,255,0.97)_0%,rgba(247,255,255,0.95)_38%,rgba(234,244,255,0.96)_100%)]" />

			<div className="relative mx-auto w-full max-w-[600px] px-[clamp(18px,4vw,64px)] py-[clamp(40px,6vw,80px)]">
				<motion.div
					className="flex justify-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					<MemberImage member={members[0]} t={t} />
				</motion.div>
			</div>
		</section>
	);
}
