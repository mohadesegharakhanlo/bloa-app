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
        <div className="w-full border-b border-cyan-700 inline-block py-8">
        <div className="md:float-left block">
            <Link href="/"><span className="cursor-pointer font-bold text-5xl text-cyan-800">my books</span></Link>
        </div>
        <div className=' md:float-lest md:content '>
          {
              categories && categories.map((item , index) => (
                <span key={index} className='text-white float-right mt-3 text-xl mr-4 ml-4 font-semibold ' >{item.name}</span>
              ))
          }
        </div>
        </div>
    
    </div>
  )
}

export default Header
