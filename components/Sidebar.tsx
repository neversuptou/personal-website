"use client"
import React from 'react'
import Icon from './icons/Icon'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: "/", svgIcon: "home" },
  { href: "/About", svgIcon: "user"},
  { href: "/MyProject", svgIcon: "project"},
  { href: "/nulls", svgIcon: "null"},
  { href: "/mail", svgIcon: "mail"},
]

const Sidebar = () => {

  return (
    <nav className='flex flex-col fixed bg-gray-800 aligh-center'>
      {navLinks.map((link) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const asPath = usePathname()
        const path = `${asPath}`.split('?')[0]
        const isActive = path
        let isCurrent = (path==link.href)
        return (
          <Icon href={link.href} key={link.svgIcon} title={link.svgIcon} className={isCurrent ? `active` : undefined}/>
        )
      }
      )}
    </nav>
  )
}

export default Sidebar