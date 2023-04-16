'use client'
import { fadeIn, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/hoc'
import { Tilt } from 'react-tilt'
import { projects } from '@/constants'
import uuid from 'react-uuid'
import Image from 'next/image'
import { github } from '@/assets'
import Link from 'next/link'

type TeamCardType = {
	name: string
	description: string
	tags: any,
	image: any
	source_code_link: string
	index: number
}

const TeamCard = ({ name, description, tags, image, source_code_link, index }: TeamCardType) => {
	return (<motion.div variants={fadeIn('up', 'spring', index * 0.25, 0.75)}>
    <Tilt options={{
      max: 45,
      scale: 1,
      speed: 450,

    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
    >
      <div className='relative w-full h-[230px]'>
          <Image alt={name} src={image} fill />
      <div className='absolute inset-0 flex justify-end card-img_hover'>
          <Link href={source_code_link} target='_blank'>
          <span className='black-gradient object-contain w-10 h-10 rounded-full relative flex justify-center items-center cursor-pointer m-3'>
              <Image src={github} alt={source_code_link} fill  />
          </span>
          </Link>
      </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-2xl'>{name}</h3>
        <p className='mt-2 text-secondary text-sm'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag: any) => (
            <p key={uuid()} className={tag.color}>#{tag.name}</p>  
        ))}

      </div>

    </Tilt>
  </motion.div>)
}

const Team = () => {
	return (
		<>
			<div className='mt-10'>
				<motion.div variants={textVariant(0.25)}>
					<p className='sectionSubText text-[32px] text-white-100 font-bold'>Our Team</p>
				</motion.div>
				<motion.p variants={fadeIn('down', '', 0.75 * 0.25, 1)} className='mt-1 text-secondary  leading-[30px]'>
					Your team boasts a wealth of experience in the IT industry, with each member possessing a minimum of 20 years'
					worth of knowledge and expertise. Such extensive experience translates into a deep understanding of the field,
					including its trends, challenges, and opportunities.
				</motion.p>
			</div>
			<div className='mt-20 flex-wrap flex w-full gap-5'>
				{projects.map((project, index) => (
					<TeamCard key={index} {...project} index={index} />
				))}
			</div>
		</>
	)
}

export default SectionWrapper(Team, 'team')
