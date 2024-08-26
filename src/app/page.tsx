import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

import TimelineItem from './components/TimelineItem'
import { events } from './events'
import s from './page.module.scss'
import { Card, CardDescription } from './components/Card'
import Header from './components/Header'
import clsx from 'clsx'

export default function Home() {
  return (
    <main className={s.main}>
      <Header />
      <section className={s.hero}>
        <h1>
          How we got our <span className={s.underlined}>Bible</span>
        </h1>
        <h2>A journey through time</h2>
        <Card className={s.card}>
          <CardDescription className={s.cardDescription}>
            This site is dedicated to the miracle of the Bible. We will endeavour to provide the
            reader with a sketch of the major events that have shaped the history of the Bible. We
            will review some of the processes, people and places of Bible history.
          </CardDescription>
        </Card>
      </section>
      <section className={s.timeline}>
        <div className={s.timelineComponent}>
          <div className={clsx(s.timelineProgressOverlay, s.top)}></div>
          <div className={s.timelineProgress}>
            <div className={s.timelineProgressBar}></div>
          </div>
          {events.map((event, index) => (
            <TimelineItem key={index} event={event} />
          ))}
          <div className={clsx(s.timelineProgressOverlay, s.bottom)}></div>
        </div>
        <div className={s.today}>
          <h1>Today</h1>
          <p>
            Today, the entirety of the Bible has been translated into 736 languages, making it
            available to 80% of the world&rsquo;s population. The Bible is the most translated book
            in the world, and the most widely distributed. At least some books of the Bible have
            been translated into 3658 languages, making it available, in some part, to up to 97% of
            the world&rsquo;s population.
          </p>
        </div>
      </section>
    </main>
  )
}
