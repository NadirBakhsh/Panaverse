'use client'
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'
import Link from 'next/link'

const Hero = () => {
	return (
		<section className='relative w-full h-screen mx-auto z-10'>
			<div className=' absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
				<div className='flex flex-col justify-center items-center mt-5 pl-6 sm:pl-0'>
					<div className='w-6 h-6 rounded-full bg-[#915eff]' />
					<div className='w-1 h-40 sm:h-80 violet-gradient' />
				</div>

				<div className=''>
					<h1 className='heroHeadText'>
						Panaverse <span className='text-[#915eff]'>DAO</span>
					</h1>
					<p className='heroSubText mt-2 text-white-100 pr-6 sm:pr-0'>
						Become a certified web 3.0 and metaverse <br className='sm:block hidden' /> developer through a one-year
						earn as you <br className='sm:block hidden' /> learn program with Panaverse DAO.
					</p>
				</div>
			</div>
			<ComputersCanvas />

			<div className='absolute  bottom-20 sm:bottom-6 w-full flex justify-center items-center'>
				<Link href={`#about`}>
					<div className='w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-center p-2'>
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
							className='w-3 h-3 rounded-full bg-secondary'
						/>
					</div>
				</Link>
			</div>
		</section>
	)
}

export default Hero
