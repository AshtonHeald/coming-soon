import React from "react";

const header = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<header className="absolute top-0 w-full grid md:place-items-center py-2.5 px-4 md:p-4">
			<h1 id="logo" className="font-black">
				<a href="/" className="text-2xl ">
					{title}
				</a>
			</h1>
			<div className="absolute right-2 flex gap-2 top-2 md:right-3.5 md:top-3.5 md:gap-3">
				{children}
			</div>
		</header>
	);
};

export default header;
