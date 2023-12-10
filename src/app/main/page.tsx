"use client"

import HeroSection from '@/components/main/HeroSection'
import LogoCloud from '@/components/main/LogoCloud'
import NavBar from '@/components/navigation/Navbar'
import OurMenu from '@/components/main/OurMenu'
import React from 'react'


export default function page() {
   
   
  return (
    <div className="bg-gray-50">
        <NavBar/>
        <HeroSection/>
        <LogoCloud/>
        <OurMenu/>
   
    
    </div>
   

  )
}
