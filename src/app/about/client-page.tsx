'use client'

import { useTina } from 'tinacms/dist/react'
import Header from '../components/Header'
import styles from './page.module.scss'
import { OtherPagesQuery } from '../../../tina/__generated__/types'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface AboutProps {
  query: string
  variables: {
    relativePath: string
  }
  data: OtherPagesQuery
}

export default function About(props: AboutProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data.otherPages,
  })

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.about}>
        <h1 className={styles.heading}>{data.title}</h1>
        <TinaMarkdown content={data.body} />
      </section>
    </main>
  )
}
