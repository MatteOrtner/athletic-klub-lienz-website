// Static content constants for Athletic Klub Lienz
// Source of truth for all in-repo content (German, energetic, bold)

import type { ClubInfo, AboutFeature, Player, Match, NewsArticle } from "./types";

// ============================================
// CLUB INFO
// ============================================

export const clubInfo: ClubInfo = {
    name: "Athletic Klub Lienz",
    shortName: "AKL",
    tagline: "Mehr als ein Verein. Eine Lebenseinstellung.",
    subtitle: "Wo Leidenschaft auf dem Kleinfeld zur Legende wird.",
    season: "2026",
    location: {
        name: "Dolomitenstadion Lienz",
        address: "Amlacher Str. 16, 9900 Lienz",
        lat: 46.8255677,
        lng: 12.7641646,
    },
};

// ============================================
// ABOUT SECTION - FEATURES
// ============================================

export const aboutFeatures: AboutFeature[] = [
    {
        icon: "Shield",
        title: "Identität",
        description:
            "Athletic Klub Lienz ist nicht nur ein Name auf einem Trikot. Es ist das Herzblut, das jeden Sonntag auf dem Platz fließt. Gegründet aus der reinen Liebe zum Spiel, stehen wir für Zusammenhalt, Kampfgeist und unvergessliche Momente.",
    },
    {
        icon: "Zap",
        title: "Kleinfeld-Fußball",
        description:
            "Unsere Heimat ist das Kleinfeld. Hier, wo das Spiel schneller, intensiver und ehrlicher ist, fühlen wir uns am wohlsten. Jeder Pass, jeder Zweikampf und jedes Tor schweißt uns als Team enger zusammen.",
    },
    {
        icon: "Users",
        title: "Community",
        description:
            "Abseits des Platzes sind wir eine Familie. Die Community rund um Athletic Klub Lienz ist unser größter Rückhalt. Egal ob Spieler, Fan oder Unterstützer – bei uns ist jeder willkommen.",
    },
];

// ============================================
// NAVIGATION
// ============================================

export const navItems = [
    { label: "Home", href: "/#hero" },
    { label: "Historie", href: "/history" },
    { label: "Über uns", href: "/#about" },
    { label: "Kader", href: "/#squad" },
    { label: "Match Center", href: "/#bento" },
    { label: "Standort", href: "/#location" },
];

// ============================================
// MOCK DATA — Replace with Notion API calls
// These mirror the exact Notion database schemas
// ============================================

export const mockPlayers: Player[] = [
    // ── ROW 1: Defenders ──────────────────────────────────
    {
        id: "player-matte",
        name: "Matte",
        position: "Verteidiger",
        number: 4,
        introduction:
            "Der Fels in der Brandung. Kompromisslos im Zweikampf und mit grenzenloser Leidenschaft räumt er hinten alles ab.",
        stats: { Schnelligkeit: 88, Ausdauer: 92, Teamgeist: 97 },
        walkoutVideo: "/players/matte.mp4",
    },
    {
        id: "player-luca",
        name: "Luca",
        position: "Verteidiger",
        number: 19,
        introduction:
            "Souverän und abgeklärt in der Defensive. Mit seiner Übersicht leitet er unsere Angriffe schon von hinten ein.",
        stats: { Schnelligkeit: 82, Ausdauer: 94, Teamgeist: 96 },
        walkoutVideo: "/players/luca.mp4",
    },
    {
        id: "player-clemens",
        name: "Clemens",
        position: "Verteidiger",
        number: 2,
        introduction:
            "Taktisch extrem klug und unermüdlich. Er schließt jede Lücke in unserer Defensive souverän.",
        stats: { Schnelligkeit: 80, Ausdauer: 95, Teamgeist: 94 },
        walkoutVideo: "/players/clemens.mp4",
    },
    {
        id: "player-dani",
        name: "Daniel",
        position: "Verteidiger",
        number: 16,
        introduction:
            "Hinten räumt er kompromisslos auf und nach vorne setzt er immer wieder gefährliche Nadelstiche.",
        stats: { Schnelligkeit: 93, Ausdauer: 86, Teamgeist: 90 },
        walkoutVideo: "/players/dani.mp4",
    },
    {
        id: "player-rene",
        name: "Rene",
        position: "Verteidiger",
        number: 3,
        introduction:
            "Der Kämpfer. Gibt in jedem Spiel alles und geht voran, wenn es hart auf hart kommt.",
        stats: { Schnelligkeit: 81, Ausdauer: 93, Teamgeist: 96 },
        walkoutVideo: "/players/rene.mp4",
    },
    // ── ROW 2: Mittelfeld → Stürmer → Torwart ────────────
    {
        id: "player-eli",
        name: "Elias",
        position: "Mittelfeld",
        number: 9,
        introduction:
            "Technisch versiert und mit einem Auge für den perfekten Pass. Still, aber tödlich effektiv.",
        stats: { Schnelligkeit: 79, Ausdauer: 91, Teamgeist: 95 },
        walkoutVideo: "/players/eli.mp4",
    },
    {
        id: "player-veit",
        name: "Veit",
        position: "Stürmer",
        number: 10,
        introduction:
            "Der Knipser. Kaltschnäuzig vor dem Tor und immer bereit, den Ball ins Netz zu hämmern.",
        stats: { Schnelligkeit: 90, Ausdauer: 85, Teamgeist: 93 },
        walkoutVideo: "/players/veit.mp4",
    },
    {
        id: "player-raphi",
        name: "Raphi",
        position: "Stürmer",
        number: 11,
        introduction:
            "Pfeilschnell und brandgefährlich. Wenn er den Ball hat, läuten bei den gegnerischen Abwehrspielern die Alarmglocken.",
        stats: { Schnelligkeit: 84, Ausdauer: 90, Teamgeist: 91 },
        walkoutVideo: "/players/raphi.mp4",
    },
    {
        id: "player-paul",
        name: "Paul",
        position: "Stürmer",
        number: 6,
        introduction:
            "Ein echter Instinktstürmer. Er steht immer goldrichtig im Strafraum und sorgt für pure Torgefahr.",
        stats: { Schnelligkeit: 77, Ausdauer: 89, Teamgeist: 92 },
        walkoutVideo: "/players/paul.mp4",
    },
    {
        id: "player-fabi",
        name: "Fabi",
        position: "Torwart",
        number: 1,
        introduction:
            "Unser sicherer Rückhalt zwischen den Pfosten. Mit seinen Reflexen hat er uns schon oft den Sieg gerettet.",
        stats: { Schnelligkeit: 75, Ausdauer: 88, Teamgeist: 99 },
        walkoutVideo: "/players/fabi.mp4",
    },
];

export const mockMatches: Match[] = [
    {
        id: "match-1",
        opponent: "FC Dynamo",
        date: "2026-03-15T15:00:00",
        location: "Heim",
        scoreHome: null,
        scoreAway: null,
        status: "upcoming",
        season: "2026",
    },
    {
        id: "match-2",
        opponent: "SV Rapid",
        date: "2026-03-08T14:00:00",
        location: "Auswärts",
        scoreHome: 3,
        scoreAway: 1,
        status: "completed",
        season: "2026",
    },
    {
        id: "match-3",
        opponent: "SC Adler",
        date: "2026-03-01T15:00:00",
        location: "Heim",
        scoreHome: 2,
        scoreAway: 2,
        status: "completed",
        season: "2026",
    },
];

export const mockNews: NewsArticle[] = [
    {
        id: "news-1",
        title: "Neuer Trikotsponsor für die Saison",
        date: "2026-02-27",
        tag: "Verein",
        excerpt:
            "Athletic Klub Lienz startet mit neuem Partner in die kommende Saison. Ein starkes Zeichen für die Zukunft unseres Vereins.",
    },
    {
        id: "news-2",
        title: "Derby-Sieg in der Nachspielzeit",
        date: "2026-02-26",
        tag: "Spielbericht",
        excerpt:
            "Ein dramatisches Spiel mit einem unvergesslichen Finale. Unser Team zeigt wahren Kampfgeist.",
    },
    {
        id: "news-3",
        title: "Sommerfest: Termin steht fest",
        date: "2026-02-24",
        tag: "Community",
        excerpt:
            "Die AKL-Familie feiert wieder! Alle Infos zum großen Sommerfest am Sportplatz.",
    },
];

// ============================================
// EXTERNAL SERVICE PLACEHOLDERS
// ============================================

export const ZAPIER_WEBHOOK_URL =
    process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL || "YOUR_ZAPIER_WEBHOOK_URL";

export const GOOGLE_MAPS_API_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_MAPS_API_KEY";

export const INSTAGRAM_EMBED_URL = "https://www.instagram.com/_athletic_binblau/";
