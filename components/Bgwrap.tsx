import React from 'react'
import Image from 'next/image'

const Bgwrap = () => {
  return (
    <div className="bg-noise">
        <Image
          alt="bg"
          src={"/nnnoise.svg"}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <h1>Hey</h1>
      </div>
  )
}

export default Bgwrap