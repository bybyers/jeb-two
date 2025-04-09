'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { AboutQuery } from '@/sanity/queries/documents/page-query'

const AboutPageJsonLd = () => {
  const [jsonLdContent, setJsonLdContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const about = await client.fetch(AboutQuery)

      if (!about) return

      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: about.title || 'About',
        url: 'https://jacobbyers.me/about',
        description:
          about.seo?.metaDesc ||
          'About page for Jacob Byers, Frontend Engineer specializing in composable architecture and modern frameworks.',
        image:
          about.heroImage?.asset?.url ||
          'https://cdn.sanity.io/images/w9zn3gtf/production/d9b9e38a3a52dd3cc051b0cf37e5e7e212f87e13-1200x630.jpg',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://jacobbyers.me/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'About',
              item: 'https://jacobbyers.me/about',
            },
          ],
        },
        "author": {
          "@type": "Person",
          "name": "Jacob Byers",
          "url": "https://jacobbyers.me/"
        },
        "inLanguage": "en"
      }

      setJsonLdContent(JSON.stringify(jsonLd))
    }

    fetchData()
  }, [])

  return jsonLdContent ? (
    <Script
      id="about-page-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  ) : null
}

export default AboutPageJsonLd