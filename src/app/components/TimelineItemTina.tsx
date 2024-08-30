'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'
import Image from 'next/image'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Badge } from './Badge'
import { Button } from './Button'
import { getFormattedYear, getImagePath } from '../utils/generalUtils'
import s from './TimelineItemTina.module.scss'
import Link from 'next/link'
import slugify from '@sindresorhus/slugify'
import { Hash } from 'lucide-react'
import NavSelectTina from './NavSelectTina'
import { Events } from '../../../tina/__generated__/types'
import Lightbox, { SlideImage } from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import LightboxImage from './LightBoxImage'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

export default function TimelineItemTina({ event, events }: { event: Events; events: Events[] }) {
  const [isMounted, setMounted] = useState(false)
  const [readMore, setReadMore] = useState(false)
  const [open, setOpen] = useState(false)
  const { ref, inView, entry } = useInView({ rootMargin: `-49.5% 0% -49.5% 0%` })
  const lightboxSlides: SlideImage[] = [
    {
      src: getImagePath(event.coverImage ?? ''),
      alt: event.title,
      title: event.title,
    },
  ]
  const datedYear = getFormattedYear(new Date(parseInt(event.dated, 10), 1))
  const discoveredYear = event.discovered
    ? getFormattedYear(new Date(parseInt(event.discovered, 10), 1))
    : null
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
        element.scrollIntoView()
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
        <div id={slugify(event.title)} className={s.timelineText}>
          <div className={s.underlineOverlay}></div>
          <div className={s.itemHeader}>
            {inView ? <NavSelectTina event={event} events={events} /> : null}
            <Link
              aria-label={`Go to top of ${event.title} section`}
              href={`#${slugify(event.title)}`}
              className={s.headingAnchor}
            >
              <h3>
                {event.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className={s.lastWordWithIcon}>
                  {event.title.split(' ').slice(-1)} <Hash size={28} className={s.hash} />
                </span>
              </h3>
            </Link>
          </div>
          <div className={s.narrowDate}>
            {discovered}
            {dated}
          </div>
          <div className={s.imgWrap}>
            <Image
              className={s.coverImage}
              src={getImagePath(event.coverImage ?? '')}
              fill
              alt={event.title}
              onClick={() => {
                setOpen(true)
              }}
            />
          </div>
          <div className={s.introWrap}>
            <p className={s.intro}>{event.intro}</p>
          </div>
          <div className={clsx(s.fullTextWrap, readMore ? '' : s.truncated)}>
            <TinaMarkdown content={event.body} />
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
      <Lightbox
        plugins={[Captions]}
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: getImagePath(event.coverImage ?? ''),
            alt: event.title,
            title: event.title,
            description: (
              <div className={s.lightboxDescription}>
                {dated}
                {discovered}
              </div>
            ),
          },
        ]}
        render={{
          slide: LightboxImage,
          buttonNext: () => {
            if (lightboxSlides.length < 2) {
              return null
            }
          },
          buttonPrev: () => {
            if (lightboxSlides.length < 2) {
              return null
            }
          },
        }}
      />
    </div>
  )
}
