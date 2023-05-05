import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { getCategoris } from "../services";
import { GiBookshelf } from "react-icons/gi";

export const Header = () => {
  const [categories, setCategories] = useState([]);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const getData = () => {
    getCategoris().then((res) => setCategories(res));
  };
  //on click biMenu
  const handelBurgerMenu = () => {
    setBurgerMenu((preValu) => !preValu);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mb-8 mx-auto w-full">
      <div className="w-full border-b border-cyan-700 inline-block py-8">
        <div
          className={`md:float-left flex  items-start ${
            burgerMenu ? "h-60" : ""
          }`}
        >
          <Link href="/">
            <span className="cursor-pointer font-bold text-3xl lg:text-5xl text-cyan-800 ml-2">
              my books
            </span>
          </Link>
          <div className=" flex gap-4 pt-2 lg:pl-4 pl-2">
            <Link href={"/signIn"}>
              <button className="px-6 md:py-2 lg:h-auto lg:text-base text-sm h-[25px]  bg-cyan-800 text-white font-bold lg:rounded-lg rounded-sm">
                ورود
              </button>
            </Link>
            <Link href={"/signUp"}>
              <button className="px-6 lg:py-2 lg:h-auto lg:text-base text-sm h-[25px] text-cyan-800 bg-white font-bold lg:rounded-lg rounded-sm">
                ثبت نام
              </button>
            </Link>
          </div>
          <span
            className=" text-3xl mr-2 text-cyan-800 md:hidden pt-1 flex-grow flex justify-end"
            onClick={handelBurgerMenu}
          >
            {burgerMenu ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </span>
        </div>

        <div className=" md:float-lest md:content hidden lg:block md:block">
          {categories &&
            categories.map((item, index) => (
              <Link href={`/category/${item.name}`}>
                <span
                  key={index}
                  className="text-white float-right mt-3 text-xl mr-4 ml-4 font-semibold cursor-pointer transition transform duration-500 hover:text-cyan-700"
                >
                  {item.name}
                </span>
              </Link>
            ))}
        </div>
        <div
          className={`lg:hidden md:hidden absolute top-20 ${
            burgerMenu ? "translate-x-0" : "-translate-x-full"
          } flex
          transition-transform duration-700 w-full flex-row justify-between p-3`}
          dir="rtl"
        >
          <div className="flex flex-col mr-3">
            {categories &&
              categories.map((item, index) => (
                <Link href={`/category/${item.name}`}>
                  <span
                    key={index}
                    className="text-white text-lg font-semibold cursor-pointer"
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
          </div>
          <div className=" text-9xl ml-5 mt-4 text-cyan-800 ">
            <GiBookshelf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
