'use client'

import Script from 'next/script'

const HomePageJsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Jacob Byers | Frontend Engineer',
    url: 'https://jacobbyers.me/',
    description:
      'Portfolio of Jacob Byers, a frontend engineer with a passion for building user-friendly web applications. Explore my projects and skills in React, Next.js, and more.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://jacobbyers.me/',
        },
      ],
    },
  }

  return (
    <Script
      id="home-page-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default HomePageJsonLd