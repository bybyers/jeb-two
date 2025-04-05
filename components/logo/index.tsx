'use client'
import Image from 'next/image'
import Logo from '@/public/logo.png'

const JebLogo = () => {
	return <Image src={Logo.src} alt='Spotlight' width={24} height={24} />
}

export default JebLogo
