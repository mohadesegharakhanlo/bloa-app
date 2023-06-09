import { submitPost } from "../services";

const createPost = () => {
  const handleOnClick = () => {
    let info = {
      title: "test",
      slug: "test-test-test",
      content: "this is content testtttt!!!!!!!",
      excerpt: "excerpt test",
      featuredImage: { url: "jfhg" },
    };

    submitPost(info)
      .then((res) => console.log("creste post res", res))
      .catch((err) => console.log("create post err", err));
  };
  return (
    <div className="flex flex-col w-full items-center">
      <header>
        <h1 className=" text-2xl text-cyan-700 font-semiBold">
          شما میتونی کتاب مورد علاقت رو با پر کردن فیلدهای پایین به ما معرفی کنی
        </h1>
      </header>
      <div className=" flex flex-col gap-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div]:items-end">
        <div>
          <label>نام کتاب</label>
          <input className=" h-10 w-[320px] shadow-lg rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2" />
        </div>
        <div>
          <label>خلاصه ای از ویژگی ها</label>
          <input className=" h-10 w-[320px] shadow-lg rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2" />
        </div>
        <div>
          <label>تصویر</label>
          <input type="file" className=" h-10 w-[320px] shadow-lg rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2" />
        </div>
        <div>
          <label>توضیحات</label>
          <textarea className=" h-10 w-[320px] shadow-lg rounded-[5px] bg-neutral-100 text-sm outline-none focus:outline-none px-2" />
        </div>
        <button onClick={handleOnClick}>submit</button>
      </div>
    </div>
  );
};

export default createPost;
