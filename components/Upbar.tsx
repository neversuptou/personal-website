import Image from "next/image"
import Link from "next/link"


const Upbar = () => {
  return (
    <div className='max-container flex flex-row py-10 justify-between'>
        <div className="logo regular-32 md:regular-64" id="home_anchor"><Link href={"/"}><span className="font-extrabold">Danila </span><span className="font-extralight">Sereda</span></Link></div>
        <ul className='flex flex-row'>
          <li>
            <Link href={"https://github.com/neversuptou"} className="flexCenter px-2"><Image src={"/gh-logo.svg"} alt='github' width={40} height={40} /></Link>
          </li>
          <li>
            <Link href={"https://vk.com/hikkanya"} className="flexCenter px-2"><Image src={"/vk-logo.svg"} alt='github' width={40} height={40} /></Link>
          </li>
        </ul>
      </div>
  )
}

export default Upbar