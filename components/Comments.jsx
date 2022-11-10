import React, { useEffect, useState } from 'react'
import {getComments} from '../services'
import moment from 'moment';
const Comments = ({slug}) => {
  const [comments , setComments] = useState([]);
  console.log("slug" , slug);

  //fetch comments
  const getData = (slug) => {
    getComments(slug).then(
      res => setComments(res)
    )
  }
  useEffect(()=> {
    getData(slug)
  } , [])
  return ( 
    <div className='bg-white width-full rounded-lg p-4 mb-10' dir='rtl'>
      <div className='border-b pb-3'>
        <p className='text-lg font-bold'>نظرات دوستان</p>
      </div>
      <div>
        {
          comments && comments.map((item , index) => (
            <div key={index} className='mt-5 text-gray-500 mb-5'>
              <p>
              <span className='text-black text-lg ml-2'>{item.name}</span>
              <span className='text-xs'>{moment(item.createdAt).format('MMM DD, YYYY')}</span>
              </p>
              <p className='text-lg text-black mt-2'>{item.comment}</p>
            </div>
          ))
        }
      </div>
    
    </div>
  )
}

export default Comments