import type { Metadata } from "next";
import HistoryClient from "./HistoryClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Historie",
    description:
        "Turniere, Fotos und Stationen von Athletic Klub Lienz seit 2017.",
    alternates: {
        canonical: `${SITE_URL}/history`,
    },
    openGraph: {
        title: "Historie | Athletic Klub Lienz",
        description:
            "Turniere, Fotos und Stationen von Athletic Klub Lienz seit 2017.",
        url: `${SITE_URL}/history`,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Athletic Klub Lienz — Historie",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Historie | Athletic Klub Lienz",
        description:
            "Turniere seit 2017.",
        images: ["/og-image.png"],
    },
};

export default function HistoryPage() {
    return <HistoryClient />;
}
