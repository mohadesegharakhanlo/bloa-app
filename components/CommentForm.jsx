import React, { useEffect, useState } from 'react'
import {submitComment} from '../services/index'

const CommentForm = ({slug}) => {
  const [formData , setFormData] = useState({name:null , email:null , comment:null , storeData:false});
  const [error , setError] = useState(false);
  const [successfulSubmit , setSuccessfulSubmit] = useState(false);

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
      console.log(storeData)
      return
    }

    //save name and email in browser
    if(storeData){
      localStorage.setItem("name" , name);
      localStorage.setItem("email" , email);
    }else{
      localStorage.removeItem("name" , name);
      localStorage.removeItem("email" , email);
    }
    const commentobj = {
      name,
      email,
      comment,
      slug
    }
    
    submitComment(commentobj).then(
      res => {
        if(res.createComment){
          setSuccessfulSubmit(true); 
        }
      }
    ).catch((err) => console.log("comment error" , err))
  }

  useEffect(() => {
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  } , [])
  return (
    <div className='bg-white rounded-lg mb-6 p-4' dir='rtl'>
      <div>
        <h2 className='text-xl font-semibold border-b pb-3'>اگه دوست داشتی نظرتو درباره ی این کتاب بهم بگو</h2>
      </div>
      <div>
        <textarea className='outline-none w-full bg-gray-100 rounded-lg p-3 mt-4 focus:ring-2 focus:ring-gray-200
         h-20 mb-6 '
         name='comment' type='text' placeholder='کامنت...' value={formData.comment} onChange={handelChange}/>
      </div>
      <div className='grid grid-cols-2 gap-3 mb-4'>
        <input
        className='bg-gray-100 rounded-lg text-gray-700 p-2 outline-none focus:ring-2 focus:ring-gray-200'
        name='name' type='text' value={formData.name} onChange={handelChange} placeholder='نام'/>
        <input
        className='bg-gray-100 rounded-lg text-gray-700 p-2 outline-none focus:ring-2 focus:ring-gray-200'
        name='email' type='email' value={formData.email} onChange={handelChange} placeholder='ایمیل'/>
      </div>
      <div>
        <div className='mb-4'>
          <input type='checkbox' name='storeData' checked={formData.storeData} value='true' onChange={handelChange}/>
          <lable className='text-gray-500 mr-2 text-sm'>نام و ایمیلم رو سیو کن دفعه ی بعدی راحت تر کامنت بزارم</lable>
        </div>
      </div>
      {error && <p className='text-red-600 mb-4'>لازمه که همه ی فیلدهای بالا رو پر کنی!</p>}
      {successfulSubmit && <p className=' text-cyan-700 font-semibold'>کامنت شما با موفقیت ثبت شد(:</p>}
      <div>
        <button onClick={handelSubmit} className="bg-cyan-800 p-2 rounded-full px-10 courser-poiner
        text-white mb-6 mt-3"
        >کامنت</button>
      </div>
    </div>
  )
}

export default CommentForm