"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";

export function TailwindcssButtons() {
	const copy = (button: Button) => {
		if (button.code) {
			copyToClipboard(button.code);
			return;
		}
		const buttonString = reactElementToJSXString(button.component);

		if (buttonString) {
			const textToCopy = buttonString;
			copyToClipboard(textToCopy);
		}
	};

	const copyToClipboard = (text: string) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log("Text Copied To Clipboard:", text);
				toast.success("Copied To Clipboard");
			})
			.catch((err) => {
				console.error("Error Copying Text To Clipboard:", err);
				toast.error("Error Copying To Clipboard");
			});
	};

	return (
		<div className="pb-40 px-4 w-full">
			<Toaster position="top-center" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto gap-10">
				{buttons.map((button, idx) => (
					<ButtonsCard key={idx} onClick={() => copy(button)}>
						{button.component}
					</ButtonsCard>
				))}
			</div>
		</div>
	);
}

interface Button {
	name: string;
	description: string;
	showDot?: boolean;
	component: React.ReactNode;
	code?: string;
}

export const buttons: Button[] = [
	{
		name: "Primary",
		description: "Primary Theme Button",
		component: (
			<button className="px-8 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90">
				Primary
			</button>
		),
	},
	{
		name: "Secondary",
		description: "Secondary Theme Button",
		component: (
			<button className="px-8 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80">
				Secondary
			</button>
		),
	},
	{
		name: "Outline",
		description: "Outline Theme Button",
		component: (
			<button className="px-8 py-2 rounded-lg border-2 border-primary text-primary font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
				Outline
			</button>
		),
	},
	{
		name: "Gradient",
		description: "Gradient Theme Button",
		component: (
			<button className="px-8 py-2 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-primary-foreground font-medium transition-all hover:shadow-lg">
				Gradient
			</button>
		),
	},
	{
		name: "Sketch",
		description: "Sketch Button For Your Website",
		component: (
			<button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:border-white dark:bg-black dark:text-white dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)] transition duration-200">
				Sketch
			</button>
		),
	},
	{
		name: "Simple",
		description: "Elegant Button For Your Website",
		component: (
			<button className="px-4 py-2 rounded-md border border-border bg-secondary text-secondary-foreground text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
				Simple
			</button>
		),
	},
	{
		name: "Invert",
		description: "Simple Button That Inverts On Hover",
		component: (
			<button className="px-8 py-2 rounded-md bg-primary text-primary-foreground font-bold transition duration-200 hover:bg-background hover:text-primary border-2 border-transparent hover:border-primary">
				Invert It
			</button>
		),
	},
	{
		name: "Brutal",
		description: "Brutal Button For Your Website",
		component: (
			<button className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black dark:bg-black dark:text-white transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
				Brutal
			</button>
		),
	},
	{
		name: "Lit Up Borders",
		description: "Gradient Border Button",
		component: (
			<button className="p-[3px] relative">
				<div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-lg" />
				<div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
					Lit Up Borders
				</div>
			</button>
		),
	},
	{
		name: "Border Magic",
		description: "Animated Border Button",
		showDot: false,
		component: (
			<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--primary)/0.5)_50%,hsl(var(--primary))_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
					Border Magic
				</span>
			</button>
		),
	},
	{
		name: "Shimmer",
		description: "Shimmer Button For Your Website",
		showDot: false,
		component: (
			<button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-border bg-[linear-gradient(110deg,hsl(var(--background)),45%,hsl(var(--muted)),55%,hsl(var(--background)))] bg-[length:200%_100%] px-6 font-medium text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
				Shimmer
			</button>
		),
		code: `
// Button Code
<button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-border bg-[linear-gradient(110deg,hsl(var(--background)),45%,hsl(var(--muted)),55%,hsl(var(--background)))] bg-[length:200%_100%] px-6 font-medium text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
  Shimmer
</button>

// Add This To globals.css
@keyframes shimmer {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -200% 0;
  }
}

.animate-shimmer {
  animation: shimmer 2s linear infinite;
}
		`,
	},
	{
		name: "Unapologetic",
		description: "Unapologetic Button With Perfect Corners",
		component: (
			<button className="px-8 py-2 border border-black bg-transparent text-black dark:border-white dark:text-white relative group transition duration-200">
				<div className="absolute -bottom-2 -right-2 bg-primary h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
				<span className="relative">Unapologetic</span>
			</button>
		),
	},
	{
		name: "Backdrop Blur",
		description: "Backdrop Blur Button",
		showDot: false,
		component: (
			<button className="px-4 py-2 text-foreground backdrop-blur-sm border border-border rounded-md hover:shadow-[0px_0px_4px_4px_hsl(var(--primary)/0.1)] bg-background/20 text-sm transition duration-200">
				Backdrop Blur
			</button>
		),
	},
	{
		name: "Top Gradient",
		description: "Top Gradient Button",
		showDot: false,
		component: (
			<button className="px-8 py-2 rounded-full relative bg-secondary text-secondary-foreground text-sm hover:shadow-2xl hover:shadow-primary/10 transition duration-200 border border-border">
				<div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-primary to-transparent" />
				<span className="relative z-20">Top Gradient</span>
			</button>
		),
	},
	{
		name: "Playlist",
		description: "Playlist Button For Your Website",
		component: (
			<button className="shadow-[inset_0_0_0_2px_hsl(var(--border))] text-foreground px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-muted transition duration-200">
				Playlist
			</button>
		),
	},
	{
		name: "Ghost",
		description: "Ghost Button With Hover Effect",
		component: (
			<button className="px-6 py-2 bg-transparent text-foreground border-2 border-border rounded-lg font-bold transform hover:-translate-y-1 hover:border-primary transition duration-400">
				Ghost
			</button>
		),
	},
];
