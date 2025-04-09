// Tools
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client"
import { Metadata } from 'next'

// Queries
import { WorkQuery, WorkPathsQuery } from '@/sanity/queries/documents/work-query'
import { SiteQuery } from '@/sanity/queries/documents/site-query'

//Types
import { WorkType } from "@/types/documents/work-type";

// Components
import { urlFor } from '@/components/sanity-image/url'
import { metadata as defaultMetadata  } from '@/app/(site)/layout'
import WorkPage from "@/components/work-single";

export async function generateStaticParams() {
	const pages = await client.fetch(WorkPathsQuery)

	return pages
}

type Props = {
	params: { slug: string }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
	const { params } = props
	const page = await client.fetch<WorkType>(WorkQuery, params)
	const global = await client.fetch(SiteQuery)

	const result = {
		noIndex: page.seo?.noIndex || false,
		title: page?.seo?.metaTitle
			? page.seo.metaTitle
			: page?.title
			? page.title
			: global?.[0]?.seo?.metaTitle || defaultMetadata.title,
		description: page.seo?.metaDesc
			? page.seo.metaDesc
			: global?.[0]?.seo?.metaDesc || defaultMetadata.description,
		keywords: page.seo?.metaKeys
			? page.seo.metaKeys
			: global?.[0]?.seo?.metaKeys || defaultMetadata.keywords,
		image: page.seo?.shareGraphic?.asset?.url
			? page.seo.shareGraphic.asset.url
			: global?.[0]?.seo?.shareGraphic?.asset?.url,
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
					url: urlFor(result.image).width(1200).height(630).url(),
					width: 1200,
					height: 630,
					alt: result.title,
				},
			],
		},
		alternates: {
			canonical: page.slug,
		},
	}
}

export default async function Work({ params }: { params: Props }){
  const page = await client.fetch(WorkQuery, params);


  return (
    <>
      <WorkPage page={page} />
    </>
  );
}