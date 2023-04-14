import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	tsIcon,
	webIcon,
	blockIcon,
  alIcon,
  cloudIcon,
  iotIcon,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'Web 2.0 Development',
		icon: web,
	},
	{
		title: 'Web 3.0 Development',
		icon: mobile,
	},
	{
		title: 'Cloud Computing',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
]

const courses = [
	{
		title: 'OOP Using Typescript',
		detail: 'Common in All Specializations',
		icon: tsIcon,
		iconBg: '#383E56',
		quarter: 'Quarter I (Core) CS-101',
		points: [
			'Every participant of the program will start by completing the following two core courses:',
			'TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.',
			'TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.',
			'TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.',
		],
	},
	{
		title: 'Web 2.0 Development',
		detail: 'Scale Web Apps',
		icon: webIcon,
		iconBg: '#383E56',
		quarter: 'Quarter II (Core) W2-201',
		points: [
			'Developing planet-scale web 2.0 serverless cloud apps and APIs',
			'Using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
			'Developers can create web applications that can scale automatically to meet the demands of large user bases',
			'It provides developers with the tools and frameworks they need to build highly available, resilient, and scalable applications for a global user base.',
		],
	},
	{
		title: 'Blockchain & Metaverse',
		detail: `This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and
      Metaverse experiences for the next generation of the internet by specializing in building
      worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D
      metaverse client experiences.`,
		icon: blockIcon,
		iconBg: '#383E56',
		quarter: 'Quarter III (W3-351) and IV (MV-361)',
		points: [
			`Quarter III
        W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps`,
			`Quarter IV
        MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
        Experiences`,
		],
	},
	{
		title: 'AI & DL Specialization',
		detail: `The AI and Deep Learning specialization focuses on building and deploying intelligent APIs
    using OpenAI models and building custom Deep Learning Tensorflow models.`,
		icon: alIcon,
		iconBg: '#ece',
		quarter: 'Quarter III (AI-351) and IV (AI-361) ',
		points: [
			`Quarter III
      AI-351: Developing Planet-Scale Intelligent APIs and Python Programming`,
			`Quarter IV
      AI-361: Deep Learning and MLOps`,
		],
	},
	{
		title: 'Cloud Computing',
		detail: `The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK
    for Kubernetes.`,
		icon: cloudIcon,
		iconBg: '#383E56',
		quarter: 'Quarter III (CN-351) and IV (CN-361) ',
		points: [
			`Quarter III
      CN-351: Certified Kubernetes Application Developer (CKAD)`,
			`Quarter IV
      CN-361: Developing Multi-Cloud APIs using CDK for Terraform`,
		],
	},
	{
		title: 'Ambient & IoT Specialization',
		detail: `The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices,
    Factories, and Cities using Voice computing, Matter and Embedded Devices.`,
		icon: iotIcon,
		iconBg: '#ece',
		quarter: 'Quarter III (AC-351) and IV (AC-361) ',
		points: [
			`Quarter III
      AC-351: Ambient Computing with Voice Assistants and Matter Devices`,
			`Quarter IV
      AC-361: Embedded Programming using C and Rust`,
		],
	},
]



const testimonials = [
	{
		testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
]

const projects = [
	{
		name: 'Car Rent',
		description:
			'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: carrent,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Job IT',
		description:
			'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: jobit,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Trip Guide',
		description:
			'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'supabase',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: tripguide,
		source_code_link: 'https://github.com/',
	},
]

export { services, technologies, courses, testimonials, projects }
