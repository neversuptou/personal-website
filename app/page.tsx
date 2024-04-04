"use client"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const slash = "</>"
  return (
    <main>
      <div className="max-container flex flex-row">
        <div className="col-6 flexCenter">
          <div className="backh flex-col">
            <h2 className="bold-52 w-[100%] ">frontend<span className="bold-52 text-gradient"> developer {slash}</span></h2>
            <p className="py-12 mb-1 regular-18"> Меня зовут Данила, мне 23, и я разработчик с фокусом на frontend.
              Я постоянно стремлюсь к саморазвитию и следую передовым тенденциям в мире разработки.
              Я готов взяться за новые вызовы и принести свой вклад в проекты, а пока вы можете посмотреть, то что я уже сделал.</p> 
            <button className="gradient-border py-4 px-8 "><Link href={"/MyProject"}>Мои проекты</Link></button>
          </div>
        </div>
        <div className=" col-6 flex-col flexCenter">
          <Image src={"/photo-me.png"} alt='me' width={566} height={200} className=" mt-[-50px]" />
        </div>
      </div>
    </main >
  );
}
// align-items: center; /* Выравнивание элементов по вертикали */
//   justify-content: center; /* Выравнивание элементов по горизонтали */