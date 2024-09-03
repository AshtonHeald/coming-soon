// External Libraries
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
// Internal Components
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { GridBackground } from "@/components/ui/background-grid";
import Modal from "@/components/modal";
import { FadeDown } from "@/components/word-fade-down";
import Subscribe from "@/components/subscribe";
import WordRotate from "@/components/word-rotate";
import { Toaster } from "@/components/ui/toaster";
import LanguageToggle from "@/components/language-toggle";
// Layouts
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import Main from "@/layouts/main";
// Markdown Files
import PrivacyPolicy from "@/md/privacy-policy.mdx";
import TermsConditions from "@/md/terms-conditions.mdx";
// Hooks and Utilities
import useReducedMotion from "@/hooks/usePrefersReducedMotion";
import { getContent } from "@/locales";

function App() {
	const { t, i18n } = useTranslation();

	// Memoize the font family based on the current language
	const fontFamily = useMemo(
		() => (i18n.language === "ja" ? "font-sans-jp" : "font-sans"),
		[i18n.language]
	);

	useEffect(() => {
		document.documentElement.lang = i18n.language;
	}, [i18n.language]);

	const prefersReducedMotion = useReducedMotion();

	const {
		heading,
		subHeadings,
		subHeadingContent,
		email,
		notify,
		footer,
		privacy,
		terms,
		themeTitle,
		themeLight,
		themeDark,
		themeSystem,
		langTitle,
	} = getContent(t);

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<GridBackground>
				<Header title="Ash Café">
					<LanguageToggle langTitle={langTitle} />
					<ModeToggle
						themeTitle={themeTitle}
						themeLight={themeLight}
						themeDark={themeDark}
						themeSystem={themeSystem}
					/>
				</Header>
				<Main>
					{prefersReducedMotion ? (
						<div className={`${fontFamily}`}>
							<h1 className="text-center text-4xl font-[900] tracking-tight lg:text-6xl">
								{heading}
							</h1>
							<p className="text-muted-foreground text-center md:text-xl font-medium mb-2">
								{subHeadingContent}
							</p>
							<Subscribe email={email} notify={notify} />
						</div>
					) : (
						<FadeDown heading={heading} className={`${fontFamily}`}>
							<WordRotate
								className="text-muted-foreground text-center md:text-xl font-medium mb-2"
								duration={3000}
								words={subHeadings}
							/>
							<Subscribe email={email} notify={notify} />
						</FadeDown>
					)}
				</Main>
				<Footer content={footer}>
					<Modal title={privacy}>
						<PrivacyPolicy />
					</Modal>{" "}
					|{" "}
					<Modal title={terms}>
						<TermsConditions />
					</Modal>
				</Footer>
			</GridBackground>
			<Toaster />
		</ThemeProvider>
	);
}

export default App;
