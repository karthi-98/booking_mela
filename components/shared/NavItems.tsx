"use client"

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathname = usePathname();
    return (
        <div>
            <ul className='flex flex-col md:flex-row md:flex-between gap-6 text-sm'>
                {headerLinks.map((link) => {
                    const isActive = pathname === link.route;
                    return (
                        <li key={link.route} className={`${isActive && 'text-red-500'} flex-center whitespace-nowrap`}>
                            <Link href={link.route}>{link.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavItems