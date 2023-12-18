import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper f-jb-ic'>
          <Link href="/">
            <h1 className='text-lg font-semibold'>BookingFest.com</h1>
          </Link>
          <SignedIn>
            <nav className='md:f-jb-ic hidden'>
              <NavItems />
            </nav>
          </SignedIn>
          <SignedIn>
            <div className='f-jc-ic gap-3'>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
            </div>
          </SignedIn>
          <SignedOut>
            <Link href='/sign-in'>
            <Button>Login</Button>
            </Link>
          </SignedOut>
        </div>
    </header>
  )
}

export default Header