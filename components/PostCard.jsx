import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const PostCard = ({post}) => {
    console.log(post)
  return (
    <div className='bg-white rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden mb-4'>
            <img src={post.featuredImage.url}
                className='h-80 w-full rounded-md'
            />
        </div>
        <h1 className='text-center text-3xl font-bold text-black transition duration-700 hover:text-blue-400 mb-8 '>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className='block lg:flex flex-col gap-3 text-center items-center justify-center w-full mb-6'>
            <div className='flex items-center justify-center lg:gap-3 mb-4'>
                <img src={post.author.photo.url}
                    height='30px'
                    width='30px'
                />
                <p>{post.author.name}</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className='text-sm' >{moment(post.createAt).format('mm , ddd , yyyy')}</span>
            </div>

        </div>
        <p className='text-center px-4 text-md mb-8'>{post.excerpt}</p>
        <div className='text-center'>
            <Link href={`/post/${post.slug}`}>
                <span className='bg-blue-500 rounded-full px-4 py-2 text-white cursor-pointer transition transform inline-block duration-500 hover:-translate-y-1'>continue reading</span>
            </Link>
        </div>
    </div>
  )
}

export default PostCard