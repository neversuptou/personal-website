"use client"
import React from 'react'
import Icon from './icons/Icon'
import { usePathname } from 'next/navigation'
import type {IconProps} from './icons/Icon';


const navLinks:IconProps[] = [
  { href: "/", title: "home" },
  { href: "/About", title: "user"},
  { href: "/MyProject", title: "project"},
  { href: "/Nulls", title: "null"},
  { href: "/Contacts", title: "mail"},
]

const Sidebar = () => {

  return (
    <nav className='flex flex-col fixed bg-gray-800 aligh-center'>
      {navLinks.map((link) => {
        const asPath = usePathname()
        const path = `${asPath}`.split('?')[0]
        let isCurrent = (path==link.href)
        return (
          <Icon {...link} key ={link.title} className={isCurrent ? `active` : undefined}/>
        )
      }
      )}
    </nav>
  )
}

export default Sidebar