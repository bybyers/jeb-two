'use client'

// Tools
import Image from "next/image"
import Link from "next/link"
import { motion, useCycle } from "framer-motion"
import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

// Types
import { NavigationType } from "@/types/documents/navigation-type"

// Components
import Logo from '@/public/logo.png'
import Nav from "@/components/navigation"
import MenuButton from "@/components/header/menu-button"
import MobileNav from "@/components/navigation/mobile"

interface HeaderProps {
  items: NavigationType
}

interface Dimension {
  width: number
  height: number
}

const Header: React.FC<HeaderProps> = ({
  items
}) => {
  const [isOpen, toggleDropdown] = useCycle(false, true)
  const targetRef = useRef<HTMLButtonElement>(null)
  const [dimensions, setDimensions] = useState<Dimension>({
    width: 0,
    height: 0,
  })
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      })
    }
  }, [])

  const closeMenu = () => {
    toggleDropdown();
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header 
        ref={targetRef}
        className='sticky top-0 z-50 w-full flex justify-center pt-10 pb-4 mb-12 bg-background'
      >
        <div className={`flex ${items ? 'lg:flex-col gap-y-5 lg:gap-y-10  items-center justify-between px-5 md:pb-10 lg:pb-0 lg:pr-10' : 'justify-center'} w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl`}>
          <Link href='/' className='w-24 lg:w-auto' onClick={handleLogoClick}>
            <Image src={Logo} alt='Logo' width={190} height={190} />
          </Link>
          <div className='hidden lg:block'>
            {items && (
              <Nav data={items} />
            )}
          </div>
          <div className='block lg:hidden'>
            <MenuButton
              onClick={toggleDropdown}
              isOpen={isOpen}
              defaultColor='#ffffff'
            />
          </div>
        </div>
      </header>
      <motion.div
        initial={'closed'}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
        variants={{
          closed: {
            y: '-100%',
            opacity: 0,
          },
          open: {
            y: 0,
            opacity: 1,
          },
        }}
        style={{
          paddingTop: dimensions.height,
        }}
        className='fixed left-0 top-0 z-30 flex h-screen w-full flex-col items-center overflow-scroll bg-background px-5 text-center xl:hidden'
      >
        <hr className='border-thin w-full border-white' />
        <MobileNav data={items} closeMenu={closeMenu} />
      </motion.div>
    </>
  )
}

export default Header
