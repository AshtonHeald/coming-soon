import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeDownProps {
	heading: string;
	children: React.ReactNode[];
	className?: string;
}

export function FadeDown({ heading, children, className }: FadeDownProps) {
	const FADE_DOWN_ANIMATION_VARIANTS = {
		hidden: { opacity: 0, y: -10 },
		show: { opacity: 1, y: 0, transition: { type: "spring" } },
	};
	return (
		<motion.div
			className={cn(
				"flex flex-col gap-y-5 w-full mb-40 md:mb-64",
				className
			)}
			initial="hidden"
			animate="show"
			viewport={{ once: true }}
			variants={{
				hidden: {},
				show: {
					transition: {
						staggerChildren: 0.15,
					},
				},
			}}
		>
			<motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
				<h2 className="text-center text-4xl font-[900] tracking-tight md:text-6xl">
					{heading}
				</h2>
			</motion.div>
			{children.map((child, index) => (
				<motion.div key={index} variants={FADE_DOWN_ANIMATION_VARIANTS}>
					{child}
				</motion.div>
			))}
		</motion.div>
	);
}
