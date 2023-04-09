'use client'
import { useProgress } from '@react-three/drei'

const Loader = () => {
	const { progress } = useProgress()
	console.log(progress.toFixed(2))
	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<div className='mt-8 flex justify-center flex-col items-center'>
				<span className='canvas-loader'></span>
				<p className='tex-base text-white font-bold mt-10'>{progress.toFixed(2)}</p>
			</div>
		</div>
	)
}

export default Loader
