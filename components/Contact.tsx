'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
	const formRef = useRef(null)
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [loading, setLoading] = useState(false)

	const handleChange = (e: any) => {}

	const handleSubmit = (e: any) => {}

	return (
		<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
			<motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[.75] bg-black-100 p-8 rounded-2xl'>
				<p className={'sectionSubText'}>Get in touch</p>
				<h3 className={'sectionHeadText'}>Contact.</h3>
				<form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Name</span>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder='What your name?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Email</span>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder='What your email?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>What do you want to say?</span>
						<textarea
							rows={7}
							name='message'
							value={form.message}
							onChange={handleChange}
							placeholder='What your message?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

						/>
					</label>
          <button className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary' type='submit'>
            {loading ? 'Sending...' : 'send'}
          </button>
				</form>
			</motion.div>
			<motion.div>
			
      </motion.div>

		</div>
	)
}

export default SectionWrapper(Contact, 'contact')
