import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://livstylehomes.com/',
            lastModified: new Date('2024-11-27'),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://livstylehomes.com/about',
            lastModified: new Date('2024-11-27'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://livstylehomes.com/contact',
            lastModified: new Date('2024-11-27'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://livstylehomes.com/gallery',
            lastModified: new Date('2024-11-27'),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];
}
