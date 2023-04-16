import { About, Contact, Courses, Hero, Navbar, Team, StarsCanvas, Tech } from '@/components'
import Image from 'next/image'
import { heroBg } from '@/assets'

export default function Home() {
	return (
		<main className='relative z-0 bg-primary'>
			<div className='object-cover object-center relative'>
				<Image 
					src={heroBg}
					alt='heroImage'
					className='absolute z-0'
					fill
				/>
				<Navbar />
				<Hero />
			</div>
			<About />
			<Courses />
			<Tech />
			<Team />	
			<div className='relative z-0'>
				<Contact />
				<StarsCanvas />
			</div>
		</main>
	)
}
