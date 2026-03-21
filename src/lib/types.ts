// TypeScript interfaces for Athletic Klub Lienz data structures
// Mirrors the Notion database schemas

export interface Player {
    id: string;
    name: string;
    position: "Stürmer" | "Mittelfeld" | "Verteidiger" | "Torwart";
    number: number;
    introduction: string;
    stats: {
        Schnelligkeit: number;
        Ausdauer: number;
        Teamgeist: number;
    };
    image?: string;
    walkoutVideo?: string; // Path to walkout video in /public/players/
}


export interface NewsArticle {
    id: string;
    title: string;
    date: string; // ISO 8601
    tag: "Verein" | "Spielbericht" | "Community" | "Spiele";
    excerpt: string;
    content?: string;
    imageUrl?: string;
}

export interface ClubInfo {
    name: string;
    shortName: string;
    tagline: string;
    subtitle: string;
    season: string;
    location: {
        name: string;
        address: string;
        lat: number;
        lng: number;
    };
}

export interface AboutFeature {
    icon: string;
    title: string;
    description: string;
}

