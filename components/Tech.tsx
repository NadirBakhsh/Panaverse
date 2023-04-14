"use client"
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "@/hoc" 
import { technologies } from "@/constants"
import uuid from "react-uuid"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {
        technologies.map((technology) => (
          <>
          <div className="w-28 h-28" key={uuid()}>
            {technology.icon && <BallCanvas icon={technology.icon} />}
          </div>
          </>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, '')