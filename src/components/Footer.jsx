import {
	FaArrowRight,
	FaEnvelope,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaLocationDot,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6';
import fondo from '../img/fondofooter.png';
import logo from '../img/integridadlogoh.webp';

const navItems = [
	{ label: 'Nosotros', href: '/' },
	{ label: 'Liderazgo', href: '/' },
	{ label: '\u00d3rganos aut\u00f3nomos', href: '/' },
	{ label: 'Documentos', href: '/documentos' },
	{ label: 'Noticias', href: '/' },
];

const socialLinks = [
	{ label: 'TikTok', Icon: FaTiktok, className: 'hover:bg-[#161616]' },
	{ label: 'Instagram', Icon: FaInstagram, className: 'hover:bg-[linear-gradient(135deg,#7c3aed,#f43f5e,#f59e0b)]' },
	{ label: 'Facebook', Icon: FaFacebookF, className: 'hover:bg-[#4267B2]' },
	{ label: 'X', Icon: FaXTwitter, className: 'hover:bg-[#161616]' },
	{ label: 'YouTube', Icon: FaYoutube, className: 'hover:bg-[#E00000]' },
	{ label: 'LinkedIn', Icon: FaLinkedinIn, className: 'hover:bg-[#2B83D3]' },
];

export default function Footer() {
	const backgroundSrc = typeof fondo === 'string' ? fondo : fondo.src;
	const logoSrc = typeof logo === 'string' ? logo : logo.src;

	return (
		<footer className="relative isolate overflow-hidden bg-primary text-surface">
			<img
				className="absolute inset-0 h-full w-full object-cover object-center"
				src={backgroundSrc}
				alt=""
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.0),transparent_30%),linear-gradient(135deg,rgba(0,73,164,0.78)_0%,rgba(6,44,120,0.98)_100%)]" />

			<div className="relative mx-auto w-full max-w-[1540px] px-[clamp(18px,5vw,84px)] py-[clamp(46px,6vw,78px)]">
				<div className="grid gap-[clamp(32px,5vw,72px)] lg:grid-cols-[minmax(230px,0.8fr)_minmax(240px,0.65fr)_minmax(330px,1fr)] lg:items-start">
					<div>
						<a
							className="inline-flex rounded-[24px] border border-white/16 bg-white/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition hover:-translate-y-1 hover:bg-white/14"
							href="/"
							aria-label={'Integridad Democr\u00e1tica'}
						>
							<img
								className="h-auto w-[min(260px,78vw)] object-contain drop-shadow-[0_8px_18px_rgba(0,16,54,0.32)]"
								src={logoSrc}
								alt={'Integridad Democr\u00e1tica'}
							/>
						</a>

						<p className="mt-6 max-w-sm text-[16px] font-bold leading-7 text-white/90">
							{'Un movimiento ciudadano con vocaci\u00f3n de servicio, liderazgo y compromiso con el bien com\u00fan.'}
						</p>
					</div>

					<nav aria-label="Footer" className="grid gap-3">
						<p className="text-xs font-black uppercase tracking-[0.22em] text-[#b8ddff]">Explora</p>
						{navItems.map(({ label, href }) => (
							<a
								className="group flex w-fit items-center gap-3 text-[clamp(16px,1.2vw,19px)] font-black text-white/92 transition hover:text-white"
								href={href}
								key={label}
							>
								<span className="h-px w-5 bg-white/38 transition group-hover:w-8 group-hover:bg-white" />
								{label}
							</a>
						))}
					</nav>

					<div className="flex flex-col items-start lg:items-end">
						<a
							className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-black uppercase tracking-[0.03em] text-primary shadow-[0_16px_32px_rgba(0,16,54,0.25)] transition hover:-translate-y-0.5 hover:bg-[#eaf5ff]"
							href="/"
						>
							{'\u00danete a nosotros'}
						</a>

						<div className="mt-7 grid gap-4 lg:justify-items-end">
							<a className="flex items-start gap-3 text-[16px] font-bold leading-6 text-white/92 transition hover:text-white lg:text-right" href="/">
								<FaLocationDot aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#f0c66b]" />
								<span>
									<span className="block text-lg font-black text-white">
										{'Ub\u00edcanos aqu\u00ed'} <FaArrowRight aria-hidden="true" className="mb-0.5 ml-1 inline size-4" />
									</span>
									Calle Las Tiendas 269, interior K, Surquillo
								</span>
							</a>

							<a className="flex items-center gap-3 text-[16px] font-bold text-white/92 transition hover:text-white" href="mailto:contacto@integridaddemocratica.org">
								<FaEnvelope aria-hidden="true" className="size-4 shrink-0 text-[#b8ddff]" />
								contacto@integridaddemocratica.org
							</a>
						</div>

						<div className="mt-7 flex flex-wrap gap-2.5 lg:justify-end">
							{socialLinks.map(({ Icon, label, className }) => (
								<a
									className={`flex size-11 items-center justify-center rounded-[15px] bg-white/16 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(0,16,54,0.28)] ${className}`}
									href="/"
									aria-label={label}
									key={label}
								>
									<Icon aria-hidden="true" className="size-[18px]" />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="mt-[clamp(34px,5vw,62px)] flex flex-wrap items-center justify-between gap-4 border-t border-white/18 pt-6 text-sm font-bold text-white/72">
					<p>{'\u00a9 2026 Integridad Democr\u00e1tica'}</p>
					<div className="flex flex-wrap gap-x-5 gap-y-2">
						<a className="transition hover:text-white" href="/">{'Pol\u00edtica de privacidad'}</a>
						<a className="transition hover:text-white" href="/">{'T\u00e9rminos'}</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
