'use client'

import { useEffect, useState } from 'react'
import { Switch } from './Switch'
import { useTheme } from 'next-themes'
import { Ellipsis, Moon, Sun } from 'lucide-react';

export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Switch aria-label='Toggle dark/light mode' disabled icon={<Ellipsis size={14}/>}/>
  }

  return (
      <Switch
        aria-label='Toggle dark/light mode'
        id="dark-mode"
        icon={theme === 'light' ? <Sun size={14}/> : <Moon size={14}/>}
        checked={theme === 'light'}
        className={theme === 'light' ? 'sun' : 'moon'}
        onCheckedChange={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      />
  )
}
