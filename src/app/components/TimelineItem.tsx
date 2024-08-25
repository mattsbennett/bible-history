'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { Badge } from './Badge'
import { Button } from './Button'
import { getFormattedYear } from '../utils/generalUtils'
import { Event } from '../events'
import s from './TimelineItem.module.scss'
import Link from 'next/link'
import slugify from '@sindresorhus/slugify'
import { Hash } from 'lucide-react'

export default function TimelineItem({ event }: { event: Event }) {
  const [isMounted, setMounted] = useState(false)
  const [readMore, setReadMore] = useState(false)
  const { ref, inView, entry } = useInView({ rootMargin: `-49.5% 0% -49.5% 0%` })
  const datedYear = getFormattedYear(event.dated)
  const discoveredYear = getFormattedYear(event.discovered)
  const discovered = discoveredYear ? (
    <div className={s.discovered}>
      <Badge variant="outline">Discovered</Badge>
      <div>{discoveredYear}</div>
    </div>
  ) : (
    ''
  )
  const dated = datedYear ? (
    <div className={s.timelineDateText}>
      <div className={s.dated}>
        <Badge variant="outline">Dated</Badge>
        <div>{datedYear}</div>
      </div>
    </div>
  ) : (
    ''
  )

  useEffect(() => {
    if (isMounted) {
      const element = document.getElementById(window.location.hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      setMounted(true)
    }
  }, [isMounted])

  return (
    <div
      className={clsx(
        s.timelineItem,
        inView || (entry?.boundingClientRect?.top ?? -1) < 0 ? s.opaque : '',
      )}
      ref={ref}
    >
      <div className={s.timelineLeft}>
        {discovered}
        {dated}
      </div>
      <div className={s.timelineCentre}>
        <div className={s.timelineCircle}></div>
      </div>
      <div className={s.timelineRight}>
        <div className={s.timelineText}>
          <div className={s.underlineOverlay}></div>
          <Link scroll href={`#${slugify(event.name)}`} className={s.headingAnchor}>
            <h3>
              <Hash size={28} className={s.hash} />
              {event.name}
            </h3>
          </Link>
          <Link scroll href={`#${slugify(event.name)}`} className={s.headingAnchor}>
            <h3 id={slugify(event.name)} aria-hidden className={s.clone}>
              <Hash size={28} className={s.hash} />
              {event.name}
            </h3>
          </Link>
          <div className={s.narrowDate}>
            {discovered}
            {dated}
          </div>
          <div className={s.imgWrap}>
            <Image src={`/${event.image}`} fill alt={event.name} />
          </div>
          <div className={s.introWrap}>
            <p className={s.intro}>{event.detail_short}</p>
          </div>
          <div className={clsx(s.fullTextWrap, readMore ? '' : s.truncated)}>
            <Markdown>{event.detail_long}</Markdown>
            <div className={s.gradient}>
              <Button
                variant="secondary"
                className={s.readMore}
                data-text="Read more"
                onClick={() => {
                  setReadMore(true)
                }}
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
