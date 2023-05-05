import React from "react";

const SignIn = () => {
  return (
    <div>
      <div className=" pr-[55%]">
        <form className=" flex flex-col gap-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&>div]:items-end">
          <div>
            <label className=" text-xl text-cyan-800 font-semiBold ">
              ایمیل
            </label>
            <input
              className=" h-10 w-[320px] shadow-lg rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2"
              style={{ direction: "rtl" }}
            />
          </div>
          <div>
            <label className=" text-xl text-cyan-800 font-semiBold ">
              رمز عبور
            </label>
            <input
              className=" h-10 w-[320px] shadow-lg rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2"
              style={{ direction: "rtl" }}
            />
          </div>
        </form>
        <button className="ml-[52%] mt-[15%] h-10 w-[300px] text-white bg-cyan-800 font-bold text-xl rounded-[5px] shadow-lg hover:bg-opacity-70">ورود</button>
      </div>
    </div>
  );
};

export default SignIn;
