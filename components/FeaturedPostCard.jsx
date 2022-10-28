import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function FeaturedPostCard({post}) {
    console.log(post.slug)
  return (
    <Link href={`/post/${post.slug}`}>
      <div className='h-72 relative'>
          <div className='absolute h-72 bg-cover bg-no-repeat rounded-lg  w-full' style={{ backgroundImage: `url('${post.featuredImage.url}')` }}/>
          <div className='absolute bg-black opacity-40 w-full h-72 rounded-lg '/>
          <div className='z-1000 absolute flex justify-center flex-col w-full h-60 items-center gap-2'>
              <p className='text-xs text-white'>{moment(post.createdAt).format('MMM DD , YYYY')}</p>
              <p className='text-xl text-white font-bold'>{post.title}</p>
          </div>
          <div className='absolute w-full bottom-5 flex justify-center gap-2'>
            <Image
              unoptimized
              alt={post.author.name}
              src={post.author.photo.url}
              width="30px"
              height="30px"
              className='rounded-full'

            />
            <p className='text-lg text-white'>{post.author.name}</p>
          </div>
      </div>
    </Link>
    
  )
}

export default FeaturedPostCard