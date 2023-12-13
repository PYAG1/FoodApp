import NavBar from '@/components/navigation/Navbar'
import React from 'react'
import { menuItems } from '@/utils/menuData'
import FoodComponent from '@/components/menu/FoodComponent'

export default function page() {
  return (
    <div>
        <NavBar/>
        <div className=' w-full py-[3em] px-[1.5em] lg:px-[2.5em] '>
        <FoodComponent data={menuItems}/>
        </div>
    </div>
  )
}
