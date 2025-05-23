'use client'

// Types
import { PageType } from "@/types/documents/page-type"

// Components
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"

// Stop Caching
export const fetchCache = 'force-no-store'

interface AboutPageProps {
  page: PageType
}

export default function AboutPage({ page }: AboutPageProps) {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <AboutSection page={page} />
      </main>
      <Footer />
    </>
  )
}