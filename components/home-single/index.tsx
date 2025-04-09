'use client'

// Types
import { PageType } from "@/types/documents/page-type"
import { WorkType } from "@/types/documents/work-type"

// Components
import Footer from "@/components/footer"
import HomeSection from "@/components/home-section"

// Stop Caching
export const fetchCache = 'force-no-store'

interface HomePageProps {
  page: PageType
  work: WorkType[]
}

export default function HomePage({ page, work }: HomePageProps) {

  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <HomeSection page={page} projects={work} />
      </main>
      <Footer />
    </>
  )
}