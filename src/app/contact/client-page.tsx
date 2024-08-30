'use client'

import { useTina } from 'tinacms/dist/react'
import { OtherPagesQuery } from '../../../tina/__generated__/types'
import Header from '../components/Header'
import styles from './page.module.scss'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface ContactProps {
  query: string
  variables: {
    relativePath: string
  }
  data: OtherPagesQuery
}

export default function Contact(props: ContactProps) {
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
