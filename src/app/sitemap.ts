import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE_URL = "https://www.athleticklublienz.com";

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/squad`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/history`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];
}
