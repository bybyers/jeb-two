import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
	return (
		<main className='flex h-screen flex-col items-center justify-center space-y-5 text-center'>
			<h1 className='text-4xl'>Looks like you found a black hole</h1>
			<p>Let’s get you back on track</p>
			<Button>
				<Link href='/'>Go back home</Link>
			</Button>
		</main>
	)
}