import clsx from 'clsx'
import Image from 'next/image'
import Markdown from 'react-markdown'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

import TimelineItem from './components/TimelineItem'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { events } from './events'
import { getFormattedYear } from './utils/generalUtils'
import s from './page.module.scss'
import { Switch } from './components/Switch'
import DarkModeSwitch from './components/DarkModeSwitch'
import { Suspense } from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardContent, CardDescription } from './components/Card'

export default function Home() {
  return (
    <main className={s.main}>
      <header className={s.header}>
        <div className={s.logoWrap}><Link href={'/'}><Image src={'/logo.svg'} width={45} height={45} alt='Logo'/></Link></div>
        <div className={s.navigation}>
          <Link href='/about'>About</Link>
          <Link href='/about'>Contact</Link>
          <DarkModeSwitch />
        </div>
      </header>
      <section className={s.hero}>
        <h1>How we got our <span className={s.underlined}>Bible</span></h1>
        <h2>A journey through time</h2>
        <Card className={s.card}><CardDescription className={s.cardDescription}>This site is dedicated to the miracle of the Bible. We will endeavour to provide the reader with a sketch of the major events that have shaped the history of the Bible. We will review some of the processes, people and places of Bible history.</CardDescription></Card>
      </section>
      <section className={s.timeline}>
        <div className={s.timelineComponent}>
          <div className={s.timelineProgressOverlay}></div>
          <div className={s.timelineProgress}>
            <div className={s.timelineProgressBar}></div>
          </div>
          {events.map((event, index) => (
            <TimelineItem key={index} event={event} />
          ))}
          <div className={s.overlayFadeBottom}></div>
          <div className={s.overlayFadeTop}></div>
        </div>
      </section>
    </main>
  )
}
