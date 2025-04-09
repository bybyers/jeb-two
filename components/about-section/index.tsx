'use client'

// Tools
import { useState } from 'react'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'

// Types
import { WorkType } from '@/types/documents/work-type'
import { PageType } from '@/types/documents/page-type'


// Components
import SanityImage from '../sanity-image'
import SimpleText from '../simple-text'


interface Props {
  page: PageType
}


export default function AboutSection({ page }: Props) {

  return (
    <section className="px-5 pt-[5rem] min-h-[calc(100vh-3.5rem)] flex flex-wrap gap-y-4 text-white w-full">
      test
    </section>
  )
}