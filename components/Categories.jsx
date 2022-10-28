import Link from 'next/link';
import React , {useState , useEffect} from 'react'
import {getCategoris} from '../services/index'

const Categories = () => {
    const [categories , setCategories] = useState([]);

    const getData = () => {
        getCategoris().then(
            res => setCategories(res)
        )
    }

    useEffect(()=>{
        getData()
    } , [])
  return (
    <div className='bg-white p-8 rounded-lg mt-8'>
        <h1 className='text-black border-b mb-4 pb-2 text-xl font-bold'>
            categories
        </h1>
        {
            categories && categories.map((item , index) => (
                <div key={index} className='text-black pb-4 mb-3 text-sm border-b '>
                    <Link href={`/post/${item.slug}`}>{item.name}</Link>
                </div>
            ))
        }
    
    </div>
  )
}

export default Categories