import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Toaster />
				<Header />
				<main className=" min-h-[90vh] max-h-fit flex flex-col justify-center bg-slate-900 py-[100px]">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
