import type { Metadata } from "next";
import { Be_Vietnam_Pro, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeColorProvider } from "@/components/theme-context";
import { Navbar } from "@/components/header/navbar";
import { Footer } from "@/components/footer/footer";

const beVietnamPro = Be_Vietnam_Pro({
	variable: "--font-be-vietnam-pro",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const hindSiliguri = Hind_Siliguri({
	variable: "--font-hind-siliguri",
	subsets: ["bengali"],
	weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
	title: "B.S.T. | Business. Solution. Technology.",
	description: "Premier Web Hosting, Cloud VPS, And Dedicated Server Solutions",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${beVietnamPro.variable} ${hindSiliguri.variable} font-sans antialiased`}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<ThemeColorProvider>
						<Navbar />
						<main className="pt-16">{children}</main>
						<Footer />
					</ThemeColorProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
