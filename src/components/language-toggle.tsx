import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export default function LanguageToggle({ langTitle }: { langTitle: string }) {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState(i18n.language);

	const handleLanguageChange = (lang: string) => {
		setLanguage(lang);
		i18n.changeLanguage(lang); // Change the language using i18n
	};

	// Keep the dropdown state in sync with i18n language
	useEffect(() => {
		setLanguage(i18n.language);
	}, [i18n.language]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Globe size={19} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-52" align="end">
				<DropdownMenuLabel className="flex items-center gap-2">
					<Languages size={19} /> <span>{langTitle}</span>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={language}
					onValueChange={handleLanguageChange}
				>
					<DropdownMenuRadioItem className="gap-2" value="en">
						<Badge className="font-mono" variant="outline">
							en
						</Badge>
						<span>English</span>
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem className="gap-2" value="fr">
						<Badge className="font-mono" variant="outline">
							fr
						</Badge>
						<span>Français</span>
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem className="gap-2" value="ja">
						<Badge className="font-mono" variant="outline">
							ja
						</Badge>
						<span className="font-sans-jp">日本語</span>
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
