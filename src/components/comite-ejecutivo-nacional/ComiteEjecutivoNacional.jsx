import React from 'react';
import { motion } from 'framer-motion';
import wolfImg from '../../img/comite-ejecutivo-nacional/wolf.png';
import berthaImg from '../../img/comite-ejecutivo-nacional/bertha-cecilia.png';
import rosaImg from '../../img/comite-ejecutivo-nacional/rosa-cecilia.png';
import diegoImg from '../../img/comite-ejecutivo-nacional/diego-jesus.png';
import janetImg from '../../img/comite-ejecutivo-nacional/janet-rosario.png';
import anaImg from '../../img/comite-ejecutivo-nacional/ana-franzua.png';
import fernandoImg from '../../img/comite-ejecutivo-nacional/fernando-daniel.png';
import jenrryImg from '../../img/comite-ejecutivo-nacional/Jenrry.png';
import cleverImg from '../../img/comite-ejecutivo-nacional/clever-rosado.png';
import marioImg from '../../img/comite-ejecutivo-nacional/mario-letellier.png';
import fondo from '../../img/fondo5.png';
import { useLanguage } from '../../i18n/useLanguage.js';

const members = [
	{
		name: 'Wolfgang Mario',
		lastName: 'Grozo Costa',
		roleKey: 'role.founderPresident',
		image: wolfImg,
	},
	{
		name: 'Bertha Cecilia',
		lastName: 'Azabache Miranda',
		roleKey: 'role.generalSecretary',
		image: berthaImg,
	},
	{
		name: 'Rosa Cecilia',
		lastName: 'Rugel Parrales',
		roleKey: 'role.womenFamily',
		image: rosaImg,
	},
	{
		name: 'Diego Jesús',
		lastName: 'Pajares Andonayre',
		roleKey: 'role.pymes',
		image: diegoImg,
	},
	{
		name: 'Janet Rosario',
		lastName: 'Márquez Letona',
		roleKey: 'role.socialOrganizations',
		image: janetImg,
	},
	{
		name: 'Ana Franzua',
		lastName: 'Rugel Oyola',
		roleKey: 'role.planning',
		image: anaImg,
	},
	{
		name: 'Fernando Daniel',
		lastName: 'Fasanando Rodríguez',
		roleKey: 'role.organization',
		image: fernandoImg,
	},
	{
		name: 'Jenry',
		lastName: 'Salazar Garces',
		roleKey: 'role.training',
		image: jenrryImg,
	},
	{
		name: 'Clever',
		lastName: 'Rosado Cadillo',
		roleKey: 'role.finance',
		image: cleverImg,
	},
	{
		name: 'Mario',
		lastName: 'Letellier Castro',
		roleKey: 'role.policyPlan',
		image: marioImg,
	},
];

const president = members[0];
const rest = members.slice(1);

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.15,
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

function MemberImage({ member, size = 'normal', t }) {
	const imgSrc = typeof member.image === 'string' ? member.image : member.image.src;
	const isLarge = size === 'large';
	const imgSize = isLarge ? 'h-80 w-80' : 'h-72 w-72';
	const nameSize = isLarge ? 'text-[1.5rem]' : 'text-[1.35rem]';
	const lastNameSize = isLarge ? 'text-[1.05rem]' : 'text-[0.95rem]';
	const roleSize = isLarge ? 'text-[0.95rem]' : 'text-[0.9rem]';
	const lineW = isLarge ? 'w-12' : 'w-10';
	const mtImg = isLarge ? 'mt-7' : 'mt-6';
	const mtText = isLarge ? 'mt-8' : 'mt-6';

	return (
		<motion.div
			className="group relative flex flex-col items-center"
			variants={imageVariants}
			whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
		>
			<div className={`relative ${imgSize}`}>
				<img
					src={imgSrc}
					alt={member.name}
					className="h-full w-full object-contain object-bottom [filter:drop-shadow(0_0_2px_rgba(0,0,0,0.95))_drop-shadow(10px_18px_18px_rgba(0,0,0,0.45))]"
				/>
			</div>

			<div className={`${mtText} flex flex-col items-center text-center`}>
				<h3 className={`${nameSize} font-extrabold text-primary-dark leading-tight`}>
					{member.name}
				</h3>
				<p className={`mt-1.5 ${lastNameSize} font-bold tracking-[0.04em] text-accent uppercase`}>
					{member.lastName}
				</p>
				<div className={`mt-2.5 h-px ${lineW} bg-gradient-to-r from-transparent via-primary/40 to-transparent`} />
				<p className={`mt-2.5 ${roleSize} font-semibold leading-snug text-muted`}>
					{t(member.roleKey)}
				</p>
			</div>
		</motion.div>
	);
}

export default function ComiteEjecutivoNacional() {
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
			<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,255,255,0.65)_0%,rgba(247,255,255,0.45)_38%,rgba(234,244,255,0.55)_100%)]" />

			<div className="relative mx-auto w-full max-w-[1420px] px-[clamp(18px,4vw,64px)] py-[clamp(40px,6vw,80px)]">
				<motion.div
					className="mb-16 flex justify-center max-w-[520px] mx-auto"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					<MemberImage member={president} size="large" t={t} />
				</motion.div>

				<motion.div
					className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{rest.map((member) => (
						<MemberImage key={member.lastName} member={member} t={t} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
