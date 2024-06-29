import React from 'react'
import { Outlet } from "react-router-dom";

const OnboardingLayout = () => {
  return (
    <div className="border border-red-500 px-4 sm:px-6 md-px-10 lg:px-14 xl:px-20 2xl:px-56 py-10">
    <div className="w-full flex d-flex flex-col gap-10">
      <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
        <h1 className="text-dark-blue text-2xl md:text-3xl font-bold text-center md:px-8">
        Thank you for your booking !
        </h1>
        <h3 className='text-center text-dark-blue text-xl font-bold'>Here's what happens next:</h3>
        <p className="text-center text-dark-blue text-lg px-2">
        Fill out the onboarding form below so we can get to know your company and your content goals better.
        </p>
      </div>
      
     <Outlet/>
     
    </div>
  </div>
  )
}

export default OnboardingLayout