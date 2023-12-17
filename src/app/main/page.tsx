"use client"
import HeroSection from '@/components/main/HeroSection';
import LogoCloud from '@/components/main/LogoCloud';
import NavBar from '@/components/navigation/Navbar';
import OurMenu from '@/components/main/OurMenu';
import React from 'react';
import toast from 'react-hot-toast';
import { RootState } from '@/utils/store/store';
import { useSelector } from 'react-redux';


export default function Page() {
  const username = useSelector((state:RootState)=> state.cart.currentUser)

  React.useEffect(() => {

    if(username){
      toast.success(`Welcome ${username}`);
    }
    else{
      toast.success("Welcome")
    }

  },[] );

  return (
    <div className="bg-gray-50">
      <NavBar />
      <HeroSection />
      <LogoCloud />
      <OurMenu />
    </div>
  );
}
