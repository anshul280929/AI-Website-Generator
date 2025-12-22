"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { UserDetailContext } from '@/context/UserDetailContext'

function Provider({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn, user } = useUser()
  const [userDetail, setUserDetail] = useState<any>(null)

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      CreateNewUser()
    }
  }, [isLoaded, isSignedIn])

  const CreateNewUser = async () => {
    try {
      const result = await axios.post('/api/users', {
        clerkUserId: user?.id,
        email: user?.primaryEmailAddress?.emailAddress,
        name: user?.fullName,
      })

      console.log("New User Created", result.data)
      setUserDetail(result.data?.user)
    } catch (error) {
      console.error("Create user failed:", error)
    }
  }

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  )
}

export default Provider
