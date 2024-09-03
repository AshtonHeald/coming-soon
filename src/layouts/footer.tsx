const footer = ({
	children,
	content,
}: {
	children?: React.ReactNode;
	content: string;
}) => {
	return (
		<footer className="absolute bottom-0 flex justify-center p-4 w-full shrink-0 items-center ">
			<p className="flex flex-col md:flex-row gap-1 text-xs text-muted-foreground items-center ">
				{content}
				<span className="flex gap-1">{children}</span>
			</p>
		</footer>
	);
};

export default footer;
