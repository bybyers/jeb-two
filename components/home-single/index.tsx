// Tools

// Types
import { PageType } from "@/types/documents/page-type"
import { WorkType } from "@/types/documents/work-type"
import { SocialType } from "@/types/components/social-type"

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

  console.log('page', page)

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between">
        <HomeSection page={page} projects={work} />
      </main>
      <Footer />
    </>
  )
}