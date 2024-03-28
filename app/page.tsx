"use client"
import Image from "next/image";
import Bgwrap from "@/components/bgwrap";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div className='max-container flex flex-row py-10 justify-between'>
        <div className="logo regular-64" id="home_anchor"><span className="font-extrabold">Danila </span><span className="font-extralight">Sereda</span></div>
        <ul className='flex flex-row'>
          <li>
            <Link href={"https://github.com/neversuptou"} className="flexCenter px-2"><Image src={"/gh-logo.svg"} alt='github' width={40} height={40} /></Link>
          </li>
          <li>
            <Link href={"https://vk.com/hikkanya"} className="flexCenter px-2"><Image src={"/vk-logo.svg"} alt='github' width={40} height={40} /></Link>
          </li>
        </ul>
      </div>
      <div className="max-container flex flex-row">
        <div className="col-6 flexCenter">
          <div className="backh flex-col">
            <span className="bold-52 w-[100%] ">frontend developer<br /></span>
            <p className="py-12 mb-1"> Меня зовут Данила, мне 23, и я разработчик с фокусом на frontend.
              Я постоянно стремлюсь к саморазвитию и следую передовым тенденциям в мире разработки.
              Я готов взяться за новые вызовы и принести свой вклад в проекты, а пока вы можете посмотреть, то что я уже сделал.</p> 
            <button className="gradient-border py-4 px-8 ">Мои проекты</button>
          </div>
        </div>
        <div className=" col-6 flex-col flexCenter">
          <Image src={"/photo-me.png"} alt='me' width={1557} height={200} className=" mt-[-50px]" />
        </div>
      </div>
    </main >
  );
}
// align-items: center; /* Выравнивание элементов по вертикали */
//   justify-content: center; /* Выравнивание элементов по горизонтали */