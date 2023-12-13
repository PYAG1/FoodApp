"use client"
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import {menuItems} from "../../../src/utils/menuData"
import { MenuItem } from '@/utils/types'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/utils/store/cartSlice'
import { Item } from '@/utils/types'
import { RootState } from '@/utils/store/store'

export default function FoodComponent({data}:{data:MenuItem[]}) {

 const dispatch = useDispatch()
const apple:Item={
  id: 0,
  price: 0,
  quantity: 0,
  totalprice: 0,
  name: '',
  img: ''
}

      
const stateData = useSelector((state:RootState)=> state.cart.CurrentCart)
console.log(stateData);

  return (
    <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {data.map((meal) => (
        <div>
        <li key={meal.img} className="relative">
          <div className=" aspect-w-10 h-[300px] object-cover block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img src={meal.img} alt="" className="pointer-events-none w-full h-full object-cover group-hover:opacity-75 group-hover:bg-indigo-200" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {meal.title}</span>
            </button>
          </div>

        </li>
                 <div className=' flex items-center justify-between mt-3'>
                 <p className="pointer-events-none mt-2 block truncate text-lg font-medium font-[Manrope]  text-background">{meal.title}</p>
        <button title=' add' onClick={()=>{
        dispatch(addToCart({
          id: meal.id,
          price: meal.price,
          name: meal.title,
          img: meal.img,
          quantity: 0,
          totalprice: 0
        }))
        }}>
        <p className="pointer-events-none block text-sm font-medium text-gray-500"><FaShoppingBag size={22}/></p>
        </button>
                    </div>
                    </div>
      ))}
    </ul>
  )
}
