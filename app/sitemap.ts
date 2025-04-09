import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { HomeSiteMapQuery } from '@/sanity/queries/documents/page-query';
import { AboutSiteMapQuery } from '@/sanity/queries/documents/page-query';
import { WorkSiteMapQuery } from '@/sanity/queries/documents/work-query';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'https://jacobbyers.me/';

async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const HomeSlug = await client.fetch(HomeSiteMapQuery);
  const AboutSlug = await client.fetch(AboutSiteMapQuery);
  const WorkSlugs = await client.fetch(WorkSiteMapQuery);

  const pages = [
    {
      url: `${URL}`,
      lastModified: HomeSlug._updatedAt,
      priority: 1,
    },
    {
      url: `${URL}about`,
      lastModified: AboutSlug._updatedAt,
      priority: 0.8,
    },
  ];

  const works = WorkSlugs.map((work: { slug: string; _updatedAt: string }) => ({
    url: `${URL}work/${work.slug}`,
    lastModified: work._updatedAt,
    priority: 0.6,
  }));

  return [...pages, ...works];
}

export default generateSitemap;