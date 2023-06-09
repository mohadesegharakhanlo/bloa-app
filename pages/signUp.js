import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signUp as signUpService } from "../services/index";

const signUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [text , setText] = useState(0);

  const onSubmit = (data) => {
    console.log("data" , JSON.stringify(data))
    signUpService(data).then(
      res => {
        if(res.status === 200){
          setText(1)
        }else{
          setText(-1)
        }
      }
    ).catch(
      err => console.log("errrrrrrrr" , err)
    )
  };
  return (
    <div className=" flex flex-col pl-[15%]">
      <header className="shadow-lg shadow-gray-400 flex flex-col gap-4 items-end justify-end w-1/2 py-4 px-2 rounded-md">
        <h1 className="text-2xl font-bold">سلام دوست عزیزم</h1>
        <p className=" text-xl font-semiBold" style={{ direction: "rtl" }}>
          با ثبت نام توی سایت میتونی نظرات خودت رو توی سایت بنویسی و اگه خواستی
          بهمون کتاب معرفی کنی.
        </p>
      </header>
      <div className="  w-1/2">
        <form
          className=" flex flex-col gap-6 [&>div]:flex [&>div]:flex-col [&>div]:items-end [&>div]:gap-1 pt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className=" text-xl text-cyan-800 font-semiBold ">نام</label>
            <input
              className=" h-10 w-[320px] shadow-lg rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2"
              style={{ direction: "rtl" }}
              {...register("firstname", {
                required: true,
                maxLength: 15,
              })}
            />
          </div>
          <div>
            <label className=" text-xl text-cyan-800 font-semiBold ">
              نام خانوادگی
            </label>
            <input
              className=" h-10 w-[320px] shadow rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2"
              style={{ direction: "rtl" }}
              {...register("lastname", {
                required: true,
                maxLength: 25,
              })}
            />
          </div>
          <div>
            <label className=" text-xl text-cyan-800 font-semiBold ">
              ایمیل
            </label>
            <input
              className=" h-10 w-[320px] shadow rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2"
              style={{ direction: "rtl" }}
              {...register("email", {
                required: true,
              })}
            />
          </div>
          <div className=" flex !flex-row-reverse !gap-10">
            <div className=" flex flex-col gap-1 items-end">
              <label className=" text-xl text-cyan-800 font-semiBold ">
                رمز
              </label>
              <input
                className=" h-10 w-[320px]  shadow rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2"
                style={{ direction: "rtl" }}
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
            </div>
            <button className=" h-10 w-[300px] text-white bg-cyan-800 font-bold text-xl rounded-[5px] shadow-lg hover:bg-opacity-70">
              ثبت نام
            </button>
          </div>
        </form>
      </div>
      <div>
        {
          text === 1 ? (<p className=" text-white text-xl mt-4 ">اطلاعات شما با موفقیت ثبت شد به جمع ما خوش اومدین :)</p>) : (text === -1) ? (<p className=" text-red-600 text-xl mt-4">مشکلی در ثبت اطلاعات شما بوجود امده لطفا دوباره تلاش کنید</p>) : <></>
        }
      </div>
    </div>
  );
};

export default signUp;
