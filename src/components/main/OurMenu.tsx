import React from 'react'
import FoodComponent from '../menu/FoodComponent'

export default function OurMenu() {
  return (
    <div className='p-[3em] my-10'>
        <div>
            <p className=' text-[Manrope] font-semibold text-3xl'>Our Menu</p>
        </div>
        <div className=' mt-5 '>
<FoodComponent/>
        </div>
    </div>
  )
}
