// Tools

// Types
import { PageType } from "@/types/documents/page-type"
import { WorkType } from "@/types/documents/work-type"

// Components
import Header from "@/components/header"
import Footer from "@/components/footer"
import Sections from "@/components/sections"
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
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* Render sections */}
        {/* <Sections body={sections} /> */}
        <HomeSection page={page} projects={work} />
        {/* Render works */}
  
      </main>
      {/* <Footer items={pageNav?.footer} /> */}
    </>
  )
}