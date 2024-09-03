import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export default function Modal({
	children,
	title,
}: {
	children?: React.ReactNode;
	title: string;
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="underline underline-offset-2">
					{title}
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				<div className="flex items-center space-x-2">{children}</div>
			</DialogContent>
		</Dialog>
	);
}
