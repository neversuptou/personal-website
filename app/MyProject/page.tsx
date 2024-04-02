import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-row flex-center max-container">
      <div className='col-6'>
        <Link href={"https://github.com/neversuptou/ttk"}>
          <Image src={`/Project-1.png`} alt='' width={659} height={400} />
        </Link>
      </div>
      <div className='col-6 flex flex-col ml-[50px]'>
        <span className="bold-52 w-[100%] text-gradient">MY PROJECT</span>
        <span className="mt-5">Я работал в компании, в которой мы делали этот сайт,<br />
         и мне дали возможность попрактиковаться в верстке,<br />
          я сверстал этот проект,
          и сейчас им до сих пор пользуется клиент</span>
        <span className="stack-t mt-[50px]">TECHNOLOGIES</span>
        <p> html, scss, gulp, js, bootstrap</p>
      </div>
    </div>
  )
}

export default page