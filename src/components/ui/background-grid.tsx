export function GridBackground({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid place-items-center min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 grid place-items-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div>
			{children}
		</div>
	);
}
