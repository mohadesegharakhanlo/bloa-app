import React, { useState } from 'react'
import {submitComment} from '../services/index'

const CommentForm = ({slug}) => {
  const [formData , setFormData] = useState({name:null , email:null , comment:null , storeData:false});
  const [error , setError] = useState(false);

  //onChange input
  const handelChange = (e) => {
    if(e.target.type === 'checkbox'){
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.checked
      }))
    }else {
      setFormData((prevState) => ({
        ...prevState ,
        [e.target.name] : e.target.value
      }))
    }
  }
  
  //submit form
  const handelSubmit = () => {
    setError(false);
    const {name , email , comment , storeData} = formData
    if(!name || !email || !comment){
      setError(true);
      return
    }
    const commentobj = {
      name,
      email,
      comment,
      slug
    }
    //console.log(commentobj)
    //console.log(JSON.stringify(commentobj))
    submitComment(commentobj).then(
      res => console.log("res",res)
    )

  }
  return (
    <div className='bg-white rounded-lg mb-6 p-4'>
      <div>
        <h2 className='text-xl font-bold text-xl border-b pb-3'>leave a reply</h2>
      </div>
      <div>
        <textarea className='outline-none w-full bg-gray-100 rounded-lg p-3 mt-4 focus:ring-2 focus:ring-gray-200
         h-20 mb-6 '
         name='comment' type='text' placeholder='comment...' value={formData.comment} onChange={handelChange}/>
      </div>
      <div className='grid grid-cols-2 gap-3 mb-4'>
        <input
        className='bg-gray-100 rounded-lg text-gray-700 p-2 outline-none focus:ring-2 focus:ring-gray-200'
        name='name' type='text' value={formData.name} onChange={handelChange} placeholder='name'/>
        <input
        className='bg-gray-100 rounded-lg text-gray-700 p-2 outline-none focus:ring-2 focus:ring-gray-200'
        name='email' type='email' value={formData.email} onChange={handelChange} placeholder='email'/>
      </div>
      <div>
        <div className='mb-4'>
          <input type='checkbox' name='storeData' checked={formData.storeData} value='true' onChange={handelChange}/>
          <lable className='text-gray-500 ml-2 text-sm'>Save my name, email in this browser for the next time I comment</lable>
        </div>
      </div>
      {error && <p className='text-red-600 mb-4'>all fields are required!</p>}
      <div>
        <button onClick={handelSubmit} className="bg-pink-600 p-2 rounded-full px-3 courser-poiner
        text-white mb-6 mt-3"
        >post comment</button>
      </div>
    </div>
  )
}

export default CommentForm