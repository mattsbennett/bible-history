import Header from '../components/Header'
import styles from './page.module.scss'

export default function About() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.about}>
        <h1 className={styles.heading}>Victoria Christadelphians</h1>
        <p>
          We hold to beliefs which reflect the simple teaching of Jesus Christ and his Apostles. Our
          rule of life is to follow in the footsteps of Jesus and his disciples. Our hopes are
          centered upon the return of Jesus, when he will bring everlasting life to the faithful and
          set up on earth the long-promised Kingdom of God, which will be the restored Kingdom of
          Israel under divine leadership.
        </p>
      </section>
    </main>
  )
}
