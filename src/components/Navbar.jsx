import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
	FaWhatsapp,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6';
import { BO, CN, GB, PE } from 'country-flag-icons/react/3x2';
import logo from '../img/integridadlogoh.webp';

const navItems = [
	{ label: 'NOSOTROS', href: '/' },
	{ label: 'LIDERAZGO', href: '/' },
	{ label: '\u00D3RGANOS AUT\u00D3NOMOS', href: '/' },
	{ label: 'DOCUMENTOS', href: '/documentos' },
	{ label: 'NOTICIAS', href: '/' },
];

const joinItems = [
	{ label: 'Af\u00EDliate', href: '/' },
	{ label: 'Voluntariado', href: '/' },
	{ label: 'Eventos', href: '/' },
	{ label: 'Donaciones', href: '/' },
];

const socialLinks = [
	{ label: 'Facebook', Icon: FaFacebookF },
	{ label: 'YouTube', Icon: FaYoutube },
	{ label: 'TikTok', Icon: FaTiktok },
	{ label: 'X', Icon: FaXTwitter },
	{ label: 'WhatsApp', Icon: FaWhatsapp },
	{ label: 'Instagram', Icon: FaInstagram },
	{ label: 'LinkedIn', Icon: FaLinkedinIn },
];

const languageItems = [
	{ label: 'Espa\u00f1ol', short: 'ES', Flag: PE },
	{ label: 'Quechua', short: 'QU', Flag: PE },
	{ label: 'Aymara', short: 'AY', Flag: BO },
	{ label: 'Chino', short: 'ZH', Flag: CN },
	{ label: 'Ingl\u00e9s', short: 'EN', Flag: GB },
];

function ContactIcon({ name, className = 'size-[18px]' }) {
	const icons = {
		phone: (
			<path d="M6.6 2.8 9 2.2c.7-.2 1.4.2 1.7.8l1.1 2.6c.2.6.1 1.2-.4 1.6L10 8.4a13.4 13.4 0 0 0 5.6 5.6l1.2-1.4c.4-.5 1-.6 1.6-.4l2.6 1.1c.6.3 1 .9.8 1.7l-.6 2.4c-.2.7-.8 1.2-1.5 1.2A16.3 16.3 0 0 1 3.4 2.3c0-.7.5-1.3 1.2-1.5Z" />
		),
		map: (
			<path d="M12 2.2a6.6 6.6 0 0 0-6.6 6.6c0 4.8 6.6 12.9 6.6 12.9s6.6-8.1 6.6-12.9A6.6 6.6 0 0 0 12 2.2Zm0 9a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Z" />
		),
	};

	return (
		<svg aria-hidden="true" className={`shrink-0 fill-current ${className}`} viewBox="0 0 24 24">
			{icons[name]}
		</svg>
	);
}

function LanguagePicker() {
	const ActiveFlag = languageItems[0].Flag;

	return (
		<div className="group relative shrink-0">
			<button
				className="flex min-h-9 items-center gap-2 rounded-full border border-primary/12 bg-primary/7 px-2.5 pr-3 text-primary shadow-[0_6px_16px_rgba(0,73,164,0.08)] transition hover:-translate-y-0.5 hover:bg-primary hover:text-surface hover:shadow-[0_12px_24px_rgba(0,73,164,0.18)]"
				type="button"
				aria-label="Selector visual de idiomas"
			>
				<span className="grid size-6 place-items-center overflow-hidden rounded-full bg-white shadow-[0_3px_8px_rgba(0,24,74,0.14)]">
					<ActiveFlag title="Per\u00fa" className="h-full w-full object-cover" />
				</span>
				<span className="text-xs font-black leading-none">ES</span>
				<svg aria-hidden="true" className="size-3 fill-current transition group-hover:rotate-180" viewBox="0 0 16 16">
					<path d="M4.2 6.2 8 10l3.8-3.8 1.2 1.2-5 5-5-5 1.2-1.2Z" />
				</svg>
			</button>

			<div className="absolute top-full right-0 h-3 w-full" />
			<div className="invisible absolute top-[calc(100%+10px)] right-0 z-[80] w-[190px] translate-y-2 rounded-[20px] border border-primary/10 bg-white p-2 opacity-0 shadow-[0_24px_50px_rgba(0,43,99,0.2)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
				<div className="absolute -top-2 right-7 size-4 rotate-45 border-t border-l border-primary/10 bg-white" />
				{languageItems.map(({ Flag, label, short }) => (
					<div
						className="relative z-10 flex min-h-10 items-center gap-3 rounded-[14px] px-2.5 text-primary transition hover:bg-primary hover:text-white"
						key={label}
					>
						<span className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-[0_5px_12px_rgba(0,24,74,0.12)]">
							<Flag title={label} className="h-full w-full object-cover" />
						</span>
						<span className="flex-1 text-sm font-black">{label}</span>
						<span className="rounded-full bg-primary/8 px-2 py-1 text-[10px] font-black tracking-[0.08em] group-hover:bg-white/15">
							{short}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Navbar() {
	const navBarClass = "site-navbar sticky top-0 right-0 left-0 z-[9999] grid w-full grid-cols-[minmax(176px,230px)_1fr_auto] items-center gap-[clamp(14px,1.8vw,26px)] px-[clamp(14px,3vw,34px)] py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:content-[''] max-[1360px]:grid-cols-[minmax(170px,220px)_1fr] max-lg:grid-cols-1 max-lg:justify-items-center";
	const brandShellClass = "site-navbar__brand relative flex min-w-0 items-center justify-center justify-self-center py-[7px] px-3 before:absolute before:-inset-y-1 before:inset-x-0 before:-z-10 before:rounded-full before:border max-lg:px-0 max-lg:before:-inset-x-3.5 max-lg:before:-inset-y-[5px]";
	const navShellClass = "site-navbar__menu flex min-w-0 items-center justify-center gap-1 rounded-full border p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] max-lg:w-full max-lg:justify-start max-lg:overflow-x-auto max-lg:[scrollbar-width:none] max-lg:[&::-webkit-scrollbar]:hidden max-sm:rounded-[18px]";
	const navLinkClass = "site-navbar__link inline-flex min-h-9 items-center justify-center rounded-full px-[clamp(10px,1vw,18px)] text-[clamp(11px,0.78vw,13px)] font-extrabold leading-none whitespace-nowrap transition hover:-translate-y-px";
	const joinButtonClass = "site-navbar__join inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full px-[clamp(12px,1vw,18px)] text-[clamp(11px,0.78vw,13px)] font-black leading-none whitespace-nowrap shadow-[0_8px_18px_rgba(0,24,74,0.18)] transition hover:-translate-y-px";
	const schoolButtonClass = "site-navbar__school inline-flex min-h-10 items-center justify-center rounded-full border px-4 text-xs font-black tracking-[0.02em] whitespace-nowrap transition hover:-translate-y-px max-sm:w-full";

	return (
		<>
			<header className="relative z-[10000] w-full bg-surface text-primary">
				<div className="w-full border-b border-primary/10 bg-surface text-primary">
					<div className="mx-auto flex min-h-[34px] w-full max-w-[1780px] items-center justify-between gap-6 px-[clamp(14px,3vw,34px)] py-[5px] max-lg:flex-col max-lg:items-start max-lg:gap-2 max-sm:px-3 max-sm:py-2">
						<div className="flex min-w-0 items-center gap-[clamp(16px,3vw,42px)] max-lg:flex-col max-lg:items-start max-lg:gap-[7px]">
							<a
								className="flex items-center gap-2 text-[clamp(12px,0.92vw,15px)] font-extrabold leading-tight whitespace-nowrap max-lg:whitespace-normal"
								href="tel:+510909090"
							>
								<ContactIcon name="phone" />
								<span>{'Tel\u00E9fono: (01) 999 9999'}</span>
							</a>

							<a
								className="flex items-center gap-2 text-[clamp(12px,0.92vw,15px)] font-extrabold leading-tight whitespace-nowrap max-lg:whitespace-normal"
								href="/"
							>
								<ContactIcon name="map" />
								<span>{'Direcci\u00F3n: Calle Las Tiendas 269, interior K, Surquillo'}</span>
							</a>
						</div>

						<div className="flex shrink-0 items-center gap-2.5 max-lg:self-end max-sm:self-center max-sm:flex-wrap max-sm:justify-center">
							<LanguagePicker />
							{socialLinks.map(({ Icon: SocialIcon, label }) => (
								<a
									className="flex size-9 items-center justify-center rounded-full border border-primary/10 bg-primary/5 text-primary shadow-[0_6px_16px_rgba(0,73,164,0.08)] transition hover:-translate-y-0.5 hover:bg-primary hover:text-surface hover:shadow-[0_10px_20px_rgba(0,73,164,0.22)]"
									href="/"
									aria-label={label}
									key={label}
								>
									<SocialIcon aria-hidden="true" className="size-[18px]" />
								</a>
							))}
						</div>
					</div>
				</div>
			</header>

			<nav className={navBarClass} aria-label="Principal">
				<a className={brandShellClass} href="/" aria-label="Integridad Democr\u00E1tica">
					<img
						className="block h-auto max-h-[52px] w-[clamp(168px,13vw,220px)] object-contain drop-shadow-[0_3px_8px_rgba(0,20,56,0.28)] max-sm:w-[min(220px,78vw)]"
						src={logo.src}
						alt="Integridad Democr\u00E1tica"
					/>
				</a>

				<div className={navShellClass}>
					{navItems.map((item) => (
						<a className={navLinkClass} href={item.href} key={item.label}>
							{item.label}
						</a>
					))}

					<div className="group relative">
						<a className={joinButtonClass} href="/">
							{'\u00DANETE A NOSOTROS'}
							<svg
								aria-hidden="true"
								className="size-3 fill-current transition group-hover:rotate-180"
								viewBox="0 0 16 16"
							>
								<path d="M4.2 6.2 8 10l3.8-3.8 1.2 1.2-5 5-5-5 1.2-1.2Z" />
							</svg>
						</a>

						<div className="absolute top-full right-0 left-0 h-4" />
						<div className="invisible absolute top-[calc(100%+12px)] left-1/2 z-50 w-[184px] -translate-x-1/2 translate-y-2 rounded-[18px] border border-primary/10 bg-surface p-2 opacity-0 shadow-[0_22px_42px_rgba(0,43,99,0.24)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
							<div className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rotate-45 border-t border-l border-primary/10 bg-surface" />
							{joinItems.map((item) => (
								<a
									className="relative z-10 flex min-h-10 items-center rounded-xl px-3 text-[15px] font-semibold text-primary transition hover:bg-primary hover:text-surface"
									href={item.href}
									key={item.label}
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="flex items-center justify-end max-[1360px]:col-span-2 max-[1360px]:justify-center max-lg:col-span-1 max-sm:w-full">
					<a className={schoolButtonClass} href="/">
						ESCUELA DE LIDERAZGO
					</a>
				</div>
			</nav>
		</>
	);
}
