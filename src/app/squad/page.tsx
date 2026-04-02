import type { Metadata } from "next";
import SquadClient from "./SquadClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Kader",
    description:
        "Lerne den Kader des Athletic Klub Lienz kennen. Unsere Spieler, Positionen und Stats — von der Abwehr bis zum Sturm, jeder ein Teil der Familie.",
    alternates: {
        canonical: `${SITE_URL}/squad`,
    },
    openGraph: {
        title: "Kader | Athletic Klub Lienz",
        description:
            "Lerne den Kader des Athletic Klub Lienz kennen. Unsere Spieler, Positionen und Stats.",
        url: `${SITE_URL}/squad`,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Athletic Klub Lienz — Kader",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kader | Athletic Klub Lienz",
        description:
            "Lerne den Kader des Athletic Klub Lienz kennen.",
        images: ["/og-image.png"],
    },
};

export default function SquadPage() {
    return <SquadClient />;
}
