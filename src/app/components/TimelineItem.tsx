"use client";

import { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { Badge } from './Badge'
import { Button } from './Button'
import { getFormattedYear } from '../utils/generalUtils'
import { Event } from '../../../events'
import s from './TimelineItem.module.scss'

export default function TimelineItem({ event }: { event: Event }) {
    const [ readMore, setReadMore ] = useState(false);
    const datedYear = getFormattedYear(event.dated)
    const discoveredYear = getFormattedYear(event.discovered)
    const discovered = discoveredYear
      ? (
        <div className={s.discovered}>
            <Badge variant="outline">Discovered</Badge>
            <div>{discoveredYear}</div>
          </div>
      )
      : '';
    const dated = datedYear
      ? (
        <div className={s.timelineDateText}>
            <div className={s.dated}>
              <Badge variant="outline">Dated</Badge>
              <div>{datedYear}</div>
            </div>
          </div>
      )
      : '';
  return (
    <div className={s.timelineItem}>
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
          <h3>{event.name}</h3>
          <h3 aria-hidden className={s.clone}>
            {event.name}
          </h3>
          <div className={s.imgWrap}>
            <Image src={`/${event.image}`} fill alt={event.name} />
          </div>
          <div className={s.introWrap}>
            <p className={s.intro}>{event.detail_short}</p>
          </div>
          <div className={clsx(s.fullTextWrap, readMore ? '' : s.truncated)}>
            <Markdown>{event.detail_long}</Markdown>
            <div className={s.gradient}>
              <Button variant="secondary" className={s.readMore} data-text="Read more" onClick={() => {setReadMore(true)}}>
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
