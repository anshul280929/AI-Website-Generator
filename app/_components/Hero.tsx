"use client"
import { Button } from '@/components/ui/button'
import { HomeIcon, ImagePlus, Key, LayoutDashboard, User } from 'lucide-react'
import React, { useState } from 'react'

const suggestions=[
    {
        label:"Dashboard",
        prompt:"Create a analytics dashboard to track customer and revenue data for a Saas",
        icon: LayoutDashboard
    },
    {
        label:"SignUp Form",
        prompt:"Create a modern sign up form page with name,email and password field, Google Github login option and terms and condition checkbox",
        icon: Key
    },
    {
        label:"Hero",
        prompt:"Create a modern header and centered hero section section for a  productivity Saas, including call to action button and an image",
        icon: HomeIcon
    },
    {
        label:"User Profile Card",
        prompt:"Create a user profile card with profile image, user name, bio and social media links",
        icon: User
    },
]

function Hero() {

    const [userInput,setUserInput]=useState<string>();
  return (
    <div className='flex flex-col items-center h-screen justify-center'>
      {/* Header and Description*/}
        <h2 className='font-bold text-6xl'>Lets Design Your Website</h2>
        <p className='mt-2 text-xl text-gray-500'>Generate, Edit and Explore design with AI, Export code as well</p>
      {/* input box */}
      <div className='w-full max-w-2xl p-5 border mt-5 rounded-2xl'>
        <textarea placeholder='Describe your page design'
        value={userInput}
        onChange={(event)=>setUserInput(event.target.value)} 
        className='w-full h-24 focus:outline-none focus:ring-0 resize-none'/>
        <div className='flex justify-between items-center'>
            <Button variant={'ghost'} ><ImagePlus/></Button>
            <Button className='float-right'>Generate</Button>
        </div>
        </div> 
      {/* Suggestion */}
      <div className='mt-4 flex gap-3'>
        {suggestions.map((suggestion,index)=>(
            <Button key={index} variant={'outline'}
                onClick={()=>setUserInput(suggestion.prompt)}
            >

                <suggestion.icon />
                {suggestion.label}</Button>
        ))}
      </div>
      
    </div>
  )
}

export default Hero
