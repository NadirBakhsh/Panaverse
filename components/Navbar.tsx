'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'

import { navLinks } from '@/constants'
import { logo, menu, close } from '@/assets'
import Image from 'next/image'
import uuid from 'react-uuid'

const Navbar = () => {
	const [active, setActive] = useState('')
	const [toggle, setToggle] = useState(false)

	return (
		<nav className={`padding w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
			<div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
				<Link
					href={'/'}
					className='flex items-center gap-2 '
					onClick={() => {
						setActive('')
						window.scrollTo(0, 0)
					}}>
					<div className='relative object-cover w-20 h-10'>
						<Image src={'/logo-white.png'} alt='logo' fill />
					</div>
				</Link>
				<ul className='flex-row hidden gap-10 list-none sm:flex'>
					{navLinks.map((nav) => (
						<li key={uuid()}>
							<Link
								onClick={() => {
									setActive(nav.title)
								}}
								className={`${
									nav.title === active ? 'text-white' : 'text-secondary'
								} hover:text-white text-[18px] cursor-pointer`}
								href={`#${nav.id}`}
								passHref>
								{nav.title}
							</Link>
						</li>
					))}
				</ul>

				<div className='flex items-center justify-end flex-1 sm:hidden'>
					<span className='relative object-contain w-8 h-8 cursor-pointer' onClick={() => setToggle(!toggle)}>
						<Image alt='menu' src={!toggle ? menu : close} fill />
					</span>
				</div>

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
					<ul className='flex flex-col items-start justify-end gap-4 list-none '>
						{navLinks.map((nav) => (
							<li key={uuid()}>
								<Link
									onClick={() => {
										setActive(nav.title)
										setToggle(!toggle)
									}}
									className={`${
										nav.title === active ? 'text-white' : 'text-secondary'
									} text-[16px] font-poppins font-medium  `}
									href={`#${nav.id}`}
									passHref>
									{nav.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
