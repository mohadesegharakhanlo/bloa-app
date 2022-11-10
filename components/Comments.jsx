import React, { useEffect, useState } from 'react'
import {getComments} from '../services'
import moment from 'moment';
const Comments = ({slug}) => {
  const [comments , setComments] = useState([]);
  console.log("slug" , slug);

  //fetch comments
  const getData = (slug) => {
    getComments(slug).then(
      res => console.log("comments:",res)
    )
  }
  useEffect(()=> {
    getData(slug)
  } , [])
  return ( 
    <div className='bg-white width-full rounded-lg p-4 mb-10'>
      <div className='border-b pb-3'>
        <p className='text-lg font-bold'>{comments.length} comments</p>
      </div>
      <div>
        {
          comments && comments.map((item , index) => (
            <div key={index} className='text-sm mb-4 mt-4 text-gray-500'>
              <p>
              <span className='text-black font-bold'>{item.name}</span>
              {' '}
              on
              {' '}
              <span>{moment(item.createdAt).format('MMM DD, YYYY')}</span>
              </p>
              <p className='text-lg text-gray-500 mt-2'>{item.comment}</p>
            
            </div>
          ))
        }
      </div>
    
    </div>
  )
}

export default Comments