// content.ts
import { TFunction } from "i18next";

export const getContent = (t: TFunction) => {
	const heading = t("heading");
	const subHeadings = [t("subHeading1"), t("subHeading2"), t("subHeading3")];
	const subHeadingContent = t("subHeadingContent");
	const email = t("email");
	const notify = t("notify");
	const footer = t("footer");
	const privacy = t("privacy");
	const terms = t("terms");
	const themeTitle = t("themeTitle");
	const themeLight = t("themeLight");
	const themeDark = t("themeDark");
	const themeSystem = t("themeSystem");
	const langTitle = t("langTitle");

	return {
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
	};
};
