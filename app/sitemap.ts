import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://livstylehomes.com/',
            lastModified: new Date('2025-05-23'),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://livstylehomes.com/about',
            lastModified: new Date('2025-05-23'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://livstylehomes.com/contact',
            lastModified: new Date('2025-05-23'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://livstylehomes.com/gallery',
            lastModified: new Date('2025-05-23'),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://livstylehomes.com/services',
            lastModified: new Date('2025-05-23'),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];
}
