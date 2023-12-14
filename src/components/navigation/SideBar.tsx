/* This example requires Tailwind CSS v2.0+ */
"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {

  XMarkIcon,
} from '@heroicons/react/24/outline'
import { RootState } from '@/utils/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { ClearCart, RemoveFromCart, ToggleCart, addToCart, deleteFromCart } from '@/utils/store/cartSlice'
import { Item } from '@/utils/types'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/20/solid'




function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SideBar() {

const SideBarOpen =useSelector((state:RootState)=> state.cart.showCart)
const CurrentCart = useSelector((state:RootState)=> state.cart.CurrentCart)
const dispatch = useDispatch()
const setSidebarOpen = ()=>{
    dispatch(ToggleCart())
}
const clearCart = ()=>{
  dispatch(ClearCart())
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
                <Dialog.Panel className="relative flex w-full max-w-sm flex-1 flex-col bg-white">
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
<div className=' font-[Manrope] max-h-screen' >
<div className=' w-full flex justify-between p-4'>
  <p className=' text-lg font-semibold'>Cart</p>
  <button onClick={clearCart}>
    Clear
  </button>
</div>
<div className=' bg-background rounded-tl-[40px] rounded-tr-[40px] min-h-screen'>
<div className=' w-full  min-h-[55vh]  rounded-tl-[40px] rounded-tr-[40px]  p-3 overflow-y-scroll no-scrollbar'>
{
CurrentCart?.map((product:Item)=>(
  <li key={product.id} className="flex py-6 px-4">
  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
    <img
      src={product.img}
      alt={product.name}
      className="h-full w-full object-cover object-center"
    />
  </div>

  <div className="ml-4 flex flex-1 flex-col">
    <div>
      <div className="flex justify-between text-base font-medium text-white">
        <h3>
          <a>{product.name}</a>
        </h3>
        <p className="ml-4">Ghc {product.price}</p>
      </div>
      
    </div>
    <div className="flex flex-1 items-end justify-between text-sm">
 <div className=' flex gap-4'>
 <p className="text-white">Qty {product.quantity}</p>
 <div className=' flex gap-2'>
  <button title='add' className=' w-5 h-5 flex justify-center items-center border border-gray-500' onClick={()=>{
    dispatch(addToCart(product))
  }}>
    <PlusSmallIcon  className=' w-5 h-5 text-gray-500'/>
   
  </button>
  <button title='subtract' className=' w-5 h-5 flex justify-center items-center border border-gray-500' onClick={()=>{
    dispatch(deleteFromCart(product.id))
  }}>
  <MinusSmallIcon className=' w-5 h-5 text-gray-500'/>
  </button>
 </div>
 </div>

      <div className="flex">
        <button
          type="button"
          className="font-medium text-primary hover:text-primary"
          onClick={()=>{
            dispatch(RemoveFromCart(product.id))
          }}
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</li>
))
}

</div>
<div className=' flex w-full bg-background2 h-[40vh] rounded-tl-[40px] rounded-tr-[40px]'>
  
</div>
</div>
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

 