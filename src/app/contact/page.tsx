import Header from '../components/Header'
import styles from './page.module.scss'

export default function About() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.about}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p>
          Form here
        </p>
      </section>
    </main>
  )
}
