import { writable } from "svelte/store";
import { base } from "$app/paths";

export const navItems: {
	name: string;
	path: string;
	pages?: {
		name: string;
		path: string;
		desc?: string;
		years?: string;
	}[];
}[] = [
		{ name: "Home", path: `${base}/` },
		{
			name: "About", path: `${base}/about`, pages: [
				{ name: "About SASI", path: `${base}/about` },
				{ name: "Project history", path: `${base}/about#project-history` },
				{ name: "Team", path: `${base}/about#team` },
				{ name: "Advisory committee", path: `${base}/about#committee` },

			]
		},
		{
			name: "History",
			path: `${base}/history`,
			pages: [
				{ name: "Migration Overview", path: `${base}/history#`, desc: "" },
				{
					name: "1900s to 1960s: Building Community in Imperial Times", path: `${base}/history/early-migration`,
					desc: "Pioneer settler history of migration, settlement and adaptation to Canadian society",
					years: "1900s to 1960s"
				},
				{
					name: "1960s to 2000: Increasing numbers", path: `${base}/history/mid-20th-century-migration`,
					desc: "Canadian immigration changes allowed South Asian Muslims to migrate to B.C., fostering community organizations and mosques despite racism.",
					years: "1960s to 2000"
				},
				{
					name: "2000 to the present day: Diversity and challenges", path: `${base}/history/recent-migration-to-canada`,
					desc: "Post-9/11, South Asian Muslims in B.C. faced discrimination and surveillance, with emerging voices and solidarity with Indigenous groups.",
					years: "2000 to the present day"
				},
				{ name: "Further Reading", path: `${base}/history/further-reading` },
				{ name: "Community life", path: `${base}/history/community-life` },
			]
		},
		{ name: "Oral History", path: `${base}/oral-history` },
		{ name: "Share your story", path: `${base}/contact` },
]

type NavItem = "Home" | "About" | "History" | "Resources" | "Contact";

export let curTab = $state<NavItem>("Home");
