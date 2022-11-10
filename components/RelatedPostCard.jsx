import Link from 'next/link'
import React from 'react'

function RelatedPostCard({post}) {

  return (
    
    <Link href={`/post/${post.slug}`}><div className='w-3/5 cursor-pointer m-auto shadow-xl shadow-gray-400 rounded-md grid grid-cols-1 lg:grid-cols-3 gap-0' dir='rtl'>
        <div className=' h-80'>
            <img
                src={post.featuredImage.url}
                width='230px'
                className='rounded-md m-auto lg:m-0 h-80'
            />
        </div>
        <div className=' lg:col-span-2 flex flex-col'>
            <h1 className=' text-2xl w-full text-cyan-800 font-semibold mt-2'>{post.title}</h1>
            <p className='pt-5 pl-3 text-lg text-gray-500 leading-loose'>{post.excerpt}</p>
            <div className='flex gap-2 m-3 justify-end items-end h-full'>
                <p className='text-md text-gray-500'>{post.author.name}</p>
                <img
                    src={post.author.photo.url}
                    
                    className=' rounded-full h-8 w-8'
                />
            </div>
        </div>
    
    </div></Link>
  )
}

export default RelatedPostCard