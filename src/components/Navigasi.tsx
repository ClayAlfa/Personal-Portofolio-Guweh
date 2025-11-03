'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

function applyTheme(mode: ThemeMode) {
	const root = document.documentElement;
	if (mode === 'dark') {
		root.classList.add('dark');
	} else {
		root.classList.remove('dark');
	}
}

export default function Navigasi() {
	const [theme, setTheme] = useState<ThemeMode | null>(null);

	useEffect(() => {
		const storedTheme = window.localStorage.getItem('theme') as ThemeMode | null;
		if (storedTheme === 'light' || storedTheme === 'dark') {
			applyTheme(storedTheme);
			setTheme(storedTheme);
			return;
		}

		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initialTheme = prefersDark ? 'dark' : 'light';
		applyTheme(initialTheme);
		setTheme(initialTheme);
	}, []);

	const handleToggleTheme = () => {
		if (!theme) return;
		const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
		applyTheme(nextTheme);
		window.localStorage.setItem('theme', nextTheme);
		setTheme(nextTheme);
	};

	return (
		<nav className="p-1 bg-white dark:bg-zinc-900 flex items-center gap-x-0.5 rounded-full shadow-md fixed bottom-4 md:bottom-auto md:top-12 left-1/2 -translate-x-1/2 z-10">
			<a
				href="#about"
				className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
			>
				<span className="md:hidden">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
				<span className="hidden md:inline">About</span>
			</a>
			<a
				href="#projects"
				className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
			>
				<span className="md:hidden">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M20 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55229 3.44772 10 4 10H20C20.5523 10 21 9.55229 21 9V4C21 3.44772 20.5523 3 20 3Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55229 21 10 20.5523 10 20V15C10 14.4477 9.55229 14 9 14Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
				<span className="hidden md:inline">Projects</span>
			</a>
			<a
				href="#contact"
				className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
			>
				<span className="md:hidden">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
				<span className="hidden md:inline">Contact</span>
			</a>
			<div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800"></div>
			<button
				id="toggle-theme"
				type="button"
				onClick={handleToggleTheme}
				aria-label="Toggle theme"
				className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
				disabled={!theme}
			>
				{theme === 'light' ? (
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M18 5H22M20 3V7M20.985 12.486C20.8913 14.2221 20.2967 15.894 19.2731 17.2994C18.2495 18.7048 16.8407 19.7837 15.217 20.4055C13.5934 21.0274 11.8243 21.1656 10.1238 20.8035C8.42324 20.4414 6.86398 19.5945 5.63449 18.3652C4.40499 17.1358 3.55791 15.5766 3.19564 13.8761C2.83337 12.1756 2.97142 10.4065 3.5931 8.78282C4.21478 7.15909 5.29348 5.75019 6.6988 4.72644C8.10412 3.70268 9.77589 3.1079 11.512 3.014C11.917 2.992 12.129 3.474 11.914 3.817C11.1949 4.96755 10.887 6.32787 11.0405 7.67595C11.194 9.02403 11.7999 10.2803 12.7593 11.2397C13.7187 12.1991 14.975 12.805 16.3231 12.9585C17.6712 13.112 19.0315 12.8041 20.182 12.085C20.526 11.87 21.007 12.081 20.985 12.486Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				) : (
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</button>
		</nav>
	);
}
