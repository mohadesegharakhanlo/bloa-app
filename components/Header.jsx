import React , {useState , useEffect} from 'react'
import Link from 'next/link'
import { AiOutlineMenuFold , AiOutlineMenuUnfold} from 'react-icons/ai'
import {getCategoris} from '../services'


export const Header = () => {
  const [categories , setCategories] = useState([]);
  const [burgerMenu , setBurgerMenu] = useState(false)

    const getData = () => {
        getCategoris().then(
            res => setCategories(res)
        )
    }
    //on click biMenu
    const handelBurgerMenu = () => {
        setBurgerMenu((preValu) =>(!preValu));
    }
    useEffect(() => {
      getData()
    } , [])
 
  return (
    <div className="container mb-8 mx-auto w-full">
       
        <div className="w-full border-b border-cyan-700 inline-block py-8">
        <div className={`md:float-left flex justify-between items-start ${burgerMenu ? 'h-60' : ''}`}>
            <Link href="/"><span className="cursor-pointer font-bold text-5xl text-cyan-800">my books</span></Link>
            <span className=' text-3xl mr-2 text-cyan-800 md:hidden' onClick={handelBurgerMenu}>{burgerMenu ? <AiOutlineMenuUnfold/> : <AiOutlineMenuFold/>}</span>
        </div>
        <div className=' md:float-lest md:content hidden lg:block md:block'>
          {
              categories && categories.map((item , index) => (
                <Link href={`/category/${item.name}`}>
                  <span key={index} 
                  className='text-white float-right mt-3 text-xl mr-4 ml-4 font-semibold cursor-pointer transition transform duration-500 hover:text-cyan-700'
                  >{item.name}</span>
                </Link>
              ))
          }
        </div>
        <div className={`lg:hidden md:hidden absolute top-20 ${burgerMenu ? 'translate-x-0' : '-translate-x-full'} flex  transition-transform duration-700 w-full flex-col justify-between p-3`}  dir='rtl'>
            {
              categories && categories.map((item , index) => (
                <Link href={`/category/${item.name}`}>
                  <span key={index} 
                  className='text-cyan-800 text-lg font-semibold cursor-pointer '
                  >{item.name}</span>
                </Link>
              ))
            }
        </div>
        </div>
    
    </div>
  )
}

export default Header
