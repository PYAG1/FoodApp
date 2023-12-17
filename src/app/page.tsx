"use client";

import Image from "next/image";
import React from "react";
import { CiBurger } from "react-icons/ci";
import { FaCopyright } from "react-icons/fa";
import frontpagemeal from "../assets/images/frontpageMeal.jpg";
import { useState } from "react";
import Link from "next/link";
import { XMarkIcon } from '@heroicons/react/24/outline'
export default function Home() {
  const [show, setShow] = useState();
/*  <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
          <button
            type="button"
            className="flex rounded-md p-2 hover-primary focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>*/
  return (
    <div>
           <div className="absolute top-0 bg-background2 w-screen ">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-primary">
            <span className="md:hidden">Note</span>
            <span className="hidden md:inline">Signing in allows you to view your order history</span>
  
          </p>
        </div>
      
      </div>
    </div>
 
    <div className=" bg-background w-full min-h-[100svh] flex felx-col justify-center items-center p-[3em]">
  
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
                  <Link href={"/main"}>Order</Link>
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
    </div>
  );
}
function useClient() {
  throw new Error("Function not implemented.");
}




