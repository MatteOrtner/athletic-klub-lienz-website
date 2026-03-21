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
        title: "Das Team",
        description:
            "Wir sind eine bunt gemischte Truppe aus Lienz und Umgebung. Uns verbindet vor allem eins: Wir verbringen gerne Zeit zusammen auf und neben dem Platz.",
    },
    {
        icon: "Zap",
        title: "Der Fußball",
        description:
            "Gespielt wird auf dem Kleinfeld. Keine hochkomplexe Taktik, kein Profi-Anspruch – einfach ehrlicher Amateur-Fußball mit Freunden.",
    },
    {
        icon: "Users",
        title: "Neben dem Platz",
        description:
            "Nach dem Schlusspfiff geht's entspannt weiter. Ob nach dem Match, bei gemeinsamen Grillabenden oder Vereinsausflügen – die Gemeinschaft zählt.",
    },
];

// ============================================
// NAVIGATION
// ============================================

export const navItems = [
    { label: "Home", href: "/#hero" },
    { label: "Über uns", href: "/#about" },
    { label: "Match Center", href: "/#bento" },
    // { label: "Standort", href: "/#location" },
    { label: "Kader", href: "/squad" },
    { label: "Historie", href: "/history" },
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
        stats: { Schnelligkeit: 85, Ausdauer: 89, Teamgeist: 97 },
        walkoutVideo: "/players/matte.mp4",
    },
    {
        id: "player-luca",
        name: "Luca",
        position: "Verteidiger",
        number: 19,
        introduction:
            "Souverän und abgeklärt in der Defensive. Mit seiner Übersicht leitet er unsere Angriffe schon von hinten ein.",
        stats: { Schnelligkeit: 95, Ausdauer: 96, Teamgeist: 99 },
        walkoutVideo: "/players/luca.mp4",
    },
    {
        id: "player-clemens",
        name: "Clemens",
        position: "Verteidiger",
        number: 2,
        introduction:
            "Taktisch extrem klug und unermüdlich. Er schließt jede Lücke in unserer Defensive souverän.",
        stats: { Schnelligkeit: 83, Ausdauer: 88, Teamgeist: 87 },
        walkoutVideo: "/players/clemens.mp4",
    },
    {
        id: "player-dani",
        name: "Daniel",
        position: "Verteidiger",
        number: 16,
        introduction:
            "Hinten räumt er kompromisslos auf und nach vorne setzt er immer wieder gefährliche Nadelstiche.",
        stats: { Schnelligkeit: 93, Ausdauer: 90, Teamgeist: 93 },
        walkoutVideo: "/players/dani.mp4",
    },
    {
        id: "player-rene",
        name: "Rene",
        position: "Verteidiger",
        number: 3,
        introduction:
            "Der Kämpfer. Gibt in jedem Spiel alles und geht voran, wenn es hart auf hart kommt.",
        stats: { Schnelligkeit: 82, Ausdauer: 84, Teamgeist: 88 },
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
        stats: { Schnelligkeit: 97, Ausdauer: 98, Teamgeist: 97 },
        walkoutVideo: "/players/eli.mp4",
    },
    {
        id: "player-veit",
        name: "Veit",
        position: "Mittelfeld",
        number: 10,
        introduction:
            "Der Knipser. Kaltschnäuzig vor dem Tor und immer bereit, den Ball ins Netz zu hämmern.",
        stats: { Schnelligkeit: 96, Ausdauer: 91, Teamgeist: 95 },
        walkoutVideo: "/players/veit.mp4",
    },
    {
        id: "player-raphi",
        name: "Raphi",
        position: "Stürmer",
        number: 11,
        introduction:
            "Pfeilschnell und brandgefährlich. Wenn er den Ball hat, läuten bei den gegnerischen Abwehrspielern die Alarmglocken.",
        stats: { Schnelligkeit: 87, Ausdauer: 82, Teamgeist: 94 },
        walkoutVideo: "/players/raphi.mp4",
    },
    {
        id: "player-paul",
        name: "Paul",
        position: "Stürmer",
        number: 6,
        introduction:
            "Ein echter Instinktstürmer. Er steht immer goldrichtig im Strafraum und sorgt für pure Torgefahr.",
        stats: { Schnelligkeit: 89, Ausdauer: 88, Teamgeist: 93 },
        walkoutVideo: "/players/paul.mp4",
    },
    {
        id: "player-fabi",
        name: "Fabi",
        position: "Torwart",
        number: 1,
        introduction:
            "Unser sicherer Rückhalt zwischen den Pfosten. Mit seinen Reflexen hat er uns schon oft den Sieg gerettet.",
        stats: { Schnelligkeit: 79, Ausdauer: 81, Teamgeist: 86 },
        walkoutVideo: "/players/fabi.mp4",
    },
];



export const mockNews: NewsArticle[] = [
    {
        id: "news-1",
        title: "Eine neue Ära: Aus ATHLETIC BINBLAU wird ATHLETIC KLUB LIENZ",
        date: "2026-03-09",
        tag: "Verein",
        excerpt:
            "Der nächste große Schritt für unseren Verein: Mit einem neuen Namen und klaren Zielen starten wir in die Zukunft.",
        content: "Wir sind unglaublich stolz darauf, den nächsten großen Schritt in der Vereinsgeschichte bekannt zu geben: Aus ATHLETIC BINBLAU wird ab sofort der ATHLETIC KLUB LIENZ!\n\nDieser Name spiegelt unsere tiefe Verbundenheit zu Lienz in Osttirol wider und zeigt ganz klar, wer wir sind: Eine Gemeinschaft, die zusammenhält, egal ob auf oder neben dem Platz.\n\nDanke an alle, die uns auf dieser Reise begleitet haben. Die Zukunft gehört dem AKL!"
    },
    {
        id: "news-2",
        title: "Der Ball rollt wieder: Trainingsauftakt",
        date: "2026-03-15",
        tag: "Verein",
        excerpt:
            "Die Winterpause ist vorbei. Die ersten Einheiten auf dem Platz stecken dem ein oder anderen noch in den Knochen.",
        content: "Es geht wieder los! Nach einer langen fußballfreien Zeit stehen wir endlich wieder regelmäßig auf dem Platz. Die ersten Ballberührungen waren vielleicht noch etwas holprig und der Muskelkater danach absolut brutal – aber genau das hat gefehlt.\n\nDer aktuelle Fokus liegt voll darauf, die nötige Grundfitness wiederzufinden und den Spaß am Spiel aufrechtzuerhalten. Wir treffen uns jetzt wieder wöchentlich, um für die kommenden Wochen gewappnet zu sein. Jeder, der mal beim Training zuschauen möchte, ist am Platz immer willkommen!"
    },
    {
        id: "news-3",
        title: "Nächster Halt: Pfingstturnier in Obertilliach",
        date: "2026-03-20",
        tag: "Spiele",
        excerpt:
            "Am 24. Mai 2026 steht unser erstes großes Highlight der Saison an: Das Pfingstturnier in Obertilliach.",
        content: "Das erste richtig dicke Kreuz im Kalender für dieses Jahr ist gesetzt: Am 24. Mai 2026 geht es für den AKL zum legendären Pfingstturnier nach Obertilliach!\n\nDieses Turnier ist für uns immer ein echtes Saison-Highlight. Wir freuen uns auf starke regionale Gegner, eine geniale Kulisse im Lesachtal und natürlich auf eine überragende Stimmung neben dem Platz. Die Motivation im Team ist riesig und wir wollen dort definitiv eine gute Figur abgeben.\n\nWir hoffen, dass uns der ein oder andere Fan nach Obertilliach begleitet und am Spielfeldrand unterstützt. Drückt uns die Daumen!"
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
