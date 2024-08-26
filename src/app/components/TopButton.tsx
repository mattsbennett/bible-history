'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { Button } from './Button'
import useDetectScroll, { Axis, Direction } from '@smakss/react-scroll-direction'
import clsx from 'clsx'

import s from './TopButton.module.scss'

export default function TopButton() {
  const { scrollDir, scrollPosition } = useDetectScroll({ thr: 30, axis: Axis.Y })
  const [isVisible, setIsVisible] = useState(false)
  const handleClick = () => {
    window.scrollTo({ top: 0 })
    window.location.hash = ''
  }

  useEffect(() => {
    if (scrollDir === Direction.Still) {
      return
    }

    if (scrollDir === Direction.Up && scrollPosition.top > window.innerHeight * 1.5) {
      setIsVisible(true)
      return
    }

    if (scrollDir === Direction.Down || scrollPosition.top < window.innerHeight * 1.5) {
      setIsVisible(false)
      return
    }
  }, [scrollDir, scrollPosition, isVisible])

  return (
    <Button
      aria-label="Go to top of page"
      variant="outline"
      className={clsx(s.button, isVisible ? s.isVisible : '')}
      onClick={handleClick}
    >
      <ChevronUp size={21} />
    </Button>
  )
}
