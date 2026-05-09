import heroVideo from '../../videos/home.mp4';

export default function Hero() {
	const videoSrc = typeof heroVideo === 'string' ? heroVideo : heroVideo.src;

	return (
		<section
			className="relative isolate -mt-px overflow-hidden bg-primary"
			aria-label="Video principal de Integridad Democr\u00e1tica"
		>
			<div className="relative mx-auto aspect-[16/6.55] w-full overflow-hidden bg-primary max-lg:aspect-[16/8] max-sm:aspect-[4/3]">
				<video
					className="absolute inset-0 z-0 size-full object-cover object-center"
					src={videoSrc}
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
				/>

				<div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-[linear-gradient(0deg,rgba(0,73,164,0.22),transparent)]" />
			</div>
		</section>
	);
}
