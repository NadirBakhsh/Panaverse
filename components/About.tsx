'use client'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { services } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import Link from 'next/link'
import uuid from 'react-uuid'
import Image from 'next/image'
import { SectionWrapper } from '@/hoc'

type ServiceCardType = { title: string; icon: any; index: number}

const ServiceCard = ({ title, icon, index }: ServiceCardType) => {
	return (
		<Tilt
			options={{
				max: 45,
				scale: 1,
				speed: 100,
				transition: true,
				easing: 'cubic-bezier(.03,.98,.52,.99)',
			}}
			className='xs:w-[240px] w-full'>
			<motion.div
				initial='hidden'
				whileInView={'show'}
				viewport={{once: true, amount: .75}}
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card relative'>
				<div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative'>
					<Image src={icon} alt={title} width={64} height={64} className='object-contain' />
					<h1 className='font-bold text-white text-[20px] text-center '>{title}</h1>
				</div>
			</motion.div>
		</Tilt>
	)
}

const About = () => {
	return (
		<>
			<motion.div variants={textVariant(0.25)}>
				<p className='sectionSubText'>Introduction</p>
				<h2 className='sectionHeadText'>Overview.</h2>
			</motion.div>
			<motion.p variants={fadeIn('', '', 0.75 * 0.25, 1)} className='mt-4 text-secondary  leading-[30px]'>
				The internet is without a doubt the most important technological development in human history. Web3 and
				metaverse technologies expand the internet as we know it by introducing novel features and advancements.
				Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud
				computing, voice computing, ambient computing, and more.
			</motion.p>
			<motion.p variants={fadeIn('', '', 0.75 * 0.5, 1)} className='mt-4 text-secondary  leading-[30px]'>
				Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used
				to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a
				March 2022{' '}
				<Link
					className='text-white-100'
					target='_blank'
					href={'https://www.citivelocity.com/citigps/metaverse-and-money/'}
					passHref>
					research paper
				</Link>{' '}
				that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people
				by 2030.
			</motion.p>

			<motion.div variants={textVariant(.50)} className='mt-6'>
				<p className='sectionSubText text-[#915eff] font-medium'>The Program in a Nutshell: Earn While You Learn</p>
			</motion.div>
			<motion.p variants={fadeIn('', '', 0.75 * 0.75, 1)} className='mt-1 text-secondary  leading-[30px]'>
				In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom
				and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate
				venture and an educational project.
			</motion.p>

			<motion.div variants={textVariant(75)} className='mt-6'>
				<p className='sectionSubText text-[#915eff] font-medium'>Program of Studies</p>
			</motion.div>
			<motion.p variants={fadeIn('', '', 0.75 * 1, 1)} className='mt-1 text-secondary  leading-[30px]'>
				This curriculum is intended for beginners who want to learn software development from the ground up. The first
				two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and
				cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both
				onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on
				learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on
				weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite
				classes complemented by online Zoom laboratories and recorded videos.
			</motion.p>

			<div className='flex flex-wrap gap-10 w-full justify-center mt-20'>
				{services.map((service, index) => (
					<ServiceCard key={uuid()} index={index} {...service} />
				))}
			</div>
		</>
	)
}

export default SectionWrapper(About, 'about')
