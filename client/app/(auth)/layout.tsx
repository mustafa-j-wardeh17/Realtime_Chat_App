'use client'
import { useAuthContext } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  const { authUser } = useAuthContext();
  const router = useRouter()
  useEffect(() => {
    if (authUser) {
      router.push('/')
      console.log(`Here is authenticated user ${authUser}`)
    }
  }, [authUser])
  return (
    <div >
      {children}
    </div>
  )
}

export default layout