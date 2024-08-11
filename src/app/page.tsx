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
import { events } from '../../events'
import { getFormattedYear } from './utils/generalUtils'
import s from './page.module.scss'

export default function Home() {
  return (
    <main className={s.main}>
      <section className={s.hero}>
        <h1>How we got our Bible</h1>
        <h2>A journey through time</h2>
      </section>
      <section className={s.timeline}>
        <div className={s.timelineComponent}>
          <div className={s.timelineProgressOverlay}></div>
          <div className={s.timelineProgress}>
            <div className={s.timelineProgressBar}></div>
          </div>
          {events.map((event, index) => (<TimelineItem key={index} event={event} />))}
          <div className={s.overlayFadeBottom}></div>
          <div className={s.overlayFadeTop}></div>
        </div>
      </section>
    </main>
  )
}
