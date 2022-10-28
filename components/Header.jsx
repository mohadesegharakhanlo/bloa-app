import React , {useState , useEffect} from 'react'
import Link from 'next/link'
import {getCategoris} from '../services'

export const Header = () => {
  const [categories , setCategories] = useState([]);

    const getData = () => {
        getCategoris().then(
            res => setCategories(res)
        )
    }
    useEffect(() => {
      getData()
    } , [])
  return (
    <div className="container mb-8 mx-auto w-full">
        <div className="w-full border-b border-blue-400 inline-block py-8">
        <div className="md:float-left block">
            <Link href="/"><span className="cursor-pointer font-bold text-5xl text-white">graphcms</span></Link>
        </div>
        <div className=' md:float-lest md:content '>
          {
              categories && categories.map((item , index) => (
                <span key={index} className='text-white float-right mt-3 text-2xl mr-4 ml-4 ' >{item.name}</span>
              ))
          }
        </div>
        </div>
    
    </div>
  )
}

export default Header
