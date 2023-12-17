import React from 'react'
import FoodComponent from '../menu/FoodComponent'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { MenuItem } from '@/utils/types'
import { menuItems } from '@/utils/menuData'

export default function OurMenu() {
  const shortMenu:MenuItem[] = []
  menuItems.map((item,index)=>{
    if(index < 4 ){
      shortMenu.push(item)
    }

  })

  return (
    <div className='py-[3em] px-[1.5em] my-10'>
        <div>
            <p className=' text-[Manrope] font-semibold text-3xl'>Our Menu</p>
        </div>
        <div className=' mt-5 '>
<FoodComponent data={shortMenu}/>
        </div>
        <Link href={"/menu"} className=' flex items-center my-5 text-lg font-[Oswald] justify-end'>Go to Full Menu <ArrowRightIcon className=' w-5 h-5'/></Link>
    </div>
  )
}
