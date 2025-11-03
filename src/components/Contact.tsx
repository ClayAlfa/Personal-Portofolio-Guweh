export default function Contact() {
	return (
		<section id="contact" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wider font-medium text-zinc-500 dark:text-zinc-300">Contact</h3>
			<p className="text-zinc-800 dark:text-zinc-200">
				Feel free to reach out if you want to collaborate on a project, need help with football development, or just
				want to connect.
			</p>
			<div className="flex gap-x-6 mt-6 flex-col md:flex-row gap-y-2">
				<span className="text-zinc-500 dark:text-zinc-300">amorim@gmail.com</span>
				<a href="https://www.youtube.com/manutd" className="text-zinc-500 dark:text-zinc-300 flex items-center gap-x-2.5">
					<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.87488 13.25C1.35095 10.7774 1.35095 8.22255 1.87488 5.75C1.94372 5.49891 2.07674 5.27006 2.26084 5.08595C2.44494 4.90185 2.67379 4.76884 2.92488 4.7C6.94747 4.03359 11.0523 4.03359 15.0749 4.7C15.326 4.76884 15.5548 4.90185 15.7389 5.08595C15.923 5.27006 16.056 5.49891 16.1249 5.75C16.6488 8.22255 16.6488 10.7774 16.1249 13.25C16.056 13.5011 15.923 13.7299 15.7389 13.914C15.5548 14.0981 15.326 14.2312 15.0749 14.3C11.0523 14.9665 6.94746 14.9665 2.92488 14.3C2.67379 14.2312 2.44494 14.0981 2.26084 13.914C2.07674 13.7299 1.94372 13.5011 1.87488 13.25Z"
							stroke="currentColor"
							strokeWidth="1.125"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M7.49988 11.75L11.2499 9.5L7.49988 7.25V11.75Z"
							stroke="currentColor"
							strokeWidth="1.125"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					YouTube
				</a>
			</div>
		</section>
	);
}
