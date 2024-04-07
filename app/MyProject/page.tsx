"use client"
import React, { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import SvgCircle from '@/components/icons/circle';
// Users Data
import projects from "@/data/index";


type projects = [id:number, project_h:string, description:string, project_image:string, href:string, stack:string]



const page = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <div className="flex flex-row flex-center max-container my-auto justify-center aligh-center h-[70vh]" >
      {projects?.map((project, index) => (
        project.id == currentIndex &&
        <div className="flex flex-row" key={index}>
          <div className="col-6 flex flex-col">
            <Link href={project.href}>
              <Image className="skrin project-image" src={project.project_image} alt="Project-Image" width={659} height={400} />
            </Link>
            <div className='flex flex-row m-auto my-3'>
            <SvgCircle width={30} height={30} viewBox="0 0 50 50" className={currentIndex == 1 ?"active-circle":"circle"}></SvgCircle>
            <SvgCircle width={30} height={30} viewBox="0 0 50 50" className={currentIndex == 2 ?"active-circle":"circle"}></SvgCircle>
            <SvgCircle width={30} height={30} viewBox="0 0 50 50" className={currentIndex == 3 ?"active-circle":"circle"}></SvgCircle>
            </div>
          </div>
          <div className="col-6 flex flex-col ml-10 h-[100%]">
            <h2 className="bold-52 w-[100%] flexStart">Проект:<span className="text-gradient mx-2">{project.project_h}</span></h2>
            <p className="regular-20 pt-5">{project.description}</p>
            <p className="stack bold-20 pt-10 pb-2 text-gradient">TECHNOLOGIES</p>
            <p className="regular-20 ">{project.stack}</p>

            <div className="absolute bottom-[34%]">
              <button className={`px-2`}
                onClick={() => {
                  if (currentIndex > 1) setCurrentIndex(currentIndex - 1)
                }} title="Previous">
                <Image src={"/Arrow Left.svg"} width={40} height={40} alt='Left arrow'></Image>
              </button>
              <button className={`px-2`}
                onClick={() => {
                  if (currentIndex < projects.length) setCurrentIndex(currentIndex + 1)
                }} title="Next">
                <Image src={"/Arrow Right.svg"} width={40} height={40} alt='Left arrow'></Image>
              </button>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default page