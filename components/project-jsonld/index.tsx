'use client'

import Script from 'next/script'

interface Props {
  project: {
    title: string
    slug?: string
    url?: string
    seo?: {
      metaDesc?: string
      metaTitle?: string
      shareGraphic?: {
        asset?: {
          url?: string
        }
      }
    }
    _createdAt: string
    releaseDate?: string
    defaultImage?: {
      asset?: {
        url?: string
      }
      alt?: string
    }
    credits?: { name: string; job?: string }[]
  }
}

const ProjectJsonLd = ({ project }: Props) => {
  if (!project) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.seo?.metaTitle || project.title,
    url: `https://jacobbyers.me/work/${project.slug || ''}`,
    image:
      project.seo?.shareGraphic?.asset?.url ||
      project.defaultImage?.asset?.url ||
      undefined,
    description: project.seo?.metaDesc,
    dateCreated: project._createdAt,
    datePublished: project.releaseDate,
    creator: project.credits?.length
      ? project.credits.map((credit) => ({
          '@type': 'Person',
          name: credit.name,
          jobTitle: credit.job || undefined,
        }))
      : {
          '@type': 'Person',
          name: 'Jacob Byers',
        },
  }

  return (
    <Script
      id="project-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default ProjectJsonLd