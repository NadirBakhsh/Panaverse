import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Tech } from '@/components'

export default function Home() {
	return (
		<main className='relative z-0 bg-primary'>
			<div className='bg-center bg-no-repeat bg-cover bg-[url("../assets/heroBg.png)"]'>
				<Navbar />
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<Feedbacks />
			<div className='relative z-0'>
				<Contact />
				<StarsCanvas />
			</div>
		</main>
	)
}
