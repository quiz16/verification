import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { validate } from '../services/validatecode'

export default function Success() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.success}>
          Valid code!
        </h1>
      </main>
      <footer className={styles.footer}>
          Reynald Jo Armonia
      </footer>
    </div>
  )
}
