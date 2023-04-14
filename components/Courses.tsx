'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'

import { courses } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { fadeIn, textVariant } from '@/utils/motion'
import uuid from 'react-uuid'
import Image from 'next/image'

type CourseCardType = {
	course: any
	index: number
}

const CourseCard = ({ course, index }: CourseCardType) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#1d1836',
				color: '#fff',
			}}
			contentArrowStyle={{ borderRight: '7px solid  #232631' }}
			date={course.quarter}
			iconStyle={{ background: course.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full relative'>
					<div className='w-[60%] h-[60%] object-cover relative'>
						<Image fill src={course.icon} alt={course.detail} />
					</div>
				</div>
			}>
			<div>
				<h3 className='text-white text-[24px] font-bold'>{course.title}</h3>
				<p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
					{course.detail}
				</p>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{course.points.map((point: string, index: number) => (
					<li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	)
}

const Courses = () => {
	return (
		<>
			<motion.div variants={textVariant(0.25)}>
				<h2 className='sectionHeadText text-center'>Learning Road Map</h2>
			</motion.div>

			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{courses.map((course, index) => (
						<CourseCard key={uuid()} course={course} index={index} />
					))}
				</VerticalTimeline>
			</div>
      
      <div className='mt-20'>
			<motion.div variants={textVariant(0.25)}>
				<p className='sectionSubText text-[24px] text-white-100 font-bold'>The Outcome for Participants of the Program</p>
			</motion.div>
			<motion.p variants={fadeIn('', '', 0.75 * 0.25, 1)} className='mt-1 text-secondary  leading-[30px]'>
				The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that
				are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering
				services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a
				fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by
				expanding software exports.
			</motion.p>
      </div>

      {/* <div className='mt-20'>
      <motion.div variants={textVariant(.1)}>
				<p className='sectionSubText'>Resources</p>
				<h2 className='sectionHeadText'>Quarter I </h2>
			</motion.div>
      </div> */}
		</>
	)
}

export default SectionWrapper(Courses, 'courses')
