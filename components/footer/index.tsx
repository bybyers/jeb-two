'use client'

// Tools
import Link from "next/link"
import { useEffect, useState } from "react"
import { client } from '@/sanity/lib/client'

// Types
import { NavigationType } from "@/types/documents/navigation-type"
import { SocialType } from "@/types/components/social-type"

// Queries
import { SiteQuery } from "@/sanity/queries/documents/site-query"

// Components




const Footer: React.FC<any> = () => {
  const [socials, setSocials] = useState<SocialType | null>(null)

  useEffect(() => {
		const fetchSocial = async () => {
			const data = await client.fetch(SiteQuery)
      const socials = data[0].social
			setSocials(socials)
		}

		fetchSocial()
	}, [])

  // set copywrite year
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className='flex justify-start px-5 py-3 my-10 md:my-0'>
      {socials?.linkedin && (
        <Link
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          LinkedIn
        </Link>
      )}
      {socials?.github && (
        <Link
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 hover:text-gray-300 transition-colors duration-300"
        >
          GitHub
        </Link>
      )}
    </footer>
  )
}

export default Footer