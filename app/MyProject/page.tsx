import Image from "next/image"

const page = () => {
  return (
    <div className="flex flex-row flex-center max-container">
      <div className='col-6'>
        <Image src={`/Project-1.png`} alt='' width={659} height={400} />
      </div>
      <div className='col-6 flex flex-col'>
        <span className="bold-52 w-[100%] text-gradient">MY PROJECT</span>
        <span>Я работал в компании, в которой мы делали этот сайт, и мне дали возможность попрактиковаться в верстке, я сверстал этот проект, и сейчас им до сих пор пользуется клиент</span>
        <p> react</p>
      </div>
    </div>
  )
}

export default page