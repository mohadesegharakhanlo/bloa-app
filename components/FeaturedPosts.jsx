import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import {getFeaturedPosts} from '../services'
import FeaturedPostCard from './FeaturedPostCard'

//copy from doc
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };


function FeaturedPosts() {
    const [data , setData] = useState([]);
    const getData = () => {
        getFeaturedPosts().then(
            res => setData(res)
        )
    }
    useEffect(() => {
        getData()
    } , [])

  return (
    <div className='mb-8'>
        <Carousel infinite arrows={true} responsive={responsive} itemClass="px-4 cursor-pointer">
          {
              data && data.map((item , index) => (
                 <FeaturedPostCard post ={item} key={index}/>
              ))
          }
        </Carousel>
    </div>
  )
}

export default FeaturedPosts