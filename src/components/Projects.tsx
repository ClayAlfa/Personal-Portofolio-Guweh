import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wide font-medium text-zinc-500 dark:text-zinc-300">projects</h3>
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="image"
					src="/Sporting.jpg"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={800}
					height={500}
				/>
				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">3-4-3 Sporting Formation</h4>
					<p className="text-sm text-zinc-500 dark:text-zinc-300 loading-relaxed">
						Formasi 3-4-3 merupakan sistem taktik yang menekankan keseimbangan antara pertahanan solid dan fleksibilitas serangan.
    					Dalam skema ini, tiga bek tengah berperan menjaga area pertahanan, sementara empat gelandang mengontrol permainan di lini tengah
    					dan dua di antaranya biasanya berfungsi sebagai wing-back yang aktif naik-turun membantu serangan maupun bertahan.
					</p>
					<div className="flex items-center gap-x-2.5 mt-2">
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Sporting
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							Formation
						</span>
						<span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-sm text-zinc-500 dark:text-zinc-300 text-xs">
							3-4-3
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
