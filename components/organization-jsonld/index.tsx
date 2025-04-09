'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { SiteQuery } from '@/sanity/queries/documents/site-query'
import Logo from '@/public/logo.png'

const OrgJsonLd = () => {
  const [jsonLdContent, setJsonLdContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(SiteQuery)
      if (data && data.length > 0) {
        const siteData = data[0]

        const jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Person',
          "jobTitle": "Frontend Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Self-Employed"
          },  
          name: siteData.title,
          alternateName: siteData.altTitle,
          image: 'https://cdn.sanity.io/images/w9zn3gtf/production/d9b9e38a3a52dd3cc051b0cf37e5e7e212f87e13-1200x630.jpg',
          url: 'https://jacobbyers.me/',
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteData.addressLocality,
            addressRegion: siteData.addressRegion,
            addressCountry: siteData.addressCountry,
          },
          contactPoint: {
            '@type': 'ContactPoint',
            email: siteData.email,
            "contactType": "customer support"
          },
          sameAs: [
            siteData.social?.linkedin,
            siteData.social?.github,
          ],
          description: siteData.seo?.metaDesc,
        }

        setJsonLdContent(JSON.stringify(jsonLd))
      } else {
        console.log('No data received from fetch')
      }
    }

    fetchData()
  }, [])

  return jsonLdContent ? (
    <Script
      id="app-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdContent }}
    />
  ) : null
}

export default OrgJsonLd