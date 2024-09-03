import { Moon, Sun, Monitor, SwatchBook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
	DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

interface ModeToggleProps {
	themeTitle: string;
	themeLight: string;
	themeDark: string;
	themeSystem: string;
}

export function ModeToggle({
	themeTitle,
	themeLight,
	themeDark,
	themeSystem,
}: ModeToggleProps) {
	const { theme, setTheme } = useTheme();

	// Map string values to the specific Theme type
	const handleThemeChange = (value: string) => {
		setTheme(value as "light" | "dark" | "system");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel className="flex items-center gap-2">
					<SwatchBook size={19} /> <span>{themeTitle}</span>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={theme}
					onValueChange={handleThemeChange}
				>
					<DropdownMenuRadioItem value="light">
						<Sun className="mr-2 h-4 w-4" />
						<span>{themeLight}</span>
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="dark">
						<Moon className="mr-2 h-4 w-4" />
						<span>{themeDark}</span>
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="system">
						<Monitor className="mr-2 h-4 w-4" />
						<span>{themeSystem}</span>
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
