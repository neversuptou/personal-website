"use client"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const slash = "</>"
  return (
    <main className="height-[100vh]">
      <div className="max-container max-lg:mx-[50px] flex flex-row">
        <div className="lg:col-6 flexCenter align-center justify-center max-lg:mt-[150px]">
          <div className="backh flex-col ">
            <h2 className="bold-32 md:bold-52 w-[100%] ">frontend<span className="bold-30 md:bold-52 text-gradient"> developer {slash}</span></h2>
            <p className="py-12 mb-1 regular-18"> Меня зовут Данила, мне 23, и я разработчик с фокусом на frontend.
              Я постоянно стремлюсь к саморазвитию и следую передовым тенденциям в мире разработки.
              Я готов взяться за новые вызовы и принести свой вклад в проекты, а пока вы можете посмотреть, то что я уже сделал.</p> 
              <Link href={"/MyProject"}><button className="gradient-border py-4 px-8 ">Мои проекты</button></Link>
          </div>
        </div>
        <div className="max-lg:hidden col-6 flex-col flexCenter">
          <Image src={"/photo-me.png"} alt='me' width={566} height={200} className=" mt-[-50px]" />
        </div>
      </div>
    </main >
  );
}
