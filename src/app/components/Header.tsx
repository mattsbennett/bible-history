'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'

import s from './Header.module.scss'
import { usePathname } from 'next/navigation'
import DarkModeSwitch from './DarkModeSwitch'
import Image from 'next/image'

const pages = {
  '/about': 'About',
  '/contact': 'Contact',
}

export default function Header() {
  const pathname = usePathname()
  const getActiveClass = (path: string) => {
    return path === pathname ? s.active : ''
  }
  return (
    <header className={s.header}>
      <div className={s.logoWrap}>
        <Link aria-label='Go to homepage' href={'/'}>
          <Image src={'/logo.svg'} width={45} height={45} alt="Logo" />
        </Link>
      </div>
      <div className={s.navigation}>
        {Object.entries(pages).map(([path, name]) => (
          <Link key={path} href={path} className={getActiveClass(path)}>
            {name}
          </Link>
        ))}
        <DarkModeSwitch />
      </div>
    </header>
  )
}
