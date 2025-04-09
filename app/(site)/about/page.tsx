// Tools
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client"
import { Metadata } from 'next'

// Queries
import { AboutQuery } from '@/sanity/queries/documents/page-query'
import { SiteQuery } from '@/sanity/queries/documents/site-query'

// Components
import AboutPage from "@/components/about-single"
import { urlFor } from "@/components/sanity-image/url"
import { metadata as defaultMetadata } from '@/app/(site)/layout';

export const generateMetadata = async (): Promise<Metadata> => {
  const global = await client.fetch(SiteQuery);
  const page = await client.fetch(AboutQuery);

  // Check if seo exists
  if (global[0]?.seo) {
    const seoImage = page.seo.shareGraphic?.asset.url || global[0].seo.shareGraphic.asset.url;
    const result = {
      title: page.seo.metaTitle || global[0].seo.metaTitle || defaultMetadata.title,
      description: page.seo.metaDesc || global[0].seo.metaDesc || defaultMetadata.description,
      image: urlFor(seoImage).width(800).height(600).url(),
    };

    return {
      metadataBase: defaultMetadata.metadataBase,
      generator: 'Next.js',
		  applicationName: 'Jacob Byers | Frontend Engineer',
		  publisher: 'Jacob Byers',
      title: `${result.title} | Jacob Byers`,
      description: result.description,
      openGraph: {
        title: `${result.title} | Jacob Byers`,
        description: result.description,
        images: [
          {
            url: result.image,
            width: 1200,
            height: 630,
            alt: result.title,
          },
        ],
      },
    };
  }

  // Fallback to default metadata if no SEO data exists
  return defaultMetadata;
};

export default async function About() {
  const { data: page } = await sanityFetch({
    query: AboutQuery,
  });

  return (
    <>
			<AboutPage page={page} />
		</>
  );
}
