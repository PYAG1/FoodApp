"use client";

import Image from "next/image";
import React from "react";
import { CiBurger } from "react-icons/ci";
import { FaCopyright } from "react-icons/fa";
import frontpagemeal from "../assets/images/frontpageMeal.jpg";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [show, setShow] = useState();

  return (
    <div className=" bg-background w-full min-h-screen flex felx-col justify-center items-center p-[3em]">
      <div
        className={
          show ? " flex flex-col items-center h-[200px] justify-evenly" : ""
        }
      >
        {show && (
          <div className="flex flex-col items-center text-[white] pt-3 ">
            <CiBurger className="text-primary text-5xl md-text-9xl" />
            <small className=" text-xs font-[Oswald] flex items-center text-primary">
              <FaCopyright className=" text-xs" /> PYAG
            </small>

            <div className=" mt-4">loading....</div>
          </div>
        )}

        {!show && (
          <div className="scale-in-bottom flex flex-col justify-evenly h-[600px] items-center md:gap-[2em] md:h-[570px] gap-[2em]">
            <div className=" flex flex-col justify-center items-center">
              <CiBurger size={30} className="text-primary" />
              <p className="text-primary">MascotBites</p>
            </div>

            <div className="w-[300px] h-[300px] rounded-full overflow-hidden ">
              <Image
                src={frontpagemeal}
                alt="Welcome to MascotBites"
                className="w-[300px] h-[300px]  object-cover
"
              />
            </div>

            <div className="text-primary flex flex-col items-center gap-4 ">
              <p className=" text-2xl text-center text-[white] font-[Oswald]">
                Tasty and Delicious Food just a tap away!
              </p>

              <div className=" flex w-full justify-evenly">
                {" "}
                <button
                  className="w-[100px]"
                  color="inherit"
                  onClick={() => {}}
                >
                  <Link href={"/"}>Order</Link>
                </button>
                <button className="w-[100px]" color="inherit">
                  <Link href={"/signin"}>Sign In</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function useClient() {
  throw new Error("Function not implemented.");
}
