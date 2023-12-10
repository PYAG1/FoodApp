import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

export default function FoodComponent() {
    const files = [
        {
          title: 'IMG_4985.HEIC',
          size: '3.9 MB',
          source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            title: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source:
"https://images.unsplash.com/photo-1553455860-2fa544e14141?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source:
              'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
          },
          {
            title: 'IMG_4985.HEIC',
            size: '3.9 MB',
            source:
              'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
          },
        // More files...
      ]
      
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group aspect-w-10 h-[300px] object-cover block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75 group-hover:bg-indigo-200" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
         <div className=' flex items-center justify-between mt-3'>
         <p className="pointer-events-none mt-2 block truncate text-lg font-medium font-[Manrope]  text-background">{file.title}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500"><FaShoppingBag size={22}/></p>
            </div>
        </li>
      ))}
    </ul>
  )
}
