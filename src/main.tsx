import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/noto-sans";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/noto-sans-mono";
import App from "./App.tsx";
import "./index.css";
import "./lib/i18n.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
