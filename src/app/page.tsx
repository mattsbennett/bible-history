import TimelineItemTina from './components/TimelineItemTina'
import s from './page.module.scss'
import { Card, CardDescription } from './components/Card'
import Header from './components/Header'
import clsx from 'clsx'
import { client } from '../../tina/__generated__/client'
import { Events } from '../../tina/__generated__/types'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default async function Home() {
  const { data: eventsData } = await client.queries.eventsConnection()
  const page = await client.queries.timelinePage({
    relativePath: 'How-we-got-our-Bible.md',
  })
  const eventsFull = eventsData.eventsConnection.edges ?? []
  const events = eventsFull.map((event) => {
    return event?.node
  })
  const pageData = page.data.timelinePage
  const titleComponent = pageData.heroHeading?.split(' ').map((word, index) => {
    const space = index === pageData.heroHeading.length - 1 ? '' : ' '

    if (word === 'Bible') {
      return (
        <span key={index} className={s.underlined}>
          {word}
          {space}
        </span>
      )
    } else {
      return (
        <span key={index}>
          {word}
          {space}
        </span>
      )
    }
  })

  if (!events) {
    return null
  }

  // We want to sort on dated, but we have to use strings because of the way
  // TinaCMS stores dates (doesn't support negative/BCE years, and because we're
  // using negative years in a string, TinaCMS doesn't sort them correctly)
  events.sort((a, b) => parseInt(a?.dated ?? '0', 10) - parseInt(b?.dated ?? '0', 10))

  return (
    <main className={s.main}>
      <Header />
      <section className={s.hero}>
        <h1>{titleComponent}</h1>
        <h2>{pageData.heroSubheading}</h2>
        <Card className={s.card}>
          <CardDescription className={s.cardDescription}>{pageData.intro}</CardDescription>
        </Card>
      </section>
      <section className={s.timeline}>
        <div className={s.timelineComponent}>
          <div className={clsx(s.timelineProgressOverlay, s.top)}></div>
          <div className={s.timelineProgress}>
            <div className={s.timelineProgressBar}></div>
          </div>
          {/* {events.map((event, index) => (
            <TimelineItem key={index} event={event} />
          ))} */}
          {events.map((event) => {
            if (!event) {
              return null
            }
            return (
              <TimelineItemTina
                key={event.id}
                event={event as Events}
                events={events as Events[]}
              />
            )
          })}
        </div>
        <div className={s.today}>
          <h1>{pageData.timelineOutroHeading}</h1>
          <TinaMarkdown content={pageData.timelineOutro} />
        </div>
      </section>
    </main>
  )
}
