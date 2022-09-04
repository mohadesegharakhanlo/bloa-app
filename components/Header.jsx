import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="container mb-8 mx-auto w-full">
        <div className="w-full border-b border-blue-400 inline-block py-8">
        <div className="md:float-left block">
            <Link href="/"><span className="cursor-pointer font-bold text-5xl text-white">graphcms</span></Link>
        </div>
        <div className=' md:float-lest md:content '>
            <span className='text-white float-right mt-3 text-2xl mr-4 ml-4 ' >react</span>
            <span className='text-white float-right mt-3 text-2xl mr-4 ml-4 ' >react</span>
        </div>
        </div>
    
    </div>
  )
}

export default Header
