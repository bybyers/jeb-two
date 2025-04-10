'use client'

// Types
import { WorkType } from "@/types/documents/work-type"

// Components
import Footer from "@/components/footer"
import WorkSection from "@/components/work-section"
import Sections from "@/components/sections"

// Stop Caching
export const fetchCache = 'force-no-store'

interface WorkPageProps {
  page: WorkType
}

export default function WorkPage({ page }: WorkPageProps) {


  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <WorkSection page={page} />
        <Sections body={page.sections} />
      </main>
      <Footer />
    </>
  )
}