import {
	FaBars,
	FaFacebookF,
	FaGraduationCap,
	FaInstagram,
	FaLinkedinIn,
	FaStore,
	FaTiktok,
	FaWhatsapp,
	FaXmark,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6';
import { BO, CN, GB, PE } from 'country-flag-icons/react/3x2';
import logo from '../img/integridadlogoh.webp';
import { languageOptions } from '../i18n/translations.js';
import { useLanguage } from '../i18n/useLanguage.js';

const leadershipItems = [
	{ labelKey: 'nav.leadership.executive', href: '/comite-ejecutivo-nacional' },
	{ labelKey: 'nav.leadership.electoral', href: '/tribunal-electoral-nacional' },
	{ labelKey: 'nav.leadership.ethics', href: '/tribunal-electoral-etica-disciplina' },
	{ labelKey: 'nav.leadership.control', href: '/organo-nacional-control-interno' },
	{ labelKey: 'nav.leadership.campaign', href: '/comando-campana-nacional' },
];

const navItems = [
	{ labelKey: 'nav.about', href: '/nosotros' },
	{ labelKey: 'nav.leadership', href: '/comite-ejecutivo-nacional', hasDropdown: true },
	{ labelKey: 'nav.documents', href: '/documentos' },
	{ labelKey: 'nav.news', href: '/noticias' },
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

const flagByLanguage = {
	es: PE,
	qu: PE,
	ay: BO,
	zh: CN,
	en: GB,
};

const languageItems = languageOptions.map((item) => ({
	...item,
	Flag: flagByLanguage[item.code],
}));

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
	const { language, setLanguage, t } = useLanguage();
	const activeItem = languageItems.find((item) => item.code === language) ?? languageItems[0];
	const ActiveFlag = activeItem.Flag;

	return (
		<div className="group relative shrink-0">
			<button
				className="flex min-h-9 items-center gap-2 rounded-full border border-primary/12 bg-primary/7 px-2.5 pr-3 text-primary shadow-[0_6px_16px_rgba(0,73,164,0.08)] transition hover:-translate-y-0.5 hover:bg-primary hover:text-surface hover:shadow-[0_12px_24px_rgba(0,73,164,0.18)]"
				type="button"
				aria-label={t('language.visualSelector')}
			>
				<span className="grid size-6 place-items-center overflow-hidden rounded-full bg-white shadow-[0_3px_8px_rgba(0,24,74,0.14)]">
					<ActiveFlag title={t(`language.${activeItem.code}`)} className="h-full w-full object-cover" />
				</span>
				<span className="text-xs font-black leading-none">{activeItem.short}</span>
				<svg aria-hidden="true" className="size-3 fill-current transition group-hover:rotate-180" viewBox="0 0 16 16">
					<path d="M4.2 6.2 8 10l3.8-3.8 1.2 1.2-5 5-5-5 1.2-1.2Z" />
				</svg>
			</button>

			<div className="absolute top-full right-0 h-3 w-full" />
			<div className="invisible absolute top-[calc(100%+10px)] right-0 z-[80] w-[190px] translate-y-2 rounded-[20px] border border-primary/10 bg-white p-2 opacity-0 shadow-[0_24px_50px_rgba(0,43,99,0.2)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
				<div className="absolute -top-2 right-7 size-4 rotate-45 border-t border-l border-primary/10 bg-white" />
				{languageItems.map(({ Flag, code, short }) => {
					const isActive = code === language;
					const label = t(`language.${code}`);

					return (
					<button
						className={`relative z-10 flex min-h-10 w-full items-center gap-3 rounded-[14px] px-2.5 text-left transition hover:bg-primary hover:text-white ${isActive ? 'bg-primary/10 text-primary' : 'text-primary'}`}
						key={code}
						type="button"
						onClick={() => setLanguage(code)}
						data-language-option={code}
						aria-current={isActive ? 'true' : undefined}
					>
						<span className="grid size-7 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-[0_5px_12px_rgba(0,24,74,0.12)]">
							<Flag title={label} className="h-full w-full object-cover" />
						</span>
						<span className="flex-1 text-sm font-black">{label}</span>
						<span className="rounded-full bg-primary/8 px-2 py-1 text-[10px] font-black tracking-[0.08em] group-hover:bg-white/15">
							{short}
						</span>
					</button>
					);
				})}
			</div>
		</div>
	);
}

function MobileDropdown({ label, items, highlight }) {
	return (
		<details className="group/mobile-dropdown">
			<summary
				className={`flex min-h-11 w-full cursor-pointer list-none items-center justify-between rounded-xl px-3 text-sm font-extrabold transition marker:hidden [&::-webkit-details-marker]:hidden ${highlight ? 'bg-primary text-surface hover:bg-primary/90' : 'text-primary hover:bg-primary/8'}`}
			>
				<span>{label}</span>
				<svg
					aria-hidden="true"
					className="size-3.5 shrink-0 fill-current transition group-open/mobile-dropdown:rotate-180"
					viewBox="0 0 16 16"
				>
					<path d="M4.2 6.2 8 10l3.8-3.8 1.2 1.2-5 5-5-5 1.2-1.2Z" />
				</svg>
			</summary>

			<div className="ml-3 flex flex-col overflow-hidden">
				{items.map((item) => (
					<a
						className="flex min-h-10 items-center rounded-xl px-3 text-[13px] font-semibold text-primary transition hover:bg-primary hover:text-surface"
						href={item.href}
						key={item.label}
					>
						{item.label}
					</a>
				))}
			</div>
		</details>
	);
}

function MobileLanguagePicker() {
	const { language, setLanguage, t } = useLanguage();
	const activeItem = languageItems.find((item) => item.code === language) ?? languageItems[0];
	const ActiveFlag = activeItem.Flag;

	return (
		<details className="group/mobile-language">
			<summary
				className="flex min-h-11 w-full cursor-pointer list-none items-center justify-between rounded-xl border border-primary/12 bg-primary/7 px-3 text-sm font-extrabold text-primary transition marker:hidden hover:bg-primary hover:text-surface [&::-webkit-details-marker]:hidden"
			>
				<span className="flex items-center gap-2">
					<span className="grid size-5 place-items-center overflow-hidden rounded-full bg-white shadow-[0_3px_8px_rgba(0,24,74,0.14)]">
						<ActiveFlag title={t(`language.${activeItem.code}`)} className="h-full w-full object-cover" />
					</span>
					{t(`language.${activeItem.code}`)}
				</span>
				<svg
					aria-hidden="true"
					className="size-3.5 shrink-0 fill-current transition group-open/mobile-language:rotate-180"
					viewBox="0 0 16 16"
				>
					<path d="M4.2 6.2 8 10l3.8-3.8 1.2 1.2-5 5-5-5 1.2-1.2Z" />
				</svg>
			</summary>

			<div className="mt-1 flex flex-col overflow-hidden">
				{languageItems.map(({ Flag, code, short }) => {
					const isActive = code === language;
					const label = t(`language.${code}`);

					return (
					<button
						className={`flex min-h-10 items-center gap-3 rounded-xl px-2.5 text-left text-[13px] font-semibold transition hover:bg-primary hover:text-surface ${isActive ? 'bg-primary/10 text-primary' : 'text-primary'}`}
						type="button"
						key={code}
						onClick={() => setLanguage(code)}
						data-language-option={code}
						aria-current={isActive ? 'true' : undefined}
					>
						<span className="grid size-6 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-[0_5px_12px_rgba(0,24,74,0.12)]">
							<Flag title={label} className="h-full w-full object-cover" />
						</span>
						<span className="flex-1">{label}</span>
						<span className="rounded-full bg-primary/8 px-2 py-0.5 text-[10px] font-black tracking-[0.08em]">{short}</span>
					</button>
					);
				})}
			</div>
		</details>
	);
}

export default function Navbar() {
	const { t } = useLanguage();
	const logoSrc = typeof logo === 'string' ? logo : logo.src;
	const localizedNavItems = navItems.map((item) => ({ ...item, label: t(item.labelKey) }));
	const localizedLeadershipItems = leadershipItems.map((item) => ({ ...item, label: t(item.labelKey) }));
	const navBarClass = "site-navbar sticky top-0 right-0 left-0 z-[9999] grid w-full grid-cols-[minmax(176px,230px)_1fr_auto] items-center gap-[clamp(14px,1.8vw,26px)] px-[clamp(14px,3vw,34px)] py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:content-[''] max-[1360px]:grid-cols-[minmax(170px,220px)_1fr] max-lg:grid-cols-[1fr_auto] max-lg:justify-items-start max-sm:px-4";
	const brandShellClass = "site-navbar__brand relative flex min-w-0 items-center justify-center justify-self-start py-[7px] px-3 before:absolute before:-inset-y-1 before:inset-x-0 before:-z-10 before:rounded-full before:border max-lg:px-0 max-lg:before:-inset-x-3.5 max-lg:before:-inset-y-[5px]";
	const navShellClass = "site-navbar__menu flex min-w-0 items-center justify-center gap-1 rounded-full border p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] max-lg:hidden";
	const navLinkClass = "site-navbar__link inline-flex min-h-9 items-center justify-center rounded-full px-[clamp(10px,1vw,18px)] text-[clamp(11px,0.78vw,13px)] font-extrabold leading-none whitespace-nowrap transition hover:-translate-y-px";
	const joinButtonClass = "site-navbar__join inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full px-[clamp(12px,1vw,18px)] text-[clamp(11px,0.78vw,13px)] font-black leading-none whitespace-nowrap shadow-[0_8px_18px_rgba(0,24,74,0.18)] transition hover:-translate-y-px";
	const quickLinkClass = "site-navbar__school inline-flex min-h-10 items-center justify-center gap-2 rounded-full border px-4 text-xs font-black tracking-[0.02em] whitespace-nowrap transition hover:-translate-y-px max-sm:w-full";

	return (
		<>
			<header className="relative z-[10000] w-full bg-surface text-primary max-lg:hidden">
				<div className="w-full border-b border-primary/10 bg-surface text-primary">
					<div className="mx-auto flex min-h-[34px] w-full max-w-[1780px] items-center justify-between gap-6 px-[clamp(14px,3vw,34px)] py-[5px]">
						<div className="flex min-w-0 items-center gap-[clamp(16px,3vw,42px)]">
							<a
								className="flex items-center gap-2 text-[clamp(12px,0.92vw,15px)] font-extrabold leading-tight whitespace-nowrap"
								href="tel:+510909090"
							>
								<ContactIcon name="phone" />
								<span>{t('nav.phone')}</span>
							</a>

							<a
								className="flex items-center gap-2 text-[clamp(12px,0.92vw,15px)] font-extrabold leading-tight whitespace-nowrap"
								href="/"
							>
								<ContactIcon name="map" />
								<span>{t('nav.address')}</span>
							</a>
						</div>

						<div className="flex shrink-0 items-center gap-2.5">
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

			<input id="site-mobile-menu-toggle" className="peer sr-only" type="checkbox" aria-hidden="true" />

			<nav className={navBarClass} aria-label="Principal">
				<a className={brandShellClass} href="/" aria-label={t('brand.name')}>
					<img
						className="block h-auto max-h-[52px] w-[clamp(168px,13vw,220px)] object-contain drop-shadow-[0_3px_8px_rgba(0,20,56,0.28)] max-sm:w-[min(220px,78vw)]"
						src={logoSrc}
						alt={t('brand.name')}
					/>
				</a>

				<div className={navShellClass}>
				{localizedNavItems.map((item) => (
					item.hasDropdown ? (
						<div className="group relative" key={item.label}>
							<a className={navLinkClass} href={item.href}>
								{item.label}
								<svg
									aria-hidden="true"
									className="ml-1 size-3 fill-current transition group-hover:rotate-180"
									viewBox="0 0 16 16"
								>
									<path d="M4.2 6.2 8 10l3.8-3.8 1.2 1.2-5 5-5-5 1.2-1.2Z" />
								</svg>
							</a>

							<div className="absolute top-full right-0 left-0 h-4" />
							<div className="invisible absolute top-[calc(100%+12px)] left-1/2 z-50 w-[220px] -translate-x-1/2 translate-y-2 rounded-[18px] border border-primary/10 bg-surface p-2 opacity-0 shadow-[0_22px_42px_rgba(0,43,99,0.24)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
								<div className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rotate-45 border-t border-l border-primary/10 bg-surface" />
								{localizedLeadershipItems.map((subItem) => (
									<a
										className="relative z-10 flex min-h-10 items-center rounded-xl px-3 text-[15px] font-semibold text-primary transition hover:bg-primary hover:text-surface"
										href={subItem.href}
										key={subItem.label}
									>
										{subItem.label}
									</a>
								))}
							</div>
						</div>
					) : (
						<a className={navLinkClass} href={item.href} key={item.label}>
							{item.label}
						</a>
					)
				))}

					<a className={joinButtonClass} href="/unete-a-nosotros">
						{t('nav.join')}
					</a>
				</div>

				<div className="flex items-center justify-end gap-2 max-[1360px]:col-span-2 max-[1360px]:justify-center max-lg:hidden">
					<a className={quickLinkClass} href="/">
						<FaStore aria-hidden="true" className="size-4" />
						{t('nav.store')}
					</a>
					<a className={quickLinkClass} href="https://escuela.integridaddemocratica.org/">
						<FaGraduationCap aria-hidden="true" className="size-4" />
						{t('nav.school')}
					</a>
				</div>

				<label
					className="hidden size-11 items-center justify-center justify-self-end rounded-xl border border-surface/25 bg-surface/10 text-surface shadow-[0_8px_18px_rgba(0,24,74,0.18)] transition hover:-translate-y-px hover:bg-surface hover:text-primary max-lg:flex [.is-page-scrolled_&]:border-primary/15 [.is-page-scrolled_&]:bg-primary/5 [.is-page-scrolled_&]:text-primary [.is-page-scrolled_&]:hover:bg-primary [.is-page-scrolled_&]:hover:text-surface"
					htmlFor="site-mobile-menu-toggle"
					aria-label={t('nav.openMenu')}
					aria-controls="mobile-menu"
					role="button"
					tabIndex={0}
				>
					<FaBars aria-hidden="true" className="size-5" />
				</label>
			</nav>

			<label
				className="fixed inset-0 z-[9998] hidden bg-black/40 peer-checked:block lg:peer-checked:hidden"
				htmlFor="site-mobile-menu-toggle"
				aria-label={t('nav.closeMenu')}
			/>

			<div
				id="mobile-menu"
				className="fixed top-0 right-0 z-[10001] h-full w-[86vw] max-w-[380px] translate-x-full transform bg-surface shadow-[-8px_0_30px_rgba(0,24,74,0.18)] transition-transform duration-300 peer-checked:translate-x-0 lg:hidden"
			>
				<div className="flex h-full flex-col overflow-y-auto overscroll-contain px-5 py-6">
					<div className="mb-6 flex items-center justify-between">
						<a href="/" aria-label={t('brand.name')}>
							<img
								className="block h-auto w-[140px] object-contain"
								src={logoSrc}
								alt={t('brand.name')}
							/>
						</a>
						<label
							className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-primary/15 text-primary transition hover:bg-primary hover:text-surface"
							htmlFor="site-mobile-menu-toggle"
							aria-label={t('nav.closeMenu')}
							role="button"
							tabIndex={0}
						>
							<FaXmark aria-hidden="true" className="size-4" />
						</label>
					</div>

					<nav className="flex flex-col gap-1" aria-label={t('nav.mobileMenu')}>
						{localizedNavItems.map((item) => (
							item.hasDropdown ? (
								<MobileDropdown key={item.label} label={item.label} items={localizedLeadershipItems} />
							) : (
								<a
									className="flex min-h-11 items-center rounded-xl px-3 text-sm font-extrabold text-primary transition hover:bg-primary hover:text-surface"
									href={item.href}
									key={item.label}
								>
									{item.label}
								</a>
							)
						))}
					</nav>

					<div className="mt-4 border-t border-primary/10 pt-4">
						<a
							className="flex min-h-11 w-full items-center justify-center rounded-xl bg-primary px-3 text-sm font-extrabold text-surface transition hover:bg-primary/90"
							href="/unete-a-nosotros"
						>
							{t('nav.join')}
						</a>
					</div>

					<div className="mt-4">
						<a
							className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary text-surface text-sm font-black tracking-[0.02em] transition hover:bg-surface hover:text-primary"
							href="/"
						>
							<FaStore aria-hidden="true" className="size-4" />
							{t('nav.store')}
						</a>
					</div>

					<div className="mt-3">
						<a
							className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary text-surface text-sm font-black tracking-[0.02em] transition hover:bg-surface hover:text-primary"
							href="https://escuela.integridaddemocratica.org/"
						>
							<FaGraduationCap aria-hidden="true" className="size-4" />
							{t('nav.school')}
						</a>
					</div>

					<div className="mt-6">
						<MobileLanguagePicker />
					</div>

					<div className="mt-4 border-t border-primary/10 pt-4">
						<div className="flex flex-col gap-2 text-xs font-extrabold text-primary">
							<a className="flex items-center gap-2" href="tel:+510909090">
								<ContactIcon name="phone" className="size-4" />
								{t('nav.phone')}
							</a>
							<a className="flex items-center gap-2" href="/">
								<ContactIcon name="map" className="size-4" />
								{t('nav.address')}
							</a>
						</div>
					</div>

					<div className="mt-4 flex flex-wrap gap-2">
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
		</>
	);
}
