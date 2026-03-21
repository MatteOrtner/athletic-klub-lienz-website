import type { Metadata } from "next";
import HistoryClient from "./HistoryClient";

export const metadata: Metadata = {
    title: "Historie",
    description:
        "Die Geschichte des Athletic Klub Lienz — von den ersten gemeinsamen Turnieren 2017 bis zur Vereinsgründung 2026. Eine Reise voller Leidenschaft, Zusammenhalt und unvergesslicher Momente.",
    alternates: {
        canonical: "https://www.athleticklublienz.com/history",
    },
    openGraph: {
        title: "Historie | Athletic Klub Lienz",
        description:
            "Die Geschichte des Athletic Klub Lienz — von 2017 bis heute. Turniere, Meilensteine und unvergessliche Momente.",
        url: "https://www.athleticklublienz.com/history",
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
            "Die Geschichte des Athletic Klub Lienz — von 2017 bis heute.",
        images: ["/og-image.png"],
    },
};

export default function HistoryPage() {
    return <HistoryClient />;
}
