// Tools
import { SanityDocument } from "next-sanity"

// Components
import Header from "@/components/header"
import Footer from "@/components/footer"
import Sections from "@/components/sections"


// Stop Caching
export const fetchCache = 'force-no-store';



export default function HomePage({ page }: { page: SanityDocument }) {
  const { pageNav, sections } = page

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">

        {/* <Sections body={sections} /> */}
      </main>
      {/* <Footer items={pageNav?.footer} /> */}
    </>
  )
}