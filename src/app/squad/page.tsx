import type { Metadata } from "next";
import SquadClient from "./SquadClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Kader",
    description:
        "Der Kader von Athletic Klub Lienz.",
    alternates: {
        canonical: `${SITE_URL}/squad`,
    },
    openGraph: {
        title: "Kader | Athletic Klub Lienz",
        description:
            "Der Kader von Athletic Klub Lienz.",
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
            "Der Kader von Athletic Klub Lienz.",
        images: ["/og-image.png"],
    },
};

export default function SquadPage() {
    return <SquadClient />;
}
