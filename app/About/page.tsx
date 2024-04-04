import TabsAbout from "@/components/tabsAbout"
import Image from "next/image"

const page = () => {
  return (
    <div>
      <Image src={"/photo-me.png"} alt='me' width={566} height={200} className="fif-img mt-[-50px] absolute" />
      <div className="max-container flex flex-row flexCenter h-[73vh]">
        <div className="col-8">
          <h2 className="bold-52">Немного<span className="text-gradient bold-52"> обо мне</span></h2>
          <p className="py-12 mb-1  regular-18">После окончания школы, очень хотелось окунуться в нору программирования и веб-разработки.<br />
            Но так сложилось, что удалось пройти курс по проектному менеджменту и я стал проджектом.<br />
            В настоящее время мое основное внимание разработке e-commerce проектов.<br />
            Мне очень нравится работа с кодом поэтому я успел за свое самообучение попробовать много разного.
          </p>
        </div>
        <div className="col-4 mt-[-275px]">
          <TabsAbout />
        </div>
      </div>
    </div>
  )
}

export default page