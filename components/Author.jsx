import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
  return (
    <div className='text-center bg-white bg-opacity-20  rounded-lg relative mt-20 mb-8 p-12 text-white'>
      <div className='absolute right-0 left-0 -top-14 w-full'>
        <Image
          src={author.photo.url}
          height='100px'
          width='100px'
          unoptimized
          className='rounded-full align-middle'
        />
      </div>
      <h3 className='font-bold text-xl mt-2 mb-4'>{author.name}</h3>
      <p>{author.bio}</p>
    </div>
  )
}

export default Author