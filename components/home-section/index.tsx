'use client'

import { useState } from 'react'
import Link from 'next/link'
import SanityImage from '../sanity-image'
import SimpleText from '../simple-text'
import { isMobile } from 'react-device-detect'

interface Props {
  projects: any[]
  page: {
    content: any
  }
}

export default function HomeSection({ projects, page }: Props) {
  const [current, setCurrent] = useState(0)
  const [greeting, setGreeting] = useState(true)

  return (
    <section className="px-5 pt-[5rem] min-h-[calc(100vh-3.5rem)] flex flex-wrap gap-y-4 text-white">
      {/* Left Panel */}
      <div className="md:w-3/5 w-full bg-gray-900 rounded-lg overflow-hidden min-h-[calc(100vh-26rem)] md:min-h-[calc(100vh-10rem)]">
        {greeting ? (
          <div className="text-2xl md:text-4xl h-full w-full p-5 grid content-center leading-[3rem] transition-opacity duration-700 opacity-100">
            <SimpleText content={page.content} />
          </div>
        ) : (
          <div className="w-full h-full relative">
            <div className="absolute z-30 w-full h-full grid content-center justify-center">
              <SanityImage
                source={projects[current].logo}
                alt={projects[current].logo.alt}
                width={projects[current].asset.metadata.dimensions.width}
                height={projects[current].asset.metadata.dimensions.height}
                componentIndex={0}
                className={
                  projects[current].orientation === 'banner'
                    ? 'w-[16rem] md:w-[30rem]'
                    : 'w-[14rem] md:w-[25rem]'
                }
                sizes='100vw'
              />
            </div>
            {projects[current].category === 'story' && (
              <div className="absolute w-full h-full grid justify-end content-around">
                <div className="bg-white p-2 translate-x-8 rotate-90 text-black">Case Study</div>
              </div>
            )}
            <div
              className={`
                ${projects[current].bgColor === true ? 'bg-white' : ''}
                'w-full h-full'
              `}
            >
              <SanityImage
                source={projects[current]}
                alt={projects[current].alt}
                width={projects[current].asset.metadata.dimensions.width}
                height={projects[current].asset.metadata.dimensions.height}
                componentIndex={0}
                className='object-cover object-center w-full'
                sizes='100vw'
              />
            </div>
          </div>
        )}
      </div>

      {/* Right Panel */}
      <div className="md:w-2/5 w-full grid md:pl-5 content-center">
        {projects.map((item, i) => (
          <Link href={`/work/${item.slug.current}`} key={i}>
            <div
              className="p-2 border-b overflow-hidden border-white text-2xl md:text-4xl w-full mb-2 hover:cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
              onMouseEnter={() => !isMobile && (setCurrent(i), setGreeting(false))}
              onMouseLeave={() => !isMobile && (setCurrent(0), setGreeting(true))}
            >
              <div className="flex gap-x-2 items-center">
                <SanityImage
                  source={item.thumbnail}
                  alt={item.thumbnail.alt}
                  width={24}
                  height={24}
                  componentIndex={0}
                  className='object-cover object-center w-full'
                  sizes='100vw'
                />
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
