/* This example requires Tailwind CSS v2.0+ */
"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {

  XMarkIcon,
} from '@heroicons/react/24/outline'
import { RootState } from '@/utils/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { ToggleCart } from '@/utils/store/cartSlice'




function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBar() {
  
const SideBarOpen =useSelector((state:RootState)=> state.cart.showCart)
const dispatch = useDispatch()
const setSidebarOpen = ()=>{
    dispatch(ToggleCart())
}
  return (
    <>

      <div>
        <Transition.Root show={SideBarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 " onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen()}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
<div>
    
</div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

      </div>
    </>
  )
}

 
