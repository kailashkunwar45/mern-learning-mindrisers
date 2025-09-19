'use client'
import Link from 'next/link'
import React from 'react'
import SignOutButton from './SignOutButton';
import { useSession } from 'next-auth/react';

export default function Header() {
  const { data, status } = useSession();

  return (
    <div className='flex bg-gray-100 gap-5 py-2'>

      <h1>Next Js</h1>

      <nav className='flex gap-5 justify-between'>
        <div className='flex gap-5'>
          <Link href={'/form/add'}>Add Emplyoee</Link>
          <Link href={'/posts'}>Posts</Link>
        </div>
        <div className='flex gap-5'>
          {status === 'authenticated' ? <h1>{data?.user.name}</h1> : <Link href={'/form/login'}>Login</Link>}
          {
            status === 'authenticated' && <SignOutButton />
          }

        </div>


      </nav>

    </div>
  )
}