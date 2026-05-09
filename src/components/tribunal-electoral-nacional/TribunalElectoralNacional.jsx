import React from 'react';
import { motion } from 'framer-motion';
import fondo from '../../img/fondo.png';

const members = [
	{
		name: 'Harold Robinson',
		lastName: 'Matos Maldonado',
		role: 'Presidente',
		image: null,
	},
	{
		name: 'Alfredo Alexander',
		lastName: 'Ferrer Ruiz',
		role: 'Primer Miembro',
		image: null,
	},
	{
		name: 'Sami Raúl',
		lastName: 'Fatule Simón',
		role: 'Segundo Miembro',
		image: null,
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

const cardVariants = {
	hidden: { opacity: 0, y: 50, scale: 0.92 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

function MemberCard({ member }) {
	return (
		<motion.div
			className="group relative flex flex-col items-center"
			variants={cardVariants}
			whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
		>
			<div className="relative h-72 w-72">
				<div className="flex h-full w-full items-center justify-center rounded-full bg-primary/10">
					<svg className="h-32 w-32 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
					</svg>
				</div>
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
					{member.role}
				</p>
			</div>
		</motion.div>
	);
}

export default function TribunalElectoralNacional() {
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

			<div className="relative mx-auto w-full max-w-[1100px] px-[clamp(18px,4vw,64px)] py-[clamp(40px,6vw,80px)]">
				<motion.div
					className="grid gap-8 md:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.15 }}
				>
					{members.map((member) => (
						<MemberCard key={member.lastName} member={member} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
