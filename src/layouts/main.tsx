const main = ({ children }: { children?: React.ReactNode }) => {
	return (
		<main className="h-full w-full p-4 grid place-items-center">
			{children}
		</main>
	);
};

export default main;
