import type { Metadata } from "next";
import SponsorsClient from "./SponsorsClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Partner",
    description:
        "Partner und Sponsoren von Athletic Klub Lienz.",
    alternates: {
        canonical: `${SITE_URL}/sponsors`,
    },
    openGraph: {
        title: "Partner | Athletic Klub Lienz",
        description:
            "Partner und Sponsoren von Athletic Klub Lienz.",
        url: `${SITE_URL}/sponsors`,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Athletic Klub Lienz - Partner",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Partner | Athletic Klub Lienz",
        description:
            "Partner und Sponsoren von Athletic Klub Lienz.",
        images: ["/og-image.png"],
    },
};

export default function SponsorsPage() {
    return <SponsorsClient />;
}
