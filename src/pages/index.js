//import Head from 'next/head'     // I change/move head to _document.js
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to your Inventory
    </h1>
    </div>

  )
}
//<main className={styles.main}></main>