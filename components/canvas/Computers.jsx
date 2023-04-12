'use client'
import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Html } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf')
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<pointLight intensity={1} />
			<spotLight position={[-20, 50, 10]} angle={0.12} intensity={1} castShadow shadow-mapSize={1024} />
			{console.log('isMobile', isMobile)}
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.69 : 0.75}
				position={isMobile ? [0, -2.8, -2.18] : [0, -3.5, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	)
}

const ComputerCanvas = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)')

		setIsMobile(mediaQuery.matches)

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches)
		}

		mediaQuery.addEventListener('change', handleMediaQueryChange)

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange)
		}
	}, [])

	return (
		<Suspense fallback={<CanvasLoader />}>
			<br />
			<Canvas
				frameloop='demand'
				shadows
				camera={{
					position: [20, 3, 5],
					fov: 25,
				}}
				gl={{
					preserveDrawingBuffer: true,
				}}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Computers isMobile={isMobile} />
				<Preload all />
			</Canvas>
		</Suspense>
	)
}

export default ComputerCanvas
