"use client"
import SvgCircle from '@/components/icons/circle';
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
// Nulls Data
import data from "@/data/nulls.js";



type data = [id:number, author_name:string, description:string, author_image:string]


const nulls = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    return (
        <div className='flex flex-col max-container h-[70vh]'>
            <h2 className='bold-52 w-[100%] flex justify-center '>Что говорят <span className='text-gradient bold-52]'>клиенты</span></h2>
            {data?.map((otziv, index) => (
        otziv.id == currentIndex &&
        <div className="flex flex-row justify-center" key={index}>
          <div className=" flex flex-col">
              <Image className="" src={otziv.author_image} alt="Project-Image" width={200} height={200} />
          </div>
          <div className="col-6 flex flex-col ml-10 h-[100%]">
            <h2 className="bold-52 w-[100%] text-gradient flexStart">{otziv.author_name}</h2>
            <p className="regular-20 pt-5">{otziv.description}</p>

            <div className="absolute my-3 left-[43%] bottom-[37%] ">
              <button className={`px-2`}
                onClick={() => {
                  if (currentIndex > 1) setCurrentIndex(currentIndex - 1)
                }} title="Previous">
                <Image src={"/Arrow Left.svg"} width={40} height={40} alt='Left arrow'></Image>
              </button>
              <button className={`px-2`}
                onClick={() => {
                  if (currentIndex < data.length) setCurrentIndex(currentIndex + 1)
                }} title="Next">
                <Image src={"/Arrow Right.svg"} width={40} height={40} alt='Left arrow'></Image>
              </button>
            </div>
          </div>
          <div className='flex flex-row absolute left-[44%] bottom-[34%]'>
            <SvgCircle width={30} height={30} viewBox="0 0 50 50" className={currentIndex == 1 ?"active-circle":"circle"}></SvgCircle>
            <SvgCircle width={30} height={30} viewBox="0 0 50 50" className={currentIndex == 2 ?"active-circle":"circle"}></SvgCircle>
            <SvgCircle width={30} height={30} viewBox="0 0 50 50" className={currentIndex == 3 ?"active-circle":"circle"}></SvgCircle>
            </div>
        </div>
      ))}
        </div>
    )
}

export default nulls;