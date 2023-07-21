import { useState } from "react";
import { submitPost } from "../services";
import {useForm} from 'react-hook-form'

const createPost = () => {
  const {handleSubmit , register , formState:{errors}} = useForm()
  const [submitPostSucces , setSubmitPostSucces] = useState()
  const onSubmit = (data) => {
    // let info = {
    //   title: data.titl,
    //   slug: "test-test-test",
    //   content: "this is content testtttt!!!!!!!",
    //   excerpt: "excerpt test",
    //   imageurl: "jfhg",
    // };
    const random = Math.floor(Math.random() * (1000 - 100 + 1))
    const info = {...data , slug:String(random)}
    submitPost(info)
      .then((res) => {
        if(res.createPost){
          setSubmitPostSucces("اطلاعات شما ثبت شد و پس از بررسی در کنار بقیه ی کتاب های نمایش داده خواهد شد ")
        }
      })
      .catch((err) => console.log("create post err", err));
  };
  return (
    <div className="flex flex-col w-full items-center">
      <header>
        <h1 className=" text-2xl text-cyan-700 font-semiBold">
          شما میتونی کتاب مورد علاقت رو با پر کردن فیلدهای پایین به ما معرفی کنی
        </h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 flex flex-col gap-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div]:items-end">
          <div>
            <label>نام کتاب</label>
            <input className=" h-10 w-[400px] shadow-lg rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2" 
             {...register("title", {
              required: true,
              maxLength: 50,
            })}
            style={{ direction: "rtl" }}
            />
          </div>
          <div>
            <label>خلاصه ای از ویژگی ها</label>
            <textarea className=" h-28 w-[400px] shadow-lg p-3 rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2" 
             {...register("excerpt", {
              required: true,
              maxLength: 200,
            })}
            style={{ direction: "rtl" }}
            
            />
          </div>
          <div>
            <label>توضیحات</label>
            <textarea className=" h-40 w-[400px] p-3 shadow-lg rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2" 
             {...register("content", {
              required: true,
              maxLength: 500,
            })}
            style={{ direction: "rtl" }}

            />
          </div>
          <div className=" w-full flex items-center justify-center">
          <button type="submit" className="h-10 w-[400px] text-white bg-cyan-800 font-bold text-xl rounded-[5px] shadow-lg hover:bg-opacity-70">
            ثبت
          </button>
          <p className="text-white text-xl font-semiBold">
            {submitPostSucces}
          </p>
          </div>
         
        </div>
      </form>
      
    </div>
  );
};

export default createPost;
