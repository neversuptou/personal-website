import Link from "next/link";
import Image from "next/image";

const Contacts = () => {
  return (
    <div className='w-full h-full max-container'>
      <div className='flex flex-row justify-center items-center'>
        <div className='col-4 flex flex-col'>
          <div className="w-[80%] h-[200px] flex flex-col justify-center items-center">
            <Image src="/mail.svg" alt="mail" width={30} height={30} />
            <span>Email</span>
            <p>loreipsum@gmail.com</p>
            <Link href={"mailto:loreipsum@gmail.com"} className="text-gradient bot">
              Отправить сообщение
            </Link>
          </div>
          <div>
            <span>Email</span>
            <p>loreipsum@gmail.com</p>
            <Link href={"mailto:loreipsum@gmail.com"}>
              Отправить сообщение
            </Link>
          </div>
          <div>
            <span>Email</span>
            <p>loreipsum@gmail.com</p>
            <Link href={"mailto:loreipsum@gmail.com"}>
              Отправить сообщение
            </Link>
          </div>
        </div>
        <div className='col-8 flex flex-col'>
          <h1 className="bold-52">Contact <span className="text-gradient">me</span></h1>
        </div>
      </div>  
    </div>
  )
}

export default Contacts