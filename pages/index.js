import Head from 'next/head'
import Mainlayout from '../Components/Layout/mainlayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Mainlayout>
        hello next
        </Mainlayout>
      </main>

    </div>
  )
}
