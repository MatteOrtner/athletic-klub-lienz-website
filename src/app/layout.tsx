import type { Metadata } from "next";
import "./globals.css";

// SEO Metadata — German, optimized for Athletic Klub Lienz
export const metadata: Metadata = {
    title: "Athletic Klub Lienz | Mehr als ein Verein",
    description:
        "Athletic Klub Lienz — Wo Leidenschaft auf dem Kleinfeld zur Legende wird. Werde Teil des Teams und erlebe Kleinfeld-Fußball auf höchstem Niveau in Lienz, Osttirol.",
    keywords: [
        "Athletic Klub Lienz",
        "AKL",
        "Kleinfeld Fußball",
        "Lienz",
        "Osttirol",
        "Fußballverein",
        "Community",
    ],
    openGraph: {
        title: "Athletic Klub Lienz | Mehr als ein Verein",
        description:
            "Wo Leidenschaft auf dem Kleinfeld zur Legende wird. Werde Teil des Teams!",
        type: "website",
        locale: "de_AT",
        url: "https://www.athleticklublienz.com",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" className="scroll-smooth">
            <body className="min-h-screen bg-binblau-bg text-white antialiased">
                <a href="#main-content" className="skip-to-content">
                    Zum Inhalt springen
                </a>
                <div id="main-content">
                    {children}
                </div>
            </body>
        </html>
    );
}
